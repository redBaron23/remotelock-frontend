class ObjectUtils {
    // convert an object keys from snake case to camel case (thanks to copilot ❤️)
    public static toCamelCase(obj: any): any {
        let newObj = {};
        for (let key in obj) {
            if (obj.hasOwnProperty(key)) {
                let newKey = key.replace(/(_\w)/g, (m) => m[1].toUpperCase());
                newObj[newKey] = obj[key];
            }
        }
        return newObj;
    }
}

export default new ObjectUtils();