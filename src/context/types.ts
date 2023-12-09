export enum FieldType {
  select,
  radio,
  toggle,
  file,
}

export type Value = string | boolean | number | File

export interface Field {
  valid: boolean
  value?: string | boolean | File | number
}

export interface Fields {
  [key: string]: Field
}

export interface Form {
  fields: Fields,
  _: {
    [key: string]: Function
  },
}
