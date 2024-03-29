import type { ButtonGroupProps } from './types'
import { GroupContext } from './context'
import { createDefaultProps } from './props'
import { getGroupClasses } from './util'
import classNames from 'classnames'
import { toArray, type FC } from '../helpers'

const TaButtonGroup: FC<ButtonGroupProps> = props => {
  const childCount = toArray(props.children).length
  const classes = classNames(
    getGroupClasses(props, childCount),
    props.className
  )

  return (
    <GroupContext.Provider
      value={{
        size: props.size,
        pattern: props.pattern,
        shape: props.shape,
        hasGroup: true
      }}
    >
      <div className={classes}>{props.children}</div>
    </GroupContext.Provider>
  )
}

TaButtonGroup.defaultProps = createDefaultProps()

export default TaButtonGroup
