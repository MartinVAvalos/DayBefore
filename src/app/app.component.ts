import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'app';


  ngOnInit(){
      firebase.initializeApp({
        apiKey: "AIzaSyBDBompZV0ty1cMfNBnlRKfN-IAQu3V4zA",
        authDomain: "muse-cynin.firebaseapp.com",
        databaseURL: "https://muse-cynin.firebaseio.com",
        projectId: "muse-cynin",
        storageBucket: "muse-cynin.appspot.com",
        messagingSenderId: "462424385045"
      });
  }

}
