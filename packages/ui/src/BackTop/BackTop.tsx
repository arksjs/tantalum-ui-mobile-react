import { useRef, useState } from 'react'
import classNames from 'classnames'
import type { BackTopProps } from './types'
import { getStyles, DEFAULT_VISIBLE_HEIGHT } from './util'
import UpCircleOutlined from '../Icon/icons/UpCircleOutlined'
import { useScroll, useSafeAreaInsets } from '../hooks'
import { Icon } from '../Icon'
import {
  getNumber,
  getScrollTop,
  scrollTo,
  type FC,
  type OnClick
} from '../helpers'

const TaBackTop: FC<
  BackTopProps & {
    onClick?: OnClick
  }
> = ({
  animated = true,
  enableSafeAreaInsets = true,
  offset = 0,
  visibleHeight = DEFAULT_VISIBLE_HEIGHT,
  ...props
}) => {
  const docEl = useRef(document.documentElement)
  const [isShow, setIsShow] = useState(false)
  const { safeAreaInsets } = useSafeAreaInsets(enableSafeAreaInsets)

  const classes = classNames('ta-back-top', props.className)
  const styles = getStyles(offset, isShow, safeAreaInsets)

  useScroll(docEl, e => {
    setIsShow(
      getScrollTop(e.currentTarget as HTMLElement) >=
        getNumber(visibleHeight, DEFAULT_VISIBLE_HEIGHT)
    )
  })

  function toTop() {
    scrollTo(document, 0, animated)
  }

  const onClick: OnClick = e => {
    toTop()

    props.onClick && props.onClick(e)
  }

  return (
    <button className={classes} style={styles} onClick={onClick}>
      {props.children || <Icon icon={UpCircleOutlined} />}
    </button>
  )
}

export default TaBackTop
