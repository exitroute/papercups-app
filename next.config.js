const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase, { defaultConfig }) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      /* development only config options here */
      env: {
        API_URL: "http://localhost:3000/api",
      },
    };
  }

  return {
    /* config options for all phases except development here */
    env: {
      API_URL: "https://papercups-app.vercel.app/api/index",
    },
  };
};
