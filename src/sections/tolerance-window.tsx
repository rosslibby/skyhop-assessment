import { Label } from 'components/input'
import { Toggle } from 'components/input/toggle'
import { useForm } from 'context/hooks'
import { ChangeEvent } from 'react'

export const ToleranceWindow = () => {
  const { updateField } = useForm('tolerance-window')
  const onChange = (e: ChangeEvent<HTMLInputElement>) =>
    updateField(e.target.checked, true)

  return (
    <section>
      <Label htmlFor="tolerance">Tolerance Window:</Label>
      <Toggle
        name="tolerance"
        label="Toggle ON"
        onChange={onChange}
      />
      <span>
        <span>Select Tolerance Level</span>
      </span>
    </section>
  )
}
