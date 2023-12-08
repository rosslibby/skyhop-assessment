import byteSize from 'byte-size'

export const getSize = (bytes: number) => {
  const converted = byteSize(bytes)

  return `${converted.value}${converted.unit}`
}
