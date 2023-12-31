import { useForm } from 'context/hooks'
import { useCallback, useState } from 'react'
import { getSize } from 'utils'

export const useFileProcessor = () => {
  const { updateField } = useForm('manifest')
  const [file, setFile] = useState<File | undefined>()
  const [uploading, setUploading] = useState<boolean>(false)
  const [filename, setFilename] = useState<string>('')
  const [filesize, setFilesize] = useState<string>('')
  const [progress, setProgress] = useState<number>(0)

  const processFile = useCallback(async (file: File) => {
    setFile(file)
    setFilename(file.name)
    setFilesize(getSize(file.size))
    updateField(file, file.name.split('.').pop() === 'csv')
  }, [])

  const upload = useCallback(async () => {
    let i = 0;
    setUploading(true)
    const timer = setInterval(() => {
      if (i > 100) {
        setUploading(false)
        clearInterval(timer)
      } else {
        setProgress((progress: number) => progress + 1)
        ++i
      }
    }, 50)
  }, [file, setProgress, setUploading])

  return {
    file,
    filename,
    filesize,
    processFile,
    progress,
    upload,
    uploading,
  }
}
