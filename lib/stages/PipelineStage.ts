import { Pipeline } from 'aws-cdk-lib/aws-codepipeline';
import { ServiceStack } from '../stacks/ServiceStack';
import { App } from 'aws-cdk-lib';

export interface PipelineStageProps {
    readonly stageName: string,
    readonly regions: string[],
}

export class PipelineStage {
    constructor(app: App, pipeline: Pipeline, props: PipelineStageProps) {
        const stage = pipeline.addStage({ stageName: props.stageName })
        new ServiceStack(app, `ServiceStack-${ props.stageName }`, {
            stageProps: props
        })
    }
}
