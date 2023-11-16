import React, { useState, useEffect } from 'react';
import axios from 'axios';

function List() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get("https://northwind.vercel.app/api/products").then(res => {
            setData(res.data);
        });
    }, []);

  

    const deleteButton = (id) => {
        let target = data.find((item) => item.id === id);
        let targetIndex = data.indexOf(target);
        data.splice(targetIndex, 1);
        setData([...data]);
    };

    const addFunction = () => {
        const id = prompt("birinci:");
        const name = prompt("ikinci:");
        const unitPrice = prompt("ucundu:");
        const unitsInStock = prompt("dorduncu:");

        axios.post("https://northwind.vercel.app/api/products", { id, name, unitPrice, unitsInStock }).then(() => {
            
        });
    };

    return (
        <>
             <div id='button'>
                <button onClick={addFunction}>Add</button>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>unitPrice</th>
                        <th>unitsInStock</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((item) => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.unitPrice}</td>
                                <td>{item.unitsInStock}</td>
                                <td><button onClick={() => deleteButton(item.id)}>Delete</button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>

       
        </>
    );
}

export default List;

