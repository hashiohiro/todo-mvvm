namespace ToDo.Web.Core.Mediator {
    export interface IPublisher {
        Id: string;
        AddSubscriber(subscriber: ISubscriber): void;
        PublishAll(e: IEvent): void;
        Publish(e: IEvent, subscribers: Array<ISubscriber>): void;
    }
}