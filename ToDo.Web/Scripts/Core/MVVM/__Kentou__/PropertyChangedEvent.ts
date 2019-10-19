namespace ToDo.Web.Core.MVVM {

    export class PropertyChangedEvent implements IEvent {
        constructor(private _propertyName: string, private _oldValue: any, private _newValue: any) { }

        public get Name(): string {
            return 'PropertyChangedEvent';
        }

        public get PropertyName(): string {
            return this._propertyName;
        }

        public get OldValue(): any {
            return this._oldValue;
        }

        public get NewValue(): any {
            return this._newValue;
        }
    }
}