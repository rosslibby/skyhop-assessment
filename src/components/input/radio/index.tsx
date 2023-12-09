import { ChangeEvent, useState } from 'react'
import styles from './radio.module.css'
import { InputValue, RadioOption } from 'types'
import { Label } from '../label'

export const RadioGroup = ({ label, name, onChange, options }: {
  label: string
  name: string
  onChange: (value: InputValue) => void
  options: RadioOption[]
}) => {
  const [value, setValue] = useState<InputValue | undefined>(
    options.find((option: RadioOption) => option.checked)?.value
  )
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value

    setValue(value)
    onChange(value)
  }

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
              defaultChecked={value === option.value}
              id={`${name}-${option.value}`}
              name={name}
              onChange={handleChange}
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
