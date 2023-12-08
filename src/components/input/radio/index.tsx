import { ChangeEvent, useState } from 'react'
import styles from './radio.module.css'
import { InputValue, RadioOption } from 'types'

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
    <fieldset>
      <legend>{label}</legend>
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
          <label htmlFor={`${name}-${option.value}`}>{option.label}</label>
        </div>
      ))}
    </fieldset>
  )
}
