import classNames from 'classnames'
import type { SkeletonProps } from './types'
import { skeletonDefaultProps } from './props'
import type { FC, RenderProp } from '../helpers/types'
import SkeletonAvatar from './SkeletonAvatar'
import SkeletonTitle from './SkeletonTitle'
import SkeletonParagraph from './SkeletonParagraph'
import { getClasses } from './util'
import { SkeletonContext } from './context'

const AkSkeleton: FC<
  SkeletonProps & {
    renderLayout?: RenderProp
  }
> = props => {
  const classes = classNames(getClasses(props.animated), props.className)

  return (
    <SkeletonContext.Provider value={props}>
      {props.loading ? (
        <div className={classes}>
          {props.renderLayout ? (
            props.renderLayout()
          ) : (
            <div className="ak-skeleton_layout">
              {props.avatar ? (
                <div className="ak-skeleton_layout-left">
                  <SkeletonAvatar />
                </div>
              ) : (
                <></>
              )}
              <div className="ak-skeleton_layout-right">
                <SkeletonTitle />
                <SkeletonParagraph />
              </div>
            </div>
          )}
        </div>
      ) : (
        props.children
      )}
    </SkeletonContext.Provider>
  )
}

AkSkeleton.defaultProps = {
  ...skeletonDefaultProps,
  loading: true,
  avatar: false
}

export default AkSkeleton
