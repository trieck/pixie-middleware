package org.pixielib.content;

import java.io.File;
import java.io.IOException;
import java.io.RandomAccessFile;
import java.util.Set;
import java.util.TreeSet;

/* Top-level fields for indexing
 */
public class IndexFields {

    private Set<String> fields;

    public IndexFields(String db) throws IOException {
        fields = new TreeSet<>();

        Repository repos = Repository.getInstance();

        File index = repos.getIndexPath(db);
        try (RandomAccessFile file = new RandomAccessFile(index, "r")) {
            int magicno = file.readInt();
            if (magicno != Index.MAGIC_NO) {
                throw new IOException("file not in index format.");
            }

            int nfields = file.readInt();   // number of fields
            while (nfields-- > 0) {
                fields.add(file.readUTF()); // index field
            }
        }
    }

    public boolean isTopLevel(String field) {
        return fields.contains(field);
    }
}
