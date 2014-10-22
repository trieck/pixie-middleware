Ext.define('pixieweb.lib.Viewport', {
	extend: 'Ext.Viewport',
	alias: 'pixielib-viewport',
	title: 'Pixie Search Engine',
	layout: 'border',
	renderTo: Ext.getBody(),
	defaults: {
		split: true
	},

	items: [{
		region: 'north',
		html: '<h1 class="x-panel-header">Pixie Search Engine</h1>',
		border: false
	}, {
		region: 'west',
		collapsible: true,
		title: 'Search',
		width: 200
	}, {
		region: 'south',
		title: 'Log',
		collapsible: true,
		split: true,
		height: 100,
		minHeight: 100
	}, {
		region: 'east',
		title: 'Properties',
		collapsible: true,
		split: true,
		width: 150
	}, {
		region: 'center',
		xtype: 'tabpanel',
		activeTab: 0,
		items: {
			title: 'Results'
		}
	}],

	initComponent: function () {
		Ext.QuickTips.init();
		this.callParent(arguments);
	}
});
