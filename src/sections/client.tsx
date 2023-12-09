import { Fieldset } from 'components/form'
import { Label, RadioGroup } from 'components/input'
import { useForm } from 'context/hooks'
import { ChangeEvent } from 'react'

export const Client = () => {
  const { updateField } = useForm('client')
  const onChange = (e: ChangeEvent<HTMLInputElement>) =>
    updateField(e.target.value, e.target.value !== undefined)

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
      <Fieldset>
        <Label htmlFor="testing-center-1">Testing Center 1</Label>
        <select name="testing-center-1">
          <option disabled>Select Client</option>
        </select>
      </Fieldset>
      <Fieldset>
        <Label htmlFor="testing-center-2">Testing Center 2</Label>
        <select name="testing-center-2">
          <option disabled>Select Client</option>
        </select>
      </Fieldset>
      <Fieldset>
        <Label htmlFor="testing-center-3">Testing Center 3</Label>
        <select name="testing-center-3">
          <option disabled>Select Client</option>
        </select>
      </Fieldset>
      <Fieldset>
        <Label htmlFor="testing-center-4">Testing Center 4</Label>
        <select name="testing-center-4">
          <option disabled>Select Client</option>
        </select>
      </Fieldset>
    </section>
  )
}
