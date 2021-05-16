import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-status',
  templateUrl: './status.page.html',
  styleUrls: ['./status.page.scss'],
})
export class StatusPage implements OnInit {
myStatus:string = "unknown";
  constructor(private storage:Storage, private navCtrl:NavController) { }

  ngOnInit() {
    this.storage.get('status')
    .then((data)=>{
      this.myStatus=data;
    })
    .catch()
  }

  updateStatus(){
    this.storage.set('status', this.myStatus)
    .then(()=>{
      this.navCtrl.navigateBack('/home');
    })
    .catch()
  }
}
