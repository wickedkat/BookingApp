import { Component, OnInit } from '@angular/core';
import {Offer} from "../offer.model";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-offer-bookings',
  templateUrl: './offer-bookings.page.html',
  styleUrls: ['./offer-bookings.page.scss'],
})
export class OfferBookingsPage implements OnInit {
  offer: Offer;

  constructor(private  route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe();
  }

}
