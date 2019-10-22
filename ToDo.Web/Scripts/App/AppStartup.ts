namespace ToDo.Web.App {
    export class AppStartup {
        constructor(private appConfig: any) { }

        public static Run(): void {

            this.InitializeAppContext();
        }

        protected static InitializeAppContext() {
            AppContext.CurrentView = new ToDo.ToDoListView();
            AppContext.CurrentViewModel = AppContext.CurrentView.DataContext;

            let vm = <ToDo.ToDoListViewModel>AppContext.CurrentViewModel;
            vm.Email = 'test@mail.com';
            vm.Password = 'test';

            AppContext.CurrentView.UpdateTarget();
        }
    }

    export class AppContext {
        public static get CurrentViewModel(): Core.MVVM.ViewModel {
            return this._currentViewModel;
        }

        public static set CurrentViewModel(value: Core.MVVM.ViewModel) {
            this._currentViewModel = value;
        }

        public static get CurrentView(): Core.MVVM.View {
            return this._currentView;
        }

        public static set CurrentView(value: Core.MVVM.View) {
            this._currentView = value;
        }

        private static _currentViewModel: Core.MVVM.ViewModel;
        private static _currentView: Core.MVVM.View;
    }
}

ToDo.Web.App.AppStartup.Run();