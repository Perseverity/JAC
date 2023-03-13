import { Component } from "@angular/core";
import { AppModule } from "../app.module";

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html'
})

export class FooterComponent{
    autor: any = {nombre: "Sneydder", apellido: "Navarro" }
}