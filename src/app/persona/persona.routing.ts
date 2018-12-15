import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PersonaComponent } from './persona.component';
import { ProveedorComponent } from './proveedor/proveedor.component';
import { ListaCubicacionComponent } from './lista-cubicacion/lista-cubicacion.component';

const routes: Routes = [

    {
        path: 'persona/:id', component: PersonaComponent, children: [
            { path: "proveedor", component: ProveedorComponent, children: [{ path: "cubicacion", component: ListaCubicacionComponent }] },]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PersonaRoutingModule { }
