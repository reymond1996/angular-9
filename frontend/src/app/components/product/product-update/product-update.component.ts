import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Crud } from '../prod.model';
import { ProdService } from '../prod.service';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

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
  mudarProduto(): void{
    this.prodService.update(this.product).subscribe(()=>{
      this.prodService.showMsg('produto atualizado com sucesso')
      this.router.navigate(['create/product'])
    })
  }
  cancel(): void{
    this.router.navigate(['create/product'])
  }
}
