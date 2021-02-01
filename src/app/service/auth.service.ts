import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse ,HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }


  getAllProducts() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Basic c291cmF2LmtAenl1bWFydC5jb206MzVtMTk3WjJOTjAwOWQyMDY5UTNpNjR1NkFzNGs0MXA=',
        'Access-Control-Allow-Origin':'*'
      })
    };

    return this.http.get('https://boiling-headland-87464.herokuapp.com/api/products');
}
getCategories() {
  const httpOptions = {
    headers: new HttpHeaders({
      'Authorization': 'Basic c291cmF2LmtAenl1bWFydC5jb206MzVtMTk3WjJOTjAwOWQyMDY5UTNpNjR1NkFzNGs0MXA=',
      'Access-Control-Allow-Origin':'*'
    })
  };

  return this.http.get('https://boiling-headland-87464.herokuapp.com/api/categories');
}
getProductDetails(product_id:any) {
  const httpOptions = {
    headers: new HttpHeaders({
      'Authorization': 'Basic c291cmF2LmtAenl1bWFydC5jb206MzVtMTk3WjJOTjAwOWQyMDY5UTNpNjR1NkFzNGs0MXA=',
      'Access-Control-Allow-Origin':'*'
    })
  };

  return this.http.get('https://boiling-headland-87464.herokuapp.com/api/product_details'+product_id);
}
getCategoryWiseProducts(category_id:any) {
  const httpOptions = {
    headers: new HttpHeaders({
      'Authorization': 'Basic c291cmF2LmtAenl1bWFydC5jb206MzVtMTk3WjJOTjAwOWQyMDY5UTNpNjR1NkFzNGs0MXA=',
      'Access-Control-Allow-Origin':'*'
    })
  };

  return this.http.get('https://boiling-headland-87464.herokuapp.com/api/category-products/'+category_id);
}



}
