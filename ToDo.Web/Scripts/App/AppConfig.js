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