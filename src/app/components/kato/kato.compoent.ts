import {
  Component,
  OnInit,
  Output,
  EventEmitter,
} from '@angular/core'
import { Subscription } from 'rxjs'
import { KatoService } from './kato.service'

@Component({
  selector: 'app-kato',
  templateUrl: './kato.component.html',
})
export class KatoComponent implements OnInit {
  subscription: Subscription
  expanded: boolean = false
  result: Array<any>
  kato: string

  @Output() onSelectKato = new EventEmitter<any>()

  constructor(private katoService: KatoService) {}

  ngOnInit(): void {
    this.getKatoes()
  }

  getKatoes(event?) {
    this.subscription = this.katoService
      .get()
      .subscribe(
        (response) =>
          (this.result = response.filter((e) =>
            e.ru
              .toLowerCase()
              .includes(event ? event.target.value.toLowerCase() : '')
          ))
      )
  }

  setKato(value) {
    this.kato = value.ru
    this.onSelectKato.emit(value.code)
    this.toggleExpand()
    this.subscription.unsubscribe()
  }

  onKeyInputUp(event) {
    this.getKatoes(event)
  }

  toggleExpand() {
    this.expanded = !this.expanded
  }
}
