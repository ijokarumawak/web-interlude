import React, { useEffect, useState } from 'react'
import { Stage, Container, Sprite, useTick, Text } from '@pixi/react'
import * as PIXI from "pixi.js"
import { ContentProperties } from './ContentProperties'

const RotatingBunny: React.FC<ContentProperties> = (props:ContentProperties) => {

  const [count, setCount] = useState(10)

  useEffect(() => {
    if (count <= 0) {
      props.onEnded()
    } else {
      setTimeout(() => {setCount(count - 1)}, 1000)  
    }
  }, [count])

  const [rotation, setRotation] = useState(0)

  useTick((delta) => delta && setRotation(rotation + 0.1 * delta))

  const style = new PIXI.TextStyle({
    align: 'center',
    fontFamily: 'sans-serif',
    fontSize: 60,
    fontWeight: 'bold',
    fill: ['#ffffff'],
    stroke: '#ffffff',
    strokeThickness: 1,
    letterSpacing: 5,
    wordWrap: true,
    wordWrapWidth: 350
  });
  
  return (
    <>
      <Sprite
        image='https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/IaUrttj.png'
        anchor={0.5}
        scale={4}
        rotation={rotation}
      />
      <Text
        text={count.toString()}
        y={150}
        style={style}
      />
    </>
  );
};

const PixiApp: React.FC<ContentProperties> = (props:ContentProperties) => {
  return (
    <Stage width={500} height={500}>
      <Container position={[250, 250]}>
        <RotatingBunny onEnded={props.onEnded}/>
      </Container>
    </Stage>
  );
};

export default PixiApp
