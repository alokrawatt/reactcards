import react from "react";

function App() {
  let curDate = new Date();
  curDate = curDate.getHours();
  let greeting = "";
  const cssStyle = {};

  if (curDate >= 1 && curDate < 12) {
    greeting = "Good Morning";
    cssStyle.color = "green";
  } else if (curDate >= 12 && curDate < 16) {
    greeting = "Good Evening";
    cssStyle.color = "Orange";
  } else {
    greeting = "Good Night";
    cssStyle.color = "Black";
  }

return (
    <>
    <div>
      <h1>
        hey everyone, <span style={cssStyle}> {greeting} </span>{" "}
      </h1>
    </div>
  </>
);
}
export default App;

