import { Link } from "react-router-dom";
import "./Categories.scss";

const Categories = () => {
  return (
    <div className="catContainer">
      <h2 className="design_heading">Disigns</h2>
      <div className="categories">
        <div className="col">
          <div className="row">
            <img
              src="https://images.pexels.com/photos/580151/pexels-photo-580151.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
            <button>
              <Link to="products/gates" className="link">
                Gate
              </Link>
            </button>
          </div>
          <div className="row">
            <img
              src="https://images.pexels.com/photos/5708069/pexels-photo-5708069.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
            <button>
              <Link to="products/pergola" className="link">
                Pergola
              </Link>
            </button>
          </div>
        </div>
        <div className="col">
          <div className="row imgL">
            <img
              src="https://images.pexels.com/photos/326347/pexels-photo-326347.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
            <button>
              <Link to="products/grills" className="link">
                Grills
              </Link>
            </button>
          </div>
        </div>
        <div className="col col-l">
          <div className="row">
            <div className="col ">
              <img
                src="https://images.pexels.com/photos/1462935/pexels-photo-1462935.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
              />
              <button>
                <Link to="products/sheds" className="link">
                  Shed
                </Link>
              </button>
            </div>
            <div className="col">
              <img
                src="https://images.pexels.com/photos/310435/pexels-photo-310435.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
              />
              <button>
              <Link to="products/railings" className="link">
                  Railings
                </Link>
              </button>
            </div>
          </div>
          <div className="row">
            <img
              src="https://images.pexels.com/photos/194096/pexels-photo-194096.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
            <button>
              <Link to="products/shutters" className="link">
                Shutters
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
