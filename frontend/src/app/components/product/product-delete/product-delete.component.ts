import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Crud } from '../prod.model';
import { ProdService } from '../prod.service';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {
  product!: Crud;

  constructor(private router: Router,
    private prodService: ProdService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.getAll('id')
    this.prodService.readById(id).subscribe(product =>{
      this.product = product
    })
  }
  cancel(): void{
    this.router.navigate(['create/product'])
  }
  excluir(): void{
    this.prodService.delete(this.product.id).subscribe(()=>{
      this.prodService.showMsg('Produto excluido com sucesso');
      this.router.navigate(['create/product'])
    })
  }
}
