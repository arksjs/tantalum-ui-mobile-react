import { useContext } from 'react'
import classNames from 'classnames'
import type { AvatarProps } from './types'
import type { FC } from '../helpers'
import {
  GENDER_TYPES,
  getAvatarClasses,
  getAvatarShape,
  getAvatarSize,
  getAvatarStyles,
  getBadgeProps
} from './util'
import { Badge } from '../Badge'
import { GroupContext } from './context'
import { Image } from '../Image'
import { Icon } from '../Icon'
import ManOutlined from '../Icon/icons/ManOutlined'
import WomanOutlined from '../Icon/icons/WomanOutlined'
import UserOutlined from '../Icon/icons/UserOutlined'

const TaAvatar: FC<AvatarProps> = props => {
  const consumer = useContext(GroupContext)
  const size2 = getAvatarSize(props, consumer)
  const shape2 = getAvatarShape(props, consumer.hasGroup)

  const classes = classNames(
    getAvatarClasses(props, size2, shape2),
    props.className
  )
  const styles = getAvatarStyles(props, size2)
  const badgeProps = getBadgeProps(props)

  return (
    <Badge
      className={classes}
      style={styles}
      {...badgeProps}
      renderBadge={
        props.gender && GENDER_TYPES.includes(props.gender)
          ? () =>
              props.gender === 'man' ? (
                <Icon icon={ManOutlined} />
              ) : props.gender === 'woman' ? (
                <Icon icon={WomanOutlined} />
              ) : (
                <></>
              )
          : undefined
      }
    >
      {props.children || (
        <Image
          className="ta-avatar_image"
          src={props.src}
          mode="aspectFill"
          loadingIcon={UserOutlined}
        />
      )}
    </Badge>
  )
}

export default TaAvatar
