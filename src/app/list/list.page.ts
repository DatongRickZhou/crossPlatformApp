import { Component, OnInit, ViewChild } from '@angular/core';
import {StorageService} from '../storage.service';
import {Validators,FormBuilder,FormGroup} from '@angular/forms';
import {Item} from '../models/item.model'
import { from,Subscription } from 'rxjs';

import { AlertController, IonItemSliding, NavController } from '@ionic/angular';
import { isNgTemplate } from '@angular/compiler';
import { iterateListLike } from '@angular/core/src/change_detection/change_detection_util';



@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  todoForm:FormGroup;
  todoList:Array<Item> = [];
  itemsSub:Subscription;

  @ViewChild(IonItemSliding) slider:IonItemSliding;

  constructor(
    private storage:StorageService,
    private formBuilder:FormBuilder,
    ){
  }
  addnewItem(){
    
  }
  deleteFromList(){

  }
  ngOnInit() {
    this.todoForm = this.formBuilder.group({
      todo:['',[Validators.required,Validators.minLength(1)]]
    });
  }
  loadTodoList(){
    if(!this.itemsSub){
      this.itemsSub= this.storage.list$.subscribe((listValues)=>{
      this.todoList = listValues.filter((item)=>{
        if(item.status == false){
          return item;
        }
      });
      this.storage.sortList(this.todoList,'id')
    });
    }
  }
  addItem(name:string){
    if(name.length >=1){
      this.storage.addItem(name);
      this.todoForm.reset();
    }
  }
  toggleStatus( id:number ){
    this.storage.toggleItemStatus(id)
    .then((response) => {
      if( response == true ){
        // success
      }
    })
    .catch( (error) => { console.log(error) });
  }
}
