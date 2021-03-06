import React, { useEffect, useState } from "react";
import Swap from "./pages/Swap";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
// web3 imports
import getWeb3 from "./functions/getWeb3";
import { ROUTER_ADDRESS, ROUTER_ADDRESS_BSC } from "./Constants";

import RouterContractAbi from "./contracts/RouterAbi.json";
import { useAppDispatch } from "./hooks/storeHooks";

import {
  setChainId,
  setRouterContract,
  setWeb3,
  setWalletConnectProvider,
} from "./store/swap/swapSlice";
import { setCoinData } from "./store/coinData/coinSlice";
import Swap2 from "./pages/Swap2";

function App() {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loader = toast.loading("loading");
    const init = async () => {
      // set web3
      const result = await getWeb3();
      const [web3, walletConnectProvider, chainId] = result;

      let router;

      if (chainId == "56") {
        router = ROUTER_ADDRESS_BSC;
      } else {
        router = ROUTER_ADDRESS;
      }

      dispatch(setWeb3(web3));
      const RouterContract = new web3.eth.Contract(RouterContractAbi, router);
      // set Router contract
      dispatch(setRouterContract(RouterContract));
      // set walletConnectProvider
      if (walletConnectProvider !== undefined) {
        dispatch(setWalletConnectProvider(walletConnectProvider));
      }
      // set chain Id
      dispatch(setChainId(chainId));
      setLoading(false);
      toast.remove(loader);
    };

    init();
  }, []);

  useEffect(() => {
    // API REFERENCE
    //     fully_diluted_market_cap: 8155142.63
    // last_updated: "2021-08-11T12:03:07.000Z"
    // market_cap: 0
    // market_cap_dominance: 0
    // percent_change_1h: 0.16382065
    // percent_change_7d: -7.08041107
    // percent_change_24h: -3.5091964
    // percent_change_30d: -40.43048677
    // percent_change_60d: 23.95446106
    // percent_change_90d: 0
    // price: 0.00081551426296
    // setInterval(() => {
    //   console.log("fetching data");
    //   axios
    //     .get("https://prices-cuminu.herokuapp.com/api/coinData")
    //     .then(({ data }) => {
    //       const { max_supply: totalSupply } = data;
    //       const { USD } = data.quote;
    //       const {
    //         fully_diluted_market_cap: marketCap,
    //         percent_change_24h: dailyChange,
    //         price,
    //         volume_24h: dailyVolume,
    //         percent_change_1h: hourlyChange,
    //       } = USD;
    //       dispatch(
    //         setCoinData({
    //           marketCap,
    //           price,
    //           totalSupply,
    //           dailyChange,
    //           dailyVolume,
    //           hourlyChange,
    //         })
    //       );
    //     })
    //     .catch((err) => toast.error("Api limit Reached"));
    // }, 100000);
  }, []);

  return (
    <div>
      {" "}
      <Toaster
        position="top-right"
        toastOptions={{
          className: "",
          style: {
            border: "1px solid #713200",
            padding: "16px",
          },
        }}
      />
      {!loading && <Swap2 />}
    </div>
  );
}

export default App;
