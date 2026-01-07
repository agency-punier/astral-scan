# Astral Scan (Built for Base)

Astral Scan is a powerful, read-only tool built for inspecting and validating the Base Sepolia network. It provides developers with the ability to quickly inspect wallet balances, network configuration, contract deployment status, and blockchain data—all without making any state-changing operations.

---

## Features

Astral Scan allows you to:
- **Network Connectivity**: Verify that you're properly connected to Base Sepolia (chainId: 84532).
- **Wallet Balance**: Inspect wallet balances for any address without broadcasting transactions.
- **Contract Deployment Validation**: Easily validate deployed contracts using explorer links to Basescan.
- **Block and Gas Data**: View recent block information and gas usage to monitor network health.
- **Read-Only Mode**: All interactions are non-intrusive and do not modify blockchain data.

With Astral Scan, you can gather all the necessary data to validate contracts, inspect wallet balances, and ensure the network is running smoothly.

---

## How It Works

Astral Scan leverages the Coinbase Wallet SDK for wallet integration and communicates with Base Sepolia via the `viem` library. It allows you to:

1. **Connect to Coinbase Wallet**: The tool accesses your wallet using Coinbase Wallet SDK.
2. **Query the Base Sepolia Network**: It retrieves onchain data such as wallet balances, transaction counts, block info, gas prices, and contract bytecode.
3. **Display Data**: Outputs results to the console, including verified explorer links to confirm contract deployments and balances.

No transactions are signed or broadcasted, ensuring a safe, non-intrusive experience for inspecting network data.

---

## Repository Structure

- **app/astral-scan.ts**  
  This is the main script that connects to Coinbase Wallet and queries Base Sepolia for wallet balances, transaction data, and blockchain statistics.

- **contracts/**  
  Solidity contracts deployed to Base Sepolia for testnet validation:
  - `mapping.sol`
  - `structs.sol`

- **scripts/**  
  Utility scripts for deployment and testing:
  - `deploy-contracts.sh`
  - `test-addresses.json`

- **package.json**  
  Manages the project dependencies.

- **README.md**  
  This file, explaining the tool and its usage.

---

## Supported Networks

Base Sepolia  
- **ChainId (decimal)**: 84532  
- **Explorer**: [sepolia.basescan.org](https://sepolia.basescan.org)

---

## How to Use

To use Astral Scan, follow these steps:

1. **Clone the repository:**
    ```bash
    git clone https://github.com/your-handle/astral-scan.git
    cd astral-scan
    ```

2. **Install the dependencies:**
    ```bash
    npm install
    ```

3. **Run the tool:**
    ```bash
    ts-node app.astral-scan.ts
    ```

This will connect to Base Sepolia, inspect your wallet balance, review the latest block data, and validate contract deployments.

---

## Dependencies

Astral Scan depends on the following libraries:
- **Coinbase Wallet SDK** for wallet integration  
- **Viem** for interacting with Base Sepolia  
- **Axios** for making HTTP requests  
- **Web3.js** for additional wallet functionality  
- **Ethers.js** for Ethereum protocol interactions  

Additionally, Astral Scan integrates with Base-specific repositories:
- **Base Node**: For network communication  
- **Base Web**: For frontend interactions  
- **Coinbase AgentKit**: For wallet management and interactions  

---

## License

MIT License  
Copyright (c) 2025 YOUR_NAME

---

## Testnet Deployment (Base Sepolia)

The following contracts were deployed on Base Sepolia for validation purposes:

Network: Base Sepolia  
chainId (decimal): 84532  
Explorer: [sepolia.basescan.org](https://sepolia.basescan.org)

Contract mapping.sol address:  
0x51dDDAc5D8d87498482e13f4D952f559e1b23D24 

Deployment and verification:
- [Deployment Link](https://sepolia.basescan.org/address/0x51dDDAc5D8d87498482e13f4D952f559e1b23D24)
- [Code Verification](https://sepolia.basescan.org/0x51dDDAc5D8d87498482e13f4D952f559e1b23D24/0#code)

Contract structs.sol address:  
0xb9Fa1f433fAA1eAff550506035a0c3D6Ab0252DF

Deployment and verification:
- [Deployment Link](https://sepolia.basescan.org/address/0xb9Fa1f433fAA1eAff550506035a0c3D6Ab0252DF)
- [Code Verification](https://sepolia.basescan.org/0xb9Fa1f433fAA1eAff550506035a0c3D6Ab0252DF/0#code)

These deployments validate Base Sepolia tooling and ensure proper network functionality.

---

## Author

GitHub: [agency-punier](https://github.com/agency-punier)  

Email: agency.punier.0q@icloud.com
