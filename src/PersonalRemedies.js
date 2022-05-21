import axios from 'axios';
import React from 'react'
import PR from './components/PR';
import TopBar from './components/TopBar';

function Recipe() {
   
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(null);
    const [query, setQuery] = React.useState('');
    const [recipes, setRecipes] = React.useState([]);
   
    const handleSearch = async (e) => {
        setLoading(true);
        setError(null);
        alert(query);
        const options = {
            method: 'GET',
            url: 'https://recipe-by-api-ninjas.p.rapidapi.com/v1/recipe',
            params: {query: query},
            headers: {
              'X-RapidAPI-Host': 'recipe-by-api-ninjas.p.rapidapi.com',
              'X-RapidAPI-Key': '4c867d69ccmsh0bdd9cea6e20c70p15487cjsn0dd816841b19'
            }
          };
        
        await axios.request(options)
            .then(res => {
                setRecipes(res.data);
                setLoading(false);
            })
            .catch(err => {
                setError(err);
                console.log(err);
                setLoading(false);
            });
        }
   

  return (
    <div>
       <div>
            <TopBar component={"personal-remedies"} />
            <div className='container-fluid px-5'>
                <div className='row'>
                    <div className='col-md-12 d-flex my-5'>
                        <input type={'text'} className='form-control mx-5' placeholder={'Search'} onChange={e=>setQuery(e.target.value)} />
                        <button className='btn btn-outline-dark btn-outline btn-lg px-5 my-1' onClick={()=>handleSearch()}>
                            Search
                        </button>
                        {loading && <div>Loading...</div>}
                      </div>
                        <div className='row'>
                            { recipes.map((recipe, index) => (
                                <div className='col-md-4' key={index}>
                                    <div className='card my-4'>
                                        <div className='card-header'>
                                    <h3>{recipe.title}</h3>
                                    </div>
                                    <div className='card-body'>
                                        <h5>Serving : {recipe.servings}</h5>
                                        <h6>Ingredients</h6>
                                        { String(recipe.ingredients).split('|').map((ingredient, index) => {
                                            return <li key={index}>{ingredient}</li>
                                        })}
                                         <h6>Ingredients</h6>
                                        <p>{recipe.instructions}</p>
                                         
                                    </div>
                                    </div>
                                </div>
                            ))}
                    </div>  
                    
                   
                </div>
            </div>
        </div>

    </div>
  )
}

export default Recipe