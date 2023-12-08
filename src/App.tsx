import Card from 'components/card'
import './App.css'
import styles from './app.module.css'
import { Select } from 'components/input'

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
          </section>
        </div>

        <div className={styles.formRight}></div>
      </Card>
    </div>
  )
}

export default App
