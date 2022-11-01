const InputChangeHandler = (e, data, setData) => {

    const {name, value} = e.target;

    setData({
        ...data,
        [name]: value,
    });
};

export default InputChangeHandler;
