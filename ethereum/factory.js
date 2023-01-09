import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0x7157Ec96B1d583Cfc3C34eA1f2DB0013DcB73D7c"
);

export default instance;
