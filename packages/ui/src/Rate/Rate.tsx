import { useCallback, useEffect, useRef, useState } from 'react'
import classNames from 'classnames'
import type { RateProps, RateEmits } from './types'
import { getMax, getClasses, getStyles, isIntegerOrHalf } from './util'
import { isInteger, rangeInteger, type VFC } from '../helpers'
import { useTouch } from '../hooks'
import { Icon } from '../Icon'

import StarOutlined from '../Icon/icons/StarOutlined'
import StarFilled from '../Icon/icons/StarFilled'

interface RateCoords {
  size: number
  offsetX: number
  startX: number
  current: number
  isHalf: boolean
  isChange: boolean
}

const TaRate: VFC<RateProps & RateEmits> = ({
  icon = StarOutlined,
  activeIcon = StarFilled,
  count = 5,
  allowHalf = false,
  value = 0,
  ...props
}) => {
  const root = useRef<HTMLDivElement>(null)
  const [inputValue, setInputValue] = useState(0)
  const [max, setMax] = useState(getMax(count))
  const isReadonly = useRef(false)

  const change = (newVal: number, isHalf = false) => {
    if (allowHalf && isHalf) {
      newVal -= 0.5
    }

    if (newVal !== inputValue) {
      setInputValue(newVal)

      props.onChange && props.onChange(newVal)
    }
  }

  const coords = useRef<RateCoords | null>(null)

  useTouch({
    el: root,
    onTouchStart(e) {
      if (isReadonly.current) {
        return
      }

      const { clientX } = e.touchObject

      let $target = e.target as HTMLElement
      while ($target.tagName !== 'DIV') {
        $target = $target.parentElement as HTMLElement
      }

      const newVal = parseInt($target.dataset.value as string)
      const rects = $target.getClientRects()[0]

      coords.current = {
        size: rects.height,
        offsetX: clientX - rects.left,
        startX: clientX,
        current: newVal,
        isHalf: false,
        isChange: false
      }
      coords.current.isHalf = coords.current.offsetX < coords.current.size / 2

      change(newVal, coords.current.isHalf)

      e.preventDefault()
    },
    onTouchMove(e) {
      if (!coords.current) {
        return
      }

      const { clientX } = e.touchObject
      const { startX, size, offsetX, current } = coords.current

      const x = clientX - startX

      let offsetCount = 0

      if (x > 0) {
        offsetCount =
          Math.floor(x / size) + (x % size >= size - offsetX ? 1 : 0)
      } else if (x < 0) {
        offsetCount = -Math.floor(-x / size) + (-x % size > offsetX ? -1 : 0)
      }

      const perOffsetX = (offsetX + x) % size
      const isHalf =
        current + offsetCount <= 0
          ? true
          : current + offsetCount > max
          ? false
          : perOffsetX === 0 ||
            (perOffsetX > 0
              ? perOffsetX < size / 2
              : size + perOffsetX < size / 2)

      coords.current.isChange = true

      change(rangeInteger(current + offsetCount, 1, max), isHalf)

      e.stopPropagation()
    },
    onTouchEnd(e) {
      if (coords.current) {
        coords.current = null
        e.stopPropagation()
      }
    }
  })

  function updateValue() {
    if (!isIntegerOrHalf(value)) {
      return
    }

    const newVal = parseFloat(value as string)

    if (newVal === inputValue) {
      return
    }

    if (newVal < 0 || newVal > max) {
      return
    }

    if (!allowHalf && !isInteger(newVal)) {
      return
    }

    setInputValue(newVal)
  }

  useEffect(() => {
    if (inputValue > max) {
      // 如果max被修改了，导致原有的值大于最大值，修改为最大值
      change(max)
    }
  }, [max])

  useEffect(() => {
    setMax(getMax(count))
  }, [count])

  useEffect(() => {
    updateValue()
  }, [value])

  useEffect(() => {
    isReadonly.current = !!(props.disabled || props.readonly)
  }, [props.disabled, props.readonly])

  const classes = classNames(getClasses(props))
  const styles = getStyles(props)

  const renderItems = useCallback(() => {
    const items: JSX.Element[] = []

    for (let num = 1; num <= max; num++) {
      items.push(
        <div
          className={classNames([
            'ta-rate_item',
            {
              active: num - 0.5 <= inputValue,
              half: inputValue - num === -0.5
            }
          ])}
          key={num}
          data-value={num}
        >
          <i className="ta-rate_icon">
            <Icon icon={icon} />
          </i>
          <i className="ta-rate_active-icon">
            <Icon icon={activeIcon} />
          </i>
        </div>
      )
    }

    return items
  }, [inputValue, max, icon, activeIcon])

  return (
    <div className={classes} style={styles} ref={root}>
      <input
        type="hidden"
        name={props.name}
        disabled={props.disabled}
        value={inputValue}
      />
      {renderItems()}
    </div>
  )
}

export default TaRate
