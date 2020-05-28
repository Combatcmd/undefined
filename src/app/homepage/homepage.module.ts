import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { FormsModule } from '@angular/forms'

import { HomepageRoute } from './homepage.route'
import { HomepageComponent } from './homepage.component'

import { LotsComponent } from './lots/lots.component'

@NgModule({
  imports: [RouterModule.forChild([HomepageRoute]), FormsModule, CommonModule],
  declarations: [HomepageComponent, LotsComponent],
  exports: [HomepageComponent, LotsComponent],
  bootstrap: [HomepageComponent],
  providers: [],
})
export class HomepageModule {}
