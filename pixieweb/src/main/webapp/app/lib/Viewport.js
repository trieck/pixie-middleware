Ext.define('pixieweb.lib.Viewport', {
    extend: 'Ext.Viewport',
    alias: 'pixielib-viewport',
    title: 'Pixie Search Engine',
    layout: 'border',
    defaults: {
        split: true
    },

    requires: ['pixieweb.lib.Summary'],

    items: [
        {
            region: 'west',
            collapsible: true,
            title: 'Bible Search Engine',
            width: 200,
            border: true,
            tbar: [
                {
                    padding: '5',
                    id: 'searchText',
                    name: 'search',
                    width: 180,
                    emptyText: 'Enter search query...',
                    xtype: 'trigger',
                    trigger1Cls: 'x-form-clear-trigger',
                    trigger2Cls: 'x-form-search-trigger',
                    onTrigger1Click: function (e) {
                        this.fireEvent("clearClick", this, e);
                    },
                    onTrigger2Click: function (e) {
                        this.fireEvent("searchClick", this, e);
                    }
                }
            ]
        },
        {
            region: 'east',
            title: 'Details',
            collapsible: true,
            split: true,
            width: 300
        }, {
            region: 'center',
            xtype: 'summary-grid'
        }
    ],

    initComponent: function () {
        Ext.QuickTips.init();
        this.callParent(arguments);
    }
});
