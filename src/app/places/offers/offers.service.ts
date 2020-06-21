import {Injectable} from "@angular/core";
import {Offer} from "./offer.model";

@Injectable({
    providedIn: 'root'
})
export class OffersService {
    private _offers: Offer[] = [
        new Offer('o1',
            'Shaftesbury Place',
            'In the heart of London\'s Soho, few steps away from Theatreland',
            'https://i.pinimg.com/originals/21/bd/81/21bd8106da067719de45fb1d83983cc4.jpg',
            150 ),
        new Offer('o2',
            'Carmen de las Cuevas',
            'Traditional andalusian house in the historic barrio del Albayzin, Granada',
            'https://www.carmencuevas.com/150-thickbox_default/apartamento-con-encanto.jpg',
            130),
        new Offer('o3',
            'RamaSita Retreat',
            'A beautiful bungalow in the centre of Ubud, Bali',
            'https://foto.hrsstatic.com/fotos/0/2/z/750/100/FFFFFF/http%3A%2F%2Ffoto-origin.hrsstatic.com%2Ffoto%2F7%2F5%2F6%2F2%2F756239%2F756239_u_25867027.jpg/jTYS5UgvwAbC9Oy6PfvTYw%3D%3D/500%2C375/6/Wenara_Bali_Bungalow-Ubud-Info-17-756239.jpg',
            80)

    ];

    get offers () {
        return [...this._offers];
    }

    constructor() { }
}