import { NgModule } from "@angular/core";
import { MultiplyPipe } from "./multiply.pipe";

@NgModule({
    declarations: [
        MultiplyPipe
    ],
    exports: [
        MultiplyPipe
    ],
  })
export class MultiplyModule { }