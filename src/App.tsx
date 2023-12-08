import Card from 'components/card'
import './App.css'
import styles from './app.module.css'

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
        <div className={styles.formLeft}></div>

        <div className={styles.formRight}></div>
      </Card>
    </div>
  )
}

export default App
