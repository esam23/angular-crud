import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { PlayerFormComponent } from './components/player-form/player-form.component';
import { PlayerListComponent } from './components/player-list/player-list.component';
import { PlayersService } from './services/players.service';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    PlayerFormComponent,
    PlayerListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    PlayersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
