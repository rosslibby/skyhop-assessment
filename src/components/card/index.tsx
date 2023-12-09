import styles from './card.module.css'
import { ReactNode } from 'react'
import Header from './header'
import Footer from './footer'
import { Button } from 'components/buttons'

type Action = {
  label: string
  onClick: () => void
}

type Props = {
  action?: Action
  children: ReactNode
  dismiss?: Action
  title: string
  summary?: string
}

export default function Card({
  action,
  children,
  dismiss,
  summary,
  title,
}: Props) {
  return (
    <div className={styles.card}>
      <Header>
        <h1>{title}</h1>
      </Header>

      <div className={styles.body}>
        {children}
      </div>

      <Footer>
        {summary && (
          <h3>{summary}</h3>
        )}
        <div className={styles.footerButtons}>
          {action && (
            <Button onClick={action.onClick}>{action?.label}</Button>
          )}
          {dismiss && (
            <Button primary={false} onClick={dismiss.onClick}>{dismiss?.label}</Button>
          )}
        </div>
      </Footer>
    </div>
  )
}
