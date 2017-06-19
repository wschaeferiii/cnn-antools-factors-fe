#!/bin/sh

set -e

docker login -u "${DOCKER_USER}" -p="${DOCKER_PASS}" -e="." quay.io
docker-compose -f .codeship/docker-compose.yml push
