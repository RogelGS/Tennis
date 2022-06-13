import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarComponent } from './Components/listar/listar.component';
import { AgregarComponent } from './Components/agregar/agregar.component';
import { EditarComponent } from './Components/editar/editar.component';
import { EliminarComponent } from './Components/eliminar/eliminar.component';
import { ServicerService } from './Service/servicer.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ListarComponent,
    AgregarComponent,
    EditarComponent,
    EliminarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ServicerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
