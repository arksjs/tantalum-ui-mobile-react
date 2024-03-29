import {
  showToast,
  SelectorModelValue,
  PopupOnVisibleStateChange,
  PopupOnCancel,
  TaCell,
  TaGroup,
  TaNoticeBar,
  TaCalendar,
  CalendarOnConfirm
} from '@/index'
import dayjs from 'dayjs'
import { formatter, parser, template } from '../Calendar/utils'
import { useRef, useState } from 'react'

interface showArgs {
  showConfirm?: boolean
  showClose?: boolean
  visibleEvent?: boolean
  changeEvent?: boolean
  clickEvent?: boolean
}

const title = 'CalendarPopup'
const defaultValue = dayjs().format(template)

export default function ExpCalendarPopup() {
  const [popupValue, setPopupValue] = useState(defaultValue)
  const [popupRangeValue, setPopupRangeValue] = useState<SelectorModelValue>([])
  const [visible, setVisible] = useState(false)
  const [rangeVisible, setRangeVisible] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)
  const [showClose, setShowClose] = useState(false)
  const clickEvent = useRef(false)
  const changeEvent = useRef(false)
  const visibleEvent = useRef(false)

  function addOneDay() {
    setPopupValue(
      dayjs(popupValue, template, true).add(1, 'day').format(template)
    )
  }

  function onShow(args: showArgs = {}) {
    setShowConfirm(!!args.showConfirm)
    setShowClose(!!args.showClose)

    visibleEvent.current = !!args.visibleEvent
    changeEvent.current = !!args.changeEvent
    clickEvent.current = !!args.clickEvent

    setVisible(true)
  }

  const onVisibleStateChange: PopupOnVisibleStateChange = res => {
    if (visibleEvent.current) {
      console.log('onVisibleStateChange', res)
      showToast(`${res.state} 事件触发`)
    }
  }

  const onConfirm: CalendarOnConfirm = res => {
    if (clickEvent.current) {
      console.log('onConfirm', res)
      showToast(`点击确定按钮`)
    }
  }

  const onCancel: PopupOnCancel = res => {
    if (clickEvent.current) {
      console.log('onCancel', res)

      if (res.source === 'cancelClick') {
        showToast('点击了取消按钮')
      } else if (res.source === 'maskClick') {
        showToast('点击了蒙层')
      }
    }
  }

  function onChange(res: SelectorModelValue) {
    console.log('onChange', res)
    if (changeEvent.current) {
      showToast(`值改为 ${res}`)
    }

    setPopupValue(res as string)
  }

  function onRangeChange(res: SelectorModelValue) {
    console.log('onChange', res)

    setPopupRangeValue(res)
  }

  return (
    <>
      <TaNoticeBar
        className="top-notice-bar"
        title="基础展示参数可以参考 Calendar"
      />
      <TaGroup title="基础用法">
        <TaCell label="默认" onClick={() => onShow({})}>
          {popupValue}
        </TaCell>
        <TaCell label="+1day" isLink onClick={() => addOneDay()}>
          click
        </TaCell>
        <TaCell
          label="showConfirm=true"
          isLink
          onClick={() => onShow({ showConfirm: true })}
        />
        <TaCell
          label="initialMode=range"
          isLink
          onClick={() => setRangeVisible(true)}
        ></TaCell>
      </TaGroup>
      <TaGroup title="事件监听">
        <TaCell
          label="onChange"
          isLink
          onClick={() => onShow({ changeEvent: true })}
        />
        <TaCell
          label="onConfirm/onCancel"
          isLink
          onClick={() => onShow({ clickEvent: true })}
        />
        <TaCell
          label="onVisibleStateChange"
          isLink
          onClick={() => onShow({ visibleEvent: true })}
        />
      </TaGroup>
      <TaCalendar.Popup
        title={title}
        showConfirm={showConfirm}
        showClose={showClose}
        formatter={formatter}
        parser={parser}
        visible={visible}
        onUpdateVisible={v => setVisible(v)}
        value={popupValue}
        onChange={onChange}
        onConfirm={onConfirm}
        onCancel={onCancel}
        onVisibleStateChange={onVisibleStateChange}
      />
      <TaCalendar.Popup
        title={title}
        initialMode="range"
        visible={rangeVisible}
        onUpdateVisible={v => setRangeVisible(v)}
        value={popupRangeValue}
        onChange={onRangeChange}
      />
    </>
  )
}
