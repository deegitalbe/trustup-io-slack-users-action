import {SlackUser} from '../enums'

const getSlackMention = <TUser extends SlackUser>(
  username: TUser
): `<@${TUser}>` => {
  return `<@${username}>`
}

export default getSlackMention
