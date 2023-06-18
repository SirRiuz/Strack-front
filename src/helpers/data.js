import loadImage from "./image"


const parseResponse = data => {
  var list_data = data.map((x, k) => {
    return loadImage(x.preview, data => {
      x["image-data"] = data
      return x
    })
  })

  console.log(list_data)
}

export default parseResponse
