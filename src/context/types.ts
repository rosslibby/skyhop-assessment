export enum FieldType {
  select,
  radio,
  toggle,
  file,
}

export type Value = string | string[] | boolean | number | File

export interface Field {
  valid: boolean
  value?: Value
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
