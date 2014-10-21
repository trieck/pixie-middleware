package org.pixielib.xml;

import org.w3c.dom.*;
import org.xml.sax.InputSource;
import org.xml.sax.SAXException;

import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.parsers.ParserConfigurationException;
import java.io.IOException;
import java.io.StringReader;

public class XMLUtil {

    private static final DocumentBuilderFactory factory = DocumentBuilderFactory.newInstance();

    public static Document parseXML(String xml)
            throws ParserConfigurationException, IOException, SAXException {
        DocumentBuilder builder;
        synchronized (factory) {
            builder = factory.newDocumentBuilder();
        }
        return builder.parse(new InputSource(new StringReader(xml)));
    }

    public static Document newDocument()
            throws ParserConfigurationException {
        DocumentBuilder builder;
        synchronized (factory) {
            builder = factory.newDocumentBuilder();
        }
        return builder.newDocument();
    }

    /**
     * * Convenience method to transfer a node (and all of its children) from one
     * * DOM XML document to another.
     * *
     * * Note: this method is recursive.
     * *
     * * @param current the current Element to append the transfer to
     * * @param target the target document for the transfer
     * * @param n the Node to transfer
     * * @return Element the current element.
     */
    public static Element transferNode(Element current, Document target, Node n) {
        String name = n.getNodeName();
        String value = n.getNodeValue();
        short type = n.getNodeType();

        if (type == Node.ELEMENT_NODE) {
            // create a new element for this node in the target document
            Element e = target.createElement(name);

            // move all the attributes over to the target document
            NamedNodeMap attrs = n.getAttributes();
            for (int i = 0; i < attrs.getLength(); i++) {
                Node a = attrs.item(i);
                e.setAttribute(a.getNodeName(), a.getNodeValue());
            }

            // get the children for this node
            NodeList children = n.getChildNodes();
            for (int i = 0; i < children.getLength(); i++) {
                // transfer each of the children to the new document
                transferNode(e, target, children.item(i));
            }

            // append the node to the target document element
            current.appendChild(e);
        } else if (type == Node.TEXT_NODE) {
            Text text = target.createTextNode(value);
            current.appendChild(text);
        }

        return current;
    }
}
