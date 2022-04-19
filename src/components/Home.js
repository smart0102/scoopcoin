import React, { useEffect } from "react";
// import React, { useEffect, useState, useContext } from "react";

// import arrowLeftImg from "../assets/images/arrow-left_black.svg";
// import arrowRightImg from "../assets/images/arrow-right_black.svg";

import Header from "../wrappers/header.js";
// import Footer from "./Footer.js";
// import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import axios from "axios";

import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  // border: `1px solid ${theme.palette.divider}`,
  // '&:not(:last-child)': {
  //   borderBottom: 0,
  // },
  border: 'none',
  '&:before': {
    display: 'none',
  },
}));
const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  border: 'none',
  backgroundColor:'rgba(255, 255, 255)',
  // backgroundColor:
  //   theme.palette.mode === 'dark'
  //     ? 'rgba(255, 255, 255)'
  //     : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  border: 'none'
  // borderTop: '1px solid transparent',
}));

function Home() {
  // const responsive = {
  //   desktop1: {
  //     breakpoint: { max: 3000, min: 1500 },
  //     items: 4,
  //     slidesToSlide: 1, // optional, default to 1.
  //   },
  //   desktop: {
  //     breakpoint: { max: 1500, min: 1124 },
  //     items: 3,
  //     slidesToSlide: 1, // optional, default to 1.
  //   },
  //   tablet: {
  //     breakpoint: { max: 1124, min: 710 },
  //     items: 2,
  //     slidesToSlide: 1, // optional, default to 1.
  //   },
  //   mobile: {
  //     breakpoint: { max: 710, min: 0 },
  //     items: 1,
  //     slidesToSlide: 1, // optional, default to 1.
  //   },
  // };
  // const [currentStateImg, setCurrentStateImg] = useState(0);
  // const [transactionNFT, setTransactionNFT] = useState([]);
  var flag = 0;
  // const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
  //   const {
  //     carouselState: { currentSlide },
  //   } = rest;
  //   return (
  //     <div className="carousel-button-group">
  //       <img
  //         alt=""
  //         className="border rounded-full p-4 hover:border-black"
  //         onClick={() => goToSlide(currentSlide - 1)}
  //         src={arrowLeftImg}
  //         style={{
  //           position: "absolute",
  //           left: "0px",
  //           top: "410px",
  //           height: "60px",
  //         }}
  //       ></img>
  //       <img
  //         alt=""
  //         className="border rounded-full p-4 hover:border-black"
  //         onClick={() => goToSlide(currentSlide + 1)}
  //         src={arrowRightImg}
  //         style={{
  //           position: "absolute",
  //           left: "70px",
  //           top: "410px",
  //           height: "60px",
  //         }}
  //       ></img>
  //     </div>
  //   );
  // };
  
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  useEffect(() => {
    try {
      if (flag === 0) {
        console.log("123123");
        axios
          .get(
            "https://api.bloxy.info/token/transfers?key=ACCYNfiivhYer&token=0x82994dff990b80EE01A90A9C2f5aFccc1f5E32F5"
          )
          .then((resp) => {
            // console.log(resp.data);
            let temp = resp.data;
            let tranHashes = [];
            if (temp.length > 0) {
              tranHashes.push(temp[0]["tx_hash"]);
            }
            for (let i = 1; i < temp.length && i < 20; i++) {
              if (temp[i]["tx_hash"] !== temp[i - 1]["tx_hash"]) {
                tranHashes.push(temp[i]["tx_hash"]);
                console.log(temp[i]["tx_hash"]);
              }
            }
            // setTransactionNFT(tranHashes);
            console.log(tranHashes);
            // flag = 1;
          });
      }
    } catch (e) {
      console.log("error occurred", e);
      axios
        .get(
          "https://api.bloxy.info/token/transfers?key=ACCYNfiivhYer&token=0x82994dff990b80EE01A90A9C2f5aFccc1f5E32F5"
        )
        .then((resp) => {
          // console.log(resp.data);
          let temp = resp.data;
          let tranHashes = [];
          if (temp.length > 0) {
            tranHashes.push(temp[0]["tx_hash"]);
          }
          for (let i = 1; i < temp.length && i < 20; i++) {
            if (temp[i]["tx_hash"] !==temp[i - 1]["tx_hash"]) {
              tranHashes.push(temp[i]["tx_hash"]);
            }
          }
          // setTransactionNFT(tranHashes);
          console.log(tranHashes);
          flag = 1;
        });
    }
  }, []);
  return (
    <div className="ml-[0px] lg:mt-[0px]">
      <Header/>
      <div
        className="mt-[-65px] rounded-bl-[44px] rounded-br-[44px] md:rounded-bl-[54px] md:rounded-br-[54px] lg:rounded-bl-[64px] lg:rounded-br-[64px] "
        style={{}}
      >
        <header
          className="bg-[url('./assets/images/BG-3.png')] bg-cover"
        >
          <div className="text-center pt-14 md:pt-21 lg:pt-28 pb-20 md:pb-30 lg:pb-40">
            <div className="mt-[20vh]">
              <h1 className="text-[2.5rem] md:text-[3rem] lg:text-[3.5rem] font-bold">
                🍦Start Scooping🍦
              </h1>
            </div>

            <div
              className="container mx-auto"
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "10px",
                flexWrap: "wrap",
                marginTop:"60px"
              }}
            >
              <div className="button-wrapper button-wrapper-center mt-7">
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-[#b561f2] hover:bg-white text-black hover:text-black font-medium text-xl pt-3 pb-4 px-10 rounded-lg cursor-pointer"
                >
                  Buy More🍦 Scoops
                </a>
              </div>
              <div className="button-wrapper button-wrapper-center mt-7">
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-white hover:bg-gray-500 text-black hover:text-white font-medium text-xl pt-3 pb-4 px-10 rounded-lg cursor-pointer"
                >
                  Cash Out🍦 Scoops
                </a>
              </div>
            </div>
          </div>
        </header>

        <div className="block px-10 py-10">
          <div className="lg:w-1/3 sm:w-1/2 m-auto">
              <div className="group rounded-lg border border-black hover:border-gray-300 cursor-pointer text-center p-5">             
                  <p
                    className=" text-xl md:text-2xl"
                    style={{ lineHeight: "1.5" }}
                  >
                    Balance:
                  </p>
                  <br></br>
                  <div>
                    <p
                      className="text-xl md:text-2xl"
                      style={{ lineHeight: "1.5" }}
                    >
                      #🍦 in Discord
                      <br />
                      #🍦 in your connected wallet
                    </p>
                  </div>                
              </div>
            
          </div>
          <div className="lg:w-1/3 sm:w-1/2 text-center m-auto my-6 p-5 rounded-lg border  hover:border-gray-300 cursor-pointer text-xl md:text-2xl lg:text-3xl' : 'rounded-[32px]  border-gray-700 lg:text-3xl">
            <p className="text-xl md:text-2xl" style={{ lineHeight: "1.5" }}>
              Your Stats
              <br />
              [Lifetime sent/received on discord]
            </p>
          </div>
          <div className="lg:w-1/3 sm:w-1/2 text-center m-auto my-6 p-5 rounded-lg border  hover:border-gray-300 cursor-pointer text-xl md:text-2xl lg:text-3xl' : 'rounded-[32px]  border-gray-700  lg:text-3xl">
            <p className="text-xl md:text-2xl" style={{ lineHeight: "1.5" }}>
              Transaction History
              <br />
              [History from Discord]
            </p>
          </div>
        </div>
      </div>

      <div className="rounded-tl-[44px] rounded-tr-[44px] md:rounded-tl-[54px] md:rounded-tr-[54px] lg:rounded-tl-[64px] lg:rounded-tr-[64px] my-15 lg:ml-[25%] lg:mr-[25%] md:ml-[20%] md:mr-[20%]">

          <div className="m-auto text-3xl md:text-4xl lg:text-5xl  font-semibold text-center mb-3">
            FAQs
          </div>
          <div>
            <Accordion  onChange={handleChange('panel1')}>
              <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                <Typography><p className="text-xl md:text-2xl font-semibold">How to buy Scoops?</p></Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <p className="text-xl">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                  malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
                  sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                  sit amet blandit leo lobortis eget.
                  </p>
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
              <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                <Typography><p className="text-xl md:text-2xl font-semibold">  How to cash out Scoops?</p></Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <p className="text-xl">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                  malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
                  sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                  sit amet blandit leo lobortis eget.
                  </p>
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
              <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                <Typography><p className="text-xl md:text-2xl font-semibold">Why do I have 2 balances?</p></Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <p className="text-xl">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                  malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
                  sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                  sit amet blandit leo lobortis eget.
                  </p>
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
              <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
                <Typography><p className="text-xl md:text-2xl font-semibold"> How do I move Scoops from 1 balance to another?</p></Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <p className="text-xl">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                  malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
                  sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                  sit amet blandit leo lobortis eget.
                  </p>
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>

      </div>

    </div>
  );
}

export default Home;
