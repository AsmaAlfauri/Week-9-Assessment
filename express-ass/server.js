const express = require("express")
const app = express()
const bodyParser = require('body-parser')
app.use(express.json())

app.get('/', (req, res) => {
    res.json('worked') 
})

const PORT = 7001
app.listen(PORT, () => console.log(`your server is  ${PORT}`)) 


myData=[
    {
        id:1,
        listTitle:"solve express exercise",
        completed:false
    },
    {
        id:2,
        listTitle:"solve node.js exercise",
        completed:true
    },
    {
        id:3,
        listTitle:"solve react exercise",
        completed:true
    },
    {
        id:4,
        listTitle:"solve JS exercise",
        completed:false
    }
]

//GET 
app.get('/myData',(req,res)=>{
    res.json(myData)
})

//POST
app.post('/myData',(req,res)=>{
    let newData=req.body
    console.log(req.body)
    myData.push(newData)
res.json(myData)
})

//DELETE 
app.delete('/myData/:myId',(req,res)=>{
    let id1=parseInt(req.params.myId)
    let result=myData.filter(elem=>{
       return elem.id!==id1
    })
    res.json(result)
    })