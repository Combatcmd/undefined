import { BaseEntity } from '../../shared';
import { CompanyRegRequestStatusHistory } from '../models';
import { Company } from '../company/company.model';

export class CompanyRegRequest implements BaseEntity {
  constructor(
    public id?: number,
    public requestDateTime?: any,
    public company?: Company,
    public statusHistory?: CompanyRegRequestStatusHistory
  ) {}
}
