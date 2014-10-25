Ext.define('pixieweb.lib.SummaryGrid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.summary-grid',
    width: 200,
    height: 200,
    title: 'Summary',
    columns: [
        {
            text: 'Book',
            flex: 2,
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
            flex: 2,
            draggable: false,
            menuDisabled: true,
            sortable: false,
            resizable: true,
            dataIndex: 'text'
        }
    ],

    initComponent: function () {
        this.store = Ext.getStore('Content');
        this.callParent(arguments);
    }
});