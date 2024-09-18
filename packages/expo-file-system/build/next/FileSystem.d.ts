import ExpoFileSystem from './ExpoFileSystem';
import { URI } from './FileSystem.types';
export declare class File extends ExpoFileSystem.FileSystemFile {
    constructor(uri: URI);
    get parentDirectory(): Directory;
    get extension(): string;
    /**
     * File name. Includes the extension.
     */
    get name(): string;
}
export declare class Directory extends ExpoFileSystem.FileSystemDirectory {
    constructor(uri: URI);
    get parentDirectory(): Directory;
    list(): (File | Directory)[];
    /**
     * Directory name.
     */
    get name(): string;
}
//# sourceMappingURL=FileSystem.d.ts.map