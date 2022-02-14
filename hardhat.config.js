require('dotenv').config();
require('@nomiclabs/hardhat-waffle');
require('@nomiclabs/hardhat-truffle5');
require("@nomiclabs/hardhat-etherscan");
require('hardhat-gas-reporter');
require('solidity-coverage');
require('@nomiclabs/hardhat-solhint');
require('hardhat-contract-sizer');
require('@openzeppelin/hardhat-upgrades');

const PRIVATE_KEY = process.env.PRIVATE_KEY;

module.exports = {
  solidity: {
    version: '0.6.12',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  gasReporter: {
    currency: 'USD',
    enabled: false,
    gasPrice: 50,
  },
  networks: {
    // ethereum: {
    //   url: `https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161`,
    //   chainId: 1,
    //   accounts: [`0x${PRIVATE_KEY}`]
    // },
    mainnet: {
      url: `https://rpcapi.fantom.network`,
      chainId: 250,
      accounts: [`0x${PRIVATE_KEY}`]
    },
    testnet: {
      url: `https://rpcapi-tracing.testnet.fantom.network`,
      chainId: 4002,
      accounts: [`0x${PRIVATE_KEY}`]
    },
    ropsten: {
      url: `https://ropsten.infura.io/v3/084e5c1f291642d5a9cffad25a1954c8`,
      chainId: 3,
      
      accounts: [`0x${PRIVATE_KEY}`],
    },
    kovan: {
      url: `https://kovan.infura.io/v3/084e5c1f291642d5a9cffad25a1954c8`,
      chainId: 42,
      
      accounts: [`0x${PRIVATE_KEY}`],
    },
    rinkeby: {
      url: `https://rinkeby.infura.io/v3/084e5c1f291642d5a9cffad25a1954c8`,
      chainId: 4,
      
      accounts: [`0x${PRIVATE_KEY}`],
    },
    coverage: {
      url: 'http://localhost:8555',
    },
    
    localhost: {
      url: `http://127.0.0.1:8545`
    },
  },
  etherscan: {
    // apiKey: '46DD6NK19R2AZQQIJIY1FXR85HKM2XSNBE'
    apiKey: 'UHSN3IVGFRZ13UWYE7ZK4YPCET8WWNP2J5'
    
  }
};
