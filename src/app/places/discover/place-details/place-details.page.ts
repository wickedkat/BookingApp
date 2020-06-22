import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ModalController, NavController} from "@ionic/angular";
import {Offer} from "../../offers/offer.model";
import {OffersService} from "../../offers/offers.service";
import {Place} from "../../place.model";
import {PlacesService} from "../../places.service";
import {MakeBookingComponent} from "../../../bookings/make-booking/make-booking.component";

@Component({
    selector: 'app-place-details',
    templateUrl: './place-details.page.html',
    styleUrls: ['./place-details.page.scss'],
})
export class PlaceDetailsPage implements OnInit {
    place: Place;

    constructor(private  route: ActivatedRoute,
                private navController: NavController,
                private placesService: PlacesService,
                private modalController: ModalController
    ) {
    }

    ngOnInit() {
        this.route.paramMap.subscribe(paramMap => {
            if (!paramMap.has('placeId')) {
                this.navController.navigateBack('/places/discover');
                return;
            }
            this.place = this.placesService.getPlace(paramMap.get('placeId'))
        });
    }

    onBookPlace() {
        this.modalController
            .create({component: MakeBookingComponent, componentProps: {selectedWorkshop: this.place}})
            .then(modalEl => {
            modalEl.present();
            return modalEl.onDidDismiss();
        })
            .then(resultData => {
                console.log(resultData.data, resultData.role);
                if(resultData.role === 'confirm'){
                    console.log('BOOKED')
                }
            })




        // this.navController.navigateBack('/places/discover');

    }

}

