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

    onClearClick: function (trigger, event) {
        trigger.setValue(Ext.emptyString);
    },

    onSearchClick: function (trigger, event) {
        var me = this,
            query = Ext.String.format("text[{0}]", trigger.getValue()),
            options = { params: { query: query } },
            store = Ext.getStore('Content');

        store.load(options);
    }
});
