import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { ItemService } from "../../services/item.service";
import { Item } from "../../models/Item";

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AddItemComponent implements OnInit {
  item: Item = {
    title: '',
    description: ''
  };

  constructor(private itemsService: ItemService) { }

  ngOnInit() {
  }

  onSubmit() {
    if (this.item.title != '' && this.item.description != '') {
      this.itemsService.addItem(this.item);
      this.item.title = '';
      this.item.description = '';
    }
  }
}
