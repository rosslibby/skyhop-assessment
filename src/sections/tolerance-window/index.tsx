import { Label } from 'components/input'
import { Toggle } from 'components/input/toggle'
import { useForm } from 'context/hooks'
import { ChangeEvent } from 'react'
import styles from './tolerance-window.module.css'

export const ToleranceWindow = () => {
  const { updateField } = useForm('tolerance-window')
  const onChange = (e: ChangeEvent<HTMLInputElement>) =>
    updateField(e.target.checked, true)

  return (
    <section>
      <Label htmlFor="tolerance">Tolerance Window:</Label>
      <div className={styles.toggle}>
        <Toggle
          name="tolerance"
          label="Toggle ON"
          onChange={onChange}
        />
        <span className={styles.text}>
          <span>Select Tolerance Level</span>
        </span>
      </div>
    </section>
  )
}
