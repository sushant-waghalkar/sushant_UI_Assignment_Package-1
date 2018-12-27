import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { AppComponent }  from './app.component';
import { routing }        from './app.routing';
import { AlertService, UserService, HerbsService} from './_services/index';
import { NewPageComponent } from './new/index';
import { RegisterNewComponent } from './register_new/index';
import { ProductComponent } from './product/index';
import {AgGridModule} from 'ag-grid-angular';
import 'rxjs/Rx';
import { map } from 'rxjs/operators';

@NgModule({
  imports: [
    routing,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AgGridModule.withComponents(null)
  ],
  declarations: [
    AppComponent,
    NewPageComponent,
    RegisterNewComponent,
    ProductComponent,
  ],
  
  providers: [HttpClient,HerbsService,AlertService, UserService],
        
  bootstrap: [AppComponent]
})
export class AppModule {
}
