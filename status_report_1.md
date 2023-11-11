**Accomplishments:**\
Sam:
- Set up GitHub Actions runner on DigitalOcean server
- Created an EsLint Linter for the Coffee Project's Javascript files
- Created a GitHub actions pipeline that runs the linter
- Fixed the current Coffee Project so it passes the linter rules
- GitHub Commit: (https://github.ncsu.edu/CSC519-lgjenqui-jjohn6-sjstone3/CSC519-Project/commit/af72697224bb4782fcd0ddddc1f876124afb33eb)
- GitHub PR: (https://github.ncsu.edu/CSC519-lgjenqui-jjohn6-sjstone3/CSC519-Project/pull/24/files)

Luke:
- Set up overarching pipeline structure, ensuring that they run at the proper times, including 
    1. The feature to development pipeline when a PR is opened,
    2. The common vulnerability job when a feature to development or development to release PR is opened,
    3. The build and canary release workflow when a release PR is merged, and 
    4. the final deploy workflow to complete the deployment after a PR is merged into main.
- Created the Dockerfile to build the image for our release strategies. 
- Created and tested the branch protection rules to prevent pushing or merging incorrectly without sufficient permissions or approval. 
- GitHub Commit: (https://github.ncsu.edu/CSC519-lgjenqui-jjohn6-sjstone3/CSC519-Project/commit/e38c40c2f178581dc4e00997af332d9c13585423)
- GitHub PR: (https://github.ncsu.edu/CSC519-lgjenqui-jjohn6-sjstone3/CSC519-Project/pull/22)



Jubitta:
- Created a Github action for running Chai unit test.
- Created a job in the Github action to generate the code coverage for statements, branches, functions and lines. The threshold coverage set is to 75.
- Modified the current Coffee Project so that the server is started only when the script is run directly, not when imported as a module for unit testing.
- Github Commit: (https://github.ncsu.edu/CSC519-lgjenqui-jjohn6-sjstone3/CSC519-Project/commit/4f2f3fd7fd2a315978429d5ac48389d826e14365)
- Github PR: https://github.ncsu.edu/CSC519-lgjenqui-jjohn6-sjstone3/CSC519-Project/pull/7

**Next Steps:**
- Create steps in pipeline to trigger npm audit after opening a PR to release - Luke
- Create steps in pipeline to trigger canary deployment after release engineer approves PR into release - Sam
- Create Dockerfile to run Ansible - Sam
- Create Ansible playbook that configures Kubernetes - Sam
- Create Ansible playbook for Canary Deployment - Luke
- Create steps in pipeline to trigger final deployment after release engineer approves PR into main - Jubitta
- Create Ansible playbook for final deployment - Jubitta


**Retrospectives:**
- What worked:
    - The team was able to get most of the tasks done and they were divided relatively evenly
    - The beginning parts of the pipeline are set up and just need to be combined together

- What didn't work:
    - We weren't able to combine all of our work together by the end of the sprint.
    - Codecov is used to generate the coverage report. The Codecov generates the coverage report and checks the thresold coverage as 75%, which can be seen   in the Actions tab under the GitHub actions job result. However, there is trouble in uploading the coverage to Codecov.  Only if the report is uploaded, the coverage report can be seen on the PR. The Codecov is getting connected to the personal GitHub but unable to find a way to link the Codecov to Ncsu GitHub(Github enterprise).
 
- What to do differently:
    - We should allocate more time to integrate all of our work together.
    - To solve the issue with Codecov report not being uploaded, planning to use a different tool to generate coverage report like JSCover or need to figure out a better work around to address the issue.
