package org.pixielib.content;

import org.pixielib.util.DoubleHash64;

public class Index {

    public static final int MAGIC_NO = 0xc001d00d;  // file magic number

    public static long hash(String term, long size) {
        return (DoubleHash64.hash(term) & 0x7FFFFFFFFFFFFFFFL) % size;
    }
}
