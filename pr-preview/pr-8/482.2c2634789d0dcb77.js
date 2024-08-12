"use strict";(self.webpackChunkangular=self.webpackChunkangular||[]).push([[482],{6482:(ft,J,d)=>{d.d(J,{Vh:()=>z,bZ:()=>E,E7:()=>W,tx:()=>K,Yi:()=>Y,CP:()=>C,BI:()=>Q});var h=d(590),A=d(6610),a=d(7788),p=d(8977),_=d(1857),g=d(6810),v=d(6809),m=d(6104),w=d(8001),q=d(756),k=d(3126),F=d(965);function tt(o,n){}class y{constructor(){this.role="dialog",this.panelClass="",this.hasBackdrop=!0,this.backdropClass="",this.disableClose=!1,this.width="",this.height="",this.data=null,this.ariaDescribedBy=null,this.ariaLabelledBy=null,this.ariaLabel=null,this.ariaModal=!0,this.autoFocus="first-tabbable",this.restoreFocus=!0,this.closeOnNavigation=!0,this.closeOnDestroy=!0,this.closeOnOverlayDetachments=!0}}let I=(()=>{class o extends g.lb{constructor(t,e,i,s,r,l,u,f){super(),this._elementRef=t,this._focusTrapFactory=e,this._config=s,this._interactivityChecker=r,this._ngZone=l,this._overlayRef=u,this._focusMonitor=f,this._platform=(0,a.WQX)(_.OD),this._focusTrap=null,this._elementFocusedBeforeDialogWasOpened=null,this._closeInteractionType=null,this._ariaLabelledByQueue=[],this._changeDetectorRef=(0,a.WQX)(a.gRc),this._injector=(0,a.WQX)(a.zZn),this._isDestroyed=!1,this.attachDomPortal=R=>{this._portalOutlet.hasAttached();const pt=this._portalOutlet.attachDomPortal(R);return this._contentAttached(),pt},this._document=i,this._config.ariaLabelledBy&&this._ariaLabelledByQueue.push(this._config.ariaLabelledBy)}_addAriaLabelledBy(t){this._ariaLabelledByQueue.push(t),this._changeDetectorRef.markForCheck()}_removeAriaLabelledBy(t){const e=this._ariaLabelledByQueue.indexOf(t);e>-1&&(this._ariaLabelledByQueue.splice(e,1),this._changeDetectorRef.markForCheck())}_contentAttached(){this._initializeFocusTrap(),this._handleBackdropClicks(),this._captureInitialFocus()}_captureInitialFocus(){this._trapFocus()}ngOnDestroy(){this._isDestroyed=!0,this._restoreFocus()}attachComponentPortal(t){this._portalOutlet.hasAttached();const e=this._portalOutlet.attachComponentPortal(t);return this._contentAttached(),e}attachTemplatePortal(t){this._portalOutlet.hasAttached();const e=this._portalOutlet.attachTemplatePortal(t);return this._contentAttached(),e}_recaptureFocus(){this._containsFocus()||this._trapFocus()}_forceFocus(t,e){this._interactivityChecker.isFocusable(t)||(t.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{const i=()=>{t.removeEventListener("blur",i),t.removeEventListener("mousedown",i),t.removeAttribute("tabindex")};t.addEventListener("blur",i),t.addEventListener("mousedown",i)})),t.focus(e)}_focusByCssSelector(t,e){let i=this._elementRef.nativeElement.querySelector(t);i&&this._forceFocus(i,e)}_trapFocus(){this._isDestroyed||(0,a.mal)(()=>{const t=this._elementRef.nativeElement;switch(this._config.autoFocus){case!1:case"dialog":this._containsFocus()||t.focus();break;case!0:case"first-tabbable":this._focusTrap?.focusInitialElement()||this._focusDialogContainer();break;case"first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]');break;default:this._focusByCssSelector(this._config.autoFocus)}},{injector:this._injector})}_restoreFocus(){const t=this._config.restoreFocus;let e=null;if("string"==typeof t?e=this._document.querySelector(t):"boolean"==typeof t?e=t?this._elementFocusedBeforeDialogWasOpened:null:t&&(e=t),this._config.restoreFocus&&e&&"function"==typeof e.focus){const i=(0,_.vc)(),s=this._elementRef.nativeElement;(!i||i===this._document.body||i===s||s.contains(i))&&(this._focusMonitor?(this._focusMonitor.focusVia(e,this._closeInteractionType),this._closeInteractionType=null):e.focus())}this._focusTrap&&this._focusTrap.destroy()}_focusDialogContainer(){this._elementRef.nativeElement.focus&&this._elementRef.nativeElement.focus()}_containsFocus(){const t=this._elementRef.nativeElement,e=(0,_.vc)();return t===e||t.contains(e)}_initializeFocusTrap(){this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._document&&(this._elementFocusedBeforeDialogWasOpened=(0,_.vc)()))}_handleBackdropClicks(){this._overlayRef.backdropClick().subscribe(()=>{this._config.disableClose&&this._recaptureFocus()})}static#t=this.\u0275fac=function(e){return new(e||o)(a.rXU(a.aKT),a.rXU(p.GX),a.rXU(A.qQ,8),a.rXU(y),a.rXU(p.Z7),a.rXU(a.SKi),a.rXU(h.yY),a.rXU(p.FN))};static#e=this.\u0275cmp=a.VBU({type:o,selectors:[["cdk-dialog-container"]],viewQuery:function(e,i){if(1&e&&a.GBs(g.I3,7),2&e){let s;a.mGM(s=a.lsd())&&(i._portalOutlet=s.first)}},hostAttrs:["tabindex","-1",1,"cdk-dialog-container"],hostVars:6,hostBindings:function(e,i){2&e&&a.BMQ("id",i._config.id||null)("role",i._config.role)("aria-modal",i._config.ariaModal)("aria-labelledby",i._config.ariaLabel?null:i._ariaLabelledByQueue[0])("aria-label",i._config.ariaLabel)("aria-describedby",i._config.ariaDescribedBy||null)},standalone:!0,features:[a.Vt3,a.aNF],decls:1,vars:0,consts:[["cdkPortalOutlet",""]],template:function(e,i){1&e&&a.DNE(0,tt,0,0,"ng-template",0)},dependencies:[g.I3],styles:[".cdk-dialog-container{display:block;width:100%;height:100%;min-height:inherit;max-height:inherit}"],encapsulation:2})}return o})();class O{constructor(n,t){this.overlayRef=n,this.config=t,this.closed=new m.B,this.disableClose=t.disableClose,this.backdropClick=n.backdropClick(),this.keydownEvents=n.keydownEvents(),this.outsidePointerEvents=n.outsidePointerEvents(),this.id=t.id,this.keydownEvents.subscribe(e=>{e.keyCode===v._f&&!this.disableClose&&!(0,v.rp)(e)&&(e.preventDefault(),this.close(void 0,{focusOrigin:"keyboard"}))}),this.backdropClick.subscribe(()=>{this.disableClose||this.close(void 0,{focusOrigin:"mouse"})}),this._detachSubscription=n.detachments().subscribe(()=>{!1!==t.closeOnOverlayDetachments&&this.close()})}close(n,t){if(this.containerInstance){const e=this.closed;this.containerInstance._closeInteractionType=t?.focusOrigin||"program",this._detachSubscription.unsubscribe(),this.overlayRef.dispose(),e.next(n),e.complete(),this.componentInstance=this.containerInstance=null}}updatePosition(){return this.overlayRef.updatePosition(),this}updateSize(n="",t=""){return this.overlayRef.updateSize({width:n,height:t}),this}addPanelClass(n){return this.overlayRef.addPanelClass(n),this}removePanelClass(n){return this.overlayRef.removePanelClass(n),this}}const S=new a.nKC("DialogScrollStrategy",{providedIn:"root",factory:()=>{const o=(0,a.WQX)(h.hJ);return()=>o.scrollStrategies.block()}}),et=new a.nKC("DialogData"),it=new a.nKC("DefaultDialogConfig");let ot=0,nt=(()=>{class o{get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}constructor(t,e,i,s,r,l){this._overlay=t,this._injector=e,this._defaultOptions=i,this._parentDialog=s,this._overlayContainer=r,this._openDialogsAtThisLevel=[],this._afterAllClosedAtThisLevel=new m.B,this._afterOpenedAtThisLevel=new m.B,this._ariaHiddenElements=new Map,this.afterAllClosed=(0,w.v)(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe((0,F.Z)(void 0))),this._scrollStrategy=l}open(t,e){(e={...this._defaultOptions||new y,...e}).id=e.id||"cdk-dialog-"+ot++,e.id&&this.getDialogById(e.id);const s=this._getOverlayConfig(e),r=this._overlay.create(s),l=new O(r,e),u=this._attachContainer(r,l,e);return l.containerInstance=u,this._attachDialogContent(t,l,u,e),this.openDialogs.length||this._hideNonDialogContentFromAssistiveTechnology(),this.openDialogs.push(l),l.closed.subscribe(()=>this._removeOpenDialog(l,!0)),this.afterOpened.next(l),l}closeAll(){T(this.openDialogs,t=>t.close())}getDialogById(t){return this.openDialogs.find(e=>e.id===t)}ngOnDestroy(){T(this._openDialogsAtThisLevel,t=>{!1===t.config.closeOnDestroy&&this._removeOpenDialog(t,!1)}),T(this._openDialogsAtThisLevel,t=>t.close()),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete(),this._openDialogsAtThisLevel=[]}_getOverlayConfig(t){const e=new h.rR({positionStrategy:t.positionStrategy||this._overlay.position().global().centerHorizontally().centerVertically(),scrollStrategy:t.scrollStrategy||this._scrollStrategy(),panelClass:t.panelClass,hasBackdrop:t.hasBackdrop,direction:t.direction,minWidth:t.minWidth,minHeight:t.minHeight,maxWidth:t.maxWidth,maxHeight:t.maxHeight,width:t.width,height:t.height,disposeOnNavigation:t.closeOnNavigation});return t.backdropClass&&(e.backdropClass=t.backdropClass),e}_attachContainer(t,e,i){const s=i.injector||i.viewContainerRef?.injector,r=[{provide:y,useValue:i},{provide:O,useValue:e},{provide:h.yY,useValue:t}];let l;i.container?"function"==typeof i.container?l=i.container:(l=i.container.type,r.push(...i.container.providers(i))):l=I;const u=new g.A8(l,i.viewContainerRef,a.zZn.create({parent:s||this._injector,providers:r}),i.componentFactoryResolver);return t.attach(u).instance}_attachDialogContent(t,e,i,s){if(t instanceof a.C4Q){const r=this._createInjector(s,e,i,void 0);let l={$implicit:s.data,dialogRef:e};s.templateContext&&(l={...l,..."function"==typeof s.templateContext?s.templateContext():s.templateContext}),i.attachTemplatePortal(new g.VA(t,null,l,r))}else{const r=this._createInjector(s,e,i,this._injector),l=i.attachComponentPortal(new g.A8(t,s.viewContainerRef,r,s.componentFactoryResolver));e.componentRef=l,e.componentInstance=l.instance}}_createInjector(t,e,i,s){const r=t.injector||t.viewContainerRef?.injector,l=[{provide:et,useValue:t.data},{provide:O,useValue:e}];return t.providers&&("function"==typeof t.providers?l.push(...t.providers(e,t,i)):l.push(...t.providers)),t.direction&&(!r||!r.get(k.dS,null,{optional:!0}))&&l.push({provide:k.dS,useValue:{value:t.direction,change:(0,q.of)()}}),a.zZn.create({parent:r||s,providers:l})}_removeOpenDialog(t,e){const i=this.openDialogs.indexOf(t);i>-1&&(this.openDialogs.splice(i,1),this.openDialogs.length||(this._ariaHiddenElements.forEach((s,r)=>{s?r.setAttribute("aria-hidden",s):r.removeAttribute("aria-hidden")}),this._ariaHiddenElements.clear(),e&&this._getAfterAllClosed().next()))}_hideNonDialogContentFromAssistiveTechnology(){const t=this._overlayContainer.getContainerElement();if(t.parentElement){const e=t.parentElement.children;for(let i=e.length-1;i>-1;i--){const s=e[i];s!==t&&"SCRIPT"!==s.nodeName&&"STYLE"!==s.nodeName&&!s.hasAttribute("aria-live")&&(this._ariaHiddenElements.set(s,s.getAttribute("aria-hidden")),s.setAttribute("aria-hidden","true"))}}}_getAfterAllClosed(){const t=this._parentDialog;return t?t._getAfterAllClosed():this._afterAllClosedAtThisLevel}static#t=this.\u0275fac=function(e){return new(e||o)(a.KVO(h.hJ),a.KVO(a.zZn),a.KVO(it,8),a.KVO(o,12),a.KVO(h.Sf),a.KVO(S))};static#e=this.\u0275prov=a.jDH({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})();function T(o,n){let t=o.length;for(;t--;)n(o[t])}var B=d(1432),st=d(2489),D=d(8503),x=d(8486),lt=d(699);function rt(o,n){}d(194);class M{constructor(){this.role="dialog",this.panelClass="",this.hasBackdrop=!0,this.backdropClass="",this.disableClose=!1,this.width="",this.height="",this.data=null,this.ariaDescribedBy=null,this.ariaLabelledBy=null,this.ariaLabel=null,this.ariaModal=!0,this.autoFocus="first-tabbable",this.restoreFocus=!0,this.delayFocusTrap=!0,this.closeOnNavigation=!0}}const L="mdc-dialog--open",P="mdc-dialog--opening",V="mdc-dialog--closing";let N=(()=>{class o extends I{constructor(t,e,i,s,r,l,u,f,R){super(t,e,i,s,r,l,u,R),this._animationMode=f,this._animationStateChanged=new a.bkB,this._animationsEnabled="NoopAnimations"!==this._animationMode,this._actionSectionCount=0,this._hostElement=this._elementRef.nativeElement,this._enterAnimationDuration=this._animationsEnabled?U(this._config.enterAnimationDuration)??150:0,this._exitAnimationDuration=this._animationsEnabled?U(this._config.exitAnimationDuration)??75:0,this._animationTimer=null,this._finishDialogOpen=()=>{this._clearAnimationClasses(),this._openAnimationDone(this._enterAnimationDuration)},this._finishDialogClose=()=>{this._clearAnimationClasses(),this._animationStateChanged.emit({state:"closed",totalTime:this._exitAnimationDuration})}}_contentAttached(){super._contentAttached(),this._startOpenAnimation()}_startOpenAnimation(){this._animationStateChanged.emit({state:"opening",totalTime:this._enterAnimationDuration}),this._animationsEnabled?(this._hostElement.style.setProperty(j,`${this._enterAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(P,L)),this._waitForAnimationToComplete(this._enterAnimationDuration,this._finishDialogOpen)):(this._hostElement.classList.add(L),Promise.resolve().then(()=>this._finishDialogOpen()))}_startExitAnimation(){this._animationStateChanged.emit({state:"closing",totalTime:this._exitAnimationDuration}),this._hostElement.classList.remove(L),this._animationsEnabled?(this._hostElement.style.setProperty(j,`${this._exitAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(V)),this._waitForAnimationToComplete(this._exitAnimationDuration,this._finishDialogClose)):Promise.resolve().then(()=>this._finishDialogClose())}_updateActionSectionCount(t){this._actionSectionCount+=t,this._changeDetectorRef.markForCheck()}_clearAnimationClasses(){this._hostElement.classList.remove(P,V)}_waitForAnimationToComplete(t,e){null!==this._animationTimer&&clearTimeout(this._animationTimer),this._animationTimer=setTimeout(e,t)}_requestAnimationFrame(t){this._ngZone.runOutsideAngular(()=>{"function"==typeof requestAnimationFrame?requestAnimationFrame(t):t()})}_captureInitialFocus(){this._config.delayFocusTrap||this._trapFocus()}_openAnimationDone(t){this._config.delayFocusTrap&&this._trapFocus(),this._animationStateChanged.next({state:"opened",totalTime:t})}ngOnDestroy(){super.ngOnDestroy(),null!==this._animationTimer&&clearTimeout(this._animationTimer)}attachComponentPortal(t){const e=super.attachComponentPortal(t);return e.location.nativeElement.classList.add("mat-mdc-dialog-component-host"),e}static#t=this.\u0275fac=function(e){return new(e||o)(a.rXU(a.aKT),a.rXU(p.GX),a.rXU(A.qQ,8),a.rXU(M),a.rXU(p.Z7),a.rXU(a.SKi),a.rXU(h.yY),a.rXU(a.bc$,8),a.rXU(p.FN))};static#e=this.\u0275cmp=a.VBU({type:o,selectors:[["mat-dialog-container"]],hostAttrs:["tabindex","-1",1,"mat-mdc-dialog-container","mdc-dialog"],hostVars:10,hostBindings:function(e,i){2&e&&(a.Mr5("id",i._config.id),a.BMQ("aria-modal",i._config.ariaModal)("role",i._config.role)("aria-labelledby",i._config.ariaLabel?null:i._ariaLabelledByQueue[0])("aria-label",i._config.ariaLabel)("aria-describedby",i._config.ariaDescribedBy||null),a.AVh("_mat-animation-noopable",!i._animationsEnabled)("mat-mdc-dialog-container-with-actions",i._actionSectionCount>0))},standalone:!0,features:[a.Vt3,a.aNF],decls:3,vars:0,consts:[[1,"mat-mdc-dialog-inner-container","mdc-dialog__container"],[1,"mat-mdc-dialog-surface","mdc-dialog__surface"],["cdkPortalOutlet",""]],template:function(e,i){1&e&&(a.j41(0,"div",0)(1,"div",1),a.DNE(2,rt,0,0,"ng-template",2),a.k0s()())},dependencies:[g.I3],styles:['.mat-mdc-dialog-container{width:100%;height:100%;display:block;box-sizing:border-box;max-height:inherit;min-height:inherit;min-width:inherit;max-width:inherit;outline:0}.cdk-overlay-pane.mat-mdc-dialog-panel{max-width:var(--mat-dialog-container-max-width, 80vw);min-width:var(--mat-dialog-container-min-width, 0)}@media(max-width: 599px){.cdk-overlay-pane.mat-mdc-dialog-panel{max-width:var(--mat-dialog-container-small-max-width, 80vw)}}.mat-mdc-dialog-inner-container{display:flex;flex-direction:row;align-items:center;justify-content:space-around;box-sizing:border-box;height:100%;opacity:0;transition:opacity linear var(--mat-dialog-transition-duration, 0ms);max-height:inherit;min-height:inherit;min-width:inherit;max-width:inherit}.mdc-dialog--closing .mat-mdc-dialog-inner-container{transition:opacity 75ms linear;transform:none}.mdc-dialog--open .mat-mdc-dialog-inner-container{opacity:1}._mat-animation-noopable .mat-mdc-dialog-inner-container{transition:none}.mat-mdc-dialog-surface{display:flex;flex-direction:column;flex-grow:0;flex-shrink:0;box-sizing:border-box;width:100%;height:100%;position:relative;overflow-y:auto;outline:0;transform:scale(0.8);transition:transform var(--mat-dialog-transition-duration, 0ms) cubic-bezier(0, 0, 0.2, 1);max-height:inherit;min-height:inherit;min-width:inherit;max-width:inherit;box-shadow:var(--mat-dialog-container-elevation-shadow, 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12));border-radius:var(--mdc-dialog-container-shape, 4px);background-color:var(--mdc-dialog-container-color, white)}[dir=rtl] .mat-mdc-dialog-surface{text-align:right}.mdc-dialog--open .mat-mdc-dialog-surface,.mdc-dialog--closing .mat-mdc-dialog-surface{transform:none}._mat-animation-noopable .mat-mdc-dialog-surface{transition:none}.mat-mdc-dialog-surface::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:2px solid rgba(0,0,0,0);border-radius:inherit;content:"";pointer-events:none}.mat-mdc-dialog-title{display:block;position:relative;flex-shrink:0;box-sizing:border-box;margin:0 0 1px;padding:var(--mat-dialog-headline-padding, 0 24px 9px)}.mat-mdc-dialog-title::before{display:inline-block;width:0;height:40px;content:"";vertical-align:0}[dir=rtl] .mat-mdc-dialog-title{text-align:right}.mat-mdc-dialog-container .mat-mdc-dialog-title{color:var(--mdc-dialog-subhead-color, rgba(0, 0, 0, 0.87));font-family:var(--mdc-dialog-subhead-font, Roboto, sans-serif);line-height:var(--mdc-dialog-subhead-line-height, 1.5rem);font-size:var(--mdc-dialog-subhead-size, 1rem);font-weight:var(--mdc-dialog-subhead-weight, 400);letter-spacing:var(--mdc-dialog-subhead-tracking, 0.03125em)}.mat-mdc-dialog-content{display:block;flex-grow:1;box-sizing:border-box;margin:0;overflow:auto;max-height:65vh}.mat-mdc-dialog-content>:first-child{margin-top:0}.mat-mdc-dialog-content>:last-child{margin-bottom:0}.mat-mdc-dialog-container .mat-mdc-dialog-content{color:var(--mdc-dialog-supporting-text-color, rgba(0, 0, 0, 0.6));font-family:var(--mdc-dialog-supporting-text-font, Roboto, sans-serif);line-height:var(--mdc-dialog-supporting-text-line-height, 1.5rem);font-size:var(--mdc-dialog-supporting-text-size, 1rem);font-weight:var(--mdc-dialog-supporting-text-weight, 400);letter-spacing:var(--mdc-dialog-supporting-text-tracking, 0.03125em)}.mat-mdc-dialog-container .mat-mdc-dialog-content{padding:var(--mat-dialog-content-padding, 20px 24px)}.mat-mdc-dialog-container-with-actions .mat-mdc-dialog-content{padding:var(--mat-dialog-with-actions-content-padding, 20px 24px)}.mat-mdc-dialog-container .mat-mdc-dialog-title+.mat-mdc-dialog-content{padding-top:0}.mat-mdc-dialog-actions{display:flex;position:relative;flex-shrink:0;flex-wrap:wrap;align-items:center;justify-content:flex-end;box-sizing:border-box;min-height:52px;margin:0;padding:8px;border-top:1px solid rgba(0,0,0,0);padding:var(--mat-dialog-actions-padding, 8px);justify-content:var(--mat-dialog-actions-alignment, start)}.cdk-high-contrast-active .mat-mdc-dialog-actions{border-top-color:CanvasText}.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-start,.mat-mdc-dialog-actions[align=start]{justify-content:start}.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-center,.mat-mdc-dialog-actions[align=center]{justify-content:center}.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-end,.mat-mdc-dialog-actions[align=end]{justify-content:flex-end}.mat-mdc-dialog-actions .mat-button-base+.mat-button-base,.mat-mdc-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-mdc-dialog-actions .mat-button-base+.mat-button-base,[dir=rtl] .mat-mdc-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:0;margin-right:8px}.mat-mdc-dialog-component-host{display:contents}'],encapsulation:2})}return o})();const j="--mat-dialog-transition-duration";function U(o){return null==o?null:"number"==typeof o?o:o.endsWith("ms")?(0,B.OE)(o.substring(0,o.length-2)):o.endsWith("s")?1e3*(0,B.OE)(o.substring(0,o.length-1)):"0"===o?0:null}var b=function(o){return o[o.OPEN=0]="OPEN",o[o.CLOSING=1]="CLOSING",o[o.CLOSED=2]="CLOSED",o}(b||{});class C{constructor(n,t,e){this._ref=n,this._containerInstance=e,this._afterOpened=new m.B,this._beforeClosed=new m.B,this._state=b.OPEN,this.disableClose=t.disableClose,this.id=n.id,n.addPanelClass("mat-mdc-dialog-panel"),e._animationStateChanged.pipe((0,D.p)(i=>"opened"===i.state),(0,x.s)(1)).subscribe(()=>{this._afterOpened.next(),this._afterOpened.complete()}),e._animationStateChanged.pipe((0,D.p)(i=>"closed"===i.state),(0,x.s)(1)).subscribe(()=>{clearTimeout(this._closeFallbackTimeout),this._finishDialogClose()}),n.overlayRef.detachments().subscribe(()=>{this._beforeClosed.next(this._result),this._beforeClosed.complete(),this._finishDialogClose()}),(0,st.h)(this.backdropClick(),this.keydownEvents().pipe((0,D.p)(i=>i.keyCode===v._f&&!this.disableClose&&!(0,v.rp)(i)))).subscribe(i=>{this.disableClose||(i.preventDefault(),X(this,"keydown"===i.type?"keyboard":"mouse"))})}close(n){this._result=n,this._containerInstance._animationStateChanged.pipe((0,D.p)(t=>"closing"===t.state),(0,x.s)(1)).subscribe(t=>{this._beforeClosed.next(n),this._beforeClosed.complete(),this._ref.overlayRef.detachBackdrop(),this._closeFallbackTimeout=setTimeout(()=>this._finishDialogClose(),t.totalTime+100)}),this._state=b.CLOSING,this._containerInstance._startExitAnimation()}afterOpened(){return this._afterOpened}afterClosed(){return this._ref.closed}beforeClosed(){return this._beforeClosed}backdropClick(){return this._ref.backdropClick}keydownEvents(){return this._ref.keydownEvents}updatePosition(n){let t=this._ref.config.positionStrategy;return n&&(n.left||n.right)?n.left?t.left(n.left):t.right(n.right):t.centerHorizontally(),n&&(n.top||n.bottom)?n.top?t.top(n.top):t.bottom(n.bottom):t.centerVertically(),this._ref.updatePosition(),this}updateSize(n="",t=""){return this._ref.updateSize(n,t),this}addPanelClass(n){return this._ref.addPanelClass(n),this}removePanelClass(n){return this._ref.removePanelClass(n),this}getState(){return this._state}_finishDialogClose(){this._state=b.CLOSED,this._ref.close(this._result,{focusOrigin:this._closeInteractionType}),this.componentInstance=null}}function X(o,n,t){return o._closeInteractionType=n,o.close(t)}const z=new a.nKC("MatMdcDialogData"),ht=new a.nKC("mat-mdc-dialog-default-options"),G=new a.nKC("mat-mdc-dialog-scroll-strategy",{providedIn:"root",factory:()=>{const o=(0,a.WQX)(h.hJ);return()=>o.scrollStrategies.block()}});let gt=0,E=(()=>{class o{get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}_getAfterAllClosed(){const t=this._parentDialog;return t?t._getAfterAllClosed():this._afterAllClosedAtThisLevel}constructor(t,e,i,s,r,l,u,f){this._overlay=t,this._defaultOptions=s,this._scrollStrategy=r,this._parentDialog=l,this._openDialogsAtThisLevel=[],this._afterAllClosedAtThisLevel=new m.B,this._afterOpenedAtThisLevel=new m.B,this.dialogConfigClass=M,this.afterAllClosed=(0,w.v)(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe((0,F.Z)(void 0))),this._dialog=e.get(nt),this._dialogRefConstructor=C,this._dialogContainerType=N,this._dialogDataToken=z}open(t,e){let i;(e={...this._defaultOptions||new M,...e}).id=e.id||"mat-mdc-dialog-"+gt++,e.scrollStrategy=e.scrollStrategy||this._scrollStrategy();const s=this._dialog.open(t,{...e,positionStrategy:this._overlay.position().global().centerHorizontally().centerVertically(),disableClose:!0,closeOnDestroy:!1,closeOnOverlayDetachments:!1,container:{type:this._dialogContainerType,providers:()=>[{provide:this.dialogConfigClass,useValue:e},{provide:y,useValue:e}]},templateContext:()=>({dialogRef:i}),providers:(r,l,u)=>(i=new this._dialogRefConstructor(r,e,u),i.updatePosition(e?.position),[{provide:this._dialogContainerType,useValue:u},{provide:this._dialogDataToken,useValue:l.data},{provide:this._dialogRefConstructor,useValue:i}])});return i.componentRef=s.componentRef,i.componentInstance=s.componentInstance,this.openDialogs.push(i),this.afterOpened.next(i),i.afterClosed().subscribe(()=>{const r=this.openDialogs.indexOf(i);r>-1&&(this.openDialogs.splice(r,1),this.openDialogs.length||this._getAfterAllClosed().next())}),i}closeAll(){this._closeDialogs(this.openDialogs)}getDialogById(t){return this.openDialogs.find(e=>e.id===t)}ngOnDestroy(){this._closeDialogs(this._openDialogsAtThisLevel),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete()}_closeDialogs(t){let e=t.length;for(;e--;)t[e].close()}static#t=this.\u0275fac=function(e){return new(e||o)(a.KVO(h.hJ),a.KVO(a.zZn),a.KVO(A.aZ,8),a.KVO(ht,8),a.KVO(G),a.KVO(o,12),a.KVO(h.Sf),a.KVO(a.bc$,8))};static#e=this.\u0275prov=a.jDH({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})(),mt=0,K=(()=>{class o{constructor(t,e,i){this.dialogRef=t,this._elementRef=e,this._dialog=i,this.type="button"}ngOnInit(){this.dialogRef||(this.dialogRef=Z(this._elementRef,this._dialog.openDialogs))}ngOnChanges(t){const e=t._matDialogClose||t._matDialogCloseResult;e&&(this.dialogResult=e.currentValue)}_onButtonClick(t){X(this.dialogRef,0===t.screenX&&0===t.screenY?"keyboard":"mouse",this.dialogResult)}static#t=this.\u0275fac=function(e){return new(e||o)(a.rXU(C,8),a.rXU(a.aKT),a.rXU(E))};static#e=this.\u0275dir=a.FsC({type:o,selectors:[["","mat-dialog-close",""],["","matDialogClose",""]],hostVars:2,hostBindings:function(e,i){1&e&&a.bIt("click",function(r){return i._onButtonClick(r)}),2&e&&a.BMQ("aria-label",i.ariaLabel||null)("type",i.type)},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],type:"type",dialogResult:[0,"mat-dialog-close","dialogResult"],_matDialogClose:[0,"matDialogClose","_matDialogClose"]},exportAs:["matDialogClose"],standalone:!0,features:[a.OA$]})}return o})(),H=(()=>{class o{constructor(t,e,i){this._dialogRef=t,this._elementRef=e,this._dialog=i}ngOnInit(){this._dialogRef||(this._dialogRef=Z(this._elementRef,this._dialog.openDialogs)),this._dialogRef&&Promise.resolve().then(()=>{this._onAdd()})}ngOnDestroy(){this._dialogRef?._containerInstance&&Promise.resolve().then(()=>{this._onRemove()})}static#t=this.\u0275fac=function(e){return new(e||o)(a.rXU(C,8),a.rXU(a.aKT),a.rXU(E))};static#e=this.\u0275dir=a.FsC({type:o,standalone:!0})}return o})(),Q=(()=>{class o extends H{constructor(){super(...arguments),this.id="mat-mdc-dialog-title-"+mt++}_onAdd(){this._dialogRef._containerInstance?._addAriaLabelledBy?.(this.id)}_onRemove(){this._dialogRef?._containerInstance?._removeAriaLabelledBy?.(this.id)}static#t=this.\u0275fac=(()=>{let t;return function(i){return(t||(t=a.xGo(o)))(i||o)}})();static#e=this.\u0275dir=a.FsC({type:o,selectors:[["","mat-dialog-title",""],["","matDialogTitle",""]],hostAttrs:[1,"mat-mdc-dialog-title","mdc-dialog__title"],hostVars:1,hostBindings:function(e,i){2&e&&a.Mr5("id",i.id)},inputs:{id:"id"},exportAs:["matDialogTitle"],standalone:!0,features:[a.Vt3]})}return o})(),Y=(()=>{class o{static#t=this.\u0275fac=function(e){return new(e||o)};static#e=this.\u0275dir=a.FsC({type:o,selectors:[["","mat-dialog-content",""],["mat-dialog-content"],["","matDialogContent",""]],hostAttrs:[1,"mat-mdc-dialog-content","mdc-dialog__content"],standalone:!0,features:[a.nM4([lt.uv])]})}return o})(),W=(()=>{class o extends H{_onAdd(){this._dialogRef._containerInstance?._updateActionSectionCount?.(1)}_onRemove(){this._dialogRef._containerInstance?._updateActionSectionCount?.(-1)}static#t=this.\u0275fac=(()=>{let t;return function(i){return(t||(t=a.xGo(o)))(i||o)}})();static#e=this.\u0275dir=a.FsC({type:o,selectors:[["","mat-dialog-actions",""],["mat-dialog-actions"],["","matDialogActions",""]],hostAttrs:[1,"mat-mdc-dialog-actions","mdc-dialog__actions"],hostVars:6,hostBindings:function(e,i){2&e&&a.AVh("mat-mdc-dialog-actions-align-start","start"===i.align)("mat-mdc-dialog-actions-align-center","center"===i.align)("mat-mdc-dialog-actions-align-end","end"===i.align)},inputs:{align:"align"},standalone:!0,features:[a.Vt3]})}return o})();function Z(o,n){let t=o.nativeElement.parentElement;for(;t&&!t.classList.contains("mat-mdc-dialog-container");)t=t.parentElement;return t?n.find(e=>e.id===t.id):null}}}]);