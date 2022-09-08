import {
  AkNumberKeyboard,
  AkInput,
  AkCell,
  AkGroup,
  NumberKeyboardOnDelete,
  NumberKeyboardOnClose,
  showToast,
  NumberKeyboardType
} from '@/index'
import { useState } from 'react'

interface ShowArgs {
  title?: string
  type?: NumberKeyboardType
  customKey?: string | string[]
  closeEvent?: boolean
  confirmEvent?: boolean
}

export default function ExpNumberKeyboard() {
  const [visible1, setVisible1] = useState(false)
  const [visible2, setVisible2] = useState(false)
  const [inputValue, setInputValue] = useState('')

  const [title, setTitle] = useState<string>()
  const [customKey, setCustomKey] = useState<string | string[]>()
  const [type, setType] = useState<NumberKeyboardType>()

  function onShow(args: ShowArgs) {
    setTitle(args.title)
    setCustomKey(args.customKey)
    setType(args.type)

    setVisible1(true)
  }

  const onInput = (value: string) => {
    showToast(value)
  }

  const onChange = (value: string) => {
    console.log('change', value)
    showToast(`本次输入值为：${value}`)
  }

  const onDelete: NumberKeyboardOnDelete = res => {
    console.log('delete', res)
    showToast('删除')
  }

  const onClose: NumberKeyboardOnClose = res => {
    console.log('close', res)
  }

  return (
    <>
      <AkGroup title="基础键盘">
        <AkCell label="默认键盘" isLink onClick={() => onShow({})}></AkCell>
        <AkCell
          label="带小数点（customKey='.'）"
          isLink
          onClick={() => onShow({ customKey: '.' })}
        ></AkCell>
        <AkCell
          label="身份证（customKey='X'）"
          isLink
          onClick={() => onShow({ customKey: 'X' })}
        ></AkCell>
      </AkGroup>
      <AkGroup title="带右侧栏键盘">
        <AkCell
          label="默认键盘"
          isLink
          onClick={() => onShow({ type: 'rightColumn' })}
        ></AkCell>
        <AkCell
          label="1个自定义值（customKey=['.']）"
          isLink
          onClick={() => onShow({ type: 'rightColumn', customKey: '.' })}
        ></AkCell>
        <AkCell
          label="2个自定义值（customKey=['00', '.']）"
          isLink
          onClick={() =>
            onShow({ type: 'rightColumn', customKey: ['00', '.'] })
          }
        ></AkCell>
      </AkGroup>
      <AkGroup title="其他">
        <AkCell
          label="设置标题"
          isLink
          onClick={() => onShow({ title: '键盘标题' })}
        ></AkCell>
        <AkCell label="数据绑定" isLink onClick={() => setVisible2(true)}>
          <AkInput value={inputValue} readonly />
        </AkCell>
      </AkGroup>
      <AkNumberKeyboard
        visible={visible1}
        title={title}
        customKey={customKey}
        type={type}
        onUpdateVisible={v => setVisible1(v)}
        onChange={onChange}
        onClose={onClose}
        onDelete={onDelete}
        onInput={onInput}
      />
      <AkNumberKeyboard
        visible={visible2}
        value={inputValue}
        onUpdateVisible={v => setVisible2(v)}
        onUpdateValue={v => setInputValue(v)}
      />
    </>
  )
}
