import express from 'express'
import path from 'path'
import multer from 'multer'
import { merger1 } from './merge.js';
const app = express()
const port = 3000
import { fileURLToPath } from 'url';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const upload = multer({ dest: 'uploads/' })


app.use('/static', express.static('public'))


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,"index.html"))
})

app.post('/merge', upload.array('pdfs', 2), function (req, res, next) {
  // console.log(req.files)
  // res.send(req.files)
  const link = `<a href="http://localhost:3000/static/merged.pdf">Click here to view your merged PDF</a>`;

  res.send(`Click on the link to see the preview of your PDF: ${link}`);
  const filePath1 = path.join(__dirname, req.files[0].path);
  const filePath2 = path.join(__dirname, req.files[1].path);
  
  merger1(filePath1, filePath2);
  res.redirect("http://localhost:3000/static/merged.pdf")
})

app.listen(port, () => {
  console.log(`app listening on port localhost://${port}`)
})