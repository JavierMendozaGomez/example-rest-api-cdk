import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as dynamodb from 'aws-cdk-lib/aws-dynamodb';
import {STAGE} from './config';

export class DDBTablesStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);
	new dynamodb.Table(this, `example-${STAGE}`, {
		partitionKey: {
			name: 'PK', type: dynamodb.AttributeType.STRING
		},
		sortKey: {
			name: 'SK', type: dynamodb.AttributeType.STRING
		},
		billingMode:  dynamodb.BillingMode.PROVISIONED,
		tableName:`example-${STAGE}`,
		readCapacity: 1,
		writeCapacity: 1,
		timeToLiveAttribute: 'ttl'
	})
  }
}
