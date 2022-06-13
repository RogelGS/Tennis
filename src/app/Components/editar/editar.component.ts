import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tenni } from 'src/app/Entity/Tenni';
import { ServicerService } from 'src/app/Service/servicer.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {
  t: Tenni = new Tenni();
  constructor(private router: Router, private s: ServicerService) { }

  ngOnInit(): void {
    this.buscar();
  }

  buscar() {
    this.t.id =+ Number(localStorage.getItem("id"));
    this.s.find(this.t).subscribe(res => {
      this.t = res;
    });
  }

  editar() {
    this.s.edith(this.t).subscribe(res => {
      alert("SE EDITO EL ITEM");
      this.router.navigate(["listar"]);
    });
  }
}
