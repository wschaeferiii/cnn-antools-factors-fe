# CNN Apple News Tools Factors Front End

First pass at a [React][1] GUI interface to the existing [factors.json][2]
config file.

[1]: https://facebook.github.io/react/
[2]: https://data.cnn.com/content/ksa/factors.json



## Requirements

- [Node.js][3] 8.1.2+

- [Optional] [Jet][4] 1.18.0+  
  Needed for running `npm run encrypt-envvars`

- [Optional] [Docker][5] 17.03.1-ce+  
  Needed for running `npm run start-docker-local`

[3]: https://nodejs.org
[4]: https://documentation.codeship.com/pro/builds-and-configuration/cli/#installing-jet
[5]: https://www.docker.com/docker-mac

## Getting Started

Install it and start it.

```shell
$ nvm install                   # if you use `nvm`
$ npm install
$ npm start
$ open http://localhost:5050    # The `open` command only works on MacOS
```



## NPM scripts you should care about

Do `npm run` to see a list of all availabe npm scripts.
Here are the common ones:

- `npm start`: Starts the app

- `npm test`: Runs unit tests

- `npm run create`: Wizard for creating React modules and pages

- `npm run encrypt-envvars`: Needed to generate `.codeship/codeship.env.encrypted`
  when `.codeship/codeship.aes` or `.codeship/codeship.env` changes.

- `npm run start-docker-local`: Needed to run in a Docker container on a local
  development machine.  Typically only used when testing changes to the CICD
  deployment or Docker container environment.



## ENVIRONMENT variables

- `ENVIRONMENT`: If `prod`, in PRODUCTION mode. Otherwise it does not.

- `PORT`: The external port to run on.  Only used when running in a Docker
  container locally. The PORT inside the Docker container that the app runs on
  is hardcoded to 5050.  In upstream Harbor environments, this is set to 80.
  When running in Docker on localhost this must be set to an open PORT.  On many
  development machines 80 is in use or requires `sudo` to run, so it is easier
  to set it to an open port > 1000.

- `DOCKER_USER`: The username to log into Quay.io, our Docker registry.

- `DOCKER_PASS`: The password to log into Quay.io, our Docker registry.

- `CNN_ANTOOLS_FACTORS_FE_REF_TOKEN`: The Harbor build token to use when doing
  continuous deployment from Codeship to the REF environment. (rarely used)




## Developer notes

- Develop with the most current version of node specified in the [.nvmrc][3]
file. It is recommended to use [nvm][4] to manage node versions.

- Contributors shoudl be familiar with the [Contributor's Guide][5]

- Collaborators should be familiar with the [Collaborator's Guide][6]

[3]: ./.nvmrc
[4]: https://github.com/creationix/nvm#install-script
[5]: https://github.com/cnnlabs/organization-docs/blob/master/CONTRIBUTING.md
[6]: https://github.com/cnnlabs/organization-docs/blob/master/COLLABORATOR_GUIDE.md



## Licensing

See [LICENSE.md](./LICENSE.md) for details.



---
⧓ Bow ties are cool. - Eleventh Doctor
