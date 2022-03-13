import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(public http:HttpClient) { }

getProducts(){
  console.log("inside getProduct")
  return this.http.get('http://localhost:3000/AllProducts')
  // .subscribe((response)=>{
  // console.log("response is") 
  // console.log(typeof(response))
  // console.log(response)
  // })
}
getItem(id:any){
console.log("inside service get item")
console.log(id);
//console.log("http://localhost:3000/product/"+id)
const obj={
  id:id
}
console.log(obj)
return this.http.post('http://localhost:3000/product',obj)
 /*return this.http.post('http://localhost:3000/product',obj).subscribe((response)=>{
 console.log(response)
})*/
}


getCatItem(cat_ID:any){
  console.log("inside the service of getCatItem")
  const obj={
    id:cat_ID
  } 
  return this.http.post('http://localhost:3000/category',obj);
  //return this.http.post('http://localhost:3000/category',obj).subscribe()
console.log(cat_ID)
}
addCartItem(prod_ID:any,quan:any){
  console.log("inside the addCartItems");
  const obj={
    user_Id:localStorage.getItem('user_Id'),
    prod_Id:prod_ID,
    quan:quan
  } 
  console.log(obj);
  this.http.post('http://localhost:3000/addCart',obj).subscribe()
}

//////////
showCart(){
console.log("inside the ShowCasrt of Service")
const obj={
  user_Id:localStorage.getItem('user_Id')
}
return this.http.post("http://localhost:3000/cartItems",obj)


}
DeleteCart(prod_ID:any){
  const obj={
 prod_ID:prod_ID,
 user_Id:localStorage.getItem('user_Id')
  }
  //let user_Id=localStorage.getItem('user_Id')
 //console.log( "http://localhost:3000/cartDelete/"+prod_ID+"&&"+user_Id);
   return this.http.post("http://localhost:3000/cartDelete",obj)
}

}






