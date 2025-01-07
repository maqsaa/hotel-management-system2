const express = require('express'); //fetches the express packge
const cors=require('cors');

const app= express(); //app holds express

const PORT =3001;
app.use(cors());
app.get('/',(req,res) =>{

    //send back hello from backend or your custom message
    res.send('Hello from backend');

});

app.listen(PORT,() => console.log(`SERVER running on http://localhost:${PORT}`));
