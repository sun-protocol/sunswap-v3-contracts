## Summary

Describe the problem and resulting behavior. For a release, specify `vX.Y.Z`.

## Release provenance and compatibility

Identify the fixed source version using public-safe references. Record confidential
internal links and full source provenance in the internal release record.
Explain intentional GitHub differences, ABI/API impact, and companion release order.
For GitHub-only documentation, state that no runtime release is included.

## Validation

Record exact commands, results, artifact locations, and checks that could not run.
For a release, verify reproducibility and relevant integration/regression coverage.

## Review and release checklist

- [ ] The target branch follows CONTRIBUTING.md.
- [ ] Only approved, public-safe content is included; intentional differences are documented.
- [ ] Relevant checks pass and limitations are disclosed.
- [ ] Two non-author reviewers approve the final revision.
- [ ] All review conversations and blocking feedback are resolved.
- [ ] The merger is authorized for the target branch: `contract-dev` or `contract-maintain` for `release/*`; only `contract-maintain` for `main` or retained `develop`.
- [ ] Tags, GitHub releases, deployments, and package publications are tracked separately, if applicable.
