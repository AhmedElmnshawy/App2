import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { NoFoundComponent } from './no-found/no-found.component';

export const routes: Routes = [
    {path:'',redirectTo:'home',pathMatch:'full'},
    {path:'home',component:HomeComponent,title:'home'},
    {path:'about',component:AboutComponent,title:'About'},
    {path:'contact',component:ContactComponent,title:'Contact'},
    {path:'portfolio',component:PortfolioComponent,title:'Portfolio'},
    {path:'**',component:NoFoundComponent,title:'Not-Found'}
];
