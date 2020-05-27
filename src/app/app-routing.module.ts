import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomepageRoute } from "./homepage";
import { ExternalTemplateComponent } from "./layouts/external/template/template.component";

const routes: Routes = [
  { path: "", redirectTo: '/ext', pathMatch: 'full' },
  {
    path: "ext",
    component: ExternalTemplateComponent,
    children: [{ path: "", children: [HomepageRoute] }],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
