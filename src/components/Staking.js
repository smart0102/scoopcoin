import React, { useEffect, useState } from "react"
import contractAbi from "../abis/contractABI.json"
import quidAbi from "../abis/QUID.json"
import stakingpoolAbi from "../abis/StakingPool.json"
import Footer from "./Footer.js";

import styles from "../styles/style.module.css"
import NFT_TKOs from "../assets/images/NFT_TKOs.gif";
import loading_img from "../assets/images/loader.gif";
import Swal from 'sweetalert2';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"

function Staking({ web3 }) {
    const [mintCount, setMintCount] = useState(0)
    const [mintedNFT, setMintedNFT] = useState([])
    const [selectedNFT, setSelectedNFT] = useState({})
    const [stakingCount, setStakingCount] = useState(0)
    const [rewardCount, setRewardCount] = useState(0)
    const [quidCount, setQuidCount] = useState(0)

    const [tkoContract, setTkoContract] = useState()
    const [quidContract, setQuidContract] = useState()
    const [stakingpoolContract, setStakingpoolContract] = useState()
    const [loading, setLoading] = useState(true)
    const [maddress, setMaddress] = useState(null)
    // const StakingPoolAddress = '0xe66B4698BFB12Ad16eBce7C3E1eF0FA9e38BA6D5';
    // const TKOAddress = '0x82994dff990b80EE01A90A9C2f5aFccc1f5E32F5';
    // const QuidAddress = '0x9d38F670D15C14716BE1F109a4F453E966A2B6D4';


    const StakingPoolAddress = '0xe66B4698BFB12Ad16eBce7C3E1eF0FA9e38BA6D5';
    const TKOAddress = '0x82994dff990b80EE01A90A9C2f5aFccc1f5E32F5';
    const QuidAddress = '0x9d38F670D15C14716BE1F109a4F453E966A2B6D4';

    useEffect(() => {
        (async () => {
            if (!web3) {
                Swal.fire({
                    icon: 'info',
                    text: "Please use desktop or DApp browser if you are not already."
                })
            } else if (!web3.currentProvider) {
                // web3 = getWeb3();
            } else {
                web3.eth
                    .getChainId()
                    .then((e) => {
                        if (Number(e) !== 1) {
                            Swal.fire({
                                icon: 'info',
                                text: "Please switch to Ethereum mainnet in your wallet"
                            })
                        }
                    })
                    .catch((err) => {
                        console.log(err);
                    });

                try {
                    web3.currentProvider.on("chainChanged", (chainId) => {
                        if (Number(chainId) !== 1) {
                            Swal.fire({
                                icon: 'info',
                                text: "Please switch to Ethereum mainnet in your wallet"
                            })
                        } else {
                            //   window.location.reload();
                        }
                        getEnvironment();
                    });

                    web3.currentProvider.on("accountsChanged", (accounts) => {
                        getEnvironment();
                    });

                    web3.currentProvider.on("disconnect", (code, reason) => {
                        getEnvironment();
                    });
                } catch (e) { }

                getEnvironment();
            }
        })();
    }, [web3]);

    const getEnvironment = async () => {
        try {
            const accounts = await web3.eth.getAccounts();
            setMaddress(accounts[0]);
            const contractAddress = TKOAddress
            const contract = new web3.eth.Contract(contractAbi, contractAddress)
            setTkoContract(contract);
            if (!!contract) {
                contract.methods.walletOfOwner(accounts[0]).call()
                    .then((res) => {
                        setMintCount(res.length)
                        setMintedNFT(res);
                        // console.log("ME", res);
                    })
                    .catch((err) => {
                        console.log(err)
                    })

                contract.events.CreateTentacleKnockout()
                    .on("data", (event) => {
                        setMintCount(Number(mintCount) + 1)
                    })
                    .on("error", (error) => {
                        console.log(error)
                    })
            }

            const contractAddress1 = QuidAddress
            const contract1 = new web3.eth.Contract(quidAbi, contractAddress1)
            setQuidContract(contract1);
            if (!!contract1) {
                contract1.methods.balanceOf(accounts[0]).call()
                    .then((res) => {
                        setQuidCount(web3.utils.fromWei(res, "shannon"))
                    })
                    .catch((err) => {
                        console.log(err)
                    })
                // contract1.events.CreateTentacleKnockout()
                //     .on("data", (event) => {
                //         setQuidCount(Number(mintCount) + 1)
                //     })
                //     .on("error", (error) => {
                //         console.log(error)
                //     })
            }

            const contractAddress2 = StakingPoolAddress
            const contract2 = new web3.eth.Contract(stakingpoolAbi, contractAddress2)
            setStakingpoolContract(contract2);
            if (!!contract2) {
                contract2.methods.stakedTokensOf(accounts[0]).call()
                    .then((res) => {
                        setStakingCount(res.length)
                    })
                    .catch((err) => {
                        console.log(err)
                    })

                // contract2.events.CreateTentacleKnockout()
                //     .on("data", (event) => {
                //         setStakingCount(Number(mintCount) + 1)
                //     })
                //     .on("error", (error) => {
                //         console.log(error)
                //     })
                contract2.methods.getClaimableToken(accounts[0]).call()
                    .then((res) => {
                        setRewardCount(web3.utils.fromWei(res, "shannon"))
                    })
                    .catch((err) => {
                        console.log(err)
                    })
            }
        } catch (err) {
            console.log(err);
        }
        setLoading(false);
    }
    const refreshValue = async () => {
        setLoading(true);
        tkoContract.methods.walletOfOwner(maddress).call()
            .then((res) => {
                setMintCount(res.length);
                setMintedNFT(res);
            })
            .catch((err) => {
                console.log(err)
            })
        quidContract.methods.balanceOf(maddress).call()
            .then((res) => {
                setQuidCount(web3.utils.fromWei(res, "shannon"))
            })
            .catch((err) => {
                console.log(err)
            })
        stakingpoolContract.methods.stakedTokensOf(maddress).call()
            .then((res) => {
                setStakingCount(res.length)
            })
            .catch((err) => {
                console.log(err)
            })
        setSelectedNFT({});
        setLoading(false);
    };
    const stakeTokens = async () => {
        if (loading === false) {
            setLoading(true);
            if (!!tkoContract && !!stakingpoolContract) {
                let item = [];
                for (let key in selectedNFT) {
                    if (selectedNFT[key] === true) {
                        item.push(key);
                    }
                }
                if (item.length >= 4) {
                    await tkoContract.methods.setApprovalForAll(StakingPoolAddress, true)
                        .send({ from: maddress })
                        .then(async () => {
                            console.log("sucess");
                            await stakingpoolContract.methods.startStakings(maddress, item)
                                .send({ from: maddress })
                                .on("data", (event) => {
                                    setStakingCount(Number(stakingCount) + item.length)
                                })
                                .on('error', (error) => {
                                    console.log(error)
                                })
                                .catch(() => {
                                    setLoading(false);
                                    console.log('reject');
                                    return;
                                })
                            refreshValue();
                        })
                        .catch(() => {
                            setLoading(false);
                            console.log('reject');
                        })
                    refreshValue();
                } else {
                    Swal.fire({
                        icon: 'info',
                        text: '4 or more NFTs required to stake'
                    })
                }
            }
            setLoading(false);
        } else {
            Swal.fire({
                icon: 'info',
                text: "The other transaction is running now"
            })
        }
    };

    const unStakeTokens = async () => {
        if (loading === false) {
            if (!!tkoContract && !!stakingpoolContract) {
                // await tkoContract.methods.setStakingPool(StakingPoolAddress).send({ from: maddress })
                //     .on('error', (error) => {
                //         console.log(error)
                //     })
                setLoading(true);
                // await stakingpoolContract.methods.setStartStakingTime('1643673600').send({ from: maddress });
                // await stakingpoolContract.methods.setEndStakingTime('1646092800').send({ from: maddress });
                await stakingpoolContract.methods.stakedTokensOf(maddress).call()
                    .then(async (res) => {
                        if (res.length > 0) {
                            for (let i = 0; i < res.length; i++) {
                                console.log(res.length);
                                await tkoContract.methods.stopStaking(res[i]).send({ from: maddress })
                                    .on('error', (error) => {
                                        console.log(error)
                                    })
                                    .then(() => {
                                        console.log('sucess');
                                    })
                                    .catch((err) => {
                                        console.log('reject');
                                        setLoading(false);
                                        i = res.length + 1;
                                        return;
                                    })
                            }
                            refreshValue();
                        } else {
                            Swal.fire({
                                icon: 'info',
                                text: 'There is no staking NFT'
                            })
                        }
                    })
                    .catch((err) => {
                        console.log('reject');
                        console.log(err)
                    })
                setLoading(false);
            }
        } else {
            Swal.fire({
                icon: 'info',
                text: "The other transaction is runing now"
            })
        }

    };
    const collectRewards = async () => {
        if (loading === false) {
            setLoading(true);

            if (!!stakingpoolContract) {
                await stakingpoolContract.methods.getClaimableToken(maddress).call()
                    .then(async (res) => {
                        console.log(res);
                        if (res !== 0) {
                            await stakingpoolContract.methods.getReward().send({ from: maddress })
                                .then(async (res) => {
                                    quidContract.methods.balanceOf(maddress).call()
                                        .then((res) => {
                                            setQuidCount(web3.utils.fromWei(res, "shannon"))
                                        })
                                        .catch((err) => {
                                            console.log(err)
                                            setLoading(false);
                                        })
                                })
                                .catch((err) => {
                                    console.log(err);
                                    setLoading(false);
                                })
                        } else {
                            Swal.fire({
                                icon: 'info',
                                text: 'There is no reward.'
                            })
                        }
                    })
                    .catch((err) => {
                        console.log(err);
                        setLoading(false);
                    })

            }
            setLoading(false);
        } else {
            Swal.fire({
                icon: 'info',
                text: "The other transaction is runing now"
            })
        }
    }
    const clickNFT = (e, i) => {
        if (i in selectedNFT) {
            setSelectedNFT({ ...selectedNFT, [i]: !selectedNFT[i] })
        } else {
            setSelectedNFT({ ...selectedNFT, [i]: true })
        }
    }
    const stakeBtnVar = mintCount > 3 ? '#b561f280' : '#817c71';
    const unStakeBtnVar = stakingCount > 0 ? '#b561f280' : '#817c71';
    return (
        <div className="mt-8 md:mt-4 lg:mt-0 ml-[0px] lg:ml-[]">
            <div className=" bg-[url('./assets/images/BG-3.png')] bg-opacity-50" style={{minheight:'100vh', padding:'5vw', paddingTop:'100px', backgroundSize: '100%'}}>
                <div className="block md:grid grid-cols-3 grid-flow-col text-lg md:text-xl lg:text-3xl">
                    <div className="col-span-1 text-white text-center" style={{marginBottom:'7%'}}>
                        <p className="border-b-2 pb-2">Staking Balance</p>
                        <p className="mt-3 text-white/[.8]">{stakingCount} TKO</p>
                    </div>
                    <div className="col-span-1 text-white text-center" style={{marginBottom:'7%'}}>
                        <p className="border-b-2 pb-2">Quid Token Balance</p>
                        <p className="mt-3 text-white/[.8]">{quidCount} QUID</p>
                    </div>
                    <div className="col-span-1 text-white text-center" style={{marginBottom:'7%'}}>
                        <p className="border-b-2 pb-2">Staking Reward</p>
                        <p className="mt-3 text-white/[.8]">{rewardCount} QUID</p>
                    </div>

                </div>
                <div style={{ height: '45px' }}>
                    <img src={loading_img} alt="loading" style={{ width: '50px' }}  className={loading ? 'flex justify-end' : 'hidden'}></img>
                </div>
                <p className="text-center" style={{ color: '#ffc122', fontSize: '2rem' }}>NFT: {mintCount}</p>

                <ResponsiveMasonry
                    columnsCountBreakPoints={{ 400: 1, 800: 2, 1200: 3, 1400: 4 }}
                >
                    <Masonry>
                        {mintedNFT.map(function (i) {
                            return (<div className="profile-card-4 text-center" style={{ border: selectedNFT[i] === true ? '10px solid green' : '10px solid white' }} onClick={(e) => clickNFT(e, i)} key={i}>
                                <img alt="" src={`https://ipfs.io/ipfs/QmRQAVW68qLYn1gVPuecXdTbgiDWhjkBsTgJmZaaFBVsbL/${i}.png`} style={{ width: "330px" }} className="img img-responsive" />
                                <div className="profile-content">
                                    <div className="profile-description">
                                        <p style={{ fontFamily: "cursive", fontWeight: "bold" }}>Tentacle Knockout#{i}</p>
                                        <p style={{ fontFamily: "cursive", fontSize: '18px' }}>0.25 ETH</p>
                                    </div>
                                </div>
                            </div>);
                        })}
                    </Masonry>
                </ResponsiveMasonry>
                <div id="content" className="mt-4" style={{ fontSize: "26px", paddingTop:'3%' }}>
                    <div className="flex flex-col items-center">
                        <button
                            className={`${styles.middleBtn} fs-1 fst-italic fw-bold w-full md:w-1/2 lg:w-1/3`}
                            onClick={() => stakeTokens()}
                            style={{ backgroundColor: stakeBtnVar }}
                            title="allows for bulk staking of 4 or more NFTs at once"
                        >
                            STAKE!
                        </button>
                        <button
                            className={`${styles.middleBtn} fs-1 fst-italic fw-bold w-full md:w-1/2 lg:w-1/3`}
                            onClick={() => collectRewards()}
                        >
                            COLLECT REWARDS
                        </button>
                        <button
                            className={`${styles.middleBtn} fs-1 fst-italic fw-bold w-full md:w-1/2 lg:w-1/3`}
                            style={{ backgroundColor: unStakeBtnVar }}
                            onClick={() => unStakeTokens()}
                        >
                            UNSTAKE
                        </button>
                    </div>
                </div>
                <div className="mt-8 text-white">
                    <div className="block lg:grid grid-cols-2 grid-flow-col">
                        <div className="col-span-1 ">
                            <p
                                className="mt-0 mb-0 fs-5 fst-italic"
                                style={{
                                    color: "#fe6810"
                                }}
                            >
                                TKO NFT Staking
                            </p>
                            <p className={styles.knockouts1}>INFORMATION</p>
                            <div className="text-[#d5d6d6]">
                                <p className="text-lg lg:text-xl p-2">- 4 or more NFTs required to stake at a time</p>
                                <p className="text-lg lg:text-xl p-2">- 333 quid/day/nft or until 26M pool runs out</p>
                                <p className="text-lg lg:text-xl p-2">- Starting March 1st, 2022 9 PM EST</p>
                                <p className="text-lg lg:text-xl p-2">- Ends May 31, 2022 9 PM EST</p>
                                <p className="text-lg lg:text-xl p-2">- Collect rewards daily or let them accumulate!</p>
                                <p className="text-lg lg:text-xl p-2">- No minimum lockup period - Unstake anytime!</p>
                            </div>
                        </div>
                        <div className="col-span-1 flex justify-end">
                            <img src={NFT_TKOs} className="p-3" style={{ borderRadius: '30px', height: '270px', width: '270px' }} alt="Developed by Miracle#5258" />
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Staking
