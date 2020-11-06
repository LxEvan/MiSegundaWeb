import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventsComponent } from './events/events.component';
import { IniciComponent } from './inici/inici.component';
import { QuiSomComponent } from './qui-som/qui-som.component';
import { AltaEventComponent } from './alta-event/alta-event.component';
import { ModificarEventComponent} from './modificar-event/modificar-event.component';


 

const routes: Routes = [{ path: '', pathMatch: 'full', redirectTo: 'inici' },
{ path: 'events', component: EventsComponent },
{ path: 'inici', component: IniciComponent },
{ path: 'QuiSomComponent', component: QuiSomComponent },
{ path: 'AltaEventComponent', component: AltaEventComponent},
{ path: 'ModificarEventComponent', component: ModificarEventComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
