
const Message = ({ name, text }) => {
    return (
        <div className="my-message bg-blue-500 rounded-tl-lg rounded-bl-lg rounded-br-lg p-3 text-white">
            <div className="message__details flex content-center gap-2">
                <img className="message__details-icon" src="/static/images/icons/user.svg" alt="" />
                <div className="message__details-name flex content-center"><span className="font-black text-base">{name}</span></div>
            </div>
            <p className="my-message__text mt-1 text-sm">{text}</p>
        </div>
    );
}

export default Message;