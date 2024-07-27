import { Construct } from 'constructs'
import * as rds from 'aws-cdk-lib/aws-rds'
import { IVpc, SubnetType } from 'aws-cdk-lib/aws-ec2'

interface AuroraProps {
  vpc: IVpc
}

export class AuroraDB extends Construct {
  constructor(scope: Construct, id: string, props: AuroraProps) {
    super(scope, id)

    const cluster = new rds.DatabaseCluster(scope, 'AuroraCluster', {
      clusterIdentifier: 'manifold-cluster',
      engine: rds.DatabaseClusterEngine.auroraPostgres({
        version: rds.AuroraPostgresEngineVersion.VER_16_2,
      }),
      credentials: rds.Credentials.fromGeneratedSecret('clusteradmin', {
        secretName: 'manifold-db-password',
      }),
      writer: rds.ClusterInstance.serverlessV2('writer', {
        publiclyAccessible: false,
        instanceIdentifier: 'manifold-main',
      }),
      vpcSubnets: {
        subnetType: SubnetType.PRIVATE_WITH_EGRESS,
      },
      vpc: props.vpc,
      defaultDatabaseName: 'manifold',
      enableDataApi: true,
    })
  }
}
