import { ReactNode } from 'react'
import styles from './card.module.css'
import { Button } from 'components/buttons'

export default function Header({ children }: {
  children: ReactNode
}) {
  return (
    <div className={styles.header}>
      <Button onClick={() =>  null} className={styles.closeButton}>
        <span className={`material-icons`}>
          close
        </span>
      </Button>
      {children}
    </div>
  )
}
