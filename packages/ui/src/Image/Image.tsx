import type { DragEventHandler, HTMLAttributes } from 'react'
import { useRef, useEffect, useState } from 'react'
import classNames from 'classnames'
import type { ImageEmits, ImageProps, LoadedResource } from './types'
import { getRatioStyles, getImgClasses } from './util'
import {
  addLazyQueue,
  loadNow,
  removeComponentFromLazy,
  withCheckInView
} from './load-image'
import type { VFC } from '../helpers'
import ImageOutlined from '../Icon/icons/ImageOutlined'
import ImageBreakOutlined from '../Icon/icons/ImageBreakOutlined'
import { Icon } from '../Icon'

const TaImage: VFC<
  Omit<HTMLAttributes<HTMLDivElement>, 'onLoad' | 'onError'> &
    ImageProps &
    ImageEmits
> = ({
  loadingIcon = ImageOutlined,
  errorIcon = ImageBreakOutlined,
  lazyLoad = false,
  draggable = true,
  src,
  className,
  mode,
  aspectRatio,
  iconSize,
  onLoad,
  onError,
  ...attrs
}) => {
  const root = useRef<HTMLDivElement | null>(null)
  const classes = classNames('ta-image', className)
  const imgClasses = classNames(getImgClasses(mode))
  const ratioStyles = getRatioStyles(aspectRatio)

  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [currentSrc, setCurrentSrc] = useState<string | null>(null)

  const uid = useRef(Symbol())
  const mounted = useRef(false)

  function load(imgSrc: string) {
    ;(lazyLoad ? addLazyQueue : loadNow)({
      src: imgSrc,
      uid: uid.current,
      checkInView: withCheckInView(root.current as HTMLElement),
      onLoad: _onLoad,
      onError: _onError
    })
  }

  function _onLoad(res: LoadedResource) {
    if (!mounted.current) {
      return
    }

    if (res.src === src) {
      // 防止多次变更图片导致的图片不正确
      setLoading(false)
      setError(false)
      setCurrentSrc(res.src)
    }

    onLoad &&
      onLoad({
        width: res.naturalWidth,
        height: res.naturalHeight,
        src: res.src
      })
  }

  function _onError(e: Error) {
    if (!mounted.current) {
      return
    }

    setLoading(false)
    setError(true)

    onError && onError(e)
  }

  const onDrag: DragEventHandler<HTMLImageElement> = e => {
    if (!draggable) {
      e.preventDefault()
    }
  }

  useEffect(() => {
    src && load(src)
  }, [src])

  useEffect(() => {
    mounted.current = true

    return () => {
      mounted.current = false
      removeComponentFromLazy(uid.current)
    }
  }, [])

  return (
    <div {...attrs} className={classes} ref={root}>
      {aspectRatio != null && aspectRatio > 0 ? (
        <span className="ta-image_ratio" style={ratioStyles}></span>
      ) : (
        <></>
      )}
      {loading ? (
        <i className="ta-image_loading">
          <Icon icon={loadingIcon} size={iconSize} />
        </i>
      ) : (
        <></>
      )}
      {error ? (
        <i className="ta-image_error">
          <Icon icon={errorIcon} size={iconSize} />
        </i>
      ) : (
        <></>
      )}
      {currentSrc ? (
        <img className={imgClasses} src={currentSrc} onDragStart={onDrag} />
      ) : (
        <></>
      )}
    </div>
  )
}

export default TaImage
