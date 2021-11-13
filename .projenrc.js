const { AwsCdkConstructLibrary, NpmAccess } = require('projen');
const project = new AwsCdkConstructLibrary({
  author: 'Renovo Solutions',
  authorAddress: 'webmaster+cdk@renovo1.com',
  cdkVersion: '1.132.0',
  defaultReleaseBranch: 'master',
  name: '@renovosolutions/cdk-aspects-library-security-group',
  description: 'A library of CDK aspects applying to security groups.',
  repositoryUrl: 'https://github.com/RenovoSolutions/cdk-aspects-library-security-group.git',
  cdkDependencies: [
    '@aws-cdk/core',
    '@aws-cdk/aws-ec2',
  ],
  keywords: [
    'cdk',
    'aws-cdk',
    'aws-cdk-construct',
    'projen',
  ],
  depsUpgrade: true,
  depsUpgradeOptions: {
    workflowOptions: {
      labels: ['auto-approve', 'deps-upgrade'],
    },
  },
  githubOptions: {
    mergify: true,
    mergifyOptions: {
      rules: [
        {
          name: 'Automatically merge dependency upgrade PRs without approval if they pass build',
          actions: {
            merge: {
              method: 'squash',
              commit_message: 'title+body',
              strict: 'smart',
              strict_method: 'merge',
            },
            delete_head_branch: {},
          },
          conditions: [
            'label=auto-approve',
            'label=deps-upgrade',
            '-label~=(do-not-merge)',
            'status-success=build',
            'author=github-actions[bot]',
            'title="chore(deps): upgrade dependencies"',
          ],
        },
      ],
    },
  },
  releaseToNpm: true,
  releaseWorkflow: true,
  npmAccess: NpmAccess.PUBLIC,
  cdkAssert: true,
  docgen: true,
  eslint: true,
  publishToPypi: {
    distName: 'renovosolutions.aws-cdk-aspects-security-group',
    module: 'aspects-security-group',
  },
  publishToNuget: {
    dotNetNamespace: 'renovosolutions',
    packageId: 'Renovo.AWSCDK.AspectsSecurityGroup',
  },
});
project.synth();