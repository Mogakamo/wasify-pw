const Toast = ({ msg, handleShow, bgColor }) => {
    return (
        <div className={`toast show position-fixed text-light ${bgColor}`}
            style={{ top: '5px', right: '125px', zIndex: 9, minWidth: '280px' }}
            data-autohide="false">
            <div className={`toast-header ${bgColor} text-light`}>
                <strong className="mr-auto text-light">{msg.title}</strong>
                <button type="button" className="ml-2 mb-1 close text-light"
                    data-dismiss="toast" style={{ background: 'none', outline: 'none', border: 'none' }}
                    onClick={handleShow}>&times;</button>
            </div>

            <div className="toast-body">{msg.msg}</div>
        </div>
    )
}

export default Toast