# CSC 519 Project

<div style="text-align: justify">

## Team Members: 
1. Luke Jenquin, lgjenqui
2. Sam Stone, sjstone3
3. Jubitta John, jjohn6
    
## DevOps Project 2023
![](https://github.ncsu.edu/CSC519-lgjenqui-jjohn6-sjstone3/CSC519-Project/blob/update-readme/images/Dev%20Ops%20PipelineFinal.png?raw=true)
Our project is a collection of Github workflows that automate the development and deployment of a "Coffee Maker" project. It runs a series of quality gate checks before allowing a developer to merge. Some notable features of the project is that it uses Kubernetes to perform a canary deployment, has monitoring with Prometheus and Grafana, and is setup to use feature flags with LaunchDarkly.
    
## File Structure:
    github/workflows
        canary-release.yaml
        common-vulnerability-jobs.yaml
        dev-merge-project.yaml
        monitoring.yaml
    canary
        Dockerfile
        coffee.yaml
        service.yaml
    coffee-project
        public
        test
        .eslintrc.js
        Dockerifle
        ...
    images
    monitoring
        monitoring-setup
            hosts.yaml
            monitor.yaml
            prometheus.yml.j2
        Dockerfile

</div>

### .github/workflows
**canary-release.yaml** Sets up Kubernetes environment and nodes and begins canary deployment when a PR is opened to a release branch

**common-vulnerability-jobs.yaml** Runs a node vulnerability check on the coffee application

**deploy.yaml** Either promotes a canary deployment to the final deployment or rejects the canary deployment when a PR is opened/closed to main

**dev-merge-project.yaml** Runs a credential scan, linters, jest tests and coverage when a PR is opened to dev

**monitoring.yaml** Sets up Prometheus and Grafana to monitor the servers Kubernetes is on. Comments on a PR to main the link to the Grafana dashboard

### canary
**Dockerfile** A container that sets up the configurations needed to use Kubespray
**coffee.yaml** Standard application manifest
**service.yaml** Service that allows you to visit one site for all of the versions of the k8s nodes with traffic split between them

## coffee-project
The coffee-project is the app that our project is deploying.
**.eslintrc.js** The configuration file for ESLint
**Dockerfile** A Dockerfile to containerize the app

## monitoring
This directory contains all of the files needed to set up server monitoring
**hosts.yaml** The Ansible inventory file of where Prometheus and Grafana are
**monitor.yaml** The Ansible playbook that configures Prometheus and Grafana on the target host
**prometheus.yml.j2** The configuration file that contains which servers to scrape
**Dockerfile** A Dockerfile to install Ansible so the monitor playbook can run in



