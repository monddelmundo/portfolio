import React from "react";
const Home = () => {
  return (
    <div className="home-container">
      <div>
        <img
          alt=""
          className="image-css-html"
          src="/assets/images/css-html.webp"
        />
        <img
          alt=""
          className="image-css-html"
          src="/assets/images/css-html.webp"
        />
      </div>
      <div className="text-two-column">
        <div className="text-column-left">
          <span className="span-highlight-logo">
            <img alt="" src="/assets/logos/brush-outline.svg" />
          </span>
          <h4 className="text-highlight">Frontend Development</h4>
          <p>
            Sweet jelly-o lemon drops gummies marshmallow. Marshmallow carrot
            cake soufflé chocolate sweet. Fruitcake lollipop jelly-o sesame
            snaps. Sesame snaps fruitcake gingerbread sugar plum pudding sweet
            roll.
          </p>
        </div>
        <div className="text-column-right">
          <span className="span-highlight-logo">
            <img alt="" src="/assets/logos/code-slash-outline.svg" />
          </span>
          <h4 className="text-highlight">Backend Development</h4>
          <p>
            Jelly beans marzipan cookie liquorice donut marzipan jelly-o
            jelly-o. Gingerbread carrot cake carrot cake chupa chups. Carrot
            cake pastry jujubes icing pudding candy carrot cake caramels. Apple
            pie muffin topping wafer jelly halvah tiramisu.
          </p>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Home);
