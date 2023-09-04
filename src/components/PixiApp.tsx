import React, { useState } from "react"
import { Stage, Container, Sprite, useTick } from "@pixi/react"
import { settings, SCALE_MODES } from "pixi.js"

settings.SCALE_MODE = SCALE_MODES.NEAREST;

const RotatingBunny = () => {
  const [rotation, setRotation] = useState(0);

  useTick((delta) => delta && setRotation(rotation + 0.1 * delta));

  return (
    <Sprite
      image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/IaUrttj.png"
      anchor={0.5}
      scale={4}
      rotation={rotation}
    />
  );
};

const PixiApp = () => {
  return (
    <Stage width={500} height={500}>
      <Container position={[250, 250]}>
        <RotatingBunny />
      </Container>
    </Stage>
  );
};

export default PixiApp;
