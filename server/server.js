let express = require('express');
const path = require('path');
const { nextTick } = require('process');


let app = express();

app.use(express.static(path.join(__dirname, '../public')));


app.use((req, res, next) => {
    console.log(req.url)
})
next()




app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(3000);