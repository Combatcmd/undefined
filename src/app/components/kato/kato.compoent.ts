import { Component } from '@angular/core'

@Component({
  selector: 'app-kato',
  templateUrl: './kato.component.html',
})
export class KatoComponent {
  expanded: boolean = false
  constructor() {}

  toggle() {
    this.expanded = !this.expanded
  }
}
