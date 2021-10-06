import { Component, OnInit } from '@angular/core';
import {Product} from './product';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
 products: Product[];//array
 selectedProduct:Product;
 productList: Product[]=[];
 errorItem: boolean = false;

  constructor() {   }

  ngOnInit() {
    this.products = [  //sample JSON data
      {
        p_id : 1,
        product_name : 'Surf Excel',
        product_weight : '1Kg',
        product_price : 590,
        product_image : 'https://rukminim1.flixcart.com/image/832/832/jg6v24w0/washing-powder/3/r/d/2-2-kg-top-load-surf-excel-original-imaf3udkm4v5mdrq.jpeg?q=70'
      },
      {
        p_id : 2,
        product_name : 'Nivea',
        product_weight : '200ml',
        product_price : 180,
        product_image : 'https://rukminim1.flixcart.com/image/832/832/j4n1x8w0/moisturizer-cream/k/m/b/200-body-lotion-whitening-even-tone-uv-protect-all-skin-types-original-imaeva7e4hvqn7dz.jpeg?q=70'
      },
      {
        p_id : 3,
        product_name : 'Beer shampoo',
        product_weight : '200ml',
        product_price : 500,
        product_image : 'https://rukminim1.flixcart.com/image/832/832/jjiw1ow0/shampoo/8/r/k/370-beer-shiny-and-bouncy-shampoo-park-avenue-original-imaf72uahtxywquk.jpeg?q=70'
      },
      {
        p_id : 4,
        product_name : 'Himalaya paste',
        product_weight : '200g',
        product_price : 180,
        product_image : 'https://rukminim1.flixcart.com/image/832/832/j3uh47k0/toothpaste/f/t/d/150-complete-care-himalaya-original-imaeuwfpgtr59sas.jpeg?q=70'
      },
      {
        p_id : 5,
        product_name : 'Ashirvaad Atta',
        product_weight : '1Kg',
        product_price : 175,
        product_image : 'https://rukminim1.flixcart.com/image/832/832/j65cnm80/flour/z/s/r/1-superior-mp-atta-whole-wheat-flour-aashirvaad-original-imaewzbkfqhy4dhq.jpeg?q=70'
      },
      {
        p_id : 6,
        product_name : 'Ashirvad Ghee',
        product_weight : '200ml',
        product_price : 180,
        product_image : 'https://rukminim1.flixcart.com/image/832/832/j9yixe80/ghee/h/z/p/1-aashirvaad-pure-cow-plastic-bottle-aashirvaad-original-imaeznaasxznzgc7.jpeg?q=70'
      },
      {
        p_id : 7,
        product_name : 'Gillete',
        product_weight : '200ml',
        product_price : 240,
        product_image : 'https://rukminim1.flixcart.com/image/832/832/j3xbzww0/shaving-cream/w/m/j/418-classic-sensitive-skin-pre-shave-foam-gillette-original-imaeuyybxxppskgu.jpeg?q=70'
      },
      {
        p_id : 8,
        product_name : 'Treseme Shampoo',
        product_weight : '250ml',
        product_price : 235,
        product_image : 'https://rukminim1.flixcart.com/image/832/832/jesunbk0/shampoo/j/8/7/580-keratin-smooth-with-argan-oil-shampoo-tresemme-original-imaexrhqrrs6xqku.jpeg?q=70'
      },
      {
        p_id : 9,
        product_name : 'Himalaya shampoo',
        product_weight : '250ml',
        product_price : 293,
        product_image : 'https://rukminim1.flixcart.com/image/612/612/j3lwh3k0/shampoo/h/g/b/700-anti-hair-fall-shampoo-himalaya-original-imaeupg7sygzgqej.jpeg?q=70'
      }
    ]
    }

    total() {  //custom function to calculate total price of all items in the productList array
      return this.productList.reduce((total, item) => total + item.product_price, 0);
      //reduce: executes the code onece for each product in the productList array                             
     }
  
    addToCart(item) { //custom function to add a product to the productList array
      if(this.productList.indexOf(item) === -1) {     //if the product is not already in the productList array
        this.productList.push(item);                  //add the product to the productList array
        this.errorItem = false;                       //set error flag to false
      }
      else if (this.productList.indexOf(item) > -1) { //if the product is already in the productList array
        this.errorItem = true;                        //set error flag to true
      }  
    }

    removeItem(item) {  //custom function to remove a product from the productList array
    var index = this.productList.indexOf(item);      //search for the index no of the product to be removed
    if (index > -1) {                                //if the product is found in the productList array 
      this.productList.splice(index, 1);             //splice: delete the product from (indexNo, 1 product to delete)
     }
  }

  }


