import React, {useEffect, useState} from 'react';
import Task6Table from "./Task6Table";

const URL = 'https://jsonplaceholder.typicode.com/users';

function Task6() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(URL)
      .then(resp => resp.json())
      .then(data => setData(data));
  }, [])

  return (
    <div>
      <Task6Table data={data}/>
    </div>
  );
}

export default Task6;

/* Task 6
Atkurkite lentelę, kurioje bus randama ši informacija apie vartotoją:
- name;
- email;
- address (street + city pvz.: "Kulas Light, Gwenborough");
- phone;
- company (name).

Informaciją imkite iš čia: https://jsonplaceholder.typicode.com/users

Pastaba: naudokite useState, useEffect.
*/
