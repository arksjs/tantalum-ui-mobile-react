import classNames from 'classnames'
import type { SkeletonButtonProps } from './types'
import type { VFC } from '../helpers/types'
import { useContext } from 'react'
import { SkeletonContext } from './context'
import { getButtonClasses } from './util'
import { skeletonDefaultProps } from './props'

const TaSkeletonButton: VFC<SkeletonButtonProps> = props => {
  const consumer = useContext(SkeletonContext)
  const classes = classNames(getButtonClasses(props, consumer), props.className)

  return <div className={classes}></div>
}

TaSkeletonButton.defaultProps = {
  ...skeletonDefaultProps
}

export default TaSkeletonButton
