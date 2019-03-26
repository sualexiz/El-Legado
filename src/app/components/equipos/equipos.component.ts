import { Component, OnInit } from '@angular/core';
import { EquiposService, Equipos } from '../../service/equipos.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-equipos',
  templateUrl: './equipos.component.html',
  styleUrls: ['./equipos.component.css']
})
export class EquiposComponent implements OnInit {

  tierraTeam: Equipos[] = [];

  constructor(  private equiposService: EquiposService,
                private router: Router,
                private activatedrouter: ActivatedRoute,
    ) {

      this.activatedrouter.params.subscribe( params => {

        this.tierraTeam = this.equiposService.getEquipos( params ['id']);
        console.log ('A ver el ID ' + this.tierraTeam);
      });
    }

  ngOnInit() {
  // this.tierraTeam = this.equiposService.getEquipos();

  }

}
