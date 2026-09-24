# Contributing

This guide describes the GitHub release workflow for SunSwap V3 Contracts.

## Development and release responsibilities

GitLab is the primary development and integration platform. Complete routine feature,
fix, review, and release validation there. GitHub receives a fixed version only after
it has merged into GitLab's stable branch (`main` or `master`). GitHub is the public
release and distribution surface; it is not a second day-to-day integration branch.

Community contributors can open an issue or PR here. Maintainers coordinate functional
changes with GitLab before including them in a GitHub release. Do not ask contributors
to disclose private repository contents or obtain internal access to report an issue.
GitHub-specific documentation and release metadata can use focused PRs into `main`;
functional changes must retain an auditable GitLab release origin.

## Branch model

The intended default branch is `main`. An existing `develop` branch is retained for
history, not used for new development or release integration, and must not be deleted
or rewritten as part of this transition.

| Branch | Purpose | Pull request target |
| --- | --- | --- |
| `main` | Reviewed public release source and release documentation | — |
| `release/vX.Y.Z` | Staging and verification of a fixed GitLab release | `main` |
| `sync/<description>` | Reviewed updates to an existing release branch | `release/vX.Y.Z` |
| `docs/<description>` | GitHub-specific documentation and metadata | `main` |
| `develop` | Retained historical branch | No routine updates |

Create a new release branch from GitHub `main`, then import the selected GitLab stable
revision and open its release PR. Once protected, additional release-branch updates
use a `sync/*` PR. Branch creation is limited to the designated release maintainers.
Do not overwrite an existing release branch or retarget an existing PR without
reviewing its purpose and coordinating with its author.

## Review and merge policy

The following policy applies to `main`, `release/*`, and any retained `develop` branch:

- Changes must go through a PR; direct updates, force pushes, and branch deletion are prohibited.
- At least **two reviewers other than the PR author** must approve the final changes.
- Code-changing commits invalidate earlier approvals and require renewed review.
- Resolve all review conversations and blocking feedback before merging.
- Only the designated release-maintainer team may merge protected-branch PRs.
- Merge authority does not waive approvals, validation, or review of the final revision.

These are the target repository rules. This document and PR checkboxes do not enforce
GitHub permissions. An administrator must configure the matching protections and
release-maintainer team; until then, the merger must verify these requirements manually.
Do not assume that the current settings already implement every requirement.

Prefer merge commits for release synchronization so release lineage remains traceable.
Do not require linear history for a workflow that uses release merge commits. Squash
may be used for standalone documentation PRs when no shared release history is lost.
No new CI workflow or required status check is introduced by this policy. Review
existing workflow results and disclose failures; local validation remains required.

## Synchronize a release

1. Select the fixed GitLab stable commit after its release review and validation.
   Record the full source SHA, version, corresponding dependency revisions, and compatibility
   requirements in the internal release record.
2. Compare that source with GitHub `main` and any existing release PRs. GitHub-specific
   package metadata, dependency locations, documentation, and workflows may intentionally
   differ. Reconcile these differences explicitly; do not mirror or force-push blindly.
3. Import only the approved release content. Do not publish internal CI/deployment
   configuration, secrets, private data, or unrelated development history. If commit
   history cannot be published, use a reviewed content import and retain internal provenance.
4. Open `release/vX.Y.Z` → `main`. Include a public-safe scope summary, source-version
   provenance, validation results, intentional differences, and companion release order.
   Keep confidential source links and evidence in the internal release record.
5. Complete the validation below and obtain two non-author approvals. An authorized
   release maintainer merges the final reviewed revision. Revalidate if the final
   integration changes the tested behavior.
6. Create the immutable `vX.Y.Z` tag on the validated GitHub `main` commit and publish
   GitHub release notes with compatible versions and artifacts. Record both GitLab
   source SHA and GitHub release SHA in the internal release record; they may differ.
7. Track deployments or package publications separately. Return any functional fix
   discovered during GitHub review to GitLab and produce an updated fixed release source.

Never move or overwrite a release tag. Use a new version for corrections. Do not
merge unrelated open PRs merely to make the repositories look identical.

## Local validation

The GitHub checkout uses Hardhat/Sun Studio. Its existing workflow uses pnpm 10,
Foundry, and Vyper 0.2.8. Inspect lifecycle scripts and record the exact Node.js,
package-manager, compiler, and tool versions used.

```sh
pnpm install
pnpm run compile
git diff --check
```

Run targeted regression validation for changed behavior. The presence of a `test`
script is not evidence of an effective test suite; record the actual tests executed
and coverage gaps. The existing `ubuntu test` workflow currently runs compilation,
not a test command. Preserve existing workflow behavior unless changed in a separate,
reviewed PR. Do not claim GitLab's build procedure validates this different checkout.

For behavior changes, cover exact-input and exact-output boundaries, rounding,
insufficient liquidity, recipient/settlement handling, route encoding, and compatible
contract and SDK revisions as applicable. Security fixes should reproduce the failure
and demonstrate that valid operations still succeed. Documentation-only changes need
link/content review and `git diff --check`, not a full runtime test run.

## Pull request format

Use `type(scope): description`, for example:

```text
docs(release): clarify public release verification
fix(routing): validate exact-output settlement
```

Describe the problem and resulting behavior, the source version, intentional GitHub
adaptations, ABI/API or consumer impact, validation commands and results, companion
releases, and any uncompleted checks. Never mark a review or test checkbox complete
without evidence. Prefer one focused change per PR.

## Artifacts and publication

For contracts, archive ABI, creation/runtime bytecode, compiler and optimizer settings,
dependency revisions, linking and constructor arguments, checksums, test results, and
release notes. Track network deployments, addresses, transaction hashes, source
verification, and ownership separately. A source release does not update deployed contracts.

Never commit private keys, seed phrases, access tokens, or populated environment files.
Use separately authorized release credentials and verify the destination before publishing.

## Urgent fixes

Fix the affected version through GitLab's hotfix process first. Once merged into the
GitLab stable branch, synchronize the fixed patch release through a GitHub release PR
with the same approval and validation requirements. Do not quietly create a second
source of truth by applying functional fixes only on GitHub. Track any deployment,
consumer upgrade, and return of the fix to GitLab's active branches separately.

## Reporting security issues

Report suspected vulnerabilities privately to the maintainers through an established
security contact channel. Do not post exploit details, keys, or private deployment
information in public issues or PRs. Include affected versions, impact, and a minimal
reproduction through the private channel.
