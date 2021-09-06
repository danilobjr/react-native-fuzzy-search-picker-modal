import { ReactNode } from 'react'

export type Item = {
  label: string | ReactNode
  searchable?: string
  value: string
}
