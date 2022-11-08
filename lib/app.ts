import * as cdk from 'aws-cdk-lib';
import { Pipeline } from 'aws-cdk-lib/aws-codepipeline';
import { PipelineStage } from './stages/PipelineStage';

const app = new cdk.App();

const pipeline = new Pipeline(app, 'SimpleCodePipeline');

const stages = [
    { stageName: 'alpha', regions: ['eu-central-1'] }
]
stages.forEach(stage => {
    new PipelineStage(app, pipeline, stage)
})
