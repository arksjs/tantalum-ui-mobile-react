import classNames from 'classnames'
import type { SelectorFieldEmits, SelectorFieldProps } from './types'
import type { VFC } from '../helpers'
import { Icon } from '../Icon'
import RightOutlined from '../Icon/icons/RightOutlined'
import { getClasses, getInputClasses } from './util'

const TaSelectorField: VFC<SelectorFieldProps & SelectorFieldEmits> = props => {
  const classes = classNames(getClasses(props), props.className)
  const inputClasses = classNames(getInputClasses(props.label))

  function onFieldClick() {
    props.onFieldClick && props.onFieldClick()
  }

  return (
    <div className={classes} onClick={onFieldClick}>
      <div className={inputClasses}>
        {props.label || props.placeholder || ''}
      </div>
      <Icon className="ta-input_arrow" icon={RightOutlined} />
      <input
        className="ta-input_cover ta-form-input"
        type="text"
        readOnly
        name={props.name}
        disabled={props.disabled}
        value={props.value}
      />
    </div>
  )
}

export default TaSelectorField
