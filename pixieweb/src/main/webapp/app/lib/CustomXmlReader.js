Ext.define('pixieweb.lib.CustomXmlReader', {
    extend: 'Ext.data.XmlReader',
    alias: 'reader.custom-xmlreader',

    getNodeValue: function (node) {
        if (node) {
            if (typeof node.normalize === 'function') {
                node.normalize();
            }

            var ss = new XMLSerializer(), output = "";
            Ext.each(node.childNodes, function (child) {
                output = output + ss.serializeToString(child);
            });

            return output;
        }
        return undefined;
    }
});
