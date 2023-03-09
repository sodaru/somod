```YAML
title: Namespaces in SOMOD Module | SOMOD
meta:
  description:
    Resolve conflicting resources from multiple dependency modules using namespaces.
```

# Namespaces

---

A Page or an API Endpoint must be unique when deploying an application. During development, individual modules are not aware of other modules which might use the same Page or API endpoint.

SOMOD Namespace is a group of resources/identities/names that are unique during deployment.

SOMOD has the following namespaces

- UI Page
- UI Public Asset
- UI Env Config
- UI Public Runtime Config
- UI Server Runtime Config
- Serverless Http Api and Rest Api Routes
- Serverless Outputs
- Parameter
- Parameter Schema
- Parameter Group

## Resolving Conflicts in the Namespace

A dependent module can redefine the namespace to resolve the conflict between the dependency modules.

In the following module dependency tree

    ```bash

                      ----------
                    | Module A |
                    | page1    |
                      ----------
                        /    \
                      /      \
              ----------      ----------
            | Module B |    | Module C |
            | page1    |    | page1    |
            | page2    |    |          |
              ----------      ----------
              /   \
              /     \
    ----------      ----------
    | Module D |    | Module E |
    | page2    |    | page2    |
    ----------      ----------

    ```

module A resolves page1  
module B resolves page2

The namespace resolving mechanism helps to work with multiple modules individually, and then integrate them later.

Until now we have understood the project structure and main concepts in the SOMOD.

In the [Next Chapter](/reference/main-concepts/tsconfig.somod.json), let us understand the SOMOD's typescript configurations which help to generate the build from the source.
