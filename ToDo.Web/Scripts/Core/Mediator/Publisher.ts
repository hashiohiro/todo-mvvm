namespace ToDo.Web.Core.Mediator {
    export class Publisher implements IPublisher {
        constructor(private _id: string) { }

        private _subscribers: { [key: string]: Array<ISubscriber> };

        public get Id(): string {
            return this._id;
        }

        public AddSubscriber(e: IEvent, subscriber: ISubscriber): void {
            let subscriberByEvent = this._subscribers[e.GetTypeName()];
            if (subscriberByEvent.find(s => s.GetTypeName() == subscriber.GetTypeName())) {
                subscriberByEvent.push(subscriber);
            }
        }

        public Publish(e: IEvent): void {
            this._subscribers[e.GetTypeName()].forEach(s => {
                s.OnSubscribe(e, this);
            });
        }
    }
}