namespace ToDo.Web.Core.MVVM {
    export abstract class View {
        constructor() {
            this._bindingBehaviors = new Array<BindingBehavior>();
        }

        public get Container(): Element {
            return this._container;
        }

        public set Container(value: Element) {
            this._container = value;
        }

        public get DataContext(): Core.MVVM.ViewModel {
            return this._dataContext;
        }

        public set DataContext(value: Core.MVVM.ViewModel) {
            this._dataContext = value;
        }

        public UpdateSource() {
            this._bindingBehaviors.forEach(b => {
                if (b instanceof DataBindingBehavior) {
                    b.UpdateSource();
                }
            })
        }

        public UpdateTarget() {
            this._bindingBehaviors.forEach(b => {
                if (b instanceof DataBindingBehavior) {
                    b.UpdateTarget();
                }
            });
        }

        public AddBindingBehavior(bindingBehavior: BindingBehavior) {
            if (bindingBehavior instanceof DataBindingBehavior) {
                const existBehavior = this._bindingBehaviors.find(b => {
                    const db = <DataBindingBehavior>b;
                    return db.VMProperty == bindingBehavior.VMProperty
                        && db.Property.PropertyName == bindingBehavior.Property.PropertyName;
                });

                // 重複チェック
                if (existBehavior) {
                    return;
                }

                this._bindingBehaviors.push(bindingBehavior);
            }
        }

        protected EventHandler: (sender, e) => void;
        private _bindingBehaviors: Array<BindingBehavior>;
        private _dataContext: Core.MVVM.ViewModel;
        private _container: Element;
    }

    export abstract class BindingBehavior {
        public get Container(): Element {
            return this._container;
        }

        public set Container(value: Element) {
            this._container = value;
        }

        public get DataContext(): ViewModel {
            return this._dataContext;
        }

        public set DataContext(value: ViewModel) {
            this._dataContext = value;
        }

        public abstract Ensure(): void;

        private _container: Element;
        private _dataContext: ViewModel;
    }

    export class DataBindingBehavior extends BindingBehavior {
        public Property: DependencyProperty;
        public VMProperty: string

        public Ensure(): void {
            throw new Error("Method not implemented.");
        }

        public UpdateSource(): void {
            let value = this.Property.GetValue(this.Container);
            this.DataContext[this.VMProperty] = value;
        }

        public UpdateTarget(): void {
            this.Property.SetValue(this.Container, this.DataContext[this.VMProperty]);
        }
    }

    export class ActionBindingBehavior extends BindingBehavior {
        public Event: IEvent;
        public ActionHandle: (e: any) => void;

        public Ensure(): void {
            if (this.Event && this.Event.EventName) {
                this.Container.addEventListener(this.Event.EventName, e => this.ActionHandle(e))
            }
        }
    }

    export class DependencyProperty {
        constructor(name: string) {
            this._propertyName = name;
        }

        public get PropertyName(): string {
            return this._propertyName;
        }

        private _propertyName: string;

        public get GetValue(): (element: Element) => any {
            return this._getter;
        }

        private _getter: (element: Element) => any;

        public get SetValue(): (element: Element, value: any, caller?: any) => void {
            return this._setter;
        }

        private _setter: (element: Element, value: any, caller?: any) => void;

        public static Attach(
            propertyName: string,
            getValue: (element: Element) => any,
            setValue: (element: Element, value: any, caller?: any) => void) {

            let dp = new DependencyProperty(propertyName);
            dp._getter = getValue;
            dp._setter = setValue;
            return dp;
        }
    }

    export class UIAttribute {
        public static readonly ValueAttribute = DependencyProperty.Attach(
            'value',
            (el: Element) => {
                if (el instanceof HTMLInputElement) {
                    return el.value;
                } else {
                    return el.getAttribute('value');
                }
            },
            (el: Element, value: any) => {
                if (el instanceof HTMLInputElement) {
                    el.value = value;
                } else {
                    el.setAttribute('value', value);
                }
            });

        //public static readonly CheckedAttribute = DependencyProperty.Attach(
        //'checked',
        //(el: Element) => el.getAttribute('checked'),
        //(el: Element, value: any) => {
        //    if (value) {
        //        el.setAttribute('checked', value)
        //    } else {
        //        el.removeAttribute('checked');
        //    }
        //});

        //public static readonly DisabledAttribute = DependencyProperty.Attach(
        //    'disabled',
        //    (el: Element) => el.getAttribute('disabled'),
        //    (el: Element, value: any) => {
        //        if (value) {
        //            el.setAttribute('disabled', value)
        //        } else {
        //            el.removeAttribute('disabled');
        //        }
        //    });

    }
}