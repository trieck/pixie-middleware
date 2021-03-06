package org.pixielib.util;

import java.util.ResourceBundle;

public class Config {
    private ResourceBundle bundle;

    public Config(String name) {
        bundle = ResourceBundle.getBundle(name);
    }

    public String getProperty(String k) {

        if (bundle == null)
            return "";

        String value = "";

        try {
            value = bundle.getString(k);
        } catch (Exception ignored) {
        }

        return value.trim();
    }
}
