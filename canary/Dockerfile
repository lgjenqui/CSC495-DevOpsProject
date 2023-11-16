FROM python:3-alpine

# Install dependencies
RUN apk add --update --no-cache ansible bash openssh

COPY initialize-servers.yaml project/initialize-servers.yaml
COPY k8s-dependencies.yaml project/k8s-dependencies.yaml
COPY master-node-setup.yaml project/master-node-setup.yaml
COPY worker-setup.yaml project/worker-setup.yaml
COPY hosts.yaml project/hosts.yaml

RUN mkdir -p /root/.ssh
WORKDIR /project

ENTRYPOINT []
CMD ["/bin/bash"]