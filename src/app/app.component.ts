import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {
    var firebaseConfig = {
      apiKey: "AIzaSyBLxBFukj4DKKE8uiC2aYUvVG1G9ZUDy8A",
      authDomain: "bookshelves-uq.firebaseapp.com",
      projectId: "bookshelves-uq",
      storageBucket: "bookshelves-uq.appspot.com",
      messagingSenderId: "1037503422080",
      appId: "1:1037503422080:web:09a3b44876c10ded675065"
    };
    firebase.default.initializeApp(firebaseConfig);
  }
}
