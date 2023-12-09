import { ReactNode, createContext, useContext, useState } from 'react'
import { Fields, Form } from './types'

export const formContext = createContext<Form>({
  fields: {
    'import-name': {
      valid: false,
    },
    'manifest': {
      valid: false,
    },
    'tolerance-window': {
      valid: true,
    },
    'tolerance-level': {
      valid: true,
    },
    'split-schedule': {
      valid: true,
    },
    'client': {
      valid: true
    },
    'testing-centers': {
      valid: false,
    },
  },
  _: {},
})

export const FormProvider = ({ children }: {
  children: ReactNode
}) => {
  const formCtx = useContext(formContext)
  const [fields, setFields] = useState<Fields>(formCtx.fields)

  return (
    <formContext.Provider value={{
      fields,
      _: {
        setFields,
      }
    }}>
      {children}
    </formContext.Provider>
  )
}
