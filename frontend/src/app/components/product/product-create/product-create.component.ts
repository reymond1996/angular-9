import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { Crud } from '../prod.model';
import { ProdService } from '../prod.service';


@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
 pacotes: Crud ={
  name:'',
  price:null
 }

  constructor(private router: Router,
    private prodServices: ProdService) { }

  ngOnInit(): void {
  }
  cancel(): void{
  this.router.navigate(['create/product']);
}
salvar(): void{
this.prodServices.create(this.pacotes).subscribe(()=>{
  this.prodServices.showMsg('operação realizada com sucesso')
  this.router.navigate(['create/product'])
})
  
}
}
