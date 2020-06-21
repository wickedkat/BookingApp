import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OffersPage } from './offers.page';
import {NewOfferPage} from "./new-offer/new-offer.page";

const routes: Routes = [
  {
    path:'',
    component: OffersPage,
  },
    {path: 'new',
    loadChildren: () => import('./new-offer/new-offer.module').then(m => m.NewOfferPageModule)},

    {path: 'edit/:offerId',
   loadChildren: () => import('./edit-offer/edit-offer.module').then( m => m.EditOfferPageModule)},

    {path: ':offerId',
       loadChildren: () => import('./offer-bookings/offer-bookings.module').then( m => m.OfferBookingsPageModule)}


  // {
  //   path: ':offerId',
  //   component: OffersPage
  // },
  // {
  //   path: 'new',
  //   component: NewOfferPage
  // },
  // {
  //   path: 'edit-offer/:offerId',
  //   loadChildren: () => import('./edit-offer/edit-offer.module').then( m => m.EditOfferPageModule)
  // },
  // {
  //   path: 'offer-bookings/:offerId',
  //   loadChildren: () => import('./offer-bookings/offer-bookings.module').then( m => m.OfferBookingsPageModule)
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OffersPageRoutingModule {}
