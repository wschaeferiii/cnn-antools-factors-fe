#!/bin/sh

set -e

short_build_id=`echo ${CI_BUILD_ID} | cut -b 1-7`
# ${CI_BUILD_ID:0:6} doesn't work for some reason

echo "VERSION=$(jq -r .version package.json)-${CI_BRANCH}.${short_build_id}" > .env
echo "DOCKER_COMPOSE_PATH=../" >> .env
echo "PORT=80" >> .env
echo "COMPOSE_FILE=.codeship/docker-compose.yml" >> .env


cat .env
cp .env .codeship

# useful info when looking at the build plan in the Codeship UI
echo "CI_COMMITTER_EMAIL: ${CI_COMMITTER_EMAIL}"
echo "           CI_NAME: ${CI_NAME}"
echo "    CI_STRING_TIME: ${CI_STRING_TIME}"
echo " CI_COMMITTER_NAME: ${CI_COMMITTER_NAME}"
echo "      CI_TIMESTAMP: ${CI_TIMESTAMP}"
echo "         CI_BRANCH: ${CI_BRANCH}"
echo "      CI_COMMIT_ID: ${CI_COMMIT_ID}"
echo "     CI_PROJECT_ID: ${CI_PROJECT_ID}"
echo " CI_COMMIT_MESSAGE: ${CI_COMMIT_MESSAGE}"
echo "       CI_BUILD_ID: ${CI_BUILD_ID}"
echo "                CI: ${CI}"
echo "      CI_REPO_NAME: ${CI_REPO_NAME}"
