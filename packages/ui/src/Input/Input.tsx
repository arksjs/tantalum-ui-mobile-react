import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type MouseEventHandler
} from 'react'
import classNames from 'classnames'
import type { InputEmits, InputProps } from './types'
import type {
  CSSProperties,
  OnClick,
  OnFocus,
  RenderProp,
  VFC
} from '../helpers'
import { getClasses, getInputMode, getMaxLength, getValue } from './util'
import CloseCircleFilled from '../Icon/icons/CloseCircleFilled'
import { Icon } from '../Icon'

const TaInput: VFC<
  InputProps &
    InputEmits & {
      renderPrepend?: RenderProp
      renderAppend?: RenderProp
      style?: CSSProperties
      onClick?: OnClick
    }
> = ({
  type = 'text',
  value = '',
  disabled,
  readonly,
  renderPrepend,
  renderAppend,
  onClick,
  ...props
}) => {
  const [active, setActive] = useState(false)
  const [isShowClear, setIsShowClear] = useState(false)
  const [formValue, setFormValue] = useState('')

  const classes = classNames(
    getClasses({
      type,
      prepend: !!renderPrepend,
      append: !!renderAppend,
      disabled: !!disabled,
      active,
      readonly: !!readonly
    }),
    props.className
  )
  const maxLength = getMaxLength(props.maxlength)
  const { inputType, inputMode } = getInputMode(type)

  const inputEl = useRef<HTMLInputElement>(null)
  const textareaEl = useRef<HTMLTextAreaElement>(null)

  function getInputEl() {
    return type === 'textarea' ? textareaEl.current : inputEl.current
  }

  function setInputValue(val: string | number) {
    const el = getInputEl()
    el && (el.value = val.toString())
  }

  function getInputValue() {
    const el = getInputEl()
    return el ? el.value : ''
  }

  function setFocus() {
    const el = getInputEl()
    el && el.focus()
  }

  function setBlur() {
    const el = getInputEl()
    el && el.blur()
  }

  function updateValue(val: string | number) {
    const newValue = getValue(val, type)

    let isChange = false

    if (newValue !== getInputValue()) {
      setInputValue(newValue)
    }

    if (newValue !== formValue) {
      setFormValue(newValue)
      isChange = true
    }

    return { value: newValue, isChange }
  }

  function updateInput(newVal: string) {
    const { value, isChange } = updateValue(newVal)

    isChange && props.onInput && props.onInput(value)
  }

  const isComposition = useRef(false)
  function onCompositionStart() {
    isComposition.current = true
  }
  function onCompositionEnd() {
    isComposition.current = false
    updateInput(getInputValue())
  }

  const onFocus: OnFocus = e => {
    setActive(true)
    props.onFocus && props.onFocus(e)
  }

  const onBlur: OnFocus = e => {
    setActive(false)
    props.onBlur && props.onBlur(e)
  }

  function onInput() {
    if (!isComposition.current) {
      updateInput(getInputValue())
    }
  }

  function onChange() {
    props.onChange && props.onChange(getInputValue())
  }

  const onClear: MouseEventHandler<SVGSVGElement> = useCallback(
    e => {
      e.stopPropagation()
      updateInput('')
      onChange()
    },
    [props.onChange, props.onInput]
  )

  const renderShowClear = useMemo(
    () =>
      props.showClear && isShowClear ? (
        <Icon
          className="ta-input_clear"
          icon={CloseCircleFilled}
          onMouseDown={onClear}
        />
      ) : (
        <></>
      ),
    [props.showClear, isShowClear, onClear]
  )

  useEffect(() => {
    value != formValue && updateValue(value ?? '')
  }, [value])

  useEffect(() => {
    props.focus ? setFocus() : setBlur()
  }, [props.focus])

  const showClearTimer = useRef<number>()
  useEffect(() => {
    clearTimeout(showClearTimer.current)
    if (formValue && active) {
      showClearTimer.current = window.setTimeout(
        () => setIsShowClear(true),
        200
      )
    } else {
      setIsShowClear(false)
    }
  }, [formValue, active])

  return (
    <label className={classes} style={props.style}>
      {renderPrepend ? (
        <div className="ta-input_prepend">{renderPrepend()}</div>
      ) : (
        <></>
      )}
      {type === 'textarea' ? (
        <textarea
          className="ta-input_input ta-input_textarea"
          name={props.name}
          disabled={disabled}
          placeholder={props.placeholder}
          readOnly={readonly}
          maxLength={maxLength}
          ref={textareaEl}
          onInput={onInput}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          onClick={onClick}
        />
      ) : (
        <input
          className="ta-input_input"
          type={inputType}
          inputMode={inputMode}
          name={props.name}
          disabled={disabled}
          placeholder={props.placeholder}
          readOnly={readonly}
          maxLength={maxLength}
          ref={inputEl}
          onInput={onInput}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          onClick={onClick}
          onCompositionStart={onCompositionStart}
          onCompositionEnd={onCompositionEnd}
        />
      )}
      {props.showLimit && maxLength > 0 ? (
        <span className="ta-input_limit">
          {formValue.length}/{maxLength}
        </span>
      ) : (
        <></>
      )}
      {renderShowClear}
      {renderAppend ? (
        <div className="ta-input_append">{renderAppend()}</div>
      ) : (
        <></>
      )}
    </label>
  )
}

TaInput.defaultProps = {
  type: 'text',
  value: ''
}

export default TaInput
