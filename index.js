const express = require ('express');
const app = express();
const PORT = 8080; 

app.use(express.json())
app.listen(
    PORT,
    () => console.log(`its a live on http://localhost:${PORT}`)
)
app.get('/tshirt',(req, res) => { 
    res.status(200).send({
        tshirt: '',
        size: 'large'

    })
});
app.post('/tshirt:id',(req, res) => { 
    const { id } = req.params;
    
    const { logo} = req.logo;

    if( !logo){
        res.status(418).send({messaje:' we need a loog!'})
    }
    res.send({
        tshirt: `  with your ${logo} and IOD of ${id}`,
    });
});