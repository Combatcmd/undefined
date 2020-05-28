import { BaseEntity } from "../../shared";

export class CompanyFounder implements BaseEntity {
  constructor(
    public id?: number,
    public founderType?: string,
    public iin?: string,
    public bin?: string,
    public fullName?: string,
    public nameRu?: string,
    public nameKk?: string,
    public nameEn?: string,
    public company?: BaseEntity,
    public notResident?: boolean,
    public share?: number,
    public byLicense?: boolean
  ) {}
}
