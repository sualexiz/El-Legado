import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { OwlModule } from 'ngx-owl-carousel';
// Rutas
import { APP_ROUTING } from './app.routes';
// Servicios
import { EquiposService} from './service/equipos.service';
// Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { EquiposComponent } from './components/equipos/equipos.component';
import { HomeComponent } from './components/home/home.component';
import { TierraComponent } from './components/tierra/tierra.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    EquiposComponent,
    HomeComponent,
    TierraComponent
  ],
  imports: [
    BrowserModule,
    OwlModule,
    APP_ROUTING
  ],
  providers: [
    EquiposService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
