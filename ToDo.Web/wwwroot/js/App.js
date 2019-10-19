var ToDo;
(function (ToDo) {
    var Web;
    (function (Web) {
        var App;
        (function (App) {
            class AppConfig {
                constructor() {
                    this.DefaultPath = 'Home/Index';
                    this.PathBindings = [
                        { Path: 'Home/Index', View: App.Home.IndexView, ViewModel: App.Home.IndexViewModel },
                        { Path: 'ToDo/ToDoList', View: App.ToDo.ToDoListView, ViewModel: App.ToDo.ToDoListViewModel },
                        { Path: 'ToDo/ToDoDetail', View: App.ToDo.ToDoDetailView, ViewModel: App.ToDo.ToDoDetailViewModel }
                    ];
                    this.PageSelector = '#content';
                }
            }
            App.AppConfig = AppConfig;
        })(App = Web.App || (Web.App = {}));
    })(Web = ToDo.Web || (ToDo.Web = {}));
})(ToDo || (ToDo = {}));
//# sourceMappingURL=AppConfig.js.map
var ToDo;
(function (ToDo) {
    var Web;
    (function (Web) {
        var App;
        (function (App) {
            class AppContext {
                static get Config() {
                    return this._appConfig;
                }
                static set Config(value) {
                    this._appConfig = value;
                }
                static get CurrentPage() {
                    return this._currentPage;
                }
                static set CurrentPage(value) {
                    this._currentPage = value;
                }
                static get Navigator() {
                    return this._navigator;
                }
                static set Navigator(value) {
                    this._navigator = value;
                }
            }
            App.AppContext = AppContext;
            class BrowserContext {
                static get Url() {
                    return new URL(location.href);
                }
                static set Url(url) {
                    location.href = url.toString();
                }
            }
            App.BrowserContext = BrowserContext;
            class AppPage {
                constructor(path) {
                    const item = AppContext.Config.PathBindings.find(pb => pb.Path == path);
                    this.View = new Web.Core.TypedFactory(item.View).CreateInstance();
                    this.ViewModel = new Web.Core.TypedFactory(item.ViewModel).CreateInstance();
                }
                get View() {
                    return this._view;
                }
                set View(value) {
                    this._view = value;
                }
                get ViewModel() {
                    return this._viewModel;
                }
                set ViewModel(value) {
                    this._viewModel = value;
                }
            }
            App.AppPage = AppPage;
            class AppNavigator {
                get LastPageIndex() {
                    return this._pageQueue.length - 1;
                }
                MoveDefault() {
                    this.ClearStack();
                    this.MoveNext(AppContext.Config.DefaultPath);
                }
                HasPrev() {
                    return this._pageQueue.length >= 1;
                }
                MoveNext(path) {
                    this._pageQueue.push(AppContext.CurrentPage);
                    AppContext.CurrentPage = new AppPage(path);
                }
                MovePrev(path) {
                    this._pageQueue.pop();
                    AppContext.CurrentPage = this._pageQueue[this.LastPageIndex];
                }
                ClearStack() {
                    this._pageQueue = new Array();
                }
            }
            App.AppNavigator = AppNavigator;
        })(App = Web.App || (Web.App = {}));
    })(Web = ToDo.Web || (ToDo.Web = {}));
})(ToDo || (ToDo = {}));
//# sourceMappingURL=AppContext.js.map
var ToDo;
(function (ToDo) {
    var Web;
    (function (Web) {
        var App;
        (function (App) {
            class AppStartup {
                constructor(appConfig) {
                    this.appConfig = appConfig;
                }
                static Run() {
                    this.InitializeAppContext();
                }
                static InitializeAppContext() {
                    App.AppContext.Config = new App.AppConfig();
                    App.AppContext.Navigator = new App.AppNavigator();
                    App.AppContext.Navigator.ClearStack();
                    let url = App.BrowserContext.Url.pathname;
                    if (url == this.indexPath) {
                        url = App.AppContext.Config.DefaultPath;
                    }
                    App.AppContext.Navigator.MoveNext(url);
                }
            }
            AppStartup.indexPath = '/';
            App.AppStartup = AppStartup;
        })(App = Web.App || (Web.App = {}));
    })(Web = ToDo.Web || (ToDo.Web = {}));
})(ToDo || (ToDo = {}));
ToDo.Web.App.AppStartup.Run();
//# sourceMappingURL=AppStartup.js.map