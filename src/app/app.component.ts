import { Component, OnInit } from '@angular/core';
import { Socket } from 'ngx-socket-io';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  title = 'webrtcsampleapp';
  constructor(private socket: Socket) { }

  ngOnInit() {
    this.socket.emit("sendMessage", {user: "test", message:"test message"});
  }

}
