import { useRef, useState } from "react";
import { searchFood } from "../servise/serivise";
import { searchFilter } from "../servise/serivise";
import { useEffect } from "react";
import {useNavigate} from 'react-router-dom';

const GetFood = ({foods, setFoods, valid, setValid, isPending, setIspending}) => {
    const query = useRef('');
    const filterAlco = useRef(0);
    const minCalc = useRef(0);
    const maxProt = useRef(0);
    const maxChol = useRef(0);
    const navigate = useNavigate();

    useEffect(()=>{
        console.log(foods)
    },[foods])

    const handleNavigate = (fid) => {
        navigate(`food-detail/${fid}`); 
    };
    const handleFilter = ()=>{
        setValid(false)
        setIspending(true);
        setTimeout(()=>{

            searchFilter(query.current.value,filterAlco.current.value,minCalc.current.value, maxProt.current.value, maxChol.current.value)
            .then((response2) => {
                setValid(true)
                setFoods(response2.data);
                console.log(response2.data);
                setIspending(false);
            })
            .catch((error) => {
                console.log(error);
            })
        },1000)
    }

    const handleSearch = (e)=>{
        e.preventDefault();
        setValid(false)
        
        if (query.current.value.trim() === '') {
            console.log("Error: Input is empty, null, or contains only symbols");
        } else {
            
        setIspending(true);
            setTimeout(()=>{
                searchFood(query.current.value)
                .then((response) => {
                    setValid(true)
                    setFoods(response.data);
                    console.log(response.data);
                    setIspending(false);
                })
                .catch((error) => {
                    console.log(error);
                })
            },1000)
        }
      }

    return (
        <div className="food-field">
            <h2 className="title">TastyTrek</h2>
            <form className="food-form">
                <input type="text" placeholder="Search your foods.." className="input-width" ref={query} required/>
                <input type="submit" className="input-width" value="SEARCH" onClick={handleSearch} />
            </form>

            <div class="col2">
                <div className="foods">
                    {
                        valid && foods.results.map((food)=>(
                            <div className="food-box" key={food.id} onClick={()=>handleNavigate(food.id)}>
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
                    {isPending && <p className="loading">Loading...</p> }  
                </div>   
                <div className="filter-box">
                    <label for="">Min Alcohol</label>
                    <input type="text" placeholder="24" id="" ref={filterAlco} />
                    <label for="">Min Calcium</label>
                    <input type="text" placeholder='2.5' id="" ref={minCalc} />
                    <label for="">Max Portein</label>
                    <input type="text" placeholder='3' id="" ref={maxProt} />
                    <label for="">Max Cholesterol</label>
                    <input type="text" placeholder="0.05" id="" ref={maxChol}/>
                    <button onClick={handleFilter}>Filter</button>
                </div> 
            </div>    
            
        </div>
    );
}
 
export default GetFood;