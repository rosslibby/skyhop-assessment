export type InputValue = string | number | readonly string[]

export type SelectOption = {
  default?: boolean
  disabled?: boolean
  name: string
  value: InputValue
}
