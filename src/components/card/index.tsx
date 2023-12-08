import styles from './card.module.css'
import { ReactNode } from 'react'
import Header from './header'
import Footer from './footer'

type Action = {
  label: string
  onClick: () => void
}

type Props = {
  action?: Action
  children: ReactNode
  dismiss?: Action
  title: string
}

export default function Card({ action, children, dismiss, title }: Props) {
  return (
    <div className={styles.card}>
      <Header>
        <h1>Document Upload</h1>
      </Header>
      <div className={styles.body}>
        {children}
      </div>
      <Footer>
        <h3>Data in the import file is correct. Please press Continue to import.</h3>
        <div className={styles.footerButtons}>
          <button>Continue Import</button>
          <button>Cancel</button>
        </div>
      </Footer>
    </div>
  )
}
