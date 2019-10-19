var ToDo;
(function (ToDo) {
    var Web;
    (function (Web) {
        var Core;
        (function (Core) {
            var Mediator;
            (function (Mediator) {
                class Publisher {
                    constructor(_id) {
                        this._id = _id;
                    }
                    get Id() {
                        return this._id;
                    }
                    AddSubscriber(subscriber) {
                        this._subscribers.push(subscriber);
                    }
                    PublishAll(e) {
                        this.Publish(e, this._subscribers);
                    }
                    Publish(e, subscribers) {
                        subscribers.forEach(s => {
                            s.OnSubscribe(e, this);
                        });
                    }
                }
                Mediator.Publisher = Publisher;
            })(Mediator = Core.Mediator || (Core.Mediator = {}));
        })(Core = Web.Core || (Web.Core = {}));
    })(Web = ToDo.Web || (ToDo.Web = {}));
})(ToDo || (ToDo = {}));
//# sourceMappingURL=Publisher.js.map