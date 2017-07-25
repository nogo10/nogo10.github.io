//import web3 from 'web3';
//var Web3 = require('web3');

//Metamask stuff 
//https://github.com/MetaMask/faq/blob/master/DEVELOPERS.md
window.addEventListener('load', function() {

  // Checking if Web3 has been injected by the browser (Mist/MetaMask)
  /* if (typeof web3 !== 'undefined') {
     // Use Mist/MetaMask's provider
     window.web3 = new Web3(Web3.currentProvider);
   }
   else {
     console.log('No web3? You should consider trying MetaMask!');
     // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
     window.web3 = new Web3(new Web3.providers.HttpProvider("https://ropsten.infura.io/vXPxpEWW5GUNZ3CM6JBT"));
   }*/

  // Now you can start your app & access web3 freely:
  if (window.web3.isConnected) {
    console.log("Your browser connected to web3");
    console.log(web3.version);
    console.log(web3.eth.getAccounts());
    if (web3.eth.getAccounts()== undefined){ 
      document.getElementById("kbt").innerHTML = "please log into your MetaMask ropsten acoount";
    }
    var defaultAccount = web3.eth.defaultAccount;
    console.log(defaultAccount);
  }


  else {
    console.log("not connected to web3!!");
    window.web3 = new Web3(new Web3.providers.HttpProvider("https://ropsten.infura.io/vXPxpEWW5GUNZ3CM6JBT"));
  }

  web3.version.getNode(function(error, result) {
    if (error) {
      return error;
    }

    else {
      console.log(result);
    }

    var abi = [{
      "constant": true,
      "inputs": [{
        "name": "_owner",
        "type": "address"
      }],
      "name": "balanceOf",
      "outputs": [{
        "name": "balance",
        "type": "uint256"
      }],
      "payable": false,
      "type": "function"
    }];

    /*        getBalance          */
    $(function() {
      $('#kbt').click(function(e) {
        e.preventDefault();
        var myaddress = document.getElementById("myinput").value;
        var MyContract = web3.eth.contract(abi);
        var myContractInstance = MyContract.at('0x284057ca9b16d0bbc8722601df1eede6e56a60d9');
        var result = myContractInstance.balanceOf(myaddress, function(error, result) {
          if (error) {
            return error;
          }

          else {
            console.log(result);
          }

        });

        document.getElementById("kbt").innerHTML = result;

      });
    });

  });

});
