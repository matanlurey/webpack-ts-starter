import start from './start';

start();

// https://webpack.js.org/api/hot-module-replacement/
// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare let module: { hot: any };
if (module.hot) {
  module.hot.accept('./start', () => {
    start();
  });
}
