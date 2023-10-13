import '@rainbow-me/rainbowkit/styles.css';


import { getDefaultWallets } from "@rainbow-me/rainbowkit";
import { polygon } from "viem/chains";
import { configureChains, createConfig } from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";

const { chains, publicClient } = configureChains(
  [polygon],
  [
    alchemyProvider({ apiKey: "x97VSdTdeVeFEUpCDRH1ENsSyi5PYPIP" }),
    publicProvider(),
  ]
);

const { connectors } = getDefaultWallets({
  appName: "My RainbowKit App",
  projectId: "YOUR_PROJECT_ID",
  chains,
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
});

export { wagmiConfig, chains}
