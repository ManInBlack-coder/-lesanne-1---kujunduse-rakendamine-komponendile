const express = require('express')
const app = express()
/*onst port = 3000*/

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.listen(3000, () => {
  console.log(`Example app is started`)
})
