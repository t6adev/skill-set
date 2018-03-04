import path from 'path';
import express from 'express';

const app = express();

if (process.env.NODE_ENV === 'production') {
  app.use('/', express.static('./dist/client'));
} else {
  const webpack = require('webpack');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackConfig = require('../../webpack.config.js');
  const compiler = webpack(webpackConfig);
  app.use(
    webpackDevMiddleware(compiler, {
      noInfo: true,
      publicPath: webpackConfig.output.publicPath,
    })
  );
  app.use(
    require('webpack-hot-middleware')(compiler, {
      path: '/__webpack_hmr',
    })
  );
  app.get('/', (req, res, next) => {
    const filename = path.join(compiler.outputPath, 'index.html');
    compiler.outputFileSystem.readFile(filename, (err, result) => {
      if (err) {
        next(err);
      } else {
        res.set('content-type', 'text/html');
        res.send(result);
        res.end();
      }
    });
  });
}

app.listen(3000, () => console.log('start server at 3000 port.'));
