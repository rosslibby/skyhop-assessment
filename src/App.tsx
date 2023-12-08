import Card from 'components/card'
import './App.css'
import styles from './app.module.css'
import { RadioGroup, Select } from 'components/input'

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
          </section>
        </div>

        <div className={styles.formRight}>
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

          <section>
            <label>Location Checking:</label>
            <p>All Available!</p>
          </section>

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
            <fieldset className={styles.dropdownFieldset}>
              <label htmlFor="testing-center-1">Testing Center 1</label>
              <select name="testing-center-1">
                <option disabled>Select Client</option>
              </select>
            </fieldset>
            <fieldset className={styles.dropdownFieldset}>
              <label htmlFor="testing-center-2">Testing Center 2</label>
              <select name="testing-center-2">
                <option disabled>Select Client</option>
              </select>
            </fieldset>
            <fieldset className={styles.dropdownFieldset}>
              <label htmlFor="testing-center-3">Testing Center 3</label>
              <select name="testing-center-3">
                <option disabled>Select Client</option>
              </select>
            </fieldset>
            <fieldset className={styles.dropdownFieldset}>
              <label htmlFor="testing-center-4">Testing Center 4</label>
              <select name="testing-center-4">
                <option disabled>Select Client</option>
              </select>
            </fieldset>
          </section>
        </div>
      </Card>
    </div>
  )
}

export default App
