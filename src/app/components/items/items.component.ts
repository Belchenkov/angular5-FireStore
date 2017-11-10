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

  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.itemService.getItems()
      .subscribe(items => {
        this.items = items;
      });
  }

}
