const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

app.get('/img', (request, response) => {
    // response.send('handshake img');
    fs.readdir('dist/thumbnails',((err,items)=>{
        response.send(items);
    }));
});
app.use(express.static('public'));
app.use(express.static('dist'));
app.listen(port,()=> console.log(`serving ${port}`));