import { execa } from 'execa'
import { getPath } from './utils.mjs'

const { resolve } = getPath(import.meta.url)

const DOCS_CWD = resolve('./packages/docs')
const DEMO_CWD = resolve('./packages/demo')

export const buildDocs = () => execa('pnpm', ['build'], { cwd: DOCS_CWD })
export const buildDemo = () => execa('pnpm', ['build'], { cwd: DEMO_CWD })
