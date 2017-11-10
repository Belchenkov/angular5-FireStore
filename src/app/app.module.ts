import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Firestore
import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { AppComponent } from './app.component';
import { ItemsComponent } from './components/items/items.component';
import { ItemService } from "./services/item.service";

@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase, 'ang5fire2'),
    AngularFirestoreModule
  ],
  providers: [ ItemService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
