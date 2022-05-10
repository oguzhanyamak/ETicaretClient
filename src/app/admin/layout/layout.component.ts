import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';
import { AlertifyService, MessageType } from 'src/app/services/admin/alertify.service';


@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor(private alertify:AlertifyService) { }

  ngOnInit(): void {
    this.alertify.message("Sa",{
      delay : 1,
      messageType : MessageType.Warning
    })
  }

}