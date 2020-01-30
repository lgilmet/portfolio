import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "portfolio";

  ngOnInit() {
    this.detectIE();
  }

  detectIE() {
    if ((<any>window.document).documentMode) {
      alert("your browser is not supported");
    }
  }
}
