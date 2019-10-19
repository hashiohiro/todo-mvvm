namespace ToDo.Web.Core.MVVM {
    export abstract class View {
        constructor() {
            this.Bind();
        }

        protected abstract Bind(): void;
    }
}