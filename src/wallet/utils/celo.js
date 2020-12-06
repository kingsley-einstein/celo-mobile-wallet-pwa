import { newKit } from "@celo/contractkit";

const environment = process.env.NODE_ENV;

const networks = {
 development: "https://alfajores-forno.celo-testnet.org",
 production: "https://forno.celo.org"
};

const kit = newKit(networks[environment]);

export const getCeloBalance = async address => {
 try {
  const gToken = await kit.contracts.getGoldToken();
  return Promise.resolve(gToken.balanceOf(address));
 } catch (error) {
  return Promise.reject(error);
 }
};

export const getCUSDBalance = async address => {
 try {
  const stableToken = await kit.contracts.getStableToken();
  return Promise.resolve(stableToken.balanceOf(address));
 } catch (error) {
  return Promise.reject(error);
 }
};
