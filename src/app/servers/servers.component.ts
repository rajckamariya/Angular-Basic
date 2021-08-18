import { Component, OnInit } from '@angular/core';

@Component({
  //selector: '.app-servers',
  //selector: '[app-servers]',
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  isServerCreated = 'No Server Created!';
  serverName = 'Test';
  servers = ['Test Server', 'Test Server 2'];
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }
  ngOnInit() {}
  createServer() {
    this.servers.push(this.serverName);
    this.isServerCreated = 'Server Created!';
  }
  // onUpdateServerName(event) {
  //   this.serverName = (<HTMLInputElement>event.target).value;
  // }
}
