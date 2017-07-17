var async = require('async');
var web3 = require('web3');


//Metamask stuff
//https://github.com/MetaMask/faq/blob/master/DEVELOPERS.md
window.addEventListener('load', function() {

  // Checking if Web3 has been injected by the browser (Mist/MetaMask)
  if (typeof web3 !== 'undefined') {
    // Use Mist/MetaMask's provider
    window.web3 = new web3(web3.currentProvider);
  }
  else {
    console.log('No web3? You should consider trying MetaMask!')
      // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
    window.web3 = new Web3(new Web3.providers.HttpProvider("https://ropsten.infura.io/vXPxpEWW5GUNZ3CM6JBT"));
  }

  // Now you can start your app & access web3 freely:
  if (window.web3.isConnected()) {
    console.log("hola")
  }

  else {
    console.log("not connected to web3!!")
  }

  window.web3.version.getNode(function(error, result) {
    if (error) {
      return error
    }

    var abi = [{
      "constant": true,
      "inputs": [],
      "name": "name",
      "outputs": [{
        "name": "",
        "type": "string"
      }],
      "payable": false,
      "type": "function"
    }, {
      "constant": false,
      "inputs": [{
        "name": "_spender",
        "type": "address"
      }, {
        "name": "_value",
        "type": "uint256"
      }],
      "name": "approve",
      "outputs": [{
        "name": "success",
        "type": "bool"
      }],
      "payable": false,
      "type": "function"
    }, {
      "constant": true,
      "inputs": [],
      "name": "totalSupply",
      "outputs": [{
        "name": "",
        "type": "uint256"
      }],
      "payable": false,
      "type": "function"
    }, {
      "constant": false,
      "inputs": [{
        "name": "_from",
        "type": "address"
      }, {
        "name": "_to",
        "type": "address"
      }, {
        "name": "_value",
        "type": "uint256"
      }],
      "name": "transferFrom",
      "outputs": [{
        "name": "success",
        "type": "bool"
      }],
      "payable": false,
      "type": "function"
    }, {
      "constant": true,
      "inputs": [],
      "name": "decimals",
      "outputs": [{
        "name": "",
        "type": "uint8"
      }],
      "payable": false,
      "type": "function"
    }, {
      "constant": true,
      "inputs": [],
      "name": "version",
      "outputs": [{
        "name": "",
        "type": "string"
      }],
      "payable": false,
      "type": "function"
    }, {
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
    }, {
      "constant": true,
      "inputs": [],
      "name": "symbol",
      "outputs": [{
        "name": "",
        "type": "string"
      }],
      "payable": false,
      "type": "function"
    }, {
      "constant": false,
      "inputs": [{
        "name": "_to",
        "type": "address"
      }, {
        "name": "_value",
        "type": "uint256"
      }],
      "name": "transfer",
      "outputs": [{
        "name": "success",
        "type": "bool"
      }],
      "payable": false,
      "type": "function"
    }, {
      "constant": false,
      "inputs": [{
        "name": "_spender",
        "type": "address"
      }, {
        "name": "_value",
        "type": "uint256"
      }, {
        "name": "_extraData",
        "type": "bytes"
      }],
      "name": "approveAndCall",
      "outputs": [{
        "name": "success",
        "type": "bool"
      }],
      "payable": false,
      "type": "function"
    }, {
      "constant": true,
      "inputs": [{
        "name": "_owner",
        "type": "address"
      }, {
        "name": "_spender",
        "type": "address"
      }],
      "name": "allowance",
      "outputs": [{
        "name": "remaining",
        "type": "uint256"
      }],
      "payable": false,
      "type": "function"
    }, {
      "inputs": [{
        "name": "_initialAmount",
        "type": "uint256"
      }, {
        "name": "_tokenName",
        "type": "string"
      }, {
        "name": "_decimalUnits",
        "type": "uint8"
      }, {
        "name": "_tokenSymbol",
        "type": "string"
      }],
      "payable": false,
      "type": "constructor"
    }, {
      "payable": false,
      "type": "fallback"
    }, {
      "anonymous": false,
      "inputs": [{
        "indexed": true,
        "name": "_from",
        "type": "address"
      }, {
        "indexed": true,
        "name": "_to",
        "type": "address"
      }, {
        "indexed": false,
        "name": "_value",
        "type": "uint256"
      }],
      "name": "Transfer",
      "type": "event"
    }, {
      "anonymous": false,
      "inputs": [{
        "indexed": true,
        "name": "_owner",
        "type": "address"
      }, {
        "indexed": true,
        "name": "_spender",
        "type": "address"
      }, {
        "indexed": false,
        "name": "_value",
        "type": "uint256"
      }],
      "name": "Approval",
      "type": "event"
    }];
    console.log(window.Web3.currentProvider);



    /*        getBalance                             */
    $(function() {
      $('#kbt').click(function(e) {
        e.preventDefault();
        var myaddress = document.getElementById("myinput").value;
        document.getElementById("kbt").innerHTML.window.web3.eth.contract(abi).at('0x284057ca9b16d0bbc8722601df1eede6e56a60d9').balanceOf(myaddress);

      });
    });



  });

});
