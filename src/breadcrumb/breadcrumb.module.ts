import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { DialogModule } from "../dialog/dialog.module";

import { Breadcrumb } from "./breadcrumb.component";
import { BreadcrumbItemComponent } from "./breadcrumb-item.component";

@NgModule({
	declarations: [
		Breadcrumb,
		BreadcrumbItemComponent
	],
	exports: [
		Breadcrumb,
		BreadcrumbItemComponent
	],
	imports: [
		CommonModule,
		DialogModule
	]
})
export class BreadcrumbModule { }
