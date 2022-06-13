import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarComponent } from './Components/agregar/agregar.component';
import { EditarComponent } from './Components/editar/editar.component';
import { EliminarComponent } from './Components/eliminar/eliminar.component';
import { ListarComponent } from './Components/listar/listar.component';

const routes: Routes = [
  {path: "listar", component: ListarComponent},
  {path: "agregar", component: AgregarComponent},
  {path: "editar", component: EditarComponent},
  {path: "eliminar", component: EliminarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
