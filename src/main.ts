import {setFailed, setOutput} from '@actions/core'
import {DEVELOPER, OUTPUT} from './enums'
import {getGithubUser, outputDeveloper, outputUser} from './utils'

async function run(): Promise<void> {
  try {
    const githubUser = getGithubUser()
    const hasGithubUser = !!githubUser
    setOutput(OUTPUT.HAS_USER, hasGithubUser)
    outputUser(githubUser)
    for (const developer of Object.values(DEVELOPER)) {
      outputDeveloper(developer)
    }
  } catch (error) {
    if (error instanceof Error) setFailed(error.message)
  }
}

run()
