Ext.define('pixieweb.lib.Summary', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.summary-grid',
    title: 'Summary',
    columns: [
        {
            text: 'Book',
            flex: 1,
            draggable: false,
            menuDisabled: true,
            sortable: false,
            resizable: true,
            dataIndex: 'book'
        }, {
            text: 'Chapter',
            flex: 1,
            draggable: false,
            menuDisabled: true,
            sortable: false,
            resizable: true,
            dataIndex: 'chapter'
        },
        {
            text: 'Verse',
            flex: 1,
            draggable: false,
            menuDisabled: true,
            sortable: false,
            resizable: true,
            dataIndex: 'verse'
        },
        {
            text: 'Text',
            flex: 3,
            draggable: false,
            menuDisabled: true,
            sortable: false,
            resizable: true,
            dataIndex: 'text'
        }
    ],

    viewConfig: {
        trackOver: true,
        stripeRows: false
    },

    initComponent: function () {
        this.store = Ext.getStore('Content');

        this.dockedItems = this.dockedItems || [];
        this.dockedItems.push({
            store: this.store,
            xtype: 'pagingtoolbar',
            dock: 'bottom',
            displayInfo: true
        });

        this.callParent(arguments);
    }
});

