import type { DividerProps } from './types'

export const getClasses = (props: DividerProps) => {
  return [
    'ak-divider',
    'ak-horizontal-hairline',
    {
      'has--title': !!props.title,
      'border--dashed': !!props.dashed
    }
  ]
}
