import classNames from 'classnames'
import type { ActivityIndicatorProps } from './types'
import { getActivityIndicatorClasses } from './util'
import { LoadingIcon } from '../LoadingIcon'
import { getNumber, type VFC } from '../helpers'

const DEFAULT_SIZE = 20

const TaActivityIndicator: VFC<ActivityIndicatorProps> = ({
  animated = true,
  ...props
}) => {
  const classes = classNames(
    getActivityIndicatorClasses(animated),
    props.className
  )
  const nSize = getNumber(props.size, DEFAULT_SIZE)

  return (
    <LoadingIcon
      className={classes}
      size={nSize}
      rate={0.2}
      strokeWidth={0.0537 * nSize}
      color={props.color}
    />
  )
}

export default TaActivityIndicator
