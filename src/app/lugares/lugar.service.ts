import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Lugar } from './lugar';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LugarService {


  constructor(private http: HttpClient) {}

  salvar(lugar: Lugar): Observable<Lugar> {
    return this.http.post<Lugar>('http://localhost:3000/lugares', lugar);
  }

  obterTodos(): Observable<Lugar[]> {
    return this.http.get<Lugar[]>('http://localhost:3000/lugares');
  }

<<<<<<< HEAD
  filtrar(nome: string, categoria: string, localizacao: string, avaliacao: string) : Observable<Lugar[]> {
=======
  filtrar(nome: string, categoria: string) : Observable<Lugar[]> {
>>>>>>> d3b5a59a17b132aee0bf4fe57b196b6ad9f939d0
    let params = new HttpParams();

    if (nome) {
      params = params.set('nome_like', nome);
    }
<<<<<<< HEAD
    if (categoria && categoria !== "0"){
      params = params.set('categoria', categoria);
    }
    if(localizacao){
      params = params.set('localizacao_like', localizacao);
    }
    if(avaliacao && avaliacao !== "0"){
      params = params.set('avaliacao', avaliacao)
    }

=======
    if (categoria){
      params = params.set('categoria_like', categoria);
    }

    console.log(params)

>>>>>>> d3b5a59a17b132aee0bf4fe57b196b6ad9f939d0
    return this.http.get<Lugar[]>('http://localhost:3000/lugares',{
      params: params
    })
  }
}
