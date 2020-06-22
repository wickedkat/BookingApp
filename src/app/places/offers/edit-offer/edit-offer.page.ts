import { Component, OnInit } from '@angular/core';
import {Offer} from "../offer.model";
import {ActivatedRoute} from "@angular/router";
import {NavController} from "@ionic/angular";
import {OffersService} from "../offers.service";

@Component({
  selector: 'app-edit-offer',
  templateUrl: './edit-offer.page.html',
  styleUrls: ['./edit-offer.page.scss'],
})
export class EditOfferPage implements OnInit {
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

