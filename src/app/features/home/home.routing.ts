import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { ConverterComponent } from "./pages/converter/converter.component";
import { HomeComponent } from "./pages/home/home.component";

const childRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'converter/:propertyIndex',
    component: ConverterComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(childRoutes),
  ],
  exports: [
    RouterModule,
  ],
})
export class HomeRoutingModule {}
