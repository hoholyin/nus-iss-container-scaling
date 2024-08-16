import {useEffect, useState} from "react";

const MessageHolder = (props) => {
    const [message, setMessage] = useState("");

    const getRequest = async function (url) {
        const requestOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        }
        const promise = await fetch(url, requestOptions)
        return await promise.json()
    }

    useEffect(() => {
        async function fetchData() {
            const messageObj = await getRequest("https://nus-iss-container-scaling.onrender.com/api/getMessage");
            console.log(JSON.stringify(messageObj));
            setMessage(messageObj.data);
        }
        fetchData();
    }, []);

    return (
        <div>
          <span>{message}</span>
        </div>
    )
}

export default MessageHolder;
