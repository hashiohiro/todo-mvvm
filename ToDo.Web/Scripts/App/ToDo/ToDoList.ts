namespace ToDo.Web.App.ToDo {
    export class ToDoListView extends Core.MVVM.View {
        constructor() {
            super();

            this.Container = document.querySelector('#todo-list');
            this.DataContext = new ToDoListViewModel();

            let emailValueDbb = new Core.MVVM.DataBindingBehavior();
            emailValueDbb.DataContext = this.DataContext;
            emailValueDbb.Container = document.querySelector('#email');
            emailValueDbb.Property = Core.MVVM.UIAttribute.ValueAttribute;
            emailValueDbb.VMProperty = 'Email';

            let passwordValueDbb = new Core.MVVM.DataBindingBehavior();
            passwordValueDbb.DataContext = this.DataContext;
            passwordValueDbb.Container = document.querySelector('#password');
            passwordValueDbb.Property = Core.MVVM.UIAttribute.ValueAttribute;
            passwordValueDbb.VMProperty = 'Password';

            this.AddBindingBehavior(emailValueDbb);
            this.AddBindingBehavior(passwordValueDbb);
        }
    }

    export class ToDoListViewModel extends Core.MVVM.ViewModel {
        public Email: string;
        public Password: string;
    }
}