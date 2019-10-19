namespace ToDo.Web.Core {
    export class ErrorUtil {
        public static ThrowNotImplementedError() {
            throw new Error('Not Implemented Error.');
        }

        public static ThrowNotSupportedOperationError() {
            throw new Error('Not Supported Operation Error.');
        }

        public static ThrowInvalidOperationError() {
            throw new Error('Invalid Operation Error.');
        }
    }
}