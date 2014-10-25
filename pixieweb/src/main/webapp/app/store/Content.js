Ext.define('pixieweb.store.Content', {
    extend: 'Ext.data.Store',
    model: 'pixieweb.model.Content',
    requires: ['pixieweb.lib.CustomXmlReader'],
    pageSize: 25,
    proxy: {
        type: 'ajax',
        url: 'ContentServlet',
        limitParam: 'count',
        pageParam: undefined,
        extraParams: {
            'function': 'search',
            db: 'niv'
        },

        reader: {
            type: 'custom-xmlreader',
            record: 'record',
            root: 'results',
            idProperty: '@docid',
            totalProperty: '@count',
            successProperty: undefined
        }
    },
    listeners: {
        beforeload: function (store, operation) {
            var proxy = store.getProxy(),
                query = Ext.String.format("text[{0}]", Ext.getCmp('searchText').getValue()),
                start = (operation.start || 0) + 1;

            proxy.setExtraParam('query', query);
            proxy.setExtraParam('start', start);
        }
    }
});