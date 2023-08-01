//Desc:  config file for the app

// as of now there are 2 different env configs: local and dev
// use local if you are running the backend locally on another port
// checkout the backend repo for more info: https://github.com/Bakobiibizo/eleven_labs_hackathon
const environment: string = process.env.NODE_ENV;
console.log("environment", environment);

type Config = {
  backendBaseURL: string;
  getTextEndPoint: GetEndPoint;
  getImageEndPoint: GetEndPoint;
  getVoiceEndPoint: GetEndPoint;
};

type GetEndPoint = () => string;

const backendBaseURL =
  environment == "development"
    ? "https://optimal-wrongly-oarfish.ngrok-free.app/"
    : "http://127.0.0.1:5000/";

//if the back end changes  endpoint names, update this config
const config: Config = {
  backendBaseURL,
  getTextEndPoint: function (): string {
    return `${backendBaseURL}text`;
  },

  getImageEndPoint: function (): string {
    return `${backendBaseURL}image`;
  },
  getVoiceEndPoint: function (): string {
    return `${backendBaseURL}voice`;
  },
};
console.log("config", config);

export default config;
