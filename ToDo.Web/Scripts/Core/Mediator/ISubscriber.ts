namespace ToDo.Web.Core.Mediator {
    export interface ISubscriber {
        Id: string;
        OnSubscribe(e: IEvent, sender: IPublisher): void;
    }
}