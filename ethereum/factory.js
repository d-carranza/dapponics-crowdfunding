import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  CampaignFactory.abi,
  "0x3c22CEBa3857cE6fFDDF4FA3C055B7FCA3A05510"
);

export default instance;
