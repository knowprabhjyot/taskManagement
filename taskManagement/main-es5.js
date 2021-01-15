(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! C:\Users\pgambhir\Desktop\taskManagement\src\main.ts */
      "zUnb");
      /***/
    },

    /***/
    "2MiI":
    /*!*******************************************************!*\
      !*** ./src/app/components/header/header.component.ts ***!
      \*******************************************************/

    /*! exports provided: HeaderComponent */

    /***/
    function MiI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
        return HeaderComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/services/auth.service */
      "lGQG");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var src_app_services_task_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/task.service */
      "i6c7");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/toolbar */
      "/t3+");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");

      function HeaderComponent_mat_toolbar_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_mat_toolbar_0_Template_button_click_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);

            var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r1.logout();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Logout");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Hello ", ctx_r0.user.name, "");
        }
      }

      var HeaderComponent = /*#__PURE__*/function () {
        function HeaderComponent(authService, router, snackBar, taskService) {
          _classCallCheck(this, HeaderComponent);

          this.authService = authService;
          this.router = router;
          this.snackBar = snackBar;
          this.taskService = taskService;
        }

        _createClass(HeaderComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.authService.user.subscribe(function (response) {
              console.log(response);
              _this.user = response;
            });
          }
          /**
           *
           * @memberof HeaderComponent
           * Logs out the user and sets localstorage user to null
           */

        }, {
          key: "logout",
          value: function logout() {
            this.authService.logout();
            this.router.navigateByUrl('/login');
            this.snackBar.open('Successfully Logged Out', null, {
              duration: 2000
            });
            this.user = null;
          }
        }]);

        return HeaderComponent;
      }();

      HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
        return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_task_service__WEBPACK_IMPORTED_MODULE_4__["TaskService"]));
      };

      HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: HeaderComponent,
        selectors: [["app-header"]],
        decls: 1,
        vars: 1,
        consts: [["color", "primary", "fxLayout", "row", "fxLayoutAlign", "space-between center", 4, "ngIf"], ["color", "primary", "fxLayout", "row", "fxLayoutAlign", "space-between center"], ["mat-raised-button", "", "color", "accent", 1, "menu-button", "color-primary", 3, "click"]],
        template: function HeaderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, HeaderComponent_mat_toolbar_0_Template, 5, 1, "mat-toolbar", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.user);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbar"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutAlignDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"]],
        styles: [".menu-button[_ngcontent-%COMP%] {\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxoZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwyQkFBQTtFQUFBLHdCQUFBO0VBQUEsbUJBQUE7QUFDSiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWVudS1idXR0b24ge1xyXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcclxufVxyXG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-header',
            templateUrl: './header.component.html',
            styleUrls: ['./header.component.scss']
          }]
        }], function () {
          return [{
            type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }, {
            type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]
          }, {
            type: src_app_services_task_service__WEBPACK_IMPORTED_MODULE_4__["TaskService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "7of8":
    /*!*****************************************************!*\
      !*** ./src/app/modules/material/material.module.ts ***!
      \*****************************************************/

    /*! exports provided: MaterialModule */

    /***/
    function of8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MaterialModule", function () {
        return MaterialModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/toolbar */
      "/t3+");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");

      var MaterialModule = function MaterialModule() {
        _classCallCheck(this, MaterialModule);
      };

      MaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: MaterialModule
      });
      MaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function MaterialModule_Factory(t) {
          return new (t || MaterialModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBarModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"]], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBarModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MaterialModule, {
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBarModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"]],
          exports: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBarModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MaterialModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBarModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"]],
            exports: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBarModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "BYy1":
    /*!**********************************************************************!*\
      !*** ./src/app/components/authentication/signup/signup.component.ts ***!
      \**********************************************************************/

    /*! exports provided: SignupComponent */

    /***/
    function BYy1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SignupComponent", function () {
        return SignupComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/auth.service */
      "lGQG");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_services_task_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/task.service */
      "i6c7");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");

      function SignupComponent_mat_error_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Name is ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "required");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function SignupComponent_mat_error_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Email is ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "required");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function SignupComponent_mat_error_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please enter a valid email address ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function SignupComponent_mat_error_28_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Password is ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "required");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var SignupComponent = /*#__PURE__*/function () {
        function SignupComponent(authService, router, taskService) {
          _classCallCheck(this, SignupComponent);

          this.authService = authService;
          this.router = router;
          this.taskService = taskService;
          this.hide = true;
        }

        _createClass(SignupComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.signupFormGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
              name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
              email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]),
              password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
            });
          }
          /**
           *
           * @memberof SignupComponent
           * Signs up the user after the form is valid
           */

        }, {
          key: "signUp",
          value: function signUp() {
            if (this.signupFormGroup.valid) {
              var user = this.signupFormGroup.value;
              this.authService.signUp(user);
              var taskList = this.taskService.getTaskListBasedOnUser();
              this.taskService.taskListSubject.next(taskList);
              this.router.navigateByUrl('');
            }
          }
        }]);

        return SignupComponent;
      }();

      SignupComponent.ɵfac = function SignupComponent_Factory(t) {
        return new (t || SignupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_task_service__WEBPACK_IMPORTED_MODULE_4__["TaskService"]));
      };

      SignupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SignupComponent,
        selectors: [["app-signup"]],
        decls: 40,
        vars: 7,
        consts: [["fxLayout", "row", "fxLayoutAlign", "center center", 1, "login-container"], [1, "login-card"], [1, "card-header", "bg-primary"], [3, "formGroup", "ngSubmit"], ["fxLayout", "column"], ["appearance", "outline"], ["required", "", "formControlName", "name", "matInput", "", "placeholder", "Enter your Name here"], [4, "ngIf"], ["color", "primary", "matPrefix", ""], ["required", "", "formControlName", "email", "matInput", "", "placeholder", "Enter your Email here"], ["required", "", "formControlName", "password", "matInput", "", "placeholder", "Enter your password", 3, "type"], ["matSuffix", "", 3, "click"], ["fxLayout", "column", "fxLayoutGap", "8px", "fxLayoutAlign", "center center"], ["mat-raised-button", "", "color", "primary"], ["routerLink", "/login"]],
        template: function SignupComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-header", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Hey, Welcome. Signup to access Task Management");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SignupComponent_Template_form_ngSubmit_6_listener() {
              return ctx.signUp();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-form-field", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, SignupComponent_mat_error_13_Template, 4, 0, "mat-error", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-icon", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "account_circle");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-form-field", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Email");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, SignupComponent_mat_error_20_Template, 4, 0, "mat-error", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, SignupComponent_mat_error_21_Template, 2, 0, "mat-error", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-icon", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "email");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-form-field", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Password");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "input", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, SignupComponent_mat_error_28_Template, 4, 0, "mat-error", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-icon", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "lock");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-icon", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SignupComponent_Template_mat_icon_click_31_listener() {
              return ctx.hide = !ctx.hide;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-card-actions", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "button", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Signup");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Already a Member! ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Login");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.signupFormGroup);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.signupFormGroup.controls["name"].hasError("required"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.signupFormGroup.controls["email"].hasError("required"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.signupFormGroup.controls["email"].hasError && !ctx.signupFormGroup.controls["email"].hasError("required"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx.hide ? "password" : "text");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.signupFormGroup.controls["password"].hasError("required"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.hide ? "visibility" : "visibility_off");
          }
        },
        directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutAlignDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardHeader"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatLabel"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatPrefix"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatSuffix"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardActions"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutGapDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatError"]],
        styles: [".login-container[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  background-image: linear-gradient(to top right, #9c27b0 50%, #e3e6f1 50%);\n}\n\n.login-card[_ngcontent-%COMP%] {\n  width: 400px;\n  padding: 0;\n}\n\nmat-card-content[_ngcontent-%COMP%] {\n  padding: 16px;\n  margin: 0;\n}\n\n.card-header[_ngcontent-%COMP%] {\n  color: white;\n  padding: 32px 16px;\n  text-align: center;\n  margin: 0;\n}\n\nmat-card-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 50%;\n}\n\nmat-icon[_ngcontent-%COMP%] {\n  padding-right: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcc2lnbnVwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSx5RUFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtFQUNBLFVBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7RUFDQSxTQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7QUFDSjs7QUFHSTtFQUNJLFVBQUE7QUFBUjs7QUFJQTtFQUNJLGtCQUFBO0FBREoiLCJmaWxlIjoic2lnbnVwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ2luLWNvbnRhaW5lciB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byB0b3AgcmlnaHQsICM5YzI3YjAgNTAlLCByZ2IoMjI3IDIzMCAyNDEpIDUwJSk7XHJcbn1cclxuXHJcbi5sb2dpbi1jYXJkIHtcclxuICAgIHdpZHRoOiA0MDBweDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbm1hdC1jYXJkLWNvbnRlbnQge1xyXG4gICAgcGFkZGluZzogMTZweDtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG5cclxuLmNhcmQtaGVhZGVyIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDMycHggMTZweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG5cclxubWF0LWNhcmQtYWN0aW9ucyB7XHJcbiAgICBidXR0b24ge1xyXG4gICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICB9XHJcbn1cclxuXHJcbm1hdC1pY29uIHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDhweDtcclxufSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignupComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-signup',
            templateUrl: './signup.component.html',
            styleUrls: ['./signup.component.scss']
          }]
        }], function () {
          return [{
            type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }, {
            type: src_app_services_task_service__WEBPACK_IMPORTED_MODULE_4__["TaskService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "BuFo":
    /*!***************************************************!*\
      !*** ./src/app/components/home/home.component.ts ***!
      \***************************************************/

    /*! exports provided: HomeComponent */

    /***/
    function BuFo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
        return HomeComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _add_task_add_task_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../add-task/add-task.component */
      "hOfM");
      /* harmony import */


      var _add_user_add_user_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../add-user/add-user.component */
      "yb62");
      /* harmony import */


      var src_app_services_task_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/task.service */
      "i6c7");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/auth.service */
      "lGQG");
      /* harmony import */


      var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/user.service */
      "qfBg");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _task_task_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../task/task.component */
      "CvMt");
      /* harmony import */


      var _user_user_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../user/user.component */
      "ytin");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");

      function HomeComponent_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-task", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var task_r6 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("task", task_r6);
        }
      }

      function HomeComponent_div_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-user", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var user_r7 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("user", user_r7);
        }
      }

      function HomeComponent_div_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "No Tasks Added Yet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function HomeComponent_div_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "No Users Added Yet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function HomeComponent_button_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_button_6_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r8.createTask();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "add");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function HomeComponent_button_7_Template(rf, ctx) {
        if (rf & 1) {
          var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_button_7_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r10.addUser();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "add");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var HomeComponent = /*#__PURE__*/function () {
        function HomeComponent(taskService, dialog, authService, userService) {
          _classCallCheck(this, HomeComponent);

          this.taskService = taskService;
          this.dialog = dialog;
          this.authService = authService;
          this.userService = userService;
          this.taskList = [];
          this.userList = [];
        }

        _createClass(HomeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.user = this.authService.userValue;

            if (this.user.isAdmin) {
              this.getUserList();
            } else {
              this.getTaskList();
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this.taskSubscription) {
              this.taskSubscription.unsubscribe();
              this.taskList = [];
            }
          }
        }, {
          key: "getTaskList",
          value: function getTaskList() {
            var _this2 = this;

            this.taskSubscription = this.taskService.taskList.subscribe(function (response) {
              _this2.taskList = response;
              console.log(_this2.taskList);
            });
          }
          /**
           *
           * @memberof HomeComponent
           * Gets user list from the localstorage and removes admin from the UI View
           */

        }, {
          key: "getUserList",
          value: function getUserList() {
            var _this3 = this;

            this.userSubscription = this.userService.userList.subscribe(function (response) {
              _this3.userList = response;

              var index = _this3.userList.findIndex(function (user) {
                return user.isAdmin === true;
              });

              _this3.userList.splice(index, 1);
            });
          }
        }, {
          key: "createTask",
          value: function createTask() {
            var dialogRef = this.dialog.open(_add_task_add_task_component__WEBPACK_IMPORTED_MODULE_1__["AddTaskComponent"], {
              width: '500px'
            });
            dialogRef.afterClosed().subscribe(function (result) {
              console.log('The dialog was closed');
            });
          }
        }, {
          key: "addUser",
          value: function addUser() {
            var dialogRef = this.dialog.open(_add_user_add_user_component__WEBPACK_IMPORTED_MODULE_2__["AddUserComponent"], {
              width: '500'
            });
            dialogRef.afterClosed().subscribe(function (result) {
              console.log('The dialog was closed');
            });
          }
        }]);

        return HomeComponent;
      }();

      HomeComponent.ɵfac = function HomeComponent_Factory(t) {
        return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_task_service__WEBPACK_IMPORTED_MODULE_3__["TaskService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"]));
      };

      HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: HomeComponent,
        selectors: [["app-home"]],
        decls: 8,
        vars: 6,
        consts: [[1, "container"], ["fxLayout", "row wrap", "fxLayoutGap", "16px", "fxLayoutAlign.xs", "center flex-start", "fxLayoutAlign", "flex-start flex-start", 1, "full-height"], ["fxFlex", "20", "fxFlex.xs", "0 1 calc(100% - 32px)", "fxFlex", "0 1 calc(25% - 32px)", "fxFlex.sm", "0 1 calc(50% - 32px)", "fxFlex.lt-md", "0 1 calc(33.3% - 32px)", "class", "task", 4, "ngFor", "ngForOf"], ["fxFlex", "20", "fxFlex", "0 1 calc(25% - 32px)", "fxFlex.lt-md", "0 1 calc(33.3% - 32px)", "fxFlex.lt-sm", "0 1 calc(100% - 32px)", "class", "task", 4, "ngFor", "ngForOf"], ["fxLayout", "row", "fxLayoutAlign", "center center", "class", "full-height full-width", 4, "ngIf"], ["class", "add-button", "mat-fab", "", "color", "primary", "aria-label", "Add Task", 3, "click", 4, "ngIf"], ["fxFlex", "20", "fxFlex.xs", "0 1 calc(100% - 32px)", "fxFlex", "0 1 calc(25% - 32px)", "fxFlex.sm", "0 1 calc(50% - 32px)", "fxFlex.lt-md", "0 1 calc(33.3% - 32px)", 1, "task"], [3, "task"], ["fxFlex", "20", "fxFlex", "0 1 calc(25% - 32px)", "fxFlex.lt-md", "0 1 calc(33.3% - 32px)", "fxFlex.lt-sm", "0 1 calc(100% - 32px)", 1, "task"], [3, "user"], ["fxLayout", "row", "fxLayoutAlign", "center center", 1, "full-height", "full-width"], ["mat-fab", "", "color", "primary", "aria-label", "Add Task", 1, "add-button", 3, "click"]],
        template: function HomeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HomeComponent_div_2_Template, 2, 1, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HomeComponent_div_3_Template, 2, 1, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, HomeComponent_div_4_Template, 3, 0, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, HomeComponent_div_5_Template, 3, 0, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, HomeComponent_button_6_Template, 3, 0, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, HomeComponent_button_7_Template, 3, 0, "button", 5);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.taskList);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.userList);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.user && !ctx.user.isAdmin && (!ctx.taskList || ctx.taskList.length === 0));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.user && ctx.user.isAdmin && (!ctx.userList || ctx.userList.length === 0));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.user.isAdmin);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.user.isAdmin);
          }
        },
        directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutGapDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutAlignDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultFlexDirective"], _task_task_component__WEBPACK_IMPORTED_MODULE_9__["TaskComponent"], _user_user_component__WEBPACK_IMPORTED_MODULE_10__["UserComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIcon"]],
        styles: [".task[_ngcontent-%COMP%] {\n  margin-bottom: 32px;\n}\n\n.container[_ngcontent-%COMP%] {\n  padding: 32px 16px;\n  height: calc(100vh - 64px);\n  box-sizing: border-box;\n}\n\n.add-button[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 30px;\n  right: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsMEJBQUE7RUFDQSxzQkFBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBQ0oiLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50YXNrIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDMycHg7XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gICAgcGFkZGluZzogMzJweCAxNnB4O1xyXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNjRweCk7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG4uYWRkLWJ1dHRvbiB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBib3R0b206IDMwcHg7XHJcbiAgICByaWdodDogMzBweDtcclxufSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-home',
            templateUrl: './home.component.html',
            styleUrls: ['./home.component.scss']
          }]
        }], function () {
          return [{
            type: src_app_services_task_service__WEBPACK_IMPORTED_MODULE_3__["TaskService"]
          }, {
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]
          }, {
            type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
          }, {
            type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "CvMt":
    /*!***************************************************!*\
      !*** ./src/app/components/task/task.component.ts ***!
      \***************************************************/

    /*! exports provided: TaskComponent */

    /***/
    function CvMt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TaskComponent", function () {
        return TaskComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var src_app_services_task_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/task.service */
      "i6c7");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/auth.service */
      "lGQG");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");

      function TaskComponent_div_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaskComponent_div_2_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r6.editTask();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "edit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaskComponent_div_2_Template_button_click_4_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r8.deleteTask();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function TaskComponent_span_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.task.title);
        }
      }

      function TaskComponent_mat_form_field_4_mat_error_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Title is ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "required");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function TaskComponent_mat_form_field_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TaskComponent_mat_form_field_4_Template_input_ngModelChange_3_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r10.task.title = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TaskComponent_mat_form_field_4_mat_error_4_Template, 4, 0, "mat-error", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.task.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.createTaskFormGroup.controls["title"].hasError("required"));
        }
      }

      function TaskComponent_span_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r3.task.description, " ");
        }
      }

      function TaskComponent_mat_form_field_8_mat_error_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Description is ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "required");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function TaskComponent_mat_form_field_8_Template(rf, ctx) {
        if (rf & 1) {
          var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Description");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "textarea", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TaskComponent_mat_form_field_8_Template_textarea_ngModelChange_3_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r13.task.description = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TaskComponent_mat_form_field_8_mat_error_4_Template, 4, 0, "mat-error", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r4.task.description);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.createTaskFormGroup.controls["description"].hasError("required"));
        }
      }

      function TaskComponent_div_10_Template(rf, ctx) {
        if (rf & 1) {
          var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Update");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaskComponent_div_10_Template_button_click_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);

            var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r15.cancel();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r5.createTaskFormGroup.invalid || !ctx_r5.createTaskFormGroup.dirty);
        }
      }

      var TaskComponent = /*#__PURE__*/function () {
        function TaskComponent(dialog, taskService, snackBar, authService) {
          _classCallCheck(this, TaskComponent);

          this.dialog = dialog;
          this.taskService = taskService;
          this.snackBar = snackBar;
          this.authService = authService;
          this.isEditable = false;
        }

        _createClass(TaskComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.tempData = Object.assign({}, this.task);
            this.createTaskFormGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
              title: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
              description: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
            });
          }
        }, {
          key: "editTask",
          value: function editTask() {
            this.isEditable = true;
          }
        }, {
          key: "cancel",
          value: function cancel() {
            this.isEditable = false;
            this.task = this.tempData;
          }
          /**
           *
           * @memberof TaskComponent
           * Updates Task in the localstorage
           */

        }, {
          key: "updateTask",
          value: function updateTask() {
            var response = this.taskService.updateTask(this.task);

            if (response.status === 201) {
              this.isEditable = false;
            }

            this.snackBar.open(response.message, null, {
              duration: 2000
            });
          }
          /**
           *
           * @memberof TaskComponent
           * Deletes task from the localstorage
           */

        }, {
          key: "deleteTask",
          value: function deleteTask() {
            var response = this.taskService.deleteTask(this.task.id);

            if (response.status === 200) {
              this.snackBar.open(response.message, null, {
                duration: 2000
              });
            }
          }
        }]);

        return TaskComponent;
      }();

      TaskComponent.ɵfac = function TaskComponent_Factory(t) {
        return new (t || TaskComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_task_service__WEBPACK_IMPORTED_MODULE_3__["TaskService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]));
      };

      TaskComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: TaskComponent,
        selectors: [["app-task"]],
        inputs: {
          task: "task"
        },
        decls: 11,
        vars: 7,
        consts: [[1, "full-width", "full-height", 3, "formGroup", "ngSubmit"], ["fxLayout", "row", "fxLayoutAlign", "flex-end", "fxLayoutGap", "8px", 4, "ngIf"], [4, "ngIf"], ["class", "full-width", "appearance", "outline", 4, "ngIf"], ["fxLayout", "column", "fxLayoutAlign", "space-between space-between", 1, "full-height"], ["fxLayout", "row", "fxLayoutGap", "8px", "fxLayoutAlign", "center center", 4, "ngIf"], ["fxLayout", "row", "fxLayoutAlign", "flex-end", "fxLayoutGap", "8px"], ["mat-mini-fab", "", 1, "fab-icon", 3, "click"], ["mat-mini-fab", "", "color", "warn", 1, "fab-icon", 3, "click"], ["appearance", "outline", 1, "full-width"], ["required", "", "formControlName", "title", "matInput", "", "placeholder", "Enter Task Title here", 3, "ngModel", "ngModelChange"], ["required", "", "formControlName", "description", "matInput", "", "placeholder", "Enter Task Description here", 3, "ngModel", "ngModelChange"], ["fxLayout", "row", "fxLayoutGap", "8px", "fxLayoutAlign", "center center"], ["type", "submit", "mat-raised-button", "", "color", "primary", 3, "disabled"], ["mat-raised-button", "", "color", "warn", 3, "click"]],
        template: function TaskComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function TaskComponent_Template_form_ngSubmit_1_listener() {
              return ctx.updateTask();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TaskComponent_div_2_Template, 7, 0, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TaskComponent_span_3_Template, 3, 1, "span", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TaskComponent_mat_form_field_4_Template, 5, 2, "mat-form-field", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, TaskComponent_span_7_Template, 2, 1, "span", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, TaskComponent_mat_form_field_8_Template, 5, 2, "mat-form-field", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, TaskComponent_div_10_Template, 5, 1, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.createTaskFormGroup);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isEditable);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isEditable);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isEditable);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isEditable);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isEditable);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isEditable);
          }
        },
        directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCard"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultLayoutGapDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatLabel"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatError"]],
        styles: ["mat-card[_ngcontent-%COMP%] {\n  min-height: 250px;\n  background-color: #d5d6da;\n}\n\nh2[_ngcontent-%COMP%] {\n  font-weight: 800;\n  margin-bottom: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFx0YXNrLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7RUFDQSx5QkFBQTtBQUNKOztBQUdBO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtBQUFKIiwiZmlsZSI6InRhc2suY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtY2FyZCB7XHJcbiAgICBtaW4taGVpZ2h0OiAyNTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkNWQ2ZGE7XHJcbn1cclxuXHJcblxyXG5oMiB7XHJcbiAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNHB4O1xyXG59Il19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TaskComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-task',
            templateUrl: './task.component.html',
            styleUrls: ['./task.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]
          }, {
            type: src_app_services_task_service__WEBPACK_IMPORTED_MODULE_3__["TaskService"]
          }, {
            type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]
          }, {
            type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
          }];
        }, {
          task: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "G9Us":
    /*!***************************************************************!*\
      !*** ./src/app/modules/material/routes/app-routing.module.ts ***!
      \***************************************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function G9Us(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/auth.guard */
      "tIkO");
      /* harmony import */


      var _components_authentication_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../components/authentication/login/login.component */
      "Ysw/");
      /* harmony import */


      var _components_authentication_signup_signup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../components/authentication/signup/signup.component */
      "BYy1");
      /* harmony import */


      var _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../components/home/home.component */
      "BuFo");

      var routes = [{
        path: '',
        component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
        canActivate: [src_app_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]]
      }, {
        path: 'login',
        component: _components_authentication_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
      }, {
        path: 'signup',
        component: _components_authentication_signup_signup_component__WEBPACK_IMPORTED_MODULE_4__["SignupComponent"]
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AppRoutingModule_Factory(t) {
          return new (t || AppRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
          relativeLinkResolution: 'legacy'
        })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
              relativeLinkResolution: 'legacy'
            })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "OlR4":
    /*!********************************************!*\
      !*** ./src/app/services/common.service.ts ***!
      \********************************************/

    /*! exports provided: CommonService */

    /***/
    function OlR4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CommonService", function () {
        return CommonService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var CommonService = /*#__PURE__*/function () {
        function CommonService() {
          _classCallCheck(this, CommonService);
        }
        /**
         * @param {User[]} userList
         * @memberof CommonService
         * Sets UserList to local storage
         */


        _createClass(CommonService, [{
          key: "setUserListToLocalStorage",
          value: function setUserListToLocalStorage(userList) {
            localStorage.setItem('userList', JSON.stringify(userList));
          }
          /**
           *
           * @returns {User[]}
           * @memberof CommonService
           * Gets UserList from LocalStorage
           */

        }, {
          key: "getUserListFromLocalStorage",
          value: function getUserListFromLocalStorage() {
            return JSON.parse(localStorage.getItem('userList'));
          }
          /**
           *
           * @returns {User[]}
           * @memberof CommonService
           * Returns [] if userList is undefined otherwise returns list
           */

        }, {
          key: "getUserListFromStorage",
          value: function getUserListFromStorage() {
            var userList = this.getUserListFromLocalStorage();

            if (!userList) {
              userList = [];
            }

            return userList;
          }
          /**
           *
           * @returns {User}
           * @memberof CommonService
           * Gets Current User from localstorage
           */

        }, {
          key: "getUSerFromLocalStorage",
          value: function getUSerFromLocalStorage() {
            return JSON.parse(localStorage.getItem('user'));
          }
          /**
           *
           * @param {User} user
           * @memberof CommonService
           * Sets user to local storage
           */

        }, {
          key: "setUserToLocalStorage",
          value: function setUserToLocalStorage(user) {
            localStorage.setItem('user', JSON.stringify(user));
          }
          /**
           *
           * @returns {Task[]}
           * @memberof CommonService
           * Gets task list from local storage
           */

        }, {
          key: "getTaskListFromLocalStorage",
          value: function getTaskListFromLocalStorage() {
            return JSON.parse(localStorage.getItem('taskList'));
          }
          /**
           *
           * @param {Task[]} taskList
           * @memberof CommonService
           * Sets task list to local storage
           */

        }, {
          key: "setTaskListToLocalStorage",
          value: function setTaskListToLocalStorage(taskList) {
            localStorage.setItem('taskList', JSON.stringify(taskList));
          }
        }]);

        return CommonService;
      }();

      CommonService.ɵfac = function CommonService_Factory(t) {
        return new (t || CommonService)();
      };

      CommonService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: CommonService,
        factory: CommonService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CommonService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./services/common.service */
      "OlR4");
      /* harmony import */


      var _components_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./components/header/header.component */
      "2MiI");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var AppComponent = function AppComponent(commonService) {
        _classCallCheck(this, AppComponent);

        this.commonService = commonService; // Fetches user List and creates an Admin By default with credentials

        var userList = this.commonService.getUserListFromStorage();
        var admin = userList.find(function (user) {
          return user.isAdmin === true;
        });

        if (!admin) {
          var newAdmin = {
            id: Math.random(),
            name: 'Admin',
            password: '1234',
            isAdmin: true,
            email: 'admin@gmail.com'
          };
          userList.push(newAdmin);
          this.commonService.setUserListToLocalStorage(userList);
        }
      };

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_common_service__WEBPACK_IMPORTED_MODULE_1__["CommonService"]));
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 2,
        vars: 0,
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
          }
        },
        directives: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.scss']
          }]
        }], function () {
          return [{
            type: _services_common_service__WEBPACK_IMPORTED_MODULE_1__["CommonService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "Ysw/":
    /*!********************************************************************!*\
      !*** ./src/app/components/authentication/login/login.component.ts ***!
      \********************************************************************/

    /*! exports provided: LoginComponent */

    /***/
    function Ysw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
        return LoginComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/auth.service */
      "lGQG");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var src_app_services_task_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/task.service */
      "i6c7");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");

      function LoginComponent_mat_error_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Email is ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "required");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function LoginComponent_mat_error_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please enter a valid email address ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function LoginComponent_mat_error_25_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Password is ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "required");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var LoginComponent = /*#__PURE__*/function () {
        function LoginComponent(authService, router, snackBar, taskService) {
          _classCallCheck(this, LoginComponent);

          this.authService = authService;
          this.router = router;
          this.snackBar = snackBar;
          this.taskService = taskService;
          this.hide = true;
        }

        _createClass(LoginComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.loginFormGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
              email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]),
              password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
            });
          }
          /**
           *
           * @memberof LoginComponent
           * Logs in the user after the form is valid
           */

        }, {
          key: "login",
          value: function login() {
            if (this.loginFormGroup.valid) {
              var response = this.authService.login(this.loginFormGroup.value.email, this.loginFormGroup.value.password);

              if (response.status === 201) {
                this.router.navigateByUrl('');
                var taskList = this.taskService.getTaskListBasedOnUser();
                this.taskService.taskListSubject.next(taskList);
              }

              this.snackBar.open(response.message, null, {
                duration: 2000
              });
            }
          }
        }]);

        return LoginComponent;
      }();

      LoginComponent.ɵfac = function LoginComponent_Factory(t) {
        return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_task_service__WEBPACK_IMPORTED_MODULE_5__["TaskService"]));
      };

      LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: LoginComponent,
        selectors: [["app-login"]],
        decls: 33,
        vars: 6,
        consts: [["fxLayout", "row", "fxLayoutAlign", "center center", 1, "login-container"], [1, "login-card"], [1, "card-header", "bg-primary"], [3, "formGroup", "ngSubmit"], ["fxLayout", "column"], ["appearance", "outline"], ["color", "primary", "matPrefix", ""], ["required", "", "formControlName", "email", "matInput", "", "placeholder", "Enter your Email here"], [4, "ngIf"], ["required", "", "formControlName", "password", "matInput", "", "placeholder", "Enter your password", 3, "type"], ["color", "primary", "matSuffix", "", 3, "click"], ["fxLayout", "column", "fxLayoutGap", "8px", "fxLayoutAlign", "center center"], ["mat-raised-button", "", "color", "primary"], ["routerLink", "/signup"]],
        template: function LoginComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-header", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Hey, Welcome. Login to access Task Management");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_6_listener() {
              return ctx.login();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-form-field", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Email");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-icon", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "email");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, LoginComponent_mat_error_15_Template, 4, 0, "mat-error", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, LoginComponent_mat_error_16_Template, 2, 0, "mat-error", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-form-field", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Password");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-icon", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "lock");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-icon", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_mat_icon_click_23_listener() {
              return ctx.hide = !ctx.hide;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, LoginComponent_mat_error_25_Template, 4, 0, "mat-error", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-card-actions", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Login");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Not a Member yet ? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Sign up");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.loginFormGroup);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loginFormGroup.controls["email"].hasError("required"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loginFormGroup.controls["email"].hasError && !ctx.loginFormGroup.controls["email"].hasError("required"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx.hide ? "password" : "text");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.hide ? "visibility" : "visibility_off");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loginFormGroup.controls["password"].hasError("required"));
          }
        },
        directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutAlignDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardHeader"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatLabel"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatPrefix"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatSuffix"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardActions"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutGapDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatError"]],
        styles: [".login-container[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  background-image: linear-gradient(to top left, #9c27b0 50%, #e3e6f1 50%);\n}\n\n.login-card[_ngcontent-%COMP%] {\n  width: 400px;\n  padding: 0;\n}\n\nmat-card-content[_ngcontent-%COMP%] {\n  padding: 16px;\n  margin: 0;\n}\n\n.card-header[_ngcontent-%COMP%] {\n  color: white;\n  padding: 32px 16px;\n  text-align: center;\n  margin: 0;\n}\n\nmat-card-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 50%;\n}\n\nmat-icon[_ngcontent-%COMP%] {\n  padding-right: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHdFQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0VBQ0EsVUFBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLFNBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtBQUNKOztBQUdJO0VBQ0ksVUFBQTtBQUFSOztBQUlBO0VBQ0ksa0JBQUE7QUFESiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dpbi1jb250YWluZXIge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wIGxlZnQsICM5YzI3YjAgNTAlLCByZ2IoMjI3IDIzMCAyNDEpIDUwJSk7XHJcbn1cclxuXHJcbi5sb2dpbi1jYXJkIHtcclxuICAgIHdpZHRoOiA0MDBweDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbm1hdC1jYXJkLWNvbnRlbnQge1xyXG4gICAgcGFkZGluZzogMTZweDtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG5cclxuLmNhcmQtaGVhZGVyIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDMycHggMTZweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG5cclxubWF0LWNhcmQtYWN0aW9ucyB7XHJcbiAgICBidXR0b24ge1xyXG4gICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICB9XHJcbn1cclxuXHJcbm1hdC1pY29uIHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDhweDtcclxufSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.scss']
          }]
        }], function () {
          return [{
            type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }, {
            type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]
          }, {
            type: src_app_services_task_service__WEBPACK_IMPORTED_MODULE_5__["TaskService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _modules_material_routes_app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./modules/material/routes/app-routing.module */
      "G9Us");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "R1ws");
      /* harmony import */


      var _components_header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./components/header/header.component */
      "2MiI");
      /* harmony import */


      var _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./components/home/home.component */
      "BuFo");
      /* harmony import */


      var _modules_material_material_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./modules/material/material.module */
      "7of8");
      /* harmony import */


      var _components_authentication_signup_signup_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./components/authentication/signup/signup.component */
      "BYy1");
      /* harmony import */


      var _components_authentication_login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./components/authentication/login/login.component */
      "Ysw/");
      /* harmony import */


      var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/flex-layout */
      "YUcS");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _components_task_task_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./components/task/task.component */
      "CvMt");
      /* harmony import */


      var _components_add_task_add_task_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./components/add-task/add-task.component */
      "hOfM");
      /* harmony import */


      var _components_add_user_add_user_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./components/add-user/add-user.component */
      "yb62");
      /* harmony import */


      var _components_user_user_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./components/user/user.component */
      "ytin");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _modules_material_routes_app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _modules_material_material_module__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_10__["FlexLayoutModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"], _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"], _components_authentication_signup_signup_component__WEBPACK_IMPORTED_MODULE_8__["SignupComponent"], _components_authentication_login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"], _components_task_task_component__WEBPACK_IMPORTED_MODULE_12__["TaskComponent"], _components_add_task_add_task_component__WEBPACK_IMPORTED_MODULE_13__["AddTaskComponent"], _components_add_user_add_user_component__WEBPACK_IMPORTED_MODULE_14__["AddUserComponent"], _components_user_user_component__WEBPACK_IMPORTED_MODULE_15__["UserComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _modules_material_routes_app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _modules_material_material_module__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_10__["FlexLayoutModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"], _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"], _components_authentication_signup_signup_component__WEBPACK_IMPORTED_MODULE_8__["SignupComponent"], _components_authentication_login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"], _components_task_task_component__WEBPACK_IMPORTED_MODULE_12__["TaskComponent"], _components_add_task_add_task_component__WEBPACK_IMPORTED_MODULE_13__["AddTaskComponent"], _components_add_user_add_user_component__WEBPACK_IMPORTED_MODULE_14__["AddUserComponent"], _components_user_user_component__WEBPACK_IMPORTED_MODULE_15__["UserComponent"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _modules_material_routes_app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _modules_material_material_module__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_10__["FlexLayoutModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"]],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "hOfM":
    /*!***********************************************************!*\
      !*** ./src/app/components/add-task/add-task.component.ts ***!
      \***********************************************************/

    /*! exports provided: AddTaskComponent */

    /***/
    function hOfM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddTaskComponent", function () {
        return AddTaskComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var src_app_services_task_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/task.service */
      "i6c7");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/auth.service */
      "lGQG");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function AddTaskComponent_mat_error_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Title is ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "required");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AddTaskComponent_mat_error_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Description is ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "required");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var AddTaskComponent = /*#__PURE__*/function () {
        function AddTaskComponent(taskService, router, snackBar, authService, dialogRef) {
          _classCallCheck(this, AddTaskComponent);

          this.taskService = taskService;
          this.router = router;
          this.snackBar = snackBar;
          this.authService = authService;
          this.dialogRef = dialogRef;
          this.hide = true;
        }

        _createClass(AddTaskComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.createTaskFormGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
              title: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
              description: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
            });
          }
          /**
           *
           * @memberof AddTaskComponent
           * Creates Task via Task Service
           */

        }, {
          key: "createTask",
          value: function createTask() {
            var task = this.createTaskFormGroup.value;
            var user = this.authService.userValue;
            task.userId = user.id;
            var response = this.taskService.createTask(task);

            if (response.status === 201) {
              this.router.navigateByUrl('');
              this.snackBar.open(response.message, null, {
                duration: 2000
              });
            } else {
              this.snackBar.open(response.message, null, {
                duration: 2000
              });
            }

            this.closeDialog();
          }
          /**
           *
           * @memberof AddTaskComponent
           * Closes dialog
           */

        }, {
          key: "closeDialog",
          value: function closeDialog() {
            this.dialogRef.close();
          }
        }]);

        return AddTaskComponent;
      }();

      AddTaskComponent.ɵfac = function AddTaskComponent_Factory(t) {
        return new (t || AddTaskComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_task_service__WEBPACK_IMPORTED_MODULE_2__["TaskService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogRef"]));
      };

      AddTaskComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AddTaskComponent,
        selectors: [["app-add-task"]],
        decls: 24,
        vars: 4,
        consts: [["fxLayout", "column", "fxLayoutAlign", "center center", 1, "login-container"], [1, "full-width"], ["fxLayout", "row", "fxLayoutAlign", "flex-end", 1, "full-width"], ["color", "primary", "mat-mini-fab", "", 3, "click"], [1, "full-width", 3, "formGroup", "ngSubmit"], ["fxLayout", "column"], ["appearance", "outline", 1, "full-width"], ["autofocus", "", "required", "", "formControlName", "title", "matInput", "", "placeholder", "Enter Task Title here"], [4, "ngIf"], ["required", "", "formControlName", "description", "matInput", "", "placeholder", "Enter Task Description here"], ["fxLayout", "column", "fxLayoutGap", "8px", "fxLayoutAlign", "center center"], ["mat-raised-button", "", "color", "primary", 1, "create-button", 3, "disabled"]],
        template: function AddTaskComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddTaskComponent_Template_button_click_3_listener() {
              return ctx.closeDialog();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "close");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Hey, You can Add your Task Here");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "form", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AddTaskComponent_Template_form_ngSubmit_9_listener() {
              return ctx.createTask();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-form-field", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, AddTaskComponent_mat_error_15_Template, 4, 0, "mat-error", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-form-field", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Description");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "textarea", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, AddTaskComponent_mat_error_20_Template, 4, 0, "mat-error", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Create");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.createTaskFormGroup);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.createTaskFormGroup.controls["title"].hasError("required"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.createTaskFormGroup.controls["description"].hasError("required"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.createTaskFormGroup.invalid);
          }
        },
        directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutAlignDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatLabel"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutGapDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatError"]],
        styles: ["h1[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n\n.create-button[_ngcontent-%COMP%] {\n  width: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxhZGQtdGFzay5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSxVQUFBO0FBQ0oiLCJmaWxlIjoiYWRkLXRhc2suY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMSB7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcblxyXG4uY3JlYXRlLWJ1dHRvbiB7XHJcbiAgICB3aWR0aDogNTAlO1xyXG59XHJcbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddTaskComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-add-task',
            templateUrl: './add-task.component.html',
            styleUrls: ['./add-task.component.scss']
          }]
        }], function () {
          return [{
            type: src_app_services_task_service__WEBPACK_IMPORTED_MODULE_2__["TaskService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }, {
            type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]
          }, {
            type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
          }, {
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogRef"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "i6c7":
    /*!******************************************!*\
      !*** ./src/app/services/task.service.ts ***!
      \******************************************/

    /*! exports provided: TaskService */

    /***/
    function i6c7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TaskService", function () {
        return TaskService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./auth.service */
      "lGQG");
      /* harmony import */


      var _common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./common.service */
      "OlR4");

      var TaskService = /*#__PURE__*/function () {
        function TaskService(authService, commonService) {
          var _this4 = this;

          _classCallCheck(this, TaskService);

          this.authService = authService;
          this.commonService = commonService;
          this.authService.user.subscribe(function (user) {
            _this4.user = user;
          });
          var taskFromStorage = this.getTaskListBasedOnUser();
          this.taskListSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](taskFromStorage);
          this.taskList = this.taskListSubject.asObservable();
        }
        /**
         *
         * @returns {Task[]}
         * @memberof TaskService
         * Gets task list from storage and filters it based on the logged in user
         */


        _createClass(TaskService, [{
          key: "getTaskListBasedOnUser",
          value: function getTaskListBasedOnUser() {
            var _this5 = this;

            var taskList = this.commonService.getTaskListFromLocalStorage();

            if (taskList && this.user) {
              taskList = taskList.filter(function (task) {
                return task.userId === _this5.user.id;
              });
            } else {
              taskList = [];
            }

            return taskList;
          }
        }, {
          key: "createTask",

          /**
           *
           * @param {Task} task
           * @returns
           * @memberof TaskService
           * Creates Task list and sets to localstorage corresponding to signed in user
           */
          value: function createTask(task) {
            var _this6 = this;

            var taskList = this.getTaskList();
            task.id = Math.random();
            task.userId = this.user.id;
            taskList.push(task);
            this.taskValue = taskList; // Filters Task list for the current user

            var xyz = taskList.filter(function (task) {
              return task.userId === _this6.user.id;
            });
            this.taskListSubject.next(xyz);
            return {
              status: 201,
              message: 'Task Added Succesfully',
              data: task
            };
          }
          /**
           *
           * @param {Task} updatedTask
           * @returns
           * @memberof TaskService
           * Updates Task and updates to local Storage
           */

        }, {
          key: "updateTask",
          value: function updateTask(updatedTask) {
            var _this7 = this;

            var taskList = this.getTaskList();
            var index = taskList.findIndex(function (task) {
              return task.id === updatedTask.id;
            });
            taskList[index] = updatedTask;
            var xyz = taskList.filter(function (task) {
              return task.userId === _this7.user.id;
            });
            this.taskListSubject.next(xyz);
            return {
              status: 201,
              message: 'Task Updated Successfully'
            };
          }
          /**
           *
           * @returns {Task[]}
           * @memberof TaskService
           * Fetches Task list from localstorage if null, it returns []
           */

        }, {
          key: "getTaskList",
          value: function getTaskList() {
            var taskList = localStorage.getItem('taskList') ? JSON.parse(localStorage.getItem('taskList')) : [];
            return taskList;
          }
          /**
           *
           * @param {number} id
           * @returns
           * @memberof TaskService
           * Deletes the selected task based on the id
           */

        }, {
          key: "deleteTask",
          value: function deleteTask(id) {
            var taskList = this.getTaskListBasedOnUser();
            var index = taskList.findIndex(function (task) {
              return task.id === id;
            });
            taskList.splice(index, 1);
            this.taskValue = taskList;
            return {
              status: 200,
              message: 'Successfully deleted Task'
            };
          }
        }, {
          key: "taskValue",
          set: function set(taskList) {
            this.commonService.setTaskListToLocalStorage(taskList);
            this.taskListSubject.next(taskList);
          }
        }]);

        return TaskService;
      }();

      TaskService.ɵfac = function TaskService_Factory(t) {
        return new (t || TaskService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"]));
      };

      TaskService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: TaskService,
        factory: TaskService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TaskService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
          }, {
            type: _common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "lGQG":
    /*!******************************************!*\
      !*** ./src/app/services/auth.service.ts ***!
      \******************************************/

    /*! exports provided: AuthService */

    /***/
    function lGQG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthService", function () {
        return AuthService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./common.service */
      "OlR4");

      var AuthService = /*#__PURE__*/function () {
        function AuthService(commonService) {
          _classCallCheck(this, AuthService);

          this.commonService = commonService;
          this.userSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.commonService.getUSerFromLocalStorage());
          this.user = this.userSubject.asObservable();
        }
        /**
         *
         * @type {User}
         * @memberof AuthService
         * Gets the current user logged in
         */


        _createClass(AuthService, [{
          key: "login",

          /**
           *
           * @param {string} email
           * @param {string} password
           * @returns
           * @memberof AuthService
           * Logs in the user based on email and password provided
           * FOR NOW WE AREN'T USING SHA OR JSON WEB TOKEN TO KEEP PASSWORDS
           * ENCRYPTED SINCE DATA IS ALREADY ON UI
           */
          value: function login(email, password) {
            var userList = this.commonService.getUserListFromStorage();
            var user = userList.find(function (user) {
              return user.email === email && user.password === password;
            });

            if (!user) {
              return {
                status: 401,
                message: 'Email or Password is incorrect'
              };
            } // Updates the userValue object on storage


            this.userValue = user;
            return {
              status: 201,
              message: 'Logged in Successfully',
              data: user
            };
          }
          /**
           *
           * @param {User} user
           * @memberof AuthService
           * Registers a new user with given Email, Name and password
           */

        }, {
          key: "signUp",
          value: function signUp(user) {
            var userList = this.commonService.getUserListFromStorage();
            user.id = Math.random(); // By default user created is not an admin

            user.isAdmin = false;
            userList.push(user);
            this.userValue = user; // Adds new user Registered the existing users list

            this.commonService.setUserListToLocalStorage(userList);
          }
          /**
           *
           * @memberof AuthService
           * Logs out the user by removing user from localstorage and routes to login page
           */

        }, {
          key: "logout",
          value: function logout() {
            localStorage.removeItem('user');
            this.user = null;
            this.userSubject.next(null);
          }
        }, {
          key: "userValue",
          get: function get() {
            return this.userSubject.value;
          }
          /**
           *
           * @memberof AuthService
           * Updates if a new user is logged in and updates the localstorage
           */
          ,
          set: function set(user) {
            this.commonService.setUserToLocalStorage(user);
            this.userSubject.next(user);
          }
        }]);

        return AuthService;
      }();

      AuthService.ɵfac = function AuthService_Factory(t) {
        return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"]));
      };

      AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: AuthService,
        factory: AuthService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "qfBg":
    /*!******************************************!*\
      !*** ./src/app/services/user.service.ts ***!
      \******************************************/

    /*! exports provided: UserService */

    /***/
    function qfBg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserService", function () {
        return UserService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./common.service */
      "OlR4");

      var UserService = /*#__PURE__*/function () {
        function UserService(commonService) {
          _classCallCheck(this, UserService);

          this.commonService = commonService;
          var userFromStorage = this.commonService.getUserListFromStorage();
          this.userListSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](userFromStorage);
          this.userList = this.userListSubject.asObservable();
        }
        /**
         *
         * @param {User} user
         * @returns
         * @memberof UserService
         * Creates user and pushes it to the localstorage
         * FOR NOW WE AREN'T USING SHA OR JSON WEB TOKEN TO KEEP PASSWORDS
         * ENCRYPTED SINCE DATA IS ALREADY ON UI
         */


        _createClass(UserService, [{
          key: "createUser",
          value: function createUser(user) {
            var userList = this.commonService.getUserListFromStorage();
            user.id = Math.random();
            user.isAdmin = false;
            userList.push(user);
            this.commonService.setUserListToLocalStorage(userList); // Updates the current user List to keep it synchronized for GUI

            this.userListSubject.next(userList);
            return {
              status: 201,
              message: 'User Added Succesfully',
              data: user
            };
          }
          /**
           *
           * @param {User} updatedUser
           * @returns
           * @memberof UserService
           * Updates the selected user and updates the localstorage
           */

        }, {
          key: "updateUser",
          value: function updateUser(updatedUser) {
            var userList = this.commonService.getUserListFromStorage(); // To find if the user exists

            var index = userList.findIndex(function (user) {
              return user.id === updatedUser.id;
            });
            userList[index] = updatedUser; // Updates the current user List to keep it synchronized for GUI

            this.userListSubject.next(userList);
            this.commonService.setUserListToLocalStorage(userList);
            return {
              status: 201,
              message: 'User Updated Successfully'
            };
          }
          /**
           *
           * @param {number} id
           * @returns
           * @memberof UserService
           * Deletes the selected user based on id and updates the localstorage
           */

        }, {
          key: "deleteUser",
          value: function deleteUser(id) {
            var userList = this.commonService.getUserListFromStorage();
            var index = userList.findIndex(function (user) {
              return user.id === id;
            });
            userList.splice(index, 1); // Updates the current user List to keep it synchronized for GUI

            this.userListSubject.next(userList);
            this.commonService.setUserListToLocalStorage(userList);
            return {
              status: 200,
              message: 'Successfully deleted User'
            };
          }
        }]);

        return UserService;
      }();

      UserService.ɵfac = function UserService_Factory(t) {
        return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"]));
      };

      UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: UserService,
        factory: UserService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "tIkO":
    /*!*******************************!*\
      !*** ./src/app/auth.guard.ts ***!
      \*******************************/

    /*! exports provided: AuthGuard */

    /***/
    function tIkO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
        return AuthGuard;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./services/auth.service */
      "lGQG");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var AuthGuard = /*#__PURE__*/function () {
        function AuthGuard(authService, router) {
          _classCallCheck(this, AuthGuard);

          this.authService = authService;
          this.router = router;
        }

        _createClass(AuthGuard, [{
          key: "canActivate",
          value: function canActivate() {
            var user = this.authService.userValue;

            if (user) {
              return true;
            }

            this.router.navigateByUrl('login');
            return false;
          }
        }]);

        return AuthGuard;
      }();

      AuthGuard.ɵfac = function AuthGuard_Factory(t) {
        return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
      };

      AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: AuthGuard,
        factory: AuthGuard.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "yb62":
    /*!***********************************************************!*\
      !*** ./src/app/components/add-user/add-user.component.ts ***!
      \***********************************************************/

    /*! exports provided: AddUserComponent */

    /***/
    function yb62(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddUserComponent", function () {
        return AddUserComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/auth.service */
      "lGQG");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/user.service */
      "qfBg");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function AddUserComponent_mat_error_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " name is ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "required");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AddUserComponent_mat_error_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Email is ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "required");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AddUserComponent_mat_error_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please enter a valid email address ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AddUserComponent_mat_error_29_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Password is ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "required");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var AddUserComponent = /*#__PURE__*/function () {
        function AddUserComponent(router, snackBar, authService, dialogRef, userService) {
          _classCallCheck(this, AddUserComponent);

          this.router = router;
          this.snackBar = snackBar;
          this.authService = authService;
          this.dialogRef = dialogRef;
          this.userService = userService;
          this.hide = true;
        }

        _createClass(AddUserComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.addUserFormGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
              name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
              email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]),
              password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
            });
          }
        }, {
          key: "createUser",
          value: function createUser() {
            var user = this.addUserFormGroup.value;
            var response = this.userService.createUser(user);

            if (response.status === 201) {
              this.router.navigateByUrl('');
              this.snackBar.open(response.message, null, {
                duration: 2000
              });
            }

            this.closeDialog();
          }
        }, {
          key: "closeDialog",
          value: function closeDialog() {
            this.dialogRef.close();
          }
        }]);

        return AddUserComponent;
      }();

      AddUserComponent.ɵfac = function AddUserComponent_Factory(t) {
        return new (t || AddUserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"]));
      };

      AddUserComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AddUserComponent,
        selectors: [["app-add-user"]],
        decls: 37,
        vars: 8,
        consts: [["fxLayout", "column", "fxLayoutAlign", "center center", 1, "login-container"], ["fxLayout", "row", "fxLayoutAlign", "flex-end", 1, "full-width"], ["mat-icon-button", "", 1, "close", 3, "click"], [1, "full-width", 3, "formGroup", "ngSubmit"], ["fxLayout", "column"], ["appearance", "outline", 1, "full-width"], ["color", "primary", "matPrefix", "", 1, "mat-icon-pre"], ["required", "", "formControlName", "name", "matInput", "", "placeholder", "Enter User's name here"], [4, "ngIf"], ["appearance", "outline"], ["required", "", "formControlName", "email", "matInput", "", "placeholder", "Enter User's Email here"], ["required", "", "formControlName", "password", "matInput", "", "placeholder", "Enter User's password", 3, "type"], ["matSuffix", "", 3, "click"], ["fxLayout", "column", "fxLayoutGap", "8px", "fxLayoutAlign", "center center"], ["mat-raised-button", "", "color", "primary", 1, "create-button", 3, "disabled"]],
        template: function AddUserComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddUserComponent_Template_button_click_2_listener() {
              return ctx.closeDialog();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "close");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Hey, You can Add a User Here");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AddUserComponent_Template_form_ngSubmit_8_listener() {
              return ctx.createUser();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-form-field", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-icon", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "account_circle");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, AddUserComponent_mat_error_16_Template, 4, 0, "mat-error", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-form-field", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Email");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, AddUserComponent_mat_error_21_Template, 4, 0, "mat-error", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, AddUserComponent_mat_error_22_Template, 2, 0, "mat-error", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-icon", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "email");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-form-field", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Password");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "input", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, AddUserComponent_mat_error_29_Template, 4, 0, "mat-error", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-icon", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "lock");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-icon", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddUserComponent_Template_mat_icon_click_32_listener() {
              return ctx.hide = !ctx.hide;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "button", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Create");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.addUserFormGroup);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.addUserFormGroup.controls["name"].hasError("required"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.addUserFormGroup.controls["email"].hasError("required"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.addUserFormGroup.controls["email"].hasError && !ctx.addUserFormGroup.controls["email"].hasError("required"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx.hide ? "password" : "text");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.addUserFormGroup.controls["password"].hasError("required"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.hide ? "visibility" : "visibility_off");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.addUserFormGroup.invalid);
          }
        },
        directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutAlignDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatPrefix"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatLabel"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatSuffix"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutGapDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatError"]],
        styles: ["h1[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n\n.create-button[_ngcontent-%COMP%] {\n  width: 50%;\n}\n\n.close[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n}\n\n.mat-icon-pre[_ngcontent-%COMP%] {\n  padding-right: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxhZGQtdXNlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSxVQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7QUFDSiIsImZpbGUiOiJhZGQtdXNlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImgxIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuXHJcbi5jcmVhdGUtYnV0dG9uIHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbn1cclxuXHJcbi5jbG9zZSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbn1cclxuXHJcbi5tYXQtaWNvbi1wcmUge1xyXG4gICAgcGFkZGluZy1yaWdodDogOHB4O1xyXG59Il19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddUserComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-add-user',
            templateUrl: './add-user.component.html',
            styleUrls: ['./add-user.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }, {
            type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]
          }, {
            type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
          }, {
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"]
          }, {
            type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "ytin":
    /*!***************************************************!*\
      !*** ./src/app/components/user/user.component.ts ***!
      \***************************************************/

    /*! exports provided: UserComponent */

    /***/
    function ytin(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserComponent", function () {
        return UserComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/user.service */
      "qfBg");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");

      function UserComponent_div_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserComponent_div_2_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r7.editUser();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "edit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserComponent_div_2_Template_button_click_4_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r9.deleteUser();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function UserComponent_span_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.user.name, "");
        }
      }

      function UserComponent_mat_form_field_4_mat_error_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Name is ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "required");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function UserComponent_mat_form_field_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "account_circle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UserComponent_mat_form_field_4_Template_input_ngModelChange_5_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r11.user.name = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, UserComponent_mat_form_field_4_mat_error_6_Template, 4, 0, "mat-error", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.user.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.createUserFormGroup.controls["name"].hasError("required"));
        }
      }

      function UserComponent_mat_icon_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function UserComponent_span_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r4.user.email, " ");
        }
      }

      function UserComponent_mat_form_field_9_mat_error_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Email is ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "required");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function UserComponent_mat_form_field_9_mat_error_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please enter a valid email address ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function UserComponent_mat_form_field_9_Template(rf, ctx) {
        if (rf & 1) {
          var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UserComponent_mat_form_field_9_Template_input_ngModelChange_3_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);

            var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r15.user.email = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, UserComponent_mat_form_field_9_mat_error_4_Template, 4, 0, "mat-error", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, UserComponent_mat_form_field_9_mat_error_5_Template, 2, 0, "mat-error", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-icon", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r5.user.email);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.createUserFormGroup.controls["email"].hasError("required"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.createUserFormGroup.controls["email"].hasError && !ctx_r5.createUserFormGroup.controls["email"].hasError("required"));
        }
      }

      function UserComponent_div_11_Template(rf, ctx) {
        if (rf & 1) {
          var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Update");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserComponent_div_11_Template_button_click_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);

            var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r17.cancel();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r6.createUserFormGroup.invalid || !ctx_r6.createUserFormGroup.dirty);
        }
      }

      var UserComponent = /*#__PURE__*/function () {
        function UserComponent(userService, snackBar) {
          _classCallCheck(this, UserComponent);

          this.userService = userService;
          this.snackBar = snackBar;
          this.isEditable = false;
        }

        _createClass(UserComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.tempData = Object.assign({}, this.user);
            this.createUserFormGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
              name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
              email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email])
            });
          }
        }, {
          key: "editUser",
          value: function editUser() {
            this.isEditable = true;
          }
        }, {
          key: "cancel",
          value: function cancel() {
            this.isEditable = false;
            this.user = this.tempData;
          }
        }, {
          key: "updateUser",
          value: function updateUser() {
            var response = this.userService.updateUser(this.user);

            if (response.status === 201) {
              this.isEditable = false;
              this.snackBar.open(response.message, null, {
                duration: 2000
              });
            } else {
              this.snackBar.open(response.message, null, {
                duration: 2000
              });
            }
          }
        }, {
          key: "deleteUser",
          value: function deleteUser() {
            var response = this.userService.deleteUser(this.user.id);

            if (response.status === 200) {
              this.snackBar.open(response.message, null, {
                duration: 2000
              });
            }
          }
        }]);

        return UserComponent;
      }();

      UserComponent.ɵfac = function UserComponent_Factory(t) {
        return new (t || UserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]));
      };

      UserComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: UserComponent,
        selectors: [["app-user"]],
        inputs: {
          user: "user"
        },
        decls: 12,
        vars: 8,
        consts: [[1, "full-width", "full-height", 3, "formGroup", "ngSubmit"], ["fxLayout", "row", "fxLayoutAlign", "flex-end", "fxLayoutGap", "8px", 4, "ngIf"], [4, "ngIf"], ["class", "full-width", "appearance", "outline", 4, "ngIf"], ["fxLayout", "column", "fxLayoutAlign", "space-between space-between", 1, "full-height"], ["fxLayout", "row", "fxLayoutAlign", "flex-start center", "fxLayoutGap", "8px"], ["color", "primary", 4, "ngIf"], ["fxLayout", "row", "fxLayoutGap", "8px", "fxLayoutAlign", "center center", 4, "ngIf"], ["fxLayout", "row", "fxLayoutAlign", "flex-end", "fxLayoutGap", "8px"], ["mat-mini-fab", "", 1, "fab-icon", 3, "click"], ["mat-mini-fab", "", "color", "warn", 1, "fab-icon", 3, "click"], ["appearance", "outline", 1, "full-width"], ["color", "primary", "matPrefix", "", 1, "mat-icon-pre"], ["required", "", "formControlName", "name", "matInput", "", "placeholder", "Enter User's name here", 3, "ngModel", "ngModelChange"], ["color", "primary"], ["required", "", "formControlName", "email", "matInput", "", "placeholder", "Enter your Email here", 3, "ngModel", "ngModelChange"], ["fxLayout", "row", "fxLayoutGap", "8px", "fxLayoutAlign", "center center"], ["type", "submit", "mat-raised-button", "", "color", "primary", 3, "disabled"], ["mat-raised-button", "", "color", "warn", 3, "click"]],
        template: function UserComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function UserComponent_Template_form_ngSubmit_1_listener() {
              return ctx.updateUser();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, UserComponent_div_2_Template, 7, 0, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, UserComponent_span_3_Template, 3, 1, "span", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, UserComponent_mat_form_field_4_Template, 7, 2, "mat-form-field", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card-content", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, UserComponent_mat_icon_7_Template, 2, 0, "mat-icon", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, UserComponent_span_8_Template, 2, 1, "span", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, UserComponent_mat_form_field_9_Template, 8, 3, "mat-form-field", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-card-actions");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, UserComponent_div_11_Template, 5, 1, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.createUserFormGroup);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isEditable);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isEditable);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isEditable);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isEditable);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isEditable);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isEditable);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isEditable);
          }
        },
        directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCard"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutAlignDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardContent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutGapDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatLabel"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatPrefix"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatError"]],
        styles: ["mat-card[_ngcontent-%COMP%] {\n  min-height: 250px;\n  background-color: #d5d6da;\n}\n\nh2[_ngcontent-%COMP%] {\n  font-weight: 800;\n  margin-bottom: 4px;\n}\n\n.mat-icon-pre[_ngcontent-%COMP%] {\n  padding-right: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFx1c2VyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7RUFDQSx5QkFBQTtBQUNKOztBQUdBO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtBQUFKOztBQUdBO0VBQ0ksa0JBQUE7QUFBSiIsImZpbGUiOiJ1c2VyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWNhcmQge1xyXG4gICAgbWluLWhlaWdodDogMjUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDVkNmRhO1xyXG59XHJcblxyXG5cclxuaDIge1xyXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDRweDtcclxufVxyXG5cclxuLm1hdC1pY29uLXByZSB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA4cHg7XHJcbn0iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-user',
            templateUrl: './user.component.html',
            styleUrls: ['./user.component.scss']
          }]
        }], function () {
          return [{
            type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
          }, {
            type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]
          }];
        }, {
          user: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map