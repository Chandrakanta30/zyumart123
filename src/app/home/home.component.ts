import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
categories:any=[];
categorywiseProducts:any=[];
categories_responce:any={};
category_products_responce:any={};

  constructor(private userService: AuthService) { }

  ngOnInit(): void {
    this.userService.getAllProducts().subscribe(users => {
      console.log(users)
  });
  this.userService.getCategories().subscribe(users => {
    this.categories_responce=users;
    this.categories=this.categories_responce.categories;
    this.loadCategoryWiseProducts();
});
  }
  loadCategoryWiseProducts(){
  for (let index = 0; index < this.categories.length; index++) {
    this.userService.getCategoryWiseProducts(this.categories[index].category_id).subscribe(users => {
      this.category_products_responce=users;
      if(this.category_products_responce.products.length>0){
        var obj={
          category:this.categories[index].category,
          products:this.category_products_responce.products
   
        }
        this.categorywiseProducts.push(obj);
      }
    
  });
    
  }


  }

}
