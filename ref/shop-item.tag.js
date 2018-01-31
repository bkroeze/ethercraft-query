riot.tag2('shop-item', '<div class="pure-u-1 pure-u-sm-1-2 pure-u-md-1-3 pure-u-lg-1-3 pure-u-xl-1-4 rpgui-container shop-item {shop-enchanted: this.shop.enchanted} {full: this.opts.full}"> <div class="wrapper"> <div class="item-price-wrapper"> <div onclick="{copyAddressToClip}" class="{shop.itemcss}"> </div> <div if="{this.shop.enchanted}" class="sparkle-wrapper"> <div class="sparkle"></div> </div> <div class="item-name"> {this.shop.name} </div> <div onclick="{copyPriceToClip}" class="item-price"> {this.opts.full ? \'Price: \' : \'\'}{this.shop.price==0 ? \'FREE\' : roundedPrice} <span class="eth" if="{this.shop.price !=0}"> &Xi; </span> </div> <div class="total"> {totalItems != undefined ? totalItems + \' sold\' : \'\'} </div> <div if="{this.opts.full}" class="item-description"> {this.shop.description} </div> </div> <div if="{!this.shop.enchanted && (!this.shop.price==0 ) && !this.shop.limited && this.opts.full}" class="amount-wrapper"> <button id="less" class="pure-button button-error">-</button>{this.shop.value}<button id="more" class="pure-button button-success">+</button> </div> </div> <div if="{this.opts.full}" class="bottom"> <div if="{this.shop.enchanted}" class="enchanted-text"> This item is enchanted. Each {shop.name} you purchase from this shop will earn {itemReturnString}&nbsp;ETH for every subsequent sale. </div> <button class="pure-button button-secondary" if="{this.opts.full && this.shop.enchanted && (balanceOwedByShop > 0)}" onclick="{withdraw}" class="rpgui-button get">WITHDRAW {balanceOwedByShop} ETH</button> <virtual if="{this.shop.address != \'0x0\' && this.shop.enchanted}"> <button class="pure-button button-success" onclick="{buyEnchantedObject}" class="rpgui-button buy">BUY</button> </virtual> <virtual if="{this.shop.address != \'0x0\' && this.shop.price > 0 && !this.shop.enchanted}"> <button class="pure-button button-success" onclick="{buyObjects}" class="rpgui-button buy">BUY</button> </virtual> <virtual if="{this.shop.address != \'0x0\' &&  this.shop.price == 0}"> <button class="pure-button button-success" onclick="{buyObjects}" class="rpgui-button buy">CLAIM</button> </virtual> <virtual if="{this.shop.address == \'0x0\'}"> <button class="pure-button button-error" class="rpgui-button buy">NOT IN STOCK</button> </virtual> </div> </div>', 'shop-item .shop-enchanted,[data-is="shop-item"] .shop-enchanted{ border-image-source: url(\'inventory-shop/img/enchantedshop.png\'); background-image: url(\'inventory-shop/img/shop-background.png\'); color: gold !important; } shop-item .shop-get,[data-is="shop-item"] .shop-get{ position: absolute; bottom: 75px; width: 100%; left: 0; right: 0; } shop-item .get,[data-is="shop-item"] .get{ left: 5px; } shop-item .buy,[data-is="shop-item"] .buy{ right: 5px; } shop-item .bottom,[data-is="shop-item"] .bottom{ position: absolute; bottom: 5px; } shop-item .rpgui-button,[data-is="shop-item"] .rpgui-button{ color: black !important; } shop-item .gold,[data-is="shop-item"] .gold{ color: gold !important; } shop-item .full,[data-is="shop-item"] .full{ height: 500px !important; width: 500px !important; display: block; margin-left: auto; margin-right: auto; display: flex; flex-direction: column; justify-content: center; align-items: center; } shop-item .wrapper,[data-is="shop-item"] .wrapper{ margin: 0; margin-bottom: 50px; text-shadow: -2px 0 #000, 0 2px #000, 2px 0 #000, 0 -2px #000; } @media (max-width: 500px) { shop-item .full,[data-is="shop-item"] .full{ height: auto !important; min-height: 500px !important; width: 100% !important; display: block; margin-left: auto; margin-right: auto; display: flex; flex-direction: column; justify-content: center; align-items: center; margin-bottom: 25px; } } shop-item .item-name,[data-is="shop-item"] .item-name,shop-item .item-price,[data-is="shop-item"] .item-price{ line-height: 17px; margin-top: 10px; color: gold !important; } shop-item .item-description,[data-is="shop-item"] .item-description{ font-family: sans-serif; font-weight: bold; font-size: 1.5em; color: white; padding: 10px; } shop-item .enchanted,[data-is="shop-item"] .enchanted{ color: gold !important; } @media screen and (min-width: 768px) { shop-item #equipment,[data-is="shop-item"] #equipment{ height: 100%; } } shop-item .eth,[data-is="shop-item"] .eth{ margin-left: -10px; font-size: 1.5em; color: gold; font-family: Arial, Helvetica, sans-serif; } shop-item .full > .wrapper > .item-price-wrapper,[data-is="shop-item"] .full > .wrapper > .item-price-wrapper{ margin-bottom: 100px; } shop-item .sparkle-wrapper,[data-is="shop-item"] .sparkle-wrapper{ top:5px; left:35%; position: absolute; } shop-item .full > .wrapper > .item-price-wrapper > .sparkle-wrapper,[data-is="shop-item"] .full > .wrapper > .item-price-wrapper > .sparkle-wrapper{ top:7.77%; left:42%; position: absolute; } shop-item .enchanted-text,[data-is="shop-item"] .enchanted-text{ font-family: sans-serif; color: white; background-color: rgba(0, 0, 0, 0.45); padding: 10px; font-size: 1.25em; } shop-item button,[data-is="shop-item"] button{ padding:10px; } shop-item .sparkle,[data-is="shop-item"] .sparkle{ width: 20px; height: 20px; background-color: red; position: absolute; top:0; margin: 0%; background: url(\'inventory-shop/img/sparkle.png\'); -webkit-animation: sparkle .5s infinite steps(1), movetop 2.5s infinite steps(1), moveleft 3.5s infinite steps(1) } @keyframes sparkle { 0%, 100% { background-position: 0px 0 } 20% { background-position: 20px 0 } 40% { background-position: 40px 0 } 60% { background-position: 60px 0 } 80% { background-position: 80px 0 } } @keyframes movetop { 0%, 100% { top: 0; } 20% { top: 37.5px; } 40% { top: 15px; } 60% { top: 50px; } 80% { top: 5px } } @keyframes moveleft { 0%, 100% { left: 20px } 14.28% { left: 5px } 28.57% { left: 40px } 42.85% { left: 17.5px } 57.14% { left: 10px } 71.42% { left: 20px } 85.71% { left: 40px } } shop-item .total,[data-is="shop-item"] .total{ color: white; margin-top:10px; } shop-item .full > .wrapper > .item-price-wrapper > .total,[data-is="shop-item"] .full > .wrapper > .item-price-wrapper > .total{ color: grey; } shop-item .amount-wrapper > *,[data-is="shop-item"] .amount-wrapper > *{ margin: 5px; }', '', function(opts) {
        var lang = this.mixin('languages').language;

        var details = this.mixin('details').getDetail(this.opts.itemid, lang);
        var self = this;
        this.errors = {};

        var thisShop;
        var token;

        var oneEth = 1000000000000000000;

        function copyAddress()
        {
            document.oncopy = function(event) {
                event.clipboardData.setData("text/plain", self.shop.address);
                event.preventDefault();
            };
            document.execCommand("Copy");
            document.oncopy = undefined;
        }

        function copyPrice()
        {
            document.oncopy = function(event) {
                event.clipboardData.setData("text/plain", self.itemPrice.dividedBy(oneEth).toString());
                event.preventDefault();
            };
            document.execCommand("Copy");
            document.oncopy = undefined;
        }

        function objectPurchase(address, amount = 1) {
            thisShop.shopSettings.call(function (err, shopSettings) {
                var price = shopSettings[5];
                web3.eth.estimateGas({
                    to: address,
                    value: price * amount
                }, function (err, estimatedGas) {
                    web3.eth.sendTransaction({
                        to: address,
                        value: price * amount,
                        gas: estimatedGas
                    }, function (err, transactionHash) {
                        console.log("transaction hash: " + transactionHash);
                    });
                });
            });
        }

        function enchantedObjectPurchase(address) {
            thisShop.originalPrice.call(function (err, originalPrice) {
                thisShop.shopSettings.call(function (err, shopSettings) {
                    var currentPrice = shopSettings[5]
                    console.log("current price " + currentPrice)
                    console.log("original price " + originalPrice)
                    var recommendedBid = currentPrice.plus(oneEth/100);
                    var price;
                    if (currentPrice.dividedBy(originalPrice) == 1) {
                        price = currentPrice;
                        console.log("using price: " + price);
                    } else {
                        price = recommendedBid;
                        console.log("using recommendedBid: " + recommendedBid);
                    }

                    self.recommendedBid = recommendedBid;
                    web3.eth.estimateGas({
                        to: address,
                        value: price
                    }, function (err, estimatedGas) {
                        console.log("estimated gas: " + estimatedGas);
                        web3.eth.sendTransaction({
                            to: address,
                            value: price,
                            gas: estimatedGas
                        }, function (err, transactionHash) {
                            console.log("transaction hash: " + transactionHash);

                        });
                    });
                });
            });
        }

        function withdrawal(address) {
            var claimData = thisShop.claimFunds.getData();

            web3.eth.estimateGas({
                to: address,
                value: web3.toHex(0),
                data: claimData
            }, function (err, estimatedGas) {
                console.log("estimatedGas to claimFunds(): " + estimatedGas);
                web3.eth.sendTransaction({
                    to: address,
                    value: web3.toHex(0),
                    data: claimData
                }, function (err, transactionHash) {
                    console.log("claimFunds() transaction hash: " + transactionHash);
                });
            });
        }

        function validate(el, shop, field, oldValue, newValue) {

            if (field == 'text') {
                var num = Number(newValue);
                if (isNaN(num.valueOf())) {
                    self.errors[field] = true;
                    return false;
                }
                delete self.errors[field];
                return {
                    value: num
                };
            }
            return true;
        }

        function createBinding(tag, validate) {
            return function (field, e) {
                var el = e.srcElement,
                    oldVal = this[field],
                    newVal;

                newVal = el.value

                if (el.type == 'text') {
                    newVal = el.value;
                } else if (el.type == 'checkbox') {
                    newVal = !!el.checked;
                } else if (el.tagName === 'SELECT') {
                    newVal = el.value
                }

                var result = validate(el, this, field, oldVal, newVal);
                if (result) {
                    this[field] = typeof result === 'object' ? result.value : newVal;
                }
            }
        }

        this.shop = {
            itemcss: 'rpgui-icon item-' + this.opts.itemid,
            address: details.address,
            price: details.price,
            name: details.strings[lang].name,
            enchanted: details.enchanted,
            description: details.strings[lang].description,
            limited: details.limited,
            value: 1
        };

        this.sync = createBinding(this, validate);

        this.display = function () {
            return JSON.stringify(self.shop);
        };

        function getPrice() {
            thisShop.shopSettings.call(function (err, shopSettings) {
                self.itemPrice = shopSettings[5];
                self.countdown = shopSettings
                if (thisShop.itemReturn == null) {
                    self.roundedPrice = self.itemPrice.dividedBy(oneEth);
                } else {
                    thisShop.originalPrice.call(function (err, originalPrice) {

                        var roundUpBy = 0;
                        if (self.itemPrice.toString() != originalPrice.toString()) {

                            roundUpBy = oneEth/1000;
                        }
                        self.roundedPrice = parseFloat(self.itemPrice.plus(roundUpBy).dividedBy(oneEth).toFixed(3));
                        thisShop.itemReturn.call(function (err, itemReturn) {
                            this.itemReturn = itemReturn;
                            this.itemReturnString = itemReturn.dividedBy(oneEth);
                        });
                    });
                }
            });
        }

        function getTotalSupply() {
            token.totalSupply.call(function (err, totalSupply) {
                self.totalItems = totalSupply.dividedBy(oneEth);
            });
        }

        function balanceOwed() {
            var accountAddress = web3.eth.defaultAccount;

            thisShop.balanceOwed.call(accountAddress, function (err, balanceOwed) {
                thisShop.excessEth.call(accountAddress, function (err, excessEth) {
                    thisShop.latestBalanceCheck.call(accountAddress, function (err, latestBalanceCheck) {
                        thisShop.itemReturn.call(function (err, itemReturn) {
                            token.totalSupply.call(function (err, totalSupply) {
                                thisShop.itemsOwned.call(accountAddress, function (err, itemsOwned) {
                                    returnsUnaccounted = totalSupply.minus(latestBalanceCheck).dividedBy(oneEth).times(itemReturn).times(itemsOwned.dividedBy(oneEth));
                                    var shopBalance = balanceOwed.plus(excessEth).plus(returnsUnaccounted);
                                    var results = 'Total balance owed to user: ';
                                    results += shopBalance.dividedBy(oneEth).toString();;
                                self.balanceOwedByShop = parseFloat(shopBalance.dividedBy(oneEth).toFixed(5));
                                });
                            });
                        });
                    });
                });
            });
        }

        function verifyShopContractAddress() {
            token.name.call(function (err, name) {
                console.log(name == self.shop.name);
            });
        }

        var self = this;

        this.on('before-mount', function() {
            self.balanceOwedByShop = 0;

        });

        this.on('mount', function()
    {
        if(!this.shop.enchanted && (!this.shop.price==0 ) && !this.shop.limited && this.opts.full){
        (function () {
            document.querySelector('#less').onclick = function () {
                if(self.shop.value >= 2) self.shop.value = self.shop.value- 1;
                riot.update();
            };
            document.querySelector('#more').onclick = function () {
                self.shop.value = self.shop.value+ 1;
                riot.update();
            };
        })();
    }
    });

        this.on('update', function() {
            if(this.shop.address != '0x0')
            {
            details = this.mixin('details').getDetail(this.opts.itemid, riot.mixin('languages').language);
            this.shop = {
                itemcss: 'rpgui-icon item-' + this.opts.itemid,
                address: details.address,
                price: details.price,
                name: details.strings[riot.mixin('languages').language].name,
                enchanted: details.enchanted,
                description: details.strings[riot.mixin('languages').language].description,
                limited: details.limited,
                value: self.shop.value
            };

            if (this.shop.enchanted) {
                thisShop = web3.eth.contract(Enchanted).at(this.shop.address);
            } else if (this.shop.price == 0) {
                thisShop = web3.eth.contract(Free).at(this.shop.address);
            } else {
                thisShop = web3.eth.contract(Normal).at(this.shop.address);
            }

            thisShop.object.call(function (err, tokenAddress) {

                token = web3.eth.contract(ERC20).at(tokenAddress);
                getTotalSupply();
                getPrice();

            });

            if (this.shop.enchanted && this.opts.full) {
                balanceOwed();
            }

        }
        });

    this.buyEnchantedObject = function() { enchantedObjectPurchase(itemDB[this.opts.itemid].address); }.bind(this)
    this.buyObjects = function() { objectPurchase(itemDB[this.opts.itemid].address, this.shop.value); }.bind(this)

    this.withdraw = function() { withdrawal(itemDB[this.opts.itemid].address); }.bind(this)
    this.copyAddressToClip = function() { copyAddress();}.bind(this)
    this.copyPriceToClip = function() { copyPrice();}.bind(this)

});
