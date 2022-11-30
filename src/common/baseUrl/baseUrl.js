let host = window.location.host;
let hostName = host.split(":");
const baseUrl = `${window.location.protocol}//${hostName[0]}`;

export const GlobalVariable = Object.freeze({
    producation:false,
    MIDDLEWARE_API_URL:`${baseUrl}:3001/api`
})
