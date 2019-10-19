var ToDo;
(function (ToDo) {
    var Web;
    (function (Web) {
        var Core;
        (function (Core) {
            var MVVM;
            (function (MVVM) {
                class View {
                    constructor() {
                        this.Bind();
                    }
                }
                MVVM.View = View;
            })(MVVM = Core.MVVM || (Core.MVVM = {}));
        })(Core = Web.Core || (Web.Core = {}));
    })(Web = ToDo.Web || (ToDo.Web = {}));
})(ToDo || (ToDo = {}));
//# sourceMappingURL=View.js.map