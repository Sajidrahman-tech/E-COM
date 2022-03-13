import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(public productService:ProductService,public route:ActivatedRoute) { }
    id:any
    items:any=[]
  ngOnInit(): void {
    
    this.route.paramMap.subscribe((paramMap:ParamMap)=>{
      console.log(paramMap)
      this.id=paramMap.get('id')
      console.log(this.id)
    })
  this.getItem(this.id)
  }
getItem(id:any){
  console.log("inside the ts getItemns")
  console.log(id)
   this.productService.getItem(id).subscribe((response)=>{
   
   this.items=response
   console.log("response is") 
   console.log(response)
   console.log("item is")
   console.log(this.items)

   })
}
add(prod_ID:string,quan:any){
console.log("working");
console.log(quan);
console.log(prod_ID);
window.alert("Successfully Added To The Cart")
this.productService.addCartItem(prod_ID,quan);
}
}
