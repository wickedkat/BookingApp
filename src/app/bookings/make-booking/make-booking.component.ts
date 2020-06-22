import {Component, Input, OnInit} from '@angular/core';
import {Place} from "../../places/place.model";
import {ModalController} from "@ionic/angular";

@Component({
  selector: 'app-make-booking',
  templateUrl: './make-booking.component.html',
  styleUrls: ['./make-booking.component.scss'],
})
export class MakeBookingComponent implements OnInit {
  @Input()selectedWorkshop: Place;




  constructor(private modalController: ModalController) { }

  ngOnInit() {}

  onCancel(){
    this.modalController.dismiss(null, 'cancel');
  }

  onBookPlace(){
    this.modalController.dismiss({message:'marked message'}, 'confirm')
  }

}
