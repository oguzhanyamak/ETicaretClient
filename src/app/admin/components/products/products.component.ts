import { Component, OnInit } from '@angular/core';
import { HttpClientService } from 'src/app/services/common/http-client.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(private httpClientSercive:HttpClientService) { }

  ngOnInit(): void {
    this.httpClientSercive.get({controller:"product"}).subscribe(data => console.log(data));

    //this.httpClientSercive.post({controller:"product"},{name:"Kalem",stock:100,price:15}).subscribe();
  }

}
