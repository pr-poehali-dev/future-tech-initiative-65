import type { ReactNode } from "react"

export interface SectionItem {
  label: string
  text: string
  subitems?: string[]
}

export interface Section {
  id: string
  title: string
  subtitle?: ReactNode
  content?: string
  items?: SectionItem[]
  showButton?: boolean
  buttonText?: string
  image?: string
}

export interface SectionProps extends Section {
  isActive: boolean
}
