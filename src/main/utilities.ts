import * as path from 'path'

export const addFileExtension = (filePath: string) => {
  const extension = path.extname(filePath)
  if (extension === '') {
    return filePath + '.vis'
  } else {
    return extension === '.vis' ? filePath : filePath.replace(extension, '.vis')
  }

}
