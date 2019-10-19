namespace ToDo.Web.Core.MVVM {
    export interface IWidget {
        Selector: string;
        GetAttribute(attribute: string): Array<string>;
        AddAttribute(attribute: string, value: string): IWidget;
        SetAttribute(attribute: string, value: string): IWidget;
        AppendChild(element: Element): IWidget;
    }

    export abstract class Widget implements IWidget {
        constructor(private _selector: string) {
            this._elements = Array.from(document.querySelectorAll(_selector));
        }

        protected _elements: Array<Element>;

        public get Selector(): string {
            return this._selector;
        }

        public get Elements(): Array<Element> {
            return this._elements;
        }

        public GetAttribute(attribute: string): Array<string> {
            return this._elements.map(ns => ns.getAttribute(attribute));
        }

        public AddAttribute(attribute: string, value: string): IWidget {
            this._elements.forEach(ns => {
                this.ConcatAttribute(ns, attribute, value);
            });
            return this;
        }

        public SetAttribute(attribute: string, value: string): IWidget {
            this._elements.forEach(ns => {
                ns.setAttribute(attribute, value);
            });
            return this;
        }

        public AppendChild(element: Element): IWidget {
            this._elements.forEach(ns => {
                ns.appendChild(element);
            });

            return this;
        }

        protected ConcatAttribute(element: Element, attribute: string, value: string): void {
            const current = element.getAttribute(attribute);
            element.setAttribute(attribute, current + value);
        }
    }

    export class InputWidget extends Widget {
        constructor(selector: string) {
            super(selector);
        }

        public GetValue(): string {
            return this.GetAttribute('value')[0];
        }

        public SetValue(value: string): InputWidget {
            this.SetAttribute('value', value);
            return this;
        }
    }
}