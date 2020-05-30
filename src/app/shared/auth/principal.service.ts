import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { AccountService } from './account.service';
import { JhiTrackerService } from '../tracker/tracker.service'; // Barrel doesn't work here. No idea why!
import { AppState } from '../../app.service';
import { Company } from '../../internal/company/company.model';

@Injectable()
export class Principal {
  private userIdentity: any;
  private authenticated = false;
  private companyRegistered = false;
  private hasCompany = false;
  private isCustomer = false;
  private isSupplier = false;
  private isAuditor = false;
  private isPkoControl = false;
  private isNpp = false;
  private isBranch = false;
  private isResident = false;
  private authenticationState = new Subject<any>();
  private company: Company;
  private pkoDocuments: any;

  constructor(
    private account: AccountService,
    private trackerService: JhiTrackerService,
    private appState: AppState
  ) {}

  identity(force?: boolean): Promise<any> {
    if (force === true) {
      this.userIdentity = undefined;
      this.pkoDocuments = undefined;
    }

    // check and see if we have retrieved the userIdentity data from the server.
    // if we have, reuse it by immediately resolving
    if (this.userIdentity) {
      return Promise.resolve(this.userIdentity);
    }

    // retrieve the userIdentity data from the server, update the identity object, and then resolve.
    return this.account
      .get()
      .toPromise()
      .then((account) => {
        if (account) {
          this.userIdentity = account;
          this.authenticated = true;
          this.appState.set('account', account);
          this.appState.setObservable('account', account);
          this.companyRegistered = account.companyRegistered;
          this.hasCompany =
            account.company && account.company.id !== undefined
              ? account.company.id > 0
              : false;
          if (account && account.company && account.company.companyAttribute) {
            this.isCustomer = account.company.companyAttribute.flagCustomer;
            this.isResident = account.company.companyAttribute.flagResident;
            this.isSupplier = account.company.companyAttribute.flagSupplier;
            this.isAuditor =
              account.company.companyAttribute.flagAuditorOrganization;
            this.isPkoControl = account.company.companyAttribute.flagPkoControl;
            this.isNpp = account.company.companyAttribute.flagNpp;
          } else {
            this.isCustomer = false;
            this.isResident = false;
            this.isSupplier = false;
            this.isAuditor = false;
            this.isPkoControl = false;
            this.isNpp = false;
          }
          if (account && account.company) {
            this.isBranch = account.company.flagBranch;
          } else {
            this.isBranch = false;
          }
          // this.trackerService.connect();
        } else {
          this.userIdentity = null;
          this.authenticated = false;
        }
        this.authenticationState.next(this.userIdentity);
        return this.userIdentity;
      })
      .catch((err) => {
        sessionStorage.clear();
        if (
          this.trackerService.stompClient &&
          this.trackerService.stompClient.connected
        ) {
          this.trackerService.disconnect();
        }
        this.userIdentity = null;
        this.authenticated = false;
        this.authenticationState.next(this.userIdentity);
        return null;
      });
  }
}
