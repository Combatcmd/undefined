import { Component, OnInit } from '@angular/core'
import { SearchService } from '../shared'

@Component({
  selector: 'homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {
  keyword: string
  result: any[]

  constructor(public searchService: SearchService) {}

  ngOnInit(): void {}
}
