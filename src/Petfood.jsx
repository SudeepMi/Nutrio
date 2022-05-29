import axios from "axios";
import React from "react";
import Loading from "./components/Loading";
import TopBar from "./components/TopBar";

function Petfood() {
  const [petfood, setPetfood] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    axios.get("https://anyscrap.herokuapp.com/api/petfood").then((res) => {
    //   console.log(res.data);
      setPetfood(res.data.data.wikiUrls);
        setLoading(false);
    });
  }, []);

  return (
    <div id="petSection">
      <TopBar component={"petfood"} />
      <div className="container">
          <Loading loading={loading} />
        <div className="row">
            <h2 className="text-center text-secondary">Find foods for your pets</h2>
          {petfood.map((item, index) => {
            return (
              <div className="col-lg-2 col-md-4 col-sm-12 " key={index}>
                <div className="card my-3">
                  <img
                    className="card-img-top"
                    src={item.img}
                    alt="Card cap"
                    width={50}
                  />
                  <div className="card-body">
                    <h6 className="card-title">{item.title}</h6>
                    </div>
                    <div className="card-footer p-0">
                    <a href={item.link} className="btn btn-sm w-100 btn-block btn-outline-secondary">
                      Buy
                    </a>
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

export default Petfood;
