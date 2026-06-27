class ObjectUtils {
    // convert an object or array keys from snake case to camel case recursively
    public toCamelCase<T>(obj: T | T[]): T | T[] {
        const snakeCaseString = JSON.stringify(obj);

        const camelCaseString = snakeCaseString.replace(/([-_][a-z])/ig, ($1) => {
            return $1.toUpperCase()
                .replace('-', '')
                .replace('_', '');
        });

        return JSON.parse(camelCaseString);
    }
}

export default new ObjectUtils();