import React, { useEffect, useState } from 'react';
import 'flowbite';
import exImg1 from '../assets/images/86-p-500.png';
import exImg2 from '../assets/images/102-p-500.png';
import exImg3 from '../assets/images/119-p-500.png';
import exImg4 from '../assets/images/166-p-500.png';
import exImg5 from '../assets/images/171-p-500.png';
import exImg6 from '../assets/images/172-p-500.png';
import exImg7 from '../assets/images/215-p-500.png';
import exImg8 from '../assets/images/219-p-500.png';
import exImg9 from '../assets/images/249-p-500.png';
import exImg10 from '../assets/images/254-p-500.png';
import exImg11 from '../assets/images/276-p-500.png';
import exImg12 from '../assets/images/281-p-500.png';
import exImg13 from '../assets/images/307-p-500.png';
import exImg14 from '../assets/images/309-p-500.png';
import exImg15 from '../assets/images/314-p-500.png';
import exImg16 from '../assets/images/333-p-500.png';
import exImg17 from '../assets/images/336-p-500.png';
import exImg18 from '../assets/images/346-p-500.png';

import yahooImg from '../assets/images/Untitled-design---2022-03-03T143630.798.png';
import cryptoarrowImg from '../assets/images/crypto-arrow-icon.svg';
import arrowLeftImg from '../assets/images/arrow-left_black.svg';
import arrowRightImg from '../assets/images/arrow-right_black.svg';
import step1Image from '../assets/images/step1.svg';
import step2Image from '../assets/images/step2.svg';
import step3Image from '../assets/images/step3.svg';
import metamaskImage from '../assets/images/metamask_1metamask.png';
import ethereumImage from '../assets/images/ethereum_1ethereum.png';
import openseaImage from '../assets/images/Logomark-Blue.png';

import Footer from './Footer.js';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import axios from "axios";

function Home() {

  const responsive = {
    desktop1: {
      breakpoint: { max: 3000, min: 1500 },
      items: 4,
      slidesToSlide: 1 // optional, default to 1.
    },
    desktop: {
      breakpoint: { max: 1500, min: 1124 },
      items: 3,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1124, min: 710 },
      items: 2,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 710, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };
  const [currentStateImg, setCurrentStateImg] = useState(0);
  const [transactionNFT, setTransactionNFT] = useState([]);
  var flag = 0;
  const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
    const { carouselState: { currentSlide } } = rest;
    return (
      <div className="carousel-button-group">
        <img alt="" className='border rounded-full p-4 hover:border-black' onClick={() => goToSlide(currentSlide - 1)} src={arrowLeftImg} style={{ position: 'absolute', left: '0px', top: '410px', height: '60px' }}></img>
        <img alt="" className='border rounded-full p-4 hover:border-black' onClick={() => goToSlide(currentSlide + 1)} src={arrowRightImg} style={{ position: 'absolute', left: '70px', top: '410px', height: '60px' }}></img>
      </div>
    );
  };
  useEffect(() => {
    try {
      if (flag === 0) {
        console.log("123123");
        axios.get('https://api.bloxy.info/token/transfers?key=ACCYNfiivhYer&token=0x82994dff990b80EE01A90A9C2f5aFccc1f5E32F5').then(resp => {
          // console.log(resp.data);
          let temp = resp.data;
          let tranHashes = [];
          if (temp.length > 0) {
            tranHashes.push(temp[0]['tx_hash']);
          }
          for (let i = 1; i < temp.length && i < 20; i++) {
            if (temp[i]['tx_hash'] !== temp[i - 1]['tx_hash']) {
              tranHashes.push(temp[i]['tx_hash']);
              console.log(temp[i]['tx_hash']);
            }
          }
          setTransactionNFT(tranHashes);
          console.log(tranHashes);
          flag = 1;
        });
      }
    } catch (e) {
      console.log("error occurred", e);
      axios.get('https://api.bloxy.info/token/transfers?key=ACCYNfiivhYer&token=0x82994dff990b80EE01A90A9C2f5aFccc1f5E32F5').then(resp => {
        // console.log(resp.data);
        let temp = resp.data;
        let tranHashes = [];
        if (temp.length > 0) {
          tranHashes.push(temp[0]['tx_hash']);
        }
        for (let i = 1; i < temp.length && i < 20; i++) {
          if (temp[i]['tx_hash'] !==temp[i - 1]['tx_hash']) {
            tranHashes.push(temp[i]['tx_hash']);
          }
        }
        setTransactionNFT(tranHashes);
        console.log(tranHashes);
        flag = 1;
      });
    }

  }, [])
  return (
    <div className="ml-[0px] lg:mt-[50px]">
      <div className="bg-[#07000f] rounded-bl-[44px] rounded-br-[44px] md:rounded-bl-[54px] md:rounded-br-[54px] lg:rounded-bl-[64px] lg:rounded-br-[64px]" style={{}}>
        <header className="bg-[url('./assets/images/BG-3.png')]" style={{ backgroundSize: '100%' }}>
          <div className="text-white text-center pt-14 md:pt-21 lg:pt-28 pb-20 md:pb-30 lg:pb-40">
            <div className="">
              <h1 className="text-[2.5rem] md:text-[3rem] lg:text-[3.5rem] font-bold">🍦Start  Scooping🍦</h1>
            </div>
           
            <div className="container mx-auto mt-7" style={{ display: 'flex', justifyContent: 'center', gap: '10px', flexWrap: 'wrap' }}>
              <div className="button-wrapper button-wrapper-center mt-7">
                <a href="https://app.uniswap.org/#/swap?chain=mainnet&outputCurrency=0x9d38f670d15c14716be1f109a4f453e966a2b6d4&use=V2" target="_blank" rel="noreferrer" className="bg-[#b561f2] hover:bg-white text-black hover:text-black font-medium text-xl pt-3 pb-4 px-10 rounded-full cursor-pointer" >Buy More🍦 Scoops</a>
              </div>
              <div className="button-wrapper button-wrapper-center mt-7">
                <a href="https://opensea.io/collection/tentacleknockout" target="_blank" rel="noreferrer" className="bg-white hover:bg-gray-500 text-black hover:text-white font-medium text-xl pt-3 pb-4 px-10 rounded-full cursor-pointer" >Cash Out🍦 Scoops</a>
              </div>

            </div>
          </div>
        </header>
        {/* <div className='bg-[#07000f] mt-8'>
          <div className="slider">
            <div className="slide-track">
              <div className="slide p-2">
                <img src={exImg1} className="rounded-2xl" alt="NFT 1"></img>
              </div>
              <div className="slide p-2">
                <img src={exImg2} className="rounded-2xl" alt="NFT 2"></img>
              </div>
              <div className="slide p-2">
                <img src={exImg3} className="rounded-2xl" alt="NFT 3"></img>
              </div>
              <div className="slide p-2">
                <img src={exImg4} className="rounded-2xl" alt="NFT 4"></img>
              </div>
              <div className="slide p-2">
                <img src={exImg5} className="rounded-2xl" alt="NFT 5"></img>
              </div>
              <div className="slide p-2">
                <img src={exImg6} className="rounded-2xl" alt="NFT 6"></img>
              </div>
              <div className="slide p-2">
                <img src={exImg7} className="rounded-2xl" alt="NFT 7"></img>
              </div>
              <div className="slide p-2">
                <img src={exImg8} className="rounded-2xl" alt="NFT 8"></img>
              </div>
              <div className="slide p-2">
                <img src={exImg9} className="rounded-2xl" alt="NFT 9"></img>
              </div>
              <div className="slide p-2">
                <img src={exImg10} className="rounded-2xl" alt="NFT 10"></img>
              </div>
              <div className="slide p-2">
                <img src={exImg11} className="rounded-2xl" alt="NFT 11"></img>
              </div>
              <div className="slide p-2">
                <img src={exImg12} className="rounded-2xl" alt="NFT 12"></img>
              </div>
              <div className="slide p-2">
                <img src={exImg13} className="rounded-2xl" alt="NFT 13"></img>
              </div>
              <div className="slide p-2">
                <img src={exImg14} className="rounded-2xl" alt="NFT 14"></img>
              </div>
              <div className="slide p-2">
                <img src={exImg15} className="rounded-2xl" alt="NFT 15"></img>
              </div>
              <div className="slide p-2">
                <img src={exImg16} className="rounded-2xl" alt="NFT 16"></img>
              </div>
              <div className="slide p-2">
                <img src={exImg17} className="rounded-2xl" alt="NFT 17"></img>
              </div>
              <div className="slide p-2">
                <img src={exImg18} className="rounded-2xl" alt="NFT 18"></img>
              </div>
            </div>
          </div>
        </div> */}
        <div className="text-white text-center text-3xl lg:text-4xl mt-20 md:mt-30 lg:mt-40 font-medium">
          Featured in
        </div>
        <div className="block lg:grid grid-cols-3 grid-flow-col" style={{ padding: '7%', paddingTop: '4%' }}>
          <div className="row-span-4" style={{ width: '100%', padding: '3%' }}>
            <a href="https://ca.movies.yahoo.com/nft-crypto-art-quidverse-predicted-034900382.html" target="_blank" rel="noreferrer">
              <div className="group rounded-[32px] border border-gray-700 hover:border-white cursor-pointer" >
                <div style={{ padding: '3rem' }}>
                  <img src={yahooImg} style={{ height: '20.5px' }} alt="Yahoo!"></img>
                  <br></br>
                  <div>
                    <p className="text-white text-xl md:text-2xl" style={{ lineHeight: '1.5' }}>
                      NFT Crypto Art by Quidverse Predicted To Be One of the Greatest Launches of 2022
                </p>
                  </div>
                </div>
                <div className="border-t border-gray-700 group-hover:border-white" style={{ paddingTop: '1.5rem', paddingBottom: '1.5rem', paddingLeft: '3rem', paddingRight: '2rem' }}>
                  <div className="text-white text-xl font-bold flex object-none object-right relative" style={{ lineHeight: '1.5' }}>
                    <span>Read article</span>
                    <div className="absolute right-5 top-1">
                      <img src={cryptoarrowImg} style={{ height: '100%' }} className="transition duration-500 ease-in-out object-none object-right group-hover:rotate-45" alt=""></img>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="row-span-4" style={{ width: '100%', padding: '3%' }}>
            <a href="https://ca.finance.yahoo.com/news/quid-ika-quid-soon-listed-102400499.html" target="_blank" rel="noreferrer">
              <div className="group rounded-[32px] border border-gray-700 hover:border-white cursor-pointer" >
                <div style={{ padding: '3rem' }}>
                  <img src={yahooImg} style={{ height: '20.5px' }} alt="Yahoo!"></img>
                  <br></br>
                  <div>
                    <p className="text-white text-xl md:text-2xl" style={{ lineHeight: '1.5' }}>
                      Quid Ika (QUID) Will Be Soon Listed on Crypto Exchange LBank
                </p>
                  </div>
                </div>
                <div className="border-t border-gray-700 group-hover:border-white" style={{ paddingTop: '1.5rem', paddingBottom: '1.5rem', paddingLeft: '3rem', paddingRight: '2rem' }}>
                  <div className="text-white text-xl font-bold flex object-none object-right relative" style={{ lineHeight: '1.5' }}>
                    <span>Read article</span>
                    <div className="absolute right-5 top-1">
                      <img src={cryptoarrowImg} style={{ height: '100%' }} className="transition duration-500 ease-in-out object-none object-right group-hover:rotate-45" alt=""></img>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>

        </div>
        <div id="about" className="block lg:grid grid-cols-2 grid-flow-col text-white" style={{ padding: '7%', paddingTop: '4%' }}>
          <div className="row-span-6 p-4">
            <div>
              <span className="text-3xl md:text-4xl lg:text-5xl font-semibold">Tentacle Knockouts v1</span>
            </div>
          </div>
          <div className="row-span-6 p-4">
            <div>
              <p className="mb-5 text-lg md:text-xl text-[#d5d6d6] leading-8 font-medium">
                This sold-out limited edition collection is a remake of Ali vs Liston; where the squid knocks out the shiba dethroning it in the meme world. Not only does this original artwork set the industry standard but owning it also pays for itself through staking. If you own 4 or more TKOs, you earn 333 QUID per day per NFT. Save your QUID and sell it when it's $1B market-cap! Get your TKO v1 today to automatically whitelist yourself for v2.
              </p>
              <br></br>
              <div className="block xl:flex">
                <p className="mb-8">
                  <a href="https://opensea.io/collection/tentacleknockout" target="_blank" rel="noreferrer" className=" bg-white hover:bg-gray-500 text-black hover:text-white font-medium text-xl pt-3 pb-4 px-4 md:px-6 lg:px-10 rounded-full mr-5 cursor-pointer" >Buy a TKO</a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="block lg:grid grid-cols-2 grid-flow-col text-white" style={{ padding: '7%', paddingTop: '4%' }}>
          <div className="row-span-6 p-4">
            <div style={{ padding: '7%' }} onClick={() => setCurrentStateImg(1)} className={currentStateImg === 1 ? 'bg-[#ff5957] rounded-[32px] border border-[#638596] hover:border-white cursor-pointer text-xl md:text-2xl lg:text-3xl' : 'rounded-[32px] border border-gray-700 hover:border-white cursor-pointer text-xl md:text-2xl lg:text-3xl'}>
              There are 10 TKOs with one of one assets. Can you find them?
          </div>
            <div style={{ padding: '7%' }} onClick={() => setCurrentStateImg(2)} className={currentStateImg === 2 ? 'bg-[#d9894e] mt-5 rounded-[32px] border border-[#95554e] hover:border-white cursor-pointer text-xl md:text-2xl lg:text-3xl' : 'mt-5 rounded-[32px] border border-gray-700 hover:border-white cursor-pointer text-xl md:text-2xl lg:text-3xl'}>
              Owning 4 TKOs unlocks staking of Quidverse's backbone token, QUID.
          </div>
            <div style={{ padding: '7%' }} onClick={() => setCurrentStateImg(3)} className={currentStateImg === 3 ? 'bg-[#4e4e85] mt-5 rounded-[32px] border border-[#8e6fb5] hover:border-white cursor-pointer text-xl md:text-2xl lg:text-3xl' : 'mt-5 rounded-[32px] border border-gray-700 hover:border-white cursor-pointer text-xl md:text-2xl lg:text-3xl'}>
              TKO traits unlock power ups in Quidverse's play-2-earn games. Can you predict which will be most powerful?
          </div>
          </div>
          <div className="row-span-6 p-4">
            <div>
              <img alt="" src={currentStateImg === 1 ? exImg4 : currentStateImg === 2 ? exImg5 : exImg6} className="w-full rounded-[40px]"></img>
            </div>
          </div>
        </div>
      </div>
      <div id="collection" style={{ padding: '7%', paddingTop: '9%', backgroundColor: 'white' }}>
        { }
        <div>
          <div className="relative block lg:flex">
            <div>
              <p className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-5">Recent Transactions</p>
              <span className="text-lg text-gray-600">Updated 6 hours ago</span>
            </div>
            <div className="relative lg:absolute" style={{ right: '7%', marginTop: '30px', marginBottom: '30px', marginLeft: '5vw' }}>
              <a href="https://opensea.io/collection/tentacleknockout" target="_blank" rel="noreferrer" className="border border-gray-400 hover:border-black text-black font-medium text-lg md:text-xl pt-2 md:pt-4 mt-5 pb-2 md:pb-5 px-6 md:px-12 rounded-full cursor-pointer" >View all</a>
            </div>
          </div>
          <div style={{ marginTop: '5%' }}>
            <Carousel
              responsive={responsive}
              autoPlay={false}
              draggable={false}
              showDots={false}
              arrows={false}
              customButtonGroup={<ButtonGroup />}
              infinite={true}
              autoPlaySpeed={100000000}
            >
              {transactionNFT.map(function (i) {
                return (
                  <div key={i}>
                    <a href={`https://etherscan.io/tx/${i}`}>
                      <img alt="" src={`https://ipfs.io/ipfs/QmRQAVW68qLYn1gVPuecXdTbgiDWhjkBsTgJmZaaFBVsbL/${i % 100}.png`} style={{ height: '300px', borderRadius: '10%' }}></img>
                    </a>
                  </div>
                );
              })}
            </Carousel>
          </div>
        </div>
      </div>
      <div className="bg-[#07000f] rounded-tl-[44px] rounded-tr-[44px] md:rounded-tl-[54px] md:rounded-tr-[54px] lg:rounded-tl-[64px] lg:rounded-tr-[64px] mt-6">
        <div>
          <div className="block lg:grid grid-cols-2 grid-flow-col text-white" style={{ paddingLeft: '7%', paddingRight: '7%', paddingBottom: '7%', paddingTop: '8%' }}>
            <div className="row-span-6 p-3">
              <div>
                <span className="text-3xl md:text-4xl lg:text-5xl font-semibold">How do I get a TKO?</span>
              </div>
            </div>
            <div className="row-span-6 p-4">
              <div className="border-l">
                <div className="flex">
                  <div style={{ marginTop: '0px', marginLeft: '-3rem' }}>
                    <div className="bg-[#07000f]" style={{ width: '6rem', height: '6rem', padding: '1rem' }}>
                      <img src={step1Image} loading="lazy" style={{ width: '100%' }} alt=""></img>
                    </div>
                  </div>
                  <div style={{ marginTop: '1rem', marginLeft: '3vw' }}>
                    <div className="home-howto_text-wrapper">
                      <div className="margin-bottom margin-small"><img src={metamaskImage} loading="lazy" alt="" style={{ width: '4rem', height: '4rem' }}></img></div>
                      <div className="margin-bottom margin-xsmall">
                        <h6 className="text-xl lg:text-2xl font-semibold mt-7">Download and install MetaMask</h6>
                      </div>
                      <p className="mt-6 text-lg text-white/[.7]">Download and install a Chrome browser plugin called <a href="https://metamask.io/" className="underline">MetaMask</a>. This will allow websites (that you authorize) access to your Ethereum account.</p>
                      <div className="mt-10">
                        <a rel="noreferrer" href="https://metamask.io/" target="_blank" className="button-secondary button-small w-button border border-gray-500 hover:border-white text-white font-medium text-base md:text-lg lg:text-xl pt-3 pb-4 px-4 md:px-6 lg:px-10 rounded-full">Download MetaMask</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex mt-24">
                  <div className="" style={{ marginTop: '0px', marginLeft: '-3rem' }}>
                    <div className="bg-[#07000f]" style={{ width: '6rem', height: '6rem', padding: '1rem' }}>
                      <img src={step2Image} loading="lazy" style={{ width: '100%' }} alt=""></img>
                    </div>
                  </div>
                  <div style={{ marginTop: '1rem', marginLeft: '3vw' }}>
                    <div className="home-howto_text-wrapper">
                      <div className="margin-bottom margin-small"><img src={ethereumImage} loading="lazy" alt="" style={{ width: '4rem', height: '4rem' }}></img></div>
                      <div className="margin-bottom margin-xsmall">
                        <h6 className="text-xl lg:text-2xl font-semibold mt-7">Buy some Ethereum</h6>
                      </div>
                      <p className="mt-6 text-lg text-white/[.7]">If you made a new account, buy some Ethereum. The MetaMask plugin has a button that will allow you to buy Ether from Coinbase.</p>
                    </div>
                  </div>
                </div>
                <div className="flex mt-24">
                  <div className="" style={{ marginTop: '0px', marginLeft: '-3rem' }}>
                    <div className="bg-[#07000f]" style={{ width: '6rem', height: '6rem', padding: '1rem' }}>
                      <img src={step3Image} loading="lazy" style={{ width: '100%' }} alt=""></img>
                    </div>
                  </div>
                  <div style={{ marginTop: '1rem', marginLeft: '3vw' }}>
                    <div className="home-howto_text-wrapper">
                      <div className="margin-bottom margin-small"><img src={openseaImage} loading="lazy" alt="" style={{ width: '4rem', height: '4rem' }}></img></div>
                      <div className="margin-bottom margin-xsmall">
                        <h6 className="text-xl lg:text-2xl font-semibold mt-7">Start buying and selling on OpenSea</h6>
                      </div>
                      <p className="mt-6 text-lg text-white/[.7]">Once you have the plugin installed, connect wallet to OpenSea and you will be able to buy and sell TKOs on OpenSea.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="faq" style={{ paddingLeft: '7%', paddingRight: '7%', paddingBottom: '0%', paddingTop: '8%' }}>
          <div>
            <span className="text-3xl md:text-4xl lg:text-5xl text-white font-semibold">Details and FAQ</span>
            <div className="block lg:grid grid-cols-2 grid-flow-col text-white border-t mt-24">
              <div className="row-span-5 p-4 text-xl md:text-2xl font-semibold">
                What is Quidverse?
              </div>
              <div className="row-span-7 p-4 text-lg text-white/[.7]">
                The squid metaverse, also known as, Quidverse. Quidverse is the metaverse created by Quidverse LLC and the $QUID crypto community where $QUID serves as the main fuel for the ecosystem. Once fully deployed, users will be able to buy and sell assets within the Quidverse using $QUID.
              </div>
            </div>
            <div className="block lg:grid grid-cols-2 grid-flow-col text-white border-t mt-12">
              <div className="row-span-5 p-4 text-xl md:text-2xl font-semibold">
                What is a TKO?
              </div>
              <div className="row-span-7 p-4 text-lg text-white/[.7]">
                TKO is our first NFT collection which fully sold out shortly after its launch. It consisted of 1000 unique NFTs made of 144 assets and sold at 0.25 ETH each. The artwork was hand-drawn by industry-leading artists and made just for the Quidverse.
              </div>
            </div>
            <div className="block lg:grid grid-cols-2 grid-flow-col text-white border-t mt-12">
              <div className="row-span-5 p-4 text-xl md:text-2xl font-semibold">
                Why should I own a TKO NFT?
              </div>
              <div className="row-span-7 p-4 text-lg text-white/[.7]">
                TKOs are one of the only NFTs out there with a real utility. You can be the biggest collector of NFTs but look into your portfolio; ask yourself, what has utility? When you own a TKO you can stake it for 333 QUID per day, unlock exclusive parts of the metaverse that can earn you more QUID per day, play our P2E games, participate in events that require you to own an NFT, and get access to all future NFT drops before anyone else. You are also buying a piece of NFT history by collecting high quality art before it gets discovered: Mona Lisa.
              </div>
            </div>
            <div className="block lg:grid grid-cols-2 grid-flow-col text-white border-t mt-12">
              <div className="row-span-5 p-4 text-xl md:text-2xl font-semibold">
                What is QUID?
              </div>
              <div className="row-span-7 p-4 text-lg text-white/[.7]">
                QUID is the cryptocurrency associated with the Quidverse. It is part of the Quidverse in which it is the fuel of the metaverse and all Quidverse related secondary transactions. When you buy something in the metaverse you will have to use QUID. When you stake your NFTs, you get rewarded in QUID. The currency itself is very liquid and has its own utility such as a wallet, app, and more. The Quidverse is as self-fulfilling as they come.
              </div>
            </div>
            <div className="block lg:grid grid-cols-2 grid-flow-col text-white border-t mt-12">
              <div className="row-span-5 p-4 text-xl md:text-2xl font-semibold">
                How many people know about Quidverse and QUID?
              </div>
              <div className="row-span-7 p-4 text-lg text-white/[.7]">
                The Quidverse has over 1000 members on Discord and 250 NFT holders. QUID has over 3000 holders. What do you think happens when more people find out?
              </div>
            </div>
            <div className="block lg:grid grid-cols-2 grid-flow-col text-white border-t mt-12">
              <div className="row-span-5 p-4 text-xl md:text-2xl font-semibold">
                How many TKO NFTs are staked?
              </div>
              <div className="row-span-7 p-4 text-lg text-white/[.7]">
                688 NFTs are staked. 68.8% of the total NFT supply!
              </div>
            </div>
            <div className="block lg:grid grid-cols-2 grid-flow-col text-white border-t mt-12">
              <div className="row-span-5 p-4 text-xl md:text-2xl font-semibold">
                When you say "build your wealth", do you mean by staking? If so, how many NFTs do I need to stake?
              </div>
              <div className="row-span-7 p-4 text-lg text-white/[.7]">
                Quidverse imagines wealth to be financial freedom. Quidverse helps you build your wealth by increasing the value of your Quidverse assets over time, continuously delivering and innovating, and allowing its holders to own the Quidverse. Staking is a huge part of building wealth. 333 QUID per day could very well be $1000 a day once QUID reaches $1B marketcap, which isn't alot. To start staking, you need 4 TKO NFTs and then click the green button on top.
              </div>
            </div>
            <div className="block lg:grid grid-cols-2 grid-flow-col text-white border-t mt-12">
              <div className="row-span-5 p-4 text-xl md:text-2xl font-semibold">
                I'm interested. How can I join the Quidverse and "build my wealth"?
              </div>
              <div className="row-span-7 p-4 text-lg text-white/[.7]">
                First, you can join the Quidverse community by joining our Discord. Second, you can start benefitting from the Quidverse by getting your first TKO NFT and building your NFT collection. Third, sign up to our newsletter so you can get exclusive access to other ways of growing your wealth with Quidverse (such as, new NFT drop).
              </div>
            </div>
          </div>
          <Footer/>
        </div>
      </div>
    </div>
  );
}

export default Home;
