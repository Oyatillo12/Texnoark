import { notification } from "antd"

type NotificationType = "success" | "warning" | "error" | "info" 

const Notification = (  type: NotificationType, message: string, description?: string) => {
    notification[type]({
        type: type,
        message: message,
        description: description,
        placement: 'topRight', 
        duration: 2,
        showProgress:true,
    })
}

export default Notification
