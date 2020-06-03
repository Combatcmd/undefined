import { NgModule } from '@angular/core'

import {
  FontAwesomeModule,
  FaIconLibrary,
} from '@fortawesome/angular-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { SharedModule } from '../../shared'

import { AutocompleteComponent } from './autocomplete.compoent'
@NgModule({
  imports: [SharedModule, FontAwesomeModule],
  declarations: [AutocompleteComponent],
  providers: [],
  entryComponents: [],
  exports: [AutocompleteComponent],
})
export class AutocompleteModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(faSearch)
  }
}
