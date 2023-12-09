export type InputValue = string | number | readonly string[]

export type SelectOption = {
  default?: boolean
  disabled?: boolean
  name: string
  value: InputValue
}

export type RadioOption = {
  id: string
  label: string
  value: InputValue
  default?: boolean
}
