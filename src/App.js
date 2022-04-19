import React, { useEffect, useState } from 'react';
import './App.css';
import 'react-multi-carousel/lib/styles.css';
import Start from './components/Start';
import Home from './components/Home';


import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import { DAppProvider} from "@usedapp/core";
// import { getWeb3Auto, getWeb3, web3WalletConnectProvider } from "./util/web3";

// import Game from "./components/game/game";
// import Staking from "./components/Staking";

// import ScrollToTop from "./scrollToTop";

// import { makeStyles, useTheme } from "@material-ui/core/styles";
// import useMediaQuery from "@material-ui/core/useMediaQuery";
// import Drawer from "@material-ui/core/Drawer";
// import AppBar from "@material-ui/core/AppBar";
// import Toolbar from "@material-ui/core/Toolbar";
// import IconButton from "@material-ui/core/IconButton";
// import List from "@material-ui/core/List";
// import Divider from "@material-ui/core/Divider";
// import ListItem from "@material-ui/core/ListItem";
// import ListItemIcon from "@material-ui/core/ListItemIcon";
// import MenuIcon from "@material-ui/icons/Menu";
// import HomeIcon from '@material-ui/icons/Home';

// import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
// import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';

// import styles from "./styles/style.module.css";
// import Swal from 'sweetalert2';
import Quidika from './components/Quidika';
// import coinImg from './assets/images/coin.png';
// import coin2Img from './assets/images/coin2.png';
// import { Tooltip } from '@mui/material';

import TagManager from "react-gtm-module";
import Header from './wrappers/header.js';
import Footer from './wrappers/footer';

// import metaMaskImg from './assets/images/MetaMask.png';
// import {DiscordLoginButton} from "react-social-login-buttons";
// import { transparent } from 'daisyui/src/colors';
const tagManagerArgs = {
  gtmId: "G-LJBGETVZ82",
}

// function ConnectBtn({ web3, setWeb3, setNowAccount }) {
//   const { activateBrowserWallet, account: _ } = useEthers();
//   const [account, setAccount] = useState(_);
//   const [loginState, setLoginState] = useState(true);
//   function handleClick() {
//     alert("Hello!");
//   }
//   const handleWallet = async (walletSource) => {
//     try {
//       if (walletSource === "wc") {
//         if (web3WalletConnectProvider.connected) {
//           await web3WalletConnectProvider.disconnect();
//         }
//         await web3WalletConnectProvider.enable();
//       } else {
//         activateBrowserWallet();
//       }
//     } catch (e) {
//       web3WalletConnectProvider.close();
//       Swal.fire({
//         icon: 'info',
//         text: "Unable to connect!"
//       })
//       // window.location.reload();
//     }

//     web3 = getWeb3(walletSource);

//     setWeb3(web3);
//   };

//   useEffect(() => {
//     (async () => {
//       if (!web3) {
//         Swal.fire({
//           icon: 'info',
//           text: "Please use desktop or DApp browser if you are not already."
//         })
//       } else if (!web3.currentProvider) {
//         web3 = getWeb3();
//       } else {
//         web3.eth
//           .getChainId()
//           .then((e) => {
//             if (Number(e) !== 1) {
//               Swal.fire({
//                 icon: 'info',
//                 text: "Please switch to Ethereum mainnet in your wallet"
//               })
//             }
//           })
//           .catch((err) => {
//             console.log(err);
//           });

//         try {
//           web3.currentProvider.on("chainChanged", (chainId) => {
//             if (Number(chainId) !== 1) {
//               Swal.fire({
//                 icon: 'info',
//                 text: "Please switch to Ethereum mainnet in your wallet"
//               })
//             } else {
//               window.location.reload();
//             }
//           });

//           web3.currentProvider.on("accountsChanged", (accounts) => {
//             setAccount(accounts && accounts.length && accounts[0]);
//             setNowAccount(accounts[0]);
//           });

//           web3.currentProvider.on("disconnect", (code, reason) => {
//             setAccount(null);
//             setNowAccount('0x00');
//             web3WalletConnectProvider.close();
//             window.location.reload();
//           });
//         } catch (e) { }

//         const accounts = await web3.eth.getAccounts();
//         setAccount(accounts && accounts.length && accounts[0]);
//         setNowAccount(accounts[0]);
//       }
//     })();
//   }, [web3]);

//   return (
//     <div className={loginState? 'block absolute right-10 md:right-20 md:top-0  p-1 font-bold group text-accent md:rounded-lg hover:text-darker':'hidden'}>
//       <div className= "flex flex-row">
//         <div >
//           <DiscordLoginButton onClick={handleClick} />
//         </div>
//         <div>
//           Hi, Jason {loginState}
//         </div>
//         <div>
//           <div
//             className={`${styles.btnConnect} font-bold bg-[#b561f280] hover:text-accent1 hover:bg-white transition duration-150 text-md md:text-md`}
//           >
//             {account ? `${account.slice(0, 6)}...${account.slice(-6)}` : "Connect"}
//           </div>
//           <div className="hidden hover:block group-hover:block absolute rounded-lg shadow-xl pt-2 z-50">
//             <button
//               className={`${styles.btnConnect} font-bold bg-[#b561f280] hover:text-accent1 hover:bg-accent2 transition duration-150 text-lg`}
//               onClick={() => handleWallet(null)}
//             >
      
//                 <img src={metaMaskImg} style={{height:40}}/>
//                 <div>MetaMask</div>
      
//             </button>
//             <button
//               className={`${styles.btnConnect} font-bold bg-accent1 hover:text-accent1 hover:bg-accent2 transition duration-150 text-xl md:text-xl mt-1`}
//               onClick={() => handleWallet("wc")}
//             >
//               WalletConnect
//             </button>
//           </div>
//         </div>
//       </div>

//     </div>
//   );
// }

// const drawerWidth = 74;

// const useStyles = makeStyles(theme => ({
//   root: {
//     display: "flex"
//   },
//   appBar: {
//     zIndex: theme.zIndex.drawer + 1,
//     backgroundColor: transparent
//     // backgroundColor: '#0d011a'
//   },
//   drawer: {
//     flexShrink: 0,
//     width: drawerWidth,
//     backgroundColor: '#0d011a',
//     color: 'white'
//   },
//   drawerPaper: {
//     width: drawerWidth,
//     backgroundColor: '#0d011a',
//     color: 'white'
//   },
//   listItem: {
//     marginBottom: '7px',
//     '&:hover': {
//       backgroundColor: '#000000',
//     },
//   },
//   menuButton: {
//     marginRight: theme.spacing(2),
//     [theme.breakpoints.up("md")]: {
//       display: "none"
//     }
//   },
//   toolbar: {
//     ...theme.mixins.toolbar,
//     [theme.breakpoints.down("sm")]: {
//       display: "none"
//     }
//   },
//   content: {
//     flexGrow: 1,
//     backgroundColor: theme.palette.background.default,
//     padding: theme.spacing(3)
//   }
// }));

function App() {
  // const [web3, setWeb3] = useState(getWeb3Auto());
  // const [nowAccount, setNowAccount] = useState('0x00');

  useEffect(() => {
    // setWeb3(getWeb3Auto());

    TagManager.initialize(tagManagerArgs);
    import('react-facebook-pixel')
      .then((x) => x.default)
      .then((ReactPixel) => {
        ReactPixel.init('475809127596826')
        ReactPixel.pageView()
      });
  }, []);

  // const classes = useStyles();
  // const theme = useTheme();
  // const isMdUp = useMediaQuery(theme.breakpoints.up("md"));

  // const [open, setOpen] = React.useState(false);

  // const toggleDrawer = event => {
  //   if (
  //     event.type === "keydown" &&
  //     (event.key === "Tab" || event.key === "Shift")
  //   ) {
  //     return;
  //   }

  //     setOpen(!open);
  //   };
    
    return (
      <DAppProvider>
        <Router>
          {/* <ScrollToTop /> */}
          <div style={{ fontFamily: 'Circularstd, sans-serif' }}>
            {/* <Header/> */}
            {/* <AppBar className={classes.appBar}>
              <Toolbar>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="start"
                  onClick={toggleDrawer}
                  className={classes.menuButton}
                >
                  <MenuIcon />
                </IconButton>
                <a href="#" className="flex">
                  <img src={logo} className="hidden md:block" alt="" style={{ width: '178px' }}></img>
                  <img src={logo1} className="block md:hidden" alt="" style={{ height: '40px' }}></img>
                </a>
                <ConnectBtn web3={web3} setWeb3={setWeb3} setNowAccount={setNowAccount} />
              </Toolbar>
            </AppBar> */}    
            
            <Routes>
              <Route path='/' element={<Start />} />
              <Route path='/home' element={<Home />} />
              {/* {console.log(nowAccount)} */}
              {/* <Route path='/game' element={<Game nowAccount={nowAccount} />} /> */}
              {/* <Route path='/stake' element={<Staking web3={web3} />} /> */}
              <Route path='/quidika' element={<Quidika />} />
            </Routes>
            <Footer/>
          </div>
        </Router>
      </DAppProvider >
    );
}

export default App;
