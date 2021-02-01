import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  categories:any=[];
  categorywiseProducts:any=[];
  categories_responce:any={};
  category_products_responce:any={};
  allproducts:any=[];
  productsreponce:any={};

  constructor(private userService: AuthService) { }

  ngOnInit(): void {
    this.userService.getAllProducts().subscribe(users => {
      this.productsreponce=users;
      this.allproducts=this.productsreponce.products;
      
  });
  this.userService.getCategories().subscribe(users => {
    this.categories_responce=users;
    this.categories=this.categories_responce.categories;
   
});
  }

}
