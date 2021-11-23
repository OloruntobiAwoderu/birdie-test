const server = require('./src/routes/index');
const { PORT } = require('./src/config/keys')

const port = PORT || 8000;

server.listen(port, () => console.log(`Server running on port ${port}`));