import { useEffect, useRef, useState } from 'react'
import classNames from 'classnames'
import type { FixedProps } from './types'
import type { FC } from '../helpers'
import { getInnerClasses, getInnerStyles, getStyles } from './util'
import { useSafeAreaInsets, useResizeObserver } from '../hooks'

const TaFixed: FC<FixedProps> = props => {
  const root = useRef<HTMLDivElement>(null)
  const innerEl = useRef<HTMLDivElement>(null)
  const contentEl = useRef<HTMLDivElement>(null)
  const [fixed2, setFixed2] = useState(false)
  const [rootStyle, setRootStyle] = useState<{
    width: number | null
    height: number | null
  }>({
    width: null,
    height: null
  })
  const { safeAreaInsets } = useSafeAreaInsets(props.enableSafeAreaInsets)

  const styles = getStyles(rootStyle)
  const innerClasses = classNames(getInnerClasses(props, fixed2))
  const innerStyles = getInnerStyles(props, safeAreaInsets)

  function updateSize() {
    if (!(root.current && innerEl.current && contentEl.current)) {
      return
    }

    const { offsetWidth, offsetHeight } = contentEl.current

    if (offsetWidth === 0 || offsetHeight === 0) {
      setRootStyle({
        width: null,
        height: null
      })
      setFixed2(false)
      return
    }

    setRootStyle({
      width: props.fixed && props.spaceHold ? offsetWidth : null,
      height: props.fixed && props.spaceHold ? offsetHeight : null
    })

    setFixed2(!!props.fixed)
  }

  useEffect(updateSize, [props.fixed, props.spaceHold])

  useResizeObserver(contentEl, updateSize)

  return (
    <div className="ta-fixed" style={styles} ref={root}>
      <div className={innerClasses} style={innerStyles} ref={innerEl}>
        <div className="ta-fixed_content-wrapper" ref={contentEl}>
          {props.children}
        </div>
      </div>
    </div>
  )
}
TaFixed.defaultProps = {
  fixed: true,
  enableSafeAreaInsets: true,
  zIndex: 1,
  spaceHold: true
}

export default TaFixed
