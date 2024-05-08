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
              src="/gate8.jpg"
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
              src="https://images.pexels.com/photos/12143394/pexels-photo-12143394.jpeg?auto=compress&cs=tinysrgb&w=600"
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
              src="/grill1.jpg"
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
                src="/shed1.jpg"
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
                src="/staircase.jpg"
                alt=""
              />
              <button>
              <Link to="products/staircase" className="link">
                  staircases
                </Link>
              </button>
            </div>
          </div>
          <div className="row">
            <img
              src="https://images.pexels.com/photos/2271100/pexels-photo-2271100.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
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
