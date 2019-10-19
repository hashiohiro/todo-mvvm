namespace ToDo.Web.App {
    export class AppContext {
        public static get Config(): AppConfig {
            return this._appConfig;
        }

        public static set Config(value: AppConfig) {
            this._appConfig = value;
        }

        public static get CurrentPage(): AppPage {
            return this._currentPage;
        }

        public static set CurrentPage(value: AppPage) {
            this._currentPage = value;
        }

        public static get Navigator(): AppNavigator {
            return this._navigator;
        }

        public static set Navigator(value: AppNavigator) {
            this._navigator = value;
        }

        private static _currentPage: AppPage;
        private static _navigator: AppNavigator;
        private static _appConfig: AppConfig;
    }

    export class BrowserContext {
        public static get Url(): URL {
            return new URL(location.href);
        }

        public static set Url(url: URL) {
            location.href = url.toString();
        }
    }

    export class AppPage {
        constructor(path: string) {
            const item = AppContext.Config.PathBindings.find(pb => pb.Path == path);
            this.View = new Core.TypedFactory(item.View).CreateInstance();
            this.ViewModel = new Core.TypedFactory(item.ViewModel).CreateInstance();
        }
        private _view: Core.MVVM.View;
        private _viewModel: Core.MVVM.ViewModel;

        public get View(): Core.MVVM.View {
            return this._view;
        }

        public set View(value: Core.MVVM.View) {
            this._view = value;
        }

        public get ViewModel(): Core.MVVM.ViewModel {
            return this._viewModel;
        }

        public set ViewModel(value: Core.MVVM.ViewModel) {
            this._viewModel = value;
        }
    }

    export class AppNavigator {
        private get LastPageIndex() {
            return this._pageQueue.length - 1;
        }

        private _pageQueue: Array<AppPage>;

        public MoveDefault(): void {
            this.ClearStack();
            this.MoveNext(AppContext.Config.DefaultPath)
        }

        public HasPrev(): boolean {
            return this._pageQueue.length >= 1;
        }

        public MoveNext(path: string): void {
            this._pageQueue.push(AppContext.CurrentPage);
            AppContext.CurrentPage = new AppPage(path);
        }

        public MovePrev(path: string): void {
            this._pageQueue.pop();
            AppContext.CurrentPage = this._pageQueue[this.LastPageIndex]
        }

        public ClearStack(): void {
            this._pageQueue = new Array<AppPage>();
        }
    }
}