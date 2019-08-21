import * as path from 'path'

export const addFileExtension = (filePath: string, extension: string) => {
  const currExtension = path.extname(filePath)
  if (currExtension === '') {
    return filePath + extension
  } else {
    return currExtension === extension ? filePath : filePath.replace(currExtension, extension)
  }
}
