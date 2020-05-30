import { BaseEntity } from '../../shared';
import { Company } from '../company/company.model';

export class CompanyParent implements BaseEntity {
  constructor(
    public id?: number,
    public beginDate?: any,
    public endDate?: any,
    public company?: Company,
    public parentCompany?: Company
  ) {}
}
