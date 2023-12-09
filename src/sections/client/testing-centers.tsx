import { Fieldset } from 'components/form'
import { Label, Select } from 'components/input'
import { useForm } from 'context/hooks'
import styles from './client.module.css'
import { SelectOption } from 'components/input/select/types'
import { useEffect, useState } from 'react'

type Selection = {
  [key: string]: string | undefined
}

const testingCenters: SelectOption[] = [
  {
    name: 'Client A',
    value: 'client-a',
  },
  {
    name: 'Client B',
    value: 'client-b',
  },
  {
    name: 'Client C',
    value: 'client-c',
  },
  {
    name: 'Client D',
    value: 'client-d',
  },
  {
    name: 'Client E',
    value: 'client-e',
  },
  {
    name: 'Client F',
    value: 'client-f',
  },
  {
    name: 'Client G',
    value: 'client-g',
  },
  {
    name: 'Client H',
    value: 'client-h',
  },
  {
    name: 'Client I',
    value: 'client-i',
  },
  {
    name: 'Client J',
    value: 'client-j',
  },
  {
    name: 'Client K',
    value: 'client-k',
  },
  {
    name: 'Client L',
    value: 'client-l',
  },
  {
    name: 'Client M',
    value: 'client-m',
  },
  {
    name: 'Client N',
    value: 'client-n',
  },
  {
    name: 'Client O',
    value: 'client-o',
  },
  {
    name: 'Client P',
    value: 'client-p',
  },
  {
    name: 'Client Q',
    value: 'client-q',
  },
  {
    name: 'Client R',
    value: 'client-r',
  },
  {
    name: 'Client S',
    value: 'client-s',
  },
  {
    name: 'Client T',
    value: 'client-t',
  },
  {
    name: 'Client U',
    value: 'client-u',
  },
  {
    name: 'Client V',
    value: 'client-v',
  },
  {
    name: 'Client W',
    value: 'client-w',
  },
  {
    name: 'Client X',
    value: 'client-x',
  },
  {
    name: 'Client Y',
    value: 'client-y',
  },
  {
    name: 'Client Z',
    value: 'client-z',
  },
]
const clients: Selection = {
  'testing-center-1': undefined,
  'testing-center-2': undefined,
  'testing-center-3': undefined,
  'testing-center-4': undefined,
}

export default function TestingCenters({ client }: {
  client: string
}) {
  const [centers, setCenters] = useState<SelectOption[]>(testingCenters)
  const [values, setValues] = useState<Selection>(clients)
  const { field, updateField } = useForm('testing-centers')
  const onChange = (client: string, value: string) => {
    const selections = { ...values, [client]: value }
    const validValues = Object.values(selections)
      .filter((value: string | undefined) => Boolean(value)) as string[]

    setValues(selections)
    updateField(validValues as string[], true)

    setCenters((centers: SelectOption[]) => centers.map(
      (center: SelectOption) => ({
        ...center,
        disabled: validValues.includes(center.value as string),
      })
    ))
  }

  useEffect(() => {
    if (field.value === undefined) {
      setCenters(testingCenters)
      setValues(clients)
    }
  }, [field.value])

  return client === 'single'
    ? (
      <Fieldset>
        <Label htmlFor={clients[0]}>Testing Center</Label>
        <Select
          className={styles.select}
          name={Object.keys(clients)[0]}
          onChange={(value: string) => onChange(Object.keys(clients)[0], value)}
          options={[
            {
              name: 'Select Client',
              value: '',
              disabled: true,
              default: true,
            },
            ...centers,
          ]}
        />
      </Fieldset>
    )
    : (
      <>
        {Object.keys(clients).map((client: string) => (
          <Fieldset key={client}>
            <Label htmlFor={client}>{client.replaceAll('-', ' ')}</Label>
            <Select
              className={styles.select}
              name={client}
              onChange={(value: string) => onChange(client, value)}
              options={[
                {
                  name: 'Select Client',
                  value: '',
                  disabled: true,
                  default: true,
                },
                ...centers,
              ]}
            />
          </Fieldset>
        ))}
      </>
    )
}
