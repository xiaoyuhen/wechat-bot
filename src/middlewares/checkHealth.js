const checkHealth = async (ctx, next) => {
  if (ctx.path === "/check_health") {
    ctx.body = "ok!";
  } else {
    await next();
  }
};

module.exports = checkHealth;
