import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ElementRef, ViewChild, AfterViewInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { LayoutConfigService } from '../../../../../core/services/layout-config.service';
import { SubheaderService } from '../../../../../core/services/layout/subheader.service';
declare var $: any;

@Component({
  selector: 'm-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit, AfterViewInit {
	@ViewChild('json') jsonElement?: ElementRef;
	selectedView = 'mobile';
	FormjsonData;
	isValue: boolean;
	public form: Object = {}
	public config: any
  constructor(
    private router: Router,
		private configService: LayoutConfigService,
		private subheaderService: SubheaderService
  ) { }

  ngAfterViewInit() {
		setTimeout(() => { // delay to render formio first
		  this.selectedView = 'mobile';
		  this.changeView()
		  $('span[id^=builder]').each(function () { // to add title to formio icon (the thing we see when we hover over the icon)
			$(this).attr('title', $(this).text());
		  });
		}, 100);
	  }
  ngOnInit() {

    if (localStorage.length) {
			this.FormjsonData = localStorage.getItem('event')
			this.form['components'] = JSON.parse(this.FormjsonData);
		}
  }

	onChange(event) {
		this.jsonElement.nativeElement.innerHTML = '';
		this.jsonElement.nativeElement.appendChild(document.createTextNode(JSON.stringify(event.form, null, 4)));
		localStorage.setItem("event", JSON.stringify(event.form.components, null, 4))
	}
	// Change Layout mobile,i-pad,-desktop
	changeView() {
		
		const formioBuilder = $(".form-io-altered").find(".formarea.drag-container");
		if (this.selectedView == 'mobile') {
			console.log("view", this.selectedView);
			if ($(".form-io-altered").find(".form-io-Ipad").length) {
				formioBuilder.unwrap();
			}
			formioBuilder.wrap('<div class="form-io-mobile col-xs-8 col-sm-9 col-md-10"></div>');
		} else if (this.selectedView == "i-pad") {
			if ($(".form-io-altered").find(".form-io-mobile").length) {
				formioBuilder.unwrap();
			}
			formioBuilder.wrap('<div class="form-io-Ipad col-xs-8 col-sm-9 col-md-10"></div>');
		} else {
			formioBuilder.unwrap();
		}
	}
	// Change formComponent icon or grid
	gridIcon() {
		this.isValue = false;
		$('.formcomponents').removeClass('icon-view');
	}
	icon() {
		this.isValue = true;
		$('.formcomponents').addClass('icon-view');
	}

	formRender() {
		this.router.navigate(["/form-render"])
	}
}
