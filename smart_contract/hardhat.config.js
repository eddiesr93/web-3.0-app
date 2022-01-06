
require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: "0.8.0",
  network: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/Ffslv8KCN9at0k739OREAWf4nwJYfQst',
      accounts: ['d7b1b77f58389890020b94da0f35df770f62fc4a04627d21a45366847778d9a7']
    }
  }
}