import * as core from '@actions/core';
import * as installer from './installer';

async function run() {
  try {
    let version = core.getInput('version', {required: false}) || '';
    let token = core.getInput('repo-token', {required: false})
    await installer.getGithubCli(version, token);
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
