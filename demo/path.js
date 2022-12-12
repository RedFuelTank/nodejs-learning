import {dirname, filename} from "dirname-filename-esm";
import * as path from "path";

const meta = import.meta;
console.log('Название файла: ', path.basename(filename(meta)))
console.log('Название директории: ', path.dirname(filename(meta)))
console.log('Расширение файла: ', path.extname(filename(meta)))
console.log('Parse: ', path.parse(filename(meta)))
console.log(path.join(dirname(meta), 'server', 'index.html'))
