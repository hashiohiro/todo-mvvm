namespace ToDo.Web.App.ToDo {
    export class ToDoListView extends Core.MVVM.View {
        constructor() {
            super();
            this.Bind();
        }

        protected Email: Core.MVVM.InputWidget;
        protected Password: Core.MVVM.InputWidget;

        protected Bind(): void {
            this.Email = new Core.MVVM.InputWidget('#email').SetValue('Enter Email');
            this.Password = new Core.MVVM.InputWidget('#password').SetValue('Enter Password');
        }
    }

    export class ToDoListViewModel extends Core.MVVM.ViewModel {

    }
}