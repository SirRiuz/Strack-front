

const loadImage = (url, e) => {
  const IMAGE_URL = url
  var image = new Image()

  image.crossOrigin = 'Anonymous'
  image.src = IMAGE_URL
  image.addEventListener('load', function() {
    var canvas = document.createElement('canvas')
    var context = canvas.getContext('2d')
    
    canvas.width = image.width
    canvas.height = image.height
    context.drawImage(image, 0, 0)
    
    var pixelData = context.getImageData(
      image.width / 2, image.height / 2, 1, 1).data
    
    e({
      type: image.width >= 500 ? 'large':'small',
      color: `${pixelData[0], pixelData[1], pixelData[2]}`,
      width: image.width,
      height: image.height
    })
  })
}

export default loadImage
