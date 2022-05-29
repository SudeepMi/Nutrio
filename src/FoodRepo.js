import axios from 'axios';
import React from 'react'
import Loading from './components/Loading';
import TopBar from './components/TopBar';

function FooRepo() {

  const [loading, setLoading] = React.useState(true);
  const [food, setFood] = React.useState([]);
  const [error, setError] = React.useState(null);
  
  React.useEffect(() => {
    setLoading(true);
    const options = {
      method: 'GET',
      url: 'https://www.foodrepo.org/api/v3/products',
      headers: {
       'Content-Type': 'application/json',
        'Authorization':'Token token=f229722788cebac9de474fff8f9ccf3e'
      }
    }
    axios.request(options).then(function (response) {
      setFood(response.data.data);
      setLoading(false);
    }).catch(function (error) {
      setError(error);
      console.error(error);
    }
    );
}, []);

  const [active, setActive] = React.useState(0);

  return (
    <>
    <TopBar component={'FooRepo'}/>
    <div className='container'>
    <div className='row'>
      <div className='col-md-12'>
        {loading && !error ? <Loading loading={loading}/> :
          <div className='card'>
            <div className='card-header'>
              <h4>Food Repo</h4>
            </div>
            
            <div className='list-group p-5'>
                <div className='list-group-item' key={food.id}>
                  <h4>{food[active].display_name_translations["en"]}</h4>
                  <p>Alcohol by volume : {food[active].alcohol_by_volume}</p>
                  <h6>Images</h6>
                  <div className=' bg-light d-flex flex-wrap'>
                  { food[active].images ? 
                    food[active].images.map((image,key) =>
                      <div key={key} className="mx-5">
                      <h5>{image.categories[active]}</h5>
                      <img src={image.medium} alt={image.alt}/>
                      </div>
                    )
                  : null}
</div>  
<div className='list-group-item'>
                    <h5>Ingrediants</h5>
                    <p>
                    { food[active].ingredients_translations ?
                      food[active].ingredients_translations["en"] :"No ingredients"}
                      </p>
                    <h5>Nutrients</h5>
                    <div className='row'>
                      <div className='col-md-4'>
                      <h6> Carbohydrates </h6>
                    <p> Per Day {
                    food[active].nutrients ? food[active].nutrients.carbohydrates.per_day : "No nutrients"}
                    </p>
                    <p> Per Hundred {
                    food[active].nutrients ? food[active].nutrients.carbohydrates.per_hundred : "No nutrients"}
                    </p>
                    <p> Per Portion {
                    food[active].nutrients ? food[active].nutrients.carbohydrates.per_portion : "No nutrients"}
                    </p>
                    <p> Unit {
                    food[active].nutrients ? food[active].nutrients.carbohydrates.unit : "No nutrients"}
                    </p>
                    <h6> Sodium </h6>
                    <p> Per Day {
                    food[active].nutrients.sodium ? food[active].nutrients?.sodium.per_day : "No nutrients"}
                    </p>
                    <p> Per Hundred {
                    food[active].nutrients.sodium ? food[active].nutrients?.sodium.per_hundred : "No nutrients"}
                    </p>
                    <p> Per Portion {
                    food[active].nutrients.sodium ? food[active].nutrients.sodium.per_portion : "No nutrients"}
                    </p>
                    <p> Unit {
                    food[active].nutrients.sodium ? food[active].nutrients.sodium.unit : "No nutrients"}
                    </p>

                      </div>
                      <div className='col-md-4'>
                      <h6> Fat </h6>
                    <p> Per Day {
                    food[active].nutrients ? food[active].nutrients.fat.per_day : "No nutrients"}
                    </p>
                    <p> Per Hundred {
                    food[active].nutrients ? food[active].nutrients.fat.per_hundred : "No nutrients"}
                    </p>
                    <p> Per Portion {
                    food[active].nutrients ? food[active].nutrients.fat.per_portion : "No nutrients"}
                    </p>
                    <p> Unit {
                    food[active].nutrients ? food[active].nutrients.fat.unit : "No nutrients"}
                    </p>
                    <h6> Sugars </h6>
                    <p> Per Day {
                    food[active].nutrients.sodium ? food[active].nutrients.sugars.per_day : "No nutrients"}
                    </p>
                    <p> Per Hundred {
                    food[active].nutrients.sodium ? food[active].nutrients.sugars.per_hundred : "No nutrients"}
                    </p>
                    <p> Per Portion {
                    food[active].nutrients ? food[active].nutrients.sugars.per_portion : "No nutrients"}
                    </p>
                    <p> Unit {
                    food[active].nutrients ? food[active].nutrients.sugars.unit : "No nutrients"}
                    </p>

                      </div>
                      <div className='col-md-4'>
                      <h6> Protein </h6>
                    <p> Per Day {
                    food[active].nutrients ? food[active].nutrients.protein.per_day : "No nutrients"}
                    </p>
                    <p> Per Hundred {
                    food[active].nutrients ? food[active].nutrients.protein.per_hundred : "No nutrients"}
                    </p>
                    <p> Per Portion {
                    food[active].nutrients ? food[active].nutrients.protein.per_portion : "No nutrients"}
                    </p>
                    <p> Unit {
                    food[active].nutrients ? food[active].nutrients.protein.unit : "No nutrients"}
                    </p>
                      
                   
                    <h6> Energy </h6>
                    <p> Per Day {
                    food[active].nutrients ? food[active].nutrients.energy.per_day : "No nutrients"}
                    </p>
                    <p> Per Hundred {
                    food[active].nutrients ? food[active].nutrients.energy.per_hundred : "No nutrients"}
                    </p>
                    <p> Per Portion {
                    food[active].nutrients ? food[active].nutrients.energy.per_portion : "No nutrients"}
                    </p>
                    <p> Unit {
                    food[active].nutrients ? food[active].nutrients.energy.unit : "No nutrients"}
                    </p>
                      </div>

                    </div>
                    
                   
                   
                 
                    
                    </div>
                    </div></div>
                  <div className='card-footer'>
                      <div className='btn-group d-flex justify-content-around'>
                        {
                          active > 0 ? <button className='btn mx-3 btn-success' onClick={() => setActive(active-1)}>Previous</button> : null
                        }
                        {
                          active < food.length-1 ? <button className='btn mx-3 btn-danger' onClick={() => setActive(active+1)}>Next</button> : null
                        }

                      </div>
                    </div>
                    </div>}
            
                    </div></div></div>
                   </>
                )
            }
export default FooRepo;
           

               