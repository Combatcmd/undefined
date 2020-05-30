import { BaseEntity } from '../../shared';
import { RegDocument } from './reg-document.model';
import { Address } from './address.model';

export class CompanyInfo implements BaseEntity {
  constructor(
    public id?: number,
    public fullNameRu?: string,
    public fullNameKk?: string,
    public fullNameEn?: string,
    public postcode?: string,
    public fullAddressRu?: string,
    public fullAddressKk?: string,
    public fullAddressEn?: string,
    public kato?: string,
    public city?: string,
    public street?: string,
    public building?: string,
    public flat?: string,
    public phone?: string,
    public fax?: string,
    public email?: string,
    public site?: string,
    public regDocument?: RegDocument,
    public legalAddress?: Address,
    public actualAddress?: Address
  ) {}
}
