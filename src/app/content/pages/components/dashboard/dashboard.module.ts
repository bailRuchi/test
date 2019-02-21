import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { RouterModule } from '@angular/router';
import { LayoutModule } from '../../../layout/layout.module';
import { PartialsModule } from '../../../partials/partials.module';
import { WidgetChartsModule } from '../../../partials/content/widgets/charts/widget-charts.module';
import { MatButtonToggleModule, MatIconModule, MatSelectModule, MatLabel } from '@angular/material';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FormioModule } from 'angular-formio';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormsModule } from '@angular/forms';
import { FormRenderComponent } from './form-render/form-render.component';
// import { FormBuildrComponent } from './form-builder/form-builder.component';
@NgModule({
	imports: [
		CommonModule,
		LayoutModule,
		PartialsModule,
		WidgetChartsModule,
		MatButtonToggleModule,
		MatIconModule,
		FormsModule,
		MatSidenavModule,
		MatSelectModule,
		FormioModule,
		MatToolbarModule,
		RouterModule.forChild([
			{
				path: '',
				redirectTo: 'dashbord',
				pathMatch: 'full',
				children: [
					{
						path: 'dashbord',
						component: DashboardComponent
					},
					{
						path: 'form-render',
						component: FormRenderComponent
					},
				]
			},

		])
	],
	providers: [],
	declarations: [
		DashboardComponent,
		FormRenderComponent,
	]
})
export class DashboardModule { }
