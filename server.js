const express = require('express')
const app = express()
const PORT = 8000

const rappers= {
    '21 Savage': {      
        'age': 29,
        'birthName': 'Sheyaa Bin Abraham-Joseph',
        'birthLocation': 'London, England'
    },
    'Chance the Rapper': {      
        'age': 29,
        'birthName': 'Chancelor Bennett',
        'birthLocation': 'Chicago, Illinois'
    },
    'Unknown': {      
        'age': 0,
        'birthName': 'Unknown',
        'birthLocation': 'Unknown'
    }
}

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/api', (req, res) => {
    res.json(rappers)
})

app.listen(PORT, () => {
    console.log(`The server is now running on ${PORT}! Betta Go Catch It!`)
})