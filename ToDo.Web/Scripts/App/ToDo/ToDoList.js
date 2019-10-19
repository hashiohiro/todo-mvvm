var ToDo;
(function (ToDo_1) {
    var Web;
    (function (Web) {
        var App;
        (function (App) {
            var ToDo;
            (function (ToDo) {
                class ToDoListView extends Web.Core.MVVM.View {
                    constructor() {
                        super();
                        this.Bind();
                    }
                    Bind() {
                        this.Email = new Web.Core.MVVM.InputWidget('#email').SetValue('Enter Email');
                        this.Password = new Web.Core.MVVM.InputWidget('#password').SetValue('Enter Password');
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