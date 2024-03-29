import { createContext } from 'react'
import type { GroupContext } from '../hooks'
import type { CollapseContextValue, CollapseContextItemRef } from './types'

export const CollapseContext: GroupContext<
  CollapseContextValue,
  CollapseContextItemRef
> = createContext<CollapseContextValue>({ hasGroup: false })
