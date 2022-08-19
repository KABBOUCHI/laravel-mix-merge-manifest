// Merge Manifest Api
interface Api {
    /** Merges new manifests into the existing one */
    mergeManifest(fileName: string|null): Api;
}
