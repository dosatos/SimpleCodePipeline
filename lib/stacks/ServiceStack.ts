import * as cdk from 'aws-cdk-lib';
import { StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { PipelineStageProps } from '../stages/PipelineStage';
import { LambdaService, SourceCodeType } from '../constructs/LambdaService';

interface ServiceStackProps extends StackProps {
    readonly stageProps: PipelineStageProps
}

export class ServiceStack extends cdk.Stack {
    constructor(scope: Construct, id: string, props: ServiceStackProps) {
        super(scope, id, props);
        new LambdaService(scope, `LambdaService-${ props.stageProps.stageName }`, {
            handler: '',
            sourceCode: { type: SourceCodeType.DOCKER, path: '' },
        })
    }
}
