import {
  TaCell,
  TaGroup,
  TaModal,
  TaImage,
  PopupOnVisibleStateChange,
  PopupOnCancel,
  showToast
} from '@/index'
import { useRef, useState } from 'react'

interface showArgs {
  showClose?: boolean
  maskClosable?: boolean
}

const imageUrl = 'https://cdn.fox2.cn/vfox/swiper/center-2.jpg'

export default function ExpModal() {
  const [showClose, setShowClose] = useState(true)
  const [maskClosable, setMaskClosable] = useState(false)
  const [visible, setVisible] = useState(false)
  const [visible2, setVisible2] = useState(false)

  const callbackEvent = useRef(false)
  const visibleEvent = useRef(false)

  function onShow(args: showArgs = {}) {
    setShowClose(args.showClose !== false)
    setMaskClosable(!!args.maskClosable)
    setVisible(true)
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

  const onCancel: PopupOnCancel = res => {
    console.log('onCancel', res)

    if (callbackEvent.current) {
      if (res.source === 'closeClick') {
        showToast('点击了关闭按钮')
      } else if (res.source === 'maskClick') {
        showToast('点击了蒙层')
      }
    }
  }

  return (
    <>
      <TaGroup title="基础用法">
        <TaCell label="默认" isLink onClick={() => onShow()} />
        <TaCell
          label="蒙层可点击"
          isLink
          onClick={() => onShow({ maskClosable: true, showClose: true })}
        />
        <TaCell
          label="隐藏关闭按钮"
          isLink
          onClick={() => onShow({ showClose: false, maskClosable: true })}
        />
      </TaGroup>
      <TaGroup title="自定义子节点">
        <TaCell label="图片" isLink onClick={() => setVisible2(true)} />
      </TaGroup>
      <TaGroup title="事件监听">
        <TaCell
          label="onCancel"
          isLink
          onClick={() => {
            callbackEvent.current = true
            onShow({ maskClosable: true })
          }}
        />
        <TaCell
          label="onVisibleStateChange"
          isLink
          onClick={() => {
            visibleEvent.current = true
            onShow()
          }}
        />
      </TaGroup>
      <TaModal
        visible={visible}
        maskClosable={maskClosable}
        showClose={showClose}
        onCancel={onCancel}
        onVisibleStateChange={onVisibleStateChange}
        onUpdateVisible={v => setVisible(v)}
      ></TaModal>
      <TaModal visible={visible2} onUpdateVisible={v => setVisible2(v)}>
        <TaImage className="exp-image-image" src={imageUrl} aspectRatio="1" />
      </TaModal>
    </>
  )
}
