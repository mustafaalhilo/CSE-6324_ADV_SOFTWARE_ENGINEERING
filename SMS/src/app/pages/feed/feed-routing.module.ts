import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FeedPage } from './feed.page';

const routes: Routes = [
  {
    path: '',
    component: FeedPage
  },
  {
    path: 'allservices',
    loadChildren: () => import('../../pages/allservices/allservices.module').then( m => m.AllservicesPageModule)
  },
  {
    path: 'service-lists',
    loadChildren: () => import('../../pages/service-lists/service-lists.module').then( m => m.ServiceListsPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeedPageRoutingModule {}
