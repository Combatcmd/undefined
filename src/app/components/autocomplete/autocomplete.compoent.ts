import {
  Component,
  Output,
  EventEmitter,
} from '@angular/core'
import { Subscription } from 'rxjs'
import { SearchService } from '../../shared'

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
})
export class AutocompleteComponent {
  subscription: Subscription
  expanded: boolean = false
  result: Array<any>
  company: string

  @Output() onSelectCompany = new EventEmitter<any>()

  constructor(private searchService: SearchService) {}

  doSearch(value) {
    this.subscription = this.searchService
      .searchCompanies(value)
      .subscribe((response) => {
        this.result = response.body.filter((e, i, a) => {
          return a.map((e) => e.nameRu).indexOf(e.nameRu) === i
        })
      })
  }

  setCompany(value) {
    this.company = value
    this.onSelectCompany.emit(value)
    this.expanded = false
    this.subscription.unsubscribe()
  }

  onKeyInputUp(event) {
    if (event.target.value.length > 2) {
      this.expanded = true
      this.doSearch(event.target.value)
    }
  }
}
