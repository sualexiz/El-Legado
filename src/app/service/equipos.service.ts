import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { TierraComponent } from '../components/tierra/tierra.component';

@Injectable()
export class EquiposService {

    private equipos: Equipos[] = [
        {
        equipo: 'TIERRA',
        nombre: 'Wilmer Fernando Domicó',
        edad: '21',
        video: 'https://www.youtube.com/embed/7P9S-lTbgP4',
        lugar: 'Frontino/ Llano Rio Verde',
        },
        {
        equipo: 'TIERRA',
        nombre: 'Merly Domicó',
        edad: '21',
        video: 'https://www.youtube.com/embed/7P9S-lTbgP4',
        lugar: 'Dabeiba/Antadó',
        },
        {
        equipo: 'TIERRA',
        nombre: 'Yeidis Alianis Martínez',
        edad: '20',
        video: 'https://www.youtube.com/embed/7P9S-lTbgP4',
        lugar: 'Apartadó/ Las Palmas',
        },
        {
        equipo: 'TIERRA',
        nombre: 'Andrés Elias Domicó',
        edad: '23',
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
    console.log('servicio listo !!' + this.equipos[0]);
}

// Submetodo Publico, por buenas practicas
getEquipos() {
    let tierra = equipos.find(item => item.equipo === 'TIERRA');
    // return this.equipos;

    return tierraArr;

}


}

// Interface
export interface Equipos {
    equipo: string;
    nombre: string;
    edad: string;
    video: string;
    lugar: string;

}
