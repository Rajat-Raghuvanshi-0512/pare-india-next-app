export function preloadImage(src) {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.onload = function () {
      resolve(img)
    }
    img.onerror = img.onabort = function () {
      reject(src)
    }
    img.src = src
  })
}

export const downloadFile = (url = '') => {
  const fileName = url.split('/').pop()
  const aTag = document.createElement('a')
  aTag.href = url
  aTag.setAttribute('download', fileName)
  document.body.appendChild(aTag)
  aTag.click()
  aTag.remove()
}
