import {
  showToast,
  PopupOnCancel,
  showDialog,
  PopupOnVisibleStateChange,
  TaCell,
  TaGroup,
  TaDialog
} from '@/index'
import { useRef, useState } from 'react'

interface showArgs {
  title?: string
  content?: string
  showCancel?: boolean
  cancelText?: string
  confirmText?: string
  visibleEvent?: boolean
  confirmEvent?: boolean
}

const defaultContent = '提示内容提示内容提示内容提示内容提示内容提示内容'

export default function ExpDialog() {
  const [visible, setVisible] = useState(false)
  const [title, setTitle] = useState<string>()
  const [content, setContent] = useState('')
  const [showCancel, setShowCancel] = useState(false)
  const [cancelText, setCancelText] = useState<string>()
  const [confirmText, setConfirmText] = useState<string>()

  const visibleEvent = useRef(false)
  const confirmEvent = useRef(false)

  function onShow(args: showArgs = {}) {
    setTitle(args.title)
    setContent(args.content || defaultContent)
    setShowCancel(args.showCancel !== false)
    setCancelText(args.cancelText)
    setConfirmText(args.confirmText)

    visibleEvent.current = !!args.visibleEvent
    confirmEvent.current = !!args.confirmEvent

    setVisible(true)
  }

  const onVisibleStateChange: PopupOnVisibleStateChange = res => {
    if (visibleEvent.current) {
      console.log('onVisibleStateChange', res)
      showToast(`${res.state} 事件触发`)
    }

    if (res.state === 'hidden') {
      visibleEvent.current = false
      confirmEvent.current = false
    }
  }

  const onConfirm = () => {
    if (confirmEvent.current) {
      console.log('confirm')
      showToast('点击确定按钮')
    }
  }

  const onCancel: PopupOnCancel = res => {
    if (confirmEvent.current) {
      console.log('cancel', res)
      showToast('点击取消按钮')
    }
  }

  function onCallApi() {
    showDialog({
      title: '标题',
      content: defaultContent,
      maskClosable: true,
      success: (res: any) => {
        console.log('success', res)
        showToast(res.confirm ? 'confirm = true' : 'cancel = true')
      }
    })
  }

  return (
    <>
      <TaGroup title="基础用法">
        <TaCell
          label="默认"
          isLink
          onClick={() =>
            onShow({
              title: '标题'
            })
          }
        />
        <TaCell label="不带标题" isLink onClick={() => onShow()} />
        <TaCell
          label="不显示取消按钮"
          isLink
          onClick={() =>
            onShow({
              title: '标题',
              showCancel: false
            })
          }
        />
        <TaCell
          label="自定义按钮文案"
          isLink
          onClick={() =>
            onShow({
              title: '惊喜',
              content: '这有一份关爱保险待你查收',
              cancelText: '拒绝',
              confirmText: '接受'
            })
          }
        />
      </TaGroup>
      <TaGroup title="事件监听">
        <TaCell
          label="confirm/cancel"
          isLink
          onClick={() =>
            onShow({
              title: '标题',
              confirmEvent: true
            })
          }
        />
        <TaCell
          label="onVisibleStateChange"
          isLink
          onClick={() =>
            onShow({
              title: '标题',
              visibleEvent: true
            })
          }
        />
      </TaGroup>
      <TaGroup title="API">
        <TaCell label="showDialog" isLink onClick={() => onCallApi()} />
      </TaGroup>
      <TaDialog
        visible={visible}
        title={title}
        content={content}
        showCancel={showCancel}
        confirmText={confirmText}
        cancelText={cancelText}
        onUpdateVisible={v => setVisible(v)}
        onVisibleStateChange={onVisibleStateChange}
        onCancel={onCancel}
        onConfirm={onConfirm}
      ></TaDialog>
    </>
  )
}
