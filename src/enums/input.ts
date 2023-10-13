import {Enum} from '../types'

export const INPUT = {
  USERNAME: 'username'
} as const

export type Input = Enum<typeof INPUT>
