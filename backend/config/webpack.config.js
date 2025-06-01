module.exports = {

  devServer: {
    setupMiddlewares: (middlewares, devServer) => {
  middlewares.unshift((req, res, next) => {
    console.log('Before middleware');
    next();
  });

  return middlewares;
},
    port: 3000,
    open: true,
    hot: true,
  }
};
