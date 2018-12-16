import { Persona } from './persona';
import { Cubicacion } from './cubicacion';

export interface Proveedor extends Persona {
    direccion: string
    numeroTelefonico: string
    cubicaciones: Cubicacion[]
}