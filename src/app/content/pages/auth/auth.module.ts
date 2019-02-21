import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AuthComponent } from "./auth.component";
import { LoginComponent } from "./login/login.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { RegisterComponent } from "./register/register.component";
import {
	MatButtonModule,
	MatFormFieldModule,
	MatInputModule,
	MatCheckboxModule
} from "@angular/material";
import { TranslateModule } from "@ngx-translate/core";
import { SpinnerButtonModule } from "../../partials/content/general/spinner-button/spinner-button.module";
import { AuthNoticeComponent } from "./auth-notice/auth-notice.component";
import {
	SocialLoginModule,
	AuthServiceConfig,
	FacebookLoginProvider,
	GoogleLoginProvider
} from "angular-6-social-login";

export function getAuthServiceConfigs() {
	let config = new AuthServiceConfig([
		{
			id: FacebookLoginProvider.PROVIDER_ID,
			provider: new FacebookLoginProvider("2413733225513020")
		},
		{
			id: GoogleLoginProvider.PROVIDER_ID,
			provider: new GoogleLoginProvider("Your-Google-Client-Id") // ADD ID HERE :)
		}
	]);
	return config;
}

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		MatButtonModule,
		MatInputModule,
		MatFormFieldModule,
		MatCheckboxModule,
		FormsModule,
		ReactiveFormsModule,
		SocialLoginModule,
		TranslateModule.forChild(),
		SpinnerButtonModule,
		RouterModule.forChild([
			{
				path: "",
				component: AuthComponent
			}
		])
	],
	providers: [
		{
			provide: AuthServiceConfig,
			useFactory: getAuthServiceConfigs
		}
	],
	declarations: [
		AuthComponent,
		LoginComponent,
		RegisterComponent,
		AuthNoticeComponent
	]
})
export class AuthModule {}
