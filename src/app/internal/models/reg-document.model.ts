import { BaseEntity } from "../../shared";

export class RegDocument implements BaseEntity {
  constructor(
    public id?: number,
    public docNumber?: string,
    public beginDate?: any,
    public endDate?: any,
    public issuingAuthority?: string,
    public issueDate?: any
  ) {}
}
