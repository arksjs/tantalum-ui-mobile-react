import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState
} from 'react'
import classNames from 'classnames'
import type {
  CalendarPopupEmits,
  CalendarPopupProps,
  CalendarPopupRef,
  CalendarViewRef,
  CalendarSelectorDetail
} from './types'
import type { FRVFC } from '../helpers'
import CalendarView from './CalendarView'
import { Drawer } from '../Drawer'
import { Button } from '../Button'
import type {
  PopupCustomCancel,
  PopupCustomConfirm,
  PopupRef
} from '../popup/types'
import { cloneDetail, isSameDetail } from '../Picker/util'
import { useLocale } from '../ConfigProvider/context'
import { useHandlers } from './use-calendar'
import { getSourceDetail } from './util'

const TaCalendarPopup: FRVFC<
  CalendarPopupRef,
  CalendarPopupProps & CalendarPopupEmits
> = (props, ref) => {
  const { locale } = useLocale()
  const popupRef = useRef<PopupRef>(null)
  const viewRef = useRef<CalendarViewRef>(null)
  const [valueSize, setValueSize] = useState(0)

  const { getDefaultDetail } = useHandlers(props)
  const detail = useRef<CalendarSelectorDetail>(getDefaultDetail())

  function onCancelClick() {
    popupRef.current?.onCancelClick()
  }

  const customConfirm: PopupCustomConfirm = detail => {
    popupRef.current?.customConfirm(detail)
  }

  const customCancel: PopupCustomCancel = (key, focus) => {
    popupRef.current?.customCancel(key, focus)
  }

  function onViewSelect() {
    const newDetail = getViewDetail()

    setValueSize(newDetail.valueArray.length)

    if (!props.showConfirm) {
      confirm()
    } else {
      // 判断下是否可以confirm
      setValueSize(newDetail.valueArray.length)
    }
  }

  function onConfirmClick() {
    confirm()
  }

  function confirm() {
    const newDetail = getViewDetail()

    if (!isSameDetail(newDetail, detail.current)) {
      updateDetail(newDetail)

      props.onChange && props.onChange(getDetail().value)
    } else {
      updateDetail(newDetail)
    }

    customConfirm(getSourceDetail(getDetail()))
  }

  function getDetail() {
    return cloneDetail(detail.current)
  }

  function updateDetail(newDetail: CalendarSelectorDetail) {
    detail.current = newDetail
    setValueSize(detail.current.valueArray.length)
  }

  function getViewDetail() {
    return viewRef.current?.getDetail() || getDefaultDetail()
  }

  useEffect(() => {
    detail.current = getViewDetail()
  }, [props.value])

  const classes = classNames('ta-calendar-popup', props.className)

  useImperativeHandle(
    ref,
    () => ({
      customConfirm,
      customCancel,
      onCancelClick,
      getDetail
    }),
    []
  )

  return (
    <Drawer
      ref={popupRef}
      className={classes}
      placement="bottom"
      showClose={props.showClose}
      visible={props.visible}
      onConfirm={props.onConfirm}
      onCancel={props.onCancel}
      onVisibleStateChange={props.onVisibleStateChange}
      onUpdateVisible={props.onUpdateVisible}
    >
      <CalendarView
        ref={viewRef}
        value={props.value}
        minDate={props.minDate}
        maxDate={props.maxDate}
        initialMode={props.initialMode}
        allowSameDay={props.allowSameDay}
        maxRange={props.maxRange}
        dayHandler={props.dayHandler}
        firstDayOfWeek={props.firstDayOfWeek}
        formatter={props.formatter}
        parser={props.parser}
        onSelect={onViewSelect}
      />
      {props.showConfirm ? (
        <div className="ta-calendar-popup_confirm">
          <Button
            type="primary"
            onClick={onConfirmClick}
            disabled={valueSize == 0}
          >
            {locale.calendarConfirmText}
          </Button>
        </div>
      ) : (
        <></>
      )}
    </Drawer>
  )
}

export default forwardRef(TaCalendarPopup)
