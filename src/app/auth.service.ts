import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { promise } from 'protractor';
import { resolve } from 'path';
import { reject } from 'q';
import { StringMapWithRename } from '@angular/core/src/render3/jit/compiler_facade_interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private afAuth:AngularFireAuth ) { }
  //other methods
  signUp(email:string,password:string){
  return new Promise// 只返回一次
  ((resolve,reject)=>{
    this.afAuth.auth.createUserWithEmailAndPassword(email,password)
    .then((response)=>{
      resolve(response)})
    .catch((error)=>{reject(error)})
  });
  }
  signOut(){
    return new Promise((resolve,reject)=>{
      this.afAuth.auth.signOut()
      .then(()=>{resolve(true)})
      .catch((error)=>{reject(error)});
    });
  }
  signIn(email:string,password:string){
    return new Promise((resolve,reject)=>{
      this.afAuth.auth.signInWithEmailAndPassword(email,password)
      .then((response)=>{
        resolve(response)})
      .catch((error)=>{reject(error)})
    });
  }
}
