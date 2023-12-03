FROM python:3-alpine
RUN apk add --update --no-cache ansible bash openssh

# Copy the entire "monitoring" directory for Prometheus and Grafana
COPY monitoring-setup /monitoring

WORKDIR /monitoring

RUN ansible-galaxy collection install community.general

# Default command
CMD ["/bin/bash"]