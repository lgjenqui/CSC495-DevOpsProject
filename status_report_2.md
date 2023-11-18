**Accomplishments:**

Sam:
 - Created 4 Ansible playbooks to configure Kubernetes on a master, and 2 worker nodes that were hosted on DigitalOcean. I spend most of the week on this and after a lot of trouble shooting I wasn't able to get the worker nodes to run and decided to do a different approach. (Commit with some of the playbooks I made: https://github.ncsu.edu/CSC519-lgjenqui-jjohn6-sjstone3/CSC519-Project/commit/41edc8d8873c2028dcfeb80fc7a405b310b6799f)
 - Instead I decided to use Kubespray, which is an open source tool that uses Ansible to configure Kubernetes. I made a Dockerfile to configure the settings. Then, I made GitHub actions steps to build the Dockefile and run the Ansible playbook. I'm running into issues with the SSH token to run the Ansible playbooks. I plan to go to office hours next week to get assitance.
 
Luke:
- This week I created two security-related GitHub Actions: 
  1. A node vulnerability scanning tool that ensures no high vulnerabilities exist in our project. 
  2. A credential scanning tool that scans all of the work commits pushed to discover any active credentials that may have been accidentally committed. 
  
  The node vulnerability scanning tool will scan our project for any packages that may have major vulnerabilities. I implemented this in a workflow that will run whenever a pull request is opened into our dev branch or a release branch. I implemented it to run against the release branch in order to ensure that we always keep our users on a safe version when deploying in case any vulnerabilities have been identified since a developer merged a new feature change into the development branch. 

  The credential scanning tool is a new addition to our pipeline that we were initially not anticipating. I decided to implement this additional step for our team's project this week because any leaked credentials could have disastrous effects for the users or the company. In particular, I chose to use TruffleHog for this credential scanning because I was able to ensure that all commits are scanned. Normally, a reviewer will not review each individual working commit in a PR, meaning that the credentials could have been committed and removed without appearing in the PR. With TruffleHog, I implemented the ability to scan all commits that the developer pushed, ensuring that any transient commits still containing the credentials are removed or invalidated before any merges can be completed. In addition to implementing this action on pull request creations, I also enabled it on any pushed commits to the repository. This is to ensure that any potential credential spills are taken care of with appropriate speed and warning instead of waiting for a developer to create a pull request. With potential credential leaks, time until the credential is revoked is most important, so I wanted to ensure that any developers immediately receive an email warning them of their mistake. 

- I also began implementing our Ansible playbook to complete the Kubernetes Canary deployment. Although some of this development relies on the rest of the Kubernetes orchestration, this will eventually allow us to deploy a new image to a small percentage of our users to ensure that the new version is properly functioning before all of our users begin using it. If there are any issues, we will be able to have a more controlled reaction that enables us to keep most of our users on a functioning version. If the deployment is successful, the release engineer will be able to continue the release and scale down the old version as the new version is scaled up. This creates a more seamless deployment and provides a way to verify correct behavior before affecting all of the users. 

- Commit for NPM audit action: https://github.ncsu.edu/CSC519-lgjenqui-jjohn6-sjstone3/CSC519-Project/commit/d597e704d3430f3bb2796a00daa33c1ea5269bb2
- PR for TruffleHog credential scanning action: https://github.ncsu.edu/CSC519-lgjenqui-jjohn6-sjstone3/CSC519-Project/pull/31


Jubitta:
- Added a github action for the health check of the app:
  - This github action would build the docker conatiner image for the app and run the container image. Then checks if the app is up and running on the port specified.
  - This action would run on the feature and dev branch on push and on the pr to dev.
  - Major commit: https://github.ncsu.edu/CSC519-lgjenqui-jjohn6-sjstone3/CSC519-Project/commit/bc66af4f31cc62a0fc15ae13a60429685e87e454
  - PR for the change: https://github.ncsu.edu/CSC519-lgjenqui-jjohn6-sjstone3/CSC519-Project/pull/30

- Reviewed PRs of Luke and Sam.
- Most of the things assigned to me is dependent on the Kubernetes setup for canary release. Hence, more work and effort is reserved for the final submission.
 
**Next Steps:**
- Work on getting Github Actions to run Kubespray docker (Sam)
  - This will ensure that our initial deployments and setup are able to run without any issues. 
  - This will also further enable our full testing of the pipelines as we begin to consider further canary deployments, rollbacks, and complete deployment strategies.
- Create steps in pipeline to trigger final deployment after release engineer approves PR into main (Jubitta)
- Create Ansible playbook for final deployment (Jubitta)
  - This will be orchestrated using Kubernetes and ensure that our release process completes the release smoothly following our canary release. 
- Setting up feature flags (Jubitta)
- Setting up rollback strategy (Luke)
  - This will allow the release engineer to easily revert to a previous deployment if something goes awry with a release, ensuring that a predictable and consistent rollback is performed each time it occurs. 
- Ansible linting (Luke)
  - This will add linting steps for our Ansible playbooks to ensure that we are creating high-quality deployment scripts, allowing for sustainable and predictable behavior. 
  - This will be similar to the linting steps already performed on the JS project; however, it will use an Ansible linter to ensure high code quality. 
- Canary release (Luke)
  - This will continue the canary release development and ensure that our Kubernetes release strategies can be completed. 
  - Although not primarily dependent on the ongoing Kubernetes work, it will build off of it and be improved by the work that is being conducted for the setup. 

**Retrospectives**
- What worked:
  - Merging most of the PRs and integration of code changes into dev.
  - Addressing retrospective from the first sprint. 
  - Almost addressing a major portion of the originally proposed pipeline. This has given us the flexibility to add additional steps in the pipeline. 
  - Implementing the TruffleHog credential scanning worked well and was able to correctly identify testing-specific credentials that were pushed to the remote repository. 
  - Creating the integration test to build and check the health of our application was also a great feature that we were able to implement in addition to our initial project proposal scope. 

- What didn't work:
  - Spent too much time trying to configure Kubernetes in a complicated way
  - The GitHub action that tests if the app is up and running in a container by building the docker container image and then running it has an issue currently which is that if a port that is running on the host system is not terminated properly, the GitHub action will fail with the port already in use(i.e., if the app running on port 3000 is not terminated, can't start the app again on 3000). I can't currently find a way to handle this. Hence the port in the container is exposed to 3002 on the host and the app is launched on 3002.
  - A lot of the Kubernetes setup and deployment strategies are difficult and time consuming to orchestrate.
  - Spent a considerable amount of time trying to understand why TruffleHog was searching the wrong commits before finding that some of the documentation and examples contained a misguiding example.  

- What to do differently:
  -  Could have saved a lot of time if a pre-existing tool was used to configure Kubernetes from the start. 
  -  Reach out for help as soon as possible instead of continually facing roadblocks.
  -  Find a way to terminate the app or service running on port 3000 and change the github action to use 3000. Also add this check in github action to ensure the action wouldn't terminate with an issue if the previous action didn't terminate the app. 
  
**Additional Project Scope**

- Added health check for the app:
  - A github action pipeline that would build the docker container image for the app and run the container image. Then checks if the app is up and running on the port specified.
  - This verifies that the application can launch and run with a healthy state if it is to be further developer or released upon. 
  - This action would run on the feature and dev branch on push and on the pr to dev.

- Linting for ansible playbook:
  - The current pipeline only has linting for the app Javascript.
  - We would also be adding linting for the ansible playbook.
  - This will ensure that our Ansible deployments follow best practices. 
  - It will also ensure that all of the functionality should operate as anticipated. 

- Credential scanning: 
  - This enables scanning for any potentially sensitive credentials that were pushed to our project repository. 
  - This allows us to ensure that we can revoke the credentials before merging any of the changes. 
  - We also want to ensure that it scans all commits instead of just the merge because those commits are likely to avoid human review in the merge review process. 
  - If any credentials are found, the developer that pushed the commit or created the pull request will immediately receive an email, ensuring that they are alerted as soon as possible that they have likely compromised secret values. 

- Rollback: 
  - This enables the release engineer to revert a recent release if it is necessary to correct or further develop a potential release. 
  - This will also ensure that if a fault is discovered, the users will not be exposed to it longer than necessary because the release engineer will already have access to a high-quality, tested solution to guarantee a successful rollback to the previous stable version. 
  - This is also important for our users because it will ensure that they are not susceptible to any security issues that may be discovered for an extended duration. Instead, the previous version may be deployed and potentially save the customers from any ensuing security issues. 

- Feature flags:
  - Choose a feature flag management tool compatible with the development environment(LaunchDarkly, ConfigCat, etc.,)
  - Integrate the feature flag SDK into the application code to control feature visibility.
  - Use the feature flag tool's dashboard to create and manage flags based on development and release requirements.
  - Modify DevOps pipeline scripts to handle feature flags in linting, testing, code coverage, and vulnerability analysis steps.
  - Utilize feature flags during the Canary release to control the rollout of specific features to different user groups.
  - Modify deployment playbooks to account for feature flags during the deployment process.
