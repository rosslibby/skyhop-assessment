import { ReactNode } from 'react'
import styles from './buttons.module.css'

export const Button = ({ children, className, onClick, primary = true }: {
  children: ReactNode
  className?: string
  onClick: () => void
  primary?: boolean
}) => {
  const classnames = [
    styles.button,
    primary ? styles.primary : styles.secondary,
    ...(className ? [className] : []),
  ].join(' ')
  return (
    <button className={classnames}>{children}</button>
  )
}
