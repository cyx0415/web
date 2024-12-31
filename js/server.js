const hexo = require('hexo');
const app = new hexo();

// 初始化 Hexo
app.init().then(() => {
  app.load().then(() => {
    app.server.start({
      port: process.env.PORT || 4000,
      log: true
    }).then(() => {
      console.log('Hexo server is running');
    });
  });
}).catch(err => {
  console.error(err);
});
