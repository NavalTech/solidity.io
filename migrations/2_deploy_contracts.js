const SolidToken = artifacts.require('SolidToken')
const DaiToken = artifacts.require('DaiToken')
const TokenFarm  = artifacts.require("TokenFarm");

module.exports = async function(deployer, network, accounts) {
  //DaiToken
  await deployer.deploy(DaiToken)
  const daiToken = await DaiToken.deployed()

  //SOLID token
  await deployer.deploy(SolidToken)
  const solidToken = await SolidToken.deployed()


  await deployer.deploy(TokenFarm, solidToken.address, daiToken.address)
  const tokenFarm = await TokenFarm.deployed()

  await solidToken.transfer(tokenFarm.address, '1000000000000000000000000')

  await daiToken.transfer(accounts[1], '1000000000000000000000000')
};
