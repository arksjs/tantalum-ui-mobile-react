import {
  TaButton,
  TaCell,
  TaGroup,
  TaPopDialog,
  PlacementType,
  PopupOnCancel,
  PopupOnVisibleStateChange,
  showPopDialog,
  showToast
} from '@/index'
import { useRef, useState } from 'react'

interface showArgs {
  selector?: string
  content?: string
  placement?: PlacementType
  showCancel?: boolean
  cancelText?: string
  confirmText?: string
  visibleEvent?: boolean
  confirmEvent?: boolean
}

const defaultContent = '确定要删除该条数据？'

export default function ExpPopDialog() {
  const [selector, setSelector] = useState<string>()
  const [content, setContent] = useState(defaultContent)
  const [placement, setPlacement] = useState<PlacementType>()
  const [showCancel, setShowCancel] = useState(false)
  const [cancelText, setCancelText] = useState<string>()
  const [confirmText, setConfirmText] = useState<string>()

  const [visible, setVisible] = useState(false)
  const [visible2, setVisible2] = useState(false)

  const confirmEvent = useRef(false)
  const visibleEvent = useRef(false)

  function onShow(args: showArgs = {}) {
    setSelector(args.selector)
    setPlacement(args.placement)
    setContent(args.content || defaultContent)
    setShowCancel(args.showCancel !== false)
    setCancelText(args.cancelText)
    setConfirmText(args.confirmText)

    visibleEvent.current = !!args.visibleEvent
    confirmEvent.current = !!args.confirmEvent

    visibleEvent.current = !!args.visibleEvent

    setVisible(true)
  }

  const onVisibleStateChange: PopupOnVisibleStateChange = ({ state }) => {
    if (visibleEvent.current) {
      console.log('onVisibleStateChange', state)
      showToast(`${state} 事件触发`)
    }
    if (state === 'hidden') {
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

  function onCallApi(selector: string) {
    showPopDialog({
      selector,
      placement: 'top',
      content: defaultContent,
      success: res => {
        console.log('success', res)
        showToast(res.confirm ? `点击了确定` : `点击了取消`)
      }
    })
  }

  return (
    <>
      <TaGroup title="基础用法">
        <TaCell label="基础">
          <TaButton
            size="small"
            id="popDialog"
            shape="circle"
            icon="DeleteOutlined"
            onClick={() => onShow({ selector: '#popDialog' })}
          ></TaButton>
        </TaCell>
        <TaCell label="不展示取消按钮">
          <TaButton
            size="small"
            id="popDialogNoCancel"
            shape="circle"
            icon="DeleteOutlined"
            onClick={() =>
              onShow({ selector: '#popDialogNoCancel', showCancel: false })
            }
          ></TaButton>
        </TaCell>
        <TaCell label="设置按钮文案">
          <TaButton
            size="small"
            id="popDialogButtonText"
            shape="circle"
            icon="PlusOutlined"
            onClick={() =>
              onShow({
                selector: '#popDialogNoCancel',
                content: '这有一份关爱保险待你查收',
                confirmText: '接受',
                cancelText: '拒绝'
              })
            }
          ></TaButton>
        </TaCell>
        <TaCell label="不展示蒙层">
          <TaButton
            size="small"
            id="popDialogNoMask"
            shape="circle"
            icon="DeleteOutlined"
            onClick={() => setVisible2(true)}
          ></TaButton>
        </TaCell>
      </TaGroup>
      <TaGroup title="方向 placement=top/bottom/left/right">
        <div className="exp-popover-box2">
          <div>
            <TaButton
              size="small"
              id="popDialogTop2"
              shape="circle"
              icon="UpOutlined"
              onClick={() =>
                onShow({ placement: 'top', selector: '#popDialogTop2' })
              }
            >
              上
            </TaButton>
          </div>
          <div>
            <TaButton
              size="small"
              id="popDialogLeft2"
              shape="circle"
              icon="LeftOutlined"
              onClick={() =>
                onShow({ placement: 'left', selector: '#popDialogLeft2' })
              }
            >
              左
            </TaButton>
            <TaButton
              className="exp-popover-box2-ml"
              size="small"
              id="popDialogRight2"
              shape="circle"
              icon="RightOutlined"
              onClick={() =>
                onShow({ placement: 'right', selector: '#popDialogRight2' })
              }
            >
              右
            </TaButton>
          </div>
          <div>
            <TaButton
              size="small"
              id="popDialogBottom2"
              shape="circle"
              icon="DownOutlined"
              onClick={() =>
                onShow({ placement: 'bottom', selector: '#popDialogBottom2' })
              }
            >
              下
            </TaButton>
          </div>
        </div>
      </TaGroup>
      <TaGroup title="事件监听">
        <TaCell label="confirm/cancel">
          <TaButton
            size="small"
            id="popDialogEvent"
            shape="circle"
            icon="DeleteOutlined"
            onClick={() =>
              onShow({ confirmEvent: true, selector: '#popDialogEvent' })
            }
          ></TaButton>
        </TaCell>
        <TaCell label="onVisibleStateChange">
          <TaButton
            size="small"
            id="popDialogEvent2"
            shape="circle"
            icon="DeleteOutlined"
            onClick={() =>
              onShow({ visibleEvent: true, selector: '#popDialogEvent2' })
            }
          ></TaButton>
        </TaCell>
      </TaGroup>
      <TaGroup title="API">
        <TaCell label="showPopDialog">
          <TaButton
            size="small"
            id="popDialogApi"
            shape="circle"
            icon="DeleteOutlined"
            onClick={() => onCallApi('#popDialogApi')}
          ></TaButton>
        </TaCell>
      </TaGroup>
      <TaPopDialog
        placement={placement}
        content={content}
        selector={selector}
        visible={visible}
        showCancel={showCancel}
        confirmText={confirmText}
        cancelText={cancelText}
        onUpdateVisible={v => setVisible(v)}
        onVisibleStateChange={onVisibleStateChange}
        onCancel={onCancel}
        onConfirm={onConfirm}
      />
      <TaPopDialog
        visible={visible2}
        selector="#popDialogNoMask"
        showMask={false}
        content="无蒙层气泡内容"
        onUpdateVisible={v => setVisible2(v)}
      />
    </>
  )
}
