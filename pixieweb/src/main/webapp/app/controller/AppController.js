Ext.define('pixieweb.controller.AppController', {
    extend: 'Ext.app.Controller',
    init: function () {
        this.control({
            "#searchText": {
                triggerclick: this.onTriggerClick
            }
        });
    },

    onTriggerClick: function (trigger, event) {
        Ext.Msg.alert(trigger.getValue());
    }
});
