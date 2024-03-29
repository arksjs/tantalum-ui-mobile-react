import { forwardRef, useMemo, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import classNames from 'classnames'
import type { DropdownEmits, DropdownProps } from './types'
import { usePopup } from '../popup/use-popup'
import type { PopupRef } from '../popup/types'
import { querySelector, type FRFC, type RenderProp } from '../helpers'
import { useException, useResizeObserver } from '../hooks'

const TaDropdown: FRFC<
  PopupRef,
  DropdownProps &
    DropdownEmits & {
      render?: RenderProp<{ height: number }>
    }
> = (props, ref) => {
  const { printPropError } = useException('Dropdown')
  const root = useRef<HTMLDivElement>(null)
  const [top, setTop] = useState(-1)
  const [height, setHeight] = useState(0)

  const { popupStyles, popupClasses, onMaskClick } = usePopup(props, ref, {
    afterShow: updatePos,
    afterHidden: () => {
      setTop(-1)
    }
  })

  const classes = classNames(['ta-dropdown', popupClasses, props.className])

  const styles = Object.assign(
    {
      top: top === -1 ? '100vh' : top + 'px'
    },
    popupStyles
  )

  function updatePos() {
    const $target = querySelector(props.selector)

    if (!$target) {
      printPropError(`Cannot find element through "selector"`)
      return
    }

    const { bottom } = ($target as HTMLElement).getBoundingClientRect()

    setTop(bottom)
  }

  useResizeObserver(root, rect => {
    setHeight(rect.height)
  })

  const renderChildren = useMemo(() => {
    return props.render
      ? props.render({
          height
        })
      : props.children
  }, [props.children, props.render, height])

  return createPortal(
    <div className={classes} style={styles} ref={root}>
      <div className="ta-mask" onClick={onMaskClick}></div>
      <div className="ta-dropdown_inner">{renderChildren}</div>
    </div>,
    document.body
  )
}

export default forwardRef(TaDropdown)
