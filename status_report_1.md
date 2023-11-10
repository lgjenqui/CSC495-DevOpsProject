**Accomplishments:**\
Sam:
- Set up GitHub Actions runner on DigitalOcean server
- Created an EsLint Linter for the Coffee Project's Javascript files
- Created a GitHub actions pipeline that runs the linter
- Fixed the current Coffee Project so it passes the linter rules
- GitHub Commit: (https://github.ncsu.edu/CSC519-lgjenqui-jjohn6-sjstone3/CSC519-Project/commit/73adcf93203f41448d39580086cb9375575700)


Luke:

Jubitta:
- Created a Github action for running Chai unit test.
- Created a job in the Github action to generate the code coverage for statements, branches, functions and lines. The threshold coverage set is to 75.
- Modified the current Coffee Project so that the server is started only when the script is run directly, not when imported as a module for unit testing.
- Github Commit: (https://github.ncsu.edu/CSC519-lgjenqui-jjohn6-sjstone3/CSC519-Project/commit/4f2f3fd7fd2a315978429d5ac48389d826e14365)
- Github PR: https://github.ncsu.edu/CSC519-lgjenqui-jjohn6-sjstone3/CSC519-Project/pull/7

**Next Steps:**
- Create steps in pipeline to trigger npm audit after opening a PR to release
- Create steps in pipeline to trigger canary deployment after release engineer approves PR into release
- Create Dockerfile to run Ansible
- Create Ansible playbook that configures Kubernetes
- Create Ansible playbook for Canary Deployment
- Create steps in pipeline to trigger final deployment after release engineer approves PR into main
- Create Ansible playbook for final deployment


**Retrospectives:**
- What worked:

- What didn't work:

    Codecov is used to generate the coverage report. The Codecov generates the coverage report and checks the thresold coverage as 75%, which can be seen   in the Actions tab under the GitHub actions job result. However, there is trouble in uploading the coverage to Codecov.  Only if the report is uploaded, the coverage report can be seen on the PR. The Codecov is getting connected to the personal GitHub but unable to find a way to link the Codecov to Ncsu GitHub(Github enterprise).
 
- What to do differently:

  To solve the issue with Codecov report not being uploaded, planning to use a different tool to generate coverage report like JSCover or need to figure out a better work around to address the issue.
