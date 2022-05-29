import axios from 'axios';
import React from 'react'
import FruitInfo from './components/FruitInfo';
import Loading from './components/Loading';
import TopBar from './components/TopBar';

function Fruits() {
    const [loading, setLoading] = React.useState(true);
    const [fruits, setFruits] = React.useState([]);
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
    const handleSearch = (e) => {
        const fruit = e.target.value;
        setActiveFruit(fruit);
    }
    return (
        <div>
            <TopBar component={"fruits"} />
            <div className='container-fluid px-5'>
                <div className='row'>
                    <Loading loading={loading} />
                    <div className='col-md-3'>
                        <div className='form-group mt-5'>
                            <span>select fruits from here</span>
                       <select className='form-control' onChange={handleSearch}>
                            {fruits.map(fruit => <option key={fruit} value={fruit}>{fruit}</option>)}
                        </select>
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