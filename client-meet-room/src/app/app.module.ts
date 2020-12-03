import { AppRoutingModule } from "./app-routing.module";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { CreateRoomComponent } from "./components/create-room/create-room.component";
import { RoomDetailsComponent } from "./components/room-details/room-details.component";
import { RoomListComponent } from "./components/room-list/room-list.component";
import { UpdateRoomComponent } from "./components/update-room/update-room.component";

@NgModule({
  declarations: [
    AppComponent,
    CreateRoomComponent,
    RoomDetailsComponent,
    RoomListComponent,
    UpdateRoomComponent,
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
