import { ChangeEvent, useState } from 'react'
import styles from './select.module.css'
import { SelectOption } from './types'

export const Select = ({ className, name, onChange, options }: {
  className?: string
  name: string
  onChange: (value: string) => void
  options: SelectOption[]
}) => {
  const classnames = [
    styles.select,
    ...(className ? [className] : []),
  ].join(' ')
  const [value, setValue] = useState<string | number | undefined>(
    options.find((option: SelectOption) => option.default)?.value
  )
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value
    setValue(value)
    onChange(value)
  }

  return (
    <select
      className={classnames}
      defaultValue={value}
      name={name}
      onChange={handleChange}
    >
      {options.map((option: SelectOption, index: number) => (
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
