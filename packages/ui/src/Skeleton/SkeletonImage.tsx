import { useContext } from 'react'
import classNames from 'classnames'
import type { SkeletonImageProps } from './types'
import type { VFC } from '../helpers'
import { SkeletonContext } from './context'
import { getImageClasses } from './util'
import { skeletonDefaultProps } from './props'

const TaSkeletonImage: VFC<SkeletonImageProps> = props => {
  const consumer = useContext(SkeletonContext)
  const classes = classNames(getImageClasses(props, consumer), props.className)

  return <div className={classes}></div>
}

TaSkeletonImage.defaultProps = {
  ...skeletonDefaultProps
}

export default TaSkeletonImage
