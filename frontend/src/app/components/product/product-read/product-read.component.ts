import { Component, OnInit } from '@angular/core';
import { Crud } from '../prod.model';
import { ProdService } from '../prod.service';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {
product: Crud[] =[];
displayedColumns=['id','name','price','action'];
  constructor(private prodService: ProdService) { }

  ngOnInit(): void {
    this.prodService.read().subscribe(product =>{
      this.product = product;
      console.log(product)
    })
  }

}
