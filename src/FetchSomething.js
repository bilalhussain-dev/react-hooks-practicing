import React, { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'

function FetchSomething() {


  const [data, setData] =  useState("");

  useEffect(() => {
      console.log('Fetch Something');
      axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        //   setData(response.data);
        //   console.log(response.data[0])


        // {
        //     "id": 1,
        //     "name": "Leanne Graham",
        //     "username": "Bret",
        //     "email": "Sincere@april.biz",
        //     "address": {
        //         "street": "Kulas Light",
        //         "suite": "Apt. 556",
        //         "city": "Gwenborough",
        //         "zipcode": "92998-3874",
        //         "geo": {
        //             "lat": "-37.3159",
        //             "lng": "81.1496"
        //         }
        //     },
        //     "phone": "1-770-736-8031 x56442",
        //     "website": "hildegard.org",
        //     "company": {
        //         "name": "Romaguera-Crona",
        //         "catchPhrase": "Multi-layered client-server neural-net",
        //         "bs": "harness real-time e-markets"
        //     }
        // }

        // setData[response.data[0]];
        // setData[response.data[0]]
        console.log(response.data[0]);
      }).catch(err => {
          if(err) throw err;
      })

  }, []);


  return (
    <div>
        <span>Fetched Data</span>
        <div className='data'>
            {/* {data.id} */}
        </div>
    </div>
  )
}

export default FetchSomething