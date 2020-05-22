import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import {
	ChevronDownModule,
	CaretLeftModule,
	CaretRightModule
} from "@carbon/icons-angular";

import { Pagination } from "./pagination.component";
import { I18nModule } from "./../i18n/index";
import { ExperimentalModule } from "./../experimental.module";

@NgModule({
	declarations: [
		Pagination
	],
	exports: [
		Pagination
	],
	imports: [
		CommonModule,
		FormsModule,
		I18nModule,
		ExperimentalModule,
		ChevronDownModule,
		CaretLeftModule,
		CaretRightModule
	]
})
export class PaginationModule {}
