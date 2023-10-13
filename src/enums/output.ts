import {Enum} from '../types'

export const OUTPUT = {
  USER_SLACK_ID: 'user_slack_id',
  FLORIAN_SLACK_ID: 'florian_slack_id',
  STEPHANE_SLACK_ID: 'stephane_slack_id',
  AXEL_SLACK_ID: 'axel_slack_id',
  PIERRE_SLACK_ID: 'pierre_slack_id',
  MATHIEU_SLACK_ID: 'mathieu_slack_id'
} as const

export type Output = Enum<typeof OUTPUT>
