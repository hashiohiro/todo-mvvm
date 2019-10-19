var ToDo;
(function (ToDo) {
    var Web;
    (function (Web) {
        var Core;
        (function (Core) {
            var MVVM;
            (function (MVVM) {
                class Widget {
                    constructor(_selector) {
                        this._selector = _selector;
                        this._elements = Array.from(document.querySelectorAll(_selector));
                    }
                    get Selector() {
                        return this._selector;
                    }
                    get Elements() {
                        return this._elements;
                    }
                    GetAttribute(attribute) {
                        return this._elements.map(ns => ns.getAttribute(attribute));
                    }
                    AddAttribute(attribute, value) {
                        this._elements.forEach(ns => {
                            this.ConcatAttribute(ns, attribute, value);
                        });
                        return this;
                    }
                    SetAttribute(attribute, value) {
                        this._elements.forEach(ns => {
                            ns.setAttribute(attribute, value);
                        });
                        return this;
                    }
                    AppendChild(element) {
                        this._elements.forEach(ns => {
                            ns.appendChild(element);
                        });
                        return this;
                    }
                    ConcatAttribute(element, attribute, value) {
                        const current = element.getAttribute(attribute);
                        element.setAttribute(attribute, current + value);
                    }
                }
                MVVM.Widget = Widget;
                class InputWidget extends Widget {
                    constructor(selector) {
                        super(selector);
                    }
                    GetValue() {
                        return this.GetAttribute('value')[0];
                    }
                    SetValue(value) {
                        this.SetAttribute('value', value);
                        return this;
                    }
                }
                MVVM.InputWidget = InputWidget;
            })(MVVM = Core.MVVM || (Core.MVVM = {}));
        })(Core = Web.Core || (Web.Core = {}));
    })(Web = ToDo.Web || (ToDo.Web = {}));
})(ToDo || (ToDo = {}));
//# sourceMappingURL=Widget.js.map