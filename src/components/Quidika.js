import React, { useState } from 'react';

import quidikaImg from '../assets/quidika/6196c973cc0cc6360c4275e6_buyquidikaspacescene-02.jpeg';
import telegramImg from '../assets/quidika/telegram.svg';
import twitterImg from '../assets/quidika/twitter.svg';
import redditImg from '../assets/quidika/reddit.png';
import instagramImg from '../assets/quidika/instagram.svg';
import discordImg from '../assets/quidika/discord.svg';
import mediumImg from '../assets/quidika/medium.svg';
import etherscanImg from '../assets/quidika/etherscan.svg';
import coingecko from '../assets/quidika/coingecko.png';
import coinmarketcap from '../assets/quidika/coinmarketcap.png';
import appImg from '../assets/quidika/app Teaser.png';
import quidity from '../assets/quidika/quidity.svg';
import pop1Img from '../assets/quidika/pop1.png';
import pop2Img from '../assets/quidika/pop2.png';
import pop3Img from '../assets/quidika/pop3.png';
import secondShowImg from '../assets/quidika/secondShow.png';
import thirdShowImg from '../assets/quidika/thirdShow.png';

import step1Image from '../assets/images/step1.svg';
import step2Image from '../assets/images/step2.svg';
import step3Image from '../assets/images/step3.svg';
import squidImage from '../assets/quidika/squid boom.png';

import icon1Img from '../assets/quidika/icon1.svg';
import icon2Img from '../assets/quidika/icon2.svg';
import icon3Img from '../assets/quidika/icon3.svg';
import icon4Img from '../assets/quidika/icon4.svg';
import icon5Img from '../assets/quidika/icon5.svg';
import icon6Img from '../assets/quidika/icon6.svg';
import uniswapImg from '../assets/quidika/Uniswap_Logo.svg.png';
import Footer from './Footer.js';

// const data = {
//     rows: [
//         {
//             title: "What sets Quid apart from thousands of other cryptos?",
//             content: "Quid Ika is the ONLY crypto project with a functioning utility before launch. Our community has risen from a dying ecosystem into a flourishing Ikasystem. The Quidity App is already generating revenue, so it’s not some potential idea of the future. The future is now."
//         },
//         {
//             title: "Is Quid just another meme token?",
//             content: "Definitely not! While Quid does have good “meme-abilty” with it, it is backed by the Quidity app that already has working utility."
//         },
//         {
//             title: "Are Quid gas fees lower than other tokens on Uniswap?",
//             content: "Proudly yes, we deployed a simple contract with no fancy gimmicks that provide nothing to the holders but headaches. Our contract is simple and provides for low gas. Wish we could get rid of gas all together, but providing a simple contract is the next best thing."
//         },
//         {
//             title: "Why do I have to pay gas fees?",
//             content: "Unfortunately, that’s just part of the process of purchasing any token on Uniswap (including $UNI). The only way around this is by purchasing through a CEX, but that is not something that will happen until later on. For now, everyone must purchase Quid through Uniswap and pay the required gas fee for the transaction."
//         },
//         {
//             title: "How does Quid generate revenue?",
//             content: "Glad you asked, we collect revenue from various avenues using our app. Token devs have to pay to get listed on the app, allowing their holders to benefit from the innovative features of the app. Devs also pay for ads on the app to gain exposure for their upcoming or existing tokens. Quid also has a Launchpad that helps launch new coins in the Ikasystem. Quid provides all necessary resources for a successful launch, including contract creation, logo creation, web dev, free marketing, discounted ads, and more. Quid charges a % of transaction fees, so the more that Quid can help these project succeed, the more revenue that will be generated for Quid and ultimately, Quid holders."
//         },
//         {
//             title: "What does Quid do with its revenue?",
//             content: "All revenue is strategically withheld for buybacks and burns, which will increase the monetary value of Quid and benefit all holders."
//         },
//         {
//             title: "Who runs Quid?",
//             content: "Quid is community-owned and truly decentralized allowing the community to govern through a system called Quidverse."
//         },
//         {
//             title: "How did Quid come into existence?",
//             content: "Quid was founded by experienced crypto enthusiasts, developers, and entrepreneurs. Inspired by the mighty squid who has risen up the chain with no competitors in sight. We wanted to create a coin that combined both utility and a meme factor to make things fun and keep users engaged. Quid was launched by the top holders of EPRO, who came to an agreement with the EPRO developer. The developer of EPRO was inactive, so the founders of Quid did a fair exchange; EPRO hands its community and liquidity, and QUID gives life to its holders. That goes without saying that Quid is not EPRO. It's a brand new token that saved EPRO. The developer of EPRO is not the developer of Quid and is not on the team."
//         }]
// }

function Quidika() {
    const [currentStateImg, setCurrentStateImg] = useState(1);

    return (
        <div className="ml-[0px] lg:pl-[74px] mt-[50px]">
            <div className="bg-[#07000f] rounded-bl-[44px] rounded-br-[44px] md:rounded-bl-[54px] md:rounded-br-[54px] lg:rounded-bl-[64px] lg:rounded-br-[64px]" style={{ minHeight: '100vh' }}>
                <div className="bg-[url('./assets/images/BG-3.png')] bg-opacity-50" style={{ paddingTop: '7vh', paddingBottom: '5vh', backgroundSize: '100%' }}>
                    <div className="container mx-auto block lg:grid grid-flow-col grid-cols-2">
                        <div className="col-span-1" style={{ padding: '10%' }}>
                            <span className="text-white font-bold font-serif text-5xl md:text-6xl lg:text-7xl" style={{ lineHeight: '1.5' }}>Quid Ika</span>
                            <div className="margin-bottom margin-xsmall">
                                <h6 className="text-xl lg:text-2xl font-semibold mt-7 text-white">Meet the Inu Killer: $QUID</h6>
                            </div>
                            <p className="mt-6 text-lg text-white/[.7]">A crypto token founded by experienced crypto enthusiasts, developers, and entrepreneurs. Inspired by the mighty squid who has risen up the chain with no competitors in sight. Our community has risen from a dying ecosystem into a flourishing <span className="text-white">Ikasystem</span>.</p>
                            <br></br>
                            <p className="mt-6 text-lg text-white/[.7]">Quid Ika generates revenue with its insanely competitive <span className="text-white">Quidity App</span> and multiple other streams. Keep scrolling to learn more!</p>
                            <br></br>
                            <div className="block xl:flex mt-7">
                                <p className="mb-8">
                                    <a href="https://www.quidswap.exchange/#/swap?outputCurrency=0x9d38f670d15c14716be1f109a4f453e966a2b6d4&use=V2" target="_blank" rel="noreferrer" className=" bg-white hover:bg-gray-500 text-black hover:text-white font-medium text-lg md:text-xl pt-3 pb-3 px-4 md:px-6 lg:px-10 rounded-full mr-5 cursor-pointer" >Buy $QUID</a>
                                </p>
                                <p>
                                    <a href="https://ink.quid.gg/" target="_blank" rel="noreferrer" className="border border-gray-500 hover:border-white text-white font-medium text-lg md:text-xl pt-3 pb-3 px-4 md:px-6 lg:px-10 rounded-full cursor-pointer mb-8" >Read Ink-Paper</a>
                                </p>
                            </div>
                            <div className="flex space-x-4 mt-10">
                                <a href="https://t.me/quidika" target="_blank" rel="noreferrer"><img src={telegramImg} style={{ width: '44px' }} alt="telegram"></img></a>
                                <a href="https://twitter.com/quidikatoken" target="_blank" rel="noreferrer"><img src={twitterImg} style={{ width: '44px' }} alt="twitter"></img></a>
                                <a href="https://reddit.com/r/quidika" target="_blank" rel="noreferrer"><img src={redditImg} style={{ width: '44px' }} alt="reddit"></img></a>
                                <a href="https://instagram.com/quidika" target="_blank" rel="noreferrer"><img src={instagramImg} style={{ width: '44px' }} alt="instagram"></img></a>
                                <a href="https://discord.gg/quidika" target="_blank" rel="noreferrer"><img src={discordImg} style={{ width: '44px' }} alt="discord"></img></a>
                                <a href="https://medium.com/@quidika" target="_blank" rel="noreferrer"><img src={mediumImg} style={{ width: '48px', marginTop: '-2px' }} alt="Medium blog"></img></a>
                                <a href="https://etherscan.io/token/0x9d38f670d15c14716be1f109a4f453e966a2b6d4" target="_blank" rel="noreferrer"><img src={etherscanImg} style={{ width: '44px' }} alt="Etherscan"></img></a>
                                <a href="https://www.coingecko.com/en/coins/quid-ika" target="_blank" rel="noreferrer"><img src={coingecko} style={{ width: '44px' }} alt="CoinGecko"></img></a>
                                <a href="https://coinmarketcap.com/currencies/quid-ika/" target="_blank" rel="noreferrer"><img src={coinmarketcap} style={{ width: '44px' }} className="rounded-full" alt="CoinMarketCap"></img></a>
                            </div>
                        </div>
                        <div className="col-span-1" style={{ padding: '10%', marginTop: '5%' }}>
                            <img src={quidikaImg} style={{ borderRadius: '5%' }} alt="Quid Ika"></img>
                        </div>
                    </div>
                </div>
                <div className="block md:grid grid-flow-col grid-cols-3 text-left" style={{ marginTop: '8vh' }}>
                    <div className="col-span-1">
                        <div className="flex justify-center md:justify-end p-2 relative" style={{ height: '100%' }}>
                            <div className="rounded-xl md:rounded-3xl shadow-lg bg-[#001137]" style={{ maxWidth: '330px' }}>
                                <div className="p-8">
                                    <h5 className="text-[#a0beff] text-xl font-medium mb-2">Quidity App</h5>
                                    <p className="text-white/[.9] tracking-wide text-[12px] md:text-[14px] mt-7 mb-4 font-light">
                                        Our app (quidity.io) is a one-stop for any crypto enthusiast. It features reflection tracking, portfolio tracking, whale wallet watching, live charts & dex trades, token news, and more!
                                        </p>
                                    <br></br>
                                    <br></br>
                                    <a href="https://quidity.io/" target="_blank" rel="noreferrer" className="px-0 hover:underline text-white font-medium absolute ml-1" style={{ bottom: '30px' }}>
                                        Visit App
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-1">
                        <div className="flex justify-center p-2 relative" style={{ height: '100%' }}>
                            <div className="rounded-xl md:rounded-3xl shadow-lg bg-[#001137]" style={{ maxWidth: '330px' }}>
                                <div className="p-8">
                                    <h5 className="text-[#a0beff] text-xl font-medium mb-2">Ikasystem (launchpad)</h5>
                                    <p className="text-white/[.9] tracking-wide text-[12px] md:text-[14px] mt-7 mb-4 font-light">
                                        Quid offers aspiring developers the opportunity to launch their own ika token. Devs who choose to launch with our Ikasystem will get full access to our resources -- web dev, contract creation, liquidity lock, free marketing, and more.
                                        </p>
                                    <br></br>
                                    <br></br>
                                    <a href="https://forms.gle/sLvF6WkGEoQzsuV8A" target="_blank" rel="noreferrer" className="px-0 hover:underline text-white font-medium absolute ml-1" style={{ bottom: '30px' }}>
                                        Launch an Ika
                                        </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-1">
                        <div className="flex justify-center md:justify-start p-2 relative" style={{ height: '100%' }}>
                            <div className="rounded-xl md:rounded-3xl shadow-lg bg-[#001137]" style={{ maxWidth: '330px' }}>
                                <div className="p-8">
                                    <h5 className="text-[#a0beff] text-xl font-medium mb-2">Ika -- The Next Inu</h5>
                                    <p className="text-white/[.9] tracking-wide text-[14px] mt-7 mb-4 font-light">
                                        We know importance of community & the power of social media. So while our utility and mission are serious, we created the next big trend: ika. Ika tokens are the next Inu. And Quid is the First Ika.
                                        </p>
                                    <br></br>
                                    <br></br>
                                    <a href="https://ink.quid.gg/" target="_blank" rel="noreferrer" className="px-0 hover:underline text-white absolute ml-1" style={{ bottom: '30px' }}>
                                        Read Inkpaper
                                        </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ paddingTop: '5vh', paddingBottom: '0vh', backgroundSize: '100%' }}>
                    <div className="container mx-auto block lg:grid grid-flow-col grid-cols-2">
                        <div className="col-span-1" style={{ paddingLeft: '20%', paddingRight: '20%', paddingTop: '10%' }}>
                            <img src={appImg} style={{ borderRadius: '5%' }} alt="Quidity app"></img>
                        </div>
                        <div className="col-span-1" style={{ padding: '10%' }}>
                            <span className="text-white font-bold font-serif text-3xl md:text-4xl lg:text-5xl" style={{ lineHeight: '1.5' }}>Meme Meets Utility</span>
                            <p className="mt-6 text-lg text-white/[.7] tracking-wide">Quid does things differently. Unlike most of the crypto world, Quid launched with a utility and a meme factor to keep its community engaged. With a small supply of 500M, our first target of $1.00 is within reach. This target will be expedited by our <span className="text-yellow-200">buyback and burns</span> — using revenue from our very own <a href="https://quidity.io/home" target="_blank" rel="noreferrer" className="text-white hover:underline"> Quidity.io </a> app.</p>
                            <br></br>
                            <p className="mt-3 text-lg text-white/[.7] tracking-wide">Quid is community-owned and truly decentralized allowing the community to govern through a system called Quidverse.</p>
                            <br></br>
                            <div className="block lg:grid grid-flow-col grid-cols-3 mt-7">
                                <div className="col-span-1 border text-white text-center" style={{ borderRadius: '15px', padding: '10%', margin: '3%' }}>
                                    <p className="text-4xl font-bold tracking-wider">2.2k+</p>
                                    <p className="mt-2 text-white/[.8]">Daily Users</p>
                                </div>
                                <div className="col-span-1 border text-white text-center" style={{ borderRadius: '15px', padding: '10%', margin: '3%' }}>
                                    <p className="text-4xl font-bold tracking-wider">47</p>
                                    <p className="mt-2 text-white/[.8]">Partners</p>
                                </div>
                                <div className="col-span-1 border text-white text-center" style={{ borderRadius: '15px', padding: '10%', margin: '3%' }}>
                                    <p className="text-4xl font-bold tracking-wider">$150k</p>
                                    <p className="mt-2 text-white/[.8]">Revenue YTD</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="container mx-auto text-center">
                    <div style={{ padding: '7%', paddingTop: '3%', paddingBottom: '10%' }}>
                        <p className="text-white font-bold font-serif text-4xl lg:text-5xl" style={{ lineHeight: '1.5' }}>Quid Ika Blog</p>
                        <p className="text-white">Latest News</p>
                        <br></br>
                        <p className="text-xl lg:text-2xl font-semibold mt-7 text-white">
                            <a href="https://www.quidika.com/post/quid-ika-history-in-the-making" _target="blank">NFT Crypto Art Project Launch Announced By Quid Ika: History in the Making</a></p>
                        <div className="mt-6 text-lg text-white/[.7] flex justify-center text-left">
                            <div className="max-w-screen-lg">
                                <p>
                                    Coming in just a few short weeks, Quid Ika will be launching their first ever collection of NFTs. This small collection of only 1000 NFTs will be depicting a reimagining of some of sports history’s greatest moments of the past and present time including Ali vs Liston’s historical moment.
                            </p>
                                <p className="mt-6 text-lg text-white/[.9] border-b-2 pb-8">DECEMBER 18, 2021</p>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
            <div className="bg-white" style={{ marginTop: '5vh' }}>
                <div className="container mx-auto" style={{ padding: '5%' }}>
                    <div className="bg-[#07000f] rounded-[50px]" style={{ padding: '5%' }}>
                        <div className="mb-5 flex lg:block flex-col text-center lg:text-left">
                            <span onClick={() => setCurrentStateImg(1)} className={currentStateImg === 1 ? 'cursor-pointer p-2 md:p-3 lg:p-4 mb-3 mx-1 bg-[#001b56] text-white text-lg md:text-xl' : 'mx-1 cursor-pointer p-2 md:p-3 lg:p-4 mb-3 bg-white text-black text-lg md:text-xl'} style={{ borderRadius: '20px' }}>
                                Quidity.io
                            </span>
                            <span onClick={() => setCurrentStateImg(2)} className={currentStateImg === 2 ? 'cursor-pointer p-2 md:p-3 lg:p-4 mb-3 mx-1 bg-[#001b56] text-white text-lg md:text-xl' : 'mx-1 cursor-pointer p-2 md:p-3 lg:p-4 mb-3 bg-white text-black text-lg md:text-xl'} style={{ borderRadius: '20px' }}>
                                Launchpad
                            </span>
                            <span onClick={() => setCurrentStateImg(3)} className={currentStateImg === 3 ? 'cursor-pointer p-2 md:p-3 lg:p-4 mb-3 mx-1 bg-[#001b56] text-white text-lg md:text-xl' : 'mx-1 cursor-pointer p-2 md:p-3 lg:p-4 mb-3 bg-white text-black text-lg md:text-xl'} style={{ borderRadius: '20px' }}>
                                Deflationary (Burn)
                            </span>
                        </div>
                        <div className="block lg:grid grid-cols-9 grid-flow-col mt-7">
                            <div className="col-span-5" style={{ marginTop: '6vh', paddingRight: '5%', paddingLeft: '5%' }}>
                                <div className={currentStateImg === 1 ? 'block' : 'hidden'}>
                                    <p className="font-semibold font-serif mb-8 text-3xl md:text-4xl lg:text-5xl"><span className="text-[#b6cdff] line-through">li</span><span className="text-[#8db1ff] underline">quidity.io</span></p>
                                    <p className="text-white tracking-wider font-serif font-light text-sm md:text-lg" style={{ lineHeight: '32px' }}><span className="font-bold">Liquidity + Quid = Quidity App.</span> Quidity is one of our many sources of revenue. Token devs have to pay to get listed on the app, allowing their holders to benefit from the innovative features of the app. Devs also pay for ads on the app to gain exposure for their upcoming or existing tokens. <span className="text-[#ff9c3f]">Revenue is strategically withheld for buyback and burns.</span></p>
                                    <p className="text-white tracking-wide font-serif font-medium" style={{ marginTop: '5vh' }}><a href="https://quidity.io/" className="hover:underline">Visit quidity.io</a></p>
                                </div>
                                <div className={currentStateImg === 2 ? 'block' : 'hidden'}>
                                    <p className="font-semibold font-serif mb-8 text-3xl md:text-4xl lg:text-5xl"><span className="text-[#8db1ff]">The Ikasystem</span></p>
                                    <p className="text-white tracking-wider font-serif font-light text-sm md:text-lg" style={{ lineHeight: '32px' }}>Quid wants to encourage aspiring entrepreneurs to lead their own path in crypto. For a % of transaction fees, Quid will provide all resources necessary to launch a project— such as: contract creation, logo, web dev, free marketing, discounted ads forever, and more. Ika tokens are the future. <span className="text-yellow-200">Revenue is used for buyback and burns.</span></p>
                                    <p className="text-white tracking-wide font-serif font-medium" style={{ marginTop: '5vh' }}><a href="https://forms.gle/sLvF6WkGEoQzsuV8A" className="hover:underline">Launch your ika token</a></p>
                                </div>
                                <div className={currentStateImg === 3 ? 'block' : 'hidden'}>
                                    <p className="font-semibold font-serif mb-8 text-3xl md:text-4xl lg:text-5xl"><span className="text-[#8db1ff]">Buyback + Burn</span></p>
                                    <p className="text-white tracking-wider font-serif font-light text-sm md:text-lg" style={{ lineHeight: '32px' }}>Quid Ika is en route to generate millions of dollars in revenue. As a community-owned, decentralized project, the community will decide where the revenue goes. Nonetheless, a major chunk of revenue is used for buyback and burns to create an ultra-deflationary token and sustain longterm growth. <span className="text-[#ff9c3f]">We have already bought + burned 4% of supply.</span></p>
                                    <p className="text-white tracking-wide font-serif font-medium" style={{ marginTop: '5vh' }}><a href="https://etherscan.io/token/0x9d38f670d15c14716be1f109a4f453e966a2b6d4?a=0x000000000000000000000000000000000000dead" className="hover:underline">View burn address</a></p>
                                </div>
                            </div>
                            <div className="relative col-span-4">
                                <div className="relative bg-[#001542]" style={{ marginLeft: '10%', width: '80%', marginTop: '8vh', padding: '3%', borderRadius: '50px', paddingTop: '15%', paddingBottom: '5%' }}>
                                    <img src={currentStateImg === 1 ? pop1Img : currentStateImg === 2 ? pop2Img : pop3Img} className="absolute" style={{ width: '70%', bottom: '20%', left: '-20%' }} alt="revenue info"></img>
                                    <img src={currentStateImg === 1 ? quidity : currentStateImg === 2 ? secondShowImg : thirdShowImg} alt="revenue info #2"></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-[#07000f] p-2 rounded-tl-[44px] rounded-tr-[44px] md:rounded-tl-[54px] md:rounded-tr-[54px] lg:rounded-tl-[64px] lg:rounded-tr-[64px]" style={{ marginTop: '5vh' }}>
                <div className="text-center" style={{ paddingTop: '13vh' }}>
                    <p className="text-3xl md:text-4xl lg:text-5xl text-white font-bold">3 Minute Guide: How to Buy</p>
                    <p className="text-[#75a0ff] text-xl mt-4">Enjoy our low gas fees and holding rewards</p>
                </div>
                <div>
                    <div className="block lg:grid grid-cols-2 grid-flow-col text-white" style={{ paddingLeft: '7%', paddingRight: '7%', paddingBottom: '7%', paddingTop: '5%' }}>
                        <div className="row-span-6 p-3 flex justify-center items-center">
                            <img src={squidImage} style={{ width: '60%' }} alt="Quid old logo"></img>
                        </div>
                        <div className="row-span-6 p-4">
                            <div className="border-l">
                                <div className="flex">
                                    <div style={{ marginTop: '0px', marginLeft: '-3rem' }}>
                                        <div className="bg-[#07000f]" style={{ width: '6rem', height: '6rem', padding: '1rem' }}>
                                            <img src={step1Image} loading="lazy" style={{ width: '100%' }} alt="step 1"></img>
                                        </div>
                                    </div>
                                    <div style={{ marginTop: '1rem', marginLeft: '3vw' }}>
                                        <div className="home-howto_text-wrapper">
                                            <div className="margin-bottom margin-small">
                                                <p className="text-[#ff6868] text-2xl font-semibold">STEP 1</p>
                                            </div>
                                            <div className="margin-bottom margin-xsmall">
                                                <h6 className="text-xl lg:text-2xl font-semibold mt-7">CREATE WALLET</h6>
                                            </div>
                                            <p className="mt-6 text-lg text-white/[.7]">Download MetaMask and follow instructions to create wallet. Don't lose or share your seed phrase.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex mt-24">
                                    <div className="" style={{ marginTop: '0px', marginLeft: '-3rem' }}>
                                        <div className="bg-[#07000f]" style={{ width: '6rem', height: '6rem', padding: '1rem' }}>
                                            <img src={step2Image} loading="lazy" style={{ width: '100%' }} alt="step 2"></img>
                                        </div>
                                    </div>
                                    <div style={{ marginTop: '1rem', marginLeft: '3vw' }}>
                                        <div className="home-howto_text-wrapper">
                                            <div className="margin-bottom margin-small"><p className="text-[#ff6868] text-2xl font-semibold">STEP 2</p></div>
                                            <div className="margin-bottom margin-xsmall">
                                                <h6 className="text-xl lg:text-2xl font-semibold mt-7">CONNECT TO UNISWAP</h6>
                                            </div>
                                            <p className="mt-6 text-lg text-white/[.7]">Click on "Browser" in your MetaMask and type "Uniswap.Exchange". Search for Quid and import.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex mt-24">
                                    <div className="" style={{ marginTop: '0px', marginLeft: '-3rem' }}>
                                        <div className="bg-[#07000f]" style={{ width: '6rem', height: '6rem', padding: '1rem' }}>
                                            <img src={step3Image} loading="lazy" style={{ width: '100%' }} alt="step 3"></img>
                                        </div>
                                    </div>
                                    <div style={{ marginTop: '1rem', marginLeft: '3vw' }}>
                                        <div className="home-howto_text-wrapper">
                                            <div className="margin-bottom margin-small"><p className="text-[#ff6868] text-2xl font-semibold">STEP 3</p></div>
                                            <div className="margin-bottom margin-xsmall">
                                                <h6 className="text-xl lg:text-2xl font-semibold mt-7">SWAP WITH ETH</h6>
                                            </div>
                                            <p className="mt-6 text-lg text-white/[.7]">Swap from ETH to QUID using Uniswap. Set slippage (top right gear) to 4-6%. Keep calm and hold.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-center flex justify-center items-center flex-col" style={{ marginTop: '7vh' }}>
                    <div className="w-3/4 lg:w-1/2">
                        <p className="text-3xl md:text-4xl lg:text-5xl text-white font-bold">Quidomics</p>
                        <br></br>
                        <p className="text-lg md:text-xl tracking-wide text-white/[0.7]" style={{ lineHeight: '2' }}>The tokenomics of Quid are fair and support longterm sustainable growth. There are no ridiculous dev fees and no possibility of a rug pull since this is 100% community owned. Quid uses a multi-signature wallet to build community trust.</p>
                    </div>
                    <br></br>
                    <div>
                        <div className="block md:grid grid-flow-col grid-cols-3 text-left" style={{ marginTop: '8vh' }}>
                            <div className="col-span-1" style={{ paddingTop: '50px', paddingBottom: '50px' }}>
                                <div className="flex justify-center md:justify-end p-2 relative" style={{ height: '100%' }}>
                                    <div className="relative rounded-xl md:rounded-3xl shadow-lg bg-[#000c25] flex justify-center items-center" style={{ maxWidth: '330px' }}>
                                        <div className="absolute rounded-full p-7" style={{ top: '-50px', backgroundImage: 'linear-gradient(-144deg, #001137, #000c25 75%)', boxShadow: '-2px 0 3px 0 #000', border: '1px none black' }}>
                                            <img alt="" src={icon1Img} style={{ width: '50px', height: '50px' }}></img>
                                        </div>
                                        <div className="p-8 mt-8 text-center">
                                            <h5 className="text-[#9bb5ff] text-2xl font-bold mb-2">Low Gas Fees</h5>
                                            <p className="text-white/[.9] tracking-wide text-[14px] md:text-[16px] mt-5 mb-4 font-light">
                                                The Quid deployers created a simple contract since Quid is the First Ika. A simple contract means lower gas fees, even when GWEI is high.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-1" style={{ paddingTop: '50px', paddingBottom: '50px' }}>
                                <div className="flex justify-center p-2 relative" style={{ height: '100%' }}>
                                    <div className="rounded-xl md:rounded-3xl shadow-lg bg-[#001137] flex justify-center items-center" style={{ maxWidth: '330px' }}>
                                        <div className="absolute rounded-full p-7" style={{ top: '-50px', backgroundImage: 'linear-gradient(-144deg, #001137, #000c25 75%)', boxShadow: '-2px 0 3px 0 #000', border: '1px none black' }}>
                                            <img alt="" src={icon2Img} style={{ width: '50px', height: '50px' }}></img>
                                        </div>
                                        <div className="p-8 mt-8 text-center">
                                            <h5 className="text-[#9bb5ff] text-2xl font-bold mb-2">2% Rewards</h5>
                                            <p className="text-white/[.9] tracking-wide text-[14px] md:text-[16px] mt-5 mb-4 font-light">
                                                Known as reflections, token rewards are distributed evenly among holders to incentivize holding and show gratitude to investors for their support.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-1" style={{ paddingTop: '50px', paddingBottom: '50px' }}>
                                <div className="flex justify-center md:justify-start p-2 relative" style={{ height: '100%' }}>
                                    <div className="rounded-xl md:rounded-3xl shadow-lg bg-[#000c25] flex justify-center items-center" style={{ maxWidth: '330px' }}>
                                        <div className="absolute rounded-full p-7" style={{ top: '-50px', backgroundImage: 'linear-gradient(-144deg, #001137, #000c25 75%)', boxShadow: '-2px 0 3px 0 #000', border: '1px none black' }}>
                                            <img alt="" src={icon3Img} style={{ width: '50px', height: '50px' }}></img>
                                        </div>
                                        <div className="p-8 mt-8 text-center">
                                            <h5 className="text-[#9bb5ff] text-2xl font-bold mb-2">2% Marketing</h5>
                                            <p className="text-white/[.9] tracking-wide text-[14px] md:text-[16px] mt-5 mb-4 font-light">
                                                We don't believe in the devs getting rich when a token takes off. Therefore, Quid is community-owned & uses a multi-sig marketing wallet.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="block md:grid grid-flow-col grid-cols-3 text-left">
                            <div className="col-span-1" style={{ paddingTop: '50px', paddingBottom: '50px' }}>
                                <div className="flex justify-center md:justify-end p-2 relative" style={{ height: '100%' }}>
                                    <div className="relative rounded-xl md:rounded-3xl shadow-lg bg-[#001137] flex justify-center items-center" style={{ maxWidth: '330px' }}>
                                        <div className="absolute rounded-full p-7" style={{ top: '-50px', backgroundImage: 'linear-gradient(-144deg, #001137, #000c25 75%)', boxShadow: '-2px 0 3px 0 #000', border: '1px none black' }}>
                                            <img alt="" src={icon4Img} style={{ width: '50px', height: '50px' }}></img>
                                        </div>
                                        <div className="p-8 mt-8 text-center">
                                            <h5 className="text-[#9bb5ff] text-2xl font-bold mb-2">Fair Launch</h5>
                                            <p className="text-white/[.9] tracking-wide text-[14px] md:text-[16px] mt-5 mb-4 font-light">
                                                Quid is 100% fair launch. No presale tokens for anyone. Since Quid was a community launch, EPRO holders were airdropped fairly.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-1" style={{ paddingTop: '50px', paddingBottom: '50px' }}>
                                <div className="flex justify-center p-2 relative" style={{ height: '100%' }}>
                                    <div className="rounded-xl md:rounded-3xl shadow-lg bg-[#000c25] flex justify-center items-center" style={{ maxWidth: '330px' }}>
                                        <div className="absolute rounded-full p-7" style={{ top: '-50px', backgroundImage: 'linear-gradient(-144deg, #001137, #000c25 75%)', boxShadow: '-2px 0 3px 0 #000', border: '1px none black' }}>
                                            <img alt="" src={icon5Img} style={{ width: '50px', height: '50px' }}></img>
                                        </div>
                                        <div className="p-8 mt-8 text-center">
                                            <h5 className="text-[#9bb5ff] text-2xl font-bold mb-2">500M Supply</h5>
                                            <p className="text-white/[.9] tracking-wide text-[14px] md:text-[16px] mt-5 mb-4 font-light">
                                                The total supply of Quid is 500 million. There was no supply burn at launch. Any burned tokens in the burn address are from buyback & burns.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-1" style={{ paddingTop: '50px', paddingBottom: '50px' }}>
                                <div className="flex justify-center md:justify-start p-2 relative" style={{ height: '100%' }}>
                                    <div className="rounded-xl md:rounded-3xl shadow-lg bg-[#001137] flex justify-center items-center" style={{ maxWidth: '330px' }}>
                                        <div className="absolute rounded-full p-7" style={{ top: '-50px', backgroundImage: 'linear-gradient(-144deg, #001137, #000c25 75%)', boxShadow: '-2px 0 3px 0 #000', border: '1px none black' }}>
                                            <img alt="" src={icon6Img} style={{ width: '50px', height: '50px' }}></img>
                                        </div>
                                        <div className="p-8 mt-8 text-center">
                                            <h5 className="text-[#9bb5ff] text-2xl font-bold mb-2">Influencer Backed</h5>
                                            <p className="text-white/[.9] tracking-wide text-[14px] md:text-[16px] mt-5 mb-4 font-light">
                                                Quid is run by the Quidverse community. All decisions go through the holder-voting system. Our top holders has a huge influencer base.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br></br>
                <div>
                    <div className="container mx-auto block lg:grid grid-flow-col grid-cols-5" style={{ paddingLeft: '10%', paddingRight: '10%', paddingTop: '2%' }}>
                        <div className="col-span-3 text-left border-t-2" style={{ paddingTop: '10vh' }}>
                            <p className="text-2xl md:text-3xl lg:text-4xl text-white font-serif font-bold">Join the Quid army</p>
                            <br></br>
                            <p className="text-lg md:text-xl lg:text-2xl text-white/[0.7]">Become a holder, earn rewards for holding, and immediately qualify to join the Quidverse ranks.</p>
                        </div>
                        <div className="col-span-2 flex flex-col items-left lg:items-end lg:border-t-2" style={{ paddingTop: '10vh' }}>
                            <a href="https://www.quidswap.exchange/#/swap?outputCurrency=0x9d38f670d15c14716be1f109a4f453e966a2b6d4&use=V2">
                                <p className="relative text-lg lg:text-lg bg-[#412655dc] hover:bg-white text-white hover:text-black tracking-wide font-semibold pt-4 pb-4 px-8" style={{borderRadius: '20px', minWidth: '25vw' }}>
                                    <img alt="" className="absolute" src={uniswapImg} style={{ width: '30px', height: '30px', right: '25px' }}></img>
                                    <span>BUY ON UNISWAP</span>

                                </p>
                            </a>
                            <br></br>
                            <a href="https://quidity.io/quid-ika mt-4">
                                <p className="relative text-lg lg:text-lg bg-[#28804f] hover:bg-white text-white hover:text-black tracking-wide font-semibold pt-4 pb-4 px-8" style={{ borderRadius: '20px', minWidth: '25vw' }}>
                                    <img alt="" className="absolute" src={quidity} style={{ width: '25px', height: '25px', right: '27px' }}></img>
                                    <span>See live charts:</span>
                                </p>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="text-center flex justify-center items-center flex-col" style={{ marginTop: '15vh' }}>
                    <div className="w-3/4 lg:w-1/2">
                        <p className="text-3xl md:text-4xl lg:text-5xl text-white font-bold">Seamap</p>
                        <br></br>
                        <p className="text-lg md:text-xl tracking-wide text-white/[0.7]" style={{ lineHeight: '2' }}>24 hours after launch, we'll reveal what has already been done from this roadmap. Have you ever seen a token checking tasks off the roadmap before launch?</p>
                        <br></br>
                        <p className="text-lg md:text-xl tracking-wide text-white/[0.7]" style={{ lineHeight: '2' }}>Come back to find out.</p>
                    </div>
                    <br></br>
                </div>
                <div>
                    <div className="container mx-auto block lg:grid grid-flow-col grid-cols-3" style={{ paddingLeft: '10%', paddingRight: '10%' }}>
                        <div className="col-span-1" style={{ paddingTop: '5vh' }}>
                            <p className="text-2xl md:text-3xl lg:text-4xl text-[#c4d3ff] font-serif font-bold ml-4">Phase 1</p>
                            <br></br>
                            <p className="text-lg md:text-xl lg:text-xl text-white text-center m-4 pt-2 pb-2 bg-[#000a1e]" style={{ borderRadius: '10px', fontWeight: '100' }}>Token launch</p>
                            <p className="text-lg md:text-xl lg:text-xl text-white text-center m-4 pt-2 pb-2 bg-[#000a1e]" style={{ borderRadius: '10px' }}>Whitepaper</p>
                            <p className="text-lg md:text-xl lg:text-xl text-white text-center m-4 pt-2 pb-2 bg-[#000a1e]" style={{ borderRadius: '10px' }}>Quidity app launch</p>
                            <p className="text-lg md:text-xl lg:text-xl text-white text-center m-4 pt-2 pb-2 bg-[#000a1e]" style={{ borderRadius: '10px' }}>Grow Quidverse (community)</p>
                            <p className="text-lg md:text-xl lg:text-xl text-white text-center m-4 pt-2 pb-2 bg-[#000a1e]" style={{ borderRadius: '10px' }}>Aggressive marketing</p>
                            <p className="text-lg md:text-xl lg:text-xl text-white text-center m-4 pt-2 pb-2 bg-[#000a1e]" style={{ borderRadius: '10px' }}>100 listings on Quidity</p>
                            <p className="text-lg md:text-xl lg:text-xl text-white text-center m-4 pt-2 pb-2 bg-[#000a1e]" style={{ borderRadius: '10px' }}>8,888 holders</p>
                        </div>
                        <div className="col-span-1" style={{ paddingTop: '5vh' }}>
                            <p className="text-2xl md:text-3xl lg:text-4xl text-[#c4d3ff] font-serif font-bold ml-4">Phase 2</p>
                            <br></br>
                            <p className="text-lg md:text-xl lg:text-xl text-white text-center m-4 pt-2 pb-2 bg-[#000a1e]" style={{ borderRadius: '10px' }}>38,888 holders</p>
                            <p className="text-lg md:text-xl lg:text-xl text-white text-center m-4 pt-2 pb-2 bg-[#000a1e]" style={{ borderRadius: '10px' }}>Website + app redesign</p>
                            <p className="text-lg md:text-xl lg:text-xl text-white text-center m-4 pt-2 pb-2 bg-[#000a1e]" style={{ borderRadius: '10px' }}>50,000 Quidity users</p>
                            <p className="text-lg md:text-xl lg:text-xl text-white text-center m-4 pt-2 pb-2 bg-[#000a1e]" style={{ borderRadius: '10px' }}>8,888 NFT release</p>
                            <p className="text-lg md:text-xl lg:text-xl text-white text-center m-4 pt-2 pb-2 bg-[#000a1e]" style={{ borderRadius: '10px' }}>Candlestick charts on app</p>
                            <p className="text-lg md:text-xl lg:text-xl text-white text-center m-4 pt-2 pb-2 bg-[#000a1e]" style={{ borderRadius: '10px' }}>Exchange listings</p>
                            <p className="text-lg md:text-xl lg:text-xl text-white text-center m-4 pt-2 pb-2 bg-[#000a1e]" style={{ borderRadius: '10px' }}>$1,000,000 revenue</p>
                        </div>
                        <div className="col-span-1" style={{ paddingTop: '5vh' }}>
                            <p className="text-2xl md:text-3xl lg:text-4xl text-[#c4d3ff] font-serif font-bold ml-4">Phase 3</p>
                            <br></br>
                            <p className="text-lg md:text-xl lg:text-xl text-white text-center m-4 pt-2 pb-2 bg-[#000a1e]" style={{ borderRadius: '10px' }}>100,000 Quidity users</p>
                            <p className="text-lg md:text-xl lg:text-xl text-white text-center m-4 pt-2 pb-2 bg-[#000a1e]" style={{ borderRadius: '10px' }}>100,000 holders</p>
                            <p className="text-lg md:text-xl lg:text-xl text-white text-center m-4 pt-2 pb-2 bg-[#000a1e]" style={{ borderRadius: '10px' }}>$5,000,000 revenue</p>
                            <p className="text-lg md:text-xl lg:text-xl text-white text-center m-4 pt-2 pb-2 bg-[#000a1e]" style={{ borderRadius: '10px' }}>2nd NFT release</p>
                            <p className="text-lg md:text-xl lg:text-xl text-white text-center m-4 pt-2 pb-2 bg-[#000a1e]" style={{ borderRadius: '10px' }}>$8B marketcap</p>
                            <p className="text-lg md:text-xl lg:text-xl text-white text-center m-4 pt-2 pb-2 bg-[#000a1e]" style={{ borderRadius: '10px' }}>20% supply burned</p>
                        </div>
                    </div>
                </div>

                <div style={{ padding: '7%' }}>
                    <span className="text-3xl md:text-4xl lg:text-5xl text-white font-semibold">Details and FAQ</span>
                    <div className="block lg:grid grid-cols-2 grid-flow-col text-white border-t mt-24">
                        <div className="row-span-5 p-4 text-xl md:text-2xl font-semibold">
                            What sets Quid apart from thousands of other cryptos?
                        </div>
                        <div className="row-span-7 p-4 text-lg text-white/[.7]">
                            Quid Ika is the ONLY crypto project with a functioning utility before launch. Our community has risen from a dying ecosystem into a flourishing Ikasystem. The Quidity App is already generating revenue, so it’s not some potential idea of the future. The future is now.
                        </div>
                    </div>
                    <div className="block lg:grid grid-cols-2 grid-flow-col text-white border-t mt-12">
                        <div className="row-span-5 p-4 text-xl md:text-2xl font-semibold">
                            Is Quid just another meme token?
                        </div>
                        <div className="row-span-7 p-4 text-lg text-white/[.7]">
                            Definitely not! While Quid does have good “meme-abilty” with it, it is backed by the Quidity app that already has working utility.
                        </div>
                    </div>
                    <div className="block lg:grid grid-cols-2 grid-flow-col text-white border-t mt-12">
                        <div className="row-span-5 p-4 text-xl md:text-2xl font-semibold">
                            Are Quid gas fees lower than other tokens on Uniswap?
                        </div>
                        <div className="row-span-7 p-4 text-lg text-white/[.7]">
                            Proudly yes, we deployed a simple contract with no fancy gimmicks that provide nothing to the holders but headaches. Our contract is simple and provides for low gas. Wish we could get rid of gas all together, but providing a simple contract is the next best thing.
                        </div>
                    </div>
                    <div className="block lg:grid grid-cols-2 grid-flow-col text-white border-t mt-12">
                        <div className="row-span-5 p-4 text-xl md:text-2xl font-semibold">
                            Why do I have to pay gas fees?
                        </div>
                        <div className="row-span-7 p-4 text-lg text-white/[.7]">
                            Unfortunately, that’s just part of the process of purchasing any token on Uniswap (including $UNI). The only way around this is by purchasing through a CEX, but that is not something that will happen until later on. For now, everyone must purchase Quid through Uniswap and pay the required gas fee for the transaction.
                        </div>
                    </div>
                    <div className="block lg:grid grid-cols-2 grid-flow-col text-white border-t mt-12">
                        <div className="row-span-5 p-4 text-xl md:text-2xl font-semibold">
                            How does Quid generate revenue?
                        </div>
                        <div className="row-span-7 p-4 text-lg text-white/[.7]">
                            Glad you asked, we collect revenue from various avenues using our app. Token devs have to pay to get listed on the app, allowing their holders to benefit from the innovative features of the app. Devs also pay for ads on the app to gain exposure for their upcoming or existing tokens. Quid also has a Launchpad that helps launch new coins in the Ikasystem. Quid provides all necessary resources for a successful launch, including contract creation, logo creation, web dev, free marketing, discounted ads, and more. Quid charges a % of transaction fees, so the more that Quid can help these project succeed, the more revenue that will be generated for Quid and ultimately, Quid holders.
                        </div>
                    </div>
                    <div className="block lg:grid grid-cols-2 grid-flow-col text-white border-t mt-12">
                        <div className="row-span-5 p-4 text-xl md:text-2xl font-semibold">
                            What does Quid do with its revenue?
                        </div>
                        <div className="row-span-7 p-4 text-lg text-white/[.7]">
                            All revenue is strategically withheld for buybacks and burns, which will increase the monetary value of Quid and benefit all holders.
                        </div>
                    </div>
                    <div className="block lg:grid grid-cols-2 grid-flow-col text-white border-t mt-12">
                        <div className="row-span-5 p-4 text-xl md:text-2xl font-semibold">
                            Who runs Quid?
                        </div>
                        <div className="row-span-7 p-4 text-lg text-white/[.7]">
                            Quid is community-owned and truly decentralized allowing the community to govern through a system called Quidverse.
                        </div>
                    </div>
                    <div className="block lg:grid grid-cols-2 grid-flow-col text-white border-t mt-12">
                        <div className="row-span-5 p-4 text-xl md:text-2xl font-semibold">
                            How did Quid come into existence?
                        </div>
                        <div className="row-span-7 p-4 text-lg text-white/[.7]">
                            Quid was founded by experienced crypto enthusiasts, developers, and entrepreneurs. Inspired by the mighty squid who has risen up the chain with no competitors in sight. We wanted to create a coin that combined both utility and a meme factor to make things fun and keep users engaged. Quid was launched by the top holders of EPRO, who came to an agreement with the EPRO developer. The developer of EPRO was inactive, so the founders of Quid did a fair exchange; EPRO hands its community and liquidity, and QUID gives life to its holders. That goes without saying that Quid is not EPRO. It's a brand new token that saved EPRO. The developer of EPRO is not the developer of Quid and is not on the team.
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>);
}

export default Quidika;