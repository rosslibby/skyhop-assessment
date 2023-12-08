import { ReactNode } from 'react'
import styles from './card.module.css'

export default function Header({ children }: {
  children: ReactNode
}) {
  return (
    <div className={styles.header}>
      {children}
    </div>
  )
}
