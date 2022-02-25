module.exports = {
  publicPath:
    process.env.NODE_ENV === "production"
      ? "/archived-project/countdown/dist/"
      : "/",
};
