import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { AsideLeftComponent } from './aside/aside-left.component';
import { FooterComponent } from './footer/footer.component';
// import { SubheaderComponent } from './subheader/subheader.component';
import { BrandComponent } from './header/brand/brand.component';
import { MenuSectionComponent } from './aside/menu-section/menu-section.component';
import { CoreModule } from '../../core/core.module';
import { MenuHorizontalComponent } from './header/menu-horizontal/menu-horizontal.component';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatProgressBarModule, MatTabsModule, MatButtonModule, MatTooltipModule } from '@angular/material';
import { TranslateModule } from '@ngx-translate/core';
import { LoadingBarModule } from '@ngx-loading-bar/core';
import { FormsModule } from '@angular/forms';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
	// suppressScrollX: true
};

@NgModule({
	declarations: [
		HeaderComponent,
		FooterComponent,
		// SubheaderComponent,
		BrandComponent,
		AsideLeftComponent,
		MenuSectionComponent,
		MenuHorizontalComponent,

	],
	exports: [
		HeaderComponent,
		FooterComponent,
		// SubheaderComponent,
		BrandComponent,
		AsideLeftComponent,
		MenuHorizontalComponent,
	],
	providers: [
		{
			provide: PERFECT_SCROLLBAR_CONFIG,
			useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
		}
	],
	imports: [
		CommonModule,
		RouterModule,
		CoreModule,
		PerfectScrollbarModule,
		NgbModule,
		FormsModule,
		MatProgressBarModule,
		MatTabsModule,
		MatButtonModule,
		MatTooltipModule,
		TranslateModule.forChild(),
		LoadingBarModule.forRoot(),
	]
})
export class LayoutModule {}
