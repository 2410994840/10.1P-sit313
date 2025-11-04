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

function Article() {
  const articles = [
    {
      img: require("./dsa.png"),
      title: "Data structures & algorithms",
      desc: "Organize data; optimize performance and complexity.",
      tag: "#Efficiency",
      rating: 5,
    },
    {
      img: require("./emb.png"),
      title: "Embedded systems",
      desc: "Tiny computers controlling physical hardware reliably.",
      tag: "#IoT",
      rating: 5,
    },
    {
      img: require("./front.png"),
      title: "Frontend",
      desc: "Crafts user interfaces, interactivity, and design.",
      tag: "#UIUX",
      rating: 4,
    },
  ];

  return (
    <div style={{ textAlign: "center" }}>
      <h1>FEATURED ARTICLES</h1>

      <CardGroup itemsPerRow={3}>
        {articles.map((article, index) => (
          <Card key={index}>
            <CardContent>
              <Image
                src={article.img}
                style={{
                  width: "200px",
                  height: "200px",
                  objectFit: "cover",
                  margin: "0 auto",
                }}
              />
              <CardHeader>{article.title}</CardHeader>
              <CardDescription>
                {article.desc} <strong>{article.tag}</strong>
              </CardDescription>
            </CardContent>
            <CardContent extra>
              <div>
                <Icon name="star" color="yellow" /> {article.rating} &nbsp;
              </div>
            </CardContent>
          </Card>
        ))}
      </CardGroup>

      <Button primary style={{ marginTop: "20px" }}>
        SEE ALL ARTICLES
      </Button>
    </div>
  );
}

export default Article;
