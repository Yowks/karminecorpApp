const app = require('./app/app.js')
const port = process.env.PORT || 1458

app.listen(port, () => console.log('Listening on', port))
