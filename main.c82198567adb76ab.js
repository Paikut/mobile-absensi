"use strict";(self.webpackChunkangular_SIMAt=self.webpackChunkangular_SIMAt||[]).push([[179],{7574:(m,d,t)=>{t.d(d,{a:()=>u});var s=t(5e3),n=t(629),f=t(6696);let u=(()=>{class a{constructor(c,i){this._authService=c,this._router=i}canActivate(){return!!this._authService.isLoggedIn||(this._router.navigate(["/login"]),!1)}canLoad(){return!!this._authService.isLoggedIn||(this._router.navigate(["/login"]),!1)}}return a.\u0275fac=function(c){return new(c||a)(s.LFG(n.e),s.LFG(f.F0))},a.\u0275prov=s.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),a})()},8042:(m,d,t)=>{t.d(d,{i:()=>u});var s=t(5e3),n=t(629),f=t(6696);let u=(()=>{class a{constructor(c,i){this._authService=c,this._router=i}canActivate(){return!this._authService.isLoggedIn||(this._router.navigate(["/app/home"]),!1)}canLoad(){return!this._authService.isLoggedIn||(this._router.navigate(["/app/home"]),!1)}}return a.\u0275fac=function(c){return new(c||a)(s.LFG(n.e),s.LFG(f.F0))},a.\u0275prov=s.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),a})()},7793:(m,d,t)=>{t.d(d,{r:()=>a});var s=t(2340),n=t(5e3),f=t(520),u=t(629);let a=(()=>{class e{constructor(i,g){this._http=i,this._authService=g}login(i){return new Promise((g,h)=>{this._http.post(`${s.N.apiUrl}/login`,i,{responseType:"json"}).subscribe({next:S=>{const p=S.Result;p.Data.username=i.username,p.Data.password=i.password,this._authService.updateToken(p.AccessToken),this._authService.updateUserData(p.Data),g(p)},error:S=>{var p;return h(null!==(p=S.error)&&void 0!==p?p:S)},complete:()=>{}})})}register(i){return new Promise((g,h)=>{this._http.post(`${s.N.apiUrl}/register`,i,{responseType:"json"}).subscribe({next:S=>g(S.Result),error:S=>h(S.error),complete:()=>{}})})}logout(){return new Promise((i,g)=>{this._http.post(`${s.N.apiUrl}/logout`,null,{responseType:"json"}).subscribe({next:h=>i(h),error:h=>g(h.error),complete:()=>{this._authService.reset()}})})}}return e.\u0275fac=function(i){return new(i||e)(n.LFG(f.eN),n.LFG(u.e))},e.\u0275prov=n.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},629:(m,d,t)=>{t.d(d,{e:()=>f});var s=t(1135),n=t(5e3);let f=(()=>{class u{constructor(){this.TokenSubject=new s.X(null),this.UserSubject=new s.X(null),this.retrieveToken(),this.retrieveUserData()}get token$(){return this.TokenSubject.asObservable()}get userId(){var e;return(null===(e=this.getUserData())||void 0===e?void 0:e.id)||null}getAuthToken(){var e;return null!==(e=this.TokenSubject.value)&&void 0!==e?e:this.retrieveToken()}getUserData(){var e;return null!==(e=this.UserSubject.value)&&void 0!==e?e:this.retrieveUserData()}updateToken(e){e?localStorage.setItem("AccessToken",e):localStorage.removeItem("AccessToken"),this.TokenSubject.next(e)}retrieveToken(){const e=localStorage.getItem("AccessToken");return this.updateToken(e),e}updateUserData(e){localStorage.setItem("user_data",JSON.stringify(e)),this.UserSubject.next(e)}retrieveUserData(){const e=localStorage.getItem("user_data")?JSON.parse(localStorage.getItem("user_data")):null;return this.UserSubject.next(e),e}getSavedCredentials(){if(this.getUserData()){const{username:e,password:c}=this.getUserData();return{username:e,password:c}}return null}get isLoggedIn(){return null!==this.TokenSubject.value}reset(){this.UserSubject.next(null),this.TokenSubject.next(null),localStorage.removeItem("AccessToken"),localStorage.removeItem("user_data")}}return u.\u0275fac=function(e){return new(e||u)},u.\u0275prov=n.Yz7({token:u,factory:u.\u0275fac,providedIn:"root"}),u})()},2340:(m,d,t)=>{t.d(d,{N:()=>s});const s={production:!0,apiUrl:"https://presensi.ypsimlibrary.com/api",url:"https://presensi.ypsimlibrary.com"}},6728:(m,d,t)=>{var s=t(2313),n=t(5e3),f=t(9808),u=t(520),a=t(1271),e=t(6360),c=t(6165),i=t(8077),g=t(2340),h=t(6696),S=t(7574);const M=[{path:"",pathMatch:"full",redirectTo:"app"},{path:"login",canLoad:[t(8042).i],loadChildren:()=>Promise.all([t.e(506),t.e(531),t.e(585)]).then(t.bind(t,5585)).then(r=>r.LoginModule)},{path:"app",canLoad:[S.a],loadChildren:()=>Promise.all([t.e(506),t.e(531),t.e(842),t.e(40)]).then(t.bind(t,4040)).then(r=>r.LayoutModule)},{path:"camera",loadChildren:()=>Promise.all([t.e(506),t.e(842),t.e(209)]).then(t.bind(t,209)).then(r=>r.CameraModule)}];let D=(()=>{class r{}return r.\u0275fac=function(o){return new(o||r)},r.\u0275mod=n.oAB({type:r}),r.\u0275inj=n.cJS({imports:[[h.Bz.forRoot(M,{useHash:!0,preloadingStrategy:h.wm})],h.Bz]}),r})();var U=t(7445);let P=(()=>{class r{constructor(o,v){this.swUpdate=o,this.ngZone=v,this.title="angular-SIMAt",o.isEnabled&&this.ngZone.runOutsideAngular(()=>(0,U.F)(15e3).subscribe(l=>{o.checkForUpdate().then(A=>{A&&this.swUpdate.activateUpdate().then(()=>document.location.reload())})}))}ngOnInit(){}}return r.\u0275fac=function(o){return new(o||r)(n.Y36(c.yO),n.Y36(n.R0b))},r.\u0275cmp=n.Xpm({type:r,selectors:[["app-root"]],decls:1,vars:0,template:function(o,v){1&o&&n._UZ(0,"router-outlet")},directives:[h.lC],styles:[""]}),r})();var I=t(2843),O=t(2076),E=t(3900),y=t(9300),C=t(5698),L=t(262),j=t(629),F=t(7793);let R=(()=>{class r{constructor(o,v,l){this._authService=o,this._router=v,this._loginService=l,this.reloginInProgress=!1}injectToken(o,v){const l=v||this._authService.getAuthToken();return o.clone({setHeaders:{Authorization:`Bearer ${l}`}})}handleUnauthorized(o,v){if(this.reloginInProgress)return this._authService.token$.pipe((0,y.h)(l=>null!==l),(0,C.q)(1),(0,E.w)(l=>v.handle(this.injectToken(o,l)).pipe((0,L.K)(A=>(0,I._)(()=>A)))));{this.reloginInProgress=!0,this._authService.updateToken(null);const l=this._authService.getSavedCredentials();return l?(0,O.D)(this._loginService.login(l)).pipe((0,E.w)(()=>v.handle(this.injectToken(o)))):(this._authService.reset(),this._router.navigateByUrl("/login"),(0,I._)(()=>"Token expired"))}}intercept(o,v){return this._authService.isLoggedIn?v.handle(this.injectToken(o)).pipe((0,L.K)(l=>l instanceof u.UA&&401===l.status?this.handleUnauthorized(o,v):(0,I._)(()=>l))):v.handle(o)}}return r.\u0275fac=function(o){return new(o||r)(n.LFG(j.e),n.LFG(h.F0),n.LFG(F.r))},r.\u0275prov=n.Yz7({token:r,factory:r.\u0275fac}),r})(),B=(()=>{class r{}return r.\u0275fac=function(o){return new(o||r)},r.\u0275mod=n.oAB({type:r,bootstrap:[P]}),r.\u0275inj=n.cJS({providers:[f.uU,{provide:u.TP,useClass:R,multi:!0}],imports:[[s.b2,D,i.IJ,e.PW,c.Wr.register("ngsw-worker.js",{enabled:g.N.production,registrationStrategy:"registerWhenStable:30000"}),u.JF,a.ZX]]}),r})();g.N.production&&(0,n.G48)(),s.q6().bootstrapModule(B).then(()=>{"serviceWorker"in navigator&&g.N.production&&navigator.serviceWorker.register("ngsw-worker.js")}).catch(r=>console.error(r))}},m=>{m.O(0,[736],()=>m(m.s=6728)),m.O()}]);