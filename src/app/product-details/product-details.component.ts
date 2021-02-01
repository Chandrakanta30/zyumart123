import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  categories:any=[];
  categorywiseProducts:any=[];
  categories_responce:any={};
  category_products_responce:any={};
  
    constructor(private userService: AuthService) { }
  

  ngOnInit(): void {
    this.userService.getCategories().subscribe(users => {
      this.categories_responce=users;
      this.categories=this.categories_responce.categories;
  });
  }

}
