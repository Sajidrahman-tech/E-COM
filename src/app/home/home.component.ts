import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( public productService:ProductService) { }
 //item:any=[]
   item:any=[
  

]
  ngOnInit(): void {
  
    this.getItems();
  }

  getItems(){
    console.log("insdie getItems")
   this.productService.getProducts().subscribe((response:any)=>{
   console.log("rsponse is")
    console.log(response)
    this.item=response
    console.log("the item is")
    console.log(this.item)
    console.log(this.item[1].product_img)
   });
  //console.log(this.item)
  }

  add(prod_ID:string,quan:any){
    console.log("working");
    console.log(quan);
    console.log(prod_ID);
    window.alert("Successfully Added To The Cart")
    this.productService.addCartItem(prod_ID,quan);
    }


}

