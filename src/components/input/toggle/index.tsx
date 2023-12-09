import styles from './toggle.module.css'
import { ChangeEvent } from 'react'

export const Toggle = ({ label, name, onChange }: {
  label: string
  name: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}) => {
  return (
    <div className={styles.wrapper}>
      <label className={styles.switch}>
        <input type="checkbox" name={name} onChange={onChange} />
        <span className={styles.slider} />
      </label>
      <label htmlFor={name}>{label}</label>
    </div>
  )
}
