import React from "react";
import Card from "../components/Card/Card";
import Title from "../components/Title/Title";
import remembrance from "../data/remembrance.json";
// import Wrapper from "../components/Wrapper/Wrapper";

class Memorial extends React.Component {
  state = {
    remembrance,
  };

  render() {
    return (
      <>
        <Title>Memorial</Title>
        <div className="row">
          {this.state.remembrance.map((remember) => (
            <div className="col-md-4">
              <Card
                id={remember.id}
                key={remember.id}
                name={remember.name}
                image={remember.image}
                location={remember.location}
                bio={remember.bio}
              />
            </div>
          ))}
        </div>
      </>
    );
  }
}

export default Memorial;
