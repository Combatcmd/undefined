import { Component, OnInit } from '@angular/core';
import { SearchService, UtilsService } from '../../shared';
import * as moment from 'moment';

@Component({
  selector: 'app-lots',
  templateUrl: './lots.component.html',
})
export class LotsComponent implements OnInit {
  result: any[] = [];

  constructor(
    public searchService: SearchService,
    public utils: UtilsService
  ) {}

  ngOnInit(): void {
    this.searchService
      .getLotList(this.getData(), {
        size: 6,
        page: 0,
      })
      .subscribe((response) => {
        this.result = response.body;
      });
  }

  getData() {
    const data = {
      tenderSubjectTypes: [],
    };
    data['lotStatuses'] = ['PUBLISHED'];
    return data;
  }
}
