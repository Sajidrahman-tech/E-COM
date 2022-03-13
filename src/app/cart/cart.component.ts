import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(public productService :ProductService) { }
item:any=[];
  ngOnInit(): void {
      this.showCart()
  }
   sum=0;
showCart(){
  console.log("inside the show cArt of ts")
  this.productService.showCart().subscribe((response)=>{
      this.item=response;
      console.log(this.item)
      for(let i=0;i<this.item.length;i++)
      {
       //let sum=0;
        this.sum=this.sum+this.item[i].product_price;
      }
      console.log("thi sum is ")
      console.log(this.sum)
  })
}
mes(){
  window.alert("Order Sucessfully Placed Thank You!!!"
  )
}
Delete(prod_ID:any,price:any){
  console.log("inside the ts of Delete")
  this.sum=this.sum-price;
  console.log("the price is")
  console.log(price)
  console.log(prod_ID);
  this.productService.DeleteCart(prod_ID).subscribe((response)=>{
  console.log("response is")
    console.log(response)
    window.alert("Deleted Succesfully")
    this.productService.showCart().subscribe((resp)=>{
      this.item=resp;
      // for(let i=0;i<this.item.length;i++)
      // {
      // let sum=0;
      //   this.sum=this.sum+this.item[i].product_price;
      // }
      // console.log("thi sum is ")
      // console.log(this.sum)
    })
  })
 // console.log("gonna re fetch the items of cart")
}
}
