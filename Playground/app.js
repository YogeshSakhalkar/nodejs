// const fs = require('fs')
// const book={
//     title:'Ego is the Enemy',
//     author:'Ryan holiday'
// }

// const bookJSON = JSON.stringify(book)
// fs.writeFileSync('1-JSON.json', bookJSON)

const fs = require('fs')

const dataBuffer = fs.readFileSync('1-JSON.json')
const dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON)
console.log(data.title)