import { useState } from 'react';
import "../App.css";


function Matrix(){
    const [colors,setColors] = useState(Array(9).fill("White"));
    const [clickOrder,setClickOrder] = useState([]);


    const  handleClick = (index) => {
        if(colors[index] === "White"){
            const newColors = [...colors];
            newColors[index] = 'green';
            setColors(newColors);
            setClickOrder([...clickOrder,index]);
        }else if (index === 8){
            const newColors = [...colors]
            clickOrder.forEach((i,orderIndex) => {
                setTimeout(() => {
                    newColors[i] = "orange"
                    setColors([...newColors]);
                }, orderIndex * 300)
            });
        }
    }


    return (
        <div className='grid'>
            {
                colors.map((color,index) => (
                   <div key ={index} className='box' style={{background:color}}
                   onClick={() => handleClick(index)}>
                    </div>
                ))}
        </div>
    )

}



export default Matrix