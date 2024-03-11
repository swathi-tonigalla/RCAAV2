import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct, TableSchema } from './product';
import { ProductService } from './product.service';
import { ConvertToSpacesPipe } from '../shared/convert-to-spaces.pipe';
import { StarComponent } from '../shared/star.component';
import { NgIf, LowerCasePipe, CurrencyPipe, NgFor } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
    templateUrl: './product-detail.component.html',
    styleUrls: ['./product-detail.component.css'],
    standalone: true,
    imports: [NgIf, StarComponent, LowerCasePipe, CurrencyPipe, ConvertToSpacesPipe,NgFor]
})
export class ProductDetailComponent implements OnInit {
  pageTitle = 'Product Detail';
  errorMessage = '';
  product: IProduct | undefined;
  sub!: Subscription;
  tables: TableSchema[] = [];
  constructor(private route: ActivatedRoute,
              private router: Router,
              private productService: ProductService) {
  }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.getProduct(id);
    }
    this.sub = this.productService.getTableSchema().subscribe({
      next: products => {
        this.tables = products;
      },
      error: err => this.errorMessage = err
    });
  }

  getProduct(id: number): void {
    this.productService.getProduct(id).subscribe({
      next: product => this.product = product,
      error: err => this.errorMessage = err
    });
  }
  newtable(): void {
    this.router.navigate(['/newtable']);
    }
  onBack(): void {
    this.router.navigate(['/products']);
  }
}
