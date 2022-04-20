import { isEqual } from "lodash";
import {
  KeywordSLPExtend,
  KeywordSLPOutput,
  KeywordSLPRef,
  ServerlessTemplate,
  SLPRef,
  SLPTemplate
} from "../types";
import {
  getSAMResourceLogicalId,
  getSLPKeyword,
  replaceSLPKeyword
} from "../utils";

export const validate = (
  slpTemplate: SLPTemplate,
  serverlessTemplate: ServerlessTemplate
): Error[] => {
  const errors: Error[] = [];

  slpTemplate.keywordPaths[KeywordSLPRef].forEach(refKeywordPath => {
    const ref = getSLPKeyword<SLPRef>(slpTemplate, refKeywordPath)[
      KeywordSLPRef
    ];
    if (!ref.module) {
      ref.module = slpTemplate.module;
    }
    const referencedSLPTemplate =
      ref.module == slpTemplate.module
        ? slpTemplate
        : serverlessTemplate[ref.module];

    const getError = (message: string) =>
      new Error(
        `Referenced module resource {${ref.module}, ${
          ref.resource
        }} ${message}. Referenced in "${
          slpTemplate.module
        }" at "Resources/${refKeywordPath.join("/")}"`
      );

    if (!referencedSLPTemplate?.Resources[ref.resource]) {
      errors.push(getError("not found"));
    } else if (
      referencedSLPTemplate.Resources[ref.resource][KeywordSLPExtend]
    ) {
      errors.push(getError(`must not have ${KeywordSLPExtend}`));
    } else if (
      !referencedSLPTemplate.Resources[ref.resource][KeywordSLPOutput]
    ) {
      errors.push(getError(`does not have ${KeywordSLPOutput}`));
    } else if (ref.attribute) {
      if (
        !referencedSLPTemplate.Resources[ref.resource][
          KeywordSLPOutput
        ].attributes.includes(ref.attribute)
      ) {
        errors.push(
          getError(
            `does not have attribute ${ref.attribute} in ${KeywordSLPOutput}`
          )
        );
      }
    } else {
      if (
        !referencedSLPTemplate.Resources[ref.resource][KeywordSLPOutput].default
      ) {
        errors.push(
          getError(`does not have default set to true in ${KeywordSLPOutput}`)
        );
      }
    }
  });

  return errors;
};

/**
 * calculates SAMResourceLogicalId or attribute value and replaces SLP::Ref
 * attribute value is in accordance with aws resouce Fn::GetAtt values
 * @param serverlessTemplate
 */
export const apply = (serverlessTemplate: ServerlessTemplate) => {
  Object.values(serverlessTemplate).forEach(slpTemplate => {
    slpTemplate.keywordPaths[KeywordSLPRef].forEach(refPath => {
      const ref = getSLPKeyword<SLPRef>(slpTemplate, refPath)[KeywordSLPRef];
      const resourceId = getSAMResourceLogicalId(
        ref.module || slpTemplate.module,
        ref.resource
      );
      const refValue = ref.attribute
        ? { "Fn::GetAtt": [resourceId, ref.attribute] }
        : { Ref: resourceId };
      replaceSLPKeyword(slpTemplate, refPath, refValue);
    });
  });
};

/**
 * returns Keyword paths matching the passed SLPRef type from all the template.yml's
 * @param serverlessTemplate : Group of template.yaml, main template.yml and dependent template.yaml's
 * @param slpRef
 */
export const findReferences = (
  serverlessTemplate: ServerlessTemplate,
  slpRef: SLPRef["SLP::Ref"]
): Record<string, string[][]> => {
  const references: Record<string, string[][]> = {};

  Object.values(serverlessTemplate).forEach(slpTemplate => {
    slpTemplate.keywordPaths[KeywordSLPRef].forEach(refPath => {
      const ref = getSLPKeyword<SLPRef>(slpTemplate, refPath)[KeywordSLPRef];
      if (isEqual(ref, slpRef)) {
        if (!references[slpTemplate.module]) {
          references[slpTemplate.module] = [];
        }
        references[slpTemplate.module].push(refPath);
      }
    });
  });

  return references;
};
