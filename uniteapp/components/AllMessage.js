import axios from 'axios'
import {getAll} from '../service';
import endPoint from '../config'
import { useEffect, useState } from 'react';
import SentMessage from './SentMessage'

const AllMessage =  () => {
    const [messages, setmessage] = useState();

    useEffect(() => {
      const fetchData = async () => {
        const { data: message } = await getAll(endPoint + 'newrequests');
        setmessage(message);  
            console.log("message", message);
      };
    
      fetchData();
    }, []);
    
   
    
    
  return (
    <div>
      all message
      {
        messages?
        messages.map((m, index) => {
            return <SentMessage key = {index} message = {m} />
        })
        :
        null
      }
    </div>
  )
}

export default AllMessage
