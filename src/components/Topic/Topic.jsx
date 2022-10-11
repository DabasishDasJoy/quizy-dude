import React from "react";
import { Button, Card } from "react-daisyui";
import { Link } from "react-router-dom";

const Topic = ({ topic: { id, name, total, logo } }) => {
  return (
    <Card className="bg-[#1D2966]">
      <Card.Image src={logo} alt="Shoes" />
      <Card.Body className="items-center text-center">
        <Card.Title tag="h2">{name}</Card.Title>
        <p>Total Quiz: {total}</p>
        <Card.Actions className="justify-end">
          <Button color="primary">
            <Link to={`topic/${id}`}>Start Practice</Link>
          </Button>
        </Card.Actions>
      </Card.Body>
    </Card>
  );
};

export default Topic;
