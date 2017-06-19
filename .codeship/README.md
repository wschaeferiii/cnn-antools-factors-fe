# The `.codeship` CI/CD directory

All the files in this directory are required for CI/CD to work on Codeship.  
CI/CD is Continuous Integration / Continuous Deployment.


## If an existing Codeship build plan does not already exist

To get started using Codeship for CI/CD, a build plan will need to be created in
the Codeship UI first.

- Log into Codeship - https://codeship.com

- Make sure you are looking at the "Turnerbroadcasting" organization Dashboard,
  NOT your personal Dashboard. It should say in the top left of the page.

- Choose "Projects" from the top navigation.

- Choose "New Project".

- Follow the prompts until you get to the "Select your project type" page.

- Choose "Codeship Pro".

- You will land on a "Setup your Codeship Pro project" page.

- In the left column, choose "General".

- Copy the "AES Key" and place it in `./codeship/codeship.aes`.


## Files that are NOT checked into source control

- `codeship.aes`: Must contain the "AES Key" for the project. This key can be
  found on the "General" tab of the Codehsip Pro Project Settings page.

- `codeship.env`: Contains all of the ENVIRONMENT variables needed for building
  the project. The minimum file should contain the proper values for the
  following template. Get the values to use from your team Architect.

  ```
  DOCKER_USER=
  DOCKER_PASS=
  ```

  If you intend to do CD you will also need the following where `[PACKAGE_NAME]`
  is your package name in all caps with underscores for spaces and hyphens. You
  can get the token from the Harbor shipment for the environment that it should
  auto deploy to.

  ```
  [PACKAGE_NAME]_[ENVIRONMENT]_TOKEN=
  ```

  For example, the REF cnn-marketing-toolkit-fe name would be:

  ```
  CNN_MARKETING_TOOLKIT_FE_REF_TOKEN=
  ```


## Files that ARE checked into source control

- `codeship.env.encrypted`: The result of running `npm run encrypt-envvars`.
  This file must be updated anytime `codeship.env` changes.

- `docker-compose.yml`

- `harbor-compose.yml`

- `docker-push.sh`: A shell script to run `docker-compose push`. This is only
  needed due to a defect in the Codeship system that has not been resolved yet.

- `generate-env-file.sh`: This sets the version of the image that is created
  based on the `package.json` version, `${CI_BRANCH}`, and `${CI_BRANCH_ID}`.
