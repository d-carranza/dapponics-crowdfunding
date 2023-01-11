import Web3 from "web3";

let web3;

// (window is not defined when server side rendered with next.js)

if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
  // We are in the browser and metamask is running.
  window.ethereum.request({ method: "eth_requestAccounts" });
  web3 = new Web3(window.ethereum);
} else {
  // We are on the server *OR* the user is not running metamask
  const provider = new Web3.providers.HttpProvider(
    "https://goerli.infura.io/v3/e3f35e525c7644c28cf929f816692047"
  );
  web3 = new Web3(provider);
}

export default web3;