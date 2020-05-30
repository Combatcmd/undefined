import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { TranslateService } from '@ngx-translate/core';
import { SearchService } from '../shared';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html'
})
export class HomepageComponent implements OnInit {
  keyword: string;
  result: any[];
  modalRef: NgbModalRef;

  constructor(
    public searchService: SearchService,
    private modal: NgbModal,
    public translate: TranslateService
  ) {
    translate.addLangs(['en', 'ru']);
    translate.setDefaultLang('en');

    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|ru/) ? browserLang : 'en');
  }

  ngOnInit(): void {}

  openModal(content) {
    this.modalRef = this.modal.open(content, {
      windowClass: 'modal__instructions',
      size: 'lg',
    });
  }
}
