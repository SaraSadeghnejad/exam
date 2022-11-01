const SingleResponseHandler = (response, setData) => {
    response = response.data.data.data;

    let result = response.length > 0 ?
        {data: response[0], loading: false, notFound: false}
        :
        {data: [], loading: false, notFound: true};

    setData(result);
}

export default SingleResponseHandler;
