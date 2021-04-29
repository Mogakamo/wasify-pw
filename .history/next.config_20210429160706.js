const { parsed } = require("dotenv").config();
const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase, {}) => {
    const isDev = phase === PHASE_DEVELOPMENT_SERVER;
}