import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { Loading } from "./loading.component";
import { I18nModule } from "./../i18n/index";

@NgModule({
	declarations: [Loading],
	exports: [Loading],
	imports: [CommonModule, I18nModule]
})
export class LoadingModule {}
