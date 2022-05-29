import React from "react";
import Loading from "./components/Loading";
import TopBar from "./components/TopBar";
const axios = require("axios");

function Findfood() {
  const [food, setFood] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [query, setQuery] = React.useState("");
  const [isFocused, setIsFocused] = React.useState(false);
  const [focusedItem, setFocusedItem] = React.useState({});

  const handleClick = (e) => {
    // fetch data from api
    e.preventDefault();
    setFood([]);
    setLoading(true);
    const options = {
      method: "GET",
      url: "https://edamam-recipe-search.p.rapidapi.com/search",
      params: { q: query },
      headers: {
        "X-RapidAPI-Host": "edamam-recipe-search.p.rapidapi.com",
        "X-RapidAPI-Key": "4c867d69ccmsh0bdd9cea6e20c70p15487cjsn0dd816841b19",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        setFood(response.data.hits);
        setLoading(false);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  const handleFocus = (item) => {
    setFocusedItem(item);
    setIsFocused(true);
  };
  return (
    <div id="find_food">
      <TopBar component={"findfood"} />
      <div className="container">
        <div className="row mt-4">
          <span className="text-center text-secondary my-2">
            Find food by ingredients, diets, allergies, nutrition, taste,
            techniques &amp; more
          </span>
          <div className="d-flex justify-content-evenly">
            <input
              type="text"
              className="form-control mr-2 w-75"
              placeholder="Cancer, peanut, peanut-free, vegan, vegetarian"
              onChange={(e) => setQuery(e.target.value)}
            />
            <button
              className="ml-4 btn btn-block btn-outline-dark"
              onClick={(e) => handleClick(e)}
            >
              Search
            </button>
          </div>
          <Loading loading={loading} />
          <div className="col-lg-12 col-md-12 col-sm-12">
            {isFocused && (
              <FocusedCard item={focusedItem} setFocus={setIsFocused} />
            )}
          </div>
          {!isFocused &&
            food.map((item, index) => {
              return (
                <div
                  className="col-lg-3 col-md-4 col-sm-12 "
                  key={index}
                  onClick={(e) => handleFocus(item)}
                >
                  <div className="card my-3 mx-2">
                    <img
                      className="card-img-top"
                      src={item.recipe.image}
                      alt="Card cap"
                      width={50}
                    />
                    <div className="card-body">
                      <h6 className="card-title">{item.recipe.label}</h6>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}
const badges = [
  "success",
  "danger",
  "warning",
  "info",
  "primary",
  "secondary",
  "light",
  "dark",
];

const FocusedCard = ({ item, setFocus }) => {
  console.log(item.recipe);
  return item ? (
    <div className="card my-3 __focus">
      <div className="row">
        <div className="col-lg-4 col-md-4 col-sm-12">
          <img
            className="card-img-top"
            src={item?.recipe?.image}
            alt="Card cap"
            width={50}
          />
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12">
          <div className="card-body">
            <h6 className="card-title">{item.recipe.label}</h6>
            {item.recipe.mealType &&
              item.recipe.mealType.map((type, index) => (
                <p className="card-text" key={index}>
                  <span className="badge badge-secondary">{type}</span>
                </p>
              ))}
          </div>
          <div className="w-100 flex flex-wrap p-3">
            <p>Health Labels:</p>
            {item.recipe.healthLabels.map((label, index) => {
              return (
                <span
                  className={`badge badge-${
                    badges[Math.floor(Math.random() * badges.length)]
                  } mx-1`}
                  key={index}
                >
                  {label}
                </span>
              );
            })}
            <hr />
            {item.recipe.dietLabels.length > 0 && <p>Diet Labels:</p>}
            {item.recipe.dietLabels.map((label, index) => {
              return (
                <span
                  className={`badge badge-${
                    badges[Math.floor(Math.random() * badges.length)]
                  } mx-1`}
                  key={index}
                >
                  {label}
                </span>
              );
            })}
            <hr />
            {item.recipe.dishType.length > 0 && <p>Dish Type:</p>}
            {item.recipe.dishType.map((label, index) => {
              return (
                <span
                  className={`badge badge-${
                    badges[Math.floor(Math.random() * badges.length)]
                  } mx-1`}
                  key={index}
                >
                  {label}
                </span>
              );
            })}
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12">
          <div className="w-100 flex flex-wrap p-3">
            <p>Causine</p>
            {item.recipe.cuisineType.map((label, index) => {
              return (
                <span
                  className={`badge badge-${
                    badges[Math.floor(Math.random() * badges.length)]
                  } mx-1`}
                  key={index}
                >
                  {label}
                </span>
              );
            })}
            <hr />
            <p>Cautions</p>
            {item.recipe.cautions.map((label, index) => {
              return (
                <span
                  className={`badge badge-${
                    badges[Math.floor(Math.random() * badges.length)]
                  } mx-1`}
                  key={index}
                >
                  {label}
                </span>
              );
            })}
            <hr />
            <p>Calories</p>

            <span
              className={`badge badge-${
                badges[Math.floor(Math.random() * badges.length)]
              } mx-1`}
            >
              {item.recipe.calories}
            </span>

            <hr />
            <p>Source</p>

            <span
              className={`badge badge-${
                badges[Math.floor(Math.random() * badges.length)]
              } mx-1`}
            >
              {item.recipe.source}
            </span>

            <hr />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12 col-md-10 col-sm-12 p-4">
            <p className="text-bold">Ingredients</p>
            <hr/>
            <div className="row">
            {item.recipe.ingredients.map((ingredient, index) => {
                return (
                    <div className="col-md-3 d-grid" key={index}>
                        <img src={ingredient.image} alt="" width={200} />
                    <span
                        className={`text-secondary mx-1`}
                        key={index}
                    >
                        {ingredient.text}
                    </span>
                    </div>
                );
            })}
            </div>
        </div>
        <div className="col-lg-12 col-md-10 col-sm-12 p-4">
            <p className="text-bold">Nutirtion</p>
            <hr/>
            <div className="row">
            {
                item.recipe.totalNutrients && 
                Object.keys(item.recipe.totalNutrients).map((key, index) => {
                    return (
                        <div className="col-md-3 d-grid" key={index}>
                            <span className={`text-secondary mx-1 py-3`} key={index}>
                               <span className="text-dark text-bolder">{item.recipe.totalNutrients[key].label}{" : "}</span>
                                {parseFloat(item.recipe.totalNutrients[key].quantity).toPrecision(5)}
                                {item.recipe.totalNutrients[key].unit}
                            </span>
                        </div>
                    );
                })
            }
            </div>

        </div>
      </div>

      <div className="card-footer">
        <button onClick={() => setFocus(false)}>close</button>
      </div>
    </div>
  ) : null;
};

export default Findfood;
