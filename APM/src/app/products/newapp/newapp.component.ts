import { Component } from '@angular/core';
import { CommonModule, CurrencyPipe, DatePipe, LowerCasePipe, NgFor, NgIf } from '@angular/common';
import { IProduct } from '../product';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ProductService } from '../product.service';
import { FormsModule } from '@angular/forms';
import { ConvertToSpacesPipe } from 'src/app/shared/convert-to-spaces.pipe';
import { StarComponent } from 'src/app/shared/star.component';

@Component({
  selector: 'pm-newapp',
  standalone: true,
  imports: [FormsModule, NgIf, NgFor, 
    RouterLink, StarComponent, LowerCasePipe, 
    CurrencyPipe, ConvertToSpacesPipe,CommonModule],
  templateUrl: './newapp.component.html',
  styleUrls: ['./newapp.component.css']
})
export class NewappComponent {
  pageTitle = 'RCAA Application on-board';
  errorMessage = '';
  product: IProduct ={
    applicationName :"",
    appId:9,
    active:"YES",
    adent:"",
    createDate : "",
    description:"",
    imageUrl:"",
    starRating:3
  };
;
  constructor(private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService,
    ) {
}
ngOnInit(): void {
  // const id = Number(this.route.snapshot.paramMap.get('id'));
  // if (id) {
  //   this.getProduct(id);
  // }
  this.product = {
    applicationName :"",
    appId:9,
    active:"YES",
    adent:"",
    createDate : "",
    description:"",
    imageUrl:"",
    starRating:3
  };
  let currentDate = new Date();
  const datepipe=new DatePipe('en-US')
  let todaydate = datepipe.transform(currentDate, 'yyyy-MM-dd')?.toString();
  if(todaydate)
  {
    this.product.createDate = todaydate;
  }

}
onBack(): void {
  this.router.navigate(['/products']);
}
getProduct(id: number): void {
  // this.productService.getProduct(id).subscribe({
  //   next: product => this.product = product,
  //   error: err => this.errorMessage = err
  // });
}
}
