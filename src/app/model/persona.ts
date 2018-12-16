import { DocumentReference } from "angularfire2/firestore";

export interface Persona {
    id?: string
    nombre: string
    apellidoMaterno: string
    apellidoPaterno: string
    estado: boolean
    proveedoreRef: DocumentReference
}