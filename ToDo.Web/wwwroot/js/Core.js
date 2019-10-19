var ToDo;
(function (ToDo) {
    var Web;
    (function (Web) {
        var Core;
        (function (Core) {
            class ErrorUtil {
                static ThrowNotImplementedError() {
                    throw new Error('Not Implemented Error.');
                }
                static ThrowNotSupportedOperationError() {
                    throw new Error('Not Supported Operation Error.');
                }
                static ThrowInvalidOperationError() {
                    throw new Error('Invalid Operation Error.');
                }
            }
            Core.ErrorUtil = ErrorUtil;
        })(Core = Web.Core || (Web.Core = {}));
    })(Web = ToDo.Web || (ToDo.Web = {}));
})(ToDo || (ToDo = {}));
//# sourceMappingURL=ErrorUtil.js.map
var ToDo;
(function (ToDo) {
    var Web;
    (function (Web) {
        var Core;
        (function (Core) {
            class TypedFactory {
                constructor(_ctor) {
                    this._ctor = _ctor;
                }
                CreateInstance() {
                    return new this._ctor();
                }
            }
            Core.TypedFactory = TypedFactory;
        })(Core = Web.Core || (Web.Core = {}));
    })(Web = ToDo.Web || (ToDo.Web = {}));
})(ToDo || (ToDo = {}));
//# sourceMappingURL=TypedFactory.js.map