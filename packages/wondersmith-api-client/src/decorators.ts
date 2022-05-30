// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function authenticated(target: any, propertyName: string, descriptor: TypedPropertyDescriptor<any>) {
    const method = descriptor.value!;
    descriptor.value = function () {
        if (!target.authToken) {
            throw new Error(`WondersmithAPIClient#${propertyName} requires authentication`);
        } else {
            // eslint-disable-next-line prefer-rest-params
            return method.apply(this, arguments);
        }
    };
}
