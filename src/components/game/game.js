import React, { Component } from 'react';
import { setRafInterval, clearRafInterval } from './util/raf-interval';
import './App.css';
import axios from "axios";
import Footer from "../Footer.js";

const requireContext = require.context("../../assets/flappybird", true, /^\.\/.*\.png$/);
const keys = requireContext.keys();
const images = keys.map(requireContext);
const map = {};
const { innerWidth: width, innerHeight: height } = window;
const widthVal = width;
const position = widthVal/2-40;
const heightVal = 512;

// console.log(width);
class Bg {
  constructor(config) {
    let canvas = document.getElementById('canvas'),
      ctx = canvas.getContext('2d');
    this.ctx = ctx;
    this.init(config);
  }
  init(config) {
    this.initBg(config);
    config.pipe.forEach((v) => {
      this.initPipe(v, config.pipespace);
    });
    this.initLand(config);
  }
  initImg(key) {
    return map[key];
  }
  initBg() {
    let img = this.initImg('bg_day');
    var pattern = this.ctx.createPattern(img, 'repeat');
    this.ctx.fillStyle = pattern;
    this.ctx.fillRect(0, 0, widthVal, heightVal);
  }
  initLand(config) {
    let img = this.initImg('land');


    this.ctx.drawImage(img, config.land, 400, widthVal + 240, heightVal - 400);
    //this.ctx.drawImage(img, config.land + 288, 400, widthVal, heightVal - 400);
  }
  initPipe(config, pipespace) {
    let img1 = this.initImg('pipe_down');
    let img2 = this.initImg('pipe_up');
    this.ctx.drawImage(img1, config.x, config.y);
    this.ctx.drawImage(img2, config.x, config.y + pipespace.y + 320);
  }
}

class Score {
  constructor(config) {
    config = config || {};
    this.init(config);
  }

  init(config) {
    let canvas = document.getElementById('canvas')
    let ctx = canvas.getContext('2d');
    let scoreString = String(config.score || 0);
    let numDigits = scoreString.length
    let startingPoint = position+25 - ((15 * numDigits) / 2) - 5
    for (let i = 0; i < numDigits; i++) {
      let digit = scoreString[i];
      let digitImage = map[`number_score_0${digit}`]
      ctx.drawImage(digitImage, startingPoint + 15 * i, 80)
    }
  }
}

class Bird {
  constructor(config) {
    config = config || {};
    this.init(config);
  }
  init(config) {
    let x = config.x !== undefined ? config.x : 100,
      y = config.y !== undefined ? config.y : 232,
      width = config.width !== undefined ? config.width : 30,
      height = config.height !== undefined ? config.height : 30,
      img = config.img !== undefined ? config.img : 0,
      rotate = config.rotate !== undefined ? config.rotate : 0,
      canvas = document.getElementById('canvas'),
      ctx = canvas.getContext('2d');
    // this.clear(ctx);
    this.ctx = ctx;
    ctx.fillStyle = "#fff";
    // ctx.fillRect(x,y,width,height);
    img = this.img(img);
    rotate ? this.rotate(img, x, y, rotate) : ctx.drawImage(img, x, y);//绘制小鸟
  }
  clear() {
    this.ctx.clearRect(0, 0, 288, 512);
  }
  img(index) {
    return map[`bird2_${index}`];
  }
  rotate(img, x, y, rotate) {
    this.ctx.save();//保存状态
    this.ctx.translate(x + img.width / 2, y + img.height / 2);//设置画布上的(0,0)位置，也就是旋转的中心点
    this.ctx.rotate(rotate * Math.PI / 180);
    this.ctx.drawImage(img, -img.width / 2, -img.height / 2);//把图片绘制在旋转的中心点，
    this.ctx.restore();//恢复状态
  }
}

class Hud {
  constructor(config) {
    config = config || {};
    this.init(config);
  }
  init(config) {
    const type = config.type || 'start',
      canvas = document.getElementById('canvas'),
      ctx = canvas.getContext('2d');
    this.ctx = ctx;
    switch (type) {
      case 'start':
        this.drawTitle(this.initImg('title'));
        // this.drawContent(this.initImg('tutorial'));
        break;

      default:
        break;
    }
  }
  drawTitle(img, x = 55, y = 100) {
    this.ctx.drawImage(img, x, y, widthVal / 3, widthVal / 7);
  }
  drawContent(img, x = 87, y = position) {
    this.ctx.drawImage(img, x, y);
  }
  initImg(key) {
    return map[key];
  }
}

class Game extends Component {
  constructor({nowAccount}) {
    // this.getAccount(web3);
    super();
    this.state = {
      account: nowAccount,
      value: 'yyj',
      frames: 80,
      ratio: 100 / 1,//地图比例
      distanceFlown: 0,
      land: 0,//地面位置
      score: 0,
      bestScore: 0,
      pipespace: {//障碍物横纵间距
        x: 118,
        y: 140,
      },
      index:0,
      pipe: [{//障碍物位置
        x: position+200,
        y: Math.random() * -260 - 40
      }, {
        x: position+200 + 118 + 52,
        y: Math.random() * -260 - 40
      }, {
        x: position+200 + 118 * 2 + 52 * 2,
        y: Math.random() * -260 - 40
      }, {
        x: position+200 + 118 * 3 + 52 * 3,
        y: Math.random() * -260 - 40
      }, {
        x: position+200 + 118 * 4 + 52 * 4,
        y: Math.random() * -260 - 40
      }],
      velocity: 0,//速度
      g: 9.8,//重力加速度
      img: 0,//飞行状态
      pos: {//飞行位置
        top: 232,
        left: position
      },
      gameover: false,
      introScreen: true,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
  }
  getAccount= async(web3)=>{
    // const {account, web3} = await connect();
    // if(account && web3){
    //   console.log("******************", account);
    // }
  }
  componentDidMount() {
    this.preloadImage(this.initCanvas.bind(this));
  }
  componentWillUpdate({nowAccount}) {
    this.state.account=nowAccount;
    if (!this.birdObj) return;
    this.bgObj.init({
      land: this.state.land,
      pipespace: this.state.pipespace,
      pipe: this.state.pipe
    });
    this.scoreObj.init({
      score: this.state.score,
    });
    this.birdObj.init({
      x: this.state.pos.left,
      y: this.state.pos.top,
      img: this.state.img,
      rotate: 0// this.state.velocity < 0 ? -45 : (this.state.velocity === 0 ? 0 : 45)
    });

  }
  preloadImage(callback, arg) {
    keys.forEach((value, index) => {
      let img = new Image();
      img.src = images[index];
      img.onload = () => {
        map[value.replace('./', '').replace('.png', '')] = img;
        if (Object.keys(map).length === keys.length) callback(arg);
      };
    });
  }
  initCanvas() {
    this.bgObj = new Bg({
      land: this.state.land,
      pipespace: this.state.pipespace,
      pipe: this.state.pipe
    });
    this.hudObj = new Hud();
  }
  initEngine() {//游戏主引擎和操作事件
    window.addEventListener('keyup', this.handleKeyUp);//绑定键盘事件触发拍打翅膀
    window.document.getElementById('canvas').addEventListener('mousedown', this.handleKeyUp);//绑定触摸、点击事件触发拍打翅膀
    
    this.timer1 = this.setFlyInterval.call(this);//切换翅膀拍动位置
    this.timer2 = this.setRunInterval.call(this);//游戏运行主要方法
  }
  setFlyInterval() {
    return setRafInterval(() => {
      this.setState({
        img: this.state.img < 2 ? this.state.img + 1 : 0
      });
    }, 100);
  }
  getRandomVerticalDistance() {
    return Math.random() * -260 - 40
  }
  computeScore(distanceFlown, pipeSpace, pipeWidth) {
    const pointLength = pipeSpace + pipeWidth;
    const startingDistance = 60
    const score = Math.floor((distanceFlown - startingDistance) / pointLength);
    return score > 0 ? score : 0;
  }
  setRunInterval() {
    let time = 1 / this.state.frames;
    return setRafInterval(() => {
      let v = this.state.velocity + this.state.g * time;
      let pipe = this.state.pipe;
      if (pipe[this.state.index].x < position-52) {
        console.log(this.state.index);
        // pipe.shift();
        this.state.index++;
        pipe.push({
          x: pipe[this.state.index+3].x + this.state.pipespace.x + 52,
          y: this.getRandomVerticalDistance()
        })
      }

      const distanceFlown = this.state.distanceFlown + 2
      const score = this.computeScore(distanceFlown, this.state.pipespace.x, 52);

      this.setState({
        land: (this.state.land - 2) >> 0 <= -240 ? 0 : this.state.land - 2,
        pipe: pipe.map((v) => ({ x: v.x - 2, y: v.y })),
        velocity: v,
        pos: {
          top: this.state.pos.top + v * this.state.ratio * time,
          left: this.state.pos.left
        },
        distanceFlown,
        score,
      });
      var groundCollision = this.checkGroundCollision.call(this);
      if (this.state.pos.left + 38 >= this.state.pipe[0].x && this.checkPipeCollision.call(this) || groundCollision) {
        clearRafInterval(this.timer1);
        clearRafInterval(this.timer2);
      }
    }, time * 1000);
  }
  finishGame() {
    this.setState({
      gameover: true,
      bestScore: Math.max(this.state.score, this.state.bestScore),
      index:0
    })
  }
  checkGroundCollision() {
    let gameover = false
    if (this.state.pos.top + 38 >= 400) {
      gameover = true;
    }
    gameover && this.finishGame();
    return gameover;
  }
  checkPipeCollision() {
    let gameover = false,
      { left: birdLeft, top: birdTop } = this.state.pos,
      birdPos = {
        top: birdTop + 10,
        bottom: birdTop + 38,
        left: birdLeft + 10,
        right: birdLeft + 38
      },
      pipePos = {};
    for (let i =  this.state.index; i < this.state.index+2; i++) {
      let { x, y } = this.state.pipe[i];
      pipePos.top = y + 320;
      pipePos.bottom = y + 320 + this.state.pipespace.y;
      pipePos.left = x;
      pipePos.right = x + 52;

      if (birdPos.bottom >= 400) {
        console.log(555555);
      }
      if (birdPos.right >= pipePos.left && birdPos.left <= pipePos.right && (birdPos.top <= pipePos.top || //撞在上面管道
        birdPos.bottom >= pipePos.bottom) || //撞在下面管道
        (birdPos.bottom >= 400) //落地
      ) {
        gameover = true;
        break;
      }
    }
    gameover && this.finishGame();
    return gameover;
  }
  handleChange(event, key = 'value') {
    if (/\./.test(key)) {
      const baseStateName = key.split('.')[0];
      const childStateName = key.split('.')[1];
      this.setState({
        [baseStateName]: {
          ...this.state[baseStateName],
          [childStateName]: +event.target.value,
        }
      });
      return;
    }
    this.setState({
      [key]: +event.target.value || event.target.value,
    });
  }
  handleKeyUp(event) {
    if (event.keyCode === 38 || event.type === 'mousedown' || event.keyCode === 32) {
      this.setState({
        velocity: -4
      });
    }
  }
  sendRequest(){
    if(this.state.account&&this.state.account !== '0x00'){
      let postDate={
        walletId: this.state.account
      };
      axios.post(`https://gr2rga7grl.execute-api.us-east-2.amazonaws.com/dev/splashy-squid`, postDate)
      .then((res) => {
        console.log(res);
      })
      .catch((err)=>{
        console.log(err);
      })
    }
  }
  start = () => {
    if (this.state.velocity) return;
    this.sendRequest();
    this.birdObj = new Bird({ x: this.state.pos.left, y: this.state.pos.top, img: this.state.img });//将唯一bird实例birdObj赋予上下文
    this.scoreObj = new Score({
      score: this.state.score,
    });
    this.initEngine();
    this.setState({
      introScreen: false,
    });
  }
  restart = () => {
    // console.log('restart', this.state.account);
    this.sendRequest();
    this.setState({
      pos: {//飞行位置
        top: 100,
        left: position
      },
      pipe: [{//障碍物位置
        x: position+200,
        y: this.getRandomVerticalDistance()
      }, {
        x: position+200 + 118 + 52,
        y: this.getRandomVerticalDistance()
      }, {
        x: position+200 + 118 * 2 + 52 * 2,
        y: this.getRandomVerticalDistance()
      }, {
        x: position+200 + 118 * 3 + 52 * 3,
        y: this.getRandomVerticalDistance()
      }, {
        x: position+200 + 118 * 4 + 52 * 4,
        y: this.getRandomVerticalDistance()
      }],
      velocity: 0,//速度
      gameover: false,
      score: 0,
      distanceFlown: 0,
    });
    this.initEngine();
  }
  render() {
    const { gameover } = this.state;
    return (
      <div className="mt-12 md:mt-0 ml-[0px] lg:ml-[74px] md:pt-[50px]">
        <div className="bg-[url('./assets/images/BG-3.png')] bg-opacity-50" style={{minHeight:'100vh', paddingLeft:'1.5vw', paddingRight:'1.5vw', backgroundSize: '100%'}}>
          <div className="p-4">
            <span className="text-lg md:text-xl text-[#fe6810] tracking-wide ml-1 font-thin italic">Flappy squid game</span>
            <p className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-wide text-[#fe6810] text-left mb-3">INFORMATION</p>
            <p className="text-lg md:text-xl lg:text-xl  text-white/[0.8] text-left mb-3">- Players must connect their wallet and have atleast 1 TKO NFT to be eligible to get a prize</p>
            <p className="text-lg md:text-xl lg:text-xl  text-white/[0.8] text-left mb-3">- The prize will be given out weekly to a random wallet addresss</p>
            <p className="text-lg md:text-xl lg:text-xl  text-white/[0.8] text-left mb-3">- Each participant can get up to 5 entries per day </p>
          </div>
          <div className="mt-8">
            <p
              className="mt-0 mb-0 fs-5 fst-italic"
              style={{
                color: "#fe6810"
              }}
            ></p>
            {}
          </div>
          <div className="App" style={{ border: '5px solid' }} >
            <form className="param-form">
              {}
            </form>
            <div className="game-container" style={{ height: heightVal }}>
              {
                gameover ? (
                  <div>
                    <div className="score-panel">
                      <div className="score">
                        {this.state.score}
                      </div>
                      <div className="best-score">
                        {this.state.bestScore}
                      </div>
                    </div>
                    <div className="gameover-modal">
                      <div className="restart-button-container">
                        <div className="restart-button" onClick={this.restart}></div>
                      </div>
                    </div>
                  </div>
                ) : null
              }
              <canvas id="canvas" className="game-content" width={widthVal} height={heightVal} onClick={this.start}></canvas>
              {}
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default Game;
