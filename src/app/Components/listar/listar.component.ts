import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tenni } from 'src/app/Entity/Tenni';
import { ServicerService } from 'src/app/Service/servicer.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
  tenni: Tenni[];
  t: Tenni = new Tenni();
  search: String;
  constructor(private router: Router, private s: ServicerService) { }

  ngOnInit(): void {
    this.llenar();
  }

  buscar() {
    if(this.search == undefined) this.search = "";
    this.t.modelo = this.search;
    this.s.search(this.t).subscribe(res => {
      this.tenni = res;
    });
  }

  llenar() {
    this.s.getList().subscribe(res => {
      this.tenni = res;
    });
  }

  editar(t: Tenni) {
    localStorage.setItem("id", t.id.toString());
    this.router.navigate(["editar"]);
  }

  eliminar(t: Tenni) {
    localStorage.setItem("id", t.id.toString());
    this.router.navigate(["eliminar"]);
  }

}
