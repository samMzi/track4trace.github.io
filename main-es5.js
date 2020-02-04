function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
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
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<router-outlet> </router-outlet>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/authentification/authentification.component.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/authentification/authentification.component.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAuthentificationAuthentificationComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"wrapper fadeInDown\">\n  <div id=\"formContent\">\n    <!-- Tabs Titles -->\n\n    <!-- Icon -->\n    <div class=\"fadeIn first\">\n      <img\n        class=\"customImg\"\n        src=\"assets/img/logo/logo.png\"\n        id=\"icon\"\n        alt=\"User Icon\"\n      />\n    </div>\n\n    <!-- Login Form -->\n    <form>\n      <input\n        type=\"text\"\n        id=\"login\"\n        class=\"fadeIn second\"\n        name=\"login\"\n        placeholder=\"login\"\n      />\n      <input\n        type=\"text\"\n        id=\"password\"\n        class=\"fadeIn third\"\n        name=\"login\"\n        placeholder=\"Mot de passe\"\n      />\n      <input\n        type=\"submit\"\n        class=\"fadeIn fourth customBtn\"\n        value=\"Se connecter\"\n        routerLink=\"/dashboard\"\n      />\n    </form>\n\n    <!-- Remind Passowrd -->\n    <div id=\"formFooter\">\n      <a class=\"underlineHover\" href=\"#\">Forgot Password?</a>\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/colisage/colisage.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/colisage/colisage.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppColisageColisageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"card card-topline-purple\">\n  <div class=\"card-head\">\n    <header>Colisage</header>\n    <div class=\"tools\">\n      <a class=\"fa fa-repeat btn-color box-refresh\" href=\"javascript:;\"></a>\n      <a\n        class=\"t-collapse btn-color fa fa-chevron-down\"\n        href=\"javascript:;\"\n      ></a>\n      <a class=\"t-close btn-color fa fa-times\" href=\"javascript:;\"></a>\n    </div>\n  </div>\n  <div class=\"card-body \">\n    <table class=\"table table-striped table-bordered\">\n      <thead>\n        <tr>\n          <th>Action</th>\n          <th>Nbre colis</th>\n          <th>Longueur en cm</th>\n          <th>Largeur en cm 2</th>\n          <th>Hauteur en cm</th>\n          <th>Volume en m3</th>\n          <th>Poids brut en kg</th>\n          <th>Gerbable</th>\n          <th>Poids taxable en kg</th>\n          <th>#</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let dynamic of dynamicArray; let i = index\">\n          <td (click)=\"deleteRow(i)\">\n            <button class=\"btn btn-danger\">\n              <i class=\"fa fa-trash fa-2x\"></i>\n            </button>\n          </td>\n          <td>\n            <input\n              [(ngModel)]=\"dynamicArray[i].title1\"\n              class=\"form-control\"\n              type=\"text\"\n            />\n          </td>\n          <td>\n            <input\n              [(ngModel)]=\"dynamicArray[i].title2\"\n              class=\"form-control\"\n              type=\"text\"\n            />\n          </td>\n          <td>\n            <input\n              [(ngModel)]=\"dynamicArray[i].title3\"\n              class=\"form-control\"\n              type=\"text\"\n            />\n          </td>\n          <td>\n            <input\n              [(ngModel)]=\"dynamicArray[i].title4\"\n              class=\"form-control\"\n              type=\"text\"\n            />\n          </td>\n          <td>\n            <input\n              [(ngModel)]=\"dynamicArray[i].title5\"\n              class=\"form-control\"\n              type=\"text\"\n            />\n          </td>\n          <td>\n            <select\n              _ngcontent-fjg-c1=\"\"\n              class=\"form-control\"\n              id=\"select2\"\n              [(ngModel)]=\"dynamicArray[i].title6\"\n              ><option _ngcontent-fjg-c1=\"\" value=\"oui\">oui</option\n              ><option _ngcontent-fjg-c1=\"\" value=\"non\">non</option></select\n            >\n          </td>\n          <td>\n            <input\n              [(ngModel)]=\"dynamicArray[i].title7\"\n              class=\"form-control\"\n              type=\"text\"\n            />\n          </td>\n          <td>\n            <input\n              [(ngModel)]=\"dynamicArray[i].title8\"\n              class=\"form-control\"\n              type=\"text\"\n            />\n          </td>\n          <td>\n            <button class=\"btn btn-success\">\n              <i class=\"fa fa-calculator\"></i>\n            </button>\n          </td>\n        </tr>\n        <tr>\n          <td (click)=\"addRow(i)\">\n            &nbsp;&nbsp;&nbsp;&nbsp;<i class=\"fa fa-plus fa-2x\"></i>\n          </td>\n          <td>\n            <div class=\"form-group\">\n              <label>Total</label>\n              <input type=\"text\" class=\"form-control\" placeholder=\"Enter ...\" />\n            </div>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n\n<div class=\"container\" style=\"margin-top: 5%\"></div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDashboardDashboardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<app-navbar></app-navbar>\n<div class=\"customDashboard\">\n  <div class=\"container-fluid\">\n  <div class=\"page-content\" style=\"min-height:686.4px cus\">\n    <div class=\"page-bar\">\n      <div class=\"page-title-breadcrumb\">\n        <div class=\" pull-left \">\n          <div class=\"page-title \" style=\"padding: 3%;\">Dashboard</div>\n        </div>\n        <ol class=\"breadcrumb page-breadcrumb pull-right\" style=\"padding: 8px;margin-top: 3px;\">\n          <li><i class=\"fa fa-home\"></i>&nbsp;<a class=\"parent-item\" href=\"index.html\">Home</a>&nbsp;<i class=\"fa fa-angle-right\"></i>\n          </li>\n          <li class=\"active\">Dashboard</li>\n        </ol>\n      </div>\n    </div>\n    <!-- start widget -->\n    <div class=\"state-overview\">\n      <div class=\"row\">\n        <div class=\"col-xl-3 col-md-6 col-12\">\n          <div class=\"info-box bg-b-green\">\n            <span class=\"info-box-icon push-bottom\"><i class=\"material-icons\">group</i></span>\n            <div class=\"info-box-content\">\n              <span class=\"info-box-text\">Total Students</span>\n              <span class=\"info-box-number\">450</span>\n              <div class=\"progress\">\n                <div class=\"progress-bar\" style=\"width: 45%\"></div>\n              </div>\n              <span class=\"progress-description\">\n                45% Increase in 28 Days\n              </span>\n            </div>\n            <!-- /.info-box-content -->\n          </div>\n          <!-- /.info-box -->\n        </div>\n        <!-- /.col -->\n        <div class=\"col-xl-3 col-md-6 col-12\">\n          <div class=\"info-box bg-b-yellow\">\n            <span class=\"info-box-icon push-bottom\"><i class=\"material-icons\">person</i></span>\n            <div class=\"info-box-content\">\n              <span class=\"info-box-text\">New Students</span>\n              <span class=\"info-box-number\">155</span>\n              <div class=\"progress\">\n                <div class=\"progress-bar\" style=\"width: 40%\"></div>\n              </div>\n              <span class=\"progress-description\">\n                40% Increase in 28 Days\n              </span>\n            </div>\n            <!-- /.info-box-content -->\n          </div>\n          <!-- /.info-box -->\n        </div>\n        <!-- /.col -->\n        <div class=\"col-xl-3 col-md-6 col-12\">\n          <div class=\"info-box bg-b-blue\">\n            <span class=\"info-box-icon push-bottom\"><i class=\"material-icons\">school</i></span>\n            <div class=\"info-box-content\">\n              <span class=\"info-box-text\">Total Course</span>\n              <span class=\"info-box-number\">52</span>\n              <div class=\"progress\">\n                <div class=\"progress-bar\" style=\"width: 85%\"></div>\n              </div>\n              <span class=\"progress-description\">\n                85% Increase in 28 Days\n              </span>\n            </div>\n            <!-- /.info-box-content -->\n          </div>\n          <!-- /.info-box -->\n        </div>\n        <!-- /.col -->\n        <div class=\"col-xl-3 col-md-6 col-12\">\n          <div class=\"info-box bg-b-pink\">\n            <span class=\"info-box-icon push-bottom\"><i class=\"material-icons\">monetization_on</i></span>\n            <div class=\"info-box-content\">\n              <span class=\"info-box-text\">Fees Collection</span>\n              <span class=\"info-box-number\">13,921</span><span>$</span>\n              <div class=\"progress\">\n                <div class=\"progress-bar\" style=\"width: 50%\"></div>\n              </div>\n              <span class=\"progress-description\">\n                50% Increase in 28 Days\n              </span>\n            </div>\n            <!-- /.info-box-content -->\n          </div>\n          <!-- /.info-box -->\n        </div>\n        <!-- /.col -->\n      </div>\n    </div>\n    <!-- end widget -->\n    <!-- chart start -->\n    <div class=\"row\">\n      <div class=\"col-sm-8\">\n        <div class=\"card card-box\">\n          <div class=\"card-head\">\n            <header>University Survey</header>\n            <div class=\"tools\">\n              <a class=\"fa fa-repeat btn-color box-refresh\" href=\"javascript:;\"></a>\n              <a class=\"t-collapse btn-color fa fa-chevron-down\" href=\"javascript:;\"></a>\n              <a class=\"t-close btn-color fa fa-times\" href=\"javascript:;\"></a>\n            </div>\n          </div>\n          <div class=\"card-body no-padding height-9\">\n            <div class=\"row\"><iframe class=\"chartjs-hidden-iframe\" tabindex=\"-1\" style=\"display: block; overflow: hidden; border: 0px; margin: 0px; top: 0px; left: 0px; bottom: 0px; right: 0px; height: 100%; width: 100%; position: absolute; pointer-events: none; z-index: -1;\"></iframe>\n              <canvas id=\"canvas1\" width=\"1784\" height=\"892\" style=\"display: block; height: 446px; width: 892px;\"></canvas>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-sm-4\">\n        <div class=\"card card-box\">\n          <div class=\"card-head\">\n            <header>University Survey</header>\n            <div class=\"tools\">\n              <a class=\"fa fa-repeat btn-color box-refresh\" href=\"javascript:;\"></a>\n              <a class=\"t-collapse btn-color fa fa-chevron-down\" href=\"javascript:;\"></a>\n              <a class=\"t-close btn-color fa fa-times\" href=\"javascript:;\"></a>\n            </div>\n          </div>\n          <div class=\"card-body no-padding height-9\">\n            <div class=\"row\"><iframe class=\"chartjs-hidden-iframe\" tabindex=\"-1\" style=\"display: block; overflow: hidden; border: 0px; margin: 0px; top: 0px; left: 0px; bottom: 0px; right: 0px; height: 100%; width: 100%; position: absolute; pointer-events: none; z-index: -1;\"></iframe>\n              <canvas id=\"chartjs_pie\" style=\"display: block; height: 422px; width: 422px;\" width=\"844\" height=\"844\"></canvas>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <!-- Chart end -->\n    <!-- start course list -->\n    <div class=\"row\">\n      <div class=\"col-lg-3 col-md-6 col-12 col-sm-6\">\n        <div class=\"blogThumb\">\n          <div class=\"thumb-center\"><img class=\"img-responsive\" alt=\"user\" src=\"../assets/img/course/course1.jpg\"></div>\n          <div class=\"course-box\">\n            <h4>PHP Development Course</h4>\n            <div class=\"text-muted\"><span class=\"m-r-10\">April 23</span>\n              <a class=\"course-likes m-l-10\" href=\"#\"><i class=\"fa fa-heart-o\"></i> 654</a>\n            </div>\n            <p><span><i class=\"ti-alarm-clock\"></i> Duration: 6 Months</span></p>\n            <p><span><i class=\"ti-user\"></i> Professor: Jane Doe</span></p>\n            <p><span><i class=\"fa fa-graduation-cap\"></i> Students: 200+</span></p>\n            <button type=\"button\" class=\"mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect m-b-10 btn-info\" data-upgraded=\",MaterialButton,MaterialRipple\">Read\n              More<span class=\"mdl-button__ripple-container\"><span class=\"mdl-ripple\"></span></span></button>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-lg-3 col-md-6 col-12 col-sm-6\">\n        <div class=\"blogThumb\">\n          <div class=\"thumb-center\"><img class=\"img-responsive\" alt=\"user\" src=\"../assets/img/course/course2.jpg\"></div>\n          <div class=\"course-box\">\n            <h4>PHP Development Course</h4>\n            <div class=\"text-muted\"><span class=\"m-r-10\">April 23</span>\n              <a class=\"course-likes m-l-10\" href=\"#\"><i class=\"fa fa-heart-o\"></i> 654</a>\n            </div>\n            <p><span><i class=\"ti-alarm-clock\"></i> Duration: 6 Months</span></p>\n            <p><span><i class=\"ti-user\"></i> Professor: Jane Doe</span></p>\n            <p><span><i class=\"fa fa-graduation-cap\"></i> Students: 200+</span></p>\n            <button type=\"button\" class=\"mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect m-b-10 btn-info\" data-upgraded=\",MaterialButton,MaterialRipple\">Read\n              More<span class=\"mdl-button__ripple-container\"><span class=\"mdl-ripple\"></span></span></button>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-lg-3 col-md-6 col-12 col-sm-6\">\n        <div class=\"blogThumb\">\n          <div class=\"thumb-center\"><img class=\"img-responsive\" alt=\"user\" src=\"../assets/img/course/course3.jpg\"></div>\n          <div class=\"course-box\">\n            <h4>PHP Development Course</h4>\n            <div class=\"text-muted\"><span class=\"m-r-10\">April 23</span>\n              <a class=\"course-likes m-l-10\" href=\"#\"><i class=\"fa fa-heart-o\"></i> 654</a>\n            </div>\n            <p><span><i class=\"ti-alarm-clock\"></i> Duration: 6 Months</span></p>\n            <p><span><i class=\"ti-user\"></i> Professor: Jane Doe</span></p>\n            <p><span><i class=\"fa fa-graduation-cap\"></i> Students: 200+</span></p>\n            <button type=\"button\" class=\"mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect m-b-10 btn-info\" data-upgraded=\",MaterialButton,MaterialRipple\">Read\n              More<span class=\"mdl-button__ripple-container\"><span class=\"mdl-ripple\"></span></span></button>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-lg-3 col-md-6 col-12 col-sm-6\">\n        <div class=\"blogThumb\">\n          <div class=\"thumb-center\"><img class=\"img-responsive\" alt=\"user\" src=\"../assets/img/course/course4.jpg\"></div>\n          <div class=\"course-box\">\n            <h4>PHP Development Course</h4>\n            <div class=\"text-muted\"><span class=\"m-r-10\">April 23</span>\n              <a class=\"course-likes m-l-10\" href=\"#\"><i class=\"fa fa-heart-o\"></i> 654</a>\n            </div>\n            <p><span><i class=\"ti-alarm-clock\"></i> Duration: 6 Months</span></p>\n            <p><span><i class=\"ti-user\"></i> Professor: Jane Doe</span></p>\n            <p><span><i class=\"fa fa-graduation-cap\"></i> Students: 200+</span></p>\n            <button type=\"button\" class=\"mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect m-b-10 btn-info\" data-upgraded=\",MaterialButton,MaterialRipple\">Read\n              More<span class=\"mdl-button__ripple-container\"><span class=\"mdl-ripple\"></span></span></button>\n          </div>\n        </div>\n      </div>\n    </div>\n    <!-- End course list -->\n    <div class=\"row\">\n      <!-- Quick Mail start -->\n      <div class=\"col-lg-6 col-md-12 col-sm-12 col-12\">\n        <div class=\"card-box\">\n          <div class=\"card-head\">\n            <header>Quick Mail</header>\n            <button id=\"demo_menu-lower-right\" class=\"mdl-button mdl-js-button mdl-button--icon pull-right\" data-upgraded=\",MaterialButton\">\n              <i class=\"material-icons\">more_vert</i>\n            </button>\n            <div class=\"mdl-menu__container is-upgraded\"><div class=\"mdl-menu__outline mdl-menu--bottom-right\"></div><ul class=\"mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect mdl-js-ripple-effect--ignore-events\" data-mdl-for=\"demo_menu-lower-right\" data-upgraded=\",MaterialMenu,MaterialRipple\">\n              <li class=\"mdl-menu__item mdl-js-ripple-effect\" tabindex=\"-1\" data-upgraded=\",MaterialRipple\"><i class=\"material-icons\">assistant_photo</i>Action\n              <span class=\"mdl-menu__item-ripple-container\"><span class=\"mdl-ripple\"></span></span></li>\n              <li class=\"mdl-menu__item mdl-js-ripple-effect\" tabindex=\"-1\" data-upgraded=\",MaterialRipple\"><i class=\"material-icons\">print</i>Another action\n              <span class=\"mdl-menu__item-ripple-container\"><span class=\"mdl-ripple\"></span></span></li>\n              <li class=\"mdl-menu__item mdl-js-ripple-effect\" tabindex=\"-1\" data-upgraded=\",MaterialRipple\"><i class=\"material-icons\">favorite</i>Something else\n                here<span class=\"mdl-menu__item-ripple-container\"><span class=\"mdl-ripple\"></span></span></li>\n            </ul></div>\n          </div>\n          <div class=\"card-body \">\n            <div class=\"mail-list\">\n              <div class=\"compose-mail\">\n                <form method=\"post\">\n                  <div class=\"form-group\">\n                    <label for=\"to\" class=\"\">To:</label>\n                    <input type=\"text\" tabindex=\"1\" id=\"to\" class=\"form-control\">\n                    <div class=\"compose-options\">\n                      <a onclick=\"$(this).hide(); $('#cc').parent().removeClass('hidden'); $('#cc').focus();\" href=\"javascript:;\">Cc</a>\n                      <a onclick=\"$(this).hide(); $('#bcc').parent().removeClass('hidden'); $('#bcc').focus();\" href=\"javascript:;\">Bcc</a>\n                    </div>\n                  </div>\n                  <div class=\"form-group hidden\">\n                    <label for=\"cc\" class=\"\">Cc:</label>\n                    <input type=\"text\" tabindex=\"2\" id=\"cc\" class=\"form-control\">\n                  </div>\n                  <div class=\"form-group hidden\">\n                    <label for=\"bcc\" class=\"\">Bcc:</label>\n                    <input type=\"text\" tabindex=\"2\" id=\"bcc\" class=\"form-control\">\n                  </div>\n                  <div class=\"form-group\">\n                    <label for=\"subject\" class=\"\">Subject:</label>\n                    <input type=\"text\" tabindex=\"1\" id=\"subject\" class=\"form-control\">\n                  </div>\n                  <div>\n                    <div id=\"summernote\" style=\"display: none;\"></div><div class=\"note-editor note-frame panel panel-default\"><div class=\"note-dropzone\" style=\"width: 584.6px; height: 316.6px;\">  <div class=\"note-dropzone-message\">Drag image or text here</div></div><div class=\"note-toolbar panel-heading\"><div class=\"note-btn-group btn-group note-style\"><div class=\"note-btn-group btn-group\"><button type=\"button\" class=\"note-btn btn btn-default btn-sm dropdown-toggle\" tabindex=\"-1\" data-toggle=\"dropdown\" title=\"\" data-original-title=\"Style\"><i class=\"note-icon-magic\"></i> <span class=\"note-icon-caret\"></span></button><div class=\"dropdown-menu dropdown-style\"><li><a href=\"#\" data-value=\"p\"><p>Normal</p></a></li><li><a href=\"#\" data-value=\"blockquote\"><blockquote>Quote</blockquote></a></li><li><a href=\"#\" data-value=\"pre\"><pre>Code</pre></a></li><li><a href=\"#\" data-value=\"h1\"><h1>Header 1</h1></a></li><li><a href=\"#\" data-value=\"h2\"><h2>Header 2</h2></a></li><li><a href=\"#\" data-value=\"h3\"><h3>Header 3</h3></a></li><li><a href=\"#\" data-value=\"h4\"><h4>Header 4</h4></a></li><li><a href=\"#\" data-value=\"h5\"><h5>Header 5</h5></a></li><li><a href=\"#\" data-value=\"h6\"><h6>Header 6</h6></a></li></div></div></div><div class=\"note-btn-group btn-group note-font\"><button type=\"button\" class=\"note-btn btn btn-default btn-sm note-btn-bold\" tabindex=\"-1\" title=\"\" data-original-title=\"Bold (CTRL+B)\"><i class=\"note-icon-bold\"></i></button><button type=\"button\" class=\"note-btn btn btn-default btn-sm note-btn-underline\" tabindex=\"-1\" title=\"\" data-original-title=\"Underline (CTRL+U)\"><i class=\"note-icon-underline\"></i></button><button type=\"button\" class=\"note-btn btn btn-default btn-sm\" tabindex=\"-1\" title=\"\" data-original-title=\"Remove Font Style (CTRL+\\)\"><i class=\"note-icon-eraser\"></i></button></div><div class=\"note-btn-group btn-group note-fontname\"><div class=\"note-btn-group btn-group\"><button type=\"button\" class=\"note-btn btn btn-default btn-sm dropdown-toggle\" tabindex=\"-1\" data-toggle=\"dropdown\" title=\"\" data-original-title=\"Font Family\"><span class=\"note-current-fontname\">sans-serif</span> <span class=\"note-icon-caret\"></span></button><div class=\"dropdown-menu note-check dropdown-fontname\"><li><a href=\"#\" data-value=\"Arial\"><i class=\"note-icon-menu-check\"></i> <span style=\"font-family:Arial\">Arial</span></a></li><li><a href=\"#\" data-value=\"Arial Black\"><i class=\"note-icon-menu-check\"></i> <span style=\"font-family:Arial Black\">Arial Black</span></a></li><li><a href=\"#\" data-value=\"Comic Sans MS\"><i class=\"note-icon-menu-check\"></i> <span style=\"font-family:Comic Sans MS\">Comic Sans MS</span></a></li><li><a href=\"#\" data-value=\"Courier New\"><i class=\"note-icon-menu-check\"></i> <span style=\"font-family:Courier New\">Courier New</span></a></li><li><a href=\"#\" data-value=\"Helvetica\"><i class=\"note-icon-menu-check\"></i> <span style=\"font-family:Helvetica\">Helvetica</span></a></li><li><a href=\"#\" data-value=\"Impact\"><i class=\"note-icon-menu-check\"></i> <span style=\"font-family:Impact\">Impact</span></a></li><li><a href=\"#\" data-value=\"Tahoma\"><i class=\"note-icon-menu-check\"></i> <span style=\"font-family:Tahoma\">Tahoma</span></a></li><li><a href=\"#\" data-value=\"Times New Roman\"><i class=\"note-icon-menu-check\"></i> <span style=\"font-family:Times New Roman\">Times New Roman</span></a></li><li><a href=\"#\" data-value=\"Verdana\"><i class=\"note-icon-menu-check\"></i> <span style=\"font-family:Verdana\">Verdana</span></a></li></div></div></div><div class=\"note-btn-group btn-group note-color\"><div class=\"note-btn-group btn-group note-color\"><button type=\"button\" class=\"note-btn btn btn-default btn-sm note-current-color-button\" tabindex=\"-1\" title=\"\" data-original-title=\"Recent Color\" data-backcolor=\"#FFFF00\"><i class=\"note-icon-font note-recent-color\" style=\"background-color: rgb(255, 255, 0);\"></i></button><button type=\"button\" class=\"note-btn btn btn-default btn-sm dropdown-toggle\" tabindex=\"-1\" data-toggle=\"dropdown\" title=\"\" data-original-title=\"More Color\"> <span class=\"note-icon-caret\"></span></button><div class=\"dropdown-menu\"><div class=\"note-palette\">  <div class=\"note-palette-title\">Background Color</div>  <div>    <button type=\"button\" class=\"note-color-reset btn btn-light\" data-event=\"backColor\" data-value=\"inherit\">Transparent    </button>  </div>  <div class=\"note-holder\" data-event=\"backColor\"><div class=\"note-color-palette\"><div class=\"note-color-row\"><button type=\"button\" class=\"note-color-btn\" style=\"background-color:#000000\" data-event=\"backColor\" data-value=\"#000000\" title=\"\" data-toggle=\"button\" tabindex=\"-1\" data-original-title=\"#000000\"></button><button type=\"button\" class=\"note-color-btn\" style=\"background-color:#424242\" data-event=\"backColor\" data-value=\"#424242\" title=\"\" data-toggle=\"button\" tabindex=\"-1\" data-original-title=\"#424242\"></button><button type=\"button\" class=\"note-color-btn\" style=\"background-color:#636363\" data-event=\"backColor\" data-value=\"#636363\" title=\"\" data-toggle=\"button\" tabindex=\"-1\" data-original-title=\"#636363\"></button><button type=\"button\" class=\"note-color-btn\" style=\"background-color:#9C9C94\" data-event=\"backColor\" data-value=\"#9C9C94\" title=\"\" data-toggle=\"button\" tabindex=\"-1\" data-original-title=\"#9C9C94\"></button><button type=\"button\" class=\"note-color-btn\" style=\"background-color:#CEC6CE\" data-event=\"backColor\" data-value=\"#CEC6CE\" title=\"\" data-toggle=\"button\" tabindex=\"-1\" data-original-title=\"#CEC6CE\"></button><button type=\"button\" class=\"note-color-btn\" style=\"background-color:#EFEFEF\" data-event=\"backColor\" data-value=\"#EFEFEF\" title=\"\" data-toggle=\"button\" tabindex=\"-1\" data-original-title=\"#EFEFEF\"></button><button type=\"button\" class=\"note-color-btn\" style=\"background-color:#F7F7F7\" data-event=\"backColor\" data-value=\"#F7F7F7\" title=\"\" data-toggle=\"button\" tabindex=\"-1\" data-original-title=\"#F7F7F7\"></button><button type=\"button\" class=\"note-color-btn\" style=\"background-color:#FFFFFF\" data-event=\"backColor\" data-value=\"#FFFFFF\" title=\"\" data-toggle=\"button\" tabindex=\"-1\" data-original-title=\"#FFFFFF\"></button></div><div class=\"note-color-row\"><button type=\"button\" class=\"note-color-btn\" style=\"background-color:#FF0000\" data-event=\"backColor\" data-value=\"#FF0000\" title=\"\" data-toggle=\"button\" tabindex=\"-1\" data-original-title=\"#FF0000\"></button><button type=\"button\" class=\"note-color-btn\" style=\"background-color:#FF9C00\" data-event=\"backColor\" data-value=\"#FF9C00\" title=\"\" data-toggle=\"button\" tabindex=\"-1\" data-original-title=\"#FF9C00\"></button><button type=\"button\" class=\"note-color-btn\" style=\"background-color:#FFFF00\" data-event=\"backColor\" data-value=\"#FFFF00\" title=\"\" data-toggle=\"button\" tabindex=\"-1\" data-original-title=\"#FFFF00\"></button><button type=\"button\" class=\"note-color-btn\" style=\"background-color:#00FF00\" data-event=\"backColor\" data-value=\"#00FF00\" title=\"\" data-toggle=\"button\" tabindex=\"-1\" data-original-title=\"#00FF00\"></button><button type=\"button\" class=\"note-color-btn\" style=\"background-color:#00FFFF\" data-event=\"backColor\" data-value=\"#00FFFF\" title=\"\" data-toggle=\"button\" tabindex=\"-1\" data-original-title=\"#00FFFF\"></button><button type=\"button\" class=\"note-color-btn\" style=\"background-color:#0000FF\" data-event=\"backColor\" data-value=\"#0000FF\" title=\"\" data-toggle=\"button\" tabindex=\"-1\" data-original-title=\"#0000FF\"></button><button type=\"button\" class=\"note-color-btn\" style=\"background-color:#9C00FF\" data-event=\"backColor\" data-value=\"#9C00FF\" title=\"\" data-toggle=\"button\" tabindex=\"-1\" data-original-title=\"#9C00FF\"></button><button type=\"button\" class=\"note-color-btn\" style=\"background-color:#FF00FF\" data-event=\"backColor\" data-value=\"#FF00FF\" title=\"\" data-toggle=\"button\" tabindex=\"-1\" data-original-title=\"#FF00FF\"></button></div><div class=\"note-color-row\"><button type=\"button\" class=\"note-color-btn\" style=\"background-color:#F7C6CE\" data-event=\"backColor\" data-value=\"#F7C6CE\" title=\"\" data-toggle=\"button\" tabindex=\"-1\" data-original-title=\"#F7C6CE\"></button><button type=\"button\" class=\"note-color-btn\" style=\"background-color:#FFE7CE\" data-event=\"backColor\" data-value=\"#FFE7CE\" title=\"\" data-toggle=\"button\" tabindex=\"-1\" data-original-title=\"#FFE7CE\"></button><button type=\"button\" class=\"note-color-btn\" style=\"background-color:#FFEFC6\" data-event=\"backColor\" data-value=\"#FFEFC6\" title=\"\" data-toggle=\"button\" tabindex=\"-1\" data-original-title=\"#FFEFC6\"></button><button type=\"button\" class=\"note-color-btn\" style=\"background-color:#D6EFD6\" data-event=\"backColor\" data-value=\"#D6EFD6\" title=\"\" data-toggle=\"button\" tabindex=\"-1\" data-original-title=\"#D6EFD6\"></button><button type=\"button\" class=\"note-color-btn\" style=\"background-color:#CEDEE7\" data-event=\"backColor\" data-value=\"#CEDEE7\" title=\"\" data-toggle=\"button\" tabindex=\"-1\" data-original-title=\"#CEDEE7\"></button><button type=\"button\" class=\"note-color-btn\" style=\"background-color:#CEE7F7\" data-event=\"backColor\" data-value=\"#CEE7F7\" title=\"\" data-toggle=\"button\" tabindex=\"-1\" data-original-title=\"#CEE7F7\"></button><button type=\"button\" class=\"note-color-btn\" style=\"background-color:#D6D6E7\" data-event=\"backColor\" data-value=\"#D6D6E7\" title=\"\" data-toggle=\"button\" tabindex=\"-1\" data-original-title=\"#D6D6E7\"></button><button type=\"button\" class=\"note-color-btn\" style=\"background-color:#E7D6DE\" data-event=\"backColor\" data-value=\"#E7D6DE\" title=\"\" data-toggle=\"button\" tabindex=\"-1\" data-original-title=\"#E7D6DE\"></button></div><div class=\"note-color-row\"><button type=\"button\" class=\"note-color-btn\" style=\"background-color:#E79C9C\" data-event=\"backColor\" data-value=\"#E79C9C\" title=\"\" data-toggle=\"button\" tabindex=\"-1\" data-original-title=\"#E79C9C\"></button><button type=\"button\" class=\"note-color-btn\" style=\"background-color:#FFC69C\" data-event=\"backColor\" data-value=\"#FFC69C\" title=\"\" data-toggle=\"button\" tabindex=\"-1\" data-original-title=\"#FFC69C\"></button><button type=\"button\" class=\"note-color-btn\" style=\"background-color:#FFE79C\" data-event=\"backColor\" data-value=\"#FFE79C\" title=\"\" data-toggle=\"button\" tabindex=\"-1\" data-original-title=\"#FFE79C\"></button><button type=\"button\" class=\"note-color-btn\" style=\"background-color:#B5D6A5\" data-event=\"backColor\" data-value=\"#B5D6A5\" title=\"\" data-toggle=\"button\" tabindex=\"-1\" data-original-title=\"#B5D6A5\"></button><button type=\"button\" class=\"note-color-btn\" style=\"background-color:#A5C6CE\" data-event=\"backColor\" data-value=\"#A5C6CE\" title=\"\" data-toggle=\"button\" tabindex=\"-1\" data-original-title=\"#A5C6CE\"></button><button type=\"button\" class=\"note-color-btn\" style=\"background-color:#9CC6EF\" data-event=\"backColor\" data-value=\"#9CC6EF\" title=\"\" data-toggle=\"button\" tabindex=\"-1\" data-original-title=\"#9CC6EF\"></button><button type=\"button\" class=\"note-color-btn\" style=\"background-color:#B5A5D6\" data-event=\"backColor\" data-value=\"#B5A5D6\" title=\"\" data-toggle=\"button\" tabindex=\"-1\" data-original-title=\"#B5A5D6\"></button><button type=\"button\" class=\"note-color-btn\" style=\"background-color:#D6A5BD\" data-event=\"backColor\" data-value=\"#D6A5BD\" title=\"\" data-toggle=\"button\" tabindex=\"-1\" data-original-title=\"#D6A5BD\"></button></div><div class=\"note-color-row\"><button type=\"button\" class=\"note-color-btn\" style=\"background-color:#E76363\" data-event=\"backColor\" data-value=\"#E76363\" title=\"\" data-toggle=\"button\" tabindex=\"-1\" data-original-title=\"#E76363\"></button><button type=\"button\" class=\"note-color-btn\" style=\"background-color:#F7AD6B\" data-event=\"backColor\" data-value=\"#F7AD6B\" title=\"\" data-toggle=\"button\" tabindex=\"-1\" data-original-title=\"#F7AD6B\"></button><button type=\"button\" class=\"note-color-btn\" style=\"background-color:#FFD663\" data-event=\"backColor\" data-value=\"#FFD663\" title=\"\" data-toggle=\"button\" tabindex=\"-1\" data-original-title=\"#FFD663\"></button><button type=\"button\" class=\"note-color-btn\" style=\"background-color:#94BD7B\" data-event=\"backColor\" data-value=\"#94BD7B\" title=\"\" data-toggle=\"button\" tabindex=\"-1\" data-original-title=\"#94BD7B\"></button><button type=\"button\" class=\"note-color-btn\" style=\"background-color:#73A5AD\" data-event=\"backColor\" data-value=\"#73A5AD\" title=\"\" data-toggle=\"button\" tabindex=\"-1\" data-original-title=\"#73A5AD\"></button><button type=\"button\" class=\"note-color-btn\" style=\"background-color:#6BADDE\" data-event=\"backColor\" data-value=\"#6BADDE\" title=\"\" data-toggle=\"button\" tabindex=\"-1\" data-original-title=\"#6BADDE\"></button><button type=\"button\" class=\"note-color-btn\" style=\"background-color:#8C7BC6\" data-event=\"backColor\" data-value=\"#8C7BC6\" title=\"\" data-toggle=\"button\" tabindex=\"-1\" data-original-title=\"#8C7BC6\"></button><button type=\"button\" class=\"note-color-btn\" style=\"background-color:#C67BA5\" data-event=\"backColor\" data-value=\"#C67BA5\" title=\"\" data-toggle=\"button\" tabindex=\"-1\" data-original-title=\"#C67BA5\"></button></div><div class=\"note-color-row\"><button type=\"button\" class=\"note-color-btn\" style=\"background-color:#CE0000\" data-event=\"backColor\" data-value=\"#CE0000\" title=\"\" data-toggle=\"button\" tabindex=\"-1\" data-original-title=\"#CE0000\"></button><button type=\"button\" class=\"note-color-btn\" style=\"background-color:#E79439\" data-event=\"backColor\" data-value=\"#E79439\" title=\"\" data-toggle=\"button\" tabindex=\"-1\" data-original-title=\"#E79439\"></button><button type=\"button\" class=\"note-color-btn\" style=\"background-color:#EFC631\" data-event=\"backColor\" data-value=\"#EFC631\" title=\"\" data-toggle=\"button\" tabindex=\"-1\" data-original-title=\"#EFC631\"></button><button type=\"button\" class=\"note-color-btn\" style=\"background-color:#6BA54A\" data-event=\"backColor\" data-value=\"#6BA54A\" title=\"\" data-toggle=\"button\" tabindex=\"-1\" data-original-title=\"#6BA54A\"></button><button type=\"button\" class=\"note-color-btn\" style=\"background-color:#4A7B8C\" data-event=\"backColor\" data-value=\"#4A7B8C\" title=\"\" data-toggle=\"button\" tabindex=\"-1\" data-original-title=\"#4A7B8C\"></button><button type=\"button\" class=\"note-color-btn\" style=\"background-color:#3984C6\" data-event=\"backColor\" data-value=\"#3984C6\" title=\"\" data-toggle=\"button\" tabindex=\"-1\" data-original-title=\"#3984C6\"></button><button type=\"button\" class=\"note-color-btn\" style=\"background-color:#634AA5\" data-event=\"backColor\" data-value=\"#634AA5\" title=\"\" data-toggle=\"button\" tabindex=\"-1\" data-original-title=\"#634AA5\"></button><button type=\"button\" class=\"note-color-btn\" style=\"background-color:#A54A7B\" data-event=\"backColor\" data-value=\"#A54A7B\" title=\"\" data-toggle=\"button\" tabindex=\"-1\" data-original-title=\"#A54A7B\"></button></div><div class=\"note-color-row\"><button type=\"button\" class=\"note-color-btn\" style=\"background-color:#9C0000\" data-event=\"backColor\" data-value=\"#9C0000\" title=\"\" data-toggle=\"button\" tabindex=\"-1\" data-original-title=\"#9C0000\"></button><button type=\"button\" class=\"note-color-btn\" style=\"background-color:#B56308\" data-event=\"backColor\" data-value=\"#B56308\" title=\"\" data-toggle=\"button\" tabindex=\"-1\" data-original-title=\"#B56308\"></button><button type=\"button\" class=\"note-color-btn\" style=\"background-color:#BD9400\" data-event=\"backColor\" data-value=\"#BD9400\" title=\"\" data-toggle=\"button\" tabindex=\"-1\" data-original-title=\"#BD9400\"></button><button type=\"button\" class=\"note-color-btn\" style=\"background-color:#397B21\" data-event=\"backColor\" data-value=\"#397B21\" title=\"\" data-toggle=\"button\" tabindex=\"-1\" data-original-title=\"#397B21\"></button><button type=\"button\" class=\"note-color-btn\" style=\"background-color:#104A5A\" data-event=\"backColor\" data-value=\"#104A5A\" title=\"\" data-toggle=\"button\" tabindex=\"-1\" data-original-title=\"#104A5A\"></button><button type=\"button\" class=\"note-color-btn\" style=\"background-color:#085294\" data-event=\"backColor\" data-value=\"#085294\" title=\"\" data-toggle=\"button\" tabindex=\"-1\" data-original-title=\"#085294\"></button><button type=\"button\" class=\"note-color-btn\" style=\"background-color:#311873\" data-event=\"backColor\" data-value=\"#311873\" title=\"\" data-toggle=\"button\" tabindex=\"-1\" data-original-title=\"#311873\"></button><button type=\"button\" class=\"note-color-btn\" style=\"background-color:#731842\" data-event=\"backColor\" data-value=\"#731842\" title=\"\" data-toggle=\"button\" tabindex=\"-1\" data-original-title=\"#731842\"></button></div><div class=\"note-color-row\"><button type=\"button\" class=\"note-color-btn\" style=\"background-color:#630000\" data-event=\"backColor\" data-value=\"#630000\" title=\"\" data-toggle=\"button\" tabindex=\"-1\" data-original-title=\"#630000\"></button><button type=\"button\" class=\"note-color-btn\" style=\"background-color:#7B3900\" data-event=\"backColor\" data-value=\"#7B3900\" title=\"\" data-toggle=\"button\" tabindex=\"-1\" data-original-title=\"#7B3900\"></button><button type=\"button\" class=\"note-color-btn\" style=\"background-color:#846300\" data-event=\"backColor\" data-value=\"#846300\" title=\"\" data-toggle=\"button\" tabindex=\"-1\" data-original-title=\"#846300\"></button><button type=\"button\" class=\"note-color-btn\" style=\"background-color:#295218\" data-event=\"backColor\" data-value=\"#295218\" title=\"\" data-toggle=\"button\" tabindex=\"-1\" data-original-title=\"#295218\"></button><button type=\"button\" class=\"note-color-btn\" style=\"background-color:#083139\" data-event=\"backColor\" data-value=\"#083139\" title=\"\" data-toggle=\"button\" tabindex=\"-1\" data-original-title=\"#083139\"></button><button type=\"button\" class=\"note-color-btn\" style=\"background-color:#003163\" data-event=\"backColor\" data-value=\"#003163\" title=\"\" data-toggle=\"button\" tabindex=\"-1\" data-original-title=\"#003163\"></button><button type=\"button\" class=\"note-color-btn\" style=\"background-color:#21104A\" data-event=\"backColor\" data-value=\"#21104A\" title=\"\" data-toggle=\"button\" tabindex=\"-1\" data-original-title=\"#21104A\"></button><button type=\"button\" class=\"note-color-btn\" style=\"background-color:#4A1031\" data-event=\"backColor\" data-value=\"#4A1031\" title=\"\" data-toggle=\"button\" tabindex=\"-1\" data-original-title=\"#4A1031\"></button></div></div></div></div><div class=\"note-palette\">  <div class=\"note-palette-title\">Foreground Color</div>  <div>    <button type=\"button\" class=\"note-color-reset btn btn-light\" data-event=\"removeFormat\" data-value=\"foreColor\">Reset to default    </button>  </div>  <div class=\"note-holder\" data-event=\"foreColor\"><div class=\"note-color-palette\"><div class=\"note-color-row\"><button type=\"button\" class=\"note-color-btn\" style=\"background-color:#000000\" data-event=\"foreColor\" data-value=\"#000000\" title=\"\" data-toggle=\"button\" tabindex=\"-1\" data-original-title=\"#000000\"></button><button type=\"button\" class=\"note-color-btn\" style=\"background-color:#424242\" data-event=\"foreColor\" data-value=\"#424242\" title=\"\" data-toggle=\"button\" tabindex=\"-1\" data-original-title=\"#424242\"></button><button type=\"button\" class=\"note-color-btn\" style=\"background-color:#636363\" data-event=\"foreColor\" data-value=\"#636363\" title=\"\" data-toggle=\"button\" tabindex=\"-1\" data-original-title=\"#636363\"></button><button type=\"button\" class=\"note-color-btn\" style=\"background-color:#9C9C94\" data-event=\"foreColor\" data-value=\"#9C9C94\" title=\"\" data-toggle=\"button\" tabindex=\"-1\" data-original-title=\"#9C9C94\"></button><button type=\"button\" class=\"note-color-btn\" style=\"background-color:#CEC6CE\" data-event=\"foreColor\" data-value=\"#CEC6CE\" title=\"\" data-toggle=\"button\" tabindex=\"-1\" data-original-title=\"#CEC6CE\"></button><button type=\"button\" class=\"note-color-btn\" style=\"background-color:#EFEFEF\" data-event=\"foreColor\" data-value=\"#EFEFEF\" title=\"\" data-toggle=\"button\" tabindex=\"-1\" data-original-title=\"#EFEFEF\"></button><button type=\"button\" class=\"note-color-btn\" style=\"background-color:#F7F7F7\" data-event=\"foreColor\" data-value=\"#F7F7F7\" title=\"\" data-toggle=\"button\" tabindex=\"-1\" data-original-title=\"#F7F7F7\"></button><button type=\"button\" class=\"note-color-btn\" style=\"background-color:#FFFFFF\" data-event=\"foreColor\" data-value=\"#FFFFFF\" title=\"\" data-toggle=\"button\" tabindex=\"-1\" data-original-title=\"#FFFFFF\"></button></div><div class=\"note-color-row\"><button type=\"button\" class=\"note-color-btn\" style=\"background-color:#FF0000\" data-event=\"foreColor\" data-value=\"#FF0000\" title=\"\" data-toggle=\"button\" tabindex=\"-1\" data-original-title=\"#FF0000\"></button><button type=\"button\" class=\"note-color-btn\" style=\"background-color:#FF9C00\" data-event=\"foreColor\" data-value=\"#FF9C00\" title=\"\" data-toggle=\"button\" tabindex=\"-1\" data-original-title=\"#FF9C00\"></button><button type=\"button\" class=\"note-color-btn\" style=\"background-color:#FFFF00\" data-event=\"foreColor\" data-value=\"#FFFF00\" title=\"\" data-toggle=\"button\" tabindex=\"-1\" data-original-title=\"#FFFF00\"></button><button type=\"button\" class=\"note-color-btn\" style=\"background-color:#00FF00\" data-event=\"foreColor\" data-value=\"#00FF00\" title=\"\" data-toggle=\"button\" tabindex=\"-1\" data-original-title=\"#00FF00\"></button><button type=\"button\" class=\"note-color-btn\" style=\"background-color:#00FFFF\" data-event=\"foreColor\" data-value=\"#00FFFF\" title=\"\" data-toggle=\"button\" tabindex=\"-1\" data-original-title=\"#00FFFF\"></button><button type=\"button\" class=\"note-color-btn\" style=\"background-color:#0000FF\" data-event=\"foreColor\" data-value=\"#0000FF\" title=\"\" data-toggle=\"button\" tabindex=\"-1\" data-original-title=\"#0000FF\"></button><button type=\"button\" class=\"note-color-btn\" style=\"background-color:#9C00FF\" data-event=\"foreColor\" data-value=\"#9C00FF\" title=\"\" data-toggle=\"button\" tabindex=\"-1\" data-original-title=\"#9C00FF\"></button><button type=\"button\" class=\"note-color-btn\" style=\"background-color:#FF00FF\" data-event=\"foreColor\" data-value=\"#FF00FF\" title=\"\" data-toggle=\"button\" tabindex=\"-1\" data-original-title=\"#FF00FF\"></button></div><div class=\"note-color-row\"><button type=\"button\" class=\"note-color-btn\" style=\"background-color:#F7C6CE\" data-event=\"foreColor\" data-value=\"#F7C6CE\" title=\"\" data-toggle=\"button\" tabindex=\"-1\" data-original-title=\"#F7C6CE\"></button><button type=\"button\" class=\"note-color-btn\" style=\"background-color:#FFE7CE\" data-event=\"foreColor\" data-value=\"#FFE7CE\" title=\"\" data-toggle=\"button\" tabindex=\"-1\" data-original-title=\"#FFE7CE\"></button><button type=\"button\" class=\"note-color-btn\" style=\"background-color:#FFEFC6\" data-event=\"foreColor\" data-value=\"#FFEFC6\" title=\"\" data-toggle=\"button\" tabindex=\"-1\" data-original-title=\"#FFEFC6\"></button><button type=\"button\" class=\"note-color-btn\" style=\"background-color:#D6EFD6\" data-event=\"foreColor\" data-value=\"#D6EFD6\" title=\"\" data-toggle=\"button\" tabindex=\"-1\" data-original-title=\"#D6EFD6\"></button><button type=\"button\" class=\"note-color-btn\" style=\"background-color:#CEDEE7\" data-event=\"foreColor\" data-value=\"#CEDEE7\" title=\"\" data-toggle=\"button\" tabindex=\"-1\" data-original-title=\"#CEDEE7\"></button><button type=\"button\" class=\"note-color-btn\" style=\"background-color:#CEE7F7\" data-event=\"foreColor\" data-value=\"#CEE7F7\" title=\"\" data-toggle=\"button\" tabindex=\"-1\" data-original-title=\"#CEE7F7\"></button><button type=\"button\" class=\"note-color-btn\" style=\"background-color:#D6D6E7\" data-event=\"foreColor\" data-value=\"#D6D6E7\" title=\"\" data-toggle=\"button\" tabindex=\"-1\" data-original-title=\"#D6D6E7\"></button><button type=\"button\" class=\"note-color-btn\" style=\"background-color:#E7D6DE\" data-event=\"foreColor\" data-value=\"#E7D6DE\" title=\"\" data-toggle=\"button\" tabindex=\"-1\" data-original-title=\"#E7D6DE\"></button></div><div class=\"note-color-row\"><button type=\"button\" class=\"note-color-btn\" style=\"background-color:#E79C9C\" data-event=\"foreColor\" data-value=\"#E79C9C\" title=\"\" data-toggle=\"button\" tabindex=\"-1\" data-original-title=\"#E79C9C\"></button><button type=\"button\" class=\"note-color-btn\" style=\"background-color:#FFC69C\" data-event=\"foreColor\" data-value=\"#FFC69C\" title=\"\" data-toggle=\"button\" tabindex=\"-1\" data-original-title=\"#FFC69C\"></button><button type=\"button\" class=\"note-color-btn\" style=\"background-color:#FFE79C\" data-event=\"foreColor\" data-value=\"#FFE79C\" title=\"\" data-toggle=\"button\" tabindex=\"-1\" data-original-title=\"#FFE79C\"></button><button type=\"button\" class=\"note-color-btn\" style=\"background-color:#B5D6A5\" data-event=\"foreColor\" data-value=\"#B5D6A5\" title=\"\" data-toggle=\"button\" tabindex=\"-1\" data-original-title=\"#B5D6A5\"></button><button type=\"button\" class=\"note-color-btn\" style=\"background-color:#A5C6CE\" data-event=\"foreColor\" data-value=\"#A5C6CE\" title=\"\" data-toggle=\"button\" tabindex=\"-1\" data-original-title=\"#A5C6CE\"></button><button type=\"button\" class=\"note-color-btn\" style=\"background-color:#9CC6EF\" data-event=\"foreColor\" data-value=\"#9CC6EF\" title=\"\" data-toggle=\"button\" tabindex=\"-1\" data-original-title=\"#9CC6EF\"></button><button type=\"button\" class=\"note-color-btn\" style=\"background-color:#B5A5D6\" data-event=\"foreColor\" data-value=\"#B5A5D6\" title=\"\" data-toggle=\"button\" tabindex=\"-1\" data-original-title=\"#B5A5D6\"></button><button type=\"button\" class=\"note-color-btn\" style=\"background-color:#D6A5BD\" data-event=\"foreColor\" data-value=\"#D6A5BD\" title=\"\" data-toggle=\"button\" tabindex=\"-1\" data-original-title=\"#D6A5BD\"></button></div><div class=\"note-color-row\"><button type=\"button\" class=\"note-color-btn\" style=\"background-color:#E76363\" data-event=\"foreColor\" data-value=\"#E76363\" title=\"\" data-toggle=\"button\" tabindex=\"-1\" data-original-title=\"#E76363\"></button><button type=\"button\" class=\"note-color-btn\" style=\"background-color:#F7AD6B\" data-event=\"foreColor\" data-value=\"#F7AD6B\" title=\"\" data-toggle=\"button\" tabindex=\"-1\" data-original-title=\"#F7AD6B\"></button><button type=\"button\" class=\"note-color-btn\" style=\"background-color:#FFD663\" data-event=\"foreColor\" data-value=\"#FFD663\" title=\"\" data-toggle=\"button\" tabindex=\"-1\" data-original-title=\"#FFD663\"></button><button type=\"button\" class=\"note-color-btn\" style=\"background-color:#94BD7B\" data-event=\"foreColor\" data-value=\"#94BD7B\" title=\"\" data-toggle=\"button\" tabindex=\"-1\" data-original-title=\"#94BD7B\"></button><button type=\"button\" class=\"note-color-btn\" style=\"background-color:#73A5AD\" data-event=\"foreColor\" data-value=\"#73A5AD\" title=\"\" data-toggle=\"button\" tabindex=\"-1\" data-original-title=\"#73A5AD\"></button><button type=\"button\" class=\"note-color-btn\" style=\"background-color:#6BADDE\" data-event=\"foreColor\" data-value=\"#6BADDE\" title=\"\" data-toggle=\"button\" tabindex=\"-1\" data-original-title=\"#6BADDE\"></button><button type=\"button\" class=\"note-color-btn\" style=\"background-color:#8C7BC6\" data-event=\"foreColor\" data-value=\"#8C7BC6\" title=\"\" data-toggle=\"button\" tabindex=\"-1\" data-original-title=\"#8C7BC6\"></button><button type=\"button\" class=\"note-color-btn\" style=\"background-color:#C67BA5\" data-event=\"foreColor\" data-value=\"#C67BA5\" title=\"\" data-toggle=\"button\" tabindex=\"-1\" data-original-title=\"#C67BA5\"></button></div><div class=\"note-color-row\"><button type=\"button\" class=\"note-color-btn\" style=\"background-color:#CE0000\" data-event=\"foreColor\" data-value=\"#CE0000\" title=\"\" data-toggle=\"button\" tabindex=\"-1\" data-original-title=\"#CE0000\"></button><button type=\"button\" class=\"note-color-btn\" style=\"background-color:#E79439\" data-event=\"foreColor\" data-value=\"#E79439\" title=\"\" data-toggle=\"button\" tabindex=\"-1\" data-original-title=\"#E79439\"></button><button type=\"button\" class=\"note-color-btn\" style=\"background-color:#EFC631\" data-event=\"foreColor\" data-value=\"#EFC631\" title=\"\" data-toggle=\"button\" tabindex=\"-1\" data-original-title=\"#EFC631\"></button><button type=\"button\" class=\"note-color-btn\" style=\"background-color:#6BA54A\" data-event=\"foreColor\" data-value=\"#6BA54A\" title=\"\" data-toggle=\"button\" tabindex=\"-1\" data-original-title=\"#6BA54A\"></button><button type=\"button\" class=\"note-color-btn\" style=\"background-color:#4A7B8C\" data-event=\"foreColor\" data-value=\"#4A7B8C\" title=\"\" data-toggle=\"button\" tabindex=\"-1\" data-original-title=\"#4A7B8C\"></button><button type=\"button\" class=\"note-color-btn\" style=\"background-color:#3984C6\" data-event=\"foreColor\" data-value=\"#3984C6\" title=\"\" data-toggle=\"button\" tabindex=\"-1\" data-original-title=\"#3984C6\"></button><button type=\"button\" class=\"note-color-btn\" style=\"background-color:#634AA5\" data-event=\"foreColor\" data-value=\"#634AA5\" title=\"\" data-toggle=\"button\" tabindex=\"-1\" data-original-title=\"#634AA5\"></button><button type=\"button\" class=\"note-color-btn\" style=\"background-color:#A54A7B\" data-event=\"foreColor\" data-value=\"#A54A7B\" title=\"\" data-toggle=\"button\" tabindex=\"-1\" data-original-title=\"#A54A7B\"></button></div><div class=\"note-color-row\"><button type=\"button\" class=\"note-color-btn\" style=\"background-color:#9C0000\" data-event=\"foreColor\" data-value=\"#9C0000\" title=\"\" data-toggle=\"button\" tabindex=\"-1\" data-original-title=\"#9C0000\"></button><button type=\"button\" class=\"note-color-btn\" style=\"background-color:#B56308\" data-event=\"foreColor\" data-value=\"#B56308\" title=\"\" data-toggle=\"button\" tabindex=\"-1\" data-original-title=\"#B56308\"></button><button type=\"button\" class=\"note-color-btn\" style=\"background-color:#BD9400\" data-event=\"foreColor\" data-value=\"#BD9400\" title=\"\" data-toggle=\"button\" tabindex=\"-1\" data-original-title=\"#BD9400\"></button><button type=\"button\" class=\"note-color-btn\" style=\"background-color:#397B21\" data-event=\"foreColor\" data-value=\"#397B21\" title=\"\" data-toggle=\"button\" tabindex=\"-1\" data-original-title=\"#397B21\"></button><button type=\"button\" class=\"note-color-btn\" style=\"background-color:#104A5A\" data-event=\"foreColor\" data-value=\"#104A5A\" title=\"\" data-toggle=\"button\" tabindex=\"-1\" data-original-title=\"#104A5A\"></button><button type=\"button\" class=\"note-color-btn\" style=\"background-color:#085294\" data-event=\"foreColor\" data-value=\"#085294\" title=\"\" data-toggle=\"button\" tabindex=\"-1\" data-original-title=\"#085294\"></button><button type=\"button\" class=\"note-color-btn\" style=\"background-color:#311873\" data-event=\"foreColor\" data-value=\"#311873\" title=\"\" data-toggle=\"button\" tabindex=\"-1\" data-original-title=\"#311873\"></button><button type=\"button\" class=\"note-color-btn\" style=\"background-color:#731842\" data-event=\"foreColor\" data-value=\"#731842\" title=\"\" data-toggle=\"button\" tabindex=\"-1\" data-original-title=\"#731842\"></button></div><div class=\"note-color-row\"><button type=\"button\" class=\"note-color-btn\" style=\"background-color:#630000\" data-event=\"foreColor\" data-value=\"#630000\" title=\"\" data-toggle=\"button\" tabindex=\"-1\" data-original-title=\"#630000\"></button><button type=\"button\" class=\"note-color-btn\" style=\"background-color:#7B3900\" data-event=\"foreColor\" data-value=\"#7B3900\" title=\"\" data-toggle=\"button\" tabindex=\"-1\" data-original-title=\"#7B3900\"></button><button type=\"button\" class=\"note-color-btn\" style=\"background-color:#846300\" data-event=\"foreColor\" data-value=\"#846300\" title=\"\" data-toggle=\"button\" tabindex=\"-1\" data-original-title=\"#846300\"></button><button type=\"button\" class=\"note-color-btn\" style=\"background-color:#295218\" data-event=\"foreColor\" data-value=\"#295218\" title=\"\" data-toggle=\"button\" tabindex=\"-1\" data-original-title=\"#295218\"></button><button type=\"button\" class=\"note-color-btn\" style=\"background-color:#083139\" data-event=\"foreColor\" data-value=\"#083139\" title=\"\" data-toggle=\"button\" tabindex=\"-1\" data-original-title=\"#083139\"></button><button type=\"button\" class=\"note-color-btn\" style=\"background-color:#003163\" data-event=\"foreColor\" data-value=\"#003163\" title=\"\" data-toggle=\"button\" tabindex=\"-1\" data-original-title=\"#003163\"></button><button type=\"button\" class=\"note-color-btn\" style=\"background-color:#21104A\" data-event=\"foreColor\" data-value=\"#21104A\" title=\"\" data-toggle=\"button\" tabindex=\"-1\" data-original-title=\"#21104A\"></button><button type=\"button\" class=\"note-color-btn\" style=\"background-color:#4A1031\" data-event=\"foreColor\" data-value=\"#4A1031\" title=\"\" data-toggle=\"button\" tabindex=\"-1\" data-original-title=\"#4A1031\"></button></div></div></div></div></div></div></div><div class=\"note-btn-group btn-group note-para\"><button type=\"button\" class=\"note-btn btn btn-default btn-sm\" tabindex=\"-1\" title=\"\" data-original-title=\"Unordered list (CTRL+SHIFT+NUM7)\"><i class=\"note-icon-unorderedlist\"></i></button><button type=\"button\" class=\"note-btn btn btn-default btn-sm\" tabindex=\"-1\" title=\"\" data-original-title=\"Ordered list (CTRL+SHIFT+NUM8)\"><i class=\"note-icon-orderedlist\"></i></button><div class=\"note-btn-group btn-group\"><button type=\"button\" class=\"note-btn btn btn-default btn-sm dropdown-toggle\" tabindex=\"-1\" data-toggle=\"dropdown\" title=\"\" data-original-title=\"Paragraph\"><i class=\"note-icon-align-left\"></i> <span class=\"note-icon-caret\"></span></button><div class=\"dropdown-menu\"><div class=\"note-btn-group btn-group note-align\"><button type=\"button\" class=\"note-btn btn btn-default btn-sm\" tabindex=\"-1\" title=\"\" data-original-title=\"Align left (CTRL+SHIFT+L)\"><i class=\"note-icon-align-left\"></i></button><button type=\"button\" class=\"note-btn btn btn-default btn-sm\" tabindex=\"-1\" title=\"\" data-original-title=\"Align center (CTRL+SHIFT+E)\"><i class=\"note-icon-align-center\"></i></button><button type=\"button\" class=\"note-btn btn btn-default btn-sm\" tabindex=\"-1\" title=\"\" data-original-title=\"Align right (CTRL+SHIFT+R)\"><i class=\"note-icon-align-right\"></i></button><button type=\"button\" class=\"note-btn btn btn-default btn-sm\" tabindex=\"-1\" title=\"\" data-original-title=\"Justify full (CTRL+SHIFT+J)\"><i class=\"note-icon-align-justify\"></i></button></div><div class=\"note-btn-group btn-group note-list\"><button type=\"button\" class=\"note-btn btn btn-default btn-sm\" tabindex=\"-1\" title=\"\" data-original-title=\"Outdent (CTRL+[)\"><i class=\"note-icon-align-outdent\"></i></button><button type=\"button\" class=\"note-btn btn btn-default btn-sm\" tabindex=\"-1\" title=\"\" data-original-title=\"Indent (CTRL+])\"><i class=\"note-icon-align-indent\"></i></button></div></div></div></div><div class=\"note-btn-group btn-group note-table\"><div class=\"note-btn-group btn-group\"><button type=\"button\" class=\"note-btn btn btn-default btn-sm dropdown-toggle\" tabindex=\"-1\" data-toggle=\"dropdown\" title=\"\" data-original-title=\"Table\"><i class=\"note-icon-table\"></i> <span class=\"note-icon-caret\"></span></button><div class=\"dropdown-menu note-table\"><div class=\"note-dimension-picker\">  <div class=\"note-dimension-picker-mousecatcher\" data-event=\"insertTable\" data-value=\"1x1\" style=\"width: 10em; height: 10em;\"></div>  <div class=\"note-dimension-picker-highlighted\"></div>  <div class=\"note-dimension-picker-unhighlighted\"></div></div><div class=\"note-dimension-display\">1 x 1</div></div></div></div><div class=\"note-btn-group btn-group note-insert\"><button type=\"button\" class=\"note-btn btn btn-default btn-sm\" tabindex=\"-1\" title=\"\" data-original-title=\"Link (CTRL+K)\"><i class=\"note-icon-link\"></i></button><button type=\"button\" class=\"note-btn btn btn-default btn-sm\" tabindex=\"-1\" title=\"\" data-original-title=\"Picture\"><i class=\"note-icon-picture\"></i></button><button type=\"button\" class=\"note-btn btn btn-default btn-sm\" tabindex=\"-1\" title=\"\" data-original-title=\"Video\"><i class=\"note-icon-video\"></i></button></div><div class=\"note-btn-group btn-group note-view\"><button type=\"button\" class=\"note-btn btn btn-default btn-sm btn-fullscreen\" tabindex=\"-1\" title=\"\" data-original-title=\"Full Screen\"><i class=\"note-icon-arrows-alt\"></i></button><button type=\"button\" class=\"note-btn btn btn-default btn-sm btn-codeview\" tabindex=\"-1\" title=\"\" data-original-title=\"Code View\"><i class=\"note-icon-code\"></i></button><button type=\"button\" class=\"note-btn btn btn-default btn-sm\" tabindex=\"-1\" title=\"\" data-original-title=\"Help\"><i class=\"note-icon-question\"></i></button></div></div><div class=\"note-editing-area\"><div class=\"note-handle\"><div class=\"note-control-selection\"><div class=\"note-control-selection-bg\"></div><div class=\"note-control-holder note-control-nw\"></div><div class=\"note-control-holder note-control-ne\"></div><div class=\"note-control-holder note-control-sw\"></div><div class=\"note-control-sizing note-control-se\"></div><div class=\"note-control-selection-info\"></div></div></div><textarea class=\"note-codable\"></textarea><div class=\"note-editable panel-body\" contenteditable=\"true\" style=\"height: 200px;\"><p><br></p></div></div><div class=\"note-statusbar\">  <div class=\"note-resizebar\">    <div class=\"note-icon-bar\"></div>    <div class=\"note-icon-bar\"></div>    <div class=\"note-icon-bar\"></div>  </div></div><div class=\"modal link-dialog\" aria-hidden=\"false\" tabindex=\"-1\"><div class=\"modal-dialog\">  <div class=\"modal-content\">    <div class=\"modal-header\">      <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">×</span></button>      <h4 class=\"modal-title\">Insert Link</h4>    </div>    <div class=\"modal-body\"><div class=\"form-group note-form-group\"><label class=\"note-form-label\">Text to display</label><input class=\"note-link-text form-control  note-form-control  note-input\" type=\"text\"></div><div class=\"form-group note-form-group\"><label class=\"note-form-label\">To what URL should this link go?</label><input class=\"note-link-url form-control note-form-control note-input\" type=\"text\" value=\"http://\"></div><div class=\"checkbox\"> <label for=\"sn-checkbox-open-in-new-window\"> <input type=\"checkbox\" id=\"sn-checkbox-open-in-new-window\" checked=\"\">Open in new window</label></div></div>    <div class=\"modal-footer\"><button href=\"#\" class=\"btn btn-primary note-btn note-btn-primary note-link-btn disabled\" disabled=\"\">Insert Link</button></div>  </div></div></div><div class=\"modal\" aria-hidden=\"false\" tabindex=\"-1\"><div class=\"modal-dialog\">  <div class=\"modal-content\">    <div class=\"modal-header\">      <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">×</span></button>      <h4 class=\"modal-title\">Insert Image</h4>    </div>    <div class=\"modal-body\"><div class=\"form-group note-form-group note-group-select-from-files\"><label class=\"note-form-label\">Select from files</label><input class=\"note-image-input form-control note-form-control note-input\" type=\"file\" name=\"files\" accept=\"image/*\" multiple=\"multiple\"></div><div class=\"form-group note-group-image-url\" style=\"overflow:auto;\"><label class=\"note-form-label\">Image URL</label><input class=\"note-image-url form-control note-form-control note-input  col-md-12\" type=\"text\"></div></div>    <div class=\"modal-footer\"><button href=\"#\" class=\"btn btn-primary note-btn note-btn-primary note-image-btn disabled\" disabled=\"\">Insert Image</button></div>  </div></div></div><div class=\"modal\" aria-hidden=\"false\" tabindex=\"-1\"><div class=\"modal-dialog\">  <div class=\"modal-content\">    <div class=\"modal-header\">      <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">×</span></button>      <h4 class=\"modal-title\">Insert Video</h4>    </div>    <div class=\"modal-body\"><div class=\"form-group note-form-group row-fluid\"><label class=\"note-form-label\">Video URL? <small class=\"text-muted\">(YouTube, Vimeo, Vine, Instagram, DailyMotion or Youku)</small></label><input class=\"note-video-url form-control  note-form-control note-input span12\" type=\"text\"></div></div>    <div class=\"modal-footer\"><button href=\"#\" class=\"btn btn-primary note-btn note-btn-primary  note-video-btn disabled\" disabled=\"\">Insert Video</button></div>  </div></div></div><div class=\"modal\" aria-hidden=\"false\" tabindex=\"-1\"><div class=\"modal-dialog\">  <div class=\"modal-content\">    <div class=\"modal-header\">      <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">×</span></button>      <h4 class=\"modal-title\">Help</h4>    </div>    <div class=\"modal-body\" style=\"max-height: 300px; overflow: scroll;\"><div class=\"help-list-item\"></div><label style=\"width: 180px; margin-right: 10px;\"><kbd>ENTER</kbd></label><span>Insert Paragraph</span><div class=\"help-list-item\"></div><label style=\"width: 180px; margin-right: 10px;\"><kbd>CTRL+Z</kbd></label><span>Undoes the last command</span><div class=\"help-list-item\"></div><label style=\"width: 180px; margin-right: 10px;\"><kbd>CTRL+Y</kbd></label><span>Redoes the last command</span><div class=\"help-list-item\"></div><label style=\"width: 180px; margin-right: 10px;\"><kbd>TAB</kbd></label><span>Tab</span><div class=\"help-list-item\"></div><label style=\"width: 180px; margin-right: 10px;\"><kbd>SHIFT+TAB</kbd></label><span>Untab</span><div class=\"help-list-item\"></div><label style=\"width: 180px; margin-right: 10px;\"><kbd>CTRL+B</kbd></label><span>Set a bold style</span><div class=\"help-list-item\"></div><label style=\"width: 180px; margin-right: 10px;\"><kbd>CTRL+I</kbd></label><span>Set a italic style</span><div class=\"help-list-item\"></div><label style=\"width: 180px; margin-right: 10px;\"><kbd>CTRL+U</kbd></label><span>Set a underline style</span><div class=\"help-list-item\"></div><label style=\"width: 180px; margin-right: 10px;\"><kbd>CTRL+SHIFT+S</kbd></label><span>Set a strikethrough style</span><div class=\"help-list-item\"></div><label style=\"width: 180px; margin-right: 10px;\"><kbd>CTRL+BACKSLASH</kbd></label><span>Clean a style</span><div class=\"help-list-item\"></div><label style=\"width: 180px; margin-right: 10px;\"><kbd>CTRL+SHIFT+L</kbd></label><span>Set left align</span><div class=\"help-list-item\"></div><label style=\"width: 180px; margin-right: 10px;\"><kbd>CTRL+SHIFT+E</kbd></label><span>Set center align</span><div class=\"help-list-item\"></div><label style=\"width: 180px; margin-right: 10px;\"><kbd>CTRL+SHIFT+R</kbd></label><span>Set right align</span><div class=\"help-list-item\"></div><label style=\"width: 180px; margin-right: 10px;\"><kbd>CTRL+SHIFT+J</kbd></label><span>Set full align</span><div class=\"help-list-item\"></div><label style=\"width: 180px; margin-right: 10px;\"><kbd>CTRL+SHIFT+NUM7</kbd></label><span>Toggle unordered list</span><div class=\"help-list-item\"></div><label style=\"width: 180px; margin-right: 10px;\"><kbd>CTRL+SHIFT+NUM8</kbd></label><span>Toggle ordered list</span><div class=\"help-list-item\"></div><label style=\"width: 180px; margin-right: 10px;\"><kbd>CTRL+LEFTBRACKET</kbd></label><span>Outdent on current paragraph</span><div class=\"help-list-item\"></div><label style=\"width: 180px; margin-right: 10px;\"><kbd>CTRL+RIGHTBRACKET</kbd></label><span>Indent on current paragraph</span><div class=\"help-list-item\"></div><label style=\"width: 180px; margin-right: 10px;\"><kbd>CTRL+NUM0</kbd></label><span>Change current block's format as a paragraph(P tag)</span><div class=\"help-list-item\"></div><label style=\"width: 180px; margin-right: 10px;\"><kbd>CTRL+NUM1</kbd></label><span>Change current block's format as H1</span><div class=\"help-list-item\"></div><label style=\"width: 180px; margin-right: 10px;\"><kbd>CTRL+NUM2</kbd></label><span>Change current block's format as H2</span><div class=\"help-list-item\"></div><label style=\"width: 180px; margin-right: 10px;\"><kbd>CTRL+NUM3</kbd></label><span>Change current block's format as H3</span><div class=\"help-list-item\"></div><label style=\"width: 180px; margin-right: 10px;\"><kbd>CTRL+NUM4</kbd></label><span>Change current block's format as H4</span><div class=\"help-list-item\"></div><label style=\"width: 180px; margin-right: 10px;\"><kbd>CTRL+NUM5</kbd></label><span>Change current block's format as H5</span><div class=\"help-list-item\"></div><label style=\"width: 180px; margin-right: 10px;\"><kbd>CTRL+NUM6</kbd></label><span>Change current block's format as H6</span><div class=\"help-list-item\"></div><label style=\"width: 180px; margin-right: 10px;\"><kbd>CTRL+ENTER</kbd></label><span>Insert horizontal rule</span><div class=\"help-list-item\"></div><label style=\"width: 180px; margin-right: 10px;\"><kbd>CTRL+K</kbd></label><span>Show Link Dialog</span></div>    <div class=\"modal-footer\"><p class=\"text-center\"><a href=\"http://summernote.org/\" target=\"_blank\">Summernote 0.8.8</a> · <a href=\"https://github.com/summernote/summernote\" target=\"_blank\">Project</a> · <a href=\"https://github.com/summernote/summernote/issues\" target=\"_blank\">Issues</a></p></div>  </div></div></div></div>\n                    <input type=\"file\" class=\"default\" multiple=\"\">\n                  </div>\n                  <!--   <div class=\"btn-group margin-top-20 \">\n                                            <button class=\"btn btn-primary btn-sm margin-right-10\"><i class=\"fa fa-check\"></i> Send</button>\n                                         </div> -->\n                  <div class=\"box-footer clearfix\">\n                    <button type=\"button\" class=\"mdl-button mdl-button--raised mdl-js-ripple-effect m-b-10 btn-primary pull-right\" data-upgraded=\",MaterialRipple\">Send\n                      <i class=\"fa fa-paper-plane-o\"></i></button>\n                  </div>\n                </form>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <!-- Quick Mail end -->\n      <!-- Activity feed start -->\n      <div class=\"col-lg-6 col-md-12 col-sm-12 col-12\">\n        <div class=\"card-box\">\n          <div class=\"card-head\">\n            <header>Activity Feed</header>\n            <button id=\"feedMenu\" class=\"mdl-button mdl-js-button mdl-button--icon pull-right\" data-upgraded=\",MaterialButton\">\n              <i class=\"material-icons\">more_vert</i>\n            </button>\n            <div class=\"mdl-menu__container is-upgraded\"><div class=\"mdl-menu__outline mdl-menu--bottom-right\"></div><ul class=\"mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect mdl-js-ripple-effect--ignore-events\" data-mdl-for=\"feedMenu\" data-upgraded=\",MaterialMenu,MaterialRipple\">\n              <li class=\"mdl-menu__item mdl-js-ripple-effect\" tabindex=\"-1\" data-upgraded=\",MaterialRipple\"><i class=\"material-icons\">assistant_photo</i>Action\n              <span class=\"mdl-menu__item-ripple-container\"><span class=\"mdl-ripple\"></span></span></li>\n              <li class=\"mdl-menu__item mdl-js-ripple-effect\" tabindex=\"-1\" data-upgraded=\",MaterialRipple\"><i class=\"material-icons\">print</i>Another action\n              <span class=\"mdl-menu__item-ripple-container\"><span class=\"mdl-ripple\"></span></span></li>\n              <li class=\"mdl-menu__item mdl-js-ripple-effect\" tabindex=\"-1\" data-upgraded=\",MaterialRipple\"><i class=\"material-icons\">favorite</i>Something else\n                here<span class=\"mdl-menu__item-ripple-container\"><span class=\"mdl-ripple\"></span></span></li>\n            </ul></div>\n          </div>\n          <div class=\"card-body \">\n            <ul class=\"feedBody\">\n              <li class=\"active-feed\">\n                <div class=\"feed-user-img\">\n                  <img src=\"../assets/img/std/std1.jpg\" class=\"img-radius \" alt=\"User-Profile-Image\">\n                </div>\n                <h6>\n                  <span class=\"feedLblStyle lblFileStyle\">File</span> Sarah Smith <small class=\"text-muted\">6 hours ago</small>\n                </h6>\n                <p class=\"m-b-15 m-t-15\">\n                  hii John, I have upload doc related to task.\n                </p>\n              </li>\n              <li class=\"diactive-feed\">\n                <div class=\"feed-user-img\">\n                  <img src=\"../assets/img/std/std2.jpg\" class=\"img-radius \" alt=\"User-Profile-Image\">\n                </div>\n                <h6>\n                  <span class=\"feedLblStyle lblTaskStyle\">Task </span> Jalpa Joshi<small class=\"text-muted\">5 hours\n                    ago</small>\n                </h6>\n                <p class=\"m-b-15 m-t-15\">\n                  Please do as specify. Let me know if you have any query.\n                </p>\n              </li>\n              <li class=\"diactive-feed\">\n                <div class=\"feed-user-img\">\n                  <img src=\"../assets/img/std/std3.jpg\" class=\"img-radius \" alt=\"User-Profile-Image\">\n                </div>\n                <h6>\n                  <span class=\"feedLblStyle lblCommentStyle\">comment</span> Lina\n                  Smith<small class=\"text-muted\">6 hours ago</small>\n                </h6>\n                <p class=\"m-b-15 m-t-15\">\n                  Hey, How are you??\n                </p>\n              </li>\n              <li class=\"active-feed\">\n                <div class=\"feed-user-img\">\n                  <img src=\"../assets/img/std/std4.jpg\" class=\"img-radius \" alt=\"User-Profile-Image\">\n                </div>\n                <h6>\n                  <span class=\"feedLblStyle lblReplyStyle\">Reply</span> Jacob Ryan\n                  <small class=\"text-muted\">7 hours ago</small>\n                </h6>\n                <p class=\"m-b-15 m-t-15\">\n                  I am fine. You??\n                </p>\n              </li>\n              <li class=\"active-feed\">\n                <div class=\"feed-user-img\">\n                  <img src=\"../assets/img/std/std5.jpg\" class=\"img-radius \" alt=\"User-Profile-Image\">\n                </div>\n                <h6>\n                  <span class=\"feedLblStyle lblFileStyle\">File</span> Sarah Smith <small class=\"text-muted\">6 hours ago</small>\n                </h6>\n                <p class=\"m-b-15 m-t-15\">\n                  hii John, I have upload doc related to task.\n                </p>\n              </li>\n              <li class=\"diactive-feed\">\n                <div class=\"feed-user-img\">\n                  <img src=\"../assets/img/std/std6.jpg\" class=\"img-radius \" alt=\"User-Profile-Image\">\n                </div>\n                <h6>\n                  <span class=\"feedLblStyle lblTaskStyle\">Task </span> Jalpa Joshi<small class=\"text-muted\">5 hours\n                    ago</small>\n                </h6>\n                <p class=\"m-b-15 m-t-15\">\n                  Please do as specify. Let me know if you have any query.\n                </p>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </div>\n      <!-- Activity feed end -->\n    </div>\n    <div class=\"row\">\n      <div class=\"col-lg-6 col-md-12 col-sm-12 col-12\">\n        <div class=\"card-box\">\n          <div class=\"card-head\">\n            <header>Exam Toppers</header>\n            <button id=\"panel-button8\" class=\"mdl-button mdl-js-button mdl-button--icon pull-right\" data-upgraded=\",MaterialButton\">\n              <i class=\"material-icons\">more_vert</i>\n            </button>\n            <div class=\"mdl-menu__container is-upgraded\"><div class=\"mdl-menu__outline mdl-menu--bottom-right\"></div><ul class=\"mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect mdl-js-ripple-effect--ignore-events\" data-mdl-for=\"panel-button8\" data-upgraded=\",MaterialMenu,MaterialRipple\">\n              <li class=\"mdl-menu__item mdl-js-ripple-effect\" tabindex=\"-1\" data-upgraded=\",MaterialRipple\"><i class=\"material-icons\">assistant_photo</i>Action\n              <span class=\"mdl-menu__item-ripple-container\"><span class=\"mdl-ripple\"></span></span></li>\n              <li class=\"mdl-menu__item mdl-js-ripple-effect\" tabindex=\"-1\" data-upgraded=\",MaterialRipple\"><i class=\"material-icons\">print</i>Another action\n              <span class=\"mdl-menu__item-ripple-container\"><span class=\"mdl-ripple\"></span></span></li>\n              <li class=\"mdl-menu__item mdl-js-ripple-effect\" tabindex=\"-1\" data-upgraded=\",MaterialRipple\"><i class=\"material-icons\">favorite</i>Something else\n                here<span class=\"mdl-menu__item-ripple-container\"><span class=\"mdl-ripple\"></span></span></li>\n            </ul></div>\n          </div>\n          <div class=\"card-body \">\n            <div class=\"table-responsive\">\n              <table class=\"table table-striped custom-table table-hover\">\n                <thead>\n                  <tr>\n                    <th>Roll No</th>\n                    <th>Name</th>\n                    <th>Graph</th>\n                    <th>Action</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr>\n                    <td>23</td>\n                    <td>John Smith</td>\n                    <td>\n                      <div id=\"sparkline\"><canvas width=\"39\" height=\"18\" style=\"display: inline-block; width: 39px; height: 18px; vertical-align: top;\"></canvas></div>\n                    </td>\n                    <td><a href=\"javascript:void(0)\" class=\"\" data-toggle=\"tooltip\" title=\"Edit\">\n                        <i class=\"fa fa-check\"></i></a>\n                      <a href=\"javascript:void(0)\" class=\"text-inverse\" title=\"Delete\" data-toggle=\"tooltip\">\n                        <i class=\"fa fa-trash\"></i></a>\n                    </td>\n                  </tr>\n                  <tr>\n                    <td>12</td>\n                    <td>Sneha Pandit</td>\n                    <td>\n                      <div id=\"sparkline1\"><canvas width=\"59\" height=\"18\" style=\"display: inline-block; width: 59px; height: 18px; vertical-align: top;\"></canvas></div>\n                    </td>\n                    <td><a href=\"javascript:void(0)\" class=\"\" data-toggle=\"tooltip\" title=\"Edit\">\n                        <i class=\"fa fa-check\"></i></a>\n                      <a href=\"javascript:void(0)\" class=\"text-inverse\" title=\"Delete\" data-toggle=\"tooltip\">\n                        <i class=\"fa fa-trash\"></i></a>\n                    </td>\n                  </tr>\n                  <tr>\n                    <td>45</td>\n                    <td>Sarah Smith</td>\n                    <td>\n                      <div id=\"sparkline2\"><canvas width=\"39\" height=\"18\" style=\"display: inline-block; width: 39px; height: 18px; vertical-align: top;\"></canvas></div>\n                    </td>\n                    <td><a href=\"javascript:void(0)\" class=\"\" data-toggle=\"tooltip\" title=\"Edit\">\n                        <i class=\"fa fa-check\"></i></a>\n                      <a href=\"javascript:void(0)\" class=\"text-inverse\" title=\"Delete\" data-toggle=\"tooltip\">\n                        <i class=\"fa fa-trash\"></i></a>\n                    </td>\n                  </tr>\n                  <tr>\n                    <td>34</td>\n                    <td>John Deo</td>\n                    <td>\n                      <div id=\"sparkline3\"><canvas width=\"36\" height=\"18\" style=\"display: inline-block; width: 36px; height: 18px; vertical-align: top;\"></canvas></div>\n                    </td>\n                    <td><a href=\"javascript:void(0)\" class=\"\" data-toggle=\"tooltip\" title=\"Edit\">\n                        <i class=\"fa fa-check\"></i></a>\n                      <a href=\"javascript:void(0)\" class=\"text-inverse\" title=\"Delete\" data-toggle=\"tooltip\">\n                        <i class=\"fa fa-trash\"></i></a>\n                    </td>\n                  </tr>\n                  <tr>\n                    <td>15</td>\n                    <td>Jay Soni</td>\n                    <td>\n                      <div id=\"sparkline4\"><canvas width=\"20\" height=\"18\" style=\"display: inline-block; width: 20px; height: 18px; vertical-align: top;\"></canvas></div>\n                    </td>\n                    <td><a href=\"javascript:void(0)\" class=\"\" data-toggle=\"tooltip\" title=\"Edit\">\n                        <i class=\"fa fa-check\"></i></a>\n                      <a href=\"javascript:void(0)\" class=\"text-inverse\" title=\"Delete\" data-toggle=\"tooltip\">\n                        <i class=\"fa fa-trash\"></i></a>\n                    </td>\n                  </tr>\n                </tbody>\n              </table>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-lg-6 col-md-12 col-sm-12 col-12\">\n        <div class=\"card-box\">\n          <div class=\"card-head\">\n            <header>Todo List</header>\n            <button id=\"panel-button\" class=\"mdl-button mdl-js-button mdl-button--icon pull-right\" data-upgraded=\",MaterialButton\">\n              <i class=\"material-icons\">more_vert</i>\n            </button>\n            <div class=\"mdl-menu__container is-upgraded\"><div class=\"mdl-menu__outline mdl-menu--bottom-right\"></div><ul class=\"mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect mdl-js-ripple-effect--ignore-events\" data-mdl-for=\"panel-button\" data-upgraded=\",MaterialMenu,MaterialRipple\">\n              <li class=\"mdl-menu__item mdl-js-ripple-effect\" tabindex=\"-1\" data-upgraded=\",MaterialRipple\"><i class=\"material-icons\">assistant_photo</i>Action\n              <span class=\"mdl-menu__item-ripple-container\"><span class=\"mdl-ripple\"></span></span></li>\n              <li class=\"mdl-menu__item mdl-js-ripple-effect\" tabindex=\"-1\" data-upgraded=\",MaterialRipple\"><i class=\"material-icons\">print</i>Another action\n              <span class=\"mdl-menu__item-ripple-container\"><span class=\"mdl-ripple\"></span></span></li>\n              <li class=\"mdl-menu__item mdl-js-ripple-effect\" tabindex=\"-1\" data-upgraded=\",MaterialRipple\"><i class=\"material-icons\">favorite</i>Something else\n                here<span class=\"mdl-menu__item-ripple-container\"><span class=\"mdl-ripple\"></span></span></li>\n            </ul></div>\n          </div>\n          <div class=\"card-body \">\n            <ul class=\"to-do-list ui-sortable\" id=\"sortable-todo\">\n              <li class=\"clearfix\">\n                <div class=\"todo-check pull-left\">\n                  <input type=\"checkbox\" value=\"None\" id=\"todo-check1\">\n                  <label for=\"todo-check1\"></label>\n                </div>\n                <p class=\"todo-title\">Add fees details in system\n                </p>\n                <div class=\"todo-actionlist pull-right clearfix\">\n                  <a href=\"#\" class=\"todo-remove\"><i class=\"fa fa-times\"></i></a>\n                </div>\n              </li>\n              <li class=\"clearfix\">\n                <div class=\"todo-check pull-left\">\n                  <input type=\"checkbox\" value=\"None\" id=\"todo-check2\">\n                  <label for=\"todo-check2\"></label>\n                </div>\n                <p class=\"todo-title\">Announcement for holiday\n                </p>\n                <div class=\"todo-actionlist pull-right clearfix\">\n                  <a href=\"#\" class=\"todo-remove\"><i class=\"fa fa-times\"></i></a>\n                </div>\n              </li>\n              <li class=\"clearfix\">\n                <div class=\"todo-check pull-left\">\n                  <input type=\"checkbox\" value=\"None\" id=\"todo-check3\">\n                  <label for=\"todo-check3\"></label>\n                </div>\n                <p class=\"todo-title\">call bus driver</p>\n                <div class=\"todo-actionlist pull-right clearfix\">\n                  <a href=\"#\" class=\"todo-remove\"><i class=\"fa fa-times\"></i></a>\n                </div>\n              </li>\n              <li class=\"clearfix\">\n                <div class=\"todo-check pull-left\">\n                  <input type=\"checkbox\" value=\"None\" id=\"todo-check4\">\n                  <label for=\"todo-check4\"></label>\n                </div>\n                <p class=\"todo-title\">School picnic</p>\n                <div class=\"todo-actionlist pull-right clearfix\">\n                  <a href=\"#\" class=\"todo-remove\"><i class=\"fa fa-times\"></i></a>\n                </div>\n              </li>\n              <li class=\"clearfix\">\n                <div class=\"todo-check pull-left\">\n                  <input type=\"checkbox\" value=\"None\" id=\"todo-check5\">\n                  <label for=\"todo-check5\"></label>\n                </div>\n                <p class=\"todo-title\">Exam time table generate\n                </p>\n                <div class=\"todo-actionlist pull-right clearfix\">\n                  <a href=\"#\" class=\"todo-remove\"><i class=\"fa fa-times\"></i></a>\n                </div>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </div>\n    <!-- start new student list -->\n    <div class=\"row\">\n      <div class=\"col-md-12 col-sm-12\">\n        <div class=\"card  card-box\">\n          <div class=\"card-head\">\n            <header>New Student List</header>\n            <div class=\"tools\">\n              <a class=\"fa fa-repeat btn-color box-refresh\" href=\"javascript:;\"></a>\n              <a class=\"t-collapse btn-color fa fa-chevron-down\" href=\"javascript:;\"></a>\n              <a class=\"t-close btn-color fa fa-times\" href=\"javascript:;\"></a>\n            </div>\n          </div>\n          <div class=\"card-body \">\n            <div class=\"table-wrap\">\n              <div class=\"table-responsive\">\n                <table class=\"table display product-overview mb-30\" id=\"support_table\">\n                  <thead>\n                    <tr>\n                      <th>No</th>\n                      <th>Name</th>\n                      <th>Assigned Professor</th>\n                      <th>Date Of Admit</th>\n                      <th>Fees</th>\n                      <th>Branch</th>\n                      <th>Edit</th>\n                    </tr>\n                  </thead>\n                  <tbody>\n                    <tr>\n                      <td>1</td>\n                      <td>Jens Brincker</td>\n                      <td>Kenny Josh</td>\n                      <td>27/05/2016</td>\n                      <td>\n                        <span class=\"label label-sm label-success\">paid</span>\n                      </td>\n                      <td>Mechanical</td>\n                      <td><a href=\"javascript:void(0)\" class=\"\" data-toggle=\"tooltip\" title=\"Edit\"><i class=\"fa fa-check\"></i></a>\n                        <a href=\"javascript:void(0)\" class=\"text-inverse\" title=\"Delete\" data-toggle=\"tooltip\"><i class=\"fa fa-trash\"></i></a></td>\n                    </tr>\n                    <tr>\n                      <td>2</td>\n                      <td>Mark Hay</td>\n                      <td> Mark</td>\n                      <td>26/05/2017</td>\n                      <td>\n                        <span class=\"label label-sm label-warning\">unpaid </span>\n                      </td>\n                      <td>Science</td>\n                      <td><a href=\"javascript:void(0)\" class=\"\" data-toggle=\"tooltip\" title=\"Edit\"><i class=\"fa fa-check\"></i></a>\n                        <a href=\"javascript:void(0)\" class=\"text-inverse\" title=\"Delete\" data-toggle=\"tooltip\"><i class=\"fa fa-trash\"></i></a></td>\n                    </tr>\n                    <tr>\n                      <td>3</td>\n                      <td>Anthony Davie</td>\n                      <td>Cinnabar</td>\n                      <td>21/05/2016</td>\n                      <td>\n                        <span class=\"label label-sm label-success \">paid</span>\n                      </td>\n                      <td>Commerce</td>\n                      <td><a href=\"javascript:void(0)\" class=\"\" data-toggle=\"tooltip\" title=\"Edit\"><i class=\"fa fa-check\"></i></a>\n                        <a href=\"javascript:void(0)\" class=\"text-inverse\" title=\"Delete\" data-toggle=\"tooltip\"><i class=\"fa fa-trash\"></i></a></td>\n                    </tr>\n                    <tr>\n                      <td>4</td>\n                      <td>David Perry</td>\n                      <td>Felix </td>\n                      <td>20/04/2016</td>\n                      <td>\n                        <span class=\"label label-sm label-danger\">unpaid</span>\n                      </td>\n                      <td>Mechanical</td>\n                      <td><a href=\"javascript:void(0)\" class=\"\" data-toggle=\"tooltip\" title=\"Edit\"><i class=\"fa fa-check\"></i></a>\n                        <a href=\"javascript:void(0)\" class=\"text-inverse\" title=\"Delete\" data-toggle=\"tooltip\"><i class=\"fa fa-trash\"></i></a></td>\n                    </tr>\n                    <tr>\n                      <td>5</td>\n                      <td>Anthony Davie</td>\n                      <td>Beryl</td>\n                      <td>24/05/2016</td>\n                      <td>\n                        <span class=\"label label-sm label-success \">paid</span>\n                      </td>\n                      <td>M.B.A.</td>\n                      <td><a href=\"javascript:void(0)\" class=\"\" data-toggle=\"tooltip\" title=\"Edit\"><i class=\"fa fa-check\"></i></a>\n                        <a href=\"javascript:void(0)\" class=\"text-inverse\" title=\"Delete\" data-toggle=\"tooltip\"><i class=\"fa fa-trash\"></i></a></td>\n                    </tr>\n                    <tr>\n                      <td>6</td>\n                      <td>Alan Gilchrist</td>\n                      <td>Joshep</td>\n                      <td>22/05/2016</td>\n                      <td>\n                        <span class=\"label label-sm label-warning \">unpaid</span>\n                      </td>\n                      <td>Science</td>\n                      <td><a href=\"javascript:void(0)\" class=\"\" data-toggle=\"tooltip\" title=\"Edit\"><i class=\"fa fa-check\"></i></a>\n                        <a href=\"javascript:void(0)\" class=\"text-inverse\" title=\"Delete\" data-toggle=\"tooltip\"><i class=\"fa fa-trash\"></i></a></td>\n                    </tr>\n                    <tr>\n                      <td>7</td>\n                      <td>Mark Hay</td>\n                      <td>Jayesh</td>\n                      <td>18/06/2016</td>\n                      <td>\n                        <span class=\"label label-sm label-success \">paid</span>\n                      </td>\n                      <td>Commerce</td>\n                      <td><a href=\"javascript:void(0)\" class=\"\" data-toggle=\"tooltip\" title=\"Edit\"><i class=\"fa fa-check\"></i></a>\n                        <a href=\"javascript:void(0)\" class=\"text-inverse\" title=\"Delete\" data-toggle=\"tooltip\"><i class=\"fa fa-trash\"></i></a></td>\n                    </tr>\n                    <tr>\n                      <td>8</td>\n                      <td>Sue Woodger</td>\n                      <td>Sharma</td>\n                      <td>17/05/2016</td>\n                      <td>\n                        <span class=\"label label-sm label-danger\">unpaid</span>\n                      </td>\n                      <td>Mechanical</td>\n                      <td><a href=\"javascript:void(0)\" class=\"\" data-toggle=\"tooltip\" title=\"Edit\"><i class=\"fa fa-check\"></i></a>\n                        <a href=\"javascript:void(0)\" class=\"text-inverse\" title=\"Delete\" data-toggle=\"tooltip\"><i class=\"fa fa-trash\"></i></a></td>\n                    </tr>\n                  </tbody>\n                </table>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <!-- end new student list -->\n  </div>\n</div>\n</div>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/export/export.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/export/export.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppExportExportComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-navbar></app-navbar>\n<div class=\"container-fluid customExport\">\n  <div class=\"row\">\n    <div class=\"col\">\n      <div class=\"card card-topline-aqua\">\n        <div class=\"card-head\">\n          <header>Table With State Save</header>\n          <div class=\"tools\">\n            <a\n              class=\"fa fa-repeat btn-color box-refresh\"\n              href=\"javascript:;\"\n            ></a>\n            <a\n              class=\"t-collapse btn-color fa fa-chevron-down\"\n              href=\"javascript:;\"\n            ></a>\n            <a class=\"t-close btn-color fa fa-times\" href=\"javascript:;\"></a>\n          </div>\n        </div>\n        <div class=\"card-body \">\n          <div class=\"table-scrollable\">\n            <div\n              id=\"saveStage_wrapper\"\n              class=\"dataTables_wrapper container-fluid dt-bootstrap4 no-footer\"\n            >\n              <div class=\"row\">\n                <div class=\"col-sm-12 col-md-6\">\n                  <div class=\"dataTables_length\" id=\"saveStage_length\">\n                    <label\n                      >Show\n                      <select\n                        name=\"saveStage_length\"\n                        aria-controls=\"saveStage\"\n                        class=\"form-control form-control-sm\"\n                        ><option value=\"10\">10</option\n                        ><option value=\"25\">25</option\n                        ><option value=\"50\">50</option\n                        ><option value=\"100\">100</option></select\n                      >\n                      entries</label\n                    >\n                  </div>\n                </div>\n                <div class=\"col-sm-12 col-md-6\">\n                  <div id=\"saveStage_filter\" class=\"dataTables_filter\">\n                    <label\n                      >Search:<input\n                        type=\"search\"\n                        class=\"form-control form-control-sm\"\n                        placeholder=\"\"\n                        aria-controls=\"saveStage\"\n                    /></label>\n                  </div>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-sm-12\">\n                  <table\n                    id=\"saveStage\"\n                    class=\"display dataTable no-footer\"\n                    style=\"width: 100%;\"\n                    role=\"grid\"\n                    aria-describedby=\"saveStage_info\"\n                  >\n                    <thead>\n                      <tr role=\"row\">\n                        <th\n                          class=\"sorting_desc\"\n                          tabindex=\"0\"\n                          aria-controls=\"saveStage\"\n                          rowspan=\"1\"\n                          colspan=\"1\"\n                          aria-label=\"Name: activate to sort column ascending\"\n                          style=\"width: 76px;\"\n                          aria-sort=\"descending\"\n                        >\n                          Num dossier\n                        </th>\n                        <th\n                          class=\"sorting\"\n                          tabindex=\"0\"\n                          aria-controls=\"saveStage\"\n                          rowspan=\"1\"\n                          colspan=\"1\"\n                          aria-label=\"Position: activate to sort column ascending\"\n                          style=\"width: 80px;\"\n                        >\n                          Expéditeur\n                        </th>\n                        <th\n                          class=\"sorting\"\n                          tabindex=\"0\"\n                          aria-controls=\"saveStage\"\n                          rowspan=\"1\"\n                          colspan=\"1\"\n                          aria-label=\"Office: activate to sort column ascending\"\n                          style=\"width: 50px;\"\n                        >\n                          Destinataire\n                        </th>\n                        <th\n                          class=\"sorting\"\n                          tabindex=\"0\"\n                          aria-controls=\"saveStage\"\n                          rowspan=\"1\"\n                          colspan=\"1\"\n                          aria-label=\"Age: activate to sort column ascending\"\n                          style=\"width: 76px;\"\n                        >\n                          Point de sortie\n                        </th>\n                        <th\n                          class=\"sorting\"\n                          tabindex=\"0\"\n                          aria-controls=\"saveStage\"\n                          rowspan=\"1\"\n                          colspan=\"1\"\n                          aria-label=\"Start date: activate to sort column ascending\"\n                          style=\"width: 100px;\"\n                        >\n                          Point d'entrée\n                        </th>\n                        <th\n                          class=\"sorting\"\n                          tabindex=\"0\"\n                          aria-controls=\"saveStage\"\n                          rowspan=\"1\"\n                          colspan=\"1\"\n                          aria-label=\"Salary: activate to sort column ascending\"\n                          style=\"width: 112px;\"\n                        >\n                          Date d'enlèvement\n                        </th>\n                        <th\n                          class=\"sorting\"\n                          tabindex=\"0\"\n                          aria-controls=\"saveStage\"\n                          rowspan=\"1\"\n                          colspan=\"1\"\n                          aria-label=\"Salary: activate to sort column ascending\"\n                          style=\"width: 90px;\"\n                        >\n                          Date de livraison\n                        </th>\n                        <th\n                          class=\"sorting\"\n                          tabindex=\"0\"\n                          aria-controls=\"saveStage\"\n                          rowspan=\"1\"\n                          colspan=\"1\"\n                          aria-label=\"Salary: activate to sort column ascending\"\n                          style=\"width: 150px;\"\n                        >\n                          Action\n                        </th>\n                      </tr>\n                    </thead>\n                    <tbody>\n                      <tr role=\"row\" class=\"odd\">\n                        <td class=\"sorting_1\">Zorita Serrano</td>\n                        <td>ZODIAC SEATS FRANCE</td>\n                        <td>AZODIAC SEATS TUNISIE</td>\n                        <td>CHARLES DE GAULLE APT/PARIS</td>\n                        <td>TUNIS</td>\n                        <td>08/02/2018 08:45</td>\n                        <td>09/02/2018 20:30</td>\n                        <td>\n                          <button\n                            _ngcontent-qng-c3=\"\"\n                            class=\"btn btn-primary btn-xs\"\n                          >\n                            <i\n                              class=\"fa fa-file\"\n                              aria-hidden=\"true\"\n                              data-toggle=\"modal\"\n                              data-target=\".bd-example-modal-lg\"\n                            ></i></button\n                          >&nbsp;\n                          <button\n                            _ngcontent-qng-c3=\"\"\n                            class=\"btn btn-success btn-xs\"\n                            data-toggle=\"modal\"\n                            data-target=\".bd-SUIVIDOSSIER-modal-lg\"\n                          >\n                            <i\n                              class=\"fa fa-plane\"\n                              aria-hidden=\"true\"\n                            ></i></button\n                          >&nbsp;\n                          <button\n                            _ngcontent-qng-c3=\"\"\n                            class=\"btn btn-danger btn-xs\"\n                          >\n                            <i\n                              class=\"fa fa-upload\"\n                              aria-hidden=\"true\"\n                            ></i></button\n                          >&nbsp;\n                          <button\n                            _ngcontent-qng-c3=\"\"\n                            class=\"btn btn-warning btn-xs\"\n                          >\n                            <i class=\"fa fa-download\" aria-hidden=\"true\"></i>\n                          </button>\n                        </td>\n                      </tr>\n                      <tr role=\"row\" class=\"even\">\n                        <td class=\"sorting_1\">Zorita Serrano</td>\n                        <td>ZODIAC SEATS FRANCE</td>\n                        <td>ZODIAC SEATS TUNISIE</td>\n                        <td>CHARLES DE GAULLE APT/PARIS</td>\n                        <td>TUNIS</td>\n                        <td>08/02/2018 08:45</td>\n                        <td>09/02/2018 20:30</td>\n                        <td>\n                          <button\n                            _ngcontent-qng-c3=\"\"\n                            class=\"btn btn-primary btn-xs\"\n                          >\n                            <i\n                              class=\"fa fa-file\"\n                              aria-hidden=\"true\"\n                              data-toggle=\"modal\"\n                              data-target=\".bd-example-modal-lg\"\n                            ></i></button\n                          >&nbsp;\n                          <button\n                            _ngcontent-qng-c3=\"\"\n                            class=\"btn btn-success btn-xs\"\n                            data-toggle=\"modal\"\n                            data-target=\".bd-SUIVIDOSSIER-modal-lg\"\n                          >\n                            <i\n                              class=\"fa fa-plane\"\n                              aria-hidden=\"true\"\n                            ></i></button\n                          >&nbsp;\n                          <button\n                            _ngcontent-qng-c3=\"\"\n                            class=\"btn btn-danger btn-xs\"\n                          >\n                            <i\n                              class=\"fa fa-upload\"\n                              aria-hidden=\"true\"\n                            ></i></button\n                          >&nbsp;\n                          <button\n                            _ngcontent-qng-c3=\"\"\n                            class=\"btn btn-warning btn-xs\"\n                          >\n                            <i class=\"fa fa-download\" aria-hidden=\"true\"></i>\n                          </button>\n                        </td>\n                      </tr>\n                    </tbody>\n                  </table>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-sm-12 col-md-5\">\n                  <div\n                    class=\"dataTables_info\"\n                    id=\"saveStage_info\"\n                    role=\"status\"\n                    aria-live=\"polite\"\n                  >\n                    Showing 1 to 10 of 57 entries\n                  </div>\n                </div>\n                <div class=\"col-sm-12 col-md-7\">\n                  <div\n                    class=\"dataTables_paginate paging_simple_numbers\"\n                    id=\"saveStage_paginate\"\n                  >\n                    <ul class=\"pagination\">\n                      <li\n                        class=\"paginate_button page-item previous disabled\"\n                        id=\"saveStage_previous\"\n                      >\n                        <a\n                          href=\"#\"\n                          aria-controls=\"saveStage\"\n                          data-dt-idx=\"0\"\n                          tabindex=\"0\"\n                          class=\"page-link\"\n                          >Previous</a\n                        >\n                      </li>\n                      <li class=\"paginate_button page-item active\">\n                        <a\n                          href=\"#\"\n                          aria-controls=\"saveStage\"\n                          data-dt-idx=\"1\"\n                          tabindex=\"0\"\n                          class=\"page-link\"\n                          >1</a\n                        >\n                      </li>\n                      <li class=\"paginate_button page-item \">\n                        <a\n                          href=\"#\"\n                          aria-controls=\"saveStage\"\n                          data-dt-idx=\"2\"\n                          tabindex=\"0\"\n                          class=\"page-link\"\n                          >2</a\n                        >\n                      </li>\n                      <li class=\"paginate_button page-item \">\n                        <a\n                          href=\"#\"\n                          aria-controls=\"saveStage\"\n                          data-dt-idx=\"3\"\n                          tabindex=\"0\"\n                          class=\"page-link\"\n                          >3</a\n                        >\n                      </li>\n                      <li class=\"paginate_button page-item \">\n                        <a\n                          href=\"#\"\n                          aria-controls=\"saveStage\"\n                          data-dt-idx=\"4\"\n                          tabindex=\"0\"\n                          class=\"page-link\"\n                          >4</a\n                        >\n                      </li>\n                      <li class=\"paginate_button page-item \">\n                        <a\n                          href=\"#\"\n                          aria-controls=\"saveStage\"\n                          data-dt-idx=\"5\"\n                          tabindex=\"0\"\n                          class=\"page-link\"\n                          >5</a\n                        >\n                      </li>\n                      <li class=\"paginate_button page-item \">\n                        <a\n                          href=\"#\"\n                          aria-controls=\"saveStage\"\n                          data-dt-idx=\"6\"\n                          tabindex=\"0\"\n                          class=\"page-link\"\n                          >6</a\n                        >\n                      </li>\n                      <li\n                        class=\"paginate_button page-item next\"\n                        id=\"saveStage_next\"\n                      >\n                        <a\n                          href=\"#\"\n                          aria-controls=\"saveStage\"\n                          data-dt-idx=\"7\"\n                          tabindex=\"0\"\n                          class=\"page-link\"\n                          >Next</a\n                        >\n                      </li>\n                    </ul>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFooterFooterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- start footer -->\n<div class=\"page-footer\">\n  <div class=\"page-footer-inner\">\n    2017 &copy; Smart University Theme By\n    <a href=\"mailto:redstartheme@gmail.com\" target=\"_top\" class=\"makerCss\"\n      >Redstar Theme</a\n    >\n  </div>\n  <div class=\"scroll-to-top\">\n    <i class=\"icon-arrow-up\"></i>\n  </div>\n</div>\n<!-- end footer -->\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/global/global.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/global/global.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppGlobalGlobalComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>global works!</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-navbar></app-navbar>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/import/import.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/import/import.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppImportImportComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-navbar></app-navbar>\n\n<!-- start page content -->\n<div class=\"container-fluid customImport\">\n  <div class=\"page-content\">\n    <div class=\"page-bar\">\n      <div class=\"page-title-breadcrumb\">\n        <div class=\"pull-left\">\n          <div class=\"page-title\">Import Aérien</div>\n        </div>\n        <ol class=\"breadcrumb page-breadcrumb pull-right\">\n          <li>\n            <i class=\"fa fa-home\"></i>&nbsp;<a\n              class=\"parent-item\"\n              href=\"index.html\"\n              >Home</a\n            >&nbsp;<i class=\"fa fa-angle-right\"></i>\n          </li>\n          <li>\n            <a class=\"parent-item\" href=\"\">Data Tables</a>&nbsp;<i\n              class=\"fa fa-angle-right\"\n            ></i>\n          </li>\n          <li class=\"active\">Export Table</li>\n        </ol>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-12 col-sm-12\">\n        <div class=\"card card-box\">\n          <div class=\"card-head\">\n            <header>LISTE DES DOSSIERS</header>\n            <button\n              id=\"panel-button\"\n              class=\"mdl-button mdl-js-button mdl-button--icon pull-right\"\n              data-upgraded=\",MaterialButton\"\n            >\n              <i class=\"material-icons\">more_vert</i>\n            </button>\n            <ul\n              class=\"mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect\"\n              data-mdl-for=\"panel-button\"\n            >\n              <li class=\"mdl-menu__item\">\n                <i class=\"material-icons\">assistant_photo</i>Action\n              </li>\n              <li class=\"mdl-menu__item\">\n                <i class=\"material-icons\">print</i>Another action\n              </li>\n              <li class=\"mdl-menu__item\">\n                <i class=\"material-icons\">favorite</i>Something else here\n              </li>\n            </ul>\n          </div>\n          <div class=\"card-body \" id=\"bar-parent\">\n            <div class=\"ng-container\">\n              <div class=\"row\"> <div class=\"col\">\n                <table id=\"exportTable\" class=\"display nowrap\" style=\"width:100%;\">\n                  <thead>\n                    <tr>\n                      <th>Num Dossier</th>\n                      <th>Expéditeur</th>\n                      <th>Destinataire</th>\n                      <th>Point de Sortie</th>\n                      <th>Point d'entrée</th>\n                      <th>Date d'enlèvement</th>\n                      <th>Date de livraison</th>\n                      <th>#</th>\n                    </tr>\n                  </thead>\n                  <tbody>\n                    <tr>\n                      <td>35AI800103</td>\n                      <td>ZODIAC SEATS FRANCE</td>\n                      <td>ZODIAC SEATS TUNISIE</td>\n                      <td>CHARLES DE GAULLE APT/PARIS</td>\n                      <td>TUNIS</td>\n                      <td>08/02/2018 08:45</td>\n                      <td>09/02/2018 20:30</td>\n                      <td>\n                        <button _ngcontent-qng-c3=\"\" class=\"btn btn-primary btn-xs\">\n                          <i\n                            class=\"fa fa-file\"\n                            aria-hidden=\"true\"\n                            data-toggle=\"modal\"\n                            data-target=\".bd-example-modal-lg\"\n                          ></i></button\n                        >&nbsp;\n                        <button\n                          _ngcontent-qng-c3=\"\"\n                          class=\"btn btn-success btn-xs\"\n                          data-toggle=\"modal\"\n                          data-target=\".bd-SUIVIDOSSIER-modal-lg\"\n                        >\n                          <i class=\"fa fa-plane\" aria-hidden=\"true\"></i></button\n                        >&nbsp;\n                        <button _ngcontent-qng-c3=\"\" class=\"btn btn-danger btn-xs\">\n                          <i class=\"fa fa-upload\" aria-hidden=\"true\"></i></button\n                        >&nbsp;\n                        <button _ngcontent-qng-c3=\"\" class=\"btn btn-warning btn-xs\">\n                          <i class=\"fa fa-download\" aria-hidden=\"true\"></i>\n                        </button>\n                      </td>\n                    </tr>\n                    <tr>\n                      <td>35AI800103</td>\n                      <td>ZODIAC SEATS FRANCE</td>\n                      <td>ZODIAC SEATS TUNISIE</td>\n                      <td>CHARLES DE GAULLE APT/PARIS</td>\n                      <td>TUNIS</td>\n                      <td>08/02/2018 08:45</td>\n                      <td>09/02/2018 20:30</td>\n                      <td>\n                        <button\n                          _ngcontent-qng-c3=\"\"\n                          class=\"btn btn-primary btn-xs\"\n                          data-toggle=\"modal\"\n                          data-target=\".bd-example-modal-lg\"\n                        >\n                          <i class=\"fa fa-file\" aria-hidden=\"true\"></i></button\n                        >&nbsp;\n                        <button _ngcontent-qng-c3=\"\" class=\"btn btn-success btn-xs\">\n                          <i class=\"fa fa-plane\" aria-hidden=\"true\"></i></button\n                        >&nbsp;\n                        <button _ngcontent-qng-c3=\"\" class=\"btn btn-danger btn-xs\">\n                          <i class=\"fa fa-upload\" aria-hidden=\"true\"></i></button\n                        >&nbsp;\n                        <button _ngcontent-qng-c3=\"\" class=\"btn btn-warning btn-xs\">\n                          <i class=\"fa fa-download\" aria-hidden=\"true\"></i>\n                        </button>\n                      </td>\n                    </tr>\n                    <tr>\n                      <td>35AI800103</td>\n                      <td>ZODIAC SEATS FRANCE</td>\n                      <td>ZODIAC SEATS TUNISIE</td>\n                      <td>CHARLES DE GAULLE APT/PARIS</td>\n                      <td>TUNIS</td>\n                      <td>08/02/2018 08:45</td>\n                      <td>09/02/2018 20:30</td>\n                      <td>\n                        <button\n                          _ngcontent-qng-c3=\"\"\n                          class=\"btn btn-primary btn-xs\"\n                          data-toggle=\"modal\"\n                          data-target=\".bd-example-modal-lg\"\n                        >\n                          <i class=\"fa fa-file\" aria-hidden=\"true\"></i></button\n                        >&nbsp;\n                        <button\n                          _ngcontent-qng-c3=\"\"\n                          class=\"btn btn-success btn-xs\"\n                          data-toggle=\"modal\"\n                          data-target=\"#exampleModalCenter\"\n                        >\n                          <i class=\"fa fa-plane\" aria-hidden=\"true\"></i></button\n                        >&nbsp;\n                        <button _ngcontent-qng-c3=\"\" class=\"btn btn-danger btn-xs\">\n                          <i class=\"fa fa-upload\" aria-hidden=\"true\"></i></button\n                        >&nbsp;\n                        <button _ngcontent-qng-c3=\"\" class=\"btn btn-warning btn-xs\">\n                          <i class=\"fa fa-download\" aria-hidden=\"true\"></i>\n                        </button>\n                      </td>\n                    </tr>\n                    <tr>\n                      <td>35AI800103</td>\n                      <td>ZODIAC SEATS FRANCE</td>\n                      <td>ZODIAC SEATS TUNISIE</td>\n                      <td>CHARLES DE GAULLE APT/PARIS</td>\n                      <td>TUNIS</td>\n                      <td>08/02/2018 08:45</td>\n                      <td>09/02/2018 20:30</td>\n                      <td>\n                        <button\n                          _ngcontent-qng-c3=\"\"\n                          class=\"btn btn-primary btn-xs\"\n                          data-toggle=\"modal\"\n                          data-target=\".bd-example-modal-lg\"\n                        >\n                          <i class=\"fa fa-file\" aria-hidden=\"true\"></i></button\n                        >&nbsp;\n                        <button _ngcontent-qng-c3=\"\" class=\"btn btn-success btn-xs\">\n                          <i class=\"fa fa-plane\" aria-hidden=\"true\"></i></button\n                        >&nbsp;\n                        <button _ngcontent-qng-c3=\"\" class=\"btn btn-danger btn-xs\">\n                          <i class=\"fa fa-upload\" aria-hidden=\"true\"></i></button\n                        >&nbsp;\n                        <button _ngcontent-qng-c3=\"\" class=\"btn btn-warning btn-xs\">\n                          <i class=\"fa fa-download\" aria-hidden=\"true\"></i>\n                        </button>\n                      </td>\n                    </tr>\n                  </tbody>\n                  <tfoot>\n                    <tr>\n                      <th>Num Dossier</th>\n                      <th>Expéditeur</th>\n                      <th>Destinataire</th>\n                      <th>Point de Sortie</th>\n                      <th>Point d'entrée</th>\n                      <th>Date d'enlèvement</th>\n                      <th>Date de livraison</th>\n                      <th>#</th>\n                    </tr>\n                  </tfoot>\n                </table>\n              </div>\n              </div>\n            </div>\n          \n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- end page content -->\n<!-- start chat sidebar -->\n<div class=\"chat-sidebar-container\" data-close-on-body-click=\"false\">\n  <div class=\"chat-sidebar\">\n    <ul class=\"nav nav-tabs\">\n      <li class=\"nav-item\">\n        <a\n          href=\"#quick_sidebar_tab_1\"\n          class=\"nav-link active tab-icon\"\n          data-toggle=\"tab\"\n        >\n          <i class=\"material-icons\">chat</i>Chat\n          <span class=\"badge badge-danger\">4</span>\n        </a>\n      </li>\n      <li class=\"nav-item\">\n        <a\n          href=\"#quick_sidebar_tab_3\"\n          class=\"nav-link tab-icon\"\n          data-toggle=\"tab\"\n        >\n          <i class=\"material-icons\">settings</i>\n          Settings\n        </a>\n      </li>\n    </ul>\n    <div class=\"tab-content\">\n      <!-- Start User Chat -->\n      <div\n        class=\"tab-pane active chat-sidebar-chat in active show\"\n        role=\"tabpanel\"\n        id=\"quick_sidebar_tab_1\"\n      >\n        <div class=\"chat-sidebar-list\">\n          <div\n            class=\"chat-sidebar-chat-users slimscroll-style\"\n            data-rail-color=\"#ddd\"\n            data-wrapper-class=\"chat-sidebar-list\"\n          >\n            <div class=\"chat-header\">\n              <h5 class=\"list-heading\">Online</h5>\n            </div>\n            <ul class=\"media-list list-items\">\n              <li class=\"media\">\n                <img\n                  class=\"media-object\"\n                  src=\"../assets/img/prof/prof3.jpg\"\n                  width=\"35\"\n                  height=\"35\"\n                  alt=\"...\"\n                />\n                <i class=\"online dot\"></i>\n                <div class=\"media-body\">\n                  <h5 class=\"media-heading\">John Deo</h5>\n                  <div class=\"media-heading-sub\">Spine Surgeon</div>\n                </div>\n              </li>\n              <li class=\"media\">\n                <div class=\"media-status\">\n                  <span class=\"badge badge-success\">5</span>\n                </div>\n                <img\n                  class=\"media-object\"\n                  src=\"../assets/img/prof/prof1.jpg\"\n                  width=\"35\"\n                  height=\"35\"\n                  alt=\"...\"\n                />\n                <i class=\"busy dot\"></i>\n                <div class=\"media-body\">\n                  <h5 class=\"media-heading\">Rajesh</h5>\n                  <div class=\"media-heading-sub\">Director</div>\n                </div>\n              </li>\n              <li class=\"media\">\n                <img\n                  class=\"media-object\"\n                  src=\"../assets/img/prof/prof5.jpg\"\n                  width=\"35\"\n                  height=\"35\"\n                  alt=\"...\"\n                />\n                <i class=\"away dot\"></i>\n                <div class=\"media-body\">\n                  <h5 class=\"media-heading\">Jacob Ryan</h5>\n                  <div class=\"media-heading-sub\">Ortho Surgeon</div>\n                </div>\n              </li>\n              <li class=\"media\">\n                <div class=\"media-status\">\n                  <span class=\"badge badge-danger\">8</span>\n                </div>\n                <img\n                  class=\"media-object\"\n                  src=\"../assets/img/prof/prof4.jpg\"\n                  width=\"35\"\n                  height=\"35\"\n                  alt=\"...\"\n                />\n                <i class=\"online dot\"></i>\n                <div class=\"media-body\">\n                  <h5 class=\"media-heading\">Kehn Anderson</h5>\n                  <div class=\"media-heading-sub\">CEO</div>\n                </div>\n              </li>\n              <li class=\"media\">\n                <img\n                  class=\"media-object\"\n                  src=\"../assets/img/prof/prof2.jpg\"\n                  width=\"35\"\n                  height=\"35\"\n                  alt=\"...\"\n                />\n                <i class=\"busy dot\"></i>\n                <div class=\"media-body\">\n                  <h5 class=\"media-heading\">Sarah Smith</h5>\n                  <div class=\"media-heading-sub\">Anaesthetics</div>\n                </div>\n              </li>\n              <li class=\"media\">\n                <img\n                  class=\"media-object\"\n                  src=\"../assets/img/prof/prof7.jpg\"\n                  width=\"35\"\n                  height=\"35\"\n                  alt=\"...\"\n                />\n                <i class=\"online dot\"></i>\n                <div class=\"media-body\">\n                  <h5 class=\"media-heading\">Vlad Cardella</h5>\n                  <div class=\"media-heading-sub\">Cardiologist</div>\n                </div>\n              </li>\n            </ul>\n            <div class=\"chat-header\">\n              <h5 class=\"list-heading\">Offline</h5>\n            </div>\n            <ul class=\"media-list list-items\">\n              <li class=\"media\">\n                <div class=\"media-status\">\n                  <span class=\"badge badge-warning\">4</span>\n                </div>\n                <img\n                  class=\"media-object\"\n                  src=\"../assets/img/prof/prof6.jpg\"\n                  width=\"35\"\n                  height=\"35\"\n                  alt=\"...\"\n                />\n                <i class=\"offline dot\"></i>\n                <div class=\"media-body\">\n                  <h5 class=\"media-heading\">Jennifer Maklen</h5>\n                  <div class=\"media-heading-sub\">Nurse</div>\n                  <div class=\"media-heading-small\">Last seen 01:20 AM</div>\n                </div>\n              </li>\n              <li class=\"media\">\n                <img\n                  class=\"media-object\"\n                  src=\"../assets/img/prof/prof8.jpg\"\n                  width=\"35\"\n                  height=\"35\"\n                  alt=\"...\"\n                />\n                <i class=\"offline dot\"></i>\n                <div class=\"media-body\">\n                  <h5 class=\"media-heading\">Lina Smith</h5>\n                  <div class=\"media-heading-sub\">Ortho Surgeon</div>\n                  <div class=\"media-heading-small\">Last seen 11:14 PM</div>\n                </div>\n              </li>\n              <li class=\"media\">\n                <div class=\"media-status\">\n                  <span class=\"badge badge-success\">9</span>\n                </div>\n                <img\n                  class=\"media-object\"\n                  src=\"../assets/img/prof/prof9.jpg\"\n                  width=\"35\"\n                  height=\"35\"\n                  alt=\"...\"\n                />\n                <i class=\"offline dot\"></i>\n                <div class=\"media-body\">\n                  <h5 class=\"media-heading\">Jeff Adam</h5>\n                  <div class=\"media-heading-sub\">Compounder</div>\n                  <div class=\"media-heading-small\">Last seen 3:31 PM</div>\n                </div>\n              </li>\n              <li class=\"media\">\n                <img\n                  class=\"media-object\"\n                  src=\"../assets/img/prof/prof10.jpg\"\n                  width=\"35\"\n                  height=\"35\"\n                  alt=\"...\"\n                />\n                <i class=\"offline dot\"></i>\n                <div class=\"media-body\">\n                  <h5 class=\"media-heading\">Anjelina Cardella</h5>\n                  <div class=\"media-heading-sub\">Physiotherapist</div>\n                  <div class=\"media-heading-small\">Last seen 7:45 PM</div>\n                </div>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </div>\n      <!-- End User Chat -->\n      <!-- Start Setting Panel -->\n      <div\n        class=\"tab-pane chat-sidebar-settings\"\n        role=\"tabpanel\"\n        id=\"quick_sidebar_tab_3\"\n      >\n        <div class=\"chat-sidebar-settings-list slimscroll-style\">\n          <div class=\"chat-header\">\n            <h5 class=\"list-heading\">Layout Settings</h5>\n          </div>\n          <div class=\"chatpane inner-content \">\n            <div class=\"settings-list\">\n              <div class=\"setting-item\">\n                <div class=\"setting-text\">Sidebar Position</div>\n                <div class=\"setting-set\">\n                  <select\n                    class=\"sidebar-pos-option form-control input-inline input-sm input-small \"\n                  >\n                    <option value=\"left\" selected=\"selected\">Left</option>\n                    <option value=\"right\">Right</option>\n                  </select>\n                </div>\n              </div>\n              <div class=\"setting-item\">\n                <div class=\"setting-text\">Header</div>\n                <div class=\"setting-set\">\n                  <select\n                    class=\"page-header-option form-control input-inline input-sm input-small \"\n                  >\n                    <option value=\"fixed\" selected=\"selected\">Fixed</option>\n                    <option value=\"default\">Default</option>\n                  </select>\n                </div>\n              </div>\n              <div class=\"setting-item\">\n                <div class=\"setting-text\">Footer</div>\n                <div class=\"setting-set\">\n                  <select\n                    class=\"page-footer-option form-control input-inline input-sm input-small \"\n                  >\n                    <option value=\"fixed\">Fixed</option>\n                    <option value=\"default\" selected=\"selected\">Default</option>\n                  </select>\n                </div>\n              </div>\n            </div>\n            <div class=\"chat-header\">\n              <h5 class=\"list-heading\">Account Settings</h5>\n            </div>\n            <div class=\"settings-list\">\n              <div class=\"setting-item\">\n                <div class=\"setting-text\">Notifications</div>\n                <div class=\"setting-set\">\n                  <div class=\"switch\">\n                    <label\n                      class=\"mdl-switch mdl-js-switch mdl-js-ripple-effect\"\n                      for=\"switch-1\"\n                    >\n                      <input\n                        type=\"checkbox\"\n                        id=\"switch-1\"\n                        class=\"mdl-switch__input\"\n                        checked\n                      />\n                    </label>\n                  </div>\n                </div>\n              </div>\n              <div class=\"setting-item\">\n                <div class=\"setting-text\">Show Online</div>\n                <div class=\"setting-set\">\n                  <div class=\"switch\">\n                    <label\n                      class=\"mdl-switch mdl-js-switch mdl-js-ripple-effect\"\n                      for=\"switch-7\"\n                    >\n                      <input\n                        type=\"checkbox\"\n                        id=\"switch-7\"\n                        class=\"mdl-switch__input\"\n                        checked\n                      />\n                    </label>\n                  </div>\n                </div>\n              </div>\n              <div class=\"setting-item\">\n                <div class=\"setting-text\">Status</div>\n                <div class=\"setting-set\">\n                  <div class=\"switch\">\n                    <label\n                      class=\"mdl-switch mdl-js-switch mdl-js-ripple-effect\"\n                      for=\"switch-2\"\n                    >\n                      <input\n                        type=\"checkbox\"\n                        id=\"switch-2\"\n                        class=\"mdl-switch__input\"\n                        checked\n                      />\n                    </label>\n                  </div>\n                </div>\n              </div>\n              <div class=\"setting-item\">\n                <div class=\"setting-text\">2 Steps Verification</div>\n                <div class=\"setting-set\">\n                  <div class=\"switch\">\n                    <label\n                      class=\"mdl-switch mdl-js-switch mdl-js-ripple-effect\"\n                      for=\"switch-3\"\n                    >\n                      <input\n                        type=\"checkbox\"\n                        id=\"switch-3\"\n                        class=\"mdl-switch__input\"\n                        checked\n                      />\n                    </label>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"chat-header\">\n              <h5 class=\"list-heading\">General Settings</h5>\n            </div>\n            <div class=\"settings-list\">\n              <div class=\"setting-item\">\n                <div class=\"setting-text\">Location</div>\n                <div class=\"setting-set\">\n                  <div class=\"switch\">\n                    <label\n                      class=\"mdl-switch mdl-js-switch mdl-js-ripple-effect\"\n                      for=\"switch-4\"\n                    >\n                      <input\n                        type=\"checkbox\"\n                        id=\"switch-4\"\n                        class=\"mdl-switch__input\"\n                        checked\n                      />\n                    </label>\n                  </div>\n                </div>\n              </div>\n              <div class=\"setting-item\">\n                <div class=\"setting-text\">Save Histry</div>\n                <div class=\"setting-set\">\n                  <div class=\"switch\">\n                    <label\n                      class=\"mdl-switch mdl-js-switch mdl-js-ripple-effect\"\n                      for=\"switch-5\"\n                    >\n                      <input\n                        type=\"checkbox\"\n                        id=\"switch-5\"\n                        class=\"mdl-switch__input\"\n                        checked\n                      />\n                    </label>\n                  </div>\n                </div>\n              </div>\n              <div class=\"setting-item\">\n                <div class=\"setting-text\">Auto Updates</div>\n                <div class=\"setting-set\">\n                  <div class=\"switch\">\n                    <label\n                      class=\"mdl-switch mdl-js-switch mdl-js-ripple-effect\"\n                      for=\"switch-6\"\n                    >\n                      <input\n                        type=\"checkbox\"\n                        id=\"switch-6\"\n                        class=\"mdl-switch__input\"\n                        checked\n                      />\n                    </label>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- end chat sidebar -->\n\n<!-- end page container -->\n\n<!-- Data Table -->\n\n<!-- Modal -->\n\n<div\n  class=\"modal fade bd-example-modal-lg\"\n  tabindex=\"-1\"\n  role=\"dialog\"\n  aria-labelledby=\"myLargeModalLabel\"\n  aria-hidden=\"true\"\n>\n  <div class=\"modal-dialog modal-lg\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"exampleModalLongTitle\">DÉTAILS DOSSIER</h5>\n        <button\n          type=\"button\"\n          class=\"close\"\n          data-dismiss=\"modal\"\n          aria-label=\"Close\"\n        >\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <div class=\"col\">\n          <div class=\"card card-topline-green\">\n            <div class=\"card-head\">\n              <header>Informations</header>\n              <div class=\"tools\">\n                <a\n                  class=\"fa fa-repeat btn-color box-refresh\"\n                  href=\"javascript:;\"\n                ></a>\n                <a\n                  class=\"t-collapse btn-color fa fa-chevron-down\"\n                  href=\"javascript:;\"\n                ></a>\n                <a\n                  class=\"t-close btn-color fa fa-times\"\n                  href=\"javascript:;\"\n                ></a>\n              </div>\n            </div>\n            <div class=\"card-body \">\n              <div class=\"table-scrollable\">\n                <table class=\"table\">\n                  <tbody>\n                    <tr>\n                      <td>Numéro du dossier</td>\n                      <td>35AI800103</td>\n                    </tr>\n                    <tr>\n                      <td>Expéditeur</td>\n                      <td>ZODIAC SEATS FRANCE</td>\n                    </tr>\n                    <tr>\n                      <td>Adresse expéditeur</td>\n                      <td>RUE ROBERT MARECHAL SENIOR ZI LA LIMOISE 36100</td>\n                    </tr>\n                    <tr>\n                      <td>Destinataire</td>\n                      <td>ZODIAC SEATS TUNISIE</td>\n                    </tr>\n                    <tr>\n                      <td>Adresse destinataire</td>\n                      <td>ROUTE DE TUNIS KM 6 EL DHARI BP 224 8020</td>\n                    </tr>\n                    <tr>\n                      <td>Chauffeur</td>\n                      <td>IPC</td>\n                    </tr>\n                    <tr>\n                      <td>Immatricule du cammion</td>\n                      <td>EL433XC</td>\n                    </tr>\n                    <tr>\n                      <td>Airline</td>\n                      <td>EXPRESS AIR CARGO</td>\n                    </tr>\n                    <tr>\n                      <td>Vol N°</td>\n                      <td>7A111/09</td>\n                    </tr>\n                    <tr>\n                      <td>Chargée à</td>\n                      <td>CDG CHARLES DE GAULLE APT/PARIS</td>\n                    </tr>\n                    <tr>\n                      <td>Déchargée à</td>\n                      <td>TUN TUNIS</td>\n                    </tr>\n                    <tr>\n                      <td>EUR1 N°</td>\n                      <td>7A111/09</td>\n                    </tr>\n                    <tr>\n                      <td>T1</td>\n                      <td></td>\n                    </tr>\n                    <tr>\n                      <td>LTA</td>\n                      <td>23140110</td>\n                    </tr>\n                    <tr>\n                      <td>N° de la facture</td>\n                      <td>20180208A</td>\n                    </tr>\n                  </tbody>\n                </table>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">\n          Close\n        </button>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div\n  class=\"modal fade bd-SUIVIDOSSIER-modal-lg\"\n  tabindex=\"-1\"\n  role=\"dialog\"\n  aria-labelledby=\"myLargeModalLabel\"\n  aria-hidden=\"true\"\n>\n  <div class=\"modal-dialog modal-lg\">\n    <div class=\"modal-content\">\n      <div class=\"modal-body\">\n        <div class=\"card card-topline-red\">\n          <div class=\"card-head\">\n            <header>SUIVI DOSSIER</header>\n            <div class=\"tools\">\n              <a\n                class=\"fa fa-repeat btn-color box-refresh\"\n                href=\"javascript:;\"\n              ></a>\n              <a\n                class=\"t-collapse btn-color fa fa-chevron-down\"\n                href=\"javascript:;\"\n              ></a>\n              <a class=\"t-close btn-color fa fa-times\" href=\"javascript:;\"></a>\n            </div>\n          </div>\n          <div class=\"card-body \">\n            <div class=\"table-scrollable\">\n              <table class=\"table table-striped table-hover\">\n                <thead>\n                  <tr>\n                    <th>Num Dossier</th>\n                    <th>Evènement</th>\n                    <th>Description</th>\n                    <th>Date</th>\n                    <th>Heure</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr>\n                    <td>35AI800103</td>\n                    <td>\n                      <img\n                        src=\"../../assets/img/import/Korawan_M_business12-512.png\"\n                        style=\"width: 50px;\"\n                      />\n                    </td>\n                    <td>Enlèvement</td>\n                    <td>08/02/2018</td>\n                    <td>08:45</td>\n                  </tr>\n                  <tr>\n                    <td>35AI800103</td>\n                    <td>\n                      <img\n                        src=\"../../assets/img/import/airport-boarding-corridor-passenger-plane-icon-boarding-the-plane-png-512_512.png\"\n                        style=\"width: 70px;\"\n                      />\n                    </td>\n                    <td>Embarquement</td>\n                    <td>09/02/2018</td>\n                    <td>12:10</td>\n                  </tr>\n                  <tr>\n                    <td>35AI800103</td>\n                    <td>\n                      <img\n                        src=\"../../assets/img/import/order_tracking-512.png\"\n                        style=\"width: 60px;\"\n                      />\n                    </td>\n                    <td>Mise en livraison</td>\n                    <td>09/02/2018</td>\n                    <td>19:00</td>\n                  </tr>\n                  <tr>\n                    <td>35AI800103</td>\n                    <td>\n                      <img\n                        src=\"../../assets/img/import/Korawan_M_business12-512.png\"\n                        style=\"width: 50px;\"\n                      />\n                    </td>\n                    <td>Livraison</td>\n                    <td>09/02/2018</td>\n                    <td>20:30</td>\n                  </tr>\n                </tbody>\n              </table>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">\n          Fermer\n        </button>\n      </div>\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppNavbarNavbarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"page-header navbar navbar-fixed-top customNav\">\n  <div class=\"page-header-inner \">\n    <!-- logo start -->\n    <div class=\"page-logo\">\n      <a href=\"index.html\">\n        <!-- <span class=\"logo-icon material-icons fa-rotate-45\">school</span>-->\n        <span class=\"logo-default\">Track4Trace</span>\n      </a>\n    </div>\n    <!-- logo end -->\n    <ul class=\"nav navbar-nav navbar-left in\">\n      <li>\n        <a href=\"#\" class=\"menu-toggler sidebar-toggler\"\n          ><i class=\"icon-menu\"></i\n        ></a>\n      </li>\n    </ul>\n    <form class=\"search-form-opened\" action=\"#\" method=\"GET\">\n      <div class=\"input-group\">\n        <input\n          type=\"text\"\n          class=\"form-control\"\n          placeholder=\"Search...\"\n          name=\"query\"\n        />\n        <span class=\"input-group-btn\">\n          <a href=\"javascript:;\" class=\"btn submit\">\n            <i class=\"icon-magnifier\"></i>\n          </a>\n        </span>\n      </div>\n    </form>\n    <!-- start mobile menu -->\n    <a\n      href=\"javascript:;\"\n      class=\"menu-toggler responsive-toggler\"\n      data-toggle=\"collapse\"\n      data-target=\".navbar-collapse\"\n    >\n      <span></span>\n    </a>\n    <!-- end mobile menu -->\n    <!-- start header menu -->\n    <div class=\"top-menu\">\n      <ul class=\"nav navbar-nav pull-right\">\n        <li>\n          <a href=\"javascript:;\" class=\"fullscreen-btn\"\n            ><i class=\"fa fa-arrows-alt\"></i\n          ></a>\n        </li>\n        <!-- start language menu -->\n        <li class=\"dropdown language-switch\">\n          <a\n            class=\"dropdown-toggle\"\n            data-toggle=\"dropdown\"\n            aria-expanded=\"false\"\n          >\n            <img\n              src=\"../assets/img/flags/gb.png\"\n              class=\"position-left\"\n              alt=\"\"\n            />\n            English <span class=\"fa fa-angle-down\"></span>\n          </a>\n          <ul class=\"dropdown-menu\">\n            <li>\n              <a class=\"deutsch\"\n                ><img src=\"../assets/img/flags/de.png\" alt=\"\" /> Deutsch</a\n              >\n            </li>\n            <li>\n              <a class=\"ukrainian\"\n                ><img src=\"../assets/img/flags/ua.png\" alt=\"\" /> Українська</a\n              >\n            </li>\n            <li>\n              <a class=\"english\"\n                ><img src=\"../assets/img/flags/gb.png\" alt=\"\" /> English</a\n              >\n            </li>\n            <li>\n              <a class=\"espana\"\n                ><img src=\"../assets/img/flags/es.png\" alt=\"\" /> España</a\n              >\n            </li>\n            <li>\n              <a class=\"russian\"\n                ><img src=\"../assets/img/flags/ru.png\" alt=\"\" /> Русский</a\n              >\n            </li>\n          </ul>\n        </li>\n        <!-- end language menu -->\n        <!-- start notification dropdown -->\n        <li\n          class=\"dropdown dropdown-extended dropdown-notification\"\n          id=\"header_notification_bar\"\n        >\n          <a\n            href=\"javascript:;\"\n            class=\"dropdown-toggle\"\n            data-toggle=\"dropdown\"\n            data-hover=\"dropdown\"\n            data-close-others=\"true\"\n          >\n            <i class=\"fa fa-bell-o\"></i>\n            <span class=\"badge headerBadgeColor1\"> 6 </span>\n          </a>\n          <ul class=\"dropdown-menu\">\n            <li class=\"external\">\n              <h3><span class=\"bold\">Notifications</span></h3>\n              <span class=\"notification-label purple-bgcolor\">New 6</span>\n            </li>\n            <li>\n              <div\n                class=\"slimScrollDiv\"\n                style=\"position: relative; overflow: hidden; width: auto;\"\n              >\n                <ul\n                  class=\"dropdown-menu-list small-slimscroll-style\"\n                  data-handle-color=\"#637283\"\n                  style=\"overflow: hidden; width: auto;\"\n                >\n                  <li>\n                    <a href=\"javascript:;\">\n                      <span class=\"time\">just now</span>\n                      <span class=\"details\">\n                        <span class=\"notification-icon circle deepPink-bgcolor\"\n                          ><i class=\"fa fa-check\"></i\n                        ></span>\n                        Congratulations!.\n                      </span>\n                    </a>\n                  </li>\n                  <li>\n                    <a href=\"javascript:;\">\n                      <span class=\"time\">3 mins</span>\n                      <span class=\"details\">\n                        <span class=\"notification-icon circle purple-bgcolor\"\n                          ><i class=\"fa fa-user o\"></i\n                        ></span>\n                        <b>John Micle </b>is now following you.\n                      </span>\n                    </a>\n                  </li>\n                  <li>\n                    <a href=\"javascript:;\">\n                      <span class=\"time\">7 mins</span>\n                      <span class=\"details\">\n                        <span class=\"notification-icon circle blue-bgcolor\"\n                          ><i class=\"fa fa-comments-o\"></i\n                        ></span>\n                        <b>Sneha Jogi </b>sent you a message.\n                      </span>\n                    </a>\n                  </li>\n                  <li>\n                    <a href=\"javascript:;\">\n                      <span class=\"time\">12 mins</span>\n                      <span class=\"details\">\n                        <span class=\"notification-icon circle pink\"\n                          ><i class=\"fa fa-heart\"></i\n                        ></span>\n                        <b>Ravi Patel </b>like your photo.\n                      </span>\n                    </a>\n                  </li>\n                  <li>\n                    <a href=\"javascript:;\">\n                      <span class=\"time\">15 mins</span>\n                      <span class=\"details\">\n                        <span class=\"notification-icon circle yellow\"\n                          ><i class=\"fa fa-warning\"></i\n                        ></span>\n                        Warning!\n                      </span>\n                    </a>\n                  </li>\n                  <li>\n                    <a href=\"javascript:;\">\n                      <span class=\"time\">10 hrs</span>\n                      <span class=\"details\">\n                        <span class=\"notification-icon circle red\"\n                          ><i class=\"fa fa-times\"></i\n                        ></span>\n                        Application error.\n                      </span>\n                    </a>\n                  </li>\n                </ul>\n                <div\n                  class=\"slimScrollBar\"\n                  style=\"background: rgb(158, 165, 171); width: 5px; position: absolute; top: 0px; opacity: 0.4; display: block; border-radius: 7px; z-index: 99; right: 1px;\"\n                ></div>\n                <div\n                  class=\"slimScrollRail\"\n                  style=\"width: 5px; height: 100%; position: absolute; top: 0px; display: none; border-radius: 7px; background: rgb(51, 51, 51); opacity: 0.2; z-index: 90; right: 1px;\"\n                ></div>\n              </div>\n              <div class=\"dropdown-menu-footer\">\n                <a href=\"javascript:void(0)\"> All notifications </a>\n              </div>\n            </li>\n          </ul>\n        </li>\n        <!-- end notification dropdown -->\n        <!-- start message dropdown -->\n        <li\n          class=\"dropdown dropdown-extended dropdown-inbox\"\n          id=\"header_inbox_bar\"\n        >\n          <a\n            href=\"javascript:;\"\n            class=\"dropdown-toggle\"\n            data-toggle=\"dropdown\"\n            data-hover=\"dropdown\"\n            data-close-others=\"true\"\n          >\n            <i class=\"fa fa-envelope-o\"></i>\n            <span class=\"badge headerBadgeColor2\"> 2 </span>\n          </a>\n          <ul class=\"dropdown-menu\">\n            <li class=\"external\">\n              <h3><span class=\"bold\">Messages</span></h3>\n              <span class=\"notification-label cyan-bgcolor\">New 2</span>\n            </li>\n            <li>\n              <div\n                class=\"slimScrollDiv\"\n                style=\"position: relative; overflow: hidden; width: auto;\"\n              >\n                <ul\n                  class=\"dropdown-menu-list small-slimscroll-style\"\n                  data-handle-color=\"#637283\"\n                  style=\"overflow: hidden; width: auto;\"\n                >\n                  <li>\n                    <a href=\"#\">\n                      <span class=\"photo\">\n                        <img\n                          src=\"../assets/img/prof/prof2.jpg\"\n                          class=\"img-circle\"\n                          alt=\"\"\n                        />\n                      </span>\n                      <span class=\"subject\">\n                        <span class=\"from\"> Sarah Smith </span>\n                        <span class=\"time\">Just Now </span>\n                      </span>\n                      <span class=\"message\">\n                        Jatin I found you on LinkedIn...\n                      </span>\n                    </a>\n                  </li>\n                  <li>\n                    <a href=\"#\">\n                      <span class=\"photo\">\n                        <img\n                          src=\"../assets/img/prof/prof3.jpg\"\n                          class=\"img-circle\"\n                          alt=\"\"\n                        />\n                      </span>\n                      <span class=\"subject\">\n                        <span class=\"from\"> John Deo </span>\n                        <span class=\"time\">16 mins </span>\n                      </span>\n                      <span class=\"message\">\n                        Fwd: Important Notice Regarding Your Domain Name...\n                      </span>\n                    </a>\n                  </li>\n                  <li>\n                    <a href=\"#\">\n                      <span class=\"photo\">\n                        <img\n                          src=\"../assets/img/prof/prof1.jpg\"\n                          class=\"img-circle\"\n                          alt=\"\"\n                        />\n                      </span>\n                      <span class=\"subject\">\n                        <span class=\"from\"> Rajesh </span>\n                        <span class=\"time\">2 hrs </span>\n                      </span>\n                      <span class=\"message\">\n                        pls take a print of attachments.\n                      </span>\n                    </a>\n                  </li>\n                  <li>\n                    <a href=\"#\">\n                      <span class=\"photo\">\n                        <img\n                          src=\"../assets/img/prof/prof8.jpg\"\n                          class=\"img-circle\"\n                          alt=\"\"\n                        />\n                      </span>\n                      <span class=\"subject\">\n                        <span class=\"from\"> Lina Smith </span>\n                        <span class=\"time\">40 mins </span>\n                      </span>\n                      <span class=\"message\"> Apply for Ortho Surgeon </span>\n                    </a>\n                  </li>\n                  <li>\n                    <a href=\"#\">\n                      <span class=\"photo\">\n                        <img\n                          src=\"../assets/img/prof/prof5.jpg\"\n                          class=\"img-circle\"\n                          alt=\"\"\n                        />\n                      </span>\n                      <span class=\"subject\">\n                        <span class=\"from\"> Jacob Ryan </span>\n                        <span class=\"time\">46 mins </span>\n                      </span>\n                      <span class=\"message\">\n                        Request for leave application.\n                      </span>\n                    </a>\n                  </li>\n                </ul>\n                <div\n                  class=\"slimScrollBar\"\n                  style=\"background: rgb(158, 165, 171); width: 5px; position: absolute; top: 0px; opacity: 0.4; display: block; border-radius: 7px; z-index: 99; right: 1px;\"\n                ></div>\n                <div\n                  class=\"slimScrollRail\"\n                  style=\"width: 5px; height: 100%; position: absolute; top: 0px; display: none; border-radius: 7px; background: rgb(51, 51, 51); opacity: 0.2; z-index: 90; right: 1px;\"\n                ></div>\n              </div>\n              <div class=\"dropdown-menu-footer\">\n                <a href=\"#\"> All Messages </a>\n              </div>\n            </li>\n          </ul>\n        </li>\n        <!-- end message dropdown -->\n        <!-- start manage user dropdown -->\n        <li class=\"dropdown dropdown-user\">\n          <a\n            href=\"javascript:;\"\n            class=\"dropdown-toggle\"\n            data-toggle=\"dropdown\"\n            data-hover=\"dropdown\"\n            data-close-others=\"true\"\n          >\n            <img alt=\"\" class=\"img-circle \" src=\"../assets/img/dp.jpg\" />\n            <span class=\"username username-hide-on-mobile\"> Kiran </span>\n            <i class=\"fa fa-angle-down\"></i>\n          </a>\n          <ul class=\"dropdown-menu dropdown-menu-default\">\n            <li>\n              <a href=\"user_profile.html\">\n                <i class=\"icon-user\"></i> Profile\n              </a>\n            </li>\n            <li>\n              <a href=\"#\"> <i class=\"icon-settings\"></i> Settings </a>\n            </li>\n            <li>\n              <a href=\"#\"> <i class=\"icon-directions\"></i> Help </a>\n            </li>\n            <li class=\"divider\"></li>\n            <li>\n              <a href=\"lock_screen.html\"> <i class=\"icon-lock\"></i> Lock </a>\n            </li>\n            <li>\n              <a href=\"login.html\"> <i class=\"icon-logout\"></i> Log Out </a>\n            </li>\n          </ul>\n        </li>\n        <!-- end manage user dropdown -->\n        <li class=\"dropdown dropdown-quick-sidebar-toggler\">\n          <a\n            id=\"headerSettingButton\"\n            class=\"mdl-button mdl-js-button mdl-button--icon pull-right\"\n            data-upgraded=\",MaterialButton\"\n          >\n            <i class=\"material-icons\">more_vert</i>\n          </a>\n        </li>\n      </ul>\n    </div>\n  </div>\n  <!-- start horizontal menu -->\n\n  <div class=\"navbar-custom outer\">\n    <div class=\"inner\" id=\"Mydiv\">\n      <ul class=\"nav\">\n        <li class=\"mega-menu-dropdown \">\n          <a\n            href=\"event.html\"\n            class=\"nav-link nav-toggle active\"\n            routerLink=\"/dashboard\"\n          >\n            <i class=\"material-icons\">dashboard</i>\n            <span class=\"title\">Dashboard</span>\n          </a>\n        </li>\n        <li class=\"mega-menu-dropdown \">\n          <a\n            href=\"event.html\"\n            class=\"nav-link nav-toggle\"\n            routerLink=\"/SaisiBon\"\n          >\n            <i class=\"material-icons\">insert_drive_file</i>\n            <span class=\"title\">Saisi bon d'enlèvement</span>\n          </a>\n        </li>\n        <li class=\"mega-menu-dropdown \">\n          <a href=\"event.html\" class=\"nav-link nav-toggle\" routerLink=\"/export\">\n            <i class=\"material-icons\">import_export</i>\n            <span class=\"title\">Suivi export</span>\n          </a>\n        </li>\n        <li class=\"mega-menu-dropdown \">\n          <a href=\"event.html\" class=\"nav-link nav-toggle\" routerLink=\"/import\">\n            <i class=\"material-icons\">import_export</i>\n            <span class=\"title\">Suivi import</span>\n          </a>\n        </li>\n      </ul>\n    </div>\n  </div>\n  <!-- end horizontal menu -->\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/saisi-bon/saisi-bon.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/saisi-bon/saisi-bon.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSaisiBonSaisiBonComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-navbar></app-navbar>\n\n<div class=\"container-fluid customForm\">\n  <div class=\"row\">\n    <div class=\"col-md-12 col-sm-12\">\n      <div class=\"card card-box\">\n        <div class=\"card-head\">\n          <header>Saisi bon d'enlèvement</header>\n          <button\n            id=\"panel-button3\"\n            class=\"mdl-button mdl-js-button mdl-button--icon pull-right\"\n            data-upgraded=\",MaterialButton\"\n          >\n            <i class=\"material-icons\">more_vert</i>\n          </button>\n          <ul\n            class=\"mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect\"\n            data-mdl-for=\"panel-button3\"\n          >\n            <li class=\"mdl-menu__item\">\n              <i class=\"material-icons\">assistant_photo</i>Action\n            </li>\n            <li class=\"mdl-menu__item\">\n              <i class=\"material-icons\">print</i>Another action\n            </li>\n            <li class=\"mdl-menu__item\">\n              <i class=\"material-icons\">favorite</i>Something else here\n            </li>\n          </ul>\n        </div>\n        <div class=\"card-body \" id=\"bar-parent2\">\n          <div class=\"row\">\n            <div class=\"col-md-3\">\n              <div class=\"form-group\">\n                <label>Numéro du bon</label>\n                <input\n                  type=\"text\"\n                  class=\"form-control\"\n                  placeholder=\"Enter ...\"\n                />\n              </div>\n            </div>\n            <div class=\"col-md-3\">\n              <div class=\"form-group\">\n                <label>Donneur d'ordre</label>\n                <input\n                  type=\"text\"\n                  class=\"form-control\"\n                  placeholder=\"Enter ...\"\n                />\n              </div>\n            </div>\n            <div class=\"col-md-3\">\n              <div class=\"form-group \">\n                <label>Date d'enlevement souhaitée</label>\n                <div\n                  class=\"input-append date\"\n                  id=\"dp3\"\n                  data-date=\"12-02-2012\"\n                  data-date-format=\"dd-mm-yyyy\"\n                >\n                  <input size=\"30\" type=\"text\" readonly=\"\" />&nbsp;\n                  <span class=\"add-on\"\n                    ><i class=\"fa fa-calendar icon-th\"></i\n                  ></span>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-md-3\">\n              <div class=\"form-group\">\n                <label class=\"control-label\"\n                  >Heure d'enlevement souhaitée</label\n                >\n                <div\n                  class=\"input-append date form_time\"\n                  data-date-format=\"dd MM yyyy\"\n                  data-date=\"2013-02-21T15:25:00Z\"\n                >\n                  <input size=\"30\" type=\"text\" value=\"\" readonly=\"\" />\n                  &nbsp;\n                  <span class=\"add-on\"\n                    ><i class=\"fa fa-remove icon-remove\"></i\n                  ></span>\n                  <span class=\"add-on\"><i class=\"fa fa-clock-o\"></i></span>\n                </div>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"row\">\n            <div class=\"col-md-3\">\n              <label>Expéditeur </label>\n              <select class=\"form-control\" id=\"select2\">\n                <option value=\"1\">Cats</option>\n                <option value=\"2\">Dogs</option>\n                <option value=\"3\">Fish</option>\n                <option value=\"4\">Reptiles</option>\n                <option value=\"5\">Equine</option>\n                <option value=\"6\">Aviary</option>\n                <option value=\"7\">Insects</option>\n              </select>\n            </div>\n            <div class=\"col-md-3\">\n              <div class=\"form-group\">\n                <label>Adresse expéditeur 1</label>\n                <input\n                  type=\"text\"\n                  class=\"form-control\"\n                  placeholder=\"Enter ...\"\n                />\n              </div>\n            </div>\n            <div class=\"col-md-3\">\n              <div class=\"form-group\">\n                <label>Adresse expéditeur 2</label>\n                <input\n                  type=\"text\"\n                  class=\"form-control\"\n                  placeholder=\"Enter ...\"\n                />\n              </div>\n            </div>\n            <div class=\"col-md-3\">\n              <div class=\"form-group\">\n                <label>Adresse expéditeur 3</label>\n                <input\n                  type=\"text\"\n                  class=\"form-control\"\n                  placeholder=\"Enter ...\"\n                />\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-1\">\n              <div class=\"form-group\">\n                <label>Dept</label>\n                <input\n                  type=\"text\"\n                  class=\"form-control\"\n                  placeholder=\"Enter ...\"\n                />\n              </div>\n            </div>\n            <div class=\"col-md-2\">\n              <div class=\"form-group\">\n                <label>Ville</label>\n                <input\n                  type=\"text\"\n                  class=\"form-control\"\n                  placeholder=\"Enter ...\"\n                />\n              </div>\n            </div>\n            <div class=\"col-md-1\">\n              <div class=\"form-group\">\n                <label>Pays</label>\n                <input\n                  type=\"text\"\n                  class=\"form-control\"\n                  placeholder=\"Enter ...\"\n                />\n              </div>\n            </div>\n            <div class=\"col-md-2\">\n              <div class=\"form-group\">\n                <label>CP</label>\n                <input\n                  type=\"text\"\n                  class=\"form-control\"\n                  placeholder=\"Enter ...\"\n                />\n              </div>\n            </div>\n            <div class=\"col-md-3\">\n              <div class=\"form-group\">\n                <label>Tél</label>\n                <input\n                  type=\"text\"\n                  class=\"form-control\"\n                  placeholder=\"Enter ...\"\n                />\n              </div>\n            </div>\n            <div class=\"col-md-3\">\n              <div class=\"form-group\">\n                <label>Email</label>\n                <input\n                  type=\"text\"\n                  class=\"form-control\"\n                  placeholder=\"Enter ...\"\n                />\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-3\">\n              <label>Destinataire </label>\n              <select class=\"form-control\" id=\"select2\">\n                <option value=\"1\">Cats</option>\n                <option value=\"2\">Dogs</option>\n                <option value=\"3\">Fish</option>\n                <option value=\"4\">Reptiles</option>\n                <option value=\"5\">Equine</option>\n                <option value=\"6\">Aviary</option>\n                <option value=\"7\">Insects</option>\n              </select>\n            </div>\n            <div class=\"col-md-3\">\n              <div class=\"form-group\">\n                <label>Adresse destinataire 1</label>\n                <input\n                  type=\"text\"\n                  class=\"form-control\"\n                  placeholder=\"Enter ...\"\n                />\n              </div>\n            </div>\n            <div class=\"col-md-3\">\n              <div class=\"form-group\">\n                <label>Adresse destinataire 2</label>\n                <input\n                  type=\"text\"\n                  class=\"form-control\"\n                  placeholder=\"Enter ...\"\n                />\n              </div>\n            </div>\n            <div class=\"col-md-3\">\n              <div class=\"form-group\">\n                <label>Adresse destinataire 3</label>\n                <input\n                  type=\"text\"\n                  class=\"form-control\"\n                  placeholder=\"Enter ...\"\n                />\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-3\">\n              <div class=\"container-fluid\">\n                <div class=\"row\">\n                  <div class=\"form-group\">\n                    <label class=\"control-label\"\n                      >Date de livraison souhaitée</label\n                    >\n                    <div\n                      class=\"input-append date form_date\"\n                      data-date-format=\"dd MM yyyy\"\n                      data-date=\"2013-02-21T15:25:00Z\"\n                    >\n                      <input size=\"30\" type=\"text\" value=\"\" readonly=\"\" />\n                      &nbsp;\n                      <span class=\"add-on\"\n                        ><i class=\"fa fa-remove icon-remove\"></i\n                      ></span>\n                      <span class=\"add-on\"><i class=\"fa fa-calendar\"></i></span>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"form-group\">\n                    <label class=\"control-label\"\n                      >Heure de livraison souhaitée</label\n                    >\n                    <div\n                      class=\"input-append date form_time\"\n                      data-date-format=\"dd MM yyyy\"\n                      data-date=\"2013-02-21T15:25:00Z\"\n                    >\n                      <input size=\"30\" type=\"text\" value=\"\" readonly=\"\" />\n                      &nbsp;\n                      <span class=\"add-on\"\n                        ><i class=\"fa fa-remove icon-remove\"></i\n                      ></span>\n                      <span class=\"add-on\"><i class=\"fa fa-clock-o\"></i></span>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n\n            <div class=\"col-md-3\">\n              <div class=\"form-group\">\n                <label>Commentaire 1</label>\n                <textarea\n                  class=\"form-control\"\n                  rows=\"5\"\n                  placeholder=\"Enter ...\"\n                ></textarea>\n              </div>\n            </div>\n            <div class=\"col-md-3\">\n              <div class=\"form-group\">\n                <label>Commentaire 2</label>\n                <textarea\n                  class=\"form-control\"\n                  rows=\"5\"\n                  placeholder=\"Enter ...\"\n                ></textarea>\n              </div>\n            </div>\n            <div class=\"col-md-3\">\n              <div class=\"form-group\">\n                <label>Commentaire 3</label>\n                <textarea\n                  class=\"form-control\"\n                  rows=\"5\"\n                  placeholder=\"Enter ...\"\n                ></textarea>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\" style=\"margin-top: 40px;\">\n            <div class=\"col-md-4\"></div>\n            <div class=\"col-md-4\">\n              <button class=\"btn btn-danger\" style=\"width: 100%;\">\n                Annuler\n              </button>\n            </div>\n            <div class=\"col-md-4\"></div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col\">\n      <app-colisage></app-colisage>\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/test/test.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/test/test.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTestTestComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"page-header navbar navbar-fixed-top\">\n  <div class=\"page-header-inner \">\n    <!-- logo start -->\n    <div class=\"page-logo\">\n      <a href=\"index.html\">\n        <span class=\"logo-icon material-icons fa-rotate-45\">school</span>\n        <span class=\"logo-default\">Smart</span> </a>\n    </div>\n    <!-- logo end -->\n    <ul class=\"nav navbar-nav navbar-left in\">\n      <li><a href=\"#\" class=\"menu-toggler sidebar-toggler\"><i class=\"icon-menu\"></i></a></li>\n    </ul>\n    <form class=\"search-form-opened\" action=\"#\" method=\"GET\">\n      <div class=\"input-group\">\n        <input type=\"text\" class=\"form-control\" placeholder=\"Search...\" name=\"query\">\n        <span class=\"input-group-btn\">\n          <a href=\"javascript:;\" class=\"btn submit\">\n            <i class=\"icon-magnifier\"></i>\n          </a>\n        </span>\n      </div>\n    </form>\n    <!-- start mobile menu -->\n    <a href=\"javascript:;\" class=\"menu-toggler responsive-toggler\" data-toggle=\"collapse\" data-target=\".navbar-collapse\">\n      <span></span>\n    </a>\n    <!-- end mobile menu -->\n    <!-- start header menu -->\n    <div class=\"top-menu\">\n      <ul class=\"nav navbar-nav pull-right\">\n        <li><a href=\"javascript:;\" class=\"fullscreen-btn\"><i class=\"fa fa-arrows-alt\"></i></a></li>\n        <!-- start language menu -->\n        <li class=\"dropdown language-switch\">\n          <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" aria-expanded=\"false\"> <img src=\"../assets/img/flags/gb.png\" class=\"position-left\" alt=\"\"> English <span class=\"fa fa-angle-down\"></span>\n          </a>\n          <ul class=\"dropdown-menu\">\n            <li>\n              <a class=\"deutsch\"><img src=\"../assets/img/flags/de.png\" alt=\"\"> Deutsch</a>\n            </li>\n            <li>\n              <a class=\"ukrainian\"><img src=\"../assets/img/flags/ua.png\" alt=\"\"> Українська</a>\n            </li>\n            <li>\n              <a class=\"english\"><img src=\"../assets/img/flags/gb.png\" alt=\"\"> English</a>\n            </li>\n            <li>\n              <a class=\"espana\"><img src=\"../assets/img/flags/es.png\" alt=\"\"> España</a>\n            </li>\n            <li>\n              <a class=\"russian\"><img src=\"../assets/img/flags/ru.png\" alt=\"\"> Русский</a>\n            </li>\n          </ul>\n        </li>\n        <!-- end language menu -->\n        <!-- start notification dropdown -->\n        <li class=\"dropdown dropdown-extended dropdown-notification\" id=\"header_notification_bar\">\n          <a href=\"javascript:;\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" data-hover=\"dropdown\" data-close-others=\"true\">\n            <i class=\"fa fa-bell-o\"></i>\n            <span class=\"badge headerBadgeColor1\"> 6 </span>\n          </a>\n          <ul class=\"dropdown-menu\">\n            <li class=\"external\">\n              <h3><span class=\"bold\">Notifications</span></h3>\n              <span class=\"notification-label purple-bgcolor\">New 6</span>\n            </li>\n            <li>\n              <div class=\"slimScrollDiv\" style=\"position: relative; overflow: hidden; width: auto;\"><ul class=\"dropdown-menu-list small-slimscroll-style\" data-handle-color=\"#637283\" style=\"overflow: hidden; width: auto;\">\n                <li>\n                  <a href=\"javascript:;\">\n                    <span class=\"time\">just now</span>\n                    <span class=\"details\">\n                      <span class=\"notification-icon circle deepPink-bgcolor\"><i class=\"fa fa-check\"></i></span>\n                      Congratulations!. </span>\n                  </a>\n                </li>\n                <li>\n                  <a href=\"javascript:;\">\n                    <span class=\"time\">3 mins</span>\n                    <span class=\"details\">\n                      <span class=\"notification-icon circle purple-bgcolor\"><i class=\"fa fa-user o\"></i></span>\n                      <b>John Micle </b>is now following you. </span>\n                  </a>\n                </li>\n                <li>\n                  <a href=\"javascript:;\">\n                    <span class=\"time\">7 mins</span>\n                    <span class=\"details\">\n                      <span class=\"notification-icon circle blue-bgcolor\"><i class=\"fa fa-comments-o\"></i></span>\n                      <b>Sneha Jogi </b>sent you a message. </span>\n                  </a>\n                </li>\n                <li>\n                  <a href=\"javascript:;\">\n                    <span class=\"time\">12 mins</span>\n                    <span class=\"details\">\n                      <span class=\"notification-icon circle pink\"><i class=\"fa fa-heart\"></i></span>\n                      <b>Ravi Patel </b>like your photo. </span>\n                  </a>\n                </li>\n                <li>\n                  <a href=\"javascript:;\">\n                    <span class=\"time\">15 mins</span>\n                    <span class=\"details\">\n                      <span class=\"notification-icon circle yellow\"><i class=\"fa fa-warning\"></i></span> Warning! </span>\n                  </a>\n                </li>\n                <li>\n                  <a href=\"javascript:;\">\n                    <span class=\"time\">10 hrs</span>\n                    <span class=\"details\">\n                      <span class=\"notification-icon circle red\"><i class=\"fa fa-times\"></i></span> Application error. </span>\n                  </a>\n                </li>\n              </ul><div class=\"slimScrollBar\" style=\"background: rgb(158, 165, 171); width: 5px; position: absolute; top: 0px; opacity: 0.4; display: block; border-radius: 7px; z-index: 99; right: 1px;\"></div><div class=\"slimScrollRail\" style=\"width: 5px; height: 100%; position: absolute; top: 0px; display: none; border-radius: 7px; background: rgb(51, 51, 51); opacity: 0.2; z-index: 90; right: 1px;\"></div></div>\n              <div class=\"dropdown-menu-footer\">\n                <a href=\"javascript:void(0)\"> All notifications </a>\n              </div>\n            </li>\n          </ul>\n        </li>\n        <!-- end notification dropdown -->\n        <!-- start message dropdown -->\n        <li class=\"dropdown dropdown-extended dropdown-inbox\" id=\"header_inbox_bar\">\n          <a href=\"javascript:;\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" data-hover=\"dropdown\" data-close-others=\"true\">\n            <i class=\"fa fa-envelope-o\"></i>\n            <span class=\"badge headerBadgeColor2\"> 2 </span>\n          </a>\n          <ul class=\"dropdown-menu\">\n            <li class=\"external\">\n              <h3><span class=\"bold\">Messages</span></h3>\n              <span class=\"notification-label cyan-bgcolor\">New 2</span>\n            </li>\n            <li>\n              <div class=\"slimScrollDiv\" style=\"position: relative; overflow: hidden; width: auto;\"><ul class=\"dropdown-menu-list small-slimscroll-style\" data-handle-color=\"#637283\" style=\"overflow: hidden; width: auto;\">\n                <li>\n                  <a href=\"#\">\n                    <span class=\"photo\">\n                      <img src=\"../assets/img/prof/prof2.jpg\" class=\"img-circle\" alt=\"\">\n                    </span>\n                    <span class=\"subject\">\n                      <span class=\"from\"> Sarah Smith </span>\n                      <span class=\"time\">Just Now </span>\n                    </span>\n                    <span class=\"message\"> Jatin I found you on LinkedIn... </span>\n                  </a>\n                </li>\n                <li>\n                  <a href=\"#\">\n                    <span class=\"photo\">\n                      <img src=\"../assets/img/prof/prof3.jpg\" class=\"img-circle\" alt=\"\">\n                    </span>\n                    <span class=\"subject\">\n                      <span class=\"from\"> John Deo </span>\n                      <span class=\"time\">16 mins </span>\n                    </span>\n                    <span class=\"message\"> Fwd: Important Notice Regarding Your Domain\n                      Name... </span>\n                  </a>\n                </li>\n                <li>\n                  <a href=\"#\">\n                    <span class=\"photo\">\n                      <img src=\"../assets/img/prof/prof1.jpg\" class=\"img-circle\" alt=\"\">\n                    </span>\n                    <span class=\"subject\">\n                      <span class=\"from\"> Rajesh </span>\n                      <span class=\"time\">2 hrs </span>\n                    </span>\n                    <span class=\"message\"> pls take a print of attachments. </span>\n                  </a>\n                </li>\n                <li>\n                  <a href=\"#\">\n                    <span class=\"photo\">\n                      <img src=\"../assets/img/prof/prof8.jpg\" class=\"img-circle\" alt=\"\">\n                    </span>\n                    <span class=\"subject\">\n                      <span class=\"from\"> Lina Smith </span>\n                      <span class=\"time\">40 mins </span>\n                    </span>\n                    <span class=\"message\"> Apply for Ortho Surgeon </span>\n                  </a>\n                </li>\n                <li>\n                  <a href=\"#\">\n                    <span class=\"photo\">\n                      <img src=\"../assets/img/prof/prof5.jpg\" class=\"img-circle\" alt=\"\">\n                    </span>\n                    <span class=\"subject\">\n                      <span class=\"from\"> Jacob Ryan </span>\n                      <span class=\"time\">46 mins </span>\n                    </span>\n                    <span class=\"message\"> Request for leave application. </span>\n                  </a>\n                </li>\n              </ul><div class=\"slimScrollBar\" style=\"background: rgb(158, 165, 171); width: 5px; position: absolute; top: 0px; opacity: 0.4; display: block; border-radius: 7px; z-index: 99; right: 1px;\"></div><div class=\"slimScrollRail\" style=\"width: 5px; height: 100%; position: absolute; top: 0px; display: none; border-radius: 7px; background: rgb(51, 51, 51); opacity: 0.2; z-index: 90; right: 1px;\"></div></div>\n              <div class=\"dropdown-menu-footer\">\n                <a href=\"#\"> All Messages </a>\n              </div>\n            </li>\n          </ul>\n        </li>\n        <!-- end message dropdown -->\n        <!-- start manage user dropdown -->\n        <li class=\"dropdown dropdown-user\">\n          <a href=\"javascript:;\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" data-hover=\"dropdown\" data-close-others=\"true\">\n            <img alt=\"\" class=\"img-circle \" src=\"../assets/img/dp.jpg\">\n            <span class=\"username username-hide-on-mobile\"> Kiran </span>\n            <i class=\"fa fa-angle-down\"></i>\n          </a>\n          <ul class=\"dropdown-menu dropdown-menu-default\">\n            <li>\n              <a href=\"user_profile.html\">\n                <i class=\"icon-user\"></i> Profile </a>\n            </li>\n            <li>\n              <a href=\"#\">\n                <i class=\"icon-settings\"></i> Settings\n              </a>\n            </li>\n            <li>\n              <a href=\"#\">\n                <i class=\"icon-directions\"></i> Help\n              </a>\n            </li>\n            <li class=\"divider\"> </li>\n            <li>\n              <a href=\"lock_screen.html\">\n                <i class=\"icon-lock\"></i> Lock\n              </a>\n            </li>\n            <li>\n              <a href=\"login.html\">\n                <i class=\"icon-logout\"></i> Log Out </a>\n            </li>\n          </ul>\n        </li>\n        <!-- end manage user dropdown -->\n        <li class=\"dropdown dropdown-quick-sidebar-toggler\">\n          <a id=\"headerSettingButton\" class=\"mdl-button mdl-js-button mdl-button--icon pull-right\" data-upgraded=\",MaterialButton\">\n            <i class=\"material-icons\">more_vert</i>\n          </a>\n        </li>\n      </ul>\n    </div>\n  </div>\n  <!-- start horizontal menu -->\n  <div class=\"navbar-custom\">\n    <div class=\"hor-menu hidden-sm hidden-xs\">\n      <ul class=\"nav navbar-nav\">\n        <li class=\"mega-menu-dropdown \">\n          <a href=\"\" class=\"dropdown-toggle\"> <i class=\"material-icons\">dashboard</i> Dashboard\n            <i class=\"fa fa-angle-down\"></i>\n            <span class=\"arrow \"></span>\n          </a>\n          <ul class=\"dropdown-menu\" style=\"min-width: 200px;\">\n            <li>\n              <div class=\"mega-menu-content\">\n                <div class=\"row\">\n                  <div class=\"col-md-12\">\n                    <ul class=\"mega-menu-submenu\">\n                      <li>\n                        <a href=\"index.html\" class=\"nav-link \"> <span class=\"title\">Dashboard 1</span></a>\n                      </li>\n                      <li>\n                        <a href=\"dashboard2.html\" class=\"nav-link \"> <span class=\"title\">Dashboard 2</span></a>\n                      </li>\n                      <li>\n                        <a href=\"dashboard3.html\" class=\"nav-link \"><span class=\"title\">Dashboard 3</span></a>\n                      </li>\n                    </ul>\n                  </div>\n                </div>\n              </div>\n            </li>\n          </ul>\n        </li>\n        <li class=\"classic-menu-dropdown mega-menu-dropdown\">\n          <a href=\"\" class=\" megamenu-dropdown\" data-close-others=\"true\"> <i class=\"material-icons\">assignment</i> Manage\n            <i class=\"fa fa-angle-down\"></i>\n            <span class=\"arrow \"></span>\n          </a>\n          <ul class=\"dropdown-menu pull-left\">\n            <li class=\"dropdown-submenu\">\n              <a href=\"#\" class=\"nav-link nav-toggle\"> <i class=\"fa fa-user\"></i>\n                <span class=\"title\">Professors</span> <span class=\"arrow\"></span>\n              </a>\n              <ul class=\"dropdown-menu\">\n                <li class=\"nav-item\">\n                  <a href=\"all_professors.html\" class=\"nav-link \"> <span class=\"title\">All\n                      Professors</span>\n                  </a>\n                </li>\n                <li class=\"nav-item\">\n                  <a href=\"add_professor.html\" class=\"nav-link \"> <span class=\"title\">Add\n                      Professor</span>\n                  </a>\n                </li>\n                <li class=\"nav-item\">\n                  <a href=\"add_professor_bootstrap.html\" class=\"nav-link \"> <span class=\"title\">Add Professor Bootstrap</span>\n                  </a>\n                </li>\n                <li class=\"nav-item\">\n                  <a href=\"edit_professor.html\" class=\"nav-link \"> <span class=\"title\">Edit\n                      Professor</span>\n                  </a>\n                </li>\n                <li class=\"nav-item\">\n                  <a href=\"professor_profile.html\" class=\"nav-link \"> <span class=\"title\">About Professor</span>\n                  </a>\n                </li>\n              </ul>\n            </li>\n            <li class=\"dropdown-submenu\">\n              <a href=\"javascript:;\">\n                <i class=\"fa fa-users\"></i> Students</a>\n              <ul class=\"dropdown-menu\">\n                <li class=\"nav-item\">\n                  <a href=\"all_students.html\" class=\"nav-link \"> <span class=\"title\">All\n                      Students</span>\n                  </a>\n                </li>\n                <li class=\"nav-item\">\n                  <a href=\"add_student.html\" class=\"nav-link \"> <span class=\"title\">Add\n                      Student</span>\n                  </a>\n                </li>\n                <li class=\"nav-item\">\n                  <a href=\"add_student_bootstrap.html\" class=\"nav-link \"> <span class=\"title\">Add Student Bootstrap</span>\n                  </a>\n                </li>\n                <li class=\"nav-item\">\n                  <a href=\"edit_student.html\" class=\"nav-link \"> <span class=\"title\">Edit\n                      Student</span>\n                  </a>\n                </li>\n                <li class=\"nav-item\">\n                  <a href=\"student_profile.html\" class=\"nav-link \"> <span class=\"title\">About\n                      Student</span>\n                  </a>\n                </li>\n              </ul>\n            </li>\n            <li class=\"dropdown-submenu\">\n              <a href=\"javascript:;\">\n                <i class=\"fa fa-graduation-cap\" aria-hidden=\"true\"></i> Courses</a>\n              <ul class=\"dropdown-menu\">\n                <li class=\"nav-item\">\n                  <a href=\"all_courses.html\" class=\"nav-link \"> <span class=\"title\">All\n                      Courses</span>\n                  </a>\n                </li>\n                <li class=\"nav-item\">\n                  <a href=\"add_course.html\" class=\"nav-link \"> <span class=\"title\">Add\n                      Course</span>\n                  </a>\n                </li>\n                <li class=\"nav-item\">\n                  <a href=\"add_course_bootstrap.html\" class=\"nav-link \"> <span class=\"title\">Add Course Bootstrap</span>\n                  </a>\n                </li>\n                <li class=\"nav-item\">\n                  <a href=\"edit_course.html\" class=\"nav-link \"> <span class=\"title\">Edit\n                      Course</span>\n                  </a>\n                </li>\n                <li class=\"nav-item\">\n                  <a href=\"course_details.html\" class=\"nav-link \"> <span class=\"title\">About\n                      Course</span>\n                  </a>\n                </li>\n              </ul>\n            </li>\n            <li class=\"dropdown-submenu\">\n              <a href=\"javascript:;\">\n                <i class=\"fa fa-book\" aria-hidden=\"true\"></i> Library</a>\n              <ul class=\"dropdown-menu\">\n                <li class=\"nav-item\">\n                  <a href=\"all_assets.html\" class=\"nav-link \"> <span class=\"title\">All Library\n                      Assets</span>\n                  </a>\n                </li>\n                <li class=\"nav-item\">\n                  <a href=\"add_library.html\" class=\"nav-link \"> <span class=\"title\">Add\n                      Library Asset</span>\n                  </a>\n                </li>\n                <li class=\"nav-item\">\n                  <a href=\"add_library_bootstrap.html\" class=\"nav-link \"> <span class=\"title\">Add Asset Bootstrap</span>\n                  </a>\n                </li>\n                <li class=\"nav-item\">\n                  <a href=\"edit_library.html\" class=\"nav-link \"> <span class=\"title\">Edit\n                      Asset</span>\n                  </a>\n                </li>\n              </ul>\n            </li>\n            <li class=\"dropdown-submenu\">\n              <a href=\"javascript:;\">\n                <i class=\"fa fa-hospital-o\" aria-hidden=\"true\"></i> Departments</a>\n              <ul class=\"dropdown-menu\">\n                <li class=\"nav-item\">\n                  <a href=\"all_department.html\" class=\"nav-link \"> <span class=\"title\">All\n                      Departments</span>\n                  </a>\n                </li>\n                <li class=\"nav-item\">\n                  <a href=\"add_department.html\" class=\"nav-link \"> <span class=\"title\">Add\n                      Department</span>\n                  </a>\n                </li>\n                <li class=\"nav-item\">\n                  <a href=\"add_department_bootstrap.html\" class=\"nav-link \"> <span class=\"title\">Add Department Bootstrap</span>\n                  </a>\n                </li>\n                <li class=\"nav-item\">\n                  <a href=\"edit_department.html\" class=\"nav-link \"> <span class=\"title\">Edit\n                      Department</span>\n                  </a>\n                </li>\n              </ul>\n            </li>\n            <li class=\"dropdown-submenu\">\n              <a href=\"javascript:;\">\n                <i class=\"fa fa-user-circle-o\"></i> Staff</a>\n              <ul class=\"dropdown-menu\">\n                <li class=\"nav-item\">\n                  <a href=\"all_staffs.html\" class=\"nav-link \"> <span class=\"title\">All\n                      Staff</span>\n                  </a>\n                </li>\n                <li class=\"nav-item\">\n                  <a href=\"add_staff.html\" class=\"nav-link \"> <span class=\"title\">Add\n                      Staff</span>\n                  </a>\n                </li>\n                <li class=\"nav-item\">\n                  <a href=\"add_staff_bootstrap.html\" class=\"nav-link \"> <span class=\"title\">Add Staff Bootstrap</span>\n                  </a>\n                </li>\n                <li class=\"nav-item\">\n                  <a href=\"edit_staff.html\" class=\"nav-link \"> <span class=\"title\">Edit\n                      Staff</span>\n                  </a>\n                </li>\n                <li class=\"nav-item\">\n                  <a href=\"staff_profile.html\" class=\"nav-link \"> <span class=\"title\">Staff\n                      Profile</span>\n                  </a>\n                </li>\n              </ul>\n            </li>\n            <li class=\"dropdown-submenu\">\n              <a href=\"javascript:;\">\n                <i class=\"fa fa-usd\" aria-hidden=\"true\"></i> Fees</a>\n              <ul class=\"dropdown-menu\">\n                <li class=\"nav-item\">\n                  <a href=\"fees_collection.html\" class=\"nav-link \"> <span class=\"title\">Fees\n                      Collection</span>\n                  </a>\n                </li>\n                <li class=\"nav-item\">\n                  <a href=\"add_fees.html\" class=\"nav-link \"> <span class=\"title\">Add Fees\n                    </span>\n                  </a>\n                </li>\n                <li class=\"nav-item\">\n                  <a href=\"add_fees_bootstrap.html\" class=\"nav-link \"> <span class=\"title\">Add\n                      Fees Bootstrap</span>\n                  </a>\n                </li>\n                <li class=\"nav-item\">\n                  <a href=\"fees_receipt.html\" class=\"nav-link \"> <span class=\"title\">Fee\n                      Receipt</span>\n                  </a>\n                </li>\n              </ul>\n            </li>\n          </ul>\n        </li>\n        <li class=\"mega-menu-dropdown \">\n          <a href=\"event.html\" class=\"nav-link nav-toggle\"> <i class=\"material-icons\">event</i>\n            <span class=\"title\">Event Management</span>\n          </a>\n        </li>\n        <li class=\"mega-menu-dropdown \">\n          <a href=\"\" class=\"dropdown-toggle\"> <i class=\"material-icons\">email</i> Email\n            <i class=\"fa fa-angle-down\"></i>\n            <span class=\"arrow \"></span>\n          </a>\n          <ul class=\"dropdown-menu\" style=\"min-width: 200px;\">\n            <li>\n              <div class=\"mega-menu-content\">\n                <div class=\"row\">\n                  <div class=\"col-md-12\">\n                    <ul class=\"mega-menu-submenu\">\n                      <li>\n                        <a href=\"email_inbox.html\" class=\"nav-link \"> <span class=\"title\">Inbox</span></a>\n                      </li>\n                      <li>\n                        <a href=\"email_view.html\" class=\"nav-link \"> <span class=\"title\">View Email</span></a>\n                      </li>\n                      <li>\n                        <a href=\"email_compose.html\" class=\"nav-link \"><span class=\"title\">Compose Mail</span></a>\n                      </li>\n                    </ul>\n                  </div>\n                </div>\n              </div>\n            </li>\n          </ul>\n        </li>\n        <li class=\"mega-menu-dropdown mega-menu-dropdown\">\n          <a href=\"\" class=\"dropdown-toggle\"> <i class=\"material-icons\">dvr</i>UI Elements\n            <i class=\"fa fa-angle-down\"></i>\n            <span class=\"arrow \"></span>\n          </a>\n          <ul class=\"dropdown-menu pull-left\">\n            <li class=\"dropdown-submenu\">\n              <a href=\"javascript:;\">\n                <i class=\"fa fa-briefcase\"></i> Bootstrap Elements</a>\n              <ul class=\"dropdown-menu\">\n                <li class=\"nav-item  \">\n                  <a href=\"ui_buttons.html\" class=\"nav-link \">\n                    <span class=\"title\">Buttons</span>\n                  </a>\n                </li>\n                <li class=\"nav-item  \">\n                  <a href=\"ui_tabs_accordions_navs.html\" class=\"nav-link \">\n                    <span class=\"title\">Tabs &amp; Accordions</span>\n                  </a>\n                </li>\n                <li class=\"nav-item  \">\n                  <a href=\"ui_typography.html\" class=\"nav-link \">\n                    <span class=\"title\">Typography</span>\n                  </a>\n                </li>\n                <li class=\"nav-item  \">\n                  <a href=\"notification.html\" class=\"nav-link \">\n                    <span class=\"title\">Notifications</span>\n                  </a>\n                </li>\n                <li class=\"nav-item  \">\n                  <a href=\"ui_icons.html\" class=\"nav-link \">\n                    <span class=\"title\">Icons</span>\n                  </a>\n                </li>\n                <li class=\"nav-item  \">\n                  <a href=\"ui_panels.html\" class=\"nav-link \">\n                    <span class=\"title\">Panels</span>\n                  </a>\n                </li>\n                <li class=\"nav-item  \">\n                  <a href=\"ui_grid.html\" class=\"nav-link \">\n                    <span class=\"title\">Grids</span>\n                  </a>\n                </li>\n                <li class=\"nav-item  \">\n                  <a href=\"calendar.html\" class=\"nav-link \">\n                    <span class=\"title\">Calender</span>\n                  </a>\n                </li>\n                <li class=\"nav-item  \">\n                  <a href=\"ui_tree.html\" class=\"nav-link \">\n                    <span class=\"title\">Tree View</span>\n                  </a>\n                </li>\n                <li class=\"nav-item  \">\n                  <a href=\"ui_carousel.html\" class=\"nav-link \">\n                    <span class=\"title\">Carousel</span>\n                  </a>\n                </li>\n              </ul>\n            </li>\n            <li class=\"dropdown-submenu\">\n              <a href=\"javascript:;\">\n                <i class=\"fa fa-google\"></i> Material Elements</a>\n              <ul class=\"dropdown-menu\">\n                <li class=\"nav-item  \">\n                  <a href=\"material_button.html\" class=\"nav-link \">\n                    <span class=\"title\">Buttons</span>\n                  </a>\n                </li>\n                <li class=\"nav-item  \">\n                  <a href=\"material_tab.html\" class=\"nav-link \">\n                    <span class=\"title\">Tabs</span>\n                  </a>\n                </li>\n                <li class=\"nav-item  \">\n                  <a href=\"material_chips.html\" class=\"nav-link \">\n                    <span class=\"title\">Chips</span>\n                  </a>\n                </li>\n                <li class=\"nav-item  \">\n                  <a href=\"material_grid.html\" class=\"nav-link \">\n                    <span class=\"title\">Grid</span>\n                  </a>\n                </li>\n                <li class=\"nav-item  \">\n                  <a href=\"material_icons.html\" class=\"nav-link \">\n                    <span class=\"title\">Icon</span>\n                  </a>\n                </li>\n                <li class=\"nav-item  \">\n                  <a href=\"material_form.html\" class=\"nav-link \">\n                    <span class=\"title\">Form</span>\n                  </a>\n                </li>\n                <li class=\"nav-item  \">\n                  <a href=\"material_datepicker.html\" class=\"nav-link \">\n                    <span class=\"title\">DatePicker</span>\n                  </a>\n                </li>\n                <li class=\"nav-item  \">\n                  <a href=\"material_select.html\" class=\"nav-link \">\n                    <span class=\"title\">Select Item</span>\n                  </a>\n                </li>\n                <li class=\"nav-item  \">\n                  <a href=\"material_loading.html\" class=\"nav-link \">\n                    <span class=\"title\">Loading</span>\n                  </a>\n                </li>\n                <li class=\"nav-item  \">\n                  <a href=\"material_menu.html\" class=\"nav-link \">\n                    <span class=\"title\">Menu</span>\n                  </a>\n                </li>\n                <li class=\"nav-item  \">\n                  <a href=\"material_slider.html\" class=\"nav-link \">\n                    <span class=\"title\">Slider</span>\n                  </a>\n                </li>\n                <li class=\"nav-item  \">\n                  <a href=\"material_tables.html\" class=\"nav-link \">\n                    <span class=\"title\">Tables</span>\n                  </a>\n                </li>\n                <li class=\"nav-item  \">\n                  <a href=\"material_toggle.html\" class=\"nav-link \">\n                    <span class=\"title\">Toggle</span>\n                  </a>\n                </li>\n                <li class=\"nav-item  \">\n                  <a href=\"material_badges.html\" class=\"nav-link \">\n                    <span class=\"title\">Badges</span>\n                  </a>\n                </li>\n              </ul>\n            </li>\n          </ul>\n        </li>\n        <li class=\"mega-menu-dropdown active open\">\n          <a href=\"\" class=\"dropdown-toggle\"> <i class=\"material-icons\">subtitles</i> Forms\n            <i class=\"fa fa-angle-down\"></i>\n            <span class=\"selected\"></span>\n            <span class=\"arrow open\"></span>\n          </a>\n          <ul class=\"dropdown-menu\" style=\"min-width: 200px;\">\n            <li>\n              <div class=\"mega-menu-content\">\n                <div class=\"row\">\n                  <div class=\"col-md-12\">\n                    <ul class=\"mega-menu-submenu\">\n                      <li class=\"nav-item\">\n                        <a href=\"layouts_form.html\" class=\"nav-link \">\n                          <span class=\"title\">Form Layout</span>\n                        </a>\n                      </li>\n                      <li class=\"nav-item active\">\n                        <a href=\"advance_form.html\" class=\"nav-link \">\n                          <span class=\"title\">Advance Component</span>\n                          <span class=\"selected\"></span>\n                        </a>\n                      </li>\n                      <li class=\"nav-item\">\n                        <a href=\"wizard.html\" class=\"nav-link \">\n                          <span class=\"title\">Form Wizard</span>\n                        </a>\n                      </li>\n                      <li class=\"nav-item\">\n                        <a href=\"validation_form.html\" class=\"nav-link \">\n                          <span class=\"title\">Form Validation</span>\n                        </a>\n                      </li>\n                      <li class=\"nav-item\">\n                        <a href=\"editable_form.html\" class=\"nav-link \">\n                          <span class=\"title\">Editor</span>\n                        </a>\n                      </li>\n                    </ul>\n                  </div>\n                </div>\n              </div>\n            </li>\n          </ul>\n        </li>\n        <li class=\"mega-menu-dropdown \">\n          <a href=\"\" class=\"dropdown-toggle\"> <i class=\"material-icons\">list</i> Data Tables\n            <i class=\"fa fa-angle-down\"></i>\n          </a>\n          <ul class=\"dropdown-menu\" style=\"min-width: 200px;\">\n            <li>\n              <div class=\"mega-menu-content\">\n                <div class=\"row\">\n                  <div class=\"col-md-12\">\n                    <ul class=\"mega-menu-submenu\">\n                      <li class=\"nav-item\">\n                        <a href=\"basic_table.html\" class=\"nav-link \">\n                          <span class=\"title\">Basic Tables</span>\n                        </a>\n                      </li>\n                      <li class=\"nav-item\">\n                        <a href=\"advanced_table.html\" class=\"nav-link \">\n                          <span class=\"title\">Advance Tables</span>\n                        </a>\n                      </li>\n                      <li class=\"nav-item\">\n                        <a href=\"export_table.html\" class=\"nav-link \">\n                          <span class=\"title\">Export Tables</span>\n                        </a>\n                      </li>\n                      <li class=\"nav-item\">\n                        <a href=\"child_row_table.html\" class=\"nav-link \">\n                          <span class=\"title\">Child Row Tables</span>\n                        </a>\n                      </li>\n                      <li class=\"nav-item\">\n                        <a href=\"group_table.html\" class=\"nav-link \">\n                          <span class=\"title\">Grouping</span>\n                        </a>\n                      </li>\n                      <li class=\"nav-item\">\n                        <a href=\"tableData.html\" class=\"nav-link \">\n                          <span class=\"title\">Tables With Sourced Data</span>\n                        </a>\n                      </li>\n                    </ul>\n                  </div>\n                </div>\n              </div>\n            </li>\n          </ul>\n        </li>\n        <li class=\"mega-menu-dropdown \">\n          <a href=\"\" class=\"dropdown-toggle\"> <i class=\"material-icons\">timeline</i> Charts\n            <i class=\"fa fa-angle-down\"></i>\n          </a>\n          <ul class=\"dropdown-menu\" style=\"min-width: 200px;\">\n            <li>\n              <div class=\"mega-menu-content\">\n                <div class=\"row\">\n                  <div class=\"col-md-12\">\n                    <ul class=\"mega-menu-submenu\">\n                      <li class=\"nav-item\">\n                        <a href=\"charts_echarts.html\" class=\"nav-link \">\n                          <span class=\"title\">eCharts</span>\n                        </a>\n                      </li>\n                      <li class=\"nav-item\">\n                        <a href=\"charts_morris.html\" class=\"nav-link \">\n                          <span class=\"title\">Morris Charts</span>\n                        </a>\n                      </li>\n                      <li class=\"nav-item\">\n                        <a href=\"charts_chartjs.html\" class=\"nav-link \">\n                          <span class=\"title\">Chartjs</span>\n                        </a>\n                      </li>\n                    </ul>\n                  </div>\n                </div>\n              </div>\n            </li>\n          </ul>\n        </li>\n        <li class=\"mega-menu-dropdown \">\n          <a href=\"\" class=\"dropdown-toggle\"> <i class=\"material-icons\">map</i> Maps\n            <i class=\"fa fa-angle-down\"></i>\n          </a>\n          <ul class=\"dropdown-menu\" style=\"min-width: 200px;\">\n            <li>\n              <div class=\"mega-menu-content\">\n                <div class=\"row\">\n                  <div class=\"col-md-12\">\n                    <ul class=\"mega-menu-submenu\">\n                      <li class=\"nav-item\">\n                        <a href=\"google_maps.html\" class=\"nav-link \">\n                          <span class=\"title\">Google Maps</span>\n                        </a>\n                      </li>\n                      <li class=\"nav-item\">\n                        <a href=\"vector_maps.html\" class=\"nav-link \">\n                          <span class=\"title\">Vector Maps</span>\n                        </a>\n                      </li>\n                    </ul>\n                  </div>\n                </div>\n              </div>\n            </li>\n          </ul>\n        </li>\n        <li class=\"mega-menu-dropdown \">\n          <a href=\"\" class=\"dropdown-toggle\"> <i class=\"material-icons\">description</i> Extra pages\n            <i class=\"fa fa-angle-down\"></i>\n          </a>\n          <ul class=\"dropdown-menu\" style=\"min-width: 200px;\">\n            <li>\n              <div class=\"mega-menu-content\">\n                <div class=\"row\">\n                  <div class=\"col-md-12\">\n                    <ul class=\"mega-menu-submenu\">\n                      <li class=\"nav-item  \">\n                        <a href=\"login.html\" class=\"nav-link \"> <span class=\"title\">Login</span>\n                        </a>\n                      </li>\n                      <li class=\"nav-item  \">\n                        <a href=\"sign_up.html\" class=\"nav-link \"> <span class=\"title\">Sign Up</span>\n                        </a>\n                      </li>\n                      <li class=\"nav-item  \">\n                        <a href=\"forgot_password.html\" class=\"nav-link \"> <span class=\"title\">Forgot Password</span>\n                        </a>\n                      </li>\n                      <li class=\"nav-item\"><a href=\"user_profile.html\" class=\"nav-link \"><span class=\"title\">Profile</span>\n                        </a>\n                      </li>\n                      <li class=\"nav-item\">\n                        <a href=\"contact.html\" class=\"nav-link \"> <span class=\"title\">Contact Us</span>\n                        </a>\n                      </li>\n                      <li class=\"nav-item\">\n                        <a href=\"lock_screen.html\" class=\"nav-link \"> <span class=\"title\">Lock Screen</span>\n                        </a>\n                      </li>\n                      <li class=\"nav-item\">\n                        <a href=\"page-404.html\" class=\"nav-link \"> <span class=\"title\">404 Page</span>\n                        </a>\n                      </li>\n                      <li class=\"nav-item\">\n                        <a href=\"page-500.html\" class=\"nav-link \"> <span class=\"title\">500 Page</span>\n                        </a>\n                      </li>\n                      <li class=\"nav-item\">\n                        <a href=\"blank_page.html\" class=\"nav-link \"> <span class=\"title\">Blank Page</span>\n                        </a>\n                      </li>\n                    </ul>\n                  </div>\n                </div>\n              </div>\n            </li>\n          </ul>\n        </li>\n        <li class=\"mega-menu-dropdown active open\">\n          <a href=\"\" class=\"dropdown-toggle\"> <i class=\"material-icons\">subtitles</i> Forms\n            <i class=\"fa fa-angle-down\"></i>\n            <span class=\"selected\"></span>\n            <span class=\"arrow open\"></span>\n          </a>\n          <ul class=\"dropdown-menu\" style=\"min-width: 200px;\">\n            <li>\n              <div class=\"mega-menu-content\">\n                <div class=\"row\">\n                  <div class=\"col-md-12\">\n                    <ul class=\"mega-menu-submenu\">\n                      <li class=\"nav-item\">\n                        <a href=\"layouts_form.html\" class=\"nav-link \">\n                          <span class=\"title\">Form Layout</span>\n                        </a>\n                      </li>\n                      <li class=\"nav-item active\">\n                        <a href=\"advance_form.html\" class=\"nav-link \">\n                          <span class=\"title\">Advance Component</span>\n                          <span class=\"selected\"></span>\n                        </a>\n                      </li>\n                      <li class=\"nav-item\">\n                        <a href=\"wizard.html\" class=\"nav-link \">\n                          <span class=\"title\">Form Wizard</span>\n                        </a>\n                      </li>\n                      <li class=\"nav-item\">\n                        <a href=\"validation_form.html\" class=\"nav-link \">\n                          <span class=\"title\">Form Validation</span>\n                        </a>\n                      </li>\n                      <li class=\"nav-item\">\n                        <a href=\"editable_form.html\" class=\"nav-link \">\n                          <span class=\"title\">Editor</span>\n                        </a>\n                      </li>\n                    </ul>\n                  </div>\n                </div>\n              </div>\n            </li>\n          </ul>\n        </li>\n        <li class=\"mega-menu-dropdown \">\n          <a href=\"\" class=\"dropdown-toggle\"> <i class=\"material-icons\">list</i> Data Tables\n            <i class=\"fa fa-angle-down\"></i>\n          </a>\n          <ul class=\"dropdown-menu\" style=\"min-width: 200px;\">\n            <li>\n              <div class=\"mega-menu-content\">\n                <div class=\"row\">\n                  <div class=\"col-md-12\">\n                    <ul class=\"mega-menu-submenu\">\n                      <li class=\"nav-item\">\n                        <a href=\"basic_table.html\" class=\"nav-link \">\n                          <span class=\"title\">Basic Tables</span>\n                        </a>\n                      </li>\n                      <li class=\"nav-item\">\n                        <a href=\"advanced_table.html\" class=\"nav-link \">\n                          <span class=\"title\">Advance Tables</span>\n                        </a>\n                      </li>\n                      <li class=\"nav-item\">\n                        <a href=\"export_table.html\" class=\"nav-link \">\n                          <span class=\"title\">Export Tables</span>\n                        </a>\n                      </li>\n                      <li class=\"nav-item\">\n                        <a href=\"child_row_table.html\" class=\"nav-link \">\n                          <span class=\"title\">Child Row Tables</span>\n                        </a>\n                      </li>\n                      <li class=\"nav-item\">\n                        <a href=\"group_table.html\" class=\"nav-link \">\n                          <span class=\"title\">Grouping</span>\n                        </a>\n                      </li>\n                      <li class=\"nav-item\">\n                        <a href=\"tableData.html\" class=\"nav-link \">\n                          <span class=\"title\">Tables With Sourced Data</span>\n                        </a>\n                      </li>\n                    </ul>\n                  </div>\n                </div>\n              </div>\n            </li>\n          </ul>\n        </li>\n        <li class=\"mega-menu-dropdown \">\n          <a href=\"\" class=\"dropdown-toggle\"> <i class=\"material-icons\">timeline</i> Charts\n            <i class=\"fa fa-angle-down\"></i>\n          </a>\n          <ul class=\"dropdown-menu\" style=\"min-width: 200px;\">\n            <li>\n              <div class=\"mega-menu-content\">\n                <div class=\"row\">\n                  <div class=\"col-md-12\">\n                    <ul class=\"mega-menu-submenu\">\n                      <li class=\"nav-item\">\n                        <a href=\"charts_echarts.html\" class=\"nav-link \">\n                          <span class=\"title\">eCharts</span>\n                        </a>\n                      </li>\n                      <li class=\"nav-item\">\n                        <a href=\"charts_morris.html\" class=\"nav-link \">\n                          <span class=\"title\">Morris Charts</span>\n                        </a>\n                      </li>\n                      <li class=\"nav-item\">\n                        <a href=\"charts_chartjs.html\" class=\"nav-link \">\n                          <span class=\"title\">Chartjs</span>\n                        </a>\n                      </li>\n                    </ul>\n                  </div>\n                </div>\n              </div>\n            </li>\n          </ul>\n        </li>\n        <li class=\"mega-menu-dropdown \">\n          <a href=\"\" class=\"dropdown-toggle\"> <i class=\"material-icons\">map</i> Maps\n            <i class=\"fa fa-angle-down\"></i>\n          </a>\n          <ul class=\"dropdown-menu\" style=\"min-width: 200px;\">\n            <li>\n              <div class=\"mega-menu-content\">\n                <div class=\"row\">\n                  <div class=\"col-md-12\">\n                    <ul class=\"mega-menu-submenu\">\n                      <li class=\"nav-item\">\n                        <a href=\"google_maps.html\" class=\"nav-link \">\n                          <span class=\"title\">Google Maps</span>\n                        </a>\n                      </li>\n                      <li class=\"nav-item\">\n                        <a href=\"vector_maps.html\" class=\"nav-link \">\n                          <span class=\"title\">Vector Maps</span>\n                        </a>\n                      </li>\n                    </ul>\n                  </div>\n                </div>\n              </div>\n            </li>\n          </ul>\n        </li>\n        <li class=\"mega-menu-dropdown \">\n          <a href=\"\" class=\"dropdown-toggle\"> <i class=\"material-icons\">description</i> Extra pages\n            <i class=\"fa fa-angle-down\"></i>\n          </a>\n          <ul class=\"dropdown-menu\" style=\"min-width: 200px;\">\n            <li>\n              <div class=\"mega-menu-content\">\n                <div class=\"row\">\n                  <div class=\"col-md-12\">\n                    <ul class=\"mega-menu-submenu\">\n                      <li class=\"nav-item  \">\n                        <a href=\"login.html\" class=\"nav-link \"> <span class=\"title\">Login</span>\n                        </a>\n                      </li>\n                      <li class=\"nav-item  \">\n                        <a href=\"sign_up.html\" class=\"nav-link \"> <span class=\"title\">Sign Up</span>\n                        </a>\n                      </li>\n                      <li class=\"nav-item  \">\n                        <a href=\"forgot_password.html\" class=\"nav-link \"> <span class=\"title\">Forgot Password</span>\n                        </a>\n                      </li>\n                      <li class=\"nav-item\"><a href=\"user_profile.html\" class=\"nav-link \"><span class=\"title\">Profile</span>\n                        </a>\n                      </li>\n                      <li class=\"nav-item\">\n                        <a href=\"contact.html\" class=\"nav-link \"> <span class=\"title\">Contact Us</span>\n                        </a>\n                      </li>\n                      <li class=\"nav-item\">\n                        <a href=\"lock_screen.html\" class=\"nav-link \"> <span class=\"title\">Lock Screen</span>\n                        </a>\n                      </li>\n                      <li class=\"nav-item\">\n                        <a href=\"page-404.html\" class=\"nav-link \"> <span class=\"title\">404 Page</span>\n                        </a>\n                      </li>\n                      <li class=\"nav-item\">\n                        <a href=\"page-500.html\" class=\"nav-link \"> <span class=\"title\">500 Page</span>\n                        </a>\n                      </li>\n                      <li class=\"nav-item\">\n                        <a href=\"blank_page.html\" class=\"nav-link \"> <span class=\"title\">Blank Page</span>\n                        </a>\n                      </li>\n                    </ul>\n                  </div>\n                </div>\n              </div>\n            </li>\n          </ul>\n        </li>\n      </ul>\n    </div>\n  </div>\n  <!-- end horizontal menu -->\n</div>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./dashboard/dashboard.component */
    "./src/app/dashboard/dashboard.component.ts");
    /* harmony import */


    var _test_test_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./test/test.component */
    "./src/app/test/test.component.ts");
    /* harmony import */


    var _authentification_authentification_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./authentification/authentification.component */
    "./src/app/authentification/authentification.component.ts");
    /* harmony import */


    var _saisi_bon_saisi_bon_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./saisi-bon/saisi-bon.component */
    "./src/app/saisi-bon/saisi-bon.component.ts");
    /* harmony import */


    var _export_export_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./export/export.component */
    "./src/app/export/export.component.ts");
    /* harmony import */


    var _import_import_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./import/import.component */
    "./src/app/import/import.component.ts");

    var routes = [{
      path: "dashboard",
      component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"]
    }, {
      path: "test",
      component: _test_test_component__WEBPACK_IMPORTED_MODULE_4__["TestComponent"]
    }, {
      path: "auth",
      component: _authentification_authentification_component__WEBPACK_IMPORTED_MODULE_5__["AuthentificationComponent"]
    }, {
      path: "SaisiBon",
      component: _saisi_bon_saisi_bon_component__WEBPACK_IMPORTED_MODULE_6__["SaisiBonComponent"]
    }, {
      path: "export",
      component: _export_export_component__WEBPACK_IMPORTED_MODULE_7__["ExportComponent"]
    }, {
      path: "import",
      component: _import_import_component__WEBPACK_IMPORTED_MODULE_8__["ImportComponent"]
    }, {
      path: "",
      redirectTo: "/auth",
      pathMatch: "full"
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'track4trace';
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./navbar/navbar.component */
    "./src/app/navbar/navbar.component.ts");
    /* harmony import */


    var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./dashboard/dashboard.component */
    "./src/app/dashboard/dashboard.component.ts");
    /* harmony import */


    var _test_test_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./test/test.component */
    "./src/app/test/test.component.ts");
    /* harmony import */


    var _authentification_authentification_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./authentification/authentification.component */
    "./src/app/authentification/authentification.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _global_global_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./global/global.component */
    "./src/app/global/global.component.ts");
    /* harmony import */


    var _saisi_bon_saisi_bon_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./saisi-bon/saisi-bon.component */
    "./src/app/saisi-bon/saisi-bon.component.ts");
    /* harmony import */


    var _export_export_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./export/export.component */
    "./src/app/export/export.component.ts");
    /* harmony import */


    var _import_import_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./import/import.component */
    "./src/app/import/import.component.ts");
    /* harmony import */


    var _colisage_colisage_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./colisage/colisage.component */
    "./src/app/colisage/colisage.component.ts");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./footer/footer.component */
    "./src/app/footer/footer.component.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"], _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__["DashboardComponent"], _test_test_component__WEBPACK_IMPORTED_MODULE_8__["TestComponent"], _authentification_authentification_component__WEBPACK_IMPORTED_MODULE_9__["AuthentificationComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"], _global_global_component__WEBPACK_IMPORTED_MODULE_11__["GlobalComponent"], _saisi_bon_saisi_bon_component__WEBPACK_IMPORTED_MODULE_12__["SaisiBonComponent"], _export_export_component__WEBPACK_IMPORTED_MODULE_13__["ExportComponent"], _import_import_component__WEBPACK_IMPORTED_MODULE_14__["ImportComponent"], _colisage_colisage_component__WEBPACK_IMPORTED_MODULE_15__["ColisageComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_16__["FooterComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_17__["ToastrModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/authentification/authentification.component.css":
  /*!*****************************************************************!*\
    !*** ./src/app/authentification/authentification.component.css ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAuthentificationAuthentificationComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/* BASIC */\r\n\r\nhtml {\r\n  background-color: #56baed;\r\n}\r\n\r\nbody {\r\n  font-family: \"Poppins\", sans-serif;\r\n  height: 100vh;\r\n}\r\n\r\na {\r\n  color: #92badd;\r\n  display: inline-block;\r\n  text-decoration: none;\r\n  font-weight: 400;\r\n}\r\n\r\nh2 {\r\n  text-align: center;\r\n  font-size: 16px;\r\n  font-weight: 600;\r\n  text-transform: uppercase;\r\n  display: inline-block;\r\n  margin: 40px 8px 10px 8px;\r\n  color: #cccccc;\r\n}\r\n\r\n/* STRUCTURE */\r\n\r\n.wrapper {\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-align: center;\r\n          align-items: center;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n          flex-direction: column;\r\n  -webkit-box-pack: center;\r\n          justify-content: center;\r\n  width: 100%;\r\n  min-height: 100%;\r\n  padding: 20px;\r\n}\r\n\r\n#formContent {\r\n  border-radius: 10px 10px 10px 10px;\r\n  background: #fff;\r\n  padding: 30px;\r\n  width: 90%;\r\n  max-width: 450px;\r\n  position: relative;\r\n  padding: 0px;\r\n  box-shadow: 0 30px 60px 0 rgba(0, 0, 0, 0.3);\r\n  text-align: center;\r\n}\r\n\r\n#formFooter {\r\n  background-color: #f6f6f6;\r\n  border-top: 1px solid #dce8f1;\r\n  padding: 25px;\r\n  text-align: center;\r\n  border-radius: 0 0 10px 10px;\r\n}\r\n\r\n/* TABS */\r\n\r\nh2.inactive {\r\n  color: #cccccc;\r\n}\r\n\r\nh2.active {\r\n  color: #0d0d0d;\r\n  border-bottom: 2px solid #5fbae9;\r\n}\r\n\r\n/* FORM TYPOGRAPHY*/\r\n\r\ninput[type=\"button\"],\r\ninput[type=\"submit\"],\r\ninput[type=\"reset\"] {\r\n  background-color: #56baed;\r\n  border: none;\r\n  color: white;\r\n  padding: 15px 80px;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  display: inline-block;\r\n  text-transform: uppercase;\r\n  font-size: 13px;\r\n  box-shadow: 0 10px 30px 0 rgba(95, 186, 233, 0.4);\r\n  border-radius: 5px 5px 5px 5px;\r\n  margin: 5px 20px 40px 20px;\r\n  -webkit-transition: all 0.3s ease-in-out;\r\n  transition: all 0.3s ease-in-out;\r\n}\r\n\r\ninput[type=\"button\"]:hover,\r\ninput[type=\"submit\"]:hover,\r\ninput[type=\"reset\"]:hover {\r\n  background-color: #39ace7;\r\n}\r\n\r\ninput[type=\"button\"]:active,\r\ninput[type=\"submit\"]:active,\r\ninput[type=\"reset\"]:active {\r\n  -webkit-transform: scale(0.95);\r\n  transform: scale(0.95);\r\n}\r\n\r\ninput[type=\"text\"] {\r\n  background-color: #f6f6f6;\r\n  border: none;\r\n  color: #0d0d0d;\r\n  padding: 15px 32px;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  display: inline-block;\r\n  font-size: 16px;\r\n  margin: 5px;\r\n  width: 85%;\r\n  border: 2px solid #f6f6f6;\r\n  -webkit-transition: all 0.5s ease-in-out;\r\n  transition: all 0.5s ease-in-out;\r\n  border-radius: 5px 5px 5px 5px;\r\n}\r\n\r\ninput[type=\"text\"]:focus {\r\n  background-color: #fff;\r\n  border-bottom: 2px solid #5fbae9;\r\n}\r\n\r\ninput[type=\"text\"]:placeholder {\r\n  color: #cccccc;\r\n}\r\n\r\n/* ANIMATIONS */\r\n\r\n/* Simple CSS3 Fade-in-down Animation */\r\n\r\n.fadeInDown {\r\n  -webkit-animation-name: fadeInDown;\r\n  animation-name: fadeInDown;\r\n  -webkit-animation-duration: 1s;\r\n  animation-duration: 1s;\r\n  -webkit-animation-fill-mode: both;\r\n  animation-fill-mode: both;\r\n}\r\n\r\n@-webkit-keyframes fadeInDown {\r\n  0% {\r\n    opacity: 0;\r\n    -webkit-transform: translate3d(0, -100%, 0);\r\n    transform: translate3d(0, -100%, 0);\r\n  }\r\n  100% {\r\n    opacity: 1;\r\n    -webkit-transform: none;\r\n    transform: none;\r\n  }\r\n}\r\n\r\n@keyframes fadeInDown {\r\n  0% {\r\n    opacity: 0;\r\n    -webkit-transform: translate3d(0, -100%, 0);\r\n    transform: translate3d(0, -100%, 0);\r\n  }\r\n  100% {\r\n    opacity: 1;\r\n    -webkit-transform: none;\r\n    transform: none;\r\n  }\r\n}\r\n\r\n/* Simple CSS3 Fade-in Animation */\r\n\r\n@-webkit-keyframes fadeIn {\r\n  from {\r\n    opacity: 0;\r\n  }\r\n  to {\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n@keyframes fadeIn {\r\n  from {\r\n    opacity: 0;\r\n  }\r\n  to {\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n.fadeIn {\r\n  opacity: 0;\r\n  -webkit-animation: fadeIn ease-in 1;\r\n  animation: fadeIn ease-in 1;\r\n\r\n  -webkit-animation-fill-mode: forwards;\r\n  animation-fill-mode: forwards;\r\n\r\n  -webkit-animation-duration: 1s;\r\n  animation-duration: 1s;\r\n}\r\n\r\n.fadeIn.first {\r\n  -webkit-animation-delay: 0.4s;\r\n  animation-delay: 0.4s;\r\n}\r\n\r\n.fadeIn.second {\r\n  -webkit-animation-delay: 0.6s;\r\n  animation-delay: 0.6s;\r\n}\r\n\r\n.fadeIn.third {\r\n  -webkit-animation-delay: 0.8s;\r\n  animation-delay: 0.8s;\r\n}\r\n\r\n.fadeIn.fourth {\r\n  -webkit-animation-delay: 1s;\r\n  animation-delay: 1s;\r\n}\r\n\r\n/* Simple CSS3 Fade-in Animation */\r\n\r\n.underlineHover:after {\r\n  display: block;\r\n  left: 0;\r\n  bottom: -10px;\r\n  width: 0;\r\n  height: 2px;\r\n  background-color: #56baed;\r\n  content: \"\";\r\n  -webkit-transition: width 0.2s;\r\n  transition: width 0.2s;\r\n}\r\n\r\n.underlineHover:hover {\r\n  color: #0d0d0d;\r\n}\r\n\r\n.underlineHover:hover:after {\r\n  width: 100%;\r\n}\r\n\r\n/* OTHERS */\r\n\r\n*:focus {\r\n  outline: none;\r\n}\r\n\r\n#icon {\r\n  width: 60%;\r\n}\r\n\r\n.customImg {\r\n  width: 200px !important;\r\n  padding-top: 30px;\r\n  padding-bottom: 30px;\r\n}\r\n\r\n.customBtn {\r\n  margin-top: 30px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aGVudGlmaWNhdGlvbi9hdXRoZW50aWZpY2F0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsVUFBVTs7QUFFVjtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGtDQUFrQztFQUNsQyxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxjQUFjO0VBQ2QscUJBQXFCO0VBQ3JCLHFCQUFxQjtFQUNyQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIscUJBQXFCO0VBQ3JCLHlCQUF5QjtFQUN6QixjQUFjO0FBQ2hCOztBQUVBLGNBQWM7O0FBRWQ7RUFDRSxvQkFBYTtFQUFiLGFBQWE7RUFDYix5QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLDRCQUFzQjtFQUF0Qiw2QkFBc0I7VUFBdEIsc0JBQXNCO0VBQ3RCLHdCQUF1QjtVQUF2Qix1QkFBdUI7RUFDdkIsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixhQUFhO0FBQ2Y7O0FBRUE7RUFFRSxrQ0FBa0M7RUFDbEMsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixZQUFZO0VBRVosNENBQTRDO0VBQzVDLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6Qiw2QkFBNkI7RUFDN0IsYUFBYTtFQUNiLGtCQUFrQjtFQUVsQiw0QkFBNEI7QUFDOUI7O0FBRUEsU0FBUzs7QUFFVDtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZ0NBQWdDO0FBQ2xDOztBQUVBLG1CQUFtQjs7QUFFbkI7OztFQUdFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLHFCQUFxQjtFQUNyQix5QkFBeUI7RUFDekIsZUFBZTtFQUVmLGlEQUFpRDtFQUVqRCw4QkFBOEI7RUFDOUIsMEJBQTBCO0VBQzFCLHdDQUF3QztFQUl4QyxnQ0FBZ0M7QUFDbEM7O0FBRUE7OztFQUdFLHlCQUF5QjtBQUMzQjs7QUFFQTs7O0VBSUUsOEJBQThCO0VBRzlCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osY0FBYztFQUNkLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsV0FBVztFQUNYLFVBQVU7RUFDVix5QkFBeUI7RUFDekIsd0NBQXdDO0VBSXhDLGdDQUFnQztFQUVoQyw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQSxlQUFlOztBQUVmLHVDQUF1Qzs7QUFDdkM7RUFDRSxrQ0FBa0M7RUFDbEMsMEJBQTBCO0VBQzFCLDhCQUE4QjtFQUM5QixzQkFBc0I7RUFDdEIsaUNBQWlDO0VBQ2pDLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFO0lBQ0UsVUFBVTtJQUNWLDJDQUEyQztJQUMzQyxtQ0FBbUM7RUFDckM7RUFDQTtJQUNFLFVBQVU7SUFDVix1QkFBdUI7SUFDdkIsZUFBZTtFQUNqQjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxVQUFVO0lBQ1YsMkNBQTJDO0lBQzNDLG1DQUFtQztFQUNyQztFQUNBO0lBQ0UsVUFBVTtJQUNWLHVCQUF1QjtJQUN2QixlQUFlO0VBQ2pCO0FBQ0Y7O0FBRUEsa0NBQWtDOztBQUNsQztFQUNFO0lBQ0UsVUFBVTtFQUNaO0VBQ0E7SUFDRSxVQUFVO0VBQ1o7QUFDRjs7QUFTQTtFQUNFO0lBQ0UsVUFBVTtFQUNaO0VBQ0E7SUFDRSxVQUFVO0VBQ1o7QUFDRjs7QUFFQTtFQUNFLFVBQVU7RUFDVixtQ0FBbUM7RUFFbkMsMkJBQTJCOztFQUUzQixxQ0FBcUM7RUFFckMsNkJBQTZCOztFQUU3Qiw4QkFBOEI7RUFFOUIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsNkJBQTZCO0VBRTdCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLDZCQUE2QjtFQUU3QixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSw2QkFBNkI7RUFFN0IscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsMkJBQTJCO0VBRTNCLG1CQUFtQjtBQUNyQjs7QUFFQSxrQ0FBa0M7O0FBQ2xDO0VBQ0UsY0FBYztFQUNkLE9BQU87RUFDUCxhQUFhO0VBQ2IsUUFBUTtFQUNSLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsV0FBVztFQUNYLDhCQUFzQjtFQUF0QixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBLFdBQVc7O0FBRVg7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBQ0E7RUFDRSx1QkFBdUI7RUFDdkIsaUJBQWlCO0VBQ2pCLG9CQUFvQjtBQUN0Qjs7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJzcmMvYXBwL2F1dGhlbnRpZmljYXRpb24vYXV0aGVudGlmaWNhdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQkFTSUMgKi9cclxuXHJcbmh0bWwge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM1NmJhZWQ7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG59XHJcblxyXG5hIHtcclxuICBjb2xvcjogIzkyYmFkZDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbn1cclxuXHJcbmgyIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgbWFyZ2luOiA0MHB4IDhweCAxMHB4IDhweDtcclxuICBjb2xvcjogI2NjY2NjYztcclxufVxyXG5cclxuLyogU1RSVUNUVVJFICovXHJcblxyXG4ud3JhcHBlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWluLWhlaWdodDogMTAwJTtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcblxyXG4jZm9ybUNvbnRlbnQge1xyXG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDEwcHggMTBweDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMTBweCAxMHB4O1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgcGFkZGluZzogMzBweDtcclxuICB3aWR0aDogOTAlO1xyXG4gIG1heC13aWR0aDogNDUwcHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHBhZGRpbmc6IDBweDtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMzBweCA2MHB4IDAgcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4gIGJveC1zaGFkb3c6IDAgMzBweCA2MHB4IDAgcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuI2Zvcm1Gb290ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNmY2ZjY7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkY2U4ZjE7XHJcbiAgcGFkZGluZzogMjVweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAwIDAgMTBweCAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDAgMCAxMHB4IDEwcHg7XHJcbn1cclxuXHJcbi8qIFRBQlMgKi9cclxuXHJcbmgyLmluYWN0aXZlIHtcclxuICBjb2xvcjogI2NjY2NjYztcclxufVxyXG5cclxuaDIuYWN0aXZlIHtcclxuICBjb2xvcjogIzBkMGQwZDtcclxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzVmYmFlOTtcclxufVxyXG5cclxuLyogRk9STSBUWVBPR1JBUEhZKi9cclxuXHJcbmlucHV0W3R5cGU9XCJidXR0b25cIl0sXHJcbmlucHV0W3R5cGU9XCJzdWJtaXRcIl0sXHJcbmlucHV0W3R5cGU9XCJyZXNldFwiXSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU2YmFlZDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDE1cHggODBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMTBweCAzMHB4IDAgcmdiYSg5NSwgMTg2LCAyMzMsIDAuNCk7XHJcbiAgYm94LXNoYWRvdzogMCAxMHB4IDMwcHggMCByZ2JhKDk1LCAxODYsIDIzMywgMC40KTtcclxuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDVweCA1cHggNXB4IDVweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHggNXB4IDVweCA1cHg7XHJcbiAgbWFyZ2luOiA1cHggMjBweCA0MHB4IDIwcHg7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcclxuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xyXG4gIC1tcy10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcclxuICAtby10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuaW5wdXRbdHlwZT1cImJ1dHRvblwiXTpob3ZlcixcclxuaW5wdXRbdHlwZT1cInN1Ym1pdFwiXTpob3ZlcixcclxuaW5wdXRbdHlwZT1cInJlc2V0XCJdOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzlhY2U3O1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPVwiYnV0dG9uXCJdOmFjdGl2ZSxcclxuaW5wdXRbdHlwZT1cInN1Ym1pdFwiXTphY3RpdmUsXHJcbmlucHV0W3R5cGU9XCJyZXNldFwiXTphY3RpdmUge1xyXG4gIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC45NSk7XHJcbiAgLW8tdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcclxuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPVwidGV4dFwiXSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjZmNjtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgY29sb3I6ICMwZDBkMGQ7XHJcbiAgcGFkZGluZzogMTVweCAzMnB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBtYXJnaW46IDVweDtcclxuICB3aWR0aDogODUlO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICNmNmY2ZjY7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcclxuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xyXG4gIC1tcy10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcclxuICAtby10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcclxuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDVweCA1cHggNXB4IDVweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHggNXB4IDVweCA1cHg7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9XCJ0ZXh0XCJdOmZvY3VzIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjNWZiYWU5O1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPVwidGV4dFwiXTpwbGFjZWhvbGRlciB7XHJcbiAgY29sb3I6ICNjY2NjY2M7XHJcbn1cclxuXHJcbi8qIEFOSU1BVElPTlMgKi9cclxuXHJcbi8qIFNpbXBsZSBDU1MzIEZhZGUtaW4tZG93biBBbmltYXRpb24gKi9cclxuLmZhZGVJbkRvd24ge1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGZhZGVJbkRvd247XHJcbiAgYW5pbWF0aW9uLW5hbWU6IGZhZGVJbkRvd247XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDFzO1xyXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xyXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XHJcbn1cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlSW5Eb3duIHtcclxuICAwJSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMDAlLCAwKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTEwMCUsIDApO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogbm9uZTtcclxuICAgIHRyYW5zZm9ybTogbm9uZTtcclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgZmFkZUluRG93biB7XHJcbiAgMCUge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTAwJSwgMCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMDAlLCAwKTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IG5vbmU7XHJcbiAgICB0cmFuc2Zvcm06IG5vbmU7XHJcbiAgfVxyXG59XHJcblxyXG4vKiBTaW1wbGUgQ1NTMyBGYWRlLWluIEFuaW1hdGlvbiAqL1xyXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZUluIHtcclxuICBmcm9tIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG4gIHRvIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG59XHJcbkAtbW96LWtleWZyYW1lcyBmYWRlSW4ge1xyXG4gIGZyb20ge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcbiAgdG8ge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbn1cclxuQGtleWZyYW1lcyBmYWRlSW4ge1xyXG4gIGZyb20ge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcbiAgdG8ge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbn1cclxuXHJcbi5mYWRlSW4ge1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgLXdlYmtpdC1hbmltYXRpb246IGZhZGVJbiBlYXNlLWluIDE7XHJcbiAgLW1vei1hbmltYXRpb246IGZhZGVJbiBlYXNlLWluIDE7XHJcbiAgYW5pbWF0aW9uOiBmYWRlSW4gZWFzZS1pbiAxO1xyXG5cclxuICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xyXG4gIC1tb3otYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XHJcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XHJcblxyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcclxuICAtbW96LWFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XHJcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcclxufVxyXG5cclxuLmZhZGVJbi5maXJzdCB7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDAuNHM7XHJcbiAgLW1vei1hbmltYXRpb24tZGVsYXk6IDAuNHM7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAwLjRzO1xyXG59XHJcblxyXG4uZmFkZUluLnNlY29uZCB7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDAuNnM7XHJcbiAgLW1vei1hbmltYXRpb24tZGVsYXk6IDAuNnM7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAwLjZzO1xyXG59XHJcblxyXG4uZmFkZUluLnRoaXJkIHtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMC44cztcclxuICAtbW96LWFuaW1hdGlvbi1kZWxheTogMC44cztcclxuICBhbmltYXRpb24tZGVsYXk6IDAuOHM7XHJcbn1cclxuXHJcbi5mYWRlSW4uZm91cnRoIHtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMXM7XHJcbiAgLW1vei1hbmltYXRpb24tZGVsYXk6IDFzO1xyXG4gIGFuaW1hdGlvbi1kZWxheTogMXM7XHJcbn1cclxuXHJcbi8qIFNpbXBsZSBDU1MzIEZhZGUtaW4gQW5pbWF0aW9uICovXHJcbi51bmRlcmxpbmVIb3ZlcjphZnRlciB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbGVmdDogMDtcclxuICBib3R0b206IC0xMHB4O1xyXG4gIHdpZHRoOiAwO1xyXG4gIGhlaWdodDogMnB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM1NmJhZWQ7XHJcbiAgY29udGVudDogXCJcIjtcclxuICB0cmFuc2l0aW9uOiB3aWR0aCAwLjJzO1xyXG59XHJcblxyXG4udW5kZXJsaW5lSG92ZXI6aG92ZXIge1xyXG4gIGNvbG9yOiAjMGQwZDBkO1xyXG59XHJcblxyXG4udW5kZXJsaW5lSG92ZXI6aG92ZXI6YWZ0ZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4vKiBPVEhFUlMgKi9cclxuXHJcbio6Zm9jdXMge1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbiNpY29uIHtcclxuICB3aWR0aDogNjAlO1xyXG59XHJcbi5jdXN0b21JbWcge1xyXG4gIHdpZHRoOiAyMDBweCAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmctdG9wOiAzMHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAzMHB4O1xyXG59XHJcbi5jdXN0b21CdG4ge1xyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcbn1cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/authentification/authentification.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/authentification/authentification.component.ts ***!
    \****************************************************************/

  /*! exports provided: AuthentificationComponent */

  /***/
  function srcAppAuthentificationAuthentificationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthentificationComponent", function () {
      return AuthentificationComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AuthentificationComponent =
    /*#__PURE__*/
    function () {
      function AuthentificationComponent() {
        _classCallCheck(this, AuthentificationComponent);
      }

      _createClass(AuthentificationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AuthentificationComponent;
    }();

    AuthentificationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-authentification',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./authentification.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/authentification/authentification.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./authentification.component.css */
      "./src/app/authentification/authentification.component.css")).default]
    })], AuthentificationComponent);
    /***/
  },

  /***/
  "./src/app/colisage/colisage.component.css":
  /*!*************************************************!*\
    !*** ./src/app/colisage/colisage.component.css ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppColisageColisageComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbGlzYWdlL2NvbGlzYWdlLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/colisage/colisage.component.ts":
  /*!************************************************!*\
    !*** ./src/app/colisage/colisage.component.ts ***!
    \************************************************/

  /*! exports provided: ColisageComponent */

  /***/
  function srcAppColisageColisageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ColisageComponent", function () {
      return ColisageComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ColisageComponent =
    /*#__PURE__*/
    function () {
      function ColisageComponent() {
        _classCallCheck(this, ColisageComponent);

        this.dynamicArray = [];
        this.newDynamic = {};
      }

      _createClass(ColisageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.newDynamic = {
            title1: "",
            title2: "",
            title3: ""
          };
          this.dynamicArray.push(this.newDynamic);
        }
      }, {
        key: "addRow",
        value: function addRow(index) {
          this.newDynamic = {
            title1: "",
            title2: "",
            title3: ""
          };
          this.dynamicArray.push(this.newDynamic); // this.toastr.success("New row added successfully", "New Row");

          console.log(this.dynamicArray);
          return true;
        }
      }, {
        key: "deleteRow",
        value: function deleteRow(index) {
          if (this.dynamicArray.length == 1) {
            /*  this.toastr.error(
              "Can't delete the row when there is only one row",
              "Warning"
            );*/
            return false;
          } else {
            this.dynamicArray.splice(index, 1); //this.toastr.warning("Row deleted successfully", "Delete row");

            return true;
          }
        }
      }]);

      return ColisageComponent;
    }();

    ColisageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-colisage",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./colisage.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/colisage/colisage.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./colisage.component.css */
      "./src/app/colisage/colisage.component.css")).default]
    })], ColisageComponent);
    /***/
  },

  /***/
  "./src/app/dashboard/dashboard.component.css":
  /*!***************************************************!*\
    !*** ./src/app/dashboard/dashboard.component.css ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppDashboardDashboardComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".customDashboard {\r\n  margin-top: 150px;\r\n  /*margin-left: -150px;*/\r\n  /**/\r\n}\r\n.customTitle {\r\n  padding: 3%;\r\n  background-color: brown !important;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0VBQ2pCLHVCQUF1QjtFQUN2QixHQUFHO0FBQ0w7QUFDQTtFQUNFLFdBQVc7RUFDWCxrQ0FBa0M7QUFDcEMiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3VzdG9tRGFzaGJvYXJkIHtcclxuICBtYXJnaW4tdG9wOiAxNTBweDtcclxuICAvKm1hcmdpbi1sZWZ0OiAtMTUwcHg7Ki9cclxuICAvKiovXHJcbn1cclxuLmN1c3RvbVRpdGxlIHtcclxuICBwYWRkaW5nOiAzJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBicm93biAhaW1wb3J0YW50O1xyXG59XHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/dashboard/dashboard.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/dashboard/dashboard.component.ts ***!
    \**************************************************/

  /*! exports provided: DashboardComponent */

  /***/
  function srcAppDashboardDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
      return DashboardComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _dynamic_script_loader_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../dynamic-script-loader-service.service */
    "./src/app/dynamic-script-loader-service.service.ts");

    var DashboardComponent =
    /*#__PURE__*/
    function () {
      function DashboardComponent(dynamicScriptLoader) {
        _classCallCheck(this, DashboardComponent);

        this.dynamicScriptLoader = dynamicScriptLoader;
      }

      _createClass(DashboardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loadScript("../assets/js/Chart.bundle.js");
          this.loadScript("../assets/js/utils.js");
          this.loadScript("../assets/js/home-data.js");
        }
        /*loadScripts() {
          this.dynamicScriptLoader
            .loadScript("../assets/js/Chart.bundle.js")
            .subscribe(_ => {});
              this.dynamicScriptLoader
            .loadScript("../assets/js/utils.js")
            .subscribe(_ => {
              console.log("Jquery is loaded!");
            });
              this.dynamicScriptLoader
            .loadScript("../assets/js/home-data.js")
            .subscribe(_ => {});
        }
        */

      }, {
        key: "loadScript",
        value: function loadScript(url) {
          console.log("preparing to load...");
          var node = document.createElement("script");
          node.src = url;
          node.type = "text/javascript";
          node.async = true;
          node.charset = "utf-8";
          document.getElementsByTagName("head")[0].appendChild(node);
        }
      }]);

      return DashboardComponent;
    }();

    DashboardComponent.ctorParameters = function () {
      return [{
        type: _dynamic_script_loader_service_service__WEBPACK_IMPORTED_MODULE_2__["DynamicScriptLoaderService"]
      }];
    };

    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-dashboard",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./dashboard.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./dashboard.component.css */
      "./src/app/dashboard/dashboard.component.css")).default]
    })], DashboardComponent);
    /***/
  },

  /***/
  "./src/app/dynamic-script-loader-service.service.ts":
  /*!**********************************************************!*\
    !*** ./src/app/dynamic-script-loader-service.service.ts ***!
    \**********************************************************/

  /*! exports provided: DynamicScriptLoaderService */

  /***/
  function srcAppDynamicScriptLoaderServiceServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DynamicScriptLoaderService", function () {
      return DynamicScriptLoaderService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");

    var DynamicScriptLoaderService =
    /*#__PURE__*/
    function () {
      function DynamicScriptLoaderService(document) {
        _classCallCheck(this, DynamicScriptLoaderService);

        this.document = document;
        this.loadedLibraries = {};
      }

      _createClass(DynamicScriptLoaderService, [{
        key: "loadScript",
        value: function loadScript(url) {
          var _this = this;

          if (this.loadedLibraries[url]) {
            return this.loadedLibraries[url].asObservable();
          }

          this.loadedLibraries[url] = new rxjs__WEBPACK_IMPORTED_MODULE_2__["ReplaySubject"]();
          var script = this.document.createElement("script");
          script.type = "text/javascript";
          script.src = url;

          script.onload = function () {
            _this.loadedLibraries[url].next();

            _this.loadedLibraries[url].complete();
          };

          this.document.body.appendChild(script);
          return this.loadedLibraries[url].asObservable();
        }
      }]);

      return DynamicScriptLoaderService;
    }();

    DynamicScriptLoaderService.ctorParameters = function () {
      return [{
        type: Document,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]]
        }]
      }];
    };

    DynamicScriptLoaderService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]))], DynamicScriptLoaderService);
    /***/
  },

  /***/
  "./src/app/export/export.component.css":
  /*!*********************************************!*\
    !*** ./src/app/export/export.component.css ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppExportExportComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".customExport {\r\n  margin-top: 150px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXhwb3J0L2V4cG9ydC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvZXhwb3J0L2V4cG9ydC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmN1c3RvbUV4cG9ydCB7XHJcbiAgbWFyZ2luLXRvcDogMTUwcHg7XHJcbn1cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/export/export.component.ts":
  /*!********************************************!*\
    !*** ./src/app/export/export.component.ts ***!
    \********************************************/

  /*! exports provided: ExportComponent */

  /***/
  function srcAppExportExportComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExportComponent", function () {
      return ExportComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ExportComponent =
    /*#__PURE__*/
    function () {
      function ExportComponent() {
        _classCallCheck(this, ExportComponent);
      }

      _createClass(ExportComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ExportComponent;
    }();

    ExportComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-export',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./export.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/export/export.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./export.component.css */
      "./src/app/export/export.component.css")).default]
    })], ExportComponent);
    /***/
  },

  /***/
  "./src/app/footer/footer.component.css":
  /*!*********************************************!*\
    !*** ./src/app/footer/footer.component.css ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppFooterFooterComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/footer/footer.component.ts":
  /*!********************************************!*\
    !*** ./src/app/footer/footer.component.ts ***!
    \********************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var FooterComponent =
    /*#__PURE__*/
    function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterComponent;
    }();

    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-footer',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./footer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./footer.component.css */
      "./src/app/footer/footer.component.css")).default]
    })], FooterComponent);
    /***/
  },

  /***/
  "./src/app/global/global.component.css":
  /*!*********************************************!*\
    !*** ./src/app/global/global.component.css ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppGlobalGlobalComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dsb2JhbC9nbG9iYWwuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/global/global.component.ts":
  /*!********************************************!*\
    !*** ./src/app/global/global.component.ts ***!
    \********************************************/

  /*! exports provided: GlobalComponent */

  /***/
  function srcAppGlobalGlobalComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GlobalComponent", function () {
      return GlobalComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var GlobalComponent =
    /*#__PURE__*/
    function () {
      function GlobalComponent() {
        _classCallCheck(this, GlobalComponent);
      }

      _createClass(GlobalComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return GlobalComponent;
    }();

    GlobalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-global',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./global.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/global/global.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./global.component.css */
      "./src/app/global/global.component.css")).default]
    })], GlobalComponent);
    /***/
  },

  /***/
  "./src/app/home/home.component.css":
  /*!*****************************************!*\
    !*** ./src/app/home/home.component.css ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeHomeComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var HomeComponent =
    /*#__PURE__*/
    function () {
      function HomeComponent() {
        _classCallCheck(this, HomeComponent);
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HomeComponent;
    }();

    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home.component.css */
      "./src/app/home/home.component.css")).default]
    })], HomeComponent);
    /***/
  },

  /***/
  "./src/app/import/import.component.css":
  /*!*********************************************!*\
    !*** ./src/app/import/import.component.css ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppImportImportComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".customImport {\r\n  margin-top: 150px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW1wb3J0L2ltcG9ydC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvaW1wb3J0L2ltcG9ydC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmN1c3RvbUltcG9ydCB7XHJcbiAgbWFyZ2luLXRvcDogMTUwcHg7XHJcbn1cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/import/import.component.ts":
  /*!********************************************!*\
    !*** ./src/app/import/import.component.ts ***!
    \********************************************/

  /*! exports provided: ImportComponent */

  /***/
  function srcAppImportImportComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ImportComponent", function () {
      return ImportComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _dynamic_script_loader_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../dynamic-script-loader-service.service */
    "./src/app/dynamic-script-loader-service.service.ts"); // Service


    var ImportComponent =
    /*#__PURE__*/
    function () {
      function ImportComponent(dynamicScriptLoader) {
        _classCallCheck(this, ImportComponent);

        this.dynamicScriptLoader = dynamicScriptLoader;
      }

      _createClass(ImportComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loadScripts();
        }
      }, {
        key: "loadScripts",
        value: function loadScripts() {
          var externalScriptArray = ["../assets/js/jquery.dataTables.min.js", "../assets/js/dataTables.bootstrap4.min.js", "../assets/js/dataTables.buttons.min.js", "../assets/js/buttons.flash.min.js", "../assets/js/jszip.min.js", "../assets/js/pdfmake.min.js", "../assets/js/vfs_fonts.js", "../assets/js/buttons.html5.min.js", "../assets/js/buttons.print.min.js", "../assets/js/table_data.js"];

          for (var i = 0; i < externalScriptArray.length; i++) {
            var scriptTag = document.createElement("script");
            scriptTag.src = externalScriptArray[i];
            scriptTag.type = "text/javascript";
            scriptTag.async = false;
            scriptTag.charset = "utf-8";
            document.getElementsByTagName("head")[0].appendChild(scriptTag);
          }
        }
      }]);

      return ImportComponent;
    }();

    ImportComponent.ctorParameters = function () {
      return [{
        type: _dynamic_script_loader_service_service__WEBPACK_IMPORTED_MODULE_2__["DynamicScriptLoaderService"]
      }];
    };

    ImportComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-import",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./import.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/import/import.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./import.component.css */
      "./src/app/import/import.component.css")).default]
    })], ImportComponent);
    /***/
  },

  /***/
  "./src/app/navbar/navbar.component.css":
  /*!*********************************************!*\
    !*** ./src/app/navbar/navbar.component.css ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppNavbarNavbarComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".page-logo {\r\n  background: #6673fc !important;\r\n} /*\r\n.navbar-nav > li.active > a,\r\n.header-white .page-header.navbar .hor-menu .navbar-nav > li.current > a {\r\n  color: #4680ff;\r\n  background-color: transparent;\r\n}\r\n\r\na.active {\r\n  background-color: brown !important;\r\n  color: #4680ff !important;\r\n}*/ .navbar-custom ul {\r\n  list-style-type: none;\r\n  margin: 0;\r\n  padding: 0;\r\n  overflow: hidden;\r\n} li {\r\n  float: left;\r\n} li a {\r\n  display: block;\r\n  color: #555;\r\n  text-align: center;\r\n  padding: 14px 16px;\r\n  text-decoration: none;\r\n} li a:hover {\r\n  /*background-color: #111;*/\r\n  color: #4680ff !important;\r\n} .active {\r\n  color: #4680ff !important;\r\n} .custom {\r\n  margin-top: 15px;\r\n} .inner {\r\n  display: table;\r\n  margin: 0 auto;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsOEJBQThCO0FBQ2hDLEVBQUU7Ozs7Ozs7Ozs7RUFVQSxFQUNGO0VBQ0UscUJBQXFCO0VBQ3JCLFNBQVM7RUFDVCxVQUFVO0VBQ1YsZ0JBQWdCO0FBQ2xCLEVBRUE7RUFDRSxXQUFXO0FBQ2IsRUFFQTtFQUNFLGNBQWM7RUFDZCxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixxQkFBcUI7QUFDdkIsRUFFQTtFQUNFLDBCQUEwQjtFQUMxQix5QkFBeUI7QUFDM0IsRUFDQTtFQUNFLHlCQUF5QjtBQUMzQixFQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCLEVBRUE7RUFDRSxjQUFjO0VBQ2QsY0FBYztBQUNoQiIsImZpbGUiOiJzcmMvYXBwL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYWdlLWxvZ28ge1xyXG4gIGJhY2tncm91bmQ6ICM2NjczZmMgIWltcG9ydGFudDtcclxufSAvKlxyXG4ubmF2YmFyLW5hdiA+IGxpLmFjdGl2ZSA+IGEsXHJcbi5oZWFkZXItd2hpdGUgLnBhZ2UtaGVhZGVyLm5hdmJhciAuaG9yLW1lbnUgLm5hdmJhci1uYXYgPiBsaS5jdXJyZW50ID4gYSB7XHJcbiAgY29sb3I6ICM0NjgwZmY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbmEuYWN0aXZlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBicm93biAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiAjNDY4MGZmICFpbXBvcnRhbnQ7XHJcbn0qL1xyXG4ubmF2YmFyLWN1c3RvbSB1bCB7XHJcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbmxpIHtcclxuICBmbG9hdDogbGVmdDtcclxufVxyXG5cclxubGkgYSB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgY29sb3I6ICM1NTU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDE0cHggMTZweDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbmxpIGE6aG92ZXIge1xyXG4gIC8qYmFja2dyb3VuZC1jb2xvcjogIzExMTsqL1xyXG4gIGNvbG9yOiAjNDY4MGZmICFpbXBvcnRhbnQ7XHJcbn1cclxuLmFjdGl2ZSB7XHJcbiAgY29sb3I6ICM0NjgwZmYgIWltcG9ydGFudDtcclxufVxyXG4uY3VzdG9tIHtcclxuICBtYXJnaW4tdG9wOiAxNXB4O1xyXG59XHJcblxyXG4uaW5uZXIge1xyXG4gIGRpc3BsYXk6IHRhYmxlO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/navbar/navbar.component.ts":
  /*!********************************************!*\
    !*** ./src/app/navbar/navbar.component.ts ***!
    \********************************************/

  /*! exports provided: NavbarComponent */

  /***/
  function srcAppNavbarNavbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () {
      return NavbarComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _dynamic_script_loader_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../dynamic-script-loader-service.service */
    "./src/app/dynamic-script-loader-service.service.ts");

    var NavbarComponent =
    /*#__PURE__*/
    function () {
      function NavbarComponent(dynamicScriptLoader) {
        _classCallCheck(this, NavbarComponent);

        this.dynamicScriptLoader = dynamicScriptLoader;
      }

      _createClass(NavbarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loadScripts();
        }
      }, {
        key: "loadScripts",
        value: function loadScripts() {
          var externalScriptArray = ["../assets/js/active.js"];

          for (var i = 0; i < externalScriptArray.length; i++) {
            var scriptTag = document.createElement("script");
            scriptTag.src = externalScriptArray[i];
            scriptTag.type = "text/javascript";
            scriptTag.async = false;
            scriptTag.charset = "utf-8";
            document.getElementsByTagName("head")[0].appendChild(scriptTag);
          }
        }
      }]);

      return NavbarComponent;
    }();

    NavbarComponent.ctorParameters = function () {
      return [{
        type: _dynamic_script_loader_service_service__WEBPACK_IMPORTED_MODULE_2__["DynamicScriptLoaderService"]
      }];
    };

    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-navbar",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./navbar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./navbar.component.css */
      "./src/app/navbar/navbar.component.css")).default]
    })], NavbarComponent);
    /***/
  },

  /***/
  "./src/app/saisi-bon/saisi-bon.component.css":
  /*!***************************************************!*\
    !*** ./src/app/saisi-bon/saisi-bon.component.css ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSaisiBonSaisiBonComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/*@import url(\"https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.1/css/select2.min.css\");\r\n*/\r\n.customForm {\r\n  padding-top: 130px;\r\n}\r\n.Selectwrapper {\r\n  margin: 50px 100px;\r\n}\r\n#test-select {\r\n  width: 200px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2Fpc2ktYm9uL3NhaXNpLWJvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0M7QUFDRDtFQUNFLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9zYWlzaS1ib24vc2Fpc2ktYm9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvc2VsZWN0Mi80LjAuMS9jc3Mvc2VsZWN0Mi5taW4uY3NzXCIpO1xyXG4qL1xyXG4uY3VzdG9tRm9ybSB7XHJcbiAgcGFkZGluZy10b3A6IDEzMHB4O1xyXG59XHJcbi5TZWxlY3R3cmFwcGVyIHtcclxuICBtYXJnaW46IDUwcHggMTAwcHg7XHJcbn1cclxuI3Rlc3Qtc2VsZWN0IHtcclxuICB3aWR0aDogMjAwcHg7XHJcbn1cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/saisi-bon/saisi-bon.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/saisi-bon/saisi-bon.component.ts ***!
    \**************************************************/

  /*! exports provided: SaisiBonComponent */

  /***/
  function srcAppSaisiBonSaisiBonComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SaisiBonComponent", function () {
      return SaisiBonComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var SaisiBonComponent =
    /*#__PURE__*/
    function () {
      function SaisiBonComponent()
      /*private toastr: ToastrService*/
      {
        _classCallCheck(this, SaisiBonComponent);
      }

      _createClass(SaisiBonComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loadScripts();
        }
        /*public loadScript(url) {
          console.log("preparing to load...");
          let node = document.createElement("script");
          node.src = url;
          node.type = "text/javascript";
          node.async = true;
          node.charset = "utf-8";
          document.getElementsByTagName("head")[0].appendChild(node);
        }*/

      }, {
        key: "loadScripts",
        value: function loadScripts() {
          var externalScriptArray = ["../assets/js/bootstrap-datepicker.js", "../assets/js/datepicker-init.js", "../assets/js/bootstrap-datetimepicker.js", "../assets/js/bootstrap-datetimepicker-init.js"];

          for (var i = 0; i < externalScriptArray.length; i++) {
            var scriptTag = document.createElement("script");
            scriptTag.src = externalScriptArray[i];
            scriptTag.type = "text/javascript";
            scriptTag.async = false;
            scriptTag.charset = "utf-8";
            document.getElementsByTagName("head")[0].appendChild(scriptTag);
          }
        }
      }]);

      return SaisiBonComponent;
    }();

    SaisiBonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-saisi-bon",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./saisi-bon.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/saisi-bon/saisi-bon.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./saisi-bon.component.css */
      "./src/app/saisi-bon/saisi-bon.component.css")).default]
    })], SaisiBonComponent);
    /***/
  },

  /***/
  "./src/app/test/test.component.css":
  /*!*****************************************!*\
    !*** ./src/app/test/test.component.css ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppTestTestComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".navbar-nav > li > a {\r\n  color: #4680ff !important;\r\n  background-color: antiquewhite !important;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVzdC90ZXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBeUI7RUFDekIseUNBQXlDO0FBQzNDIiwiZmlsZSI6InNyYy9hcHAvdGVzdC90ZXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2YmFyLW5hdiA+IGxpID4gYSB7XHJcbiAgY29sb3I6ICM0NjgwZmYgIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBhbnRpcXVld2hpdGUgIWltcG9ydGFudDtcclxufVxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/test/test.component.ts":
  /*!****************************************!*\
    !*** ./src/app/test/test.component.ts ***!
    \****************************************/

  /*! exports provided: TestComponent */

  /***/
  function srcAppTestTestComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TestComponent", function () {
      return TestComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var TestComponent =
    /*#__PURE__*/
    function () {
      function TestComponent() {
        _classCallCheck(this, TestComponent);
      }

      _createClass(TestComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return TestComponent;
    }();

    TestComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-test',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./test.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/test/test.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./test.component.css */
      "./src/app/test/test.component.css")).default]
    })], TestComponent);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
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
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\Mezzi\Desktop\track4trace\track4trace\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map