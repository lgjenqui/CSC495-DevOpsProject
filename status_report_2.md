**Accomplishments:**

Sam:
 - Created 4 Ansible playbooks to configure Kubernetes on a master, and 2 worker nodes that were hosted on DigitalOcean. I spend most of the week on this and after a lot of trouble shooting I wasn't able to ge the worker nodes to run and decided to do a different approach. (Commit with some of the playbooks I made: https://github.ncsu.edu/CSC519-lgjenqui-jjohn6-sjstone3/CSC519-Project/commit/41edc8d8873c2028dcfeb80fc7a405b310b6799f)
 - Instead I decided to use Kubespray, which is an open source tool that uses Ansible to configure Kubernetes. I made a Dockerfile to configure the settings. Then, I made GitHub actions steps to build the Dockefile and run the Ansible playbook. I'm running into issues with the SSH token to run the Ansible playbooks. I plan to go to office hours next week to get assitance.
Luke:

Jubitta:

**Next Steps:**
- What worked:

- What didn't work:
  - Spent too much time trying to configure Kubernetes in a complicated way

- What to do differently:
  -  Could have saved a lot of time if a pre-existing tool was used to configure Kubernetes from the start. 
  -  Reach out for help as soon as possible instead of continually facing roadblocks.
**Additional Project Scope**

(itemize in bullet points what additional elements you are going to complete, and then complete them. Or you can justify why the proposed pipeline is sufficiently complex.)
