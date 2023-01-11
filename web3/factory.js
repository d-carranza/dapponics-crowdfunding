import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0x36f4321CFCc8982018d50eb40c08B67b86BbEd79"
);

export default instance;
