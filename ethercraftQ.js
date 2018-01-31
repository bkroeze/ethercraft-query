#! /usr/bin/env node
/**
 * etheremonQ
 *
 * A simple query tool for etheremon.
 *
 * Copyright 2017, Bruce Kroeze <bkroeze@gmail.com>
 */

var Web3 = require('web3');
var ERC20 = require('human-standard-token-abi')
var itemDB = require('./itemdb').itemDB;
var noop = () => null;

var ITEMS = {
  'gloves': '0xb6bf757e722dd1e7db9fb06e30bcf8f591f94b44'
};

var EnchantedABI = require('./EnchantedStore');

var oneEth = 1000000000000000000;

class TokenShop {

  constructor(web3, config) {
    this.web3 = web3;
    this.config = config;
    //console.log('config', config);
    this.shop = this.web3.eth.contract(EnchantedABI).at(config.address);
  }

  /**
   * Gets the balance for the account
   * @param {string} account
   * @return {Promise} resolving to details of the object
   */
  getDetails(account) {
    return new Promise((resolve, reject) => {
      var enchantedShop = this.shop;
      var web3 = this.web3;
      enchantedShop.object.call(function (err, tokenAddress) {
        //console.log('Token Address', tokenAddress);
        if (err) { reject(err); }
        var token = web3.eth.contract(ERC20).at(tokenAddress);
        var rv = {
          symbol: null,
          balance: 0,
          itemReturn: 0,
          balanceOwed: 0
        };

        var complete = 0;
        var checkComplete = function() {
          complete++;
          if (complete > 3) {
            resolve(rv);
          }
        };

        token.symbol.call((err, symbol) => {
          if (err) { reject(err); }
          rv.symbol = symbol;
          checkComplete();
        });

        token.balanceOf.call(account, (err, balance) => {
          if (err) { reject(err); }
          rv.balance = balance / oneEth;
          checkComplete();
        });

        enchantedShop.itemReturn.call(function (err, itemReturn) {
          if (err) { reject(err); }
          rv.itemReturn = itemReturn / oneEth;
          checkComplete();
        });

        enchantedShop.balanceOwed.call(account, function (err, balanceOwed) {
          if (err) { reject(err); }
          rv.balanceOwed = balanceOwed;
          checkComplete();
        });
      });
    });
  }
}

class Client {

  constructor(params) {
    this.web3 = new Web3(Web3.givenProvider || new Web3.providers.HttpProvider('https://api.myetherapi.com/eth'));
    this.enchantedShop = this.web3.eth.contract(EnchantedABI).at(params.contract);
    this.account = params.account;
  }

  /**
   * Gets details of an item
   * @param {string} item name
   * @return {Promise} promise resolving to the details of the item
   */
  getItemDetails(item) {
    var shop = new TokenShop(this.web3, item);
    return shop.getDetails(this.account);
  }

  /**
   * Not complete, need to inspect shop-item js for more details here.
   * @param  {[type]} account [description]
   * @return {[type]}         [description]
   */
  getItemsOwned(account) {
    return new Promise((resolve, reject) => {
      this.enchantedShop.itemsOwned.call(this.account, (err, items) => {
        if (err) { reject(err); }
        resolve(items/oneEth);
      });
    });
  }
}

function balanceCommand (args) {
  const client = new Client(args);
  client.getItemDetails(itemDB[0])
    .then(details => {
      var now = new Date().toLocaleString();
      console.log(`${now}: ${JSON.stringify(details)}`);
    });
}

function itemsOwnedCommand (args) {
  const client = new Client(args);
  const owned = [];
  var finished=0;
  function checkComplete() {
    finished++;
    if (finished >= itemDB.length) {
      var now = new Date().toLocaleString();
      console.log(`${now}\n-------\n`);
      for (var i=0; i<owned.length; i++) {
        var item = owned[i];
        item.balanceOwed = item.balanceOwed.toString(10);
        console.log(owned[i])
      }
    }
  }
  for (var i=0; i<itemDB.length; i++) {
    client.getItemDetails(itemDB[i])
      .then(details => {
        if (details.balance > 0) {
          owned.push(details);
        }
        checkComplete();
      });
    }

}

function accountOptions (yargs) {
  return yargs
    .option('account', {alias: 'a', type: 'string', default: '0xC249736C5e126d604490F22d569F4EC453432902'})
    .option('contract', {type: 'string', description: "EnchantedShop contract address (override default if given)", default: '0x8c75f62d9b47514c134a8ca0eb40c9518882961d'})
    .demandOption('account', 'Please provide account');
}

const USAGE = 'Query Ethercraft account\nUsage: ethercraftQ balance';

var args = require('yargs')
  .usage(USAGE)
  .command({
    command: 'balance',
    desc: 'Get balance for Ethercraft account',
    builder: accountOptions,
    handler: balanceCommand
  })
  .command({
    command: 'inventory',
    desc: 'Get Inventory',
    builder: accountOptions,
    handler: itemsOwnedCommand
  })
  .showHelpOnFail(false, 'Specify --help for available options')
  .demandCommand(1, USAGE + '\n\nI need at least one command, such as "balance"')
  .help()
  .parse();

// console.log(args);
