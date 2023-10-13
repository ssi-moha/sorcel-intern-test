import { Network, Alchemy } from "alchemy-sdk";

const settings = {
  apiKey: "x97VSdTdeVeFEUpCDRH1ENsSyi5PYPIP",
  network: Network.MATIC_MAINNET,
};

export const alchemy = new Alchemy(settings);
