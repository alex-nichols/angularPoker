import { BrowserModule } from '@angular/platform-browser'
import { HttpClientModule } from '@angular/common/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core'
import { StoreModule } from '@ngrx/store'
import { EffectsModule } from '@ngrx/effects'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'

import { store, effects } from './store/store'

import { AppComponent } from './app.component'
import { CommonUiModule } from './common-ui/common-ui.module';
import { CardComponentsModule } from './card-components/card-components.module'
import { TestGameModule } from './test-game/test-game.module';
 
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(store),
    EffectsModule.forRoot(effects),
    StoreDevtoolsModule.instrument({maxAge: 25}),
    CommonUiModule,
    TestGameModule,
    CardComponentsModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { } 
