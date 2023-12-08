import Card from 'components/card'
import './App.css'
import styles from './app.module.css'
import { RadioGroup, Select } from 'components/input'
import { Client, SplitSchedule } from 'sections'

function App() {
  return (
    <div className="App">
      <Card
        action={{
          label: 'Continue Import',
          onClick: () => null,
        }}
        dismiss={{
          label: 'Cancel',
          onClick: () => null,
        }}
        summary="Data in the import file is correct. Please press Continue to import."
        title="Document Upload"
      >
        <div className={styles.formLeft}>
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
          <section>
            <label htmlFor="uploader">Select a manifest that you'd like to import</label>
            <input name="uploader" type="file" />
          </section>

          <section>
            <label>Elapse Data Checking:</label>
            <p>No Elapsed Dates!</p>
          </section>

          <section>
            <label htmlFor="tolerance">Tolerance Window:</label>
            <input type="checkbox" name="tolerance" />
            <span>{`Toggle ON`}</span>
            <span>
              <span>Select Tolerance Level</span>
            </span>
          </section>
        </div>

        <div className={styles.formRight}>
          <SplitSchedule />

          <section>
            <label>Location Checking:</label>
            <p>All Available!</p>
          </section>

          <Client />
        </div>
      </Card>
    </div>
  )
}

export default App
