# Versioning test

Package versioning using GitHub actions.

[View the package](https://unpkg.com/wmn-versioning-test)

| Goal                                                    | Notes                                                                                                                                                                                                                                   |        Done        |
| ------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :----------------: |
| Publish `build/` direcetory to npm registy              | Package is available [here](https://unpkg.com/wmn-versioning-test).                                                                                                                                                                     | :white_check_mark: |
| Automatically increment version number via PR           | Version number is incremented via the [semantic-release](https://github.com/semantic-release/semantic-release) action. `master` is updated **after** build and publish via final commit.                                                | :white_check_mark: |
| Version number accessible in nunjucks at **build time** | Correct version number currently not accessible as netlify builds when a new commit is pushed (not after package has been published)                                                                                                    | :white_check_mark: |
| Publish new release / version when PR is merged         | Publishes package if a semantic commit is pushed to `master` or when a semantically named PR is merged. PR titles are checked a [PR linting action](https://github.com/gldgrnt/wmnds-versioning-test/actions).                          | :white_check_mark: |
| Automatically update changelog                          | Automatically done with `semantic release`. When squashing and merging PR, the changelog will include any semantic commit from the branch that follows the [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/) spec. | :white_check_mark: |

Docs edit 1
Docs edit 2
