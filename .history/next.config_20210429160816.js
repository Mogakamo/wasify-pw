const { parsed } = require("dotenv").config();
const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase, { env: parsed }) => {
    const isDev = phase === PHASE_DEVELOPMENT_SERVER;

    return {
        env: {
            REDIRECT_URI: isDev ? "https://localhost:3000" : "https://wasify.c"
        }
    }
}