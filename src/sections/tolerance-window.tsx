import { Toggle } from 'components/input/toggle'

export const ToleranceWindow = () => {
  return (
    <section>
      <label htmlFor="tolerance">Tolerance Window:</label>
      <Toggle name="tolerance" label="Toggle ON" />
      <span>
        <span>Select Tolerance Level</span>
      </span>
    </section>
  )
}
