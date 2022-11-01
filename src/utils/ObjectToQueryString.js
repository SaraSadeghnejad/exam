const ObjectToQueryString = object => {

    let result = '?';

    Object.entries(object).forEach((item, index) => {
        result += `${item[0]}=${item[1]}`;
        if (Object.entries(object).length > index + 1)
            result += '&';
    });

    return result;
}
export default ObjectToQueryString;