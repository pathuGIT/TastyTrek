import React from 'react';
import {useNavigate} from 'react-router-dom';

const ListFoods = ({foods,valid,isPending}) => {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate('/edit-baby');
    };

    return (
        <div className="foods">
                {
                    valid && foods.results.map((food)=>(
                        <div className="food-box" id={food.id} onClick={()=>handleNavigate(food.id)}>
                            <div className="margin-box">
                                <div className="food-img">
                                    <img src={food.image} alt={food.title} />
                                </div>
                                <p>Id :{food.id}</p>
                                <p>{food.title}</p>
                                <p>Rs :{food.pricePerServing}</p>
                            </div>
                        </div>
                    ))
                }
                {!isPending && <p></p> }   
                {isPending && <p>Loading...</p> }  
        </div>
    );
}
 
export default ListFoods;