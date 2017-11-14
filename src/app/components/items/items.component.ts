import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { ItemService } from "../../services/item.service";
import { Item } from "../../models/Item";

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ItemsComponent implements OnInit {
  items: Item[];
  editState: boolean = false;
  itemToEdit: Item;

  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.itemService.getItems()
      .subscribe(items => {
        this.items = items;
      });
  }

  editItem(event: Event, item: Item) {
    this.editState = true;
    this.itemToEdit = item;
  }

  updateItem(item: Item) {
    this.itemService.updateItem(item);
    this.clearState();
  }

  deleteItem(event: Event, item: Item) {
    this.clearState();
    this.itemService.deleteItem(item);
  }

  clearState() {
    this.editState = false;
    this.itemToEdit = null;
  }

}
