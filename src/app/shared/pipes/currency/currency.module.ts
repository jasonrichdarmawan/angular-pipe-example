import { NgModule } from "@angular/core";
import { CurrencyPipe } from "./currency.pipe";

@NgModule({
    declarations: [
        CurrencyPipe
    ],
    exports: [
        CurrencyPipe
    ],
    providers: [
        CurrencyPipe
    ]
  })
export class CurrencyModule { }