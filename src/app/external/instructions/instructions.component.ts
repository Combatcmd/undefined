import { Pipe, PipeTransform, Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { InstructionsService } from './instructions.service';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Principal } from '../../shared';
import { ActivatedRoute } from '@angular/router';

@Pipe({ name: 'safe' })
export class SafePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}
  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}

@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.component.html',
})
export class InstructionsComponent implements OnInit {
  tabs: 'VIDEO' | 'REFERENCE' = 'VIDEO';
  information: any = {
    id: undefined,
    instructionGroup: undefined,
    nameRu: undefined,
    nameKk: undefined,
    link: undefined,
    instructionType: undefined,
    instructionFiles: undefined,
    onlyAuthUser: false,
  };
  informationGroups: any[];
  informationGroupCode: any = '';
  informationList: any[];
  item: any;
  search: string;
  account: any;

  modalRef: NgbModalRef;

  totalItems: any;
  queryCount: any;
  itemsPerPage: any;
  page: any;
  predicate: any;
  previousPage: any;
  reverse: any;
  routeData: any;

  constructor(
    private modalService: NgbModal,
    private instructionsService: InstructionsService,
    private principal: Principal,
    private activatedRoute: ActivatedRoute,
    private sanitizer: DomSanitizer
  ) {
    this.itemsPerPage = 10;
    this.routeData = this.activatedRoute.queryParams.subscribe((data) => {
      this.informationGroupCode = data['instrGroup'];
    });
    this.information = {
      id: undefined,
      instructionGroup: this.informationGroupCode,
      nameRu: '',
      nameKk: '',
      link: '',
      instructionType: this.tabs,
      instructionFiles: undefined,
      onlyAuthUser: false,
    };
  }

  ngOnInit() {
    this.principal.identity().then((account) => {
      this.account = account;
    });
    this.load();
  }

  isAdmin() {
    return (
      this.account &&
      this.account.authorities &&
      this.account.authorities.length &&
      (this.account.authorities.indexOf('ROLE_BREAKING_NEWS_EDITOR') > -1 ||
        this.account.authorities.indexOf('ROLE_ADMIN') > -1)
    );
  }

  load() {
    this.instructionsService
      .getNameAndCount(this.isAuthenticated(), this.tabs)
      .subscribe((res) => {
        this.informationGroups = res;
      });
    const filterArray = [
      { name: 'instrGroup', value: this.informationGroupCode },
      { name: 'instrType', value: this.tabs },
      { name: 'onlyAuthUser', value: this.isAuthenticated() },
    ];
    const req = {
      page: 0,
      size: 20,
    };
    if (this.search && this.search.trim()) {
      filterArray.push({ name: 'query', value: this.search.trim() });
    }
    this.instructionsService.get(filterArray, req).subscribe(
      (res) => {
        this.totalItems = res.headers.get('X-Total-Count');
        this.queryCount = this.totalItems;
        this.informationList = res.body;
      },
      (err) => console.log(err)
    );
  }

  isAuthenticated() {
    return this.principal.isAuthenticated();
  }

  openModal(content, id?, event?: Event) {
    if (id) {
      this.instructionsService.findById(id).subscribe((res) => {
        this.information = res;
        if (res && res.id) {
          this.modalRef = this.modalService.open(content, {
            backdrop: 'static',
            windowClass: 'crud-dialog',
          });
        }
      });
      event.stopPropagation();
    } else {
      this.modalRef = this.modalService.open(content, {
        backdrop: 'static',
        windowClass: 'crud-dialog',
      });
    }
  }

  delete(id, event?: Event) {
    this.instructionsService.delete(id).subscribe((res) => this.load());
    event.stopPropagation();
  }

  safeUrl(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  openContentModal(content, item) {
    this.item = item;
    this.modalRef = this.modalService.open(content, {
      backdrop: 'static',
      windowClass: 'modal__instructions',
    });
  }

  createUpdate() {
    this.instructionsService.update(this.information).subscribe(
      (res) => this.updateAll(),
      (err) => console.log(err)
    );
  }

  private updateAll() {
    this.load();
    this.closeModal();
  }

  closeModal() {
    this.modalRef.close();
  }
}
