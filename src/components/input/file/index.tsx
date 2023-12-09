import { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import styles from './file.module.css'
import { Button } from 'components/buttons'

export const File = ({ action }: {
  action: {
    label: string
    onClick: () => void
  }
}) => {
  const onDrop = useCallback((acceptedFiles: File[]) => {}, [])
  const {
    getInputProps,
    getRootProps,
    isDragActive,
  } = useDropzone({ onDrop })

  return (
    <div className={styles.file}>
      <div {...getRootProps()} className={styles.dropzone}>
        <input {...getInputProps()} />

        {/* <DocumentIcon className={styles.icon} /> */}
        <span className={`material-icons ${styles.icon}`}>
          description
        </span>

        {isDragActive
          ? (<span className={styles.label}>Drop File Here</span>)
          : (<span className={styles.label}>Drag &amp; Drop Here Or <strong>Browse</strong></span>)
        }
      </div>
      <Button
        className={styles.button}
        onClick={action.onClick}
      >{action.label}</Button>
    </div>
  )
}
