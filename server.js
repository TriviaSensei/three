const express = require('express');
const dotenv = require('dotenv');

const app = express();

const rateLimit = require('express-rate-limit');
const viewRouter = require('./mvc/routes/viewRoutes');
const path = require('path');

dotenv.config({ path: './config.env' });
const port = process.env.PORT || 3000;

app.listen(port, () => {
	console.log(`Application started on port ${port}`);
});
app.use(express.static(__dirname));
app.use(express.json());

app.set('view engine', 'pug');
//directory for views is /views
app.set('views', path.join(__dirname, 'mvc/views'));

app.use('/', viewRouter);
