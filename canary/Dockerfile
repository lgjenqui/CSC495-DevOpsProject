# Use a smaller base image
FROM python:3.9-alpine

# Set environment variables
ENV MASTER_IP=143.198.68.194
ENV WORKER1_IP=137.184.81.142
ENV WORKER2_IP=137.184.34.223

# Install dependencies
RUN apk add --update --no-cache bash openssh git

# Create necessary directories
WORKDIR /root
RUN mkdir -p .ssh homelab/kubernetes
RUN mkdir -p .ssh clusters/homelab-k8s

# Clone kubespray
RUN git clone https://github.com/kubernetes-sigs/kubespray /root/homelab/kubernetes/kubespray

# Install Python dependencies
WORKDIR /root/homelab/kubernetes/kubespray
RUN pip install -U -r requirements.txt

# Copy inventory/sample to inventory/mycluster
WORKDIR /root/homelab/kubernetes/kubespray
RUN cp -rpf inventory/sample inventory/mycluster

# Declare IPS array and update Ansible inventory
ENV IPS="$MASTER_IP $WORKER1_IP $WORKER2_IP"
RUN CONFIG_FILE=inventory/mycluster/hosts.yaml python3 contrib/inventory_builder/inventory.py $IPS

# Default command
CMD ["/bin/bash"]
