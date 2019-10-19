namespace ToDo.Web.App {
    export class AppStartup {
        constructor(private appConfig: AppConfig) { }

        public static Run(): void {

            this.InitializeAppContext();
        }

        private static readonly indexPath = '/'

        protected static InitializeAppContext() {
            AppContext.Config = new AppConfig();
            AppContext.Navigator = new AppNavigator();
            AppContext.Navigator.ClearStack();

            let url = BrowserContext.Url.pathname;
            if (url == this.indexPath) {
                url = AppContext.Config.DefaultPath;
            }

            AppContext.Navigator.MoveNext(url);
        }
    }
}

ToDo.Web.App.AppStartup.Run();