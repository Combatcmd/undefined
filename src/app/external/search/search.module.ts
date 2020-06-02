import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../../shared';
import { ComponentsModule } from '../../components';


import { SearchRoute } from './search.route';
import { SearchComponent } from './search.component';

@NgModule({
  imports: [SharedModule, ComponentsModule, RouterModule.forChild([SearchRoute])],
  declarations: [SearchComponent],
  entryComponents: [SearchComponent],
  providers: [],
})
export class SearchModule {}
