import type { FormItemCommonProps, FocusEmits } from '../Form/types'

export type Mode = 'search' | 'numeric' | 'decimal' | 'tel' | 'text' | 'none'

type OnChange = (value: string) => void

export interface InputProps extends FormItemCommonProps {
  value?: string
  maxlength?: number | string
  placeholder?: string
  type?: string
  focus?: boolean
  readonly?: boolean
  showClear?: boolean
  showLimit?: boolean
}

export interface InputEmits extends FocusEmits {
  onInput?: OnChange
  onChange?: OnChange
}
