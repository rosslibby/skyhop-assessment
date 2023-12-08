import { ChangeEvent, useState } from 'react'
import styles from './select.module.css'
import { InputValue } from 'types'

type Option = {
  default?: boolean
  disabled?: boolean
  name: string
  value: InputValue
}

export const Select = ({ name, onChange, options }: {
  name: string
  onChange: (value: InputValue) => void
  options: Option[]
}) => {
  const [value, setValue] = useState<InputValue | undefined>(
    options.find((option: Option) => option.default)?.value
  )
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value
    setValue(value)
    onChange(value)
  }

  return (
    <select
      className={styles.select}
      name={name}
      onChange={handleChange}
      defaultValue={value}
    >
      {options.map((option: Option, index: number) => (
        <option
          disabled={option.disabled}
          key={`${name}-opt-${index}`}
          value={option.value}
        >
          {option.name}
        </option>
      ))}
    </select>
  )
}
