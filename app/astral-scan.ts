// app/astral-scan.ts
import CoinbaseWalletSDK from "@coinbase/wallet-sdk";
import { createPublicClient, http, formatEther, isAddress } from "viem";
import { baseSepolia } from "viem/chains";

const RPC_URL = "https://sepolia.base.org";
const CHAIN_ID = 84532;
const EXPLORER = "https://sepolia.basescan.org";

const sdk = new CoinbaseWalletSDK({
  appName: "Astral Scan (Built for Base)",
});

const client = createPublicClient({
  chain: baseSepolia,
  transport: http(RPC_URL),
});

async function connectWallet() {
  const provider = sdk.makeWeb3Provider(RPC_URL, CHAIN_ID);
  const accounts = (await provider.request({
    method: "eth_requestAccounts",
  })) as string[];

  const address = accounts[0];
  const balance = await client.getBalance({ address });

  return { address, balance };
}

async function getNetworkData() {
  const block = await client.getBlock();
  const gasPrice = await client.getGasPrice();

  return {
    blockNumber: block.number,
    timestamp: block.timestamp,
    gasUsed: block.gasUsed,
    gasLimit: block.gasLimit,
    gasPrice,
  };
}

async function checkContractDeployment(address: string) {
  const code = await client.getCode({ address });
  if (code === "0x") {
    throw new Error("No contract deployed at this address.");
  }
  return code;
}

async function run() {
  const wallet = await connectWallet();
  const networkData = await getNetworkData();
  const contractData = await checkContractDeployment(wallet.address);

  console.log("Network: Base Sepolia");
  console.log("chainId:", CHAIN_ID);
  console.log("Wallet Address:", wallet.address);
  console.log("Balance:", formatEther(wallet.balance), "ETH");
  console.log("Latest Block:", networkData.blockNumber);
  console.log("Gas Price:", networkData.gasPrice.toString());
  console.log("Contract Data (Hex):", contractData);
  console.log("Explorer:", `${EXPLORER}/address/${wallet.address}`);
}

run().catch((err) => {
  console.error("Error:", err.message);
});
