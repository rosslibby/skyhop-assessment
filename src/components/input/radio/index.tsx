import { ChangeEvent } from 'react'
import styles from './radio.module.css'
import { RadioOption } from 'types'
import { Label } from '../label'

export const RadioGroup = ({ label, name, onChange, options }: {
  label: string
  name: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  options: RadioOption[]
}) => {
  return (
    <fieldset className={styles.group}>
      <legend>
        <Label>{label}</Label>
      </legend>
      <div className={styles.inputs}>
        {options.map((option: RadioOption, index: number) => (
          <div key={`${name}-radio-${index}`}>
            <input
              className={styles.radio}
              id={`${name}-${option.value}`}
              name={name}
              onChange={onChange}
              type="radio"
              value={option.value}
            />
            <Label htmlFor={`${name}-${option.value}`}>{option.label}</Label>
          </div>
        ))}
      </div>
    </fieldset>
  )
}
