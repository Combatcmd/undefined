import { BaseEntity } from "../../shared";

export class CompanyRegRequestStatusHistory implements BaseEntity {
  constructor(
    public id?: number,
    public status?: string,
    public comment?: string,
    public statusDateTime?: any,
    public companyRegRequest?: BaseEntity
  ) {}
}
