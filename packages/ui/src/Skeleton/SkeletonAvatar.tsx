import { useContext } from 'react'
import classNames from 'classnames'
import type { SkeletonAvatarProps } from './types'
import type { VFC } from '../helpers'
import { SkeletonContext } from './context'
import { getAvatarClasses } from './util'
import { skeletonDefaultProps } from './props'

const TaSkeletonAvatar: VFC<SkeletonAvatarProps> = props => {
  const consumer = useContext(SkeletonContext)
  const classes = classNames(getAvatarClasses(props, consumer), props.className)

  return <div className={classes}></div>
}

TaSkeletonAvatar.defaultProps = {
  ...skeletonDefaultProps
}

export default TaSkeletonAvatar
