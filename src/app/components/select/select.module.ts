import { NgModule } from '@angular/core'

import {
  FontAwesomeModule,
  FaIconLibrary,
} from '@fortawesome/angular-fontawesome'
import { faChevronDown, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { SharedModule } from '../../shared'

import { SelectComponent } from './select.component'

@NgModule({
  imports: [SharedModule, FontAwesomeModule],
  declarations: [SelectComponent],
  providers: [],
  entryComponents: [],
  exports: [SelectComponent],
})
export class SelectModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(faChevronDown, faMapMarkerAlt)
  }
}
