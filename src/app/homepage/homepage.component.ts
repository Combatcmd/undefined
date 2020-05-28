import { Component, OnInit } from "@angular/core";
import { NgbModal, NgbModalRef } from "@ng-bootstrap/ng-bootstrap";
import { SearchService } from "../shared";

@Component({
  selector: "homepage",
  templateUrl: "./homepage.component.html",
  styleUrls: ["./homepage.component.scss"],
})
export class HomepageComponent implements OnInit {
  keyword: string;
  result: any[];
  modalRef: NgbModalRef;

  constructor(public searchService: SearchService, private modal: NgbModal) {}

  ngOnInit(): void {}

  openModal(content) {
    this.modalRef = this.modal.open(content, {
      windowClass: "modal__instructions",
      size: "lg",
    });
  }
}
