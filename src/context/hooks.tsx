import { formContext } from 'context'
import { useContext } from 'react'
import { Fields, Value } from './types'

export const useForm = (fieldName: string) => {
  const { fields, _: { setFields } } = useContext(formContext)
  const field = fields[fieldName]

  const updateField = (value: Value, valid: boolean) => setFields(
    (fields: Fields) => ({
      ...fields,
      [fieldName]: {
        value,
        valid,
      },
    })
  )

  return {
    field,
    updateField,
  }
}
