import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent{
  serverId = 10;
  serverStatus ='offline';
  allownewServer= false;
  servercreatedStatus ='No Server was created';
  serverName='';
  twowayData = 'TestData'

  constructor() {
    setTimeout(() => { this.allownewServer = true},2000)
  }

  serverMethod(){
    return this.serverStatus ='offline'
  }

  oncreateServer(){
    this.servercreatedStatus = 'Server was created and ' + 'name is ' + this.serverName
  }

  onupdateServername(event){
    this.serverName = event.target.value;
  }

}
