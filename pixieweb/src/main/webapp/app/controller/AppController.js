Ext.define('pixieweb.controller.AppController', {
    extend: 'Ext.app.Controller',
    stores: ['Content'],

    init: function () {
        this.control({
            "#searchText": {
                clearClick: this.onClearClick,
                searchClick: this.onSearchClick
            }
        });
    },

    onClearClick: function (trigger) {
        trigger.setValue(Ext.emptyString);
    },

    onSearchClick: function (trigger, event) {
        var store = Ext.getStore('Content');
        store.load();
    }
});
