namespace ToDo.Web.Core.MVVM {
    export class OneWayPropertySubscriber implements Mediator.ISubscriber {
        constructor(private _property: IProperty, private _widget: IWidget) { }

        public get Id(): string {
            return `OneWayPropetySubscriber_${this._property.Class}_${this._property.Name}`;
        }

        public get Widget(): IWidget {
            return this._widget;
        }

        public OnSubscribe(e: IEvent, sender: Mediator.IPublisher): void {
            const event = e as PropertyChangedEvent;

            if (this._widget instanceof InputWidget) {
                const inputWidget = this._widget as InputWidget;
                inputWidget.SetValue(event.NewValue);
            } else {
                ErrorUtil.ThrowNotSupportedOperationError();
            }
        }
    }
}