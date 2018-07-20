webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var home_component_1 = __webpack_require__("./src/app/home/home.component.ts");
var routes = [
    { path: '', component: home_component_1.HomeComponent },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;


/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n    <script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js\" integrity=\"sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49\" crossorigin=\"anonymous\"></script>\n    <script src=\"https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js\" integrity=\"sha384-smHYKdLADwkXOn1EmN1qk/HfnUcbVRZyYmZ4qpPea6sjB/pTJ0euyQp0Mk8ck+5T\" crossorigin=\"anonymous\"></script>\n    <script src=\"https://code.jquery.com/jquery-3.3.1.slim.min.js\" integrity=\"sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo\" crossorigin=\"anonymous\"></script>\n    <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\n    <title>Portfolio</title>\n</head>\n    <router-outlet></router-outlet>\n</html>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var app_routing_module_1 = __webpack_require__("./src/app/app-routing.module.ts");
var app_component_1 = __webpack_require__("./src/app/app.component.ts");
var home_component_1 = __webpack_require__("./src/app/home/home.component.ts");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                home_component_1.HomeComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/app/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ".jumbotron{\n    height: 300px;\n    background-color: transparent;\n}\n\n.navbar{\n    background:transparent;\n    background-color: rgba(255, 255, 255, 0);\n    border-color:transparent;\n    margin-bottom:0px;\n    font-size:large;\n    -webkit-transition-duration: 0.3s;\n            transition-duration: 0.3s;\n    min-height: 59px;\n}\n\n.navbar-toggler {\n    border-color: silver;\n}\n\n.navbar.solid{\n    -webkit-transition-duration: 0.3s;\n            transition-duration: 0.3s;\n    background: white;\n    min-height: 59px;\n}\n\n.navbar-brand{\n    color: silver;\n    font-size: larger;\n    -webkit-transition-duration: 0.3s;\n            transition-duration: 0.3s;\n}\n\n.nav-link{\n    font-size: large;\n    -webkit-transition-duration: 0.3s;\n            transition-duration: 0.3s;\n    color:silver;\n}\n\n.navbar-brand.black{\n    color: cadetblue;\n    font-size: large;\n    -webkit-transition: all ease 0.3s;\n    transition: all ease 0.3s;\n}\n\n.nav-link.black{\n    font-size: large;\n    -webkit-transition-duration: 0.3s;\n            transition-duration: 0.3s;\n    color: black;\n}\n\n.rounded-circle{\n    max-width: 275px;\n}\n\n.name{\n    font-size: 80px;\n    color: white;\n    height: 120px;\n}\n\n.text-center{\n    padding-top: 100px;\n    height: 100%;\n}\n\n.linkedin_icon{\n    padding:10px;\n}\n\n.github_icon{\n    padding:10px;\n    width: 54.84px;\n}\n\n/*tags*/\n\nhr{\n    width: 150px;\n    height: 2px;\n    background-color: cadetblue;\n}\n\nh1{\n    color: white;\n    font-size: 8vw;\n}\n\nbody, html{\n    background-color: black;\n    margin: 0px;\n}\n\na:hover{\n    color: cadetblue!important;\n    text-decoration: none;\n}\n\nspan{\n    display: block;\n    background-color: silver;\n    height: 3px;\n    width: 30px;\n    margin-top: 6px;\n    margin-bottom: 6px;\n    left: 0;\n    opacity: 1;\n}\n\nbutton{\n    font-weight: bold;\n    font-size: larger;\n    border-radius: 30px;\n    border: transparent;\n    width: auto;\n}\n\nbutton:hover{\n    cursor: pointer!important;\n}\n\n/*Div Sections*/\n\n.header1{\n    background-image: url(\"/assets/header.jpg\");\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n    height: 100vh;\n}\n\n.headerintro{\n    color: white;\n}\n\n#outer_name{\n    width: 100%;\n    height: 100vh;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n}\n\n#inner_name{\n    margin: auto;\n}\n\n.intro{\n    height: 100%;\n    background-color: black;\n}\n\n.rounded-circle{\n    width: 240px;\n    height: 240px;\n}\n\n.p_intro1{\n    color: white;\n    font-size: 25px;\n}\n\n.p_intro2{\n    color: silver;\n    font-size: 16px;\n}\n\n.portfolioProjects{\n    width: auto;\n    height: auto;\n    background-color: silver;\n}\n\n.portfolio_square{\n    width: auto;\n    height: auto;\n}\n\n.portfolio_square img{\n    width: 100%;\n    height: 100%;\n}\n\n.portfolio-box:hover .portfolio-box-caption {\n    opacity: 1;\n}\n\n.portfolio-box-caption{\n    position: absolute;\n    bottom: 0;\n    width: 100%;\n    height: 100%;\n    color: white;\n    opacity: 0;\n    background: rgba(0, 0, 0, 0.6);\n    -webkit-transition: all .3s;\n    transition: all .3s;\n}\n\n.portfolio-box-caption-content {\n    text-align: center;\n    vertical-align:bottom;\n    margin: auto;\n    position: absolute;\n    width: 100%;\n    height: 20%;\n    top:50%;\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%);\n}\n\n.contacts{\n    height: 450px;\n    background-color: white;\n}\n\n.p_contact1{\n    font-size: 30px;\n}\n\n.p_contact2{\n    font-size: 22px;\n}\n\n.contact_link{\n    color: black;\n}\n\n.fa-linkedin-square{\n    color: darkgray;\n}\n\n.fa-linkedin-square:hover{\n    color: lightblue;\n    -webkit-transition: 0.3s ease-in-out;\n    transition: 0.3s ease-in-out; \n}\n\n.fa-github{\n    color: darkgray;\n}\n\n.fa-github:hover{\n    color: lightblue;  \n    -webkit-transition: 0.3s ease-in-out;  \n    transition: 0.3s ease-in-out; \n}\n\n\n\n"

/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<body>\n    <div class=\"header1\" id=\"top\">\n    <nav class=\"navbar navbar-expand-sm fixed-top affix-top\" id=\"navbar1\">\n        <div class=\"container-fluid\">\n            <a class=\"navbar-brand font-weight-bold\" href=\"#top\">Nathan Lee</a>\n            <button class=\"navbar-toggler ml-auto collapsed\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapsibleNavbar\" aria-controls=\"collapsibleNavbar\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                <span></span>\n                <span> </span>\n                <span> </span>\n            </button>\n            <div class=\"collapse navbar-collapse\" id=\"collapsibleNavbar\">\n                <ul class=\"navbar-nav ml-auto\">\n                    <li class=\"nav-item active\">\n                        <a class=\"nav-link font-weight-bold\" data-toggle=\"collapse\" data-target=\".navbar-collapse.show\" href=\"#intro\">About</a>\n                    </li>\n                    <li class=\"nav-item\">\n                        <a class=\"nav-link font-weight-bold\" data-toggle=\"collapse\" data-target=\".navbar-collapse.show\" href=\"#projects\">Portfolio</a>\n                    </li>\n                    <li class=\"nav-item\">\n                        <a class=\"nav-link font-weight-bold\" data-toggle=\"collapse\" data-target=\".navbar-collapse.show\" href=\"#contacts\">Contact</a>\n                    </li>\n                </ul>\n            </div>\n        </div>\n    </nav>\n        <div id=\"outer_name\" class=\"text-center container\">\n            <div id=\"inner_name\">\n                <h1>Nathan Lee</h1>\n                <hr>\n                <p class=\"headerintro\">Full Stack Web Developer</p>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"intro text-center container pt-5 pb-5\" id=\"intro\" >\n        <img src=\"./assets/test_pusheen.jpg\" class=\"rounded-circle\" alt=\"img\">\n        <p class=\"p_intro1\">Hi there my name is Nathan!</p>\n        <hr>\n        <p class=\"p_intro2\">For the longest time I have ever been fascinated by computers and technology. As a little kid I would sneak the computer manuals, the motherboard instruction booklets, anything with technical infomation into his room and read it like a picture book. My very first experience with technology was an Apple Macintosh Plus. My uncle would proudly display the magical light grey box that chimed when it turned on. It was extremely fun to learn how to properly use a computer and with each passing day I wanted to learn more.\n        <br>\n        <br>\n        Fast foward two decades and I have just recently graduated from a coding bootcamp called \"Coding Dojo\". Located in the heart of Silicon Valley, I was taught not just one set of technolgies but three: Python, MEAN and iOS Swift. Learning three technology stacks allows me not just write code but rather code from start to finish. With these tools, Coding Dojo and their team has given me the tools, skills, confidence and knowledge to become a full stack web developer. \n        </p>\n        <hr>\n        <div>\n            <p>\n                <a href=\"header.jpg\" download>\n                    <button>Resume</button>\n                </a>\n            </p>\n            \n            <p>\n                <a class=\"github_icon\" href=\"https://www.github.com/naslee2\" target=\"_blank\">\n                    <i class=\"fa fa-github fa-4x\" aria-hidden=\"true\"></i>\n                </a>\n                <a class=\"linkedin_icon\" href=\"https://www.linkedin.com/in/nathan-lee-74a353a2\" target=\"_blank\">\n                    <i class=\"fa fa-linkedin-square fa-4x\" aria-hidden=\"true\"></i>\n                </a>\n            </p>\n        </div>\n    </div>\n\n    <div class=\"portfolioProjects container-fluid pl-0 pr-0\" id=\"projects\">\n        <div class=\"row no-gutters\">\n            <div class=\"portfolio_square col-lg-4 col-sm-6\">\n\n                <a href=\"#\" class=\"portfolio-box\" data-toggle=\"modal\" data-target=\".shareline-modal-lg\">\n                    <img src=\"./assets/1.jpg\" class=\"img-container\" alt=\"container\">\n                    <div class=\"portfolio-box-caption\">\n                        <div class=\"portfolio-box-caption-content\">\n                            <div class=\"portfolio-box-caption-content-text\">\n                                text\n                            </div>\n                        </div>\n                    </div>\n                </a>\n\n                <div class=\"modal fade shareline-modal-lg text-center\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myLargeModalLabel\">\n                    <div class=\"modal-dialog modal-lg\">\n                        <div class=\"modal-content\">\n                            <div class=\"modal-header\">\n                                <h4 class=\"modal-title\">Test Title</h4>\n                            </div>\n                            <div class=\"modal-body\">\n                                <p>Test title application </p>\n                                <p><em>Tech</em></p>\n                                <p>View code here:<a href=\"\" target=\"_blank\"><i class=\"fa fa-github fa-2x\"></i></a> Launch Demo: <a href=\"\" target=\"_blank\"><i class=\"fa fa-picture-o fa-2x\"></i></a></p>\n                                <img src=\"./assets/1.jpg\" class=\"img-responsive center-block\" alt=\"\">\n                            </div>\n                            <div class=\"modal-footer\">\n                            </div>\n                        </div>\n                    </div>    \n                </div>\n            </div>\n            <div class=\"portfolio_square col-lg-4 col-sm-6\">\n\n                    <a href=\"#\" class=\"portfolio-box\" data-toggle=\"modal\" data-target=\".shareline-modal-lg\">\n                        <img src=\"./assets/1.jpg\" class=\"img-container\" alt=\"container\">\n                        <div class=\"portfolio-box-caption\">\n                            <div class=\"portfolio-box-caption-content\">\n                                <div class=\"portfolio-box-caption-content-text\">\n                                    text\n                                </div>\n                            </div>\n                        </div>\n                    </a>\n    \n                    <div class=\"modal fade shareline-modal-lg text-center\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myLargeModalLabel\">\n                        <div class=\"modal-dialog modal-lg\">\n                            <div class=\"modal-content\">\n                                <div class=\"modal-header\">\n                                    <h4 class=\"modal-title\">Test Title</h4>\n                                </div>\n                                <div class=\"modal-body\">\n                                    <p>Test title application </p>\n                                    <p><em>Tech</em></p>\n                                    <p>View code here:<a href=\"\" target=\"_blank\"><i class=\"fa fa-github fa-2x\"></i></a> Launch Demo: <a href=\"\" target=\"_blank\"><i class=\"fa fa-picture-o fa-2x\"></i></a></p>\n                                    <img src=\"./assets/1.jpg\" class=\"img-responsive center-block\" alt=\"\">\n                                </div>\n                                <div class=\"modal-footer\">\n                                </div>\n                            </div>\n                        </div>    \n                    </div>\n            </div>\n            <div class=\"portfolio_square col-lg-4 col-sm-6\">\n\n                        <a href=\"#\" class=\"portfolio-box\" data-toggle=\"modal\" data-target=\".shareline-modal-lg\">\n                            <img src=\"./assets/1.jpg\" class=\"img-container\" alt=\"container\">\n                            <div class=\"portfolio-box-caption\">\n                                <div class=\"portfolio-box-caption-content\">\n                                    <div class=\"portfolio-box-caption-content-text\">\n                                        text\n                                    </div>\n                                </div>\n                            </div>\n                        </a>\n        \n                        <div class=\"modal fade shareline-modal-lg text-center\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myLargeModalLabel\">\n                            <div class=\"modal-dialog modal-lg\">\n                                <div class=\"modal-content\">\n                                    <div class=\"modal-header\">\n                                        <h4 class=\"modal-title\">Test Title</h4>\n                                    </div>\n                                    <div class=\"modal-body\">\n                                        <p>Test title application </p>\n                                        <p><em>Tech</em></p>\n                                        <p>View code here:<a href=\"\" target=\"_blank\"><i class=\"fa fa-github fa-2x\"></i></a> Launch Demo: <a href=\"\" target=\"_blank\"><i class=\"fa fa-picture-o fa-2x\"></i></a></p>\n                                        <img src=\"./assets/1.jpg\" class=\"img-responsive center-block\" alt=\"\">\n                                    </div>\n                                    <div class=\"modal-footer\">\n                                    </div>\n                                </div>\n                            </div>    \n                        </div>\n            </div>\n            <div class=\"portfolio_square col-lg-4 col-sm-6\">\n\n                    <a href=\"#\" class=\"portfolio-box\" data-toggle=\"modal\" data-target=\".shareline-modal-lg\">\n                        <img src=\"./assets/1.jpg\" class=\"img-container\" alt=\"container\">\n                        <div class=\"portfolio-box-caption\">\n                            <div class=\"portfolio-box-caption-content\">\n                                <div class=\"portfolio-box-caption-content-text\">\n                                    text\n                                </div>\n                            </div>\n                        </div>\n                    </a>\n    \n                    <div class=\"modal fade shareline-modal-lg text-center\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myLargeModalLabel\">\n                        <div class=\"modal-dialog modal-lg\">\n                            <div class=\"modal-content\">\n                                <div class=\"modal-header\">\n                                    <h4 class=\"modal-title\">Test Title</h4>\n                                </div>\n                                <div class=\"modal-body\">\n                                    <p>Test title application </p>\n                                    <p><em>Tech</em></p>\n                                    <p>View code here:<a href=\"\" target=\"_blank\"><i class=\"fa fa-github fa-2x\"></i></a> Launch Demo: <a href=\"\" target=\"_blank\"><i class=\"fa fa-picture-o fa-2x\"></i></a></p>\n                                    <img src=\"./assets/1.jpg\" class=\"img-responsive center-block\" alt=\"\">\n                                </div>\n                                <div class=\"modal-footer\">\n                                </div>\n                            </div>\n                        </div>    \n                    </div>\n            </div>\n            <div class=\"portfolio_square col-lg-4 col-sm-6\">\n\n                        <a href=\"#\" class=\"portfolio-box\" data-toggle=\"modal\" data-target=\".shareline-modal-lg\">\n                            <img src=\"./assets/1.jpg\" class=\"img-container\" alt=\"container\">\n                            <div class=\"portfolio-box-caption\">\n                                <div class=\"portfolio-box-caption-content\">\n                                    <div class=\"portfolio-box-caption-content-text\">\n                                        text\n                                    </div>\n                                </div>\n                            </div>\n                        </a>\n        \n                        <div class=\"modal fade shareline-modal-lg text-center\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myLargeModalLabel\">\n                            <div class=\"modal-dialog modal-lg\">\n                                <div class=\"modal-content\">\n                                    <div class=\"modal-header\">\n                                        <h4 class=\"modal-title\">Test Title</h4>\n                                    </div>\n                                    <div class=\"modal-body\">\n                                        <p>Test title application </p>\n                                        <p><em>Tech</em></p>\n                                        <p>View code here:<a href=\"\" target=\"_blank\"><i class=\"fa fa-github fa-2x\"></i></a> Launch Demo: <a href=\"\" target=\"_blank\"><i class=\"fa fa-picture-o fa-2x\"></i></a></p>\n                                        <img src=\"./assets/1.jpg\" class=\"img-responsive center-block\" alt=\"\">\n                                    </div>\n                                    <div class=\"modal-footer\">\n                                    </div>\n                                </div>\n                            </div>    \n                        </div>\n            </div>\n            <div class=\"portfolio_square col-lg-4 col-sm-6\">\n                            <a href=\"#\" class=\"portfolio-box\" data-toggle=\"modal\" data-target=\".shareline-modal-lg\">\n                                <img src=\"./assets/1.jpg\" class=\"img-container\" alt=\"container\">\n                                <div class=\"portfolio-box-caption\">\n                                    <div class=\"portfolio-box-caption-content\">\n                                        <div class=\"portfolio-box-caption-content-text\">\n                                            text\n                                        </div>\n                                    </div>\n                                </div>\n                            </a>\n\n                            <div class=\"modal fade shareline-modal-lg text-center\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myLargeModalLabel\">\n                                <div class=\"modal-dialog modal-lg\">\n                                    <div class=\"modal-content\">\n                                        <div class=\"modal-header\">\n                                            <h4 class=\"modal-title\">Test Title</h4>\n                                        </div>\n                                        <div class=\"modal-body\">\n                                            <p>Test title application </p>\n                                            <p><em>Tech</em></p>\n                                            <p>View code here:<a href=\"\" target=\"_blank\"><i class=\"fa fa-github fa-2x\"></i></a> Launch Demo: <a href=\"\" target=\"_blank\"><i class=\"fa fa-picture-o fa-2x\"></i></a></p>\n                                            <img src=\"./assets/1.jpg\" class=\"img-responsive center-block\" alt=\"\">\n                                        </div>\n                                        <div class=\"modal-footer\">\n                                        </div>\n                                    </div>\n                                </div>    \n                            </div>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"contacts\" id=\"contacts\">\n        <div class=\"text-center container\">\n            <p class=\"p_contact1\">Let's talk!</p>\n            <hr>\n            <p class=\"p_contact2 col-sm-12\">If you wish to talk, please do so! If you need a team player, let me know! Send me an email, call my phone or send me a message on LinkedIn! Want to see what I have already? Check out my GitHub! I look forward to hearing from you!</p>\n            <div class=\"row\">\n                <div class=\"col-sm-6\">\n                    <i class=\"fa fa-phone fa-4x\" aria-hidden=\"true\"></i>\n                    <p>510-367-3581</p>\n                </div>\n                <div class=\"col-sm-6\">\n                        <i class=\"fa fa-envelope-o fa-4x\" aria-hidden=\"true\"></i>\n                    <p><a class=\"contact_link\" href=\"mailto:naslee2@gmail.com\">naslee2@gmail.com</a></p>\n                </div>\n            </div>\n        </div>\n    </div>\n</body>\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var $ = __webpack_require__("./node_modules/jquery/dist/jquery.js");
var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    //checks when window is resized or scrolled. If one or the other happens, it will replace CSS as needed.
    HomeComponent.prototype.navCheck = function () {
        $(document).ready(function () {
            $(window).on("load resize scroll", function (e) {
                if ($(document).width() < 800 || $(document).scrollTop() > 450) {
                    $('.navbar').addClass('solid');
                    $('.nav-link').addClass('black');
                    $('.navbar-brand').addClass('black');
                }
                else {
                    $('.navbar').removeClass('solid');
                    $('.nav-link').removeClass('black');
                    $('.navbar-brand').removeClass('black');
                }
            });
        });
    };
    //when link is clicked, it will autoscroll to target div specified inside link.
    HomeComponent.prototype.navTarget = function () {
        $('a[href^="#"]').on('click', function (event) {
            var target = $(this.getAttribute('href'));
            if (target.length) {
                event.preventDefault();
                $('html, body').stop().animate({
                    scrollTop: target.offset().top - 59
                }, 300);
            }
        });
    };
    HomeComponent.prototype.ngOnInit = function () {
        this.navCheck();
        this.navTarget();
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'app-home',
            template: __webpack_require__("./src/app/home/home.component.html"),
            styles: [__webpack_require__("./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;


/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__("./src/app/app.module.ts");
var environment_1 = __webpack_require__("./src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map