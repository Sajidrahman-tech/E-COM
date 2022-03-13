import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-catproduct',
  templateUrl: './catproduct.component.html',
  styleUrls: ['./catproduct.component.css']
})
export class CatproductComponent implements OnInit {

item:any=[]
cat_ID:any
  constructor(public route:ActivatedRoute,public productService:ProductService) { }



  ngOnInit(): void {
   this.route.paramMap.subscribe((paramMap:ParamMap)=>{
        this.cat_ID=paramMap.get('id')
        console.log(this.cat_ID)
        this.get_cat(this.cat_ID);
   })
  }
  get_cat(cat_ID:any){
    console.log("inside the get_cat")
  // console.log( this.productService.getCatItem(cat_ID));
  this.productService.getCatItem(cat_ID).subscribe((response:any)=>{
   console.log(response);
   this.item=response;
  })
  }


}
