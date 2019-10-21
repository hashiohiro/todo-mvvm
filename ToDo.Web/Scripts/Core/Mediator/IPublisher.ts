namespace ToDo.Web.Core.Mediator {
    export interface IPublisher {
        Id: string;
        AddSubscriber(e: IEvent, subscriber: ISubscriber): void;
        Publish(e: IEvent): void;
    }
}