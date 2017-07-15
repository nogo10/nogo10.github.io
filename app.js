//Metamask stuff
//https://github.com/MetaMask/faq/blob/master/DEVELOPERS.md
window.addEventListener('load', function() {

  // Checking if Web3 has been injected by the browser (Mist/MetaMask)
  if (typeof web3 !== 'undefined') {
    // Use Mist/MetaMask's provider
    window.web3 = new Web3(web3.currentProvider);
  }
  else {
    console.log('No web3? You should consider trying MetaMask!')
      // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
    window.web3 = new Web3(new Web3.providers.HttpProvider("https://ropsten.infura.io/vXPxpEWW5GUNZ3CM6JBT"));
  }

  // Now you can start your app & access web3 freely:
  if (web3.isConnected()) {
    console.log("hola")
  }

  else {
    console.log("nikkoko")
  }

  web3.version.getNode(function(error, result) {
    if (error) {
      return error
    }
    console.log(result)
    var version = web3.version.network;
    console.log(version);

  });

});