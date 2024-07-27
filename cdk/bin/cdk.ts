#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { ManifoldStack } from '../lib/manifold-stack';

const app = new cdk.App();
new ManifoldStack(app, 'ManifoldStack', {
  /* For more information, see https://docs.aws.amazon.com/cdk/latest/guide/environments.html */
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION,
  },
})
