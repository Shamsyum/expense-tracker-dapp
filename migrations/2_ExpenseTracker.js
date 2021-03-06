var ExpenseTracker = artifacts.require("./ExpenseTracker.sol");

module.exports = function(deployer) {
    deployer.deploy(ExpenseTracker);
};

// var Adoption = artifacts.require("./Adoption.sol");

// module.exports = function(deployer) {
//   deployer.deploy(Adoption);
// };
