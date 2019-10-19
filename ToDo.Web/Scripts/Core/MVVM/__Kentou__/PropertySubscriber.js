var ToDo;
(function (ToDo) {
    var Web;
    (function (Web) {
        var Core;
        (function (Core) {
            var MVVM;
            (function (MVVM) {
                class OneWayPropertySubscriber {
                    constructor(_property, _widget) {
                        this._property = _property;
                        this._widget = _widget;
                    }
                    get Id() {
                        return `OneWayPropetySubscriber_${this._property.Class}_${this._property.Name}`;
                    }
                    get Widget() {
                        return this._widget;
                    }
                    OnSubscribe(e, sender) {
                        const event = e;
                        if (this._widget instanceof MVVM.InputWidget) {
                            const inputWidget = this._widget;
                            inputWidget.SetValue(event.NewValue);
                        }
                        else {
                            Core.ErrorUtil.ThrowNotSupportedOperationError();
                        }
                    }
                }
                MVVM.OneWayPropertySubscriber = OneWayPropertySubscriber;
            })(MVVM = Core.MVVM || (Core.MVVM = {}));
        })(Core = Web.Core || (Web.Core = {}));
    })(Web = ToDo.Web || (ToDo.Web = {}));
})(ToDo || (ToDo = {}));
//# sourceMappingURL=PropertySubscriber.js.map