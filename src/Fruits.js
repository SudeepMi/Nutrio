import axios from 'axios';
import React from 'react'
import FruitInfo from './components/FruitInfo';
import TopBar from './components/TopBar';

function Fruits() {
    const [loading, setLoading] = React.useState(true);
    const [fruits, setFruits] = React.useState([]);
    const [error, setError] = React.useState(null);
    const [activeFruit, setActiveFruit] = React.useState(null);

    React.useEffect(() => {
        const options = {
            method: 'GET',
            url: 'https://fit-life-food.p.rapidapi.com/food',
            headers: {
              'X-RapidAPI-Host': 'fit-life-food.p.rapidapi.com',
              'X-RapidAPI-Key': '4c867d69ccmsh0bdd9cea6e20c70p15487cjsn0dd816841b19'
            }
          };

        axios.request(options).then(function (response) {
            setFruits(response.data);
            setActiveFruit(response.data[0]);
            setLoading(false);
        }).catch(function (error) {
            console.error(error);
        });

    }, []);
    return (
        <div>
            <TopBar component={"fruits"} />
            <div className='container-fluid px-5'>
                <div className='row'>
                    <div className='col-md-3 d-grid'>
                        <input type={'text'} className='form-control my-4' placeholder={'Search'} />
                        <div className='list-group'>
                    {fruits.map((fruit, index) => {
                        return (
                            <button className='btn btn-outline-dark btn-outline btn-lg px-5 my-1' key={index} 
                            onClick={() => {setActiveFruit(fruit)}}>
                            
                                {fruit}
                            </button>
                        )
                    })}
                    </div>
                    </div>
                    <div className='col-md-9'>
                        <FruitInfo fruit={activeFruit} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Fruits