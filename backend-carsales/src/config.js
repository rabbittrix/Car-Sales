module.exports = {
  privateKey: '2f639018-7c65-44df-a3a2-a070bd2a10a8',
  // connectionUrlDatabase: 'mongodb://127.0.0.1:27017/car-sales',
  connectionUrlDatabase: 'mongodb://localhost:27017/car-sales?readPreference=primary&appname=MongoDB%20Compass&ssl=false',
  apiPort: 8080,
  corsOptions: {
    origin: ['http://127.0.0.1:4200', 'http://localhost:4200'],
  },
};
