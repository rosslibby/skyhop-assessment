import { ReactNode } from 'react'
import styles from './card.module.css'

export default function Footer({ children }: {
  children: ReactNode
}) {
  return (
    <div className={styles.footer}>
      {children}
    </div>
  )
}
