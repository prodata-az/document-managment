"use strict";(self.webpackChunkdocument_management=self.webpackChunkdocument_management||[]).push([[971],{9971:(pe,f,g)=>{g.r(f),g.d(f,{LanguagesModule:()=>de});var u=g(6895),c=g(8988),A=g(2676),_=g(2340),e=g(4650),T=g(529);let d=(()=>{class t{constructor(n){this.httpClient=n}getDefaultLanguage(){return this.httpClient.get("defaultlanguage")}getLanguageById(n){return this.httpClient.get(`languageById/${n}/`)}getLanguages(){return this.httpClient.get("languages")}saveLanguages(n){return this.httpClient.post("languages",n)}deleteLanguages(n){return this.httpClient.delete(`languages/${n}`)}}return t.\u0275fac=function(n){return new(n||t)(e.LFG(T.eN))},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var b=g(5485),L=g(7185),v=g(6107),M=g(1676),l=g(671),p=g(1572),C=g(9383);function U(t,i){1&t&&(e.TgZ(0,"div",29),e._UZ(1,"mat-spinner"),e.qZA())}function I(t,i){1&t&&(e.TgZ(0,"th",30),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&t&&(e.xp6(1),e.hij(" ",e.lcZ(2,1,"ACTION")," "))}const N=function(t){return["/languages/manage",t]};function E(t,i){if(1&t){const n=e.EpF();e.TgZ(0,"td",31)(1,"button",32),e.O4$(),e.TgZ(2,"svg",33)(3,"g",34),e._UZ(4,"path",35),e.qZA()(),e.kcU(),e.TgZ(5,"span",12),e._uU(6),e.ALo(7,"translate"),e.qZA()(),e.TgZ(8,"button",36),e.NdJ("click",function(){const s=e.CHM(n).$implicit,m=e.oxw();return e.KtG(m.deleteLanguage(s))}),e.O4$(),e.TgZ(9,"svg",37)(10,"g",38),e._UZ(11,"path",39),e.qZA()(),e.kcU(),e.TgZ(12,"span",12),e._uU(13),e.ALo(14,"translate"),e.qZA()()()}if(2&t){const n=i.$implicit;e.xp6(1),e.Q6J("routerLink",e.VKq(7,N,n.id)),e.xp6(5),e.hij(" ",e.lcZ(7,3,"EDIT"),""),e.xp6(7),e.hij(" ",e.lcZ(14,5,"DELETE"),"")}}function w(t,i){1&t&&(e.TgZ(0,"th",40),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&t&&(e.xp6(1),e.hij(" ",e.lcZ(2,1,"IMAGE")," "))}function S(t,i){if(1&t&&(e.ynx(0),e._UZ(1,"img",44),e.ALo(2,"translate"),e.BQk()),2&t){const n=e.oxw().$implicit;e.xp6(1),e.s9C("alt",e.lcZ(2,2,"IMAGE")),e.Q6J("src",n.imageUrl,e.LSH)}}function k(t,i){1&t&&(e._UZ(0,"img",45),e.ALo(1,"translate")),2&t&&e.s9C("alt",e.lcZ(1,1,"IMAGE"))}function F(t,i){if(1&t&&(e.TgZ(0,"td",41),e.YNc(1,S,3,4,"ng-container",42),e.YNc(2,k,2,3,"ng-template",null,43,e.W1O),e.qZA()),2&t){const n=i.$implicit,a=e.MAs(3);e.xp6(1),e.Q6J("ngIf",n.imageUrl)("ngIfElse",a)}}function D(t,i){1&t&&(e.TgZ(0,"th",40),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&t&&(e.xp6(1),e.hij(" ",e.lcZ(2,1,"NAME")," "))}function y(t,i){if(1&t&&(e.TgZ(0,"td",41),e._uU(1),e.qZA()),2&t){const n=i.$implicit;e.xp6(1),e.hij(" ",n.name," ")}}function O(t,i){1&t&&(e.TgZ(0,"th",40),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&t&&(e.xp6(1),e.hij(" ",e.lcZ(2,1,"CODE")," "))}function G(t,i){if(1&t&&(e.TgZ(0,"td",41),e._uU(1),e.qZA()),2&t){const n=i.$implicit;e.xp6(1),e.hij(" ",n.code," ")}}function Y(t,i){1&t&&(e.TgZ(0,"th",40),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&t&&(e.xp6(1),e.hij(" ",e.lcZ(2,1,"ORDER")," "))}function J(t,i){if(1&t&&(e.TgZ(0,"td",41),e._uU(1),e.qZA()),2&t){const n=i.$implicit;e.xp6(1),e.hij(" ",n.order," ")}}function q(t,i){1&t&&e._UZ(0,"tr",46)}function Q(t,i){1&t&&e._UZ(0,"tr",47)}const j=function(){return["/languages/manage/addItem"]};let R=(()=>{class t extends A.H{constructor(n,a,o,s){super(),this.languagesService=n,this.commonDialogService=a,this.toastrService=o,this.translationService=s,this.isLoading=!1,this.languages=[],this.displayedColumns=["action","imageUrl","name","code","order"]}ngOnInit(){this.getLanguages()}getLanguages(){this.isLoading=!0,this.languagesService.getLanguages().subscribe(n=>{this.languages=n,this.languages.forEach(a=>{a.imageUrl=`${_.N.apiUrl}${a.imageUrl}`}),this.isLoading=!1},()=>this.isLoading=!1)}deleteLanguage(n){this.commonDialogService.deleteConformationDialog(`${this.translationService.getValue("ARE_YOU_SURE_YOU_WANT_TO_DELETE")}?`).subscribe(a=>{a&&(this.sub$.sink=this.languagesService.deleteLanguages(n.id).subscribe(()=>{this.toastrService.success(this.translationService.getValue("LANGUAGE_DELETED_SUCCESSFULLY")),this.getLanguages()}))})}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(d),e.Y36(b.V),e.Y36(L._W),e.Y36(v.D))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-languages-list"]],features:[e.qOj],decls:42,vars:16,consts:[["class","loading-shade",4,"ngIf"],[1,"content"],[1,"content-block"],[1,"block-header"],[1,"breadcrumb-main"],[1,"row"],[1,"col-6"],[1,"breadcrumb-title"],[1,"breadcrumb-list"],[1,"breadcrumb-item","bcrumb-1"],[1,"btn","btn-outline-success","btn-sm",3,"routerLink"],[3,"icon"],[1,"d-none","d-sm-inline"],[1,"col-xl-12","col-lg-12","col-md-12","col-sm-12"],[1,"card"],[1,"body"],[1,"table-responsive"],["mat-table","",1,"table","table-bordered","table-hover","grid-height",3,"dataSource"],["matColumnDef","action"],["class","table-column-200","mat-header-cell","",4,"matHeaderCellDef"],["class","table-column-200","mat-cell","",4,"matCellDef"],["matColumnDef","imageUrl"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","name"],["matColumnDef","code"],["matColumnDef","order"],["mat-header-row","",4,"matHeaderRowDef","matHeaderRowDefSticky"],["mat-row","",4,"matRowDef","matRowDefColumns"],[1,"loading-shade"],["mat-header-cell","",1,"table-column-200"],["mat-cell","",1,"table-column-200"],["type","button",1,"btn","btn-green","btn-success","btn-sm","m-r-5",3,"routerLink"],["width","16","height","16","viewBox","0 0 22 22","fill","none","xmlns","http://www.w3.org/2000/svg"],["id","Icon","stroke","white"],["id","Icon_2","d","M16.0137 1.82843C16.2763 1.56578 16.5881 1.35744 16.9313 1.2153C17.2744 1.07316 17.6422 1 18.0137 1C18.3851 1 18.7529 1.07316 19.0961 1.2153C19.4392 1.35744 19.751 1.56578 20.0137 1.82843C20.2763 2.09107 20.4847 2.40287 20.6268 2.74603C20.7689 3.0892 20.8421 3.45699 20.8421 3.82843C20.8421 4.19986 20.7689 4.56766 20.6268 4.91082C20.4847 5.25398 20.2763 5.56578 20.0137 5.82843L6.51367 19.3284L1.01367 20.8284L2.51367 15.3284L16.0137 1.82843Z","stroke","white","stroke-width","2","stroke-linecap","round","stroke-linejoin","round"],["type","button",1,"btn","btn-red","btn-danger","btn-sm",3,"click"],["width","16","height","16","viewBox","0 0 25 24","fill","none","xmlns","http://www.w3.org/2000/svg"],["id","trash-2","stroke","red"],["id","Icon","d","M3.6875 6H5.6875M5.6875 6H21.6875M5.6875 6V20C5.6875 20.5304 5.89821 21.0391 6.27329 21.4142C6.64836 21.7893 7.15707 22 7.6875 22H17.6875C18.2179 22 18.7266 21.7893 19.1017 21.4142C19.4768 21.0391 19.6875 20.5304 19.6875 20V6H5.6875ZM8.6875 6V4C8.6875 3.46957 8.89821 2.96086 9.27329 2.58579C9.64836 2.21071 10.1571 2 10.6875 2H14.6875C15.2179 2 15.7266 2.21071 16.1017 2.58579C16.4768 2.96086 16.6875 3.46957 16.6875 4V6M10.6875 11V17M14.6875 11V17","stroke-width","2","stroke-linecap","round","stroke-linejoin","round"],["mat-header-cell",""],["mat-cell",""],[4,"ngIf","ngIfElse"],["noImage",""],[1,"img-thumbnail","product-thumbnail","my-2",3,"src","alt"],["src","assets/images/no-preview.jpg",1,"img-thumbnail","product-thumbnail","my-2",3,"alt"],["mat-header-row",""],["mat-row",""]],template:function(n,a){1&n&&(e.YNc(0,U,2,0,"div",0),e.TgZ(1,"section",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"div",6)(7,"div",7)(8,"h2"),e._uU(9),e.ALo(10,"translate"),e.qZA()()(),e.TgZ(11,"div",6)(12,"ul",8)(13,"li",9)(14,"a",10),e._UZ(15,"app-feather-icons",11),e.TgZ(16,"span",12),e._uU(17),e.ALo(18,"translate"),e.qZA()()()()()()()(),e.TgZ(19,"div",5)(20,"div",13)(21,"div",14)(22,"div",15)(23,"div",16)(24,"table",17),e.ynx(25,18),e.YNc(26,I,3,3,"th",19),e.YNc(27,E,15,9,"td",20),e.BQk(),e.ynx(28,21),e.YNc(29,w,3,3,"th",22),e.YNc(30,F,4,2,"td",23),e.BQk(),e.ynx(31,24),e.YNc(32,D,3,3,"th",22),e.YNc(33,y,2,1,"td",23),e.BQk(),e.ynx(34,25),e.YNc(35,O,3,3,"th",22),e.YNc(36,G,2,1,"td",23),e.BQk(),e.ynx(37,26),e.YNc(38,Y,3,3,"th",22),e.YNc(39,J,2,1,"td",23),e.BQk(),e.YNc(40,q,1,0,"tr",27),e.YNc(41,Q,1,0,"tr",28),e.qZA()()()()()()()()),2&n&&(e.Q6J("ngIf",a.isLoading),e.xp6(9),e.Oqu(e.lcZ(10,11,"LANGUAGES")),e.xp6(5),e.Q6J("routerLink",e.DdM(15,j)),e.xp6(1),e.Tol("btn-success"),e.Q6J("icon","Plus"),e.xp6(2),e.hij(" ",e.lcZ(18,13,"ADD_LANGUAGE"),""),e.xp6(7),e.Q6J("dataSource",a.languages),e.xp6(16),e.Q6J("matHeaderRowDef",a.displayedColumns)("matHeaderRowDefSticky",!0),e.xp6(1),e.Q6J("matRowDefColumns",a.displayedColumns))},dependencies:[u.O5,c.rH,M.A,l.BZ,l.fO,l.as,l.w1,l.Dz,l.nj,l.ge,l.ev,l.XQ,l.Gk,p.Ou,C.X$],styles:[".product-thumbnail[_ngcontent-%COMP%]{max-height:30px}",".btn-green[_ngcontent-%COMP%]{\n      background: #32977F !important;\n    }\n    .btn-green[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{\n      color: #ffff !important;\n      width: 20px !important;\n      height: 20px !important;\n    }\n    .btn-green-color[_ngcontent-%COMP%]{\n      color: #ffff !important;\n    }\n    .btn-red[_ngcontent-%COMP%]{\n      border: 1px solid red !important;\n      background-color: white !important;\n      color: red !important;\n    }\n    \n    .btn-red[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{\n      color: red !important;\n      width: 20px !important;\n      height: 20px !important;\n    }"]}),t})();var h=g(319),r=g(4006);function H(t,i){1&t&&(e.TgZ(0,"div",37),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&t&&(e.xp6(1),e.hij(" ",e.lcZ(2,1,"REQUIRED_FIELD")," "))}function V(t,i){if(1&t&&(e.TgZ(0,"div"),e.YNc(1,H,3,3,"div",36),e.qZA()),2&t){const n=e.oxw(2);e.xp6(1),e.Q6J("ngIf",n.languageForm.get("languageName").hasError("required"))}}function $(t,i){1&t&&(e.TgZ(0,"div",37),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&t&&(e.xp6(1),e.hij(" ",e.lcZ(2,1,"REQUIRED_FIELD")," "))}function P(t,i){if(1&t&&(e.TgZ(0,"div"),e.YNc(1,$,3,3,"div",36),e.qZA()),2&t){const n=e.oxw(2);e.xp6(1),e.Q6J("ngIf",n.languageForm.get("order").hasError("required"))}}function B(t,i){if(1&t&&e._UZ(0,"img",38),2&t){const n=e.oxw(2);e.Q6J("src",n.languageImgSrc,e.LSH)}}function z(t,i){1&t&&e._UZ(0,"img",39)}function K(t,i){if(1&t){const n=e.EpF();e.TgZ(0,"a",40),e.NdJ("click",function(){e.CHM(n),e.oxw();const o=e.MAs(19);return e.KtG(o.click())}),e._uU(1),e.ALo(2,"translate"),e.qZA()}2&t&&(e.xp6(1),e.hij(" ",e.lcZ(2,1,"ADD"),""))}function X(t,i){if(1&t){const n=e.EpF();e.TgZ(0,"a",40),e.NdJ("click",function(){e.CHM(n),e.oxw();const o=e.MAs(19);return e.KtG(o.click())}),e._uU(1),e.ALo(2,"translate"),e.qZA()}2&t&&(e.xp6(1),e.hij(" ",e.lcZ(2,1,"CHANGE"),""))}function W(t,i){1&t&&(e.TgZ(0,"div",37),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&t&&(e.xp6(1),e.hij(" ",e.lcZ(2,1,"REQUIRED_FIELD")," "))}function ee(t,i){if(1&t&&(e.TgZ(0,"div"),e.YNc(1,W,3,3,"div",36),e.qZA()),2&t){const n=e.oxw().$implicit,a=e.oxw(2);e.xp6(1),e.Q6J("ngIf",a.languageForm.get(n).hasError("required"))}}function te(t,i){if(1&t&&(e.TgZ(0,"div",13)(1,"div",14)(2,"label"),e._uU(3),e.qZA(),e._UZ(4,"input",41),e.YNc(5,ee,2,1,"div",10),e.qZA()()),2&t){const n=i.$implicit,a=e.oxw(2);e.xp6(3),e.Oqu(a.defaultLanguage[n]),e.xp6(1),e.Q6J("formControlName",n),e.xp6(1),e.Q6J("ngIf",a.languageForm.get(n).touched&&a.languageForm.get(n).errors)}}const Z=function(){return["/languages"]};function ne(t,i){if(1&t){const n=e.EpF();e.TgZ(0,"div")(1,"form",12)(2,"div",4)(3,"div",13)(4,"div",14)(5,"label"),e._uU(6),e.ALo(7,"translate"),e.qZA(),e._UZ(8,"input",15),e.YNc(9,V,2,1,"div",10),e.qZA()(),e.TgZ(10,"div",16)(11,"div",14)(12,"label"),e._uU(13),e.ALo(14,"translate"),e.qZA(),e._UZ(15,"input",17),e.YNc(16,P,2,1,"div",10),e.qZA()(),e.TgZ(17,"div",16)(18,"input",18,19),e.NdJ("change",function(o){e.CHM(n);const s=e.oxw();return e.KtG(s.onProductImageSelect(o))}),e.ALo(20,"translate"),e.qZA(),e.YNc(21,B,1,1,"img",20),e.YNc(22,z,1,0,"img",21),e.YNc(23,K,3,3,"a",22),e.YNc(24,X,3,3,"a",22),e.qZA(),e.TgZ(25,"div",23)(26,"div",24)(27,"div",25)(28,"button",26),e.NdJ("click",function(){e.CHM(n);const o=e.oxw();return e.KtG(o.onLanguageSubmit())}),e.O4$(),e.TgZ(29,"svg",27)(30,"g",28),e._UZ(31,"path",29),e.qZA()(),e._uU(32),e.ALo(33,"translate"),e.qZA(),e.kcU(),e.TgZ(34,"button",30),e.O4$(),e.TgZ(35,"svg",31)(36,"g",32),e._UZ(37,"path",33),e.qZA()(),e._uU(38),e.ALo(39,"translate"),e.qZA()()()()(),e.kcU(),e.TgZ(40,"div",4),e.YNc(41,te,6,3,"div",34),e.qZA(),e.TgZ(42,"div",4)(43,"div",35)(44,"button",26),e.NdJ("click",function(){e.CHM(n);const o=e.oxw();return e.KtG(o.onLanguageSubmit())}),e.O4$(),e.TgZ(45,"svg",27)(46,"g",28),e._UZ(47,"path",29),e.qZA()(),e._uU(48),e.ALo(49,"translate"),e.qZA(),e.kcU(),e.TgZ(50,"button",30),e.O4$(),e.TgZ(51,"svg",31)(52,"g",32),e._UZ(53,"path",33),e.qZA()(),e._uU(54),e.ALo(55,"translate"),e.qZA()()()()()}if(2&t){const n=e.oxw();e.xp6(1),e.Q6J("formGroup",n.languageForm),e.xp6(5),e.Oqu(e.lcZ(7,17,"NAME")),e.xp6(3),e.Q6J("ngIf",n.languageForm.get("languageName").touched&&n.languageForm.get("languageName").errors),e.xp6(4),e.Oqu(e.lcZ(14,19,"ORDER")),e.xp6(3),e.Q6J("ngIf",n.languageForm.get("order").touched&&n.languageForm.get("order").errors),e.xp6(2),e.s9C("name",e.lcZ(20,21,"IMAGE")),e.xp6(3),e.Q6J("ngIf",n.languageImgSrc),e.xp6(1),e.Q6J("ngIf",!n.languageImgSrc),e.xp6(1),e.Q6J("ngIf",!n.languageImgSrc),e.xp6(1),e.Q6J("ngIf",n.languageImgSrc),e.xp6(8),e.hij(" ",e.lcZ(33,23,"SAVE")," "),e.xp6(2),e.Q6J("routerLink",e.DdM(31,Z)),e.xp6(4),e.hij(" ",e.lcZ(39,25,"CANCEL")," "),e.xp6(3),e.Q6J("ngForOf",n.fields),e.xp6(7),e.hij(" ",e.lcZ(49,27,"SAVE")," "),e.xp6(2),e.Q6J("routerLink",e.DdM(32,Z)),e.xp6(4),e.hij(" ",e.lcZ(55,29,"CANCEL")," ")}}function ae(t,i){1&t&&(e.TgZ(0,"div",42),e._UZ(1,"mat-spinner"),e.qZA())}let x=(()=>{class t{constructor(n,a,o,s,m){this.languagesService=n,this.route=a,this.toastrService=o,this.translationService=s,this.router=m,this.fields=[],this.languageImgSrc=null,this.isLanguageImageUpload=!1,this.isLoading=!1}ngOnInit(){this.getLanguageFromRoute()}getLanguageFromRoute(){this.route.data.subscribe(n=>{n.language&&(n.language.imageUrl&&(this.languageImgSrc=`${_.N.apiUrl}${n.language.imageUrl}`),this.selectedLanguage=n.language),this.getDefaultLanguage()})}getDefaultLanguage(){this.isLoading=!0,this.languagesService.getDefaultLanguage().subscribe(n=>{this.isLoading=!1,this.defaultLanguage=n;const a={};a.languageName=new r.NI(this.selectedLanguage?.name,[r.kI.required]),a.order=new r.NI(this.selectedLanguage?.order,[r.kI.required]),a.isrtl=new r.NI(this.selectedLanguage?.isrtl??!1),a.id=new r.NI(this.selectedLanguage?.id??""),Object.keys(n).forEach(o=>{a[o]=new r.NI("",[r.kI.required]),this.fields.push(o)}),this.languageForm=new r.cw(a),this.languageForm.patchValue(this.selectedLanguage?JSON.parse(this.selectedLanguage.codes):this.defaultLanguage)},()=>this.isLoading=!1)}onProductImageSelect(n){const a=n.target.files[0];if(!a||null==a.type.match(/image\/*/))return;const s=new FileReader;s.readAsDataURL(a),s.onload=m=>{this.languageImgSrc=s.result,this.isLanguageImageUpload=!0,n.target.value=""}}onLanguageSubmit(){if(this.languageForm.invalid)return this.toastrService.error(this.translationService.getValue("PLEASE_ENTER_PROPER_DATA")),void this.languageForm.markAllAsTouched();if(!this.selectedLanguage&&!this.isLanguageImageUpload)return void this.toastrService.error(this.translationService.getValue("ADD_IMAGE"));let n={};n.name=this.languageForm.get("languageName").value,n.id=this.languageForm.get("id").value,n.order=this.languageForm.get("order").value,n.code=this.languageForm.get("LANGUAGE").value,n.isrtl=this.languageForm.get("isrtl").value,n.isLanguageImageUpload=this.isLanguageImageUpload,this.isLanguageImageUpload&&(n.languageImgSrc=this.languageImgSrc);let a={};Object.keys(this.defaultLanguage).forEach(o=>{try{a[o]=this.languageForm.get(o).value}catch{console.log(o)}}),n.codes=a,this.isLoading=!0,this.languagesService.saveLanguages(n).subscribe(o=>{this.toastrService.success(this.translationService.getValue("LANGUAGE_SAVED_SUCCESSFULLY")),this.router.navigate(["/languages"])},()=>this.isLoading=!1)}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(d),e.Y36(c.gz),e.Y36(L._W),e.Y36(v.D),e.Y36(c.F0))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-manage-language"]],decls:16,vars:5,consts:[[1,"content"],[1,"content-block"],[1,"block-header"],[1,"breadcrumb-main"],[1,"row"],[1,"col-6"],[1,"breadcrumb-title"],[1,"col-xl-12","col-lg-12","col-md-12","col-sm-12"],[1,"card"],[1,"body"],[4,"ngIf"],["class","loading-shade",4,"ngIf"],[3,"formGroup"],[1,"col-md-4"],[1,"form-group"],["type","text","formControlName","languageName",1,"form-control"],[1,"col-md-1"],["type","number","formControlName","order",1,"form-control"],["hidden","","name","logo","type","file","fxFlex","30",3,"name","change"],["fileInput",""],["class","full-width img-fluid",3,"src",4,"ngIf"],["class","full-width img-fluid","src","assets/images/no-preview.jpg",4,"ngIf"],["type","button","class","m-t-5",3,"click",4,"ngIf"],[1,"col-md-5"],[1,"row","float-right"],[1,"mr-5"],["type","button",1,"btn","btn-green","btn-success","btn-sm","m-r-10",3,"click"],["width","16","height","16","viewBox","0 0 24 24","fill","none","xmlns","http://www.w3.org/2000/svg"],["id","check-circle","stroke","white"],["id","Icon","d","M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.709 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18455 2.99721 7.13631 4.39828 5.49706C5.79935 3.85781 7.69279 2.71537 9.79619 2.24013C11.8996 1.7649 14.1003 1.98232 16.07 2.85999M22 3.99999L12 14.01L9.00001 11.01","stroke","white","stroke-width","2","stroke-linecap","round","stroke-linejoin","round"],["type","button",1,"btn","btn-red","btn-danger","btn-sm",3,"routerLink"],["width","16","height","16","viewBox","0 0 25 24","fill","none","xmlns","http://www.w3.org/2000/svg"],["id","trash-2","stroke","red"],["id","Icon","d","M3.6875 6H5.6875M5.6875 6H21.6875M5.6875 6V20C5.6875 20.5304 5.89821 21.0391 6.27329 21.4142C6.64836 21.7893 7.15707 22 7.6875 22H17.6875C18.2179 22 18.7266 21.7893 19.1017 21.4142C19.4768 21.0391 19.6875 20.5304 19.6875 20V6H5.6875ZM8.6875 6V4C8.6875 3.46957 8.89821 2.96086 9.27329 2.58579C9.64836 2.21071 10.1571 2 10.6875 2H14.6875C15.2179 2 15.7266 2.21071 16.1017 2.58579C16.4768 2.96086 16.6875 3.46957 16.6875 4V6M10.6875 11V17M14.6875 11V17","stroke-width","2","stroke-linecap","round","stroke-linejoin","round"],["class","col-md-4",4,"ngFor","ngForOf"],[1,"col-md-12","mt-2"],["class","text-danger",4,"ngIf"],[1,"text-danger"],[1,"full-width","img-fluid",3,"src"],["src","assets/images/no-preview.jpg",1,"full-width","img-fluid"],["type","button",1,"m-t-5",3,"click"],["type","text",1,"form-control",3,"formControlName"],[1,"loading-shade"]],template:function(n,a){1&n&&(e.TgZ(0,"section",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"div",6)(7,"h2"),e._uU(8),e.ALo(9,"translate"),e.qZA()()()()()(),e.TgZ(10,"div",4)(11,"div",7)(12,"div",8)(13,"div",9),e.YNc(14,ne,56,33,"div",10),e.qZA()()()()()(),e.YNc(15,ae,2,0,"div",11)),2&n&&(e.xp6(8),e.Oqu(e.lcZ(9,3,"MANAGE_LANGUAGE")),e.xp6(6),e.Q6J("ngIf",a.languageForm),e.xp6(1),e.Q6J("ngIf",a.isLoading))},dependencies:[u.sg,u.O5,r._Y,r.Fj,r.wV,r.JJ,r.JL,r.sg,r.u,c.rH,p.Ou,C.X$],styles:[".btn-green[_ngcontent-%COMP%]{\n      background: #32977F !important;\n    }\n    .btn-green[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{\n      color: #ffff !important;\n      width: 20px !important;\n      height: 20px !important;\n    }\n    .btn-green-color[_ngcontent-%COMP%]{\n      color: #ffff !important;\n    }\n    .btn-red[_ngcontent-%COMP%]{\n      border: 1px solid red !important;\n      background-color: white !important;\n      color: red !important;\n    }\n    \n    .btn-red[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{\n      color: red !important;\n      width: 20px !important;\n      height: 20px !important;\n    }"]}),t})();var ie=g(9646),oe=g(5698),ge=g(6099);const se=[{path:"",component:R,canActivate:[h.a],data:{claimType:"SETTING_MANAGE_LANGUAGE"}},{path:"add",component:x,data:{claimType:"SETTING_MANAGE_LANGUAGE"},canActivate:[h.a]},{path:"manage/:id",component:x,resolve:{language:(()=>{class t{constructor(n,a){this.languageService=n,this.router=a}resolve(n,a){const o=n.paramMap.get("id");return"addItem"===o?null:this.languageService.getLanguageById(o).pipe((0,oe.q)(1),(0,ge.z)(s=>s?(0,ie.of)(s):(this.router.navigate(["/languages"]),null)))}}return t.\u0275fac=function(n){return new(n||t)(e.LFG(d),e.LFG(c.F0))},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},data:{claimType:"SETTING_MANAGE_LANGUAGE"},canActivate:[h.a]}];let le=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[c.Bz.forChild(se),c.Bz]}),t})();var ce=g(3417),ue=g(3546),me=g(6709);let de=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[u.ez,r.UX,le,ce.m,l.p0,ue.QW,me.p9,p.Cq]}),t})()}}]);