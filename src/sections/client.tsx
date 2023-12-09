import { Fieldset } from 'components/form'
import { Label, RadioGroup } from 'components/input'

export const Client = () => {
  return (
    <section>
      <RadioGroup
        onChange={() => null}
        label="Client:"
        name="client"
        options={[
          {
            id: 'single',
            checked: true,
            label: 'Single',
            value: 'single',
          },
          {
            id: 'multiple',
            checked: false,
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
