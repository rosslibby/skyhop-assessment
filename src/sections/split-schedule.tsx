import { RadioGroup } from 'components/input'

export const SplitSchedule = () => {
  return (
    <section>
      <RadioGroup
        onChange={() => null}
        label="Split schedule using social distancing?"
        name="split-schedule"
        options={[
          {
            id: 'yes',
            checked: true,
            label: 'Yes',
            value: 'yes',
          },
          {
            id: 'no',
            checked: false,
            label: 'No',
            value: 'no',
          },
        ]}
      />
    </section>
  )
}
