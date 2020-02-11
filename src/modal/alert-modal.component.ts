import {
	Component,
	Inject,
	ViewChild,
	AfterViewInit
} from "@angular/core";
import { BaseModal } from "./base-modal.class";

/**
 * Component to create standard modals for presenting content or asking for user's input.
 * It can show as a passive modal showing only text or show as a transactional modal with
 * multiple buttons for different actions for the user to choose from.
 *
 * Using a modal in your application requires `ibm-modal-placeholder` which would generally be
 * placed near the end of your app component template (app.component.ts or app.component.html) as:
 *
 * ```html
 * <ibm-modal-placeholder></ibm-modal-placeholder>
 * ```
 *
 * Example of opening the modal:
 *
 * ```typescript
 * \@Component({
 *  selector: "app-modal-demo",
 *  template: `
 *   <button class="btn--primary" (click)="openModal()">Open modal</button>
 *   <ibm-modal-placeholder></ibm-modal-placeholder>`
 * })
 * export class ModalDemo {
 * 	openModal() {
 * 		this.modalService.show({
 *			modalType: "default",
 *			modalLabel: "optional header text",
 *			modalTitle: "Modal modalTitle",
 *			text: "Modal text",
 *			buttons: [{
 *				text: "Button text",
 *				type: "primary",
 *				click: clickFunction
 *			}]
 *		});
 * 	}
 * }
 * ```
 */
@Component({
	selector: "ibm-alert-modal",
	template: `
		<ibm-modal
			[size]="size"
			[theme]="modalType"
			[modalLabel]="modalTitle"
			(overlaySelected)="dismissModal()">
			<ibm-modal-header (closeSelect)="dismissModal()">
				<p class="bx--modal-header__label bx--type-delta">{{modalLabel}}</p>
      			<p class="bx--modal-header__heading bx--type-beta">{{modalTitle}}</p>
			</ibm-modal-header>
			<div #content class="bx--modal-content">
				<p [innerHTML]="modalContent"></p>
			</div>
			<div *ngIf="buttons.length > 0 && buttons[0].type === 'primary--single'" style = "padding-top: 3rem">
			<button
			style="width: 50%; right:0 ;  height:64px; position:fixed; bottom:0"
			ibmButton='primary'
			(click)="buttonClicked(0)"
			[id]="buttons[0].id"
			[attr.modal-primary-focus]="(buttons[0].type.indexOf('primary') !== -1 ? '' : null)">
			{{buttons[0].text}}
		</button>
			</div>
			<ibm-modal-footer *ngIf="buttons.length > 0 && buttons[0].type != 'primary--single'">
				<ng-container *ngFor="let button of buttons; let i = index">
					<button
						[ibmButton]="button.type"
						(click)="buttonClicked(i)"
						[id]="button.id"
						[attr.modal-primary-focus]="(button.type.indexOf('primary') !== -1 ? '' : null)">
						{{button.text}}
					</button>
				</ng-container>
			</ibm-modal-footer>
		</ibm-modal>
	`
})
export class AlertModal extends BaseModal implements AfterViewInit {
	@ViewChild("content") content;
	/**
	 * Creates an instance of `AlertModal`.
	 */
	constructor(
		@Inject("modalType") public modalType = "default",
		@Inject("modalLabel") public modalLabel: string,
		@Inject("modalTitle") public modalTitle: string,
		@Inject("modalContent") public modalContent: string,
		@Inject("size") public size: string,
		@Inject("buttons") public buttons = [],
		@Inject("close") public onClose: Function
	) {
		super();
		for (let i = 0; i < this.buttons.length; i++) {
			const button = this.buttons[i];
			if (!button.id) {
				button.id = `alert-modal-button-${i}`;
			}
			if (!button.type) {
				button.type = "secondary";
			}
		}
	}

	ngAfterViewInit() {
		if (!this.content) { return false; }
		const element = this.content.nativeElement;
		if (element.scrollHeight > element.clientHeight) {
			element.tabIndex = 0;
		} else {
			element.tabIndex = -1;
		}
	}

	buttonClicked(buttonIndex) {
		const button = this.buttons[buttonIndex];
		if (button.click) {
			button.click();
		}

		this.closeModal();
	}

	dismissModal() {
		if (this.onClose && this.onClose() === false) {
			return;
		}
		this.closeModal();
	}
}
