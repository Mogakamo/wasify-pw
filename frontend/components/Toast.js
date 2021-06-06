const Toast = () => {
    return (
        <div class="toast" data-autohide="false">
            <div class="toast-header">
                <strong class="mr-auto text-primary" >Toast Header</strong>
                <small class="text-muted">5 min ago</small>
                <button type="button" class="m1-2 mb-1 close" data-dismiss="toast">&times;</button>
            </div>
            <div class="toast-body">
                Some text inside the toast 
                
            </div>
        </div>
    )
}

export default Toast