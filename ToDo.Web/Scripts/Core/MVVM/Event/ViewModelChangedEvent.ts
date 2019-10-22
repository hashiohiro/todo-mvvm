namespace ToDo.Web.Core.MVVM.Event {
    export class ViewModelChangedEvent implements IEvent {
        public get EventName(): string {
            return this.GetTypeName();
        }
    }
}