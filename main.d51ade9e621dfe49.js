"use strict";(self.webpackChunkangular_SIMAt=self.webpackChunkangular_SIMAt||[]).push([[179],{7574:(p,v,t)=>{t.d(v,{a:()=>u});var n=t(5e3),o=t(629),f=t(6696);let u=(()=>{class a{constructor(c,i){this._authService=c,this._router=i}canActivate(){return!!this._authService.isLoggedIn||(this._router.navigate(["/login"]),!1)}canLoad(){return!!this._authService.isLoggedIn||(this._router.navigate(["/login"]),!1)}}return a.\u0275fac=function(c){return new(c||a)(n.LFG(o.e),n.LFG(f.F0))},a.\u0275prov=n.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),a})()},8042:(p,v,t)=>{t.d(v,{i:()=>u});var n=t(5e3),o=t(629),f=t(6696);let u=(()=>{class a{constructor(c,i){this._authService=c,this._router=i}canActivate(){return!this._authService.isLoggedIn||(this._router.navigate(["/app/home"]),!1)}canLoad(){return!this._authService.isLoggedIn||(this._router.navigate(["/app/home"]),!1)}}return a.\u0275fac=function(c){return new(c||a)(n.LFG(o.e),n.LFG(f.F0))},a.\u0275prov=n.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),a})()},7793:(p,v,t)=>{t.d(v,{r:()=>a});var n=t(2340),o=t(5e3),f=t(520),u=t(629);let a=(()=>{class e{constructor(i,m){this._http=i,this._authService=m}login(i){return new Promise((m,h)=>{this._http.post(`${n.N.apiUrl}/login`,i,{responseType:"json"}).subscribe({next:S=>{const d=S.Result;d.Data.username=i.username,d.Data.password=i.password,this._authService.updateToken(d.AccessToken),this._authService.updateUserData(d.Data),m(d)},error:S=>{var d;return h(null!==(d=S.error)&&void 0!==d?d:S)},complete:()=>{}})})}register(i){return new Promise((m,h)=>{this._http.post(`${n.N.apiUrl}/register`,i,{responseType:"json"}).subscribe({next:S=>m(S.Result),error:S=>h(S.error),complete:()=>{}})})}logout(){return new Promise((i,m)=>{this._http.post(`${n.N.apiUrl}/logout`,null,{responseType:"json"}).subscribe({next:h=>i(h),error:h=>m(h.error),complete:()=>{this._authService.reset()}})})}}return e.\u0275fac=function(i){return new(i||e)(o.LFG(f.eN),o.LFG(u.e))},e.\u0275prov=o.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},629:(p,v,t)=>{t.d(v,{e:()=>f});var n=t(1135),o=t(5e3);let f=(()=>{class u{constructor(){this.TokenSubject=new n.X(null),this.UserSubject=new n.X(null),this.retrieveToken(),this.retrieveUserData()}get token$(){return this.TokenSubject.asObservable()}getAuthToken(){var e;return null!==(e=this.TokenSubject.value)&&void 0!==e?e:this.retrieveToken()}getUserData(){var e;return null!==(e=this.UserSubject.value)&&void 0!==e?e:this.retrieveUserData()}updateToken(e){e?localStorage.setItem("AccessToken",e):localStorage.removeItem("AccessToken"),this.TokenSubject.next(e)}retrieveToken(){const e=localStorage.getItem("AccessToken");return this.updateToken(e),e}updateUserData(e){localStorage.setItem("user_data",JSON.stringify(e)),this.UserSubject.next(e)}retrieveUserData(){const e=localStorage.getItem("user_data")?JSON.parse(localStorage.getItem("user_data")):null;return this.UserSubject.next(e),e}getSavedCredentials(){if(this.getUserData()){const{username:e,password:c}=this.getUserData();return{username:e,password:c}}return null}get isLoggedIn(){return null!==this.TokenSubject.value}reset(){this.UserSubject.next(null),this.TokenSubject.next(null),localStorage.removeItem("AccessToken"),localStorage.removeItem("user_data")}}return u.\u0275fac=function(e){return new(e||u)},u.\u0275prov=o.Yz7({token:u,factory:u.\u0275fac,providedIn:"root"}),u})()},2340:(p,v,t)=>{t.d(v,{N:()=>n});const n={production:!0,apiUrl:"https://presensi.ypsimlibrary.com/api",url:"https://presensi.ypsimlibrary.com"}},6728:(p,v,t)=>{var n=t(2313),o=t(5e3),f=t(9808),u=t(520),a=t(1271),e=t(6360),c=t(6165),i=t(8077),m=t(2340),h=t(6696),S=t(7574);const E=[{path:"",pathMatch:"full",redirectTo:"app"},{path:"login",canLoad:[t(8042).i],loadChildren:()=>Promise.all([t.e(506),t.e(531),t.e(585)]).then(t.bind(t,5585)).then(r=>r.LoginModule)},{path:"app",canLoad:[S.a],loadChildren:()=>Promise.all([t.e(506),t.e(531),t.e(842),t.e(737)]).then(t.bind(t,9737)).then(r=>r.LayoutModule)},{path:"camera",loadChildren:()=>Promise.all([t.e(506),t.e(842),t.e(209)]).then(t.bind(t,209)).then(r=>r.CameraModule)}];let D=(()=>{class r{}return r.\u0275fac=function(s){return new(s||r)},r.\u0275mod=o.oAB({type:r}),r.\u0275inj=o.cJS({imports:[[h.Bz.forRoot(E,{useHash:!0,preloadingStrategy:h.wm})],h.Bz]}),r})(),P=(()=>{class r{constructor(){this.title="angular-SIMAt"}ngOnInit(){}}return r.\u0275fac=function(s){return new(s||r)},r.\u0275cmp=o.Xpm({type:r,selectors:[["app-root"]],decls:1,vars:0,template:function(s,g){1&s&&o._UZ(0,"router-outlet")},directives:[h.lC],styles:[""]}),r})();var A=t(2843),U=t(2076),I=t(3900),O=t(9300),y=t(5698),L=t(262),C=t(629),j=t(7793);let F=(()=>{class r{constructor(s,g,l){this._authService=s,this._router=g,this._loginService=l,this.reloginInProgress=!1}injectToken(s,g){const l=g||this._authService.getAuthToken();return s.clone({setHeaders:{Authorization:`Bearer ${l}`}})}handleUnauthorized(s,g){if(this.reloginInProgress)return this._authService.token$.pipe((0,O.h)(l=>null!==l),(0,y.q)(1),(0,I.w)(l=>g.handle(this.injectToken(s,l)).pipe((0,L.K)(M=>(0,A._)(()=>M)))));{this.reloginInProgress=!0,this._authService.updateToken(null);const l=this._authService.getSavedCredentials();return l?(0,U.D)(this._loginService.login(l)).pipe((0,I.w)(()=>g.handle(this.injectToken(s)))):(this._authService.reset(),this._router.navigateByUrl("/login"),(0,A._)(()=>"Token expired"))}}intercept(s,g){return this._authService.isLoggedIn?g.handle(this.injectToken(s)).pipe((0,L.K)(l=>l instanceof u.UA&&401===l.status?this.handleUnauthorized(s,g):(0,A._)(()=>l))):g.handle(s)}}return r.\u0275fac=function(s){return new(s||r)(o.LFG(C.e),o.LFG(h.F0),o.LFG(j.r))},r.\u0275prov=o.Yz7({token:r,factory:r.\u0275fac}),r})(),B=(()=>{class r{}return r.\u0275fac=function(s){return new(s||r)},r.\u0275mod=o.oAB({type:r,bootstrap:[P]}),r.\u0275inj=o.cJS({providers:[f.uU,{provide:u.TP,useClass:F,multi:!0}],imports:[[n.b2,D,i.IJ,e.PW,c.Wr.register("ngsw-worker.js",{enabled:m.N.production,registrationStrategy:"registerWhenStable:30000"}),u.JF,a.ZX]]}),r})();m.N.production&&(0,o.G48)(),n.q6().bootstrapModule(B).catch(r=>console.error(r))}},p=>{p.O(0,[736],()=>p(p.s=6728)),p.O()}]);