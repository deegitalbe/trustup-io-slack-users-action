import {Enum} from '../types'

export const OUTPUT = {
  HAS_USER: 'has_user',
  USER_SLACK_ID: 'user_slack_id',
  USER_MENTION: 'user_mention',
  FLORIAN_SLACK_ID: 'florian_slack_id',
  FLORIAN_MENTION: 'florian_mention',
  STEPHANE_SLACK_ID: 'stephane_slack_id',
  STEPHANE_MENTION: 'stephane_mention',
  AXEL_SLACK_ID: 'axel_slack_id',
  AXEL_MENTION: 'axel_mention',
  PIERRE_SLACK_ID: 'pierre_slack_id',
  PIERRE_MENTION: 'pierre_mention',
  MATHIEU_SLACK_ID: 'mathieu_slack_id',
  MATHIEU_MENTION: 'mathieu_mention'
} as const

export type Output = Enum<typeof OUTPUT>
