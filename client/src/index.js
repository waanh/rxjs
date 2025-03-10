import { ajax } from "rxjs/ajax";
import { interval } from "rxjs";
import { switchMap, catchError } from "rxjs/operators";
import { updateUI } from "./ui";
import "./styles.css";

const API_URL = "http://localhost:3000/messages/unread";

interval(5000) 
  .pipe(
    switchMap(() => ajax.getJSON(API_URL)),
    catchError(() => []) 
  )
  .subscribe((data) => {
    if (data.messages) {
      updateUI(data.messages);
    }
  });
