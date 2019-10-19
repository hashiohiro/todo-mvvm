namespace ToDo.Web.App {
    export interface IPathBindingItem {
        Path: string,
        View: Core.TypedConstructor<Core.MVVM.View>,
        ViewModel: Core.TypedConstructor<Core.MVVM.ViewModel>
    } 

    export class AppConfig {
        public readonly DefaultPath = 'Home/Index';
        public readonly PathBindings: Array<IPathBindingItem> = [
            { Path: 'Home/Index', View: Home.IndexView, ViewModel: Home.IndexViewModel },
            { Path: 'ToDo/ToDoList', View: ToDo.ToDoListView, ViewModel: ToDo.ToDoListViewModel },
            { Path: 'ToDo/ToDoDetail', View: ToDo.ToDoDetailView, ViewModel: ToDo.ToDoDetailViewModel }
        ];
        public readonly PageSelector = '#content';
    }
}
