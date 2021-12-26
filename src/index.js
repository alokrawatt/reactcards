import react from "react";
import ReactDOM from "react-dom";
import Cards from "./Cards";

function Card(props) {
  console.log(props);
  return (
    <>
      <div className="cards">
        <div className="card">
          <img src= {props.imgsrc} alt="my_pic" className="card_img" />
          <div className="card_info">
            <span className="card_category">{props.title}</span>
            <h3 className="card_title"> {props.sname} </h3>
            <a href= {props.link} target="_blank">
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
    <Card
      imgsrc="https://wallpapercave.com/uwp/uwp374924.jpeg"
      title="A Netflix Original Series"
      sname="Dark"
      link="https://www.netflix.com/in/title/80100172"
    />
    <Card
     imgsrc="https://wallpapercave.com/wp/wp8285287.jpg"
     title="A Netflix Original Series"
     sname="Stranger things"
     link="https://www.netflix.com/in/title/80057281"
    />
    <Card
     imgsrc="https://wallpapercave.com/wp/wp2473076.jpg"
     title="A Netflix Original Series"
     sname="Brooklyn Nine Nineark"
     link="https://www.netflix.com/in/title/70281562"
    />
    <Card
     imgsrc="https://wallpapercave.com/wp/wp5575898.jpg"
     title="A Netflix Original Series"
     sname="You"
     link="https://www.netflix.com/in/title/80211991"
    />
  </>,
  document.getElementById("root")
);
