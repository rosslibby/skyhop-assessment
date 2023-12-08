import { ReactNode } from 'react'
import styles from './label.module.css'

type Props = {
  children: ReactNode
  [key: string]: any
}

export const Label = (props: Props) => {
  const classnames = [props.className, styles.label].filter(
    (name: string | undefined) => Boolean(name)
  ).join(' ')

  return (
    <label {...props} className={classnames}>{props.children}</label>
  )
}