import { forwardRef, useCallback, useImperativeHandle, useRef } from 'react'
import classNames from 'classnames'
import type { ActionSheetEmits, ActionSheetProps } from './types'
import type { FRVFC } from '../helpers'
import { getItemClasses, getOptions } from './util'
import { Drawer } from '../Drawer'
import { useLocale } from '../ConfigProvider/context'
import type { PopupRef } from '../popup/types'

const TaActionSheet: FRVFC<PopupRef, ActionSheetProps & ActionSheetEmits> = (
  props,
  ref
) => {
  const { locale } = useLocale()
  const popupRef = useRef<PopupRef>(null)

  const classes = classNames('ta-action-sheet', props.className)

  const renderOptions = useCallback(() => {
    function onItemClick(index: number) {
      popupRef.current?.customConfirm({
        index,
        item: {
          name: props.options[index].name
        }
      })
    }

    return getOptions(props.options).map((item, index) => (
      <li
        className={classNames(getItemClasses(item))}
        key={index}
        onClick={() => onItemClick(index)}
      >
        <div className="ta-action-sheet_item-inner">
          <span>{item.name}</span>
          {item.description ? <small>{item.description}</small> : <></>}
        </div>
      </li>
    ))
  }, [props.options, popupRef])

  function onCancelClick() {
    popupRef.current?.onCancelClick()
  }

  useImperativeHandle(ref, () => popupRef.current as PopupRef, [])

  return (
    <Drawer
      ref={popupRef}
      className={classes}
      title={props.title}
      placement="bottom"
      visible={props.visible}
      onConfirm={props.onConfirm}
      onCancel={props.onCancel}
      onVisibleStateChange={props.onVisibleStateChange}
      onUpdateVisible={props.onUpdateVisible}
    >
      <ul className="ta-action-sheet_list">{renderOptions()}</ul>
      {props.showCancel ? (
        <ul className="ta-action-sheet_list">
          <li
            className="ta-action-sheet_item ta-horizontal-hairline"
            onClick={onCancelClick}
          >
            <div className="ta-action-sheet_item-inner align--center">
              <span>{props.cancelText || locale.actionSheetCancelText}</span>
            </div>
          </li>
        </ul>
      ) : (
        <></>
      )}
    </Drawer>
  )
}

export default forwardRef(TaActionSheet)
