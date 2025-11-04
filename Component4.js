import React from "react";
import {
  CardHeader,
  CardGroup,
  CardDescription,
  CardContent,
  Card,
  Image,
  Icon,
  Button,
} from "semantic-ui-react";

function Tutorial() {
  const tutorials = [
    {
      img: require("./back.png"),
      title: "Backend",
      desc: "Handles servers, databases, business logic securely.",
      tag: "#ServerSide",
      rating: 3,
    },
    {
      img: require("./sus.png"),
      title: "Sustainability",
      desc: "Designing systems mindful of environmental impact.",
      tag: "#EcoTech",
      rating: 5,
    },
    {
      img: require("./r.png"),
      title: "React",
      desc: "This is an image of React - full stack development",
      tag: "react",
      rating: 4,
    },
  ];

  return (
    <div style={{ textAlign: "center" }}>
      <h1>FEATURED TUTORIALS</h1>

      <CardGroup itemsPerRow={3}>
        {tutorials.map((tutorial, index) => (
          <Card key={index}>
            <CardContent>
              <Image
                src={tutorial.img}
                style={{
                  width: "200px",
                  height: "200px",
                  objectFit: "cover",
                  margin: "0 auto",
                }}
              />
              <CardHeader>{tutorial.title}</CardHeader>
              <CardDescription>
                {tutorial.desc} <strong>{tutorial.tag}</strong>
              </CardDescription>
            </CardContent>
            <CardContent extra>
              <div>
                <Icon name="star" color="yellow" /> {tutorial.rating} &nbsp;
              </div>
            </CardContent>
          </Card>
        ))}
      </CardGroup>

      <Button primary style={{ marginTop: "20px" }}>
        SEE ALL TUTORIALS
      </Button>
    </div>
  );
}

export default Tutorial;
