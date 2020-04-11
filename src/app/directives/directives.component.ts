import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss']
})
export class DirectivesComponent  {
  serverId='';
  createServer ='';
  onCreateServer = false;
  serverStatus ='offline';
  servers= ['TestServer','Servertwo','serverThree','serversFour']
  Secretpassword= false;
  log= [];

constructor() {
  this.serverStatus = Math.random() > 0.5 ? 'online' :'offline'
}

oncreateServer(){
  this.onCreateServer = true;
  this.createServer = this.serverId;
  this.servers.push(this.serverId)
}

  getColor(){
    return this.serverStatus === 'online' ? 'green': 'red';
  }

  ontoggleDetails(){
    this.Secretpassword = !this.Secretpassword
    this.log.push(this.log.length + 1)
  }
}
