import "./App.css";
import Card from "./Card";
import data from "./data.json";
import Logo from "./logo.jpeg";

function App() {
    console.log(data);

    return (
        <div className="container">
            <div className="head">
                <img className="m6" src={Logo} alt="" />
                <span className="text-m6">M6</span>
            </div>
            {data.map((info, index) => {
                console.log(info.time);
                return (
                    <Card
                        key={index}
                        time={info.time}
                        title={info.title}
                        image={info.image}
                        type={info.type}
                        duration={info.duration}
                        isUnseen={info.isUnseen}
                        direct={info.direct}
                    />
                );
            })}
        </div>
    );
}

export default App;
