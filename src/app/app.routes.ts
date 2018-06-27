import {HomeComponent} from './home/home.component';
import {Routes, RouterModule} from "@angular/router";
import {YourComponent} from "./your/your.component";
import {HistoryComponent} from "./history/history.component";

const APP_ROUTES: Routes = [
  {path: 'home', component: HomeComponent, pathMatch: 'full'},
  {path: 'yours', component: YourComponent},
  {path: 'history', component: HistoryComponent}
];

export const routing = RouterModule.forRoot(APP_ROUTES);
