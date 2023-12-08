import styles from './toggle.module.css'

export const Toggle = ({ label, name }: {
  label: string
  name: string
}) => {
  return (
    <div className={styles.wrapper}>
      <label className={styles.switch}>
        <input type="checkbox" name={name} />
        <span className={styles.slider} />
      </label>
      <label htmlFor={name}>{label}</label>
    </div>
  )
}
