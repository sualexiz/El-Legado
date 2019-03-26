import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { TierraComponent } from '../components/tierra/tierra.component';

@Injectable()
export class EquiposService {

    private equipos: Equipos[] = [
        {
        id: '1',
        equipo: 'TIERRA',
        nombre: 'Wilmer Fernando Domicó',
        edad: '21',
        img: 'assets/img/tierra/wilmer.png',
        video: 'https://www.youtube.com/embed/7P9S-lTbgP4',
        lugar: 'Frontino/ Llano Rio Verde',
        },
        {
        id: '2',
        equipo: 'TIERRA',
        nombre: 'Merly Domicó',
        edad: '21',
        img: 'assets/img/tierra/merly.png',
        video: 'https://www.youtube.com/embed/7P9S-lTbgP4',
        lugar: 'Dabeiba/Antadó',
        },
        {
        id: '3',
        equipo: 'TIERRA',
        nombre: 'Yeidis Alianis Martínez',
        edad: '20',
        img: 'assets/img/tierra/yeydis.png',
        video: 'https://www.youtube.com/embed/7P9S-lTbgP4',
        lugar: 'Apartadó/ Las Palmas',
        },
        {
        id: '4',
        equipo: 'TIERRA',
        nombre: 'Andrés Elias Domicó',
        edad: '23',
        img: 'assets/img/tierra/andres.png',
        video: 'https://www.youtube.com/embed/7P9S-lTbgP4',
        lugar: 'Dabeiba/ Choromandó',
        },
        // {
        //   equipo: 'TIERRA',
        //   nombre: 'Dabeiba/ Choromandó',
        //   edad: '21',
        //   video: 'https://www.youtube.com/embed/7P9S-lTbgP4',
        //   lugar: 'Frontino/ Llano Rio Verde',
        // },
        // {
        //   equipo: 'AGUA',
        //   nombre: 'Wilmer Fernando Domicó',
        //   edad: '21',
        //   video: 'https://www.youtube.com/embed/7P9S-lTbgP4',
        //   lugar: 'Frontino/ Llano Rio Verde',
        // },
        // {
        //   equipo: 'AGUA',
        //   nombre: 'Wilmer Fernando Domicó',
        //   edad: '21',
        //   video: 'https://www.youtube.com/embed/7P9S-lTbgP4',
        //   lugar: 'Frontino/ Llano Rio Verde',
        // }
];

constructor() {
    console.log('servicio listo en vista equipos !!' + this.equipos[0]);
}

// Submetodo Publico, por buenas practicas

getEquipos( ) {
    return this.equipos;
}
getEquipos2( idx: string) {
return this.equipos[idx];

}


}

// Interface
export interface Equipos {
    id: any;
    equipo: string;
    nombre: string;
    edad: string;
    video: string;
    img: string;
    lugar: string;

}
