import { Select } from 'components/input'

export const ImportName = () => {
  return (
    <section>
      <Select
        name="import-name"
        onChange={() => null}
        options={[
          {
            name: 'Select Import Name:',
            default: true,
            disabled: true,
            value: 'none',
          },
        ]}
      />
    </section>
  )
}
