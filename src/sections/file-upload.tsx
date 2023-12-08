import { File } from 'components/input/file'

export const FileUpload = () => {
  return (
    <section>
      <label htmlFor="uploader">Select a manifest that you'd like to import</label>
      <File />
    </section>
  )
}
