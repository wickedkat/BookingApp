import { Component, OnInit } from '@angular/core';
import {Offer} from "../offer.model";
import {ActivatedRoute} from "@angular/router";
import {NavController} from "@ionic/angular";
import {OffersService} from "../offers.service";

@Component({
  selector: 'app-offer-bookings',
  templateUrl: './offer-bookings.page.html',
  styleUrls: ['./offer-bookings.page.scss'],
})
export class OfferBookingsPage implements OnInit {
  offer: Offer;

  constructor(private  route: ActivatedRoute,
              private navController: NavController,
              private offersService: OffersService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      if(!paramMap.has('offerId')){
        this.navController.navigateBack('/places/offers');
        return;
      }
      this.offer = this.offersService.getOffer(paramMap.get('offerId'))
    });
  }

}
