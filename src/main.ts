import {setOutput, setFailed} from '@actions/core'
import {DEVELOPER, OUTPUT, SLACK_USER} from './enums'
import {getGithubUser, getSlackUser} from './utils'

async function run(): Promise<void> {
  try {
    setOutput(OUTPUT.FLORIAN_SLACK_ID, SLACK_USER[DEVELOPER.FLORIAN])
    setOutput(OUTPUT.STEPHANE_SLACK_ID, SLACK_USER[DEVELOPER.STEPHANE])
    setOutput(OUTPUT.AXEL_SLACK_ID, SLACK_USER[DEVELOPER.AXEL])
    setOutput(OUTPUT.PIERRE_SLACK_ID, SLACK_USER[DEVELOPER.PIERRE])
    setOutput(OUTPUT.MATHIEU_SLACK_ID, SLACK_USER[DEVELOPER.MATHIEU])
    const githubUser = getGithubUser()
    const slackUser = githubUser ? getSlackUser(githubUser) : undefined
    setOutput(OUTPUT.USER_SLACK_ID, slackUser)
  } catch (error) {
    if (error instanceof Error) setFailed(error.message)
  }
}

run()
