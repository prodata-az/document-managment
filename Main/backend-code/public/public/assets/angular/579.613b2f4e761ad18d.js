"use strict";(self.webpackChunkdocument_management=self.webpackChunkdocument_management||[]).push([[579],{5579:(qt,E,a)=>{a.r(E),a.d(E,{ReminderModule:()=>bt});var p=a(6895),h=a(8988),T=a(8739),_=a(6308),O=a(4702),j=a(7579),w=a(6451),$=a(8372),k=a(1884),H=a(8505),F=a(2676),d=a(4006),R=a(4598),u=a(2851),f=a(1357),e=a(4650),b=a(3037),y=a(690),N=a(7185),q=a(6107),S=a(6709),v=a(4385),L=a(3238),x=a(1948),g=a(5415),U=a(9383);function G(r,i){1&r&&(e.TgZ(0,"div",37),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&r&&(e.xp6(1),e.hij(" ",e.lcZ(2,1,"SUBJECT_IS_REQUIRED")," "))}function V(r,i){1&r&&(e.TgZ(0,"div",37),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&r&&(e.xp6(1),e.hij(" ",e.lcZ(2,1,"MESSAGE_IS_REQUIRED")," "))}function B(r,i){if(1&r&&(e.TgZ(0,"span"),e._uU(1),e.qZA()),2&r){const t=e.oxw();e.xp6(1),e.AsE(" ",t.selectedUsers[0].firstName," ",t.selectedUsers[0].lastName," ")}}function W(r,i){if(1&r&&(e.TgZ(0,"span",38),e._uU(1),e.qZA()),2&r){const t=e.oxw();e.xp6(1),e.AsE(" (+",t.selectedUsers.length-1," ",2===t.selectedUsers.length?"other":"others",") ")}}function z(r,i){if(1&r&&(e.TgZ(0,"mat-option",39),e._uU(1),e.qZA()),2&r){const t=i.$implicit;e.Q6J("value",t),e.xp6(1),e.AsE("",t.firstName," ",t.lastName,"")}}function P(r,i){if(1&r&&(e.TgZ(0,"option",45),e._uU(1),e.qZA()),2&r){const t=i.$implicit;e.Q6J("value",null==t?null:t.id),e.xp6(1),e.hij(" ",null==t?null:t.name," ")}}function K(r,i){1&r&&(e.TgZ(0,"div",37),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&r&&(e.xp6(1),e.hij(" ",e.lcZ(2,1,"FREQUENCY_IS_REQUIRED")," "))}function X(r,i){if(1&r){const t=e.EpF();e.TgZ(0,"div",4)(1,"div",40)(2,"label",41),e._uU(3),e.ALo(4,"translate"),e.qZA(),e.TgZ(5,"select",42),e.NdJ("change",function(){e.CHM(t);const o=e.oxw();return e.KtG(o.onFrequencyChange())}),e.TgZ(6,"option",43),e._uU(7),e.ALo(8,"translate"),e.qZA(),e.YNc(9,P,2,2,"option",44),e.qZA(),e.YNc(10,K,3,3,"div",14),e.qZA()()}if(2&r){const t=e.oxw();let n;e.xp6(3),e.hij(" ",e.lcZ(4,4,"FREQUENCY"),""),e.xp6(4),e.hij("--",e.lcZ(8,6,"NONE"),"--"),e.xp6(2),e.Q6J("ngForOf",t.reminderFrequencies),e.xp6(1),e.Q6J("ngIf",null==(n=t.reminderForm.get("frequency"))?null:n.hasError("required"))}}function ee(r,i){if(1&r&&(e.TgZ(0,"div",49),e.ynx(1,50),e.TgZ(2,"mat-checkbox",51),e._uU(3),e.qZA(),e.BQk(),e.qZA()),2&r){const t=i.$implicit,n=i.index;e.xp6(1),e.Q6J("formGroupName",n),e.xp6(2),e.hij(" ",t.get("name").value," ")}}function te(r,i){if(1&r&&(e.TgZ(0,"div")(1,"label",46),e._uU(2),e.ALo(3,"translate"),e.qZA(),e.TgZ(4,"div",47),e.YNc(5,ee,4,2,"div",48),e.qZA()()),2&r){const t=e.oxw(2);e.xp6(2),e.Oqu(e.lcZ(3,2,"WEEK_DAYS")),e.xp6(3),e.Q6J("ngForOf",t.dailyRemindersArray.controls)}}function re(r,i){if(1&r&&(e.TgZ(0,"mat-radio-button",56),e._uU(1),e.qZA()),2&r){const t=i.$implicit;e.Q6J("value",t.id),e.xp6(1),e.Oqu(t.name)}}function ne(r,i){if(1&r&&(e.TgZ(0,"div")(1,"label",52),e._uU(2),e.ALo(3,"translate"),e.qZA(),e.TgZ(4,"div",53)(5,"mat-radio-group",54),e.YNc(6,re,2,2,"mat-radio-button",55),e.qZA()()()),2&r){const t=e.oxw(2);e.xp6(2),e.Oqu(e.lcZ(3,2,"WEEK_DAYS")),e.xp6(4),e.Q6J("ngForOf",t.dayOfWeek)}}function ie(r,i){if(1&r&&(e.TgZ(0,"mat-option",45),e._uU(1),e.qZA()),2&r){const t=i.$implicit;e.Q6J("value",t.id),e.xp6(1),e.hij(" ",t.name," ")}}function oe(r,i){if(1&r&&(e.TgZ(0,"mat-option",45),e._uU(1),e.qZA()),2&r){const t=i.$implicit;e.Q6J("value",t),e.xp6(1),e.hij(" ",t," ")}}function ae(r,i){1&r&&(e.TgZ(0,"div")(1,"div",37),e._uU(2),e.ALo(3,"translate"),e.qZA()()),2&r&&(e.xp6(2),e.hij(" ",e.lcZ(3,1,"PLEASE_SELECT_VALID_DAY")," "))}function se(r,i){if(1&r){const t=e.EpF();e.TgZ(0,"tr"),e.ynx(1,50),e.TgZ(2,"td"),e._uU(3),e.qZA(),e.TgZ(4,"td")(5,"mat-select",62),e.NdJ("change",function(){const s=e.CHM(t).$implicit,l=e.oxw(3);return e.KtG(l.onDateChange(s))}),e.YNc(6,ie,2,2,"mat-option",44),e.qZA()(),e.TgZ(7,"td")(8,"mat-select",63),e.NdJ("change",function(){const s=e.CHM(t).$implicit,l=e.oxw(3);return e.KtG(l.onDateChange(s))}),e.YNc(9,oe,2,2,"mat-option",44),e.qZA(),e.YNc(10,ae,4,3,"div",22),e.qZA(),e.BQk(),e.qZA()}if(2&r){const t=i.$implicit,n=i.index,o=e.oxw(3);e.xp6(1),e.Q6J("formGroupName",n),e.xp6(2),e.hij(" ",t.get("name").value,""),e.xp6(3),e.Q6J("ngForOf",t.get("monthValues").value),e.xp6(3),e.Q6J("ngForOf",o.days),e.xp6(1),e.Q6J("ngIf",t.get("day").touched&&t.hasError("invalidDate"))}}function de(r,i){if(1&r&&(e.TgZ(0,"div")(1,"label",57),e._uU(2),e.ALo(3,"translate"),e.qZA(),e.TgZ(4,"div",58)(5,"table",59)(6,"thead")(7,"tr"),e._UZ(8,"th"),e.TgZ(9,"th"),e._uU(10),e.ALo(11,"translate"),e.qZA(),e.TgZ(12,"th"),e._uU(13),e.ALo(14,"translate"),e.qZA()()(),e.TgZ(15,"tbody",60),e.YNc(16,se,11,5,"tr",61),e.qZA()()()()),2&r){const t=e.oxw(2);e.xp6(2),e.Oqu(e.lcZ(3,4,"SELECT_QUARTER_DATE")),e.xp6(8),e.Oqu(e.lcZ(11,6,"MONTH")),e.xp6(3),e.Oqu(e.lcZ(14,8,"DAY")),e.xp6(3),e.Q6J("ngForOf",t.quarterlyRemindersArray.controls)}}function me(r,i){if(1&r&&(e.TgZ(0,"mat-option",45),e._uU(1),e.qZA()),2&r){const t=i.$implicit;e.Q6J("value",t.id),e.xp6(1),e.hij(" ",t.name," ")}}function le(r,i){if(1&r&&(e.TgZ(0,"mat-option",45),e._uU(1),e.qZA()),2&r){const t=i.$implicit;e.Q6J("value",t),e.xp6(1),e.hij(" ",t," ")}}function ce(r,i){1&r&&(e.TgZ(0,"div")(1,"div",37),e._uU(2),e.ALo(3,"translate"),e.qZA()()),2&r&&(e.xp6(2),e.hij(" ",e.lcZ(3,1,"PLEASE_SELECT_VALID_DAY")," "))}function ue(r,i){if(1&r){const t=e.EpF();e.TgZ(0,"tr"),e.ynx(1,50),e.TgZ(2,"td"),e._uU(3),e.qZA(),e.TgZ(4,"td")(5,"mat-select",62),e.NdJ("change",function(){const s=e.CHM(t).$implicit,l=e.oxw(3);return e.KtG(l.onDateChange(s))}),e.YNc(6,me,2,2,"mat-option",44),e.qZA()(),e.TgZ(7,"td")(8,"mat-select",63),e.NdJ("change",function(){const s=e.CHM(t).$implicit,l=e.oxw(3);return e.KtG(l.onDateChange(s))}),e.YNc(9,le,2,2,"mat-option",44),e.qZA(),e.YNc(10,ce,4,3,"div",22),e.qZA(),e.BQk(),e.qZA()}if(2&r){const t=i.$implicit,n=i.index,o=e.oxw(3);e.xp6(1),e.Q6J("formGroupName",n),e.xp6(2),e.Oqu(t.get("name").value),e.xp6(3),e.Q6J("ngForOf",t.get("monthValues").value),e.xp6(3),e.Q6J("ngForOf",o.days),e.xp6(1),e.Q6J("ngIf",t.get("day").touched&&t.hasError("invalidDate"))}}function he(r,i){if(1&r&&(e.TgZ(0,"div")(1,"label",64),e._uU(2),e.ALo(3,"translate"),e.qZA(),e.TgZ(4,"div",65)(5,"table",59)(6,"thead")(7,"tr"),e._UZ(8,"th"),e.TgZ(9,"th"),e._uU(10),e.ALo(11,"translate"),e.qZA(),e.TgZ(12,"th"),e._uU(13),e.ALo(14,"translate"),e.qZA()()(),e.TgZ(15,"tbody",66),e.YNc(16,ue,11,5,"tr",61),e.qZA()()()()),2&r){const t=e.oxw(2);e.xp6(2),e.Oqu(e.lcZ(3,4,"SELECT_DATE")),e.xp6(8),e.Oqu(e.lcZ(11,6,"MONTH")),e.xp6(3),e.Oqu(e.lcZ(14,8,"DAY")),e.xp6(3),e.Q6J("ngForOf",t.halfYearlyRemindersArray.controls)}}function pe(r,i){if(1&r&&(e.TgZ(0,"div",4)(1,"div",11),e.YNc(2,te,6,4,"div",22),e.YNc(3,ne,7,4,"div",22),e.YNc(4,de,17,10,"div",22),e.YNc(5,he,17,10,"div",22),e.qZA()()),2&r){const t=e.oxw();e.xp6(2),e.Q6J("ngIf","0"==t.reminderForm.get("frequency").value),e.xp6(1),e.Q6J("ngIf","1"==t.reminderForm.get("frequency").value),e.xp6(1),e.Q6J("ngIf","3"==t.reminderForm.get("frequency").value),e.xp6(1),e.Q6J("ngIf","4"==t.reminderForm.get("frequency").value)}}function fe(r,i){1&r&&(e.TgZ(0,"div",37),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&r&&(e.xp6(1),e.hij(" ",e.lcZ(2,1,"DATE_IS_REQUIRED")," "))}function ge(r,i){1&r&&(e.TgZ(0,"div",37),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&r&&(e.xp6(1),e.hij(" ",e.lcZ(2,1,"START_DATE_SHOULD_BE_GREATER_THEN_CURRENT_DATE_TIME")," "))}function _e(r,i){if(1&r&&(e.TgZ(0,"div",40)(1,"label",41),e._uU(2),e.ALo(3,"translate"),e.qZA(),e._UZ(4,"input",67)(5,"owl-date-time",null,68),e.YNc(7,fe,3,3,"div",14),e.YNc(8,ge,3,3,"div",14),e.qZA()),2&r){const t=e.MAs(6),n=e.oxw();e.xp6(2),e.hij(" ",e.lcZ(3,6,"REMINDER_DATE"),""),e.xp6(2),e.Q6J("owlDateTimeTrigger",t)("min",n.minDate)("owlDateTime",t),e.xp6(3),e.Q6J("ngIf",n.reminderForm.get("startDate").touched&&n.reminderForm.get("startDate").hasError("required")),e.xp6(1),e.Q6J("ngIf",n.reminderForm.get("startDate").touched&&n.reminderForm.get("startDate").hasError("owlDateTimeMin"))}}function Re(r,i){1&r&&(e.TgZ(0,"div",37),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&r&&(e.xp6(1),e.hij(" ",e.lcZ(2,1,"START_DATE_IS_REQUIRED")," "))}function ve(r,i){1&r&&(e.TgZ(0,"div",37),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&r&&(e.xp6(1),e.hij(" ",e.lcZ(2,1,"START_DATE_SHOULD_BE_GREATER_THEN_CURRENT_DATE_TIME")," "))}function Ae(r,i){if(1&r&&(e.TgZ(0,"div",40)(1,"label",41),e._uU(2),e.ALo(3,"translate"),e.qZA(),e._UZ(4,"input",69)(5,"owl-date-time",null,70),e.YNc(7,Re,3,3,"div",14),e.YNc(8,ve,3,3,"div",14),e.qZA()),2&r){const t=e.MAs(6),n=e.oxw();let o;e.xp6(2),e.hij(" ",e.lcZ(3,6,"REMINDER_START_DATE"),""),e.xp6(2),e.Q6J("owlDateTimeTrigger",t)("min",n.minDate)("owlDateTime",t),e.xp6(3),e.Q6J("ngIf",n.reminderForm.get("startDate").touched&&n.reminderForm.get("startDate").hasError("required")),e.xp6(1),e.Q6J("ngIf",n.reminderForm.get("startDate").touched&&(null==(o=n.reminderForm.get("startDate"))?null:o.hasError("owlDateTimeMin")))}}function Te(r,i){if(1&r&&(e.TgZ(0,"div",40)(1,"label",41),e._uU(2),e.ALo(3,"translate"),e.qZA(),e._UZ(4,"input",71)(5,"owl-date-time",null,72),e.qZA()),2&r){const t=e.MAs(6);e.xp6(2),e.Oqu(e.lcZ(3,3,"REMINDER_END_DATE")),e.xp6(2),e.Q6J("owlDateTimeTrigger",t)("owlDateTime",t)}}const ye=function(){return["/reminders"]};let Z=(()=>{class r extends F.H{get dailyRemindersArray(){return this.reminderForm.get("dailyReminders")}get quarterlyRemindersArray(){return this.reminderForm.get("quarterlyReminders")}get halfYearlyRemindersArray(){return this.reminderForm.get("halfYearlyReminders")}constructor(t,n,o,s,l,c,Nt){super(),this.fb=t,this.reminderService=n,this.commonService=o,this.toastrService=s,this.route=l,this.activatedRoute=c,this.translationService=Nt,this.reminderFrequencies=[],this.minDate=new Date,this.users=[],this.selectedUsers=[],this.isLoading=!1,this.showSpinners=!0,this.showSeconds=!1,this.touchUi=!1,this.stepHour=1,this.stepMinute=1,this.stepSecond=1,this.dayOfWeek=[{id:0,name:"Sunday"},{id:1,name:"Monday"},{id:2,name:"Tuesday"},{id:3,name:"Wednesday"},{id:4,name:"Thursday"},{id:5,name:"Friday"},{id:6,name:"Saturday"}],this.months=[{id:1,name:"January"},{id:2,name:"February"},{id:3,name:"March"},{id:4,name:"April"},{id:5,name:"May"},{id:6,name:"June"},{id:7,name:"July"},{id:8,name:"August"},{id:9,name:"September"},{id:10,name:"October"},{id:11,name:"November"},{id:12,name:"December"}],this.days=[]}ngOnInit(){for(let t=1;t<=31;t++)this.days.push(t);this.getReminderFrequency(),this.createReminderForm(),this.sub$.sink=this.activatedRoute.data.subscribe(t=>{t.reminder&&(this.reminder={...t.reminder},this.reminder.dailyReminders=this.reminder.dailyReminders.sort((n,o)=>n.dayOfWeek-o.dayOfWeek),this.reminder.quarterlyReminders=this.reminder.quarterlyReminders.sort((n,o)=>n.quarter-o.quarter),this.reminder.halfYearlyReminders=this.reminder.halfYearlyReminders.sort((n,o)=>n.quarter-o.quarter),this.reminderForm.patchValue(this.reminder),this.onFrequencyChange(),this.reminderForm.patchValue(this.reminder),this.reminderForm.get("isRepeated").value&&this.reminderForm.get("frequency").setValidators([d.kI.required]))}),this.getUsers()}getReminderFrequency(){this.sub$.sink=this.commonService.getReminderFrequency().subscribe(t=>this.reminderFrequencies=[...t])}createReminderForm(){this.reminderForm=this.fb.group({id:[""],subject:["",[d.kI.required]],message:["",[d.kI.required]],frequency:[""],isRepeated:[!1],isEmailNotification:[!1],startDate:[new Date,[d.kI.required]],endDate:[null],dayOfWeek:[2],documentId:[null]})}checkData(t){t.checked?this.reminderForm.get("frequency").setValidators([d.kI.required]):(this.reminderForm.get("frequency").setValidators([]),this.reminderForm.get("frequency").updateValueAndValidity()),this.reminderForm.markAllAsTouched()}createReminder(){if(!this.reminderForm.valid)return void this.reminderForm.markAllAsTouched();const t=this.reminderForm.value;t.reminderUsers=this.selectedUsers.map(n=>({reminderId:t.id,userId:n.id})),t.isRepeated||(t.dailyReminders=[],t.quarterlyReminders=[],t.halfYearlyReminders=[]),this.reminder?(t.dailyReminders&&(t.dailyReminders=t.dailyReminders.map(n=>(n.reminderId=this.reminder.id,n))),t.quarterlyReminders&&(t.quarterlyReminders=t.quarterlyReminders.map(n=>(n.reminderId=this.reminder.id,n))),t.halfYearlyReminders&&(t.halfYearlyReminders=t.halfYearlyReminders.map(n=>(n.reminderId=this.reminder.id,n))),this.isLoading=!0,this.sub$.sink=this.reminderService.updateReminder(t).subscribe(n=>{this.toastrService.success(this.translationService.getValue("REMINDER_UPDATED_SUCCESSFULLY")),this.route.navigate(["/reminders"]),this.isLoading=!1},()=>this.isLoading=!1)):(this.isLoading=!0,this.sub$.sink=this.reminderService.addReminder(t).subscribe(n=>{this.toastrService.success(this.translationService.getValue("REMINDER_CREATED_SUCCESSFULLY")),this.route.navigate(["/reminders"]),this.isLoading=!1},()=>this.isLoading=!1))}getUsers(){this.sub$.sink=this.commonService.getUsersForDropdown().subscribe(t=>{if(this.users=t,this.reminder){const n=this.reminder.reminderUsers.map(o=>o.userId);this.selectedUsers=this.users.filter(o=>n.indexOf(o.id)>=0)}})}onFrequencyChange(){let t=this.reminderForm.get("frequency").value;t=0==t?"0":t,t==R.D.Daily.toString()?(this.removeQuarterlyReminders(),this.removeHalfYearlyReminders(),this.addDailReminders(),this.reminderForm.get("dayOfWeek").setValue("")):t==R.D.Weekly.toString()?(this.removeDailReminders(),this.removeQuarterlyReminders(),this.removeHalfYearlyReminders(),this.reminderForm.get("dayOfWeek").setValue(2)):t==R.D.Quarterly.toString()?(this.removeDailReminders(),this.removeHalfYearlyReminders(),this.addQuarterlyReminders(),this.reminderForm.get("dayOfWeek").setValue("")):t==R.D.HalfYearly.toString()?(this.removeDailReminders(),this.removeQuarterlyReminders(),this.addHalfYearlyReminders(),this.reminderForm.get("dayOfWeek").setValue("")):(this.removeDailReminders(),this.removeQuarterlyReminders(),this.removeHalfYearlyReminders(),this.reminderForm.get("dayOfWeek").setValue(""))}addDailReminders(){if(!this.reminderForm.contains("dailyReminders")){const t=this.fb.array([]);t.push(this.createDailyReminderFormGroup(u.e.Sunday)),t.push(this.createDailyReminderFormGroup(u.e.Monday)),t.push(this.createDailyReminderFormGroup(u.e.Tuesday)),t.push(this.createDailyReminderFormGroup(u.e.Wednesday)),t.push(this.createDailyReminderFormGroup(u.e.Thursday)),t.push(this.createDailyReminderFormGroup(u.e.Friday)),t.push(this.createDailyReminderFormGroup(u.e.Saturday)),this.reminderForm.addControl("dailyReminders",t)}}addQuarterlyReminders(){if(!this.reminderForm.contains("quarterlyReminders")){const t=this.fb.array([]),n=this.months.filter(c=>[1,2,3].indexOf(c.id)>=0),o=this.months.filter(c=>[4,5,6].indexOf(c.id)>=0),s=this.months.filter(c=>[7,8,9].indexOf(c.id)>=0),l=this.months.filter(c=>[10,11,12].indexOf(c.id)>=0);t.push(this.createQuarterlyReminderFormGroup(f.y.Quarter1,"Jan - Mar",n)),t.push(this.createQuarterlyReminderFormGroup(f.y.Quarter2,"Apr - Jun",o)),t.push(this.createQuarterlyReminderFormGroup(f.y.Quarter3,"Jul - Sept",s)),t.push(this.createQuarterlyReminderFormGroup(f.y.Quarter4,"Oct - Dec",l)),this.reminderForm.addControl("quarterlyReminders",t)}}addHalfYearlyReminders(){if(!this.reminderForm.contains("halfYearlyReminders")){const t=this.fb.array([]),n=this.months.filter(s=>[1,2,3,4,5,6].indexOf(s.id)>=0),o=this.months.filter(s=>[7,8,9,10,11,13].indexOf(s.id)>=0);t.push(this.createHalfYearlyReminderFormGroup(f.y.Quarter1,"Jan - Jun",n)),t.push(this.createHalfYearlyReminderFormGroup(f.y.Quarter2,"Jul - Dec",o)),this.reminderForm.addControl("halfYearlyReminders",t)}}removeDailReminders(){this.reminderForm.contains("dailyReminders")&&this.reminderForm.removeControl("dailyReminders")}removeQuarterlyReminders(){this.reminderForm.contains("quarterlyReminders")&&this.reminderForm.removeControl("quarterlyReminders")}removeHalfYearlyReminders(){this.reminderForm.contains("halfYearlyReminders")&&this.reminderForm.removeControl("halfYearlyReminders")}createDailyReminderFormGroup(t){return this.fb.group({id:[""],reminderId:[""],dayOfWeek:[t],isActive:[!0],name:[u.e[t]]})}createQuarterlyReminderFormGroup(t,n,o){return this.fb.group({id:[""],reminderId:[""],quarter:[t],day:[this.getCurrentDay()],month:[o[0]],name:[n],monthValues:[o]})}createHalfYearlyReminderFormGroup(t,n,o){return this.fb.group({id:[""],reminderId:[""],quarter:[t],day:[this.getCurrentDay()],month:[o[0]],name:[n],monthValues:[o]})}getCurrentDay(){return(new Date).getDate()}onDateChange(t){const n=t.get("day").value,o=t.get("month").value;n>new Date((new Date).getFullYear(),Number.parseInt(o),0).getDate()&&(t.setErrors({invalidDate:"Invalid Date"}),t.markAllAsTouched())}}return r.\u0275fac=function(t){return new(t||r)(e.Y36(d.QS),e.Y36(b.Z),e.Y36(y.v),e.Y36(N._W),e.Y36(h.F0),e.Y36(h.gz),e.Y36(q.D))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-add-reminder"]],features:[e.qOj],decls:67,vars:41,consts:[[1,"content"],[1,"content-block"],[1,"block-header"],[1,"breadcrumb-main"],[1,"row"],[1,"col-6"],[1,"breadcrumb-title"],[1,"col-xl-12","col-lg-12","col-md-12","col-sm-12"],[1,"card"],[1,"body","table-responsive"],[3,"formGroup"],[1,"col-md-12"],["for","subject",1,"form-label"],["formControlName","subject","type","text","id","subject",1,"form-control"],["class","text-danger",4,"ngIf"],["for","message",1,"form-label"],["formControlName","message","id","message","cols","30",1,"form-control"],[1,"col-md-2"],["color","primary","formControlName","isRepeated",3,"change"],["color","primary","formControlName","isEmailNotification"],[1,"col-md-4"],["multiple","",1,"form-select",3,"placeholder","value","valueChange"],[4,"ngIf"],["class","example-additional-selection",4,"ngIf"],["color","primary",3,"value",4,"ngFor","ngForOf"],["class","row",4,"ngIf"],["class","col-md-6",4,"ngIf"],["class"," col-md-6",4,"ngIf"],[1,"m-t-2","col-md-12"],["type","submit",1,"btn","btn-green","btn-success","btn-sm","m-r-10",3,"click"],["width","16","height","16","viewBox","0 0 24 24","fill","none","xmlns","http://www.w3.org/2000/svg"],["id","check-circle","stroke","white"],["id","Icon","d","M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.709 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18455 2.99721 7.13631 4.39828 5.49706C5.79935 3.85781 7.69279 2.71537 9.79619 2.24013C11.8996 1.7649 14.1003 1.98232 16.07 2.85999M22 3.99999L12 14.01L9.00001 11.01","stroke","white","stroke-width","2","stroke-linecap","round","stroke-linejoin","round"],["type","button",1,"btn","btn-red","btn-danger","btn-sm",3,"routerLink"],["width","16","height","16","viewBox","0 0 25 24","fill","none","xmlns","http://www.w3.org/2000/svg"],["id","trash-2","stroke","red"],["id","Icon","d","M3.6875 6H5.6875M5.6875 6H21.6875M5.6875 6V20C5.6875 20.5304 5.89821 21.0391 6.27329 21.4142C6.64836 21.7893 7.15707 22 7.6875 22H17.6875C18.2179 22 18.7266 21.7893 19.1017 21.4142C19.4768 21.0391 19.6875 20.5304 19.6875 20V6H5.6875ZM8.6875 6V4C8.6875 3.46957 8.89821 2.96086 9.27329 2.58579C9.64836 2.21071 10.1571 2 10.6875 2H14.6875C15.2179 2 15.7266 2.21071 16.1017 2.58579C16.4768 2.96086 16.6875 3.46957 16.6875 4V6M10.6875 11V17M14.6875 11V17","stroke-width","2","stroke-linecap","round","stroke-linejoin","round"],[1,"text-danger"],[1,"example-additional-selection"],["color","primary",3,"value"],[1,"col-md-6"],["for","frequency",1,"form-label"],["formControlName","frequency","id","frequency",1,"form-select",3,"change"],["value",""],[3,"value",4,"ngFor","ngForOf"],[3,"value"],["for","weekDays",1,"form-label"],["id","weekDays",1,"row"],["class","col-sm-auto m-r-1","formArrayName","dailyReminders",4,"ngFor","ngForOf"],["formArrayName","dailyReminders",1,"col-sm-auto","m-r-1"],[3,"formGroupName"],["color","primary","formControlName","isActive",1,"m-r-1"],["for","weekDay",1,"form-label"],["id","weekDay"],["formControlName","dayOfWeek"],["class","mr-2","color","primary",3,"value",4,"ngFor","ngForOf"],["color","primary",1,"mr-2",3,"value"],["for","Quarterly",1,"form-label"],["id","Quarterly",1,"row"],[1,"table"],["formArrayName","quarterlyReminders"],[4,"ngFor","ngForOf"],["formControlName","month",1,"form-select",3,"change"],["formControlName","day",1,"form-select",3,"change"],["for","HalfYearly"],["id","HalfYearly",1,"row"],["formArrayName","halfYearlyReminders"],["formControlName","startDate","placeholder","Date",1,"form-control",3,"owlDateTimeTrigger","min","owlDateTime"],["dt2",""],["formControlName","startDate","placeholder","Start Date",1,"form-control",3,"owlDateTimeTrigger","min","owlDateTime"],["dt3",""],["formControlName","endDate","placeholder","End Date",1,"form-control",3,"owlDateTimeTrigger","owlDateTime"],["dt4",""]],template:function(t,n){if(1&t&&(e.TgZ(0,"section",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"div",6)(7,"h2"),e._uU(8),e.ALo(9,"translate"),e.qZA()()()()()(),e.TgZ(10,"div",4)(11,"div",7)(12,"div",8)(13,"div",9)(14,"form",10)(15,"div",4)(16,"div",11)(17,"label",12),e._uU(18),e.ALo(19,"translate"),e.qZA(),e._UZ(20,"input",13),e.YNc(21,G,3,3,"div",14),e.qZA()(),e.TgZ(22,"div",4)(23,"div",11)(24,"label",15),e._uU(25),e.ALo(26,"translate"),e.qZA(),e._UZ(27,"textarea",16),e.YNc(28,V,3,3,"div",14),e.qZA()(),e.TgZ(29,"div",4)(30,"div",17)(31,"mat-checkbox",18),e.NdJ("change",function(s){return n.checkData(s)}),e._uU(32),e.ALo(33,"translate"),e.qZA()(),e.TgZ(34,"div",17)(35,"mat-checkbox",19),e._uU(36),e.ALo(37,"translate"),e.qZA()(),e.TgZ(38,"div",20)(39,"label",15),e._uU(40),e.ALo(41,"translate"),e.qZA(),e.TgZ(42,"mat-select",21),e.NdJ("valueChange",function(s){return n.selectedUsers=s}),e.ALo(43,"translate"),e.TgZ(44,"mat-select-trigger"),e.YNc(45,B,2,2,"span",22),e.YNc(46,W,2,2,"span",23),e.qZA(),e.YNc(47,z,2,3,"mat-option",24),e.qZA()()(),e.YNc(48,X,11,8,"div",25),e.YNc(49,pe,6,4,"div",25),e.TgZ(50,"div",4),e.YNc(51,_e,9,8,"div",26),e.YNc(52,Ae,9,8,"div",27),e.YNc(53,Te,7,5,"div",26),e.TgZ(54,"div",28)(55,"button",29),e.NdJ("click",function(){return n.createReminder()}),e.O4$(),e.TgZ(56,"svg",30)(57,"g",31),e._UZ(58,"path",32),e.qZA()(),e._uU(59),e.ALo(60,"translate"),e.qZA(),e.kcU(),e.TgZ(61,"button",33),e.O4$(),e.TgZ(62,"svg",34)(63,"g",35),e._UZ(64,"path",36),e.qZA()(),e._uU(65),e.ALo(66,"translate"),e.qZA()()()()()()()()()()),2&t){let o;e.xp6(8),e.Oqu(e.lcZ(9,22,"MANAGE_REMINDER")),e.xp6(6),e.Q6J("formGroup",n.reminderForm),e.xp6(4),e.hij(" ",e.lcZ(19,24,"SUBJECT"),""),e.xp6(3),e.Q6J("ngIf",n.reminderForm.get("subject").touched&&(null==(o=n.reminderForm.get("subject"))?null:o.hasError("required"))),e.xp6(4),e.hij(" ",e.lcZ(26,26,"MESSAGE"),""),e.xp6(3),e.Q6J("ngIf",n.reminderForm.get("message").touched&&n.reminderForm.get("message").hasError("required")),e.xp6(4),e.hij(" ",e.lcZ(33,28,"REPEATE_REMINDER")," "),e.xp6(4),e.Oqu(e.lcZ(37,30,"SEND_EMAIL")),e.xp6(4),e.hij(" ",e.lcZ(41,32,"SELECT_USERS"),""),e.xp6(2),e.s9C("placeholder",e.lcZ(43,34,"SELECT_USERS")),e.Q6J("value",n.selectedUsers),e.xp6(3),e.Q6J("ngIf",n.selectedUsers.length>0),e.xp6(1),e.Q6J("ngIf",n.selectedUsers.length>1),e.xp6(1),e.Q6J("ngForOf",n.users),e.xp6(1),e.Q6J("ngIf",n.reminderForm.get("isRepeated").value),e.xp6(1),e.Q6J("ngIf",n.reminderForm.get("isRepeated").value),e.xp6(2),e.Q6J("ngIf",!n.reminderForm.get("isRepeated").value),e.xp6(1),e.Q6J("ngIf",n.reminderForm.get("isRepeated").value),e.xp6(1),e.Q6J("ngIf",n.reminderForm.get("isRepeated").value),e.xp6(6),e.hij(" ",e.lcZ(60,36,"SAVE")," "),e.xp6(2),e.Q6J("routerLink",e.DdM(40,ye)),e.xp6(4),e.hij(" ",e.lcZ(66,38,"CANCEL")," ")}},dependencies:[p.sg,p.O5,d._Y,d.YN,d.Kr,d.Fj,d.EJ,d.JJ,d.JL,h.rH,d.sg,d.u,d.x0,d.CE,S.oG,v.gD,v.$L,L.ey,x.VQ,x.U0,g.sZ,g.BO,g.hV,U.X$],styles:[".btn-green[_ngcontent-%COMP%]{\n    background: #32977F !important;\n  }\n  .btn-green[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{\n    color: #ffff !important;\n    width: 20px !important;\n    height: 20px !important;\n  }\n  .btn-green-color[_ngcontent-%COMP%]{\n    color: #ffff !important;\n  }\n  .btn-red[_ngcontent-%COMP%]{\n    border: 1px solid red !important;\n    background-color: white !important;\n    color: red !important;\n  }\n  \n  .btn-red[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{\n    color: red !important;\n    width: 20px !important;\n    height: 20px !important;\n  }"]}),r})();var xe=a(1358),C=a(1135),Ze=a(727),Q=a(9646),Ce=a(262),De=a(8746);class Ee{get count(){return this._count}constructor(i){this.reminderService=i,this._reminderSubject$=new C.X([]),this._responseHeaderSubject$=new C.X(null),this.loadingSubject=new C.X(!1),this.loading$=this.loadingSubject.asObservable(),this._count=0,this.responseHeaderSubject$=this._responseHeaderSubject$.asObservable()}connect(){return this.sub$=new Ze.w0,this._reminderSubject$.asObservable()}disconnect(){this._reminderSubject$.complete(),this.loadingSubject.complete(),this.sub$.unsubscribe()}loadData(i){this.loadingSubject.next(!0),this.sub$=this.reminderService.getReminders(i).pipe((0,Ce.K)(()=>(0,Q.of)([])),(0,De.x)(()=>this.loadingSubject.next(!1))).subscribe(t=>{const n=new xe.E;n.pageSize=parseInt(t.headers.get("pageSize")),n.totalCount=parseInt(t.headers.get("totalCount")),n.skip=parseInt(t.headers.get("skip")),this._responseHeaderSubject$.next({...n});const o=[...t.body];this._count=o.length,this._reminderSubject$.next(o)})}}var Y=a(5412),Fe=a(5485),M=a(4859),I=a(7392),A=a(8255),be=a(1676),Ne=a(9785),m=a(671),qe=a(2821),Se=a(8475),Le=a(8017);const Ue=function(){return["/reminders/add"]};function Qe(r,i){1&r&&(e.TgZ(0,"a",37),e._UZ(1,"app-feather-icons",38),e.TgZ(2,"span",39),e._uU(3),e.ALo(4,"translate"),e.qZA()()),2&r&&(e.Q6J("routerLink",e.DdM(7,Ue)),e.xp6(1),e.Tol("btn-success"),e.Q6J("icon","Plus"),e.xp6(2),e.hij(" ",e.lcZ(4,5,"ADD_REMINDER"),""))}function Ye(r,i){1&r&&e._UZ(0,"th",40)}function Me(r,i){if(1&r&&(e.TgZ(0,"button",46)(1,"mat-icon"),e._uU(2,"more_vert"),e.qZA()()),2&r){e.oxw();const t=e.MAs(3);e.Q6J("matMenuTriggerFor",t)}}const Ie=function(r){return["/reminders/manage",r]};function Je(r,i){if(1&r&&(e.TgZ(0,"button",47)(1,"mat-icon"),e._uU(2,"edit"),e.qZA(),e.TgZ(3,"span"),e._uU(4),e.ALo(5,"translate"),e.qZA()()),2&r){const t=e.oxw().$implicit;e.Q6J("routerLink",e.VKq(4,Ie,t.id)),e.xp6(4),e.Oqu(e.lcZ(5,2,"EDIT"))}}function Oe(r,i){if(1&r){const t=e.EpF();e.TgZ(0,"button",48),e.NdJ("click",function(){e.CHM(t);const o=e.oxw().$implicit,s=e.oxw();return e.KtG(s.deleteReminder(o))}),e.TgZ(1,"mat-icon"),e._uU(2,"delete"),e.qZA(),e.TgZ(3,"span"),e._uU(4),e.ALo(5,"translate"),e.qZA()()}2&r&&(e.xp6(4),e.Oqu(e.lcZ(5,1,"DELETE")))}const je=function(){return["REMINDER_EDIT_REMINDER","REMINDER_DELETE_REMINDER"]};function we(r,i){1&r&&(e.TgZ(0,"td",41),e.YNc(1,Me,3,1,"button",42),e.TgZ(2,"mat-menu",null,43),e.YNc(4,Je,6,6,"button",44),e.YNc(5,Oe,6,3,"button",45),e.qZA()()),2&r&&(e.xp6(1),e.Q6J("hasClaim",e.DdM(3,je)),e.xp6(3),e.Q6J("hasClaim","REMINDER_EDIT_REMINDER"),e.xp6(1),e.Q6J("hasClaim","REMINDER_DELETE_REMINDER"))}function $e(r,i){1&r&&(e.TgZ(0,"th",49),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&r&&(e.xp6(1),e.hij(" ",e.lcZ(2,1,"START_DATE")," "))}function ke(r,i){if(1&r&&(e.TgZ(0,"td",41),e._uU(1),e.ALo(2,"utcToLocalTime"),e.qZA()),2&r){const t=i.$implicit;e.xp6(1),e.hij(" ",e.xi3(2,1,t.startDate,"short")," ")}}function He(r,i){1&r&&(e.TgZ(0,"th",49),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&r&&(e.xp6(1),e.hij(" ",e.lcZ(2,1,"END_DATE")," "))}function Ge(r,i){if(1&r&&(e.TgZ(0,"td",41),e._uU(1),e.ALo(2,"utcToLocalTime"),e.qZA()),2&r){const t=i.$implicit;e.xp6(1),e.hij(" ",e.xi3(2,1,t.endDate,"short")," ")}}function Ve(r,i){1&r&&(e.TgZ(0,"th",49),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&r&&(e.xp6(1),e.hij(" ",e.lcZ(2,1,"SUBJECT")," "))}function Be(r,i){if(1&r&&(e.TgZ(0,"td",41),e._uU(1),e.ALo(2,"limitTo"),e.qZA()),2&r){const t=i.$implicit;e.xp6(1),e.hij(" ",e.xi3(2,1,t.subject,"100")," ")}}function We(r,i){1&r&&(e.TgZ(0,"th",49),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&r&&(e.xp6(1),e.hij(" ",e.lcZ(2,1,"MESSAGE")," "))}function ze(r,i){if(1&r&&(e.TgZ(0,"td",41),e._uU(1),e.ALo(2,"limitTo"),e.qZA()),2&r){const t=i.$implicit;e.xp6(1),e.hij(" ",e.xi3(2,1,t.message,"150")," ")}}function Pe(r,i){1&r&&(e.TgZ(0,"th",40),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&r&&(e.xp6(1),e.hij(" ",e.lcZ(2,1,"FREQUENCY")," "))}function Ke(r,i){if(1&r&&(e.TgZ(0,"td",41),e._uU(1),e.ALo(2,"frequency"),e.qZA()),2&r){const t=i.$implicit;e.xp6(1),e.hij(" ",e.lcZ(2,1,t.frequency)," ")}}function Xe(r,i){1&r&&(e.TgZ(0,"th",49),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&r&&(e.xp6(1),e.hij(" ",e.lcZ(2,1,"DOCUMENT")," "))}function et(r,i){if(1&r&&(e.TgZ(0,"td",41),e._uU(1),e.qZA()),2&r){const t=i.$implicit;e.xp6(1),e.hij(" ",t.documentName," ")}}function tt(r,i){1&r&&e._UZ(0,"th",40)}function rt(r,i){1&r&&e._UZ(0,"th",40)}function nt(r,i){1&r&&e._UZ(0,"th",40)}function it(r,i){if(1&r){const t=e.EpF();e.TgZ(0,"th",40)(1,"input",50),e.NdJ("ngModelChange",function(o){e.CHM(t);const s=e.oxw();return e.KtG(s.SubjectFilter=o)}),e.qZA()()}if(2&r){const t=e.oxw();e.xp6(1),e.Q6J("ngModel",t.SubjectFilter)}}function ot(r,i){if(1&r){const t=e.EpF();e.TgZ(0,"th",40)(1,"input",51),e.NdJ("ngModelChange",function(o){e.CHM(t);const s=e.oxw();return e.KtG(s.MessageFilter=o)}),e.qZA()()}if(2&r){const t=e.oxw();e.xp6(1),e.Q6J("ngModel",t.MessageFilter)}}function at(r,i){if(1&r&&(e.TgZ(0,"mat-option",53),e._uU(1),e.qZA()),2&r){const t=i.$implicit;e.Q6J("value",null==t?null:t.id),e.xp6(1),e.hij(" ",null==t?null:t.name," ")}}function st(r,i){if(1&r){const t=e.EpF();e.TgZ(0,"th",40)(1,"mat-select",52),e.NdJ("ngModelChange",function(o){e.CHM(t);const s=e.oxw();return e.KtG(s.FrequencyFilter=o)}),e.TgZ(2,"mat-option",53),e._uU(3,"None"),e.qZA(),e.YNc(4,at,2,2,"mat-option",54),e.qZA()()}if(2&r){const t=e.oxw();e.xp6(1),e.Q6J("ngModel",t.FrequencyFilter),e.xp6(3),e.Q6J("ngForOf",t.reminderFrequencies)}}function dt(r,i){1&r&&e._UZ(0,"th",40)}const mt=function(){return[15,20,30]};function lt(r,i){if(1&r&&(e.TgZ(0,"td",55),e._UZ(1,"mat-paginator",56),e.qZA()),2&r){const t=e.oxw();e.xp6(1),e.Q6J("length",t.reminderResource.totalCount)("pageSize",t.reminderResource.pageSize)("pageSizeOptions",e.DdM(3,mt))}}function ct(r,i){1&r&&e._UZ(0,"tr",57)}function ut(r,i){1&r&&e._UZ(0,"tr",58)}function ht(r,i){1&r&&e._UZ(0,"tr",57)}function pt(r,i){1&r&&e._UZ(0,"tr",59)}function ft(r,i){1&r&&(e.ynx(0),e.TgZ(1,"div",60)(2,"strong"),e._uU(3),e.ALo(4,"translate"),e.qZA()(),e.BQk()),2&r&&(e.xp6(3),e.Oqu(e.lcZ(4,1,"NO_DATA_FOUND")))}const gt=function(){return["action-search","date-search","enddate-search","subject-search","message-search","frequency-search","document-search"]};let _t=(()=>{class r extends F.H{get SubjectFilter(){return this._subjectFilter}set SubjectFilter(t){this._subjectFilter=t,this.filterObservable$.next(`subject:${t}`)}set FrequencyFilter(t){this._frequencyFilter="0"==t?"0":t?t.toString():"",this.filterObservable$.next(`frequency:${this._frequencyFilter}`)}get FrequencyFilter(){return this._frequencyFilter}get MessageFilter(){return this._messageFilter}set MessageFilter(t){this._messageFilter=t,this.filterObservable$.next(`message:${t}`)}constructor(t,n,o,s,l,c){super(),this.reminderService=t,this.dialog=n,this.commonService=o,this.commonDialogService=s,this.toastrService=l,this.translationService=c,this.reminders=[],this.reminderFrequencies=[],this.displayedColumns=["action","startDate","endDate","subject","message","frequency","documentName"],this.footerToDisplayed=["footer"],this.isLoadingResults=!0,this.filterObservable$=new j.x,this.reminderResource=new O.t,this.reminderResource.pageSize=15,this.reminderResource.orderBy="startDate desc"}ngOnInit(){this.getReminderFrequency(),this.dataSource=new Ee(this.reminderService),this.dataSource.loadData(this.reminderResource),this.getResourceParameter(),this.sub$.sink=this.filterObservable$.pipe((0,$.b)(1e3),(0,k.x)()).subscribe(t=>{this.reminderResource.skip=0;const n=t.split(":");"subject"===n[0]?this.reminderResource.subject=n[1]:"message"===n[0]?this.reminderResource.message=n[1]:"frequency"===n[0]&&(this.reminderResource.frequency=n[1]),this.dataSource.loadData(this.reminderResource)})}ngAfterViewInit(){this.sub$.sink=this.sort.sortChange.subscribe(()=>this.paginator.pageIndex=0),this.sub$.sink=(0,w.T)(this.sort.sortChange,this.paginator.page).pipe((0,H.b)(t=>{this.reminderResource.skip=this.paginator.pageIndex*this.paginator.pageSize,this.reminderResource.pageSize=this.paginator.pageSize,this.reminderResource.orderBy=this.sort.active+" "+this.sort.direction,this.dataSource.loadData(this.reminderResource)})).subscribe()}getResourceParameter(){this.sub$.sink=this.dataSource.responseHeaderSubject$.subscribe(t=>{t&&(this.reminderResource.pageSize=t.pageSize,this.reminderResource.skip=t.skip,this.reminderResource.totalCount=t.totalCount)})}getReminderFrequency(){this.sub$.sink=this.commonService.getReminderFrequency().subscribe(t=>this.reminderFrequencies=[...t])}editReminder(t){this.isLoadingResults=!0,this.sub$.sink=this.commonService.getReminder(t.id).subscribe(n=>{this.isLoadingResults=!1;const o=this.dialog.open(Z,{width:"60vw",data:Object.assign({},{frequencies:this.reminderFrequencies,reminder:n})});this.sub$.sink=o.afterClosed().subscribe(s=>{s&&this.dataSource.loadData(this.reminderResource)})},()=>this.isLoadingResults=!1)}deleteReminder(t){this.sub$.sink=this.commonDialogService.deleteConformationDialog(this.translationService.getValue("ARE_YOU_SURE_YOU_WANT_TO_DELETE")).subscribe(n=>{n&&(this.isLoadingResults=!0,this.reminderService.deleteReminder(t.id).subscribe(()=>{this.isLoadingResults=!1,this.toastrService.success(this.translationService.getValue("REMINDER_DELETED_SUCCESSFULLY")),this.dataSource.loadData(this.reminderResource)},()=>this.isLoadingResults=!1))})}}return r.\u0275fac=function(t){return new(t||r)(e.Y36(b.Z),e.Y36(Y.uw),e.Y36(y.v),e.Y36(Fe.V),e.Y36(N._W),e.Y36(q.D))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-reminder-list"]],viewQuery:function(t,n){if(1&t&&(e.Gf(T.NW,5),e.Gf(_.YE,5)),2&t){let o;e.iGM(o=e.CRH())&&(n.paginator=o.first),e.iGM(o=e.CRH())&&(n.sort=o.first)}},features:[e.qOj],decls:61,vars:11,consts:[[1,"content"],[1,"content-block"],[1,"block-header"],[1,"breadcrumb-main"],[1,"row"],[1,"col-6"],[1,"breadcrumb-title"],[1,"breadcrumb-list"],[1,"breadcrumb-item","bcrumb-1"],["class","btn btn-outline-success btn-sm",3,"routerLink",4,"hasClaim"],[1,"col-xl-12","col-lg-12","col-md-12","col-sm-12"],[1,"card"],[1,"body","table-responsive"],["mat-table","","matSort","","matSortActive","startDate","matSortDirection","desc","matSortDisableClear","",1,"w-100",3,"dataSource"],["matColumnDef","action"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","startDate"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["matColumnDef","endDate"],["matColumnDef","subject"],["matColumnDef","message"],["matColumnDef","frequency"],["matColumnDef","documentName"],["matColumnDef","action-search"],["matColumnDef","date-search"],["matColumnDef","enddate-search"],["matColumnDef","subject-search"],["matColumnDef","message-search"],["matColumnDef","frequency-search"],["matColumnDef","document-search"],["matColumnDef","footer"],["mat-footer-cell","","colspan","7",4,"matFooterCellDef"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["mat-footer-row","",4,"matFooterRowDef"],[4,"ngIf"],[1,"btn","btn-outline-success","btn-sm",3,"routerLink"],[3,"icon"],[1,"d-none","d-sm-inline"],["mat-header-cell",""],["mat-cell",""],["mat-icon-button","","aria-label","Action",3,"matMenuTriggerFor",4,"hasClaim"],["menu","matMenu"],["mat-menu-item","",3,"routerLink",4,"hasClaim"],["mat-menu-item","",3,"click",4,"hasClaim"],["mat-icon-button","","aria-label","Action",3,"matMenuTriggerFor"],["mat-menu-item","",3,"routerLink"],["mat-menu-item","",3,"click"],["mat-header-cell","","mat-sort-header",""],["placeholder","Subject","type","text",1,"form-control","w-90",3,"ngModel","ngModelChange"],["placeholder","Message","type","text",1,"form-control","w-90","ml-2",3,"ngModel","ngModelChange"],["placeholder","Frequency",1,"form-select","ml-3",3,"ngModel","ngModelChange"],[3,"value"],[3,"value",4,"ngFor","ngForOf"],["mat-footer-cell","","colspan","7"],[3,"length","pageSize","pageSizeOptions"],["mat-header-row",""],["mat-row",""],["mat-footer-row",""],[1,"col-sm-12","m-t-15"]],template:function(t,n){1&t&&(e.TgZ(0,"section",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"div",6)(7,"h2"),e._uU(8),e.ALo(9,"translate"),e.qZA()()(),e.TgZ(10,"div",5)(11,"ul",7)(12,"li",8),e.YNc(13,Qe,5,8,"a",9),e.qZA()()()()()(),e.TgZ(14,"div",4)(15,"div",10)(16,"div",11)(17,"div",12)(18,"table",13),e.ynx(19,14),e.YNc(20,Ye,1,0,"th",15),e.YNc(21,we,6,4,"td",16),e.BQk(),e.ynx(22,17),e.YNc(23,$e,3,3,"th",18),e.YNc(24,ke,3,4,"td",16),e.BQk(),e.ynx(25,19),e.YNc(26,He,3,3,"th",18),e.YNc(27,Ge,3,4,"td",16),e.BQk(),e.ynx(28,20),e.YNc(29,Ve,3,3,"th",18),e.YNc(30,Be,3,4,"td",16),e.BQk(),e.ynx(31,21),e.YNc(32,We,3,3,"th",18),e.YNc(33,ze,3,4,"td",16),e.BQk(),e.ynx(34,22),e.YNc(35,Pe,3,3,"th",15),e.YNc(36,Ke,3,3,"td",16),e.BQk(),e.ynx(37,23),e.YNc(38,Xe,3,3,"th",18),e.YNc(39,et,2,1,"td",16),e.BQk(),e.ynx(40,24),e.YNc(41,tt,1,0,"th",15),e.BQk(),e.ynx(42,25),e.YNc(43,rt,1,0,"th",15),e.BQk(),e.ynx(44,26),e.YNc(45,nt,1,0,"th",15),e.BQk(),e.ynx(46,27),e.YNc(47,it,2,1,"th",15),e.BQk(),e.ynx(48,28),e.YNc(49,ot,2,1,"th",15),e.BQk(),e.ynx(50,29),e.YNc(51,st,5,2,"th",15),e.BQk(),e.ynx(52,30),e.YNc(53,dt,1,0,"th",15),e.BQk(),e.ynx(54,31),e.YNc(55,lt,2,4,"td",32),e.BQk(),e.YNc(56,ct,1,0,"tr",33),e.YNc(57,ut,1,0,"tr",34),e.YNc(58,ht,1,0,"tr",33),e.YNc(59,pt,1,0,"tr",35),e.qZA(),e.YNc(60,ft,5,3,"ng-container",36),e.qZA()()()()()()),2&t&&(e.xp6(8),e.Oqu(e.lcZ(9,8,"REMINDERS")),e.xp6(5),e.Q6J("hasClaim","REMINDER_CREATE_REMINDER"),e.xp6(5),e.Q6J("dataSource",n.dataSource),e.xp6(38),e.Q6J("matHeaderRowDef",n.displayedColumns),e.xp6(1),e.Q6J("matRowDefColumns",n.displayedColumns),e.xp6(1),e.Q6J("matHeaderRowDef",e.DdM(10,gt)),e.xp6(1),e.Q6J("matFooterRowDef",n.footerToDisplayed),e.xp6(1),e.Q6J("ngIf",0===n.dataSource.count))},dependencies:[p.sg,p.O5,d.Fj,d.JJ,d.On,h.rH,v.gD,L.ey,M.RK,I.Hw,A.VK,A.OP,A.p6,be.A,Ne.d,T.NW,_.YE,_.nU,m.BZ,m.fO,m.as,m.w1,m.Dz,m.nj,m.mD,m.Ke,m.ge,m.ev,m.yh,m.XQ,m.Gk,m.Q2,U.X$,qe.W,Se.y,Le.M]}),r})();var Rt=a(5698),vt=a(6099);let J=(()=>{class r{constructor(t,n){this.cs=t,this.router=n}resolve(t,n){const o=t.paramMap.get("id");return"add"===o?null:this.cs.getReminder(o).pipe((0,Rt.q)(1),(0,vt.z)(s=>s?(0,Q.of)(s):(this.router.navigate(["/reminders"]),null)))}}return r.\u0275fac=function(t){return new(t||r)(e.LFG(y.v),e.LFG(h.F0))},r.\u0275prov=e.Yz7({token:r,factory:r.\u0275fac}),r})();var D=a(319);const At=[{path:"",component:_t,data:{claimType:"REMINDER_VIEW_REMINDERS"},canActivate:[D.a]},{path:"add",component:Z,data:{claimType:"REMINDER_CREATE_REMINDER"},canActivate:[D.a]},{path:"manage/:id",resolve:{reminder:J},component:Z,data:{claimType:"REMINDER_EDIT_REMINDER"},canActivate:[D.a]}];let Tt=(()=>{class r{}return r.\u0275fac=function(t){return new(t||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[p.ez,h.Bz.forChild(At),h.Bz]}),r})();var yt=a(3417),xt=a(811),Zt=a(4586),Ct=a(1572),Dt=a(3546),Et=a(4144),Ft=a(455);let bt=(()=>{class r{}return r.\u0275fac=function(t){return new(t||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({providers:[J],imports:[p.ez,d.u5,Tt,d.UX,Ct.Cq,S.p9,Y.Is,v.LD,Ft.rP,yt.m,A.Tx,M.ot,Dt.QW,T.TU,_.JX,Et.c,m.p0,xt.vV,x.Fk,I.Ps,Zt.D,g.Ll,g.x]}),r})()}}]);