import {
  AkCell,
  AkGroup,
  AkImagePreview,
  showImagePreview,
  PopupOnVisibleStateChange,
  PopupOnCancel,
  showToast
} from '@/index'
import { useRef, useState } from 'react'

interface showArgs {
  current?: string
  showClose?: boolean
  maskClosable?: boolean
  callbackEvent?: boolean
  visibleEvent?: boolean
}

const imageUrls = [
  'https://cdn.fox2.cn/vfox/swiper/different-1.jpg',
  'https://cdn.fox2.cn/vfox/swiper/different-2.jpg',
  'https://cdn.fox2.cn/vfox/swiper/different-3.jpg'
]

export default function ExpImagePreview() {
  const [current, setCurrent] = useState('')
  const [showClose, setShowClose] = useState(true)
  const [maskClosable, setMaskClosable] = useState(false)
  const [visible, setVisible] = useState(false)

  const callbackEvent = useRef(false)
  const visibleEvent = useRef(false)

  function onShow(args: showArgs = {}) {
    setCurrent(args.current || '')
    setShowClose(!!args.showClose)
    setMaskClosable(!!args.maskClosable)
    setVisible(true)

    callbackEvent.current = !!args.callbackEvent
    visibleEvent.current = !!args.visibleEvent
  }

  const onVisibleStateChange: PopupOnVisibleStateChange = ({ state }) => {
    if (visibleEvent.current) {
      console.log('onVisibleStateChange', state)
      showToast(`${state} 事件触发`)
    }
    if (state === 'hidden') {
      callbackEvent.current = false
      visibleEvent.current = false
    }
  }

  const onChange = (url: string, index: number) => {
    if (callbackEvent.current) {
      console.log('change', index)
      showToast(`切换到第 ${index + 1} 张`)
    }
  }

  const onCancel: PopupOnCancel = res => {
    if (callbackEvent.current) {
      console.log('cancel', res)
      showToast(`关闭`)
    }
  }

  function onCallApi() {
    showImagePreview({
      urls: imageUrls,
      showClose: true,
      imageHighRendering: false,
      success: res => {
        console.log('success', res)
      }
    })
  }

  return (
    <>
      <AkGroup title="基础用法">
        <AkCell label="预览图片" isLink onClick={() => onShow({})}></AkCell>
        <AkCell
          label="指定初始图片"
          isLink
          onClick={() =>
            onShow({
              current: 'https://cdn.fox2.cn/vfox/swiper/different-2.jpg'
            })
          }
        ></AkCell>
        <AkCell
          label="展示关闭按钮"
          isLink
          onClick={() => onShow({ showClose: true })}
        ></AkCell>
      </AkGroup>
      <AkGroup title="事件监听">
        <AkCell
          label="change/cancel"
          isLink
          onClick={() => onShow({ showClose: true, callbackEvent: true })}
        ></AkCell>
        <AkCell
          label="onVisibleStateChange"
          isLink
          onClick={() => onShow({ visibleEvent: true })}
        ></AkCell>
      </AkGroup>
      <AkGroup title="API">
        <AkCell
          label="showImagePreview"
          isLink
          onClick={() => onCallApi()}
        ></AkCell>
      </AkGroup>
      <AkImagePreview
        urls={imageUrls}
        current={current}
        visible={visible}
        maskClosable={maskClosable}
        showClose={showClose}
        imageHighRendering={false}
        onCancel={onCancel}
        onVisibleStateChange={onVisibleStateChange}
        onUpdateVisible={v => setVisible(v)}
        onChange={onChange}
      />
    </>
  )
}
