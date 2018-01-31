riot.tag2('inventory-manager', '<div class="inventory"> <div if="{this.opts.address == \'undefined\'}"> ACCOUNT NOT DETECTED. PLEASE INSTALL <a href="http://metamask.io" target="_blank"><button class="pure-button button-success">Metamask</button></a> AND TRY AGAIN </div> <div if="{this.opts.address != \'undefined\'}"> <div>INVENTORY OF</div> <div>{this.opts.address}</div> <div class="inventory-content"> <virtual each="{item in itemAddresses}"> <inventory-item itemid="{item[0]}" address="{item[1]}" account="{this.opts.address}"></inventory-item> </virtual> </div> <div class="earned">Share inventory:</div> <button class="pure-button button-success" onclick="{copyUrl}">COPY URL</button> </div> </div>', 'inventory-manager .inventory,[data-is="inventory-manager"] .inventory{ width: 100%; text-align: center; color: black; padding:25px; background: #f5b784; } inventory-manager .inventory > div,[data-is="inventory-manager"] .inventory > div{ margin-bottom: 10px; } inventory-manager .earned,[data-is="inventory-manager"] .earned{ margin-top: 25px; } inventory-manager .pure-button,[data-is="inventory-manager"] .pure-button{ margin-top:25px; } inventory-manager .inventory-content,[data-is="inventory-manager"] .inventory-content{ display: inline-flex; }', '', function(opts) {

        function copyUrlToClip()
        {
            document.oncopy = function(event) {
                event.clipboardData.setData("text/plain", window.location.href);
                event.preventDefault();
            };
            document.execCommand("Copy");
            document.oncopy = undefined;
        }
        this.itemAddresses = [];
        this.on('mount', function () {
            for (var index in itemDB) {
                if (itemDB[index].address != "0x0")
                    this.itemAddresses.push([Number(index), itemDB[index].address]);
            }
        });

    this.copyUrl = function() {copyUrlToClip();}.bind(this)

});
