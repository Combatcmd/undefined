import { BaseEntity } from '../../shared';
import {
  CompanyInfo,
  CompanyParent,
  CompanyBankRequisite,
  CompanyDirector,
  CompanyFounder,
  CompanyFile,
  CompanyAttribute,
} from '../models';
import { CompanyRegRequest } from '../company-reg-request/company-reg-request.model';

export class Company implements BaseEntity {
  constructor(
    public id?: number,
    public identifier?: string,
    public iin?: string,
    public bin?: string,
    public country?: string,
    public nameRu?: string,
    public nameEn?: string,
    public nameKk?: string,
    public registered?: boolean,
    public checked?: boolean,
    public flagBranch?: boolean,
    public companyAttribute?: CompanyAttribute,
    public companyInfo?: CompanyInfo,
    public companyRegRequest?: CompanyRegRequest,
    public companyParent?: CompanyParent,
    public companyBankRequisites?: CompanyBankRequisite[],
    public companyDirector?: CompanyDirector,
    public companyFounders?: CompanyFounder[],
    public companyFiles?: CompanyFile[],

    // view props
    public vChecked?: boolean,
    public flagResident?: boolean,
    public kopf?: any,
    public legalAddress?: any,
    public phone?: any,
    public postCode?: any,
    public site?: any,
    public companyType?: any
  ) {}
}
