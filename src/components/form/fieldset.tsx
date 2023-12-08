import { ReactNode } from 'react'
import styles from './form.module.css'

export const Fieldset = ({ children }: {
  children: ReactNode
}) => (
  <fieldset className={styles.fieldset}>
    {children}
  </fieldset>
)
