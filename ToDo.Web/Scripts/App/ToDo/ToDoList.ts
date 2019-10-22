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

            let updateSourceAbb = new Core.MVVM.ActionBindingBehavior();
            updateSourceAbb.Event = new Core.MVVM.Event.ClickEvent();
            updateSourceAbb.ActionHandle = (e) => {
                this.UpdateSource();
                console.log(updateSourceAbb.DataContext);
            };
            updateSourceAbb.Container = document.querySelector('#btnUpdateSource');
            updateSourceAbb.DataContext = this.DataContext;
            updateSourceAbb.Ensure();

            let updateTargetAbb = new Core.MVVM.ActionBindingBehavior();
            updateTargetAbb.Event = new Core.MVVM.Event.ClickEvent();
            updateTargetAbb.ActionHandle = (e) => { this.UpdateTarget(); };
            updateTargetAbb.Container = document.querySelector('#btnUpdateTarget');
            updateTargetAbb.DataContext = this.DataContext;
            updateTargetAbb.Ensure();

            this.AddBindingBehavior(emailValueDbb);
            this.AddBindingBehavior(passwordValueDbb);
            this.AddBindingBehavior(updateSourceAbb);
            this.AddBindingBehavior(updateTargetAbb);
        }
    }

    export class ToDoListViewModel extends Core.MVVM.ViewModel {
        public Email: string;
        public Password: string;
    }
}