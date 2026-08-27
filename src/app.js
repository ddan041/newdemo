const express = require('express');
const userRoutes = require('./routes/user.routes');
const { connectDatabase } = require('./config/db');

const app = express();
app.use(express.json());
app.use('/api', userRoutes);

app.get('/health', (req, res) => res.json({ status: 'ok' }));

async function start(port = process.env.PORT || 3000) {
  await connectDatabase();
  return app.listen(port);
}

if (require.main === module) start();

module.exports = { app, start };
