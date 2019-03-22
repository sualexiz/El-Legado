import { Component, OnInit } from '@angular/core';
import { EquiposService, Equipos } from '../../service/equipos.service';

@Component({
  selector: 'app-equipos',
  templateUrl: './equipos.component.html',
  styleUrls: ['./equipos.component.css']
})
export class EquiposComponent implements OnInit {

  tierraArr: Equipos[] = [];

  constructor( private equiposService: EquiposService) { }

  ngOnInit() {
  this.tierraArr = this.equiposService.getEquipos();
  console.log ('Este de equipos.comp.ts?' + this.tierraArr);
  }

}
