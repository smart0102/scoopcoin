// import React, { useEffect, useState } from 'react';
import React, { useEffect } from 'react';
// import arrowLeftImg from '../assets/images/arrow-left_black.svg';
// import arrowRightImg from '../assets/images/arrow-right_black.svg';
import step1Image from '../assets/images/step1.svg';
import step2Image from '../assets/images/step2.svg';
// import step3Image from '../assets/images/step3.svg';
import metamaskImage from '../assets/images/metamask_1metamask.png';
import ethereumImage from '../assets/images/ethereum_1ethereum.png';
// import openseaImage from '../assets/images/Logomark-Blue.png';

import Header from '../wrappers/header.js';

// import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import axios from "axios";

function Home() {

  // const responsive = {
  //   desktop1: {
  //     breakpoint: { max: 3000, min: 1500 },
  //     items: 4,
  //     slidesToSlide: 1 // optional, default to 1.
  //   },
  //   desktop: {
  //     breakpoint: { max: 1500, min: 1124 },
  //     items: 3,
  //     slidesToSlide: 1 // optional, default to 1.
  //   },
  //   tablet: {
  //     breakpoint: { max: 1124, min: 710 },
  //     items: 2,
  //     slidesToSlide: 1 // optional, default to 1.
  //   },
  //   mobile: {
  //     breakpoint: { max: 710, min: 0 },
  //     items: 1,
  //     slidesToSlide: 1 // optional, default to 1.
  //   }
  // };
  // const [currentStateImg, setCurrentStateImg] = useState(0);
  // const [transactionNFT, setTransactionNFT] = useState([]);
  // var flag = 0;
  // const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
  //   const { carouselState: { currentSlide } } = rest;
  //   return (
  //     <div className="carousel-button-group">
  //       <img alt="" className='border rounded-full p-4 hover:border-black' onClick={() => goToSlide(currentSlide - 1)} src={arrowLeftImg} style={{ position: 'absolute', left: '0px', top: '410px', height: '60px' }}></img>
  //       <img alt="" className='border rounded-full p-4 hover:border-black' onClick={() => goToSlide(currentSlide + 1)} src={arrowRightImg} style={{ position: 'absolute', left: '70px', top: '410px', height: '60px' }}></img>
  //     </div>
  //   );
  // };
  useEffect(() => {
    try {


      
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
          if (temp[i]['tx_hash'] !== temp[i - 1]['tx_hash']) {
            tranHashes.push(temp[i]['tx_hash']);
          }
        }
        // setTransactionNFT(tranHashes);
        console.log(tranHashes);
        // flag = 1;
      });
    }

  }, [])
  return (
    <div className=" ml-[0px] lg:mt-[0px]">
      <Header/>
      <div className="mt-[-65px] rounded-bl-[44px] rounded-br-[44px] md:rounded-bl-[54px] md:rounded-br-[54px] lg:rounded-bl-[64px] lg:rounded-br-[64px]">
        <header className=" bg-[url('./assets/images/BG-3.png')] bg-cover">
          <div className ="text-center pt-14 md:pt-21 lg:pt-28 pb-20 md:pb-30 lg:pb-40">
            <div className="mt-[20vh]">
              <h1 className="text-[2.5rem] md:text-[3rem] lg:text-[3.5rem] font-bold text-white">????Start Scooping????</h1>
            </div>
            <div className="container mx-auto mt-[5vh]" style={{ display: 'flex', justifyContent: 'center' }}>
              <div className= "w-[50vw]">
                <p className="text-[1.8rem] font-bold text-white">Give, receive, and cash out???? Scoops as rewards for gratitude in your online community.</p>
              </div>
            </div>
            <div className="container mx-auto mt-[5vh]" style={{ display: 'flex', justifyContent: 'center', gap: '10px', flexWrap: 'wrap' }}>
              <div className="button-wrapper button-wrapper-center mt-7">
                <a href="https://discord.com/oauth2/authorize?client_id=951871354733486130&permissions=277025458176&scope=bot%20applications.commands" target="_blank" rel="noreferrer" className="bg-[#3fdade] hover:bg-[#79e6e9] text-white font-bold text-xl pt-3 pb-4 px-10 rounded-lg cursor-pointer" >Install ???? Scoopbot in discord</a>
              </div>
            </div>
          </div>
        </header>      
    
      </div>

      <div className="rounded-tl-[44px] rounded-tr-[44px] md:rounded-tl-[54px] md:rounded-tr-[54px] lg:rounded-tl-[64px] lg:rounded-tr-[64px] mt-6">
           
        <div id="faq" className='lg:pl-[30%] lg:pr-[30%] md:pl-[25%] md:pr-[25%]'>
          <div>
            {/* <span className="text-3xl md:text-4xl lg:text-5xl font-semibold">Details and FAQ</span> */}
            <div className="block border-t mt-24">
              <div className="p-4 text-xl md:text-2xl font-semibold">
                What is Scoops?
              </div>
              <div className="p-4 text-lg">
                Sccops are used in Scoopcoin.
              </div>
            </div>
            <div className="block border-t mt-12">
              <div className="p-4 text-xl md:text-2xl font-semibold">
                Why uses Scoops?
              </div>
              <div className="p-4 text-lg">
                Scoops is very useful.
              </div>
            </div>
            <div className="block border-t mt-12">
              <div className="p-4 text-xl md:text-2xl font-semibold">
                How uses Scoops?
              </div>
              <div className="p-4 text-lg">
              ???? Scoops don't have any value until they've been given away. You can only accumulate ???? Scoops by receiving them.
              ???? Get 1 ???? Scoop to start.
              ???? Get another ???? Scoop every day that you give one away.
              ???? Receive bonus ???? Scoops from the Scoopbot as you go along ????

              </div>
            </div>

          </div>
       
        </div>
        <div className="block lg:grid grid-cols-2 grid-flow-col" style={{ paddingLeft: '7%', paddingRight: '7%', paddingBottom: '7%', paddingTop: '8%' }}>
          <div className="row-span-6 p-3">
            <div>
              <span className="text-3xl md:text-4xl lg:text-5xl font-semibold">How do I get a Scoopcoin?</span>
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
                    <p className="mt-6 text-lg">Download and install a Chrome browser plugin called <a href="https://metamask.io/" className="underline">MetaMask</a>. This will allow websites (that you authorize) access to your Ethereum account.</p>
                    <div className="mt-10">
                      <a rel="noreferrer" href="https://metamask.io/" target="_blank" className="button-secondary button-small w-button border border-gray-500 hover:border-white font-medium text-base md:text-lg lg:text-xl pt-3 pb-4 px-4 md:px-6 lg:px-10 rounded-full">Download MetaMask</a>
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
                    <p className="mt-6 text-lg">If you made a new account, buy some Ethereum. The MetaMask plugin has a button that will allow you to buy Ether from Coinbase.</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
