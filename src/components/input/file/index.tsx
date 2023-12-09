import { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import styles from './file.module.css'
import { Button } from 'components/buttons'

export const File = ({ action, upload }: {
  action: {
    label: string
    onClick: (file: File) => void
  }
  upload: () => void
}) => {
  const [file, setFile] = useState<File | undefined>()
  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0]
    setFile(file)
    action.onClick(file)
  }, [])
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
        disabled={!file}
        onClick={upload}
      >{action.label}</Button>
    </div>
  )
}
