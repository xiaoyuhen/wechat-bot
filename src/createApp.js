const Koa = require("koa");
const fetch = require("node-fetch");
const checkHealth = require("./middlewares/checkHealth");

const createApp = () => {
  const app = new Koa();
  app.use(checkHealth);

  fetch(
    "https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=334ea7aa-de5e-46c7-bcde-486d05c72c9f",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        msgtype: "text",
        text: {
          content:
            "我是本群的「提醒喝水小助手」，希望此刻被 @ 到的人可以立即开始喝水，一小时后我将继续来提醒大家喝水，一起和我成为一天喝水八次的人吧！",
          mentioned_list: ["danghan"]
        }
      })
    }
  );
  return app;
};

module.exports = createApp;
