import {GithubUser, USER_MAPPING, UserMapping} from '../enums'

const getSlackUser = <TUser extends GithubUser>(
  user: TUser
): UserMapping[TUser] => {
  return USER_MAPPING[user]
}

export default getSlackUser
