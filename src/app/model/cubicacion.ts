import { DatosMadera } from './datosMadera';

export interface Cubicacion {
    totalImporte: number
    madera: string
    fechaRegistro: Date
    datosMadera: DatosMadera[]
}