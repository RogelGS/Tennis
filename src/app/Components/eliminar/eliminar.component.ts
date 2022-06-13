import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tenni } from 'src/app/Entity/Tenni';
import { ServicerService } from 'src/app/Service/servicer.service';

@Component({
  selector: 'app-eliminar',
  templateUrl: './eliminar.component.html',
  styleUrls: ['./eliminar.component.css']
})
export class EliminarComponent implements OnInit {

  constructor(private router: Router, private s: ServicerService) { }
  t: Tenni = new Tenni();
  ngOnInit(): void {
    this.buscar();
  }

  buscar() {
    this.t.id =+ Number(localStorage.getItem("id"));
    this.s.find(this.t).subscribe(res => {
      this.t = res;
    });
  }

  eliminar() {
    this.s.delete(this.t).subscribe(res => {
      alert("SE EDITO EL ITEM");
      this.router.navigate(["listar"]);
    });
  }

}
