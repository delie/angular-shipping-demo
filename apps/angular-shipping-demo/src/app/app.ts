import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CoreComponent } from "@demo/core";
import { EmissionComponent } from "@demo/emission";
import { VesselComponent } from "@demo/vessel";

@Component({
  imports: [RouterModule, VesselComponent, CoreComponent, EmissionComponent],
  selector: "demo-root",
  templateUrl: "./app.html",
  styleUrl: "./app.scss",
})
export class App {
  protected title = "angular-shipping-demo";
}
