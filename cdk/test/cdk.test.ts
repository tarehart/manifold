import * as cdk from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import * as Cdk from '../lib/manifold-stack';

// example test. To run these tests, uncomment this file along with the
// example resource in lib/cdk-stack.ts
test('Database Created', () => {
  const app = new cdk.App();
    // WHEN
  const stack = new Cdk.ManifoldStack(app, 'MyTestStack');
    // THEN
  const template = Template.fromStack(stack);

  template.hasResourceProperties('AWS::RDS::DBCluster', {
    Engine: 'aurora-postgresql',
  })
});
