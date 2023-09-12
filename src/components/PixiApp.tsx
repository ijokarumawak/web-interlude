import React, { useEffect, useState } from 'react'
import { Stage, Container, Sprite, useTick, Text } from '@pixi/react'
import * as PIXI from "pixi.js"
import { sound } from "@pixi/sound"
import { ContentProperties } from './ContentProperties'
import { Session } from 'inspector'

class SessionInfo {
  name:string
  age:number
  setAge:any
  fromPos:[number, number]
  toPos:[number, number]
  fromMillis:number
  moveMillis:number

  constructor(name:string, age:[number, any], fromPos:[number, number], toPos:[number, number], fromMillis:number, moveMillis:number) {
    this.name = name
    this.age = age[0]
    this.setAge = age[1]
    this.fromPos = fromPos
    this.toPos = toPos
    this.fromMillis = fromMillis
    this.moveMillis = moveMillis
  }

  isActive(currentMillis:number):boolean {
    return currentMillis > this.fromMillis
  }

  x():number {
    // Bezier
    const t = Math.min(this.age, this.moveMillis) / this.moveMillis
    const b = t * t * (3.0 - (2.0 * t))
    const d = (this.toPos[0] - this.fromPos[0]) * b
    return this.age < this.moveMillis ? this.fromPos[0] + d : this.toPos[0]
  }

  y():number {
    return this.fromPos[1]
  }
}


const RotatingBunny: React.FC<ContentProperties> = (props:ContentProperties) => {

  const [count, setCount] = useState(10)
  const [rotation, setRotation] = useState(0)

  if(!sound.exists('bgm')) sound.add('bgm', '/sounds/jimit-big-beats.m4a')
  if(!sound.exists('boing')) sound.add('boing', '/sounds/examples_resources_boing.mp3')
  if(!sound.exists('chime')) sound.add('chime', '/sounds/examples_resources_chime.mp3')

  const sessions:SessionInfo[] = new Array()
  sessions.push(new SessionInfo('間もなく', useState(0.0), [300, -200], [-120, -200], 3000, 300))
  sessions.push(new SessionInfo('CM', useState(0.0), [-300, -50], [90, -50], 4000, 300))
  sessions.push(new SessionInfo('入ります', useState(0.0), [300, 80], [-200, 80], 5000, 300))

  // Load 時に bgm を開始
  useEffect(() => {
    console.log('once...')
    sound.volume('bgm', 0.5)
    sound.play('bgm')
  }, [])

  // 1秒ごとの処理
  useEffect(() => {
    if (count <= 0) {
      sound.stop('bgm')
      sound.play('chime')
      props.onEnded()
    } else {

      if (count <= 5) {
        sound.pause('boing')
        sound.play('boing')
      }

      setTimeout(() => {setCount(count - 1)}, 1000)  
    }
  }, [count])

  // PIXI フレーム更新時の処理
  useTick((delta) => {

    for(let i = 0; i < sessions.length; i++) {
      const session = sessions[i]
      if (!session.isActive((10 - count) * 1000)) {
        continue
      }
      session.setAge(session.age + (delta * (1000 / 60)))
    }

    // 開始直後、終了間際は静止
    if ((rotation * (180/Math.PI) % 360 <= 10 && count <= 1)) {
      setRotation(0)
    } else {
      delta && count < 9 && setRotation(rotation + 0.1 * delta)
    }

    // bgm フェードアウト
    const volume = sound.volume('bgm')
    if (count <= 5 && volume > 0) {
      sound.volume('bgm', Math.max(volume - 0.002, 0))
    }
  })

  
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
        x={-20}
        y={150}
        style={style}
      />
      {sessions.filter(x => x.isActive((10 - count) * 1000)).map((x, i) => {return (
        <Text
          key={i}
          text={x.name}
          x={x.x()}
          y={x.y()}
          style={style}
        />
      )})}
    </>
  )
}

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
