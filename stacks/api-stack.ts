import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import {RestApi, LambdaIntegration} from 'aws-cdk-lib/aws-apigateway'
import {Runtime} from 'aws-cdk-lib/aws-lambda';
import {NodejsFunction} from 'aws-cdk-lib/aws-lambda-nodejs'
import { STAGE } from './config';
import path from 'path';

export class ApiStack extends Stack {
  public readonly dummyLambda: NodejsFunction;
  constructor(scope: Construct, id: string, props?: StackProps) {
	super(scope, id, props);
	if(typeof STAGE === 'undefined') {
		throw new Error('Environment STAGE is undefined');
	}

	const SERVICE_NAME = `service-example`;
	this.dummyLambda  = new NodejsFunction(this, "DummyLambda", {
		functionName: `${SERVICE_NAME}-dummyLambda-${STAGE}`,
		runtime: Runtime.NODEJS_14_X,
		entry: path.join(__dirname, '../src/lambdas/index.ts')
	  });
  
	const api = new RestApi(this, `example-api-${STAGE}`, {
		restApiName: `example-${STAGE}`,
		description: "This is a service example.",
		deploy: true,
		deployOptions: {
			stageName: `${STAGE}`
		}
		});
  
	  const getConfigurationIntegration = new LambdaIntegration(this.dummyLambda);
  
	  api.root.addMethod("GET", getConfigurationIntegration); // GET /
  
  }
}
