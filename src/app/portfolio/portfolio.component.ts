import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-portfolio",
  templateUrl: "./portfolio.component.html",
  styleUrls: ["./portfolio.component.scss"]
})
export class PortfolioComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    (function(d, s, id) {
      var js;
      if (d.getElementById(id)) {
        return;
      }
      js = d.createElement(s);
      js.id = id;
      js.src = "https://embedsocial.com/embedscript/in.js";
      d.getElementsByTagName("head")[0].appendChild(js);
    })(document, "script", "EmbedSocialInstagramScript");
  }
}
