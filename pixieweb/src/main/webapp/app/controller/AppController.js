Ext.define('pixieweb.controller.AppController', {
    extend: 'Ext.app.Controller',
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
        var query = Ext.String.format("text[{0}]", trigger.getValue());

        Ext.Ajax.request({
            url: 'ContentServlet',
            method: 'GET',
            params: {
                db: 'niv',
                'function': 'search',
                start: 1,
                count: 25,
                query: query
            },
            success: function (response) {
                var text = response.responseText;
            },

            failure: function (response) {
            }
        });
    }
});
