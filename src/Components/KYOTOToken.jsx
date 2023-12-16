export const KYOTOToken = {
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
      address: "0x6C261313019D264846feB462A9B8c734B7D9Fa11",
    },
  },
};
