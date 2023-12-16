export const KYOTONft = {
  id: 1998,
  name: "KYOTO Testnet",
  network: "KYOTO Testnet",
  nativeCurrency: {
    decimals: 18,
    name: "KYOTO",
    symbol: "KYOTO",
  },
  rpcUrls: {
    public: { http: ["https://rpc.testnet.kyotoprotocol.io:8545"] },
    default: { http: ["https://rpc.testnet.kyotoprotocol.io:8545"] },
  },
  blockExplorers: {
    default: {
      name: "KYOTO Testnet",
      url: "https://testnet.kyotoscan.io",
    },
  },
  contracts: {
    MyContract: {
      address: "0xe0e9f3100c6a811Fff869CC770BE29f506d2ed99",
    },
  },
};
