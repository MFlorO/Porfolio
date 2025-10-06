const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const { CONFIG } = require('./env');
const routes = require('./routes/index');
const { apiLimiter } = require('./middleware/rateLimit');
const { corsMiddleware } = require('./middleware/cors');
const { errorHandler } = require('./middleware/errorHandler');
const swaggerUI = require('swagger-ui-express');
const { swaggerSpec } = require('./swagger');

const app = express();

app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
app.use(bodyParser.json({ limit: '50mb' }));
app.use(cookieParser());
app.use(morgan('dev'));
app.use(express.json());
app.use(corsMiddleware);
app.use((req:any, res:any, next:any) => {
  res.header('Access-Control-Allow-Origin', '*'); 
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

app.use('/', apiLimiter, routes);

// Swagger
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec));

app.use(errorHandler);

app.listen(CONFIG.PORT || 3000, () => {
  console.log(`✅ API corriendo en http://localhost:${CONFIG.PORT || 3001}`);
});
