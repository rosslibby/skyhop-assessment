import { RadioGroup } from 'components/input'
import { useForm } from 'context/hooks'
import { ChangeEvent } from 'react'

export const SplitSchedule = () => {
  const { updateField } = useForm('split-schedule')
  const onChange = (e: ChangeEvent<HTMLInputElement>) =>
    updateField(e.target.value, e.target.value !== undefined)

  return (
    <section>
      <RadioGroup
        onChange={onChange}
        label="Split schedule using social distancing?"
        name="split-schedule"
        options={[
          {
            id: 'yes',
            default: true,
            label: 'Yes',
            value: 'yes',
          },
          {
            id: 'no',
            label: 'No',
            value: 'no',
          },
        ]}
      />
    </section>
  )
}
