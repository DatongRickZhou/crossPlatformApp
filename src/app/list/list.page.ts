import { Component, OnInit, ViewChild } from '@angular/core';
import {StorageService} from '../storage.service';
import {Validators,FormBuilder,FormGroup} from '@angular/forms';
import {Item} from '../models/item.model'
import { from,Subscription } from 'rxjs';

import { AlertController, IonItemSliding, NavController } from '@ionic/angular';
import { isNgTemplate } from '@angular/compiler';
import { iterateListLike } from '@angular/core/src/change_detection/change_detection_util';
import { storage } from 'firebase';
import { NavigationCancel } from '@angular/router';



@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  todoForm:FormGroup;
  todoList:Array<Item> = [];
  itemsSub:Subscription;
  mystyle:string;
  latitude:number;
  longitude:number;

  @ViewChild(IonItemSliding) slider:IonItemSliding;

  constructor(
    private storage:StorageService,
    private formBuilder:FormBuilder,
    ){
  }
  ngOnInit() {
    this.todoForm = this.formBuilder.group({
      todo:['',[Validators.required,Validators.minLength(1)]]
    });
    this.loadTodoList();
  }
  loadTodoList(){
    this.itemsSub= this.storage.list$.subscribe((listValues)=>{
      this.todoList = listValues;
    });
    this.storage.sortList(this.todoList,'id')
  }
  addItem(name:string){
    this.getGeoLoaction();
    if(name.length >=1){
      this.storage.addItem(name,this.longitude,this.latitude);
      this.todoForm.reset();
      this.longitude=0;
      this.latitude=0;
    }
  }
  toggleStatus( id:number ){
    this.storage.toggleItemStatus(id)
    .then((response) => {
      if( response == true ){
      }
    })
    .catch( (error) => { console.log(error) });
    
  }
  getColor(status:boolean){
    switch (status){
      case true:
      return "green";
      case false:
      return "red";
    }
  }
  deleteItem(id:number){
    this.storage.deleteItem(id);
  }
  enablebutton(status:boolean){
  if(status)
    return false;
    else 
    return true;
  }
  getGeoLoaction(){
    navigator.geolocation.getCurrentPosition((postion)=>{
      this.longitude=postion.coords.longitude;
      this.latitude=postion.coords.latitude;
      console.log(this.longitude);
      console.log(this.latitude);
    })
  }
}
