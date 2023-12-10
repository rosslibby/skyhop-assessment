import { ReactNode } from 'react'
import styles from './buttons.module.css'

export const Button = ({
  children,
  className,
  disabled = false,
  onClick,
  primary = true,
}: {
  children: ReactNode
  className?: string
  disabled?: boolean
  onClick: () => void
  primary?: boolean
}) => {
  const classnames = [
    ...(className ? [className] : []),
    styles.button,
    primary ? styles.primary : styles.secondary,
  ].join(' ')

  return (
    <button
      className={classnames}
      disabled={disabled}
      onClick={onClick}
    >{children}</button>
  )
}
