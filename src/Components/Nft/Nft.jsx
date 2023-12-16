import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import {
  useAccount,
  useContractRead,
  useContractWrite,
  usePrepareContractWrite,
  useWaitForTransaction,
} from "wagmi";
import abi from "../abiNft.json";
import { KYOTONft } from "../KYOTONft";
import "./Nft.css";

const Nft = () => {
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);

  const [totalMinted, setTotalMinted] = React.useState(0n);
  const { isConnected } = useAccount();

  const contractConfig = {
    address: "0xe0e9f3100c6a811Fff869CC770BE29f506d2ed99",
    abi: abi,
    enabled: true,
    chainId: KYOTONft.chainId,
  };

  const { config: contractWriteConfig } = usePrepareContractWrite({
    ...contractConfig,
    functionName: "mint",
    args: [],
    value: "600000000000000",
  });

  const {
    data: mintData,
    write: mint,
    isLoading: isMintLoading,
    isSuccess: isMintStarted,
    error: mintError,
  } = useContractWrite(contractWriteConfig);

  const { data: totalSupplyData } = useContractRead({
    ...contractConfig,
    functionName: "totalSupply",
    watch: true,
  });

  const {
    data: txData,
    isSuccess: txSuccess,
    error: txError,
  } = useWaitForTransaction({
    hash: mintData?.hash,
  });

  React.useEffect(() => {
    if (totalSupplyData) {
      setTotalMinted(totalSupplyData);
    }
  }, [totalSupplyData]);

  const isMinted = txSuccess;

  return (
    <Container id="NFT">
      <header>
        <Row>
          <Col>
            <div>
              <marquee
                direction="left"
                speed="normal"
                behavior="loop"
                className="marquee"
              >
                Twitter : @retrunvoid - Medium : retrunvoid - Github :
                retrunv0id
              </marquee>
            </div>
            <div className="product-info">
              <div className="product-text">
                <h1 className="movie-night">MINT NFT</h1>
                <h1>by retrunvoid</h1>
              </div>
              <a>{Number(totalMinted)} minted so far!</a>
              {mintError && <a>Only 1 Nft To Mint </a>}
              {txError && <a>Error: {txError.message}</a>}
              <ConnectButton showBalance={false} chainStatus="name" />
              {mounted && isConnected && !isMinted && (
                <button
                  className="connectButton"
                  disabled={!mint || isMintLoading || isMintStarted}
                  data-mint-loading={isMintLoading}
                  data-mint-started={isMintStarted}
                  onClick={() => mint?.()}
                >
                  {isMintLoading && "Waiting for approval"}
                  {isMintStarted && "Minting..."}
                  {!isMintLoading && !isMintStarted && "Mint"}
                </button>
              )}
              {isMinted && (
                <div>
                  <a
                    style={{ margin: "40px auto" }}
                    href={`https://testnet.kyotoscan.io/tx/${mintData?.hash}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    testnet.kyoto
                  </a>
                </div>
              )}
            </div>
          </Col>
        </Row>
      </header>
    </Container>
  );
};

export default Nft;
