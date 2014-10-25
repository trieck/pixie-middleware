Ext.define('pixieweb.model.Content', {
    extend: 'Ext.data.Model',
    fields: [ 'book', 'chapter', 'verse', {
        name: 'text', convert: function (value) {
            // highlight
            value = value.replace(/<highlight>/, "<strong>");
            value = value.replace(/<\/highlight>/, "</strong>");
            return value;
        }
    } ]
});
