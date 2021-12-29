import react from "react";
import ReactDOM from "react-dom";
import Cards from "./Cards";
import "./index.css";
import Sdata from "./Sdata";
function Card(props) {
  console.log(props);
  return (
    <>
      <div className="cards">
        <div className="card">
          <img src={props.imgsrc} alt="my_pic" className="card_img" />
          <div className="card_info">
            <span className="card_category">{props.title}</span>
            <h3 className="card_title"> {props.sname} </h3>
            <a href={props.link} target="_blank">
              <button> Watch Now </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

ReactDOM.render(
  <>
    <h1 className="header_style">My favorite 5 Netflix Series!</h1>
    {Sdata.map((val,index) =>{
     return ( <Card
        key = {val.id}
        imgsrc={val.imgsrc}
        title={val.title}
        sname={val.sname}
        link={val.link}
      />);
     },
    )}
  </>,
  document.getElementById("root")
);
