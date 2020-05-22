// modules
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CloseModule } from "@carbon/icons-angular";

// imports
import { ModalService } from "./modal.service";
import { Modal } from "./modal.component";
import { ModalFooter } from "./modal-footer.component";
import { Overlay } from "./overlay.component";
import { ModalHeader } from "./modal-header.component";
import { AlertModal } from "./alert-modal.component";
import { ButtonModule } from "../forms/index";
import { I18nModule } from "./../i18n/index";
import { PlaceholderModule } from "./../placeholder/index";
import { ExperimentalModule } from "./../experimental.module";

@NgModule({
	declarations: [
		AlertModal,
		Modal,
		ModalHeader,
		ModalFooter,
		Overlay
	],
	exports: [
		AlertModal,
		Modal,
		ModalHeader,
		ModalFooter
	],
	entryComponents: [
		AlertModal,
		Modal,
		ModalFooter,
		ModalHeader
	],
	providers: [ ModalService ],
	imports: [
		CommonModule,
		ButtonModule,
		I18nModule,
		PlaceholderModule,
		ExperimentalModule,
		CloseModule
	]
})
export class ModalModule { }
