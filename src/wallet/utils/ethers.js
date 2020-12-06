import { ethers } from "ethers";

export const createWalletFromPhrase = async phrase =>
 ethers.Wallet.fromMnemonic(phrase);
export const getWalletFromPrivateKey = async privateKey =>
 new ethers.Wallet(privateKey);
