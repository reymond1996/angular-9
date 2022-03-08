import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderData } from 'src/app/components/template/header/header-data.model';
import { HeaderService } from 'src/app/components/template/header/header.service';

@Component({
  selector: 'app-product-crud',
  templateUrl: './product-crud.component.html',
  styleUrls: ['./product-crud.component.css']
})
export class ProductCrudComponent implements OnInit {
 

  constructor(private router: Router,
    private headerService: HeaderService) {
      headerService.headerData ={
        title:'cadastro de produto',
        icon:'storefront',
        routeUrl:'create/product'
      }

     }

  ngOnInit(): void {
  }
  navigateProductCreate(): void{
  this.router.navigate(['create-product'])
}
}
