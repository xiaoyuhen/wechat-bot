const createApp = require("./createApp");

const port = process.env.PORT || 8000;

const bootstrap = () => {
  createApp().listen(port, () => {
    console.info(`==> 🌎  Listening on port ${port}.`); // eslint-disable-line no-console
  });
};

bootstrap();
