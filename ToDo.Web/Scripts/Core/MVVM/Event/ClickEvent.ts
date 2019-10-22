namespace ToDo.Web.Core.MVVM.Event {
    export class ClickEvent implements ToDo.Web.Core.IEvent {
        public get EventName(): string {
            return 'click';
        }
    }
}