import { Select } from 'components/input'
import { useForm } from 'context/hooks'

export const ImportName = () => {
  const { updateField } = useForm('import-name')
  const onChange = (value: string) => updateField(value, value !== undefined)

  return (
    <section>
      <Select
        name="import-name"
        onChange={onChange}
        options={[
          {
            name: 'Select Import Name:',
            default: true,
            disabled: true,
            value: 'none',
          },
          {
            name: 'Alpha',
            value: 'alpha',
          },
          {
            name: 'Beta',
            value: 'beta',
          },
          {
            name: 'Gamma',
            value: 'gamma',
          },
          {
            name: 'Delta',
            value: 'delta',
          },
        ]}
      />
    </section>
  )
}
