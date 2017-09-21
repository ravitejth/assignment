import { Component } from '@angular/core';

@Component({
  selector: 'form-data',
  styleUrls: [ 'form-data.scss'],
  templateUrl: 'form-data.pug',
})

export class FormDataComponent  {
  
  private users = [];
  
  ngOnInit(){
    this.users = this.fetchUsers();
    console.log('users >> '+JSON.stringify(this.users));
  }
  
  fetchUsers(){
    let users = localStorage.getItem("users");
    return JSON.parse(users);
  }
  
}
