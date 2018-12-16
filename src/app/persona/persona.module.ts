import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonaComponent } from './persona.component';
import { ProveedorComponent } from './proveedor/proveedor.component';
import { ListaCubicacionComponent } from './lista-cubicacion/lista-cubicacion.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { MaterialModule } from '../miscelaneo/ModuloMaterialize';
import { PersonaRoutingModule } from './persona.routing';
import { ProveedorService } from '../services/proveedor.service';
@NgModule({
    declarations: [PersonaComponent, ProveedorComponent, ListaCubicacionComponent],
    imports: [
        CommonModule, FormsModule, ReactiveFormsModule, MaterialModule, PersonaRoutingModule],
    exports: [PersonaComponent],
    providers: [ProveedorService],
})
export class PersonaModule { }