import { newKit } from "@celo/contractkit";
import { getWalletFromPrivateKey } from "./ethers";

const environment = process.env.NODE_ENV;

const networks = {
 development: "https://alfajores-forno.celo-testnet.org",
 production: "https://forno.celo.org"
};

const kit = newKit(networks[environment]);

const explorer = (e, txHash) => {
 const explorers = {
  development: `https://alfajores-blockscout.celo-testnet.org/tx/${txHash}/token_transfers`,
  production: `https://explorer.celo.org/tx/${txHash}/tokens_transfers`
 };
 return explorers[e];
};

const txScan = (e, address) => {
 const scanners = {
  development: `https://alfajores-blockscout.celo-testnet.org/api?module=account&action=tokentx&address=${address}`,
  production: `https://explorer.celo.org/api?module=account&action=tokentx&address=${address}`
 };
 return scanners[e];
};

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

export const transferCelo = async (pk, from, to, amount) => {
 try {
  const wallet = await getWalletFromPrivateKey(pk);
  kit.addAccount(wallet.privateKey);
  const gold = kit.web3.utils.toWei(amount, "ether");
  const goldToken = await kit.contracts.getGoldToken();
  const tx = await goldToken.transfer(to, gold).send({ from });
  const receipt = await tx.waitReceipt();
  return Promise.resolve({
   hash: receipt.transactionHash,
   explorer: explorer(environment, receipt.transactionHash)
  });
 } catch (error) {
  return Promise.reject(error);
 }
};

export const transferCUSD = async (pk, from, to, amount) => {
 try {
  const wallet = await getWalletFromPrivateKey(pk);
  kit.addAccount(wallet.privateKey);
  const usd = kit.web3.utils.toWei(amount, "ether");
  const stableToken = await kit.contracts.getStableToken();
  const tx = await stableToken.transfer(to, usd).send({ from });
  const receipt = await tx.waitReceipt();
  return Promise.resolve({
   hash: receipt.transactionHash,
   explorer: explorer(environment, receipt.transactionHash)
  });
 } catch (error) {
  return Promise.reject(error);
 }
};

export const getTx = async (address, hash) => {
 try {
  const api = txScan(environment, address);
  const response = await fetch(api, {
   method: "GET",
   headers: { accept: "application/json" }
  });
  const json = await response.json();
  return Promise.resolve(
   json.result.find(item => item.hash.toLowerCase() === hash.toLowerCase())
  );
 } catch (error) {
  return Promise.reject(error);
 }
};

export const getTxs = async address => {
 try {
  const api = txScan(environment, address);
  const response = await fetch(api, {
   method: "GET",
   headers: { accept: "application/json" }
  });
  const json = await response.json();
  return Promise.resolve(json.result);
 } catch (error) {
  return Promise.reject(error);
 }
};
