const router = require('express').Router();
const passport = require('passport');

const requireAuth = passport.authenticate('jwt', { session: false });

const authRoutes = require('./auth');
const apiv1Routes = require('./apiv1');

const indexHTML = `
  <!doctype html>
  <html lang="en">
    <head>
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
      <title>Basic Redux App</title>
    </head>
    <body>
      <div id='root'></div>
      <script src='/assets/bundle.js'></script>
    </body>
  </html>
`;

router.get('/', (req, res) => {
  res.send(indexHTML);
});

router.get('/secret', requireAuth, (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({ secret: 'Authorized' }));
});
router.use('/auth', authRoutes);
router.use('/apiv1', apiv1Routes);

// any miss gets indexHTML, tells react-router-dom to take over
router.get('*', (req, res) => {
  res.send(indexHTML);
});

module.exports = router;
