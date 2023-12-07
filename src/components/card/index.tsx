import styles from './card.module.css'
import { useState } from 'react'

export default function Card() {
  const [tolerance, setTolerance] = useState<boolean>(true)

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h1>Document Upload</h1>
      </div>
      <div className={styles.form}>
        <div className={styles.formLeft}>
          <section>
            <select>
              <option disabled>Select Import Name:</option>
            </select>
          </section>
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
            <input type="checkbox" name="tolerance" checked={tolerance} />
            <span>{`Toggle ${tolerance ? 'ON' : 'OFF'}`}</span>
            <span>
              <span>Select Tolerance Level</span>
            </span>
          </section>
        </div>
        <div className={styles.formRight}>
          <section>
            <label htmlFor="social-distancing">Split schedule using social distancing?</label>
            <input type="radio" value="yes" />
            <label>Yes</label>
            <input type="radio" value="no" />
            <label>No</label>
          </section>
          <section>
            <label>Locaiont Checking:</label>
            <p>All Available!</p>
          </section>
          <section>
            <label htmlFor="client">Client:</label>
            <input type="radio" value="single" />
            <label>Single</label>
            <input type="radio" value="multiple" />
            <label>Multiple</label>
            <fieldset>
              <label htmlFor="testing-center-1">Testing Center 1</label>
              <select name="testing-center-1">
                <option disabled>Select Client</option>
              </select>
            </fieldset>
            <fieldset>
              <label htmlFor="testing-center-2">Testing Center 2</label>
              <select name="testing-center-2">
                <option disabled>Select Client</option>
              </select>
            </fieldset>
            <fieldset>
              <label htmlFor="testing-center-3">Testing Center 3</label>
              <select name="testing-center-3">
                <option disabled>Select Client</option>
              </select>
            </fieldset>
            <fieldset>
              <label htmlFor="testing-center-4">Testing Center 4</label>
              <select name="testing-center-4">
                <option disabled>Select Client</option>
              </select>
            </fieldset>
          </section>
        </div>
      </div>
      <div className={styles.footer}>
        <h3>Data in the import file is correct. Please press Continue to import.</h3>
        <button>Continue Import</button>
        <button>Cancel</button>
      </div>
    </div>
  )
}
