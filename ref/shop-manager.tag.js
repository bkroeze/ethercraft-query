riot.tag2('shop-manager', '<div id="shop-grid" class="pure-g"> <virtual each="{item, index in validShops}"> <a href="#/shop/{item}"> <shop-item itemid="{item}"></shop-item> </a> </virtual> </div>', 'shop-manager #shop-grid,[data-is="shop-manager"] #shop-grid{ justify-content: center; align-items: center; }', '', function(opts) {
        this.on('before-mount', function () {
            this.validShops = [];
            var validCondition = null;

            for (var x in itemDB) {
                if(itemDB[x].address != "0x0"){
                    if(this.opts.set != undefined)
                    {
                        if (itemDB[x].set === this.opts.set)
                            this.validShops.push(x);
                    }
                    else
                     if(this.opts.series != undefined)
                    {
                        if (itemDB[x].series === this.opts.series)
                            this.validShops.push(x);
                    }

                    else{
                            this.validShops.push(x);
                    }
                }
            }
        });

        riot.mount('shop-item');
});
