namespace ToDo.Web.Core {
    export interface ICommand {
        Execute: (sender: any) => void;
    }
}
