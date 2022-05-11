import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Create_Product } from 'src/app/contracts/create_product';
import { AlertifyService, MessageType, Position } from 'src/app/services/admin/alertify.service';
import { ProductService } from 'src/app/services/common/models/product.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  constructor(private ProductService:ProductService,private AlertifyJs:AlertifyService) { }

  ngOnInit(): void {
  }


  @Output() createdProduct: EventEmitter<Create_Product> = new EventEmitter();

  create(name:HTMLInputElement,stock:HTMLInputElement,price:HTMLInputElement){
    const create_product : Create_Product = new Create_Product();
    create_product.name = name.value;
    create_product.price = parseFloat(price.value);
    create_product.stock = parseInt(stock.value);
    this.ProductService.createProduct(create_product,()=> {},errorMessage => {this.AlertifyJs.message(errorMessage,{
      messageType:MessageType.Error,
      position:Position.TopRight
    });
    this.createdProduct.emit(create_product);
  
  });
  }

}
