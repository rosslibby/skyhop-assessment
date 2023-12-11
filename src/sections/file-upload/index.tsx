import { Label } from 'components/input'
import { File } from 'components/input/file'
import styles from './file-upload.module.css'
import { useFileProcessor } from './hooks'

export const FileUpload = () => {
  const {
    file,
    filename,
    filesize,
    processFile,
    progress,
    upload,
    uploading,
  } = useFileProcessor()

  return (
    <section>
      <Label htmlFor="uploader">Select a manifest that you'd like to import</Label>
      <File
        action={{
          label: 'Upload Manifest',
          onClick: (file: File) => processFile(file),
        }}
        filename={filename.length ? filename : undefined}
        upload={upload}
      />

      {file && (
        <div className={styles.progressSection}>
          <span className={`material-icons ${styles.icon}`}>
            upload_file
          </span>
          <div className={styles.info}>
            <div className={styles.data}>
              <span className={styles.name}>{filename}</span>
              <span className={styles.size}>{filesize}</span>
            </div>
            {(uploading || progress > 0) && (
              <div className={styles.loadingWrapper}>
                <div className={styles.loadingFill} style={{
                  width: `${progress}%`,
                }} />
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  )
}
