import React, {useState, useEffect} from 'react';
import './App.css';

function Item({match}) {

    useEffect(() => {
        fetchItem();
        console.log(match);
    }, []);

    const [item, setItems] = useState({});

    const fetchItem = async () => {
        const fetchItem = await fetch ('https://reqres.in/api/users?page=1');
        const item = await fetchItem.json();
        setItems(item.data[match.params.id-1]);
        console.log(item.data[match.params.id-1]);
    }

  return (
    <div>
      <h1>{item.first_name} {item.last_name}</h1>
      <img src={item.avatar} alt={item.first_name} style={{width: "200px"}} />
    </div>
  );
}

export default Item;
