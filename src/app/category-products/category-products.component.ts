import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-category-products',
  templateUrl: './category-products.component.html',
  styleUrls: ['./category-products.component.css']
})
export class CategoryProductsComponent implements OnInit {
  categories:any=[];
  categorywiseProducts:any=[];
  categories_responce:any={};
  category_products_responce:any={};
  category_id:any={};
  getcategoriesProducts:any=[];
  getcategorywiseproductsresponce:any={};
  constructor(private userService: AuthService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.category_id = params.get('id');
      this.userService.getCategoryWiseProducts(this.category_id).subscribe(users => {
        this.getcategorywiseproductsresponce=users;
        this.getcategoriesProducts=this.getcategorywiseproductsresponce.products;
    });
   })
  
  this.userService.getCategories().subscribe(users => {
    this.categories_responce=users;
    this.categories=this.categories_responce.categories;
   
});
  }
}
