# Description

Simple Rest API using the AWS CDK
# Requirements

To deploy the stack to your user stage first setup the env USER with .

```
export USER=javier
```

## Installation
* Install globally the CDK Lib 
``` 
 npm install -g aws-cdk-lib
```
* Install the project dependencies
```
npm install
```
### Deploy stack to your user environment
``` 
npm run deploy:user

```
### Remove stack of your user environment
```
npm run remove:user
```
# Common issues
## For Ubuntu
### Docker exited with code 1
Issue replicated with Docker version 
```
	Docker version 19.03.5, build 633a0ea838
```
The Update of the latest version of docker fixed the issue
Current version used by Javier 
```
	Docker version 20.10.15, build fd82621
```
### Incompatible CLI Lib used in the project with the CDK lib installed globally
Update your global cdk library with the command
```
npm install -g aws-cdk-lib
```


## Useful commands

* `npm run build`   compile typescript to js
* `npm run watch`   watch for changes and compile
* `npm run test`    perform the jest unit tests
