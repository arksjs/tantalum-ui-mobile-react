import { useRef, type MouseEvent } from 'react'
import classNames from 'classnames'
import type { ButtonOption, NavBarEmits, NavBarProps } from './types'
import type { OnClick, RenderProp, VFC } from '../helpers'
import { Button } from '../Button'
import { useLocale } from '../ConfigProvider/context'
import LeftOutlined from '../Icon/icons/LeftOutlined'
import HomeOutlined from '../Icon/icons/HomeOutlined'
import { useDbclick } from '../hooks'

type ButtonMouseEvent = MouseEvent<HTMLButtonElement>

const TaNavBar: VFC<
  NavBarProps &
    NavBarEmits & {
      renderLeft?: RenderProp
      renderRight?: RenderProp
    }
> = props => {
  const { locale } = useLocale()
  const titleEl = useRef<HTMLDivElement>(null)

  const classes = classNames(
    'ta-nav-bar',
    'ta-horizontal-hairline',
    props.className
  )

  const onBack: OnClick = e => {
    props.onBackClick &&
      props.onBackClick(
        {
          index: 0,
          item: {
            text: 'back'
          }
        },
        e.currentTarget
      )
  }

  const onHome: OnClick = e => {
    props.onHomeClick &&
      props.onHomeClick(
        {
          item: {
            text: 'home'
          },
          index: props.showBack ? 1 : 0
        },
        e.currentTarget
      )
  }

  function onLeftIconClick(
    e: ButtonMouseEvent,
    item: ButtonOption,
    index: number
  ) {
    props.onLeftButtonClick &&
      props.onLeftButtonClick(
        {
          item: {
            text: item.text
          },
          index
        },
        e.currentTarget
      )
  }

  function onRightIconClick(
    e: ButtonMouseEvent,
    item: ButtonOption,
    index: number
  ) {
    props.onRightButtonClick &&
      props.onRightButtonClick(
        {
          item: {
            text: item.text
          },
          index
        },
        e.currentTarget
      )
  }

  function renderLeftButtons() {
    if (
      (props.leftButtons && props.leftButtons.length > 0) ||
      props.showBack ||
      props.showHome
    ) {
      return (
        <Button.Group
          className="ta-nav-bar_button-group"
          shape={props.iconOnly ? 'square' : 'rectangle'}
          pattern="borderless"
        >
          {props.leftButtons && props.leftButtons.length > 0 ? (
            props.leftButtons.map((item, index) => {
              return (
                <Button
                  className="ta-nav-bar_button"
                  key={index}
                  transparent
                  type={item.type}
                  icon={item.icon}
                  onClick={e => onLeftIconClick(e, item, index)}
                >
                  {item.text}
                </Button>
              )
            })
          ) : (
            <>
              {props.showBack ? (
                <Button
                  className="ta-nav-bar_button"
                  type="default"
                  icon={LeftOutlined}
                  transparent
                  onClick={onBack}
                >
                  {locale.navBarBackButtonText}
                </Button>
              ) : (
                <></>
              )}
              {props.showHome ? (
                <Button
                  className="ta-nav-bar_button"
                  type="default"
                  icon={HomeOutlined}
                  transparent
                  onClick={onHome}
                >
                  {locale.navBarHomeButtonText}
                </Button>
              ) : (
                <></>
              )}
            </>
          )}
        </Button.Group>
      )
    }
    return <></>
  }

  function renderRightButtons() {
    if (props.rightButtons && props.rightButtons.length > 0) {
      return (
        <Button.Group
          className="ta-nav-bar_button-group"
          shape={props.iconOnly ? 'square' : 'rectangle'}
          pattern="borderless"
        >
          {' '}
          {props.rightButtons.map((item, index) => {
            return (
              <Button
                className="ta-nav-bar_button"
                key={index}
                transparent
                type={item.type}
                icon={item.icon}
                onClick={e => onRightIconClick(e, item, index)}
              >
                {item.text}
              </Button>
            )
          })}
        </Button.Group>
      )
    }
    return <></>
  }

  useDbclick(titleEl, ($el, event) => {
    if (event === 'dbclick') {
      props.onTitleDbclick && props.onTitleDbclick($el)
    }
  })

  return (
    <div className={classes}>
      <div className="ta-nav-bar_inner">
        <div className="ta-nav-bar_left">
          {props.renderLeft ? props.renderLeft() : renderLeftButtons()}
        </div>
        <div className="ta-nav-bar_title" ref={titleEl}>
          {props.title}
        </div>
        <div className="ta-nav-bar_right">
          {props.renderRight ? props.renderRight() : renderRightButtons()}
        </div>
      </div>
    </div>
  )
}

TaNavBar.defaultProps = {
  showBack: false,
  showHome: false,
  iconOnly: true
}

export default TaNavBar
