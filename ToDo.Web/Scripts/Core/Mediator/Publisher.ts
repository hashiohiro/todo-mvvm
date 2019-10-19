namespace ToDo.Web.Core.Mediator {
    export class Publisher implements IPublisher {
        constructor(private _id: string) { }

        private _subscribers: Array<ISubscriber>;

        public get Id(): string {
            return this._id;
        }

        public AddSubscriber(subscriber: ISubscriber): void {
            this._subscribers.push(subscriber);
        }

        public PublishAll(e: IEvent): void {
            this.Publish(e, this._subscribers);
        }

        public Publish(e: IEvent, subscribers: Array<ISubscriber>): void {
            subscribers.forEach(s => {
                s.OnSubscribe(e, this);
            });
        }
    }
}