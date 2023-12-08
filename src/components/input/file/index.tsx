import { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import styles from './file.module.css'

export const File = () => {
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
        {isDragActive
          ? (<span className={styles.label}>Drop File Here</span>)
          : (<span className={styles.label}>Drag &amp; Drop Here Or <strong>Browse</strong></span>)
        }
      </div>
    </div>
  )
}
