import { Component } from '@angular/core';
// import core firebase client (required)
import firebase from 'firebase/app';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {
    // Your web app's Firebase configuration
    var firebaseConfig = {
      apiKey: "AIzaSyDXuKIepwhoIZn8K-C44dWfmnUUtGk_FUc",
      authDomain: "uq-bookshelves.firebaseapp.com",
      databaseURL: "https://uq-bookshelves-default-rtdb.firebaseio.com",
      projectId: "uq-bookshelves",
      storageBucket: "uq-bookshelves.appspot.com",
      messagingSenderId: "747337929587",
      appId: "1:747337929587:web:f7cee046db2aedcc52ab06"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }
}
