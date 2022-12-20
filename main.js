const {Blockchain, Transaction} = require('./blockchain');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const myKey = ec.keyFromPrivate('bf50088c1f044d0a47b0311e8c7cd52e5407b89e353287d1128909ce78a7fdfd');
const myWalletAddress = myKey.getPublic('hex');

let recycleCoin = new Blockchain();

const tx1 = new Transaction(myWalletAddress, 'public key goes here', 10);
tx1.signTransaction(myKey);
recycleCoin.addTransaction(tx1);



console.log('\n Starting the miner...');
recycleCoin.minePendingTransactions(myWalletAddress);

console.log('\n Balance of isil is', recycleCoin.getBalanceOfAddress(myWalletAddress));

recycleCoin.chain[1].transactions[0].amount = 1;

console.log('Is chain valid? ', recycleCoin.isChainValid());

