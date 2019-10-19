var ToDo;
(function (ToDo_1) {
    var Web;
    (function (Web) {
        var App;
        (function (App) {
            var ToDo;
            (function (ToDo) {
                class ToDoDetailView extends Web.Core.MVVM.PageView {
                    Initialize() {
                        throw new Error("Method not implemented.");
                    }
                    Finalize() {
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
var ToDo;
(function (ToDo_1) {
    var Web;
    (function (Web) {
        var App;
        (function (App) {
            var ToDo;
            (function (ToDo) {
                class ToDoListView extends Web.Core.MVVM.PageView {
                    Initialize() {
                        this.email = new Web.Core.MVVM.InputWidget();
                        this.password = new Web.Core.MVVM.InputWidget();
                    }
                    Finalize() {
                        throw new Error("Method not implemented.");
                    }
                }
                ToDo.ToDoListView = ToDoListView;
                class ToDoListViewModel extends Web.Core.MVVM.ViewModel {
                }
                ToDo.ToDoListViewModel = ToDoListViewModel;
            })(ToDo = App.ToDo || (App.ToDo = {}));
        })(App = Web.App || (Web.App = {}));
    })(Web = ToDo_1.Web || (ToDo_1.Web = {}));
})(ToDo || (ToDo = {}));
//# sourceMappingURL=ToDoList.js.map