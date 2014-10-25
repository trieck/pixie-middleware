Ext.define('pixieweb.store.Content', {
    extend: 'Ext.data.Store',
    model: 'pixieweb.model.Content',
    pageSize: 25,
    proxy: {
        type: 'ajax',
        url: 'ContentServlet',
        limitParam: 'count',
        pageParam: undefined,
        extraParams: {
            'function': 'search',
            db: 'niv',
            start: 1
        },

        reader: {
            type: 'xml',
            record: 'record',
            root: 'results',
            idProperty: '@docid',
            totalProperty: '@count',
            successProperty: undefined
        }
    }
});