"use strict";(self.webpackChunkangular=self.webpackChunkangular||[]).push([[76],{8556:(d,l,i)=>{i.d(l,{$:()=>E});var u=i(7788);const a="serverError";let E=(()=>{class e{constructor(){this.clientErrorMessages={required:"This field is required",email:"Incorrect email address",strong:"Password is not strong enough",mustMatch:"Passwords must match"}}getErrorMessage(o,t,n){const s=o.get(t);for(const r in this.clientErrorMessages)if(s?.hasError(r))return this.clientErrorMessages[r];if(!n)return null;const c=n.find(r=>r.controlName===t);return c?c.controlErrors[0]:null}setFormErrors(o,t){Object.keys(o.controls).forEach(n=>{const s=o.get(n);if(!s)return;const c=t?.find(f=>f.controlName===n);if(c)return s.setErrors({[a]:c.controlErrors[0]}),void s.markAsTouched();const r=s.errors;if(r){if(delete r[a],0===Object.keys(r).length)return void s.setErrors(null);s.setErrors(r)}})}static#r=this.\u0275fac=function(t){return new(t||e)};static#s=this.\u0275prov=u.jDH({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})()}}]);