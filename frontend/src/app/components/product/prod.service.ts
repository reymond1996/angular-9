import { HttpClient } from '@angular/common/http';
import { ErrorHandler, Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { catchError, EMPTY, map, Observable } from 'rxjs';
import { Crud } from './prod.model';

@Injectable({
  providedIn: 'root'
})
export class ProdService {

  backendUrl ="http://localhost:3001/products"

  constructor(private snackBar: MatSnackBar,
    private http: HttpClient) { }

    showMsg(msg: string, isErro: boolean = false):void{
      this.snackBar.open(msg,'fecha',{
        duration: 3000,
        horizontalPosition:'right',
        verticalPosition:'top',
        panelClass: isErro ?['erro'] : ['success']  
        
      })
    }
    create(pacotes: Crud): Observable<Crud>{
      return this.http.post<Crud>(this.backendUrl,pacotes).pipe(
        map((obj) =>obj),
        catchError(e => this.errorHandler(e))
      );
    }
    read(): Observable<Crud[]> {
      return this.http.get<Crud[]>(this.backendUrl)
    }
    readById(id: number): Observable<Crud>{
      const url = `${this.backendUrl}/${id}`
      return this.http.get<Crud>(url)
    }
    update(pacotes: Crud): Observable<Crud> {
      const url = `${this.backendUrl}/${pacotes.id}`
      return this.http.put<Crud>(url, pacotes)
    }
    delete(id: number | undefined): Observable<Crud>{
      const url = `${this.backendUrl}/${id}`
      return this.http.delete<Crud>(url)
    }
    errorHandler(e: any): Observable<any>{
      this.showMsg('ocorreu um erro!', true)
      return EMPTY
    }
}

