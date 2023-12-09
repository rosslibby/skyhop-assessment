import { Label } from 'components/input'
import { File } from 'components/input/file'

export const FileUpload = () => {
  return (
    <section>
      <Label htmlFor="uploader">Select a manifest that you'd like to import</Label>
      <File />
    </section>
  )
}
