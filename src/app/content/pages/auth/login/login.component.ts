import {
	Component,
	OnInit,
	Output,
	Input,
	ViewChild,
	OnDestroy,
	ChangeDetectionStrategy,
	ChangeDetectorRef,
	HostBinding
} from "@angular/core";
import { AuthenticationService } from "../../../../core/auth/authentication.service";
import { Router } from "@angular/router";
import { Subject } from "rxjs";
import { AuthNoticeService } from "../../../../core/auth/auth-notice.service";
import * as objectPath from "object-path";
import { TranslateService } from "@ngx-translate/core";
import { SpinnerButtonOptions } from "../../../partials/content/general/spinner-button/button-options.interface";
import { NgForm, FormControl, Validators, FormGroup } from "@angular/forms";
import {
	AuthService,
	FacebookLoginProvider,
	GoogleLoginProvider
} from "angular-6-social-login";

@Component({
	selector: "m-login",
	templateUrl: "./login.component.html",
	styleUrls: ["./login.component.scss"],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit, OnDestroy {
	public model: any = { email: "123@gmail.com", password: "123" };
	@HostBinding("class") classes: string = "m-login__signin";
	@Output() actionChange = new Subject<string>();
	public loading = false;

	@Input() action: string;

	@ViewChild("f") f: NgForm;
	errors: any = [];
	loginForm: FormGroup;
	spinner: SpinnerButtonOptions = {
		active: false,
		spinnerSize: 18,
		raised: true,
		buttonColor: "primary",
		spinnerColor: "accent",
		fullWidth: false
	};

	constructor(
		private authService: AuthenticationService,
		private router: Router,
		public authNoticeService: AuthNoticeService,
		private translate: TranslateService,
		private cdr: ChangeDetectorRef,
		private socialAuthService: AuthService
	) {
		this.userLoginForm();
	}
	ngOnInit(): void {
		if (!this.authNoticeService.onNoticeChanged$.getValue()) {
			const initialNotice = `Use your account details to continue.`;
			this.authNoticeService.setNotice(initialNotice, "success");
		}
	}

	ngOnDestroy(): void {
		this.authNoticeService.setNotice(null);
	}

	submitLogin(platform) {
		let socialPlatformProvider;
		if (platform === "google") {
			console.log('%c haha...first add dev id in auth.module.ts','color: red; font-size: 32px; font-weight: bold');
			return false; // remove this after adding google dev id.
			socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
		} else {
			socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
		}
		this.socialAuthService.signIn(socialPlatformProvider).then(userData => {
			console.log("Facebook sign in data : ", userData);
			// Now sign-in with userData
			// ...
		});
	}

	private userLoginForm(): void {
		this.loginForm = new FormGroup({
			email: new FormControl("", [
				Validators.compose([Validators.required, Validators.email])
			]),
			password: new FormControl("", [
				Validators.required,
				Validators.minLength(2)
			])
		});
	}
	public async onLogin(formData): Promise<void> {
		try {
			this.loading = false;
			this.loginForm.reset();
			setTimeout(() => {
				localStorage.setItem("userInfo", JSON.stringify(formData));
			}, 100);
			this.router.navigate(["/"]);
		} catch (e) {}
	}

	forgotPasswordPage(event: Event) {
		this.action = "forgot-password";
		this.actionChange.next(this.action);
	}

	register(event: Event) {
		this.action = "register";
		this.actionChange.next(this.action);
	}

	// public socialSignIn(socialPlatform: string) {
	// 	let socialPlatformProvider;
	// 	if (socialPlatform == "facebook") {
	// 		socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
	// 	}
	// 	this.socialAuthService.signIn(socialPlatformProvider).then(
	// 		(userData) => {
	// 			console.log(socialPlatform + " sign in data : ", userData);
	// 			// Now sign-in with userData
	// 			// ...

	// 		}
	// 	);
	// }
}
