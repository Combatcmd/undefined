import { BaseEntity } from "../../shared";

export class CompanyDirector implements BaseEntity {
  constructor(
    public id?: number,
    public lastName?: string,
    public firstName?: string,
    public middleName?: string,
    public iin?: string,
    public positionRu?: string,
    public positionKk?: string,
    public reasonRu?: string,
    public reasonKk?: string,
    public beginDate?: any,
    public endDate?: any,
    public company?: BaseEntity
  ) {}
}
