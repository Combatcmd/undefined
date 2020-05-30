import { BaseEntity, RequestFile } from '../../shared';

export class CompanyFile extends RequestFile implements BaseEntity {
  constructor(
    public id?: number,
    public documentType?: string,
    public fileUid?: string,
    public fileName?: string,
    public contentType?: string,
    public fileSize?: number,
    public fileDesc?: string,
    public fileHash?: string,
    public fileUserId?: number,
    public attachmentContentType?: string,
    public attachment?: any,
    public company?: BaseEntity,
    public uploadProgress?: number
  ) {
    super('Company', id);
  }
}
