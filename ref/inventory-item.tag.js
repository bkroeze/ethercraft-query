riot.tag2('inventory-item', '<div if="{tokensHeld > 0}" class="wrapper"> <virtual if="{web3.eth.defaultAccount == this.opts.account && needsBadge}"><div class="badge">!</div> </virtual> <virtual if="{web3.eth.defaultAccount == this.opts.account && !needsBadge}"><div class="nobadge">!</div> </virtual> <a class="nostyle" href="#/shop/{this.opts.itemid}"> <div class="{itemcss}"> &times;{tokensHeld} </div> </a> </div>', 'inventory-item .badge,[data-is="inventory-item"] .badge{ width:2em; height:2em; background: red; color: white; position: relative; top:10px; border: 1px solid black; font-size: 1em; line-height: 2em; } inventory-item .nobadge,[data-is="inventory-item"] .nobadge{ visibility: hidden; width:2em; height:2em; background: white; color: white; position: relative; top:10px; border: 1px solid black; font-size: 1em; line-height: 2em; } inventory-item .wrapper,[data-is="inventory-item"] .wrapper{ display: inline-table; width: 0%; padding: 1em; }', '', function(opts) {


        var self = this;
        this.itemcss = 'rpgui-icon item-' + String(this.opts.itemid);
        var enchantedShop = web3.eth.contract(Enchanted).at(this.opts.address);

        function updateToken(accountAddress) {
            enchantedShop.object.call(function (err, tokenAddress) {
                var token = web3.eth.contract(ERC20).at(tokenAddress);
                    var oneEth = 1000000000000000000
                    token.balanceOf.call(accountAddress, function (err, balance) {
                        self.tokensHeld = balance.dividedBy(oneEth);
                        enchantedShop.latestBalanceCheck.call(accountAddress, function (err, latestBalanceCheck) {

                            enchantedShop.itemReturn.call(function (err, itemReturn) {

                                enchantedShop.balanceOwed.call(accountAddress, function (err, balanceOwed) {
                                    token.totalSupply.call(function (err, totalSupply) {
                                        if (balanceOwed > 0 || totalSupply.toString() != latestBalanceCheck.toString() && (itemReturn.toString() != 0)) {

                                            self.needsBadge = true;
                                        } else {
                                            self.needsBadge = false;
                                        }
                                    });
                                });
                            });
                        });
                    });
            });
        }

        this.on('mount', function () {
            updateToken(this.opts.account);
        });

        this.on('update', function () {
            updateToken(this.opts.account);
        });
});
