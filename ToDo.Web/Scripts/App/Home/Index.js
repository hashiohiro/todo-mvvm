var ToDo;
(function (ToDo) {
    var Web;
    (function (Web) {
        var App;
        (function (App) {
            var Home;
            (function (Home) {
                class IndexView extends Web.Core.MVVM.View {
                    Bind() {
                        throw new Error("Method not implemented.");
                    }
                }
                Home.IndexView = IndexView;
                class IndexViewModel extends Web.Core.MVVM.ViewModel {
                }
                Home.IndexViewModel = IndexViewModel;
            })(Home = App.Home || (App.Home = {}));
        })(App = Web.App || (Web.App = {}));
    })(Web = ToDo.Web || (ToDo.Web = {}));
})(ToDo || (ToDo = {}));
//# sourceMappingURL=Index.js.map