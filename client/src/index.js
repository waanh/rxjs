import { interval } from "rxjs";
import { ajax } from "rxjs/ajax";
import { switchMap, catchError } from "rxjs/operators";
import { updateUI } from "./ui.js";

const API_URL = "http://localhost:3000/messages/unread";

interval(5000)
  .pipe(
    switchMap(() =>
      ajax.getJSON(API_URL).pipe(
        catchError(() => {
          console.error("Ошибка запроса к серверу");
          return [{ status: "error", messages: [] }];
        })
      )
    )
  )
  .subscribe((data) => {
    if (data.status === "ok" && data.messages) {
      updateUI(data.messages);
    } else {
      console.error("Ошибка загрузки сообщений", data);
    }
  });
