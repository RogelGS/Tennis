import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tenni } from 'src/app/Entity/Tenni';
import { ServicerService } from 'src/app/Service/servicer.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {
  t: Tenni = new Tenni();
  constructor(private router: Router, private s: ServicerService) { }
  
  ngOnInit(): void {
  }

  guardar() {
    this.s.add(this.t).subscribe(res => {
      alert("SE GUARDO EL ITEM ");
      this.router.navigate(["listar"]);
    });
  }

}
