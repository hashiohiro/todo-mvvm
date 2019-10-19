interface Object {
    GetConstructor(): string;
    GetTypeName(): string;
}

Object.prototype.GetConstructor = function() {
    return this.constructor;
}

Object.prototype.GetTypeName = function () {
    return this.constructor.name;
}