import axios from 'axios';
import React from 'react'

function FruitInfo({ fruit }) {

    const [loading, setLoading] = React.useState(true);
    const [info, setFruitInfo] = React.useState({});
    const [error, setError] = React.useState(null);
    const [recipes, setRecipes] = React.useState([]);

    const getData = async () => {
        const options = {
            method: 'GET',
            url: `https://fit-life-food.p.rapidapi.com/nutrition/${String(fruit).toLowerCase()}`,
            headers: {
              'X-RapidAPI-Host': 'fit-life-food.p.rapidapi.com',
              'X-RapidAPI-Key': '4c867d69ccmsh0bdd9cea6e20c70p15487cjsn0dd816841b19'
            }
          };
        const options_ = {
            method: 'GET',
            url: `https://fit-life-food.p.rapidapi.com/recipes/${String(fruit).toLowerCase()}`,
            headers: {
              'X-RapidAPI-Host': 'fit-life-food.p.rapidapi.com',
              'X-RapidAPI-Key': '4c867d69ccmsh0bdd9cea6e20c70p15487cjsn0dd816841b19'
            }
          };
        await axios.request(options).then(function (response) {
            setFruitInfo(response.data);
            setLoading(false);
        }).catch(function (error) {
            setError(error);
            console.error(error);
        });
        await axios.request(options_).then(function (response) {
            setRecipes(response.data);
            setLoading(false);
        }).catch(function (error) {
            console.error(error);
        });
    }


    React.useEffect(() => {
        setLoading(true);
       fruit && getData();
       //eslint-disable-next-line
    }, [fruit]);
    return (

        <div className='container-fluid'>
            <div className='row mt-5'>
                <div className='col-md-5'>
                {loading && !error ? "" :
                        <div className='card'>
                            <div className='card-header'>
                                <h4>Nutrition</h4>
                            </div>
                            <div className='list-group p-5'>
                                <h4>Water: {info.Water}</h4>
                                <h4>Protein: {info.Protein}</h4>
                                <h4>Carbohydrates: {info.Carbs}</h4>
                                <h4>Fat: {info.Fat}</h4>
                                <h4>Calories: {info.Calories}</h4>
                                <h4>Sugar: {info.Sugar}</h4>
                                <h4>Fiber: {info.Fiber}</h4>
                            </div></div>}
                        </div>
                        <div className='col-md-7'>
                        {loading ? <div className='col-md-12'></div> :
                            <div className=''>
                                <div className='card-header'>
                                    <h4>Recipes</h4>
                                </div>
                                <div className='list-group p-2'>
                                    {recipes.length > 0 && recipes.map((recipe,k) => (
                                        <div className='list-group-item b-0 my-2' key={k}>
                                            <h3 className='text-danger'>{recipe.RecipeName}</h3>
                                            <h5>Ingrediants</h5>
                                            {recipe?.ingrediants.map((ingredient,key) => (
                                                <p key={key}>{ingredient}</p>
                                            ))}
                                            <hr />
                                            <h5>Directions</h5>
                                            {recipe?.steps.map((direction,k) => (
                                                <p key={k}>{direction}</p>
                                            ))}
                                        
                                        </div>
                                    ))}
                                </div></div>}
                       
            </div>
        </div>
        </div>
    )
}

export default FruitInfo