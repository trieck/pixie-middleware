Ext.define('pixieweb.lib.Viewport', {
    extend: 'Ext.Viewport',
    alias: 'pixielib-viewport',
    title: 'Pixie Search Engine',
    layout: 'border',
    defaults: {
        split: true
    },

    requires: ['pixieweb.lib.SummaryGrid'],

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
                        var me = this;
                        me.fireEvent("clearClick", me, e);
                    },
                    onTrigger2Click: function (e) {
                        var me = this;
                        me.fireEvent("searchClick", me, e);
                    }
                }
            ]
        },
        {
            region: 'east',
            title: 'Details',
            collapsible: true,
            split: true,
            width: 150
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
