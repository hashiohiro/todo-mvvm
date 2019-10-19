var ToDo;
(function (ToDo_1) {
    var Web;
    (function (Web) {
        var App;
        (function (App) {
            var ToDo;
            (function (ToDo) {
                class ToDoDetailView extends Web.Core.MVVM.View {
                    Bind() {
                        throw new Error("Method not implemented.");
                    }
                }
                ToDo.ToDoDetailView = ToDoDetailView;
                class ToDoDetailViewModel extends Web.Core.MVVM.ViewModel {
                }
                ToDo.ToDoDetailViewModel = ToDoDetailViewModel;
            })(ToDo = App.ToDo || (App.ToDo = {}));
        })(App = Web.App || (Web.App = {}));
    })(Web = ToDo_1.Web || (ToDo_1.Web = {}));
})(ToDo || (ToDo = {}));
//# sourceMappingURL=ToDoDetail.js.map