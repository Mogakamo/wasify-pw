const { parsed } = require("dotenv").config();
const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase, { env: parsed }) => {
    const isDev = phase === PHASE_DEVELOPMENT_SERVER;

    return {
        env: {}
    }
}