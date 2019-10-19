var ToDo;
(function (ToDo) {
    var Web;
    (function (Web) {
        var Core;
        (function (Core) {
            var MVVM;
            (function (MVVM) {
                class PropertyChangedEvent {
                    constructor(_propertyName, _oldValue, _newValue) {
                        this._propertyName = _propertyName;
                        this._oldValue = _oldValue;
                        this._newValue = _newValue;
                    }
                    get Name() {
                        return 'PropertyChangedEvent';
                    }
                    get PropertyName() {
                        return this._propertyName;
                    }
                    get OldValue() {
                        return this._oldValue;
                    }
                    get NewValue() {
                        return this._newValue;
                    }
                }
                MVVM.PropertyChangedEvent = PropertyChangedEvent;
            })(MVVM = Core.MVVM || (Core.MVVM = {}));
        })(Core = Web.Core || (Web.Core = {}));
    })(Web = ToDo.Web || (ToDo.Web = {}));
})(ToDo || (ToDo = {}));
//# sourceMappingURL=PropertyChangedEvent.js.map