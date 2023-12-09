import Card from 'components/card'
import './App.css'
import styles from './app.module.css'
import {
  Client,
  FileUpload,
  ImportName,
  SplitSchedule,
  ToleranceWindow,
} from 'sections'
import { Label } from 'components/input'
import { FormProvider } from 'context'

function App() {
  return (
    <FormProvider>
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
            <ImportName />
            <FileUpload />

            <section>
              <Label>Elapse Data Checking:</Label>
              <p>No Elapsed Dates!</p>
            </section>

            <ToleranceWindow />
          </div>

          <div className={styles.formRight}>
            <SplitSchedule />

            <section>
              <Label>Location Checking:</Label>
              <p>All Available!</p>
            </section>

            <Client />
          </div>
        </Card>
      </div>
    </FormProvider>
  )
}

export default App
