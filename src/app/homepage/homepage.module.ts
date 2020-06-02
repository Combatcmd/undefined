import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared';

import { HomepageRoute } from './homepage.route';
import { HomepageComponent } from './homepage.component';

import { LotsComponent } from './lots/lots.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([HomepageRoute]),
  ],
  declarations: [HomepageComponent, LotsComponent],
  exports: [HomepageComponent, LotsComponent],
  bootstrap: [HomepageComponent],
  providers: [],
})
export class HomepageModule {}
