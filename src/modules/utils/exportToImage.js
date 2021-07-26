import * as htmlToImage from 'html-to-image'
/**
 * Export Chart to JPG format
 */
const exportToImage = chart => {
  htmlToImage
    .toJpeg(document.getElementById('lineChart'), { backgroundColor: '#fff', quality: 0.95 })
    .then(function (dataUrl) {
      var link = document.createElement('a')
      link.download = 'chilecompra.jpeg'
      link.href = dataUrl
      link.click()
    })
}

export default exportToImage
