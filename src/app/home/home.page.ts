import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
myStatus:string;
  constructor(private storage:Storage) {}

  ngOnInit(){
    this.storage.get('status')
    .then((data)=>{
      this.myStatus = data;
    })
    .catch()
  }
}
