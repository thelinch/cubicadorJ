import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { Proveedor } from './../model/proveedor';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ProveedorService {

  constructor(private afs: AngularFirestore) {

  }
  getAllProveedor(): Observable<Proveedor[]> {
    return this.afs.collection("proveedores").snapshotChanges().pipe(map(actions => actions.map(documentoProveedor => {
      const data = documentoProveedor.payload.doc.data() as Proveedor
      data.id = documentoProveedor.payload.doc.id
      return data
    })))
  }
  saveProveedor(proveedor: Proveedor): Observable<boolean> {
    return Observable.create(observer => {
      proveedor.estado = true
      this.afs.collection<Proveedor>("proveedores").add(proveedor)
      observer.next(true)
    })
  }
}
