import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonaComponent } from './persona.component';
import { ProveedorComponent } from './proveedor/proveedor.component';
import { ListaCubicacionComponent } from './lista-cubicacion/lista-cubicacion.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
@NgModule({
    declarations: [PersonaComponent, ProveedorComponent, ListaCubicacionComponent],
    imports: [
        CommonModule, FormsModule, ReactiveFormsModule],
    exports: [PersonaComponent],
    providers: [],
})
export class PersonaModule { }