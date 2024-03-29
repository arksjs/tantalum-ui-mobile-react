import classNames from 'classnames'
import type { LoadingIconProps } from './types'
import type { VFC } from '../helpers'
import { DEFAULT_SIZE, DEFAULT_STROKE_WIDTH, getRealStrokeWidth } from './util'

const TaLoadingIcon: VFC<LoadingIconProps> = props => {
  const classes = classNames('ta-loading-icon', props.className)
  const strokeWidth = getRealStrokeWidth(props)

  return (
    <svg
      className={classes}
      height={props.size}
      width={props.size}
      viewBox="0 0 1024 1024"
    >
      <circle
        className="ta-loading-icon_track"
        r="448"
        cx="512"
        cy="512"
        strokeWidth={strokeWidth}
        fill="none"
        style={{ stroke: props.backgroundColor }}
      ></circle>
      <circle
        className="ta-loading-icon_thumb"
        r="448"
        cx="512"
        cy="512"
        stroke={props.color}
        strokeDasharray={314 * 8.96 * props.rate + ',' + 314 * 8.96}
        strokeWidth={strokeWidth}
        fill="none"
        transform="rotate(-90,512,512)"
        strokeLinecap="round"
        style={{ stroke: props.color }}
      ></circle>
    </svg>
  )
}

TaLoadingIcon.defaultProps = {
  rate: 0,
  size: DEFAULT_SIZE,
  strokeWidth: DEFAULT_STROKE_WIDTH
}

export default TaLoadingIcon
