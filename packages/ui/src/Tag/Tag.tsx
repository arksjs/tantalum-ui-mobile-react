import { useRef } from 'react'
import classNames from 'classnames'
import type { TagEmits, TagProps } from './types'
import type { FC } from '../helpers'
import { getClasses, getStyles } from './util'
import CloseOutlined from '../Icon/icons/CloseOutlined'
import { Icon } from '../Icon'
import { useStop, useLongPress } from '../hooks'

const TaTag: FC<TagProps & TagEmits> = props => {
  const root = useRef<HTMLDivElement>(null)
  const closeEl = useRef<HTMLButtonElement>(null)

  const classes = classNames(getClasses(props), props.className)
  const styles = getStyles(props.color)

  const onClose = () => {
    if (!props.disabled) {
      props.onClose && props.onClose()
    }
  }

  useStop(closeEl)

  useLongPress(root, e => {
    if (!props.disabled) {
      switch (e.type) {
        case 'click':
          props.onClick && props.onClick()
          break
        case 'long-press':
          props.onLongPress && props.onLongPress()
          break
        default:
          break
      }
    }
  })

  return (
    <div className={classes} style={styles} ref={root}>
      {props.children}
      {props.closable ? (
        <button className="ta-tag_close" ref={closeEl}>
          <Icon icon={CloseOutlined} onClick={onClose} />
        </button>
      ) : (
        <></>
      )}
    </div>
  )
}

TaTag.defaultProps = {
  closable: false,
  disabled: false
}

export default TaTag
