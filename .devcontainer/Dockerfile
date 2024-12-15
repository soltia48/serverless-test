FROM node:lts

# Install packages
RUN --mount=type=cache,target=/var/lib/apt/,sharing=locked \
    --mount=type=cache,target=/var/cache/apt/,sharing=locked \
    apt-get update && apt-get install -y --no-install-recommends \
    # For development
    sudo

RUN echo 'node ALL=(ALL) NOPASSWD:ALL' >> /etc/sudoers

# Create working directory
WORKDIR /home/node/workspace/
