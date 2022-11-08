import { Code, Function, FunctionProps, Runtime } from 'aws-cdk-lib/aws-lambda';
import { Construct } from 'constructs';
import * as path from 'path';

export enum SourceCodeType {
    DOCKER = 'DOCKER',
    ASSET = 'ASSET'

}

export interface SourceCode {
    readonly type: SourceCodeType;
    readonly path: string;
}

export interface LambdaServiceProps {
    readonly handler: string;
    readonly sourceCode: SourceCode;
}

export class LambdaService extends Function {
    constructor(scope: Construct, id: string, props: LambdaServiceProps) {
        super(scope, id, {
            runtime: Runtime.PYTHON_3_9,
            code: (props.sourceCode.type === SourceCodeType.ASSET) ?
                Code.fromAsset(path.join(__dirname, props.sourceCode.path)) :
                Code.fromDockerBuild(path.join(__dirname, props.sourceCode.path)),
            handler: props.handler
        });
    }
}
