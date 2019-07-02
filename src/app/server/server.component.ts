import { Component, OnInit } from "@angular/core";
import { InnerSubscriber } from "rxjs/internal/InnerSubscriber";

@Component({
  selector: "app-server",
  templateUrl: "./server.component.html",
  styleUrls: ["./server.component.css"]
})
export class ServerComponent implements OnInit {
  server_name = "Apache";
  server_id = 10;
  server_Status = "";
  serverStatus() {
    return (this.server_Status = "offline");
  }

  onTap() {
    this.server_id += 1;
  }

  onInput(event: Event) {
    this.server_name = (<HTMLInputElement>event.target).value;
  }
  constructor() {}

  ngOnInit() {}
}
