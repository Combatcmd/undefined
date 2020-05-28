import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ExternalTemplateComponent } from "./layouts/external/template/template.component";

import { HomepageRoute } from "./homepage";
import { FaqRoute, InstructionsRoute } from "./external";

const routes: Routes = [
  { path: "", redirectTo: "/ext", pathMatch: "full" },
  {
    path: "ext",
    component: ExternalTemplateComponent,
    children: [
      { path: "", children: [HomepageRoute] },
      { path: "", children: [FaqRoute] },
      { path: "", children: [InstructionsRoute] },

      { path: '**', redirectTo: '/ext', pathMatch: 'full' }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
