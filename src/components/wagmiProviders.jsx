"use client";
import '@rainbow-me/rainbowkit/styles.css';
import {
  RainbowKitProvider,
  getDefaultConfig, lightTheme,
} from '@rainbow-me/rainbowkit';
import { WagmiProvider } from 'wagmi';
import {
  mainnet,
  polygon,
  optimism,
  arbitrum,
  base,
} from 'wagmi/chains';
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
// import { PegasusTestnet } from "./Chain";

const config = getDefaultConfig({
  appName: 'Verxio | Decentralizing the future of work!',
  projectId: '274de4271228fdd69013c56274f0e688',
  chains: [mainnet, polygon, optimism, arbitrum, base],
  ssr: true
});

const queryClient = new QueryClient();
const WagmiProviders = ({ children }) => {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
         <RainbowKitProvider
          theme={lightTheme({
            accentColor: "#1570ef",
            accentColorForeground: "white",
            borderRadius: "small",
            fontStack: "system",
            overlayBlur: "small",
          })}
          // chains={chains}
        >
          {children}
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
};

export default WagmiProviders;
