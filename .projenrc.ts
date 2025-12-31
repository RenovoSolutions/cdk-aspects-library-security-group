import { awscdk, javascript } from 'projen';
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'Renovo Solutions',
  authorAddress: 'webmaster+cdk@renovo1.com',
  cdkVersion: '2.202.0',
  jsiiVersion: '^5.8.0',
  defaultReleaseBranch: 'master',
  majorVersion: 2,
  projenrcTs: true,
  name: '@renovosolutions/cdk-aspects-library-security-group',
  description: 'A library of CDK aspects applying to security groups.',
  repositoryUrl: 'https://github.com/RenovoSolutions/cdk-aspects-library-security-group.git',
  keywords: [
    'cdk',
    'aws-cdk',
    'aws-cdk-construct',
    'projen',
  ],
  buildWorkflow: false,
  depsUpgrade: true,
  depsUpgradeOptions: {
    workflow: false,
    workflowOptions: {
      labels: ['auto-approve', 'deps-upgrade'],
    },
    exclude: ['projen'],
  },
  githubOptions: {
    mergify: false,
    mergifyOptions: {
      rules: [
        {
          name: 'Automatically approve dependency upgrade PRs if they pass build',
          actions: {
            review: {
              type: 'APPROVE',
              message: 'Automatically approved dependency upgrade PR',
            },
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
    pullRequestLintOptions: {
      semanticTitle: false,
      semanticTitleOptions: {
        types: [
          'chore',
          'docs',
          'feat',
          'fix',
          'ci',
        ],
      },
    },
  },
  releaseToNpm: true,
  release: true,
  npmAccess: javascript.NpmAccess.PUBLIC,
  docgen: true,
  eslint: true,
  publishToPypi: {
    distName: 'renovosolutions.aws-cdk-aspects-security-group',
    module: 'renovosolutions_aspects_security_group',
  },
  publishToNuget: {
    dotNetNamespace: 'renovosolutions',
    packageId: 'Renovo.AWSCDK.AspectsSecurityGroup',
  },
});

new javascript.UpgradeDependencies(project, {
  include: ['projen'],
  taskName: 'upgrade-projen',
  workflow: false,
  workflowOptions: {
    schedule: javascript.UpgradeDependenciesSchedule.expressions(['0 2 * * 1']),
  },
  pullRequestTitle: 'upgrade projen',
});

// Ignore the release workflow file so it's not committed to git
project.gitignore.exclude('!/.github/workflows/release.yml');
project.gitignore.addPatterns('.github/workflows/release.yml');

project.synth();
