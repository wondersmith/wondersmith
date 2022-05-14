export function authenticated(target: any, propertyName: string, descriptor: TypedPropertyDescriptor<any>) {
    let method = descriptor.value!;
    descriptor.value = function () {
        if (!target.authToken) {
            throw new Error(`WondersmithAPIClient#${propertyName} requires authentication`);
        } else {
            return method.apply(this, arguments);
        }
    };
}
