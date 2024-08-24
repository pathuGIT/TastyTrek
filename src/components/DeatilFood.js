import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const DetailFood = ({ foods, valid }) => {
    const { id } = useParams();
    const [localFoods, setLocalFoods] = useState(null);

    useEffect(() => {
        if (performance.navigation.type === 1) {
            console.log('Page was refreshed');
            // Perform actions when the page is refreshed
        }
        // Load foods data from localStorage if it exists
        const savedFoods = localStorage.getItem('savedFoods');
        if (savedFoods) {
            setLocalFoods(JSON.parse(savedFoods));
        }
    }, []);

    // Use localFoods if foods is empty or not valid
    const foodData = valid ? foods : localFoods;

    return (
        <div>
            {foodData && foodData.results && foodData.results.map((food) => (
                food.id == id && (
                    <div key={food.id}>
                        <img src={food.image} alt={food.title} />
                        <p>ID: {food.id}</p>
                        <p>Name: {food.title}</p>
                        <p>Price: {food.pricePerServing}</p>
                        <p>Time for prepare: {food.readyInMinutes} Minutes</p>
                        <p>{food.summary}</p>
                    </div>
                )
            ))}
        </div>
    );
}

export default DetailFood;
