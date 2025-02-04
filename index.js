import express from 'express' 
const app = express()  
import path from 'path' 
import { fileURLToPath } from 'url' 
import handlebars from 'express-handlebars' 
import Handlebars from 'handlebars' 
import bodyParser from 'body-parser' 


const __dirname = path.dirname(fileURLToPath(import.meta.url))  
app.use(express.static(path.join(__dirname, 'public')))  

app.engine('handlebars', handlebars.engine({
    defaultLayout: 'main',
    handlebars: allowInsecurePrototypeAccess(Handlebars)  
}))
app.set('view engine', 'handlebars')  

app.use(bodyParser.urlencoded({ extended: false })) 
app.use(bodyParser.json()) 


app.get('/', function(req, res) {
    res.render('admin/index') 
})

import aluno from './routes/aluno.js'
app.use('/aluno', aluno)  

app.listen(3200, () => console.log('Servidor truando em http://localhost:3200')) 