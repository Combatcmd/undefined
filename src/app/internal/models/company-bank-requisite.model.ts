import { BaseEntity } from "../../shared";
import { Bank } from "../bank/bank.model";
import { Entry } from "./entry.model";

export class CompanyBankRequisite implements BaseEntity {
  constructor(
    public id?: number,
    public bik?: string,
    public iik?: string,
    public kbe?: string,
    public accountType?: string,
    public beginDate?: any,
    public endDate?: any,
    public address?: BaseEntity,
    public company?: BaseEntity,
    public bank?: Bank,
    public currency?: Entry,
    public flagDefault?: boolean,
    public flagApplication?: boolean,
    public flagContract?: boolean,
    public bankName?: string
  ) {}
}
