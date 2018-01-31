riot.tag2('ethercraft-client', '<div id="loading"> <div class="spinner"></div></br> LOADING PLEASE WAIT...</div> <div class="rpgui-content" style="overflow-y: scroll"> <a href="#" id="logo"> <img id="logo-img" src="./inventory-shop/img/ETHERCRAFT.png"> </a> <div class="language-wrapper"> <div id="flag-us" class="flag"></div> <div id="flag-es" class="flag"></div> <div id="flag-jp" class="flag"></div> </div> <div class="menu"> </a> <a href="#"> <button class="button-success pure-button">SHOP</button> </a> <a id="inventory-link"> <button class="button-secondary pure-button">INVENTORY</button> </a> <a> <button class="pure-button pure-button-disabled">AUCTION</button> </a> <a> <button class="pure-button pure-button-disabled">CRAFTING</button> </a> <a href="https://medium.com/@ethercraft" target="_blank"> <button class="button-warning pure-button">NEWS & UPDATES</button> </a> </div> <div id="client-content"> </div> </div>', 'ethercraft-client #logo,[data-is="ethercraft-client"] #logo{ display: flex; justify-content: center; align-items: center; } ethercraft-client #logo-img,[data-is="ethercraft-client"] #logo-img{ margin-top: 25px; margin-bottom: 15px; width: 75%; object-fit: contain; } ethercraft-client .label,[data-is="ethercraft-client"] .label{ color: black !important; text-shadow: none; font-size: 1.25em; position: absolute; bottom: -1px; right: 2px; } ethercraft-client #shop-grid,[data-is="ethercraft-client"] #shop-grid{ justify-content: center; align-items: center; } ethercraft-client #equipment,[data-is="ethercraft-client"] #equipment{ height: 100%; } ethercraft-client #inventory .rpgui-icon,[data-is="ethercraft-client"] #inventory .rpgui-icon{ border: transparent 1px solid; } ethercraft-client .item-eth,[data-is="ethercraft-client"] .item-eth{ width: 16px; height: 16px; background-image: url(../img/ETH.png); margin-left: 5px; margin-right: 5px; } ethercraft-client #inventory .item-eth,[data-is="ethercraft-client"] #inventory .item-eth{ width: 32px; height: 32px; } ethercraft-client .eth-label,[data-is="ethercraft-client"] .eth-label{ position: absolute; margin-top: 5px; margin-left: 15px; } ethercraft-client .rpgui-icon,[data-is="ethercraft-client"] .rpgui-icon{ line-height: 130px; text-indent: 46px; color: black !important; font-size: 1.33em; } ethercraft-client .menu,[data-is="ethercraft-client"] .menu{ display: flex; align-items: center; justify-content: center; margin-bottom: 25px; width:100%; } ethercraft-client .menu > a,[data-is="ethercraft-client"] .menu > a{ margin: 5px; } ethercraft-client a.nostyle:link,[data-is="ethercraft-client"] a.nostyle:link{ text-decoration: inherit; color: inherit; cursor: auto; } ethercraft-client a.nostyle:visited,[data-is="ethercraft-client"] a.nostyle:visited{ text-decoration: inherit; color: inherit; cursor: auto; } ethercraft-client .rpgui-content a,[data-is="ethercraft-client"] .rpgui-content a{ text-shadow: none; font-size: 1em; text-decoration: none; color: black; } ethercraft-client .language-wrapper,[data-is="ethercraft-client"] .language-wrapper{ visibility: hidden; } ethercraft-client .flag,[data-is="ethercraft-client"] .flag{ margin-left:15px; margin-right:15px; width:32px; height:0px; background-repeat: no-repeat; background-size:contain; } ethercraft-client #flag-us,[data-is="ethercraft-client"] #flag-us{ background-image: url(\'img/flags/us.png\'); } ethercraft-client #flag-es,[data-is="ethercraft-client"] #flag-es{ background-image: url(\'img/flags/es.png\'); } ethercraft-client #flag-jp,[data-is="ethercraft-client"] #flag-jp{ background-image: url(\'img/flags/jp.png\'); } ethercraft-client #loading,[data-is="ethercraft-client"] #loading{ background-color: rgba(0, 0, 0, 0.7); position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index:100; color: white; display: -webkit-box; display: -moz-box; display: -ms-flexbox; display: -webkit-flex; display: flex; -webkit-box-align: center; -moz-box-align: center; -ms-flex-align: center; -webkit-align-items: center; align-items: center; -webkit-box-pack: center; -moz-box-pack: center; -ms-flex-pack: center; -webkit-justify-content: center; justify-content: center; display:none; } ethercraft-client .spinner,[data-is="ethercraft-client"] .spinner{ background-image: url(\'../img/loading.gif\'); width:66px; height:59px; } ethercraft-client .menu > a > button,[data-is="ethercraft-client"] .menu > a > button{ padding:15px; }', '', function(opts) {
        var accountAddress = "";
        var self = this;
        var refreshIntervalId = null;

        this.on('before-mount', function () {

        });

        this.on('mount', function () {

            riot.mixin('languages').changeLanguage(0);
            (function () {
            document.querySelector('#flag-us').onclick = function () {
                riot.mixin('languages').language = 0;
                riot.update();
            };
            document.querySelector('#flag-es').onclick = function () {
                riot.mixin('languages').language = 1;
                riot.update();
            };
            document.querySelector('#flag-jp').onclick = function () {
                riot.mixin('languages').language = 2;
                riot.update();
            };
        })();
        });

        this.on('start', function() {
            riot.update();
        });

        this.on('update', function()
    {
        document.querySelector('#inventory-link').href = '#/inventory/' + web3.eth.defaultAccount;
    });
});
