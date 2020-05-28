export class RequestFile {
    constructor(
        public containerClass?: string,
        public containerId?: number,
        public uploadProgress?: number,
        public fileName?: string
    ) {
    }
}
