import { Component, OnInit, OnDestroy } from "@angular/core";
import { FaqService } from "./faq.service";
import { NgbModal, NgbModalRef } from "@ng-bootstrap/ng-bootstrap";
import { Principal, UtilsService } from "../../shared";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "faq",
  templateUrl: "./faq.component.html",
})
export class FaqComponent implements OnInit, OnDestroy {
  faqGroups: any[];
  faqGroupsArray: any[];
  faqGroupCode: any = "";
  faqList: any[];
  faq: any;
  modalRef: NgbModalRef;
  account: any;

  totalItems: any;
  queryCount: any;
  itemsPerPage: any;
  page: any;
  predicate: any;
  previousPage: any;
  reverse: any;
  routeData: any;
  search: string;
  sortOrder: string[] = [
    "REGISTRATION",
    "CONTRACTS",
    "PLAN",
    "LOTS",
    "ADVERTS",
    "LIST_PARTICIPANTS",
  ];

  constructor(
    public modalService: NgbModal,
    private principal: Principal,
    private activatedRoute: ActivatedRoute,
    public utils: UtilsService,
    public faqService: FaqService
  ) {
    this.itemsPerPage = 10;
    this.routeData = this.activatedRoute.data.subscribe((data) => {
      this.page = data["pagingParams"].page;
      this.previousPage = data["pagingParams"].page;
      this.reverse = data["pagingParams"].ascending;
      this.predicate = data["pagingParams"].predicate;
      this.search = "";
    });
  }

  ngOnInit(): void {
    this.principal.identity().then((account) => {
      this.account = account;
    });
    this.faqService.getNameAndCount().subscribe((res) => {
      this.faqGroups = res.sort(
        (a, b) => this.sortOrder.indexOf(a.cnt) - this.sortOrder.indexOf(b.cnt)
      );
      console.log(this.faqGroups)
    });
    this.load();
  }

  ngOnDestroy(): void {}

  totalFaqs() {
    if (this.faqGroups) {
      return this.faqGroups.reduce((a, b) => a + parseInt(b.code), 0);
    }
  }

  load() {
    let filterArray = [{ name: "faqGroupCode", value: this.faqGroupCode }];
    let req = {
      page: this.page - 1,
      size: this.itemsPerPage,
      sort: this.sort(),
    };
    if (this.search && this.search.trim()) {
      filterArray.push({ name: "query", value: this.search.trim() });
    }
    this.faqService.get(filterArray, req).subscribe(
      (res) => {
        this.totalItems = res.headers.get("X-Total-Count");
        this.queryCount = this.totalItems;
        this.faqList = res.json;
      },
      (err) => console.log(err)
    );
  }
  loadPage(page: number) {
    if (page !== this.previousPage) {
      this.previousPage = page;
      this.load();
    }
  }
  sort() {
    const result = [this.predicate + "," + (this.reverse ? "asc" : "desc")];
    if (this.predicate !== "id") {
      result.push("id");
    }
    return result;
  }
  openModal(content, id?) {
    this.faq = {
      id: id,
      faqGroupCode: undefined,
      questionRu: "",
      questionKk: "",
      answerRu: "",
      answerKk: "",
    };
    if (id) {
      this.faqService.findById(id).subscribe((res) => {
        this.faq = res;
        if (res && res.id) {
          this.modalRef = this.modalService.open(content, {
            size: "lg",
            backdrop: "static",
            windowClass: "faq-modal",
          });
        }
      });
    } else {
      this.modalRef = this.modalService.open(content, {
        size: "lg",
        backdrop: "static",
        windowClass: "faq-modal",
      });
    }
  }

  delete(id) {
    this.faqService.delete(id).subscribe((res) => this.load());
  }

  closeModal() {
    this.modalRef.close();
  }
  isAdmin() {
    return (
      this.account &&
      this.account.authorities &&
      this.account.authorities.length &&
      (this.account.authorities.indexOf("ROLE_BREAKING_NEWS_EDITOR") > -1 ||
        this.account.authorities.indexOf("ROLE_ADMIN") > -1)
    );
  }
  private updateAll() {
    this.load();
    this.closeModal();
  }
  createUpdate() {
    if (!this.faq.id) {
      this.faqService.create(this.faq).subscribe(
        (res) => this.updateAll(),
        (err) => console.log(err)
      );
    } else {
      this.faqService.update(this.faq).subscribe(
        (res) => this.updateAll(),
        (err) => console.log(err)
      );
    }
  }

  selectItem(elem) {
    elem.selected = !elem.selected;
  }
  trackId(index: number, item: any) {
    return item.id || index;
  }
  loadMore() {
    this.itemsPerPage += 10;
    this.load();
  }
}
