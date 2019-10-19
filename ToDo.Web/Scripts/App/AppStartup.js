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