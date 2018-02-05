/**
 * Created by Malashta Sergey on 01.02.2018.
 * email: malashta@gmail.com
 * url: http://malashta.ru
 */
import { createApp } from './app';

const isDev = process.env.NODE_ENV !== 'production';

export default context => {
  return new Promise((resolve, reject) => {
    const s = isDev && Date.now();
    const {app, router, store} = createApp();

    const {url} = context;
    const fullPath = router.resolve(url).route.fullPath;

    if (fullPath !== url) {
      reject({url: fullPath});
    }

    // set router's location
    router.push(url);

    // wait until router has resolved possible async hooks
    router.onReady(() => {
      const matchedComponents = router.getMatchedComponents();
      // no matched routes
      if (!matchedComponents.length) {
        reject({code: 404});
      }
      Promise.all(matchedComponents.map(({asyncData}) => asyncData && asyncData({
        store,
        route: router.currentRoute
      }))).then(() => {
        // eslint-disable-next-line no-unused-expressions
        isDev && console.info(`data pre-fetch: ${Date.now() - s}ms`);
        context.state = store.state;
        resolve(app);
      }).catch(reject);
    }, reject);
  });
};
