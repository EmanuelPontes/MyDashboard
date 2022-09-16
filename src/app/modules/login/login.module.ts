import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { EntryImgComponent } from "./components/entry-img.component";
import { LoginComponent } from "./components/login/login.component";

@NgModule({

    declarations: [ LoginComponent, EntryImgComponent ],
    imports: [SharedModule],
    exports: [ LoginComponent ],

})
export class LoginModule {}