**Accomplishments:**

Sam:
 - Created 4 Ansible playbooks to configure Kubernetes on a master, and 2 worker nodes that were hosted on DigitalOcean. I spend most of the week on this and after a lot of trouble shooting I wasn't able to ge the worker nodes to run and decided to do a different approach. (Commit with some of the playbooks I made: https://github.ncsu.edu/CSC519-lgjenqui-jjohn6-sjstone3/CSC519-Project/commit/41edc8d8873c2028dcfeb80fc7a405b310b6799f)
 - Instead I decided to use Kubespray, which is an open source tool that uses Ansible to configure Kubernetes. I made a Dockerfile to configure the settings. Then, I made GitHub actions steps to build the Dockefile and run the Ansible playbook. I'm running into issues with the SSH token to run the Ansible playbooks. I plan to go to office hours next week to get assitance.
Luke:

Jubitta:
- Added a github action for the health check of the app:
  - This github action would build the docker conatiner image for the app and run the container image. Then checks if the app is up and running on the port specified.
  - This action would run on the feature and dev branch on push and on the pr to dev.
  - Major commit: https://github.ncsu.edu/CSC519-lgjenqui-jjohn6-sjstone3/CSC519-Project/commit/bc66af4f31cc62a0fc15ae13a60429685e87e454
  - PR for the change: https://github.ncsu.edu/CSC519-lgjenqui-jjohn6-sjstone3/CSC519-Project/pull/30
 
**Next Steps:**
- What worked:

- What didn't work:
  - Spent too much time trying to configure Kubernetes in a complicated way
  - The GitHub action that tests if the app is up and running in a container by building the docker container image and then running it has an issue currently which is that if a port that is running on the host system is not terminated properly, the GitHub action will fail with the port already in use(i.e., if the app running on port 3000 is not terminated, can't start the app again on 3000). I can't currently find a way to handle this. Hence the port in the container is exposed to 3002 on the host and the app is launched on 3002.

- What to do differently:
  -  Could have saved a lot of time if a pre-existing tool was used to configure Kubernetes from the start. 
  -  Reach out for help as soon as possible instead of continually facing roadblocks.
  -  Find a way to terminate the app or service running on port 3000 and change the github action to use 3000. Also add this check in github action to ensure the action wouldn't terminate with an issue if the previous action didn't terminate the app. 
  
**Additional Project Scope**

- Added health check for the app:
  - A github ation pipeline that would build the docker conatiner image for the app and run the container image. Then checks if the app is up and running on the port specified.
  - This action would run on the feature and dev branch on push and on the pr to dev.

(itemize in bullet points what additional elements you are going to complete, and then complete them. Or you can justify why the proposed pipeline is sufficiently complex.)
