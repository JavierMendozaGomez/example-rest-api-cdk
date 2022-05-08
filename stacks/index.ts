#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { ApiStack } from './api-stack';
import {STAGE, REGION, ACCOUNT_ID } from './config';
import { DDBTablesStack } from './ddb-tables-stack';
const app = new cdk.App();

const env = {
	account: ACCOUNT_ID,
    region: REGION,
	stage: STAGE
};

new ApiStack(app, `ApiStack-${STAGE}`, {env});
new DDBTablesStack(app, `DDBTablesStack-${STAGE}`, {env});