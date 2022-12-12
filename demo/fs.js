import * as path from "path";
import {dirname} from "dirname-filename-esm";
import * as fs from "fs";

// fs.mkdir(path.join(dirname(import.meta), 'test'), err => {
//   if (err) {
//     throw err
//   }
//
//   console.log('Folder is created')
// })

const filepath = path.join(dirname(import.meta), 'test', 'text.txt')

await fs.writeFile(filepath, 'Hello NodeJS', err => { // Стирает все данные
  if (err) {
    throw err
  }
  console.log('File is created')
})

await fs.appendFile(filepath, '\nHello NodeJS x2', err => { // Стирает все данные
  if (err) {
    throw err
  }
  console.log('File is created')
})


fs.readFile(filepath,'utf-8',(err, content) => {
  if (err) {
    throw err
  }

  console.log(content)
  // const data = Buffer.from(content)
  // console.log('Content: ', data.toString())
})
