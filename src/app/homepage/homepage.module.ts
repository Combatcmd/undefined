import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { HomepageRoute } from "./homepage.route";
import { HomepageComponent } from "./homepage.component";

@NgModule({
  imports: [RouterModule.forChild([HomepageRoute])],
  declarations: [HomepageComponent],
  exports: [HomepageComponent],
  bootstrap: [HomepageComponent],
  providers: [],
})
export class HomepageModule {}
