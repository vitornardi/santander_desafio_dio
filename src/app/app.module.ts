import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './components/shared/footer/footer.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { BannerComponent } from './components/pages/banner/banner.component';
import { DestaqueComponent } from './components/pages/destaque/destaque.component';
import { BgimgComponent } from './components/pages/bgimg/bgimg.component';
import { MatFormFieldModule, } from '@angular/material/form-field';
import { TipoCartaoComponent } from './components/pages/tipo-cartao/tipo-cartao.component';
import { InterfaceAplicativoComponent } from './components/pages/interface-aplicativo/interface-aplicativo.component';
import { MosaicoComponent } from './components/pages/mosaico/mosaico.component';
import {MatGridListModule} from '@angular/material/grid-list';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavComponent,
    BannerComponent,
    DestaqueComponent,
    BgimgComponent,
    TipoCartaoComponent,
    InterfaceAplicativoComponent,
    MosaicoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatGridListModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
