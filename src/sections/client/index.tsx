import { RadioGroup } from 'components/input'
import { useForm } from 'context/hooks'
import { ChangeEvent } from 'react'
import TestingCenters from './testing-centers'

export const Client = () => {
  const { field, updateField, updateFields } = useForm('client')
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    updateField(e.target.value, true)
    updateFields({
      'testing-centers': {
        valid: false,
        value: undefined,
      }
    })
  }

  return (
    <section>
      <RadioGroup
        onChange={onChange}
        label="Client:"
        name="client"
        options={[
          {
            id: 'single',
            default: true,
            label: 'Single',
            value: 'single',
          },
          {
            id: 'multiple',
            label: 'Multiple',
            value: 'multiple',
          },
        ]}
      />
      <TestingCenters client={field.value as string} />
    </section>
  )
}
