import React, { useEffect, useState } from 'react';
import '../App.css';
import 'react-multi-carousel/lib/styles.css';
// import protoTypes from "prop-types";

import logo from '../assets/images/scoop-3.png';
import logo1 from '../assets/images/Logo-p-500.png';

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";

// import { DAppProvider, useEthers } from "@usedapp/core";
import { useEthers } from "@usedapp/core";
import { getWeb3Auto, getWeb3, web3WalletConnectProvider } from "../util/web3";


// import ScrollToTop from "../scrollToTop";

// import { makeStyles, useTheme } from "@material-ui/core/styles";
import { makeStyles} from "@material-ui/core/styles";
// import useMediaQuery from "@material-ui/core/useMediaQuery";
// import Drawer from "@material-ui/core/Drawer";
// import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
// import List from "@material-ui/core/List";
// import Divider from "@material-ui/core/Divider";
// import ListItem from "@material-ui/core/ListItem";
// import ListItemIcon from "@material-ui/core/ListItemIcon";
import MenuIcon from "@material-ui/icons/Menu";
// import HomeIcon from '@material-ui/icons/Home';

// import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
// import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';

import styles from "../styles/style.module.css";
import Swal from 'sweetalert2';
import fetch from "node-fetch";
// import Quidika from '../components/Quidika';
// import coinImg from '../assets/images/coin.png';
// import coin2Img from '../assets/images/coin2.png';
// import { Tooltip } from '@mui/material';

import TagManager from "react-gtm-module";

import metaMaskImg from '../assets/images/MetaMask.png';
import walletConnectImg from '../assets/images/WalletConnect.png';

// import { transparent } from 'daisyui/src/colors';

const tagManagerArgs = {
  gtmId: "G-LJBGETVZ82",
}
function loginClick() {
  // window.location.href = "/home";
  window.location.href = "https://discord.com/api/oauth2/authorize?client_id=963279957646262332&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fhome%2F&response_type=token&scope=identify";
}

function ConnectBtn({ web3, setWeb3, setNowAccount }) {
  const { activateBrowserWallet, account: _ } = useEthers();
  const [account, setAccount] = useState(_);
  // const [loginState, setLoginState] = useState(true);

  const handleWallet = async (walletSource) => {
    try {
      if (walletSource === "wc") {
        if (web3WalletConnectProvider.connected) {
          await web3WalletConnectProvider.disconnect();
        }
        await web3WalletConnectProvider.enable();
      } else {
        activateBrowserWallet();
      }
    } catch (e) {
      web3WalletConnectProvider.close();
      Swal.fire({
        icon: 'info',
        text: "Unable to connect!"
      })
      // window.location.reload();
    }

    web3 = getWeb3(walletSource);

    setWeb3(web3);
  };

  useEffect(() => {
    (async () => {
      
      if (!web3) {
        Swal.fire({
          icon: 'info',
          text: "Please use desktop or DApp browser if you are not already."
        })
      } else if (!web3.currentProvider) {
        web3 = getWeb3();
      } else {
        web3.eth
          .getChainId()
          .then((e) => {
            // if (Number(e) !== 1) { /// Ethereum Mainnet
            //   Swal.fire({
            //     icon: 'info',
            //     text: "Please switch to Ethereum mainnet in your wallet"
            //   })
            // }
            if (Number(e) !== 137) { //// Polygon mainnet
              Swal.fire({
                icon: 'info',
                text: "Please switch to Polygon mainnet in your wallet"
              })
            }
          })
          .catch((err) => {
            console.log(err);
          });

        try {
          web3.currentProvider.on("chainChanged", (chainId) => {
            // if (Number(chainId) !== 1) {
            //   Swal.fire({
            //     icon: 'info',
            //     text: "Please switch to Ethereum mainnet in your wallet"
            //   })
            // } else {
            //   window.location.reload();
            // }
            if (Number(chainId) !== 137) {
              Swal.fire({
                icon: 'info',
                text: "Please switch to Polygon mainnet in your wallet"
              })
            } else {
              window.location.reload();
            }
          });

          web3.currentProvider.on("accountsChanged", (accounts) => {
            setAccount(accounts && accounts.length && accounts[0]);
            setNowAccount(accounts[0]);
          });

          web3.currentProvider.on("disconnect", (code, reason) => {
            setAccount(null);
            setNowAccount('0x00');
            web3WalletConnectProvider.close();
            window.location.reload();
          });
        } catch (e) { }

        const accounts = await web3.eth.getAccounts();
        setAccount(accounts && accounts.length && accounts[0]);
        setNowAccount(accounts[0]);
      }
    })();
  }, [web3]);

  return (
    
        <div className='block group ml-5'>
          <div
            className={`${styles.btnConnect} text-center font-bold bg-[#b561f280] hover:text-accent1 hover:bg-white transition duration-150 text-md md:text-md`}
          >
            {account ? `${account.slice(0, 6)}...${account.slice(-6)}` : "Connect Wallet"}
          </div>
          <div className="hidden hover:block group-hover:block absolute rounded-lg shadow-xl pt-2 z-50">
            <button
              className={`${styles.btnConnect} mb-2 flex items-center justify-around font-bold bg-[#b561f280] hover:text-accent1 hover:bg-accent2 transition duration-150 text-lg`}
              onClick={() => handleWallet(null)}
            >      
                <div><img src={metaMaskImg} alt="metamaskImage" className="h-8"/></div>
                <div>MetaMask</div>      
            </button>
            <button
              className={`${styles.btnConnect} flex items-center justify-around font-bold bg-[#b561f280] hover:text-accent1 hover:bg-accent2 transition duration-150 text-lg`}
              onClick={() => handleWallet("wc")}
            >
                <div><img src = { walletConnectImg } alt="walletConnectImage" className = "h-8"/></div>
                <div>WalletConnect</div>              
            </button>
          </div>
        </div>
  );
}

const drawerWidth = 74;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  // appBar: {
  //   zIndex: theme.zIndex.drawer + 1,
  //   backgroundColor: transparent
  //   // backgroundColor: '#0d011a'
  // },
  drawer: {
    flexShrink: 0,
    width: drawerWidth,
    backgroundColor: '#0d011a',
    color: 'white'
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: '#0d011a',
    color: 'white'
  },
  listItem: {
    marginBottom: '7px',
    '&:hover': {
      backgroundColor: '#000000',
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  },
  toolbar: {
    ...theme.mixins.toolbar,
    [theme.breakpoints.down("sm")]: {
      display: "none"
    }
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3)
  }
}));


const Header = () => {
  const [web3, setWeb3] = useState(getWeb3Auto());
  const [nowAccount, setNowAccount] = useState('0x00');
  const [loginState, setLoginState] = useState(false);
  const [username, setUsername] = useState("");
  useEffect(() => {
    setWeb3(getWeb3Auto());

    TagManager.initialize(tagManagerArgs);
    import('react-facebook-pixel')
      .then((x) => x.default)
      .then((ReactPixel) => {
        ReactPixel.init('475809127596826')
        ReactPixel.pageView()
      });

      let tokenType ="";
      let token="";
      if (window.location.href.indexOf("token_type") !== -1) { 
        const qstring =    (window.location.href.split('#')[1]).split('&');
      console.log(qstring);
      for (let i=0;i<qstring.length; i++) {
        if (qstring[i].indexOf("token_type") !== -1) {
          tokenType = qstring[i].split("=")[1];
        }
        if (qstring[i].indexOf("access_token") !== -1) {
          token = qstring[i].split("=")[1];
        }     

      }

      const headers = {
        authorization: `${tokenType} ${token}`
        };
      fetch('https://discord.com/api/users/@me', {
            headers,
        })
            .then(res => res.json())
            .then(user=> {
                console.log(user);
                setLoginState(true);
                setUsername(user.username);
            })

      } else {
        console.log("code is not");
      }

  }, []);

  const classes = useStyles();
  // const theme = useTheme();
  // const isMdUp = useMediaQuery(theme.breakpoints.up("md"));

  const [open, setOpen] = React.useState(false);

  const toggleDrawer = event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

      setOpen(!open);
    };
    return (   
            <div >
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
                <a href="/" className="flex">
                  <img src={logo} className="hidden md:block" alt="" style={{ width: '178px' }}></img>
                  <img src={logo1} className="block md:hidden" alt="" style={{ height: '40px' }}></img>
                </a>

                <div className="items-center flex absolute right-10 md:right-20  p-1 font-bold  text-accent md:rounded-lg hover:text-darker">
                  <div className= "flex flex-row items-center">
                    <div className=  {loginState === false?'block rounded-lg shadow-xl pt-2 z-50':'hidden'}>
                      <button
                        className="text-white p-2 flex items-center justify-content rounded-lg bg-[#7289da] hover:text-accent1 hover:bg-[#6476b4] transition duration-150 text-lg"          
                        onClick={loginClick}
                      >      
                          <div className='pr-2'><svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF" width="26px" height="26px"><title>Discord icon</title><path d="M20.222 0c1.406 0 2.54 1.137 2.607 2.475V24l-2.677-2.273-1.47-1.338-1.604-1.398.67 2.205H3.71c-1.402 0-2.54-1.065-2.54-2.476V2.48C1.17 1.142 2.31.003 3.715.003h16.5L20.222 0zm-6.118 5.683h-.03l-.202.2c2.073.6 3.076 1.537 3.076 1.537-1.336-.668-2.54-1.002-3.744-1.137-.87-.135-1.74-.064-2.475 0h-.2c-.47 0-1.47.2-2.81.735-.467.203-.735.336-.735.336s1.002-1.002 3.21-1.537l-.135-.135s-1.672-.064-3.477 1.27c0 0-1.805 3.144-1.805 7.02 0 0 1 1.74 3.743 1.806 0 0 .4-.533.805-1.002-1.54-.468-2.14-1.404-2.14-1.404s.134.066.335.2h.06c.03 0 .044.015.06.03v.006c.016.016.03.03.06.03.33.136.66.27.93.4.466.202 1.065.403 1.8.536.93.135 1.996.2 3.21 0 .6-.135 1.2-.267 1.8-.535.39-.2.87-.4 1.397-.737 0 0-.6.936-2.205 1.404.33.466.795 1 .795 1 2.744-.06 3.81-1.8 3.87-1.726 0-3.87-1.815-7.02-1.815-7.02-1.635-1.214-3.165-1.26-3.435-1.26l.056-.02zm.168 4.413c.703 0 1.27.6 1.27 1.335 0 .74-.57 1.34-1.27 1.34-.7 0-1.27-.6-1.27-1.334.002-.74.573-1.338 1.27-1.338zm-4.543 0c.7 0 1.266.6 1.266 1.335 0 .74-.57 1.34-1.27 1.34-.7 0-1.27-.6-1.27-1.334 0-.74.57-1.338 1.27-1.338z"></path></svg></div>
                          <div>Login with Discord</div>      
                      </button>
                    </div>
                    <div className= {loginState?'ml-5  flex items-center':'hidden'}>
                      <div>  
                        Hello, <strong className='text-red-600'>{username}</strong>
                      </div>
                      <ConnectBtn web3={web3} setWeb3={setWeb3} setNowAccount={setNowAccount} />
                    </div>
                  </div>
                </div>
              </Toolbar>
            </div>
    
       
    );
}
// Header.protoTypes = {
// //  loginState: protoTypes.boolean
// //  loginState: protoTypes.string
// };

export default Header;
