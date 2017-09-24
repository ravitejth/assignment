import {Component, OnInit} from '@angular/core';
import * as $ from 'jquery';
import moment = require('moment');

@Component({
  selector: 'inputform',
  styleUrls: [ 'form.scss'],
  templateUrl: 'form.pug',
})

export class FormComponent implements OnInit{
  private user : any = {};
  private phones : any = [{
    'number' : ''
  }];
  
  private IdProofs :any = [{
    'idProofType' : '',
    'idProofValue' : ''
  }];
  
  // private idProofTypes :any = [{
  //   'id' : '1',
  //   'name' : 'Aadhaar card'
  // },{
  //   'id' : '2',
  //   'name' : 'Voter card'
  // },{
  //   'id' : '3',
  //   'name' : 'PAN card'
  // }];
  //
  //
  // private occupations = [{
  //   'name' : '-- Select occupation -- ',
  //   'id'   : '0'
  // },{
  //   'name' : 'Student',
  //   'id'   : '1'
  // },{
  //   'name' : 'Teacher',
  //   'id'   : '2'
  // },{
  //   'name' : 'Unemployed',
  //   'id'   : '3'
  // }];
  
  ngOnInit(){
    this.user.occupation = '';
  }
  
  setDOB($event){
    let $input =  (<any>$('#dob')).pickadate();
    let picker = $input.pickadate('picker');
    picker.on({
      set: (thingSet) => {
        console.log('set > '+thingSet.select);
        let birthday = thingSet.select ? thingSet.select : '';
        this.user.dob = moment.unix(thingSet.select/1000).format('DD/MM/YYYY');
        this.calculateAge(birthday);
  
      }
    });
  }
  
  addMorePhones() {
    let index = this.phones.length;
    this.phones[index] = Object.assign({},this.phones[index-1]);
    this.phones[index].number = '';
  }
  
  addMoreProofs(){
    let index = this.IdProofs.length;
    this.IdProofs[index] = {};
    this.IdProofs[index].idProofType = '';
    this.IdProofs[index].idProofValue = '';

  }
  
  calculateAge(day){
    const birthday = moment(day);
    const age = moment().diff(birthday, 'years', false);
    this.user.age = age;
    console.log(age);
  }
  
  initForm(){
    this.user = {};
    this.phones =  [{
      'number' : ''
    }];
    this.IdProofs = [{
      'idProofType' : '',
      'idProofValue' : ''
    }];
  }
  
  
  saveUserDetails() {
    let user :any = {};
    user = this.user;
    user.phones = this.phones;
    user.IdProofs = this.IdProofs;
    
    // fetch list from localstorage
    
    let usersArray = [];
    let usersString = '';
    let users = localStorage.getItem("users");
    if(users) {
       usersArray = JSON.parse(users);
      usersArray.push(user);
    }
    if(!users) {
      usersArray = [user];
    }
    usersString = JSON.stringify(usersArray);
    localStorage.setItem("users", usersString);
    this.initForm();
  }
  
  
  ngAfterViewInit(){

    (<any>$('select')).material_select();

    (<any>$('#dob')).pickadate({
      selectMonths: true, // Creates a dropdown to control month
      selectYears: 15, // Creates a dropdown of 15 years to control year,
      today: 'Today',
      clear: 'Clear',
      close: 'Ok',
      closeOnSelect: false // Close upon selecting a date,
    });

  }
  }
