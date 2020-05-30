import { BaseEntity } from '../../shared';
import { Entry } from './entry.model';

export class CompanyAttribute implements BaseEntity {
  constructor(
    public id?: number,
    public flagCustomer?: boolean,
    public flagSupplier?: boolean,
    public flagObserver?: boolean,
    public flagAuthorizedBody?: boolean,
    public flagSecondTierBank?: boolean,
    public flagAuditorOrganization?: boolean,
    public flagNpp?: boolean,
    public flagSk?: boolean,
    public flagPk?: boolean,
    public flagFond?: boolean,
    public flagCk?: boolean,
    public flagOtherOrganization?: boolean,
    public kopf?: Entry,
    public flagResident?: boolean,
    public flagSmp?: boolean,
    public flagSsp?: boolean,
    public flagSubsoilUse?: boolean,
    public flagDisabilityOrganization?: boolean,
    public flagDomesticSupplier?: boolean,
    public flagDomesticCommodityProducer?: boolean
  ) {
    this.flagCustomer = false;
    this.flagSupplier = false;
    this.flagObserver = false;
    this.flagAuthorizedBody = false;
    this.flagSecondTierBank = false;
    this.flagAuditorOrganization = false;
    this.flagNpp = false;
    this.flagSk = false;
    this.flagOtherOrganization = false;
    this.flagResident = false;
    this.flagSmp = false;
    this.flagSsp = false;
    this.flagDisabilityOrganization = false;
    this.flagDomesticSupplier = false;
    this.flagDomesticCommodityProducer = false;
    this.flagPk = false;
    this.flagFond = false;
    this.flagCk = false;
  }
}
