import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'

import { SearchService } from './services/search.service'
import { UtilsService } from './utils/utils.service'

@NgModule({
  imports: [],
  declarations: [],
  providers: [SearchService, UtilsService],
  entryComponents: [],
  exports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule {}
