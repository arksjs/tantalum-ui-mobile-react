import { forwardRef, useCallback } from 'react'
import classNames from 'classnames'
import type { TabBarProps, TabBarEmits } from './types'
import type { FRVFC } from '../helpers'
import { useTab } from '../Tab/use-tab'
import { Badge } from '../Badge'
import { Icon } from '../Icon'
import { Image } from '../Image'
import { getItemClasses } from './util'
import type { TabRef } from '../Tab/types'

const TaTabBar: FRVFC<TabRef, TabBarProps & TabBarEmits> = (
  { className, ...tabProps },
  ref
) => {
  const { options2, listEl, activeIndex, onChange, styles } = useTab(
    tabProps,
    ref,
    {
      tabName: 'TabBar'
    }
  )

  const classes = classNames('ta-tab-bar', 'ta-horizontal-hairline', className)

  const renderItems = useCallback(() => {
    return options2.map((item, index) => (
      <li
        className={classNames(getItemClasses(index, activeIndex))}
        key={item.value}
        onClick={() => onChange(item.value)}
      >
        <Badge className="ta-tab-bar_item-icon" {...item.badge}>
          {item.iconLink ? (
            <Image
              src={index === activeIndex ? item.activeIconLink : item.iconLink}
            />
          ) : item.icon && item.activeIcon ? (
            <Icon icon={index === activeIndex ? item.activeIcon : item.icon} />
          ) : (
            <></>
          )}
        </Badge>
        <span className="ta-tab-bar_item-text">{item.label}</span>
      </li>
    ))
  }, [options2, activeIndex, onChange])

  return (
    <div className={classes} style={styles}>
      <ul className="ta-tab-bar_list" ref={listEl}>
        {renderItems()}
      </ul>
    </div>
  )
}

export default forwardRef(TaTabBar)
