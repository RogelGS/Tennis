import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tenni } from '../Entity/Tenni';

@Injectable({
  providedIn: 'root'
})
export class ServicerService {
  url = "http://localhost:7005/APITENNI/";
  constructor(private http: HttpClient) { }

  getList() {
    return this.http.get<Tenni[]>(this.url+"LISTAR");
  }

  add(t: Tenni) {
    return this.http.post<Tenni>(this.url+"GUARDAR", t);
  }

  edith(t: Tenni) {
    return this.http.post<Tenni>(this.url+"EDITAR", t);
  }

  delete(t: Tenni) {
    return this.http.post<Tenni>(this.url+"ELIMINAR", t);
  }

  find(t: Tenni) {
    return this.http.post<Tenni>(this.url+"BUSCAR", t);
  }

  search(t: Tenni) {
    return this.http.post<Tenni[]>(this.url+"SEARCH", t);
  }
}
