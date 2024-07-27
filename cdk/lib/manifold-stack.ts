import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { AuroraDB } from './aurora-db';
import { Vpc } from 'aws-cdk-lib/aws-ec2';

export class ManifoldStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const vpc = new Vpc(this, 'ManifoldVPC')
    const aurora = new AuroraDB(this, 'AuroraDB', { vpc });
  }
}
