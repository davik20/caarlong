import store from "./store/store";
import { parse, stringify, toJSON, fromJSON } from "flatted";

import {
  ChainId as ChainIdUniswap,
  WETH as WETHUniswap,
  Fetcher as FetcherUniswap,
  Route as RouteUniswap,
  Trade as TradeUniswap,
  TokenAmount as TokenAmountUniswap,
  TradeType as TradeTypeUniswap,
  Currency as CurrencyUniswap,
  Token as TokenUniswap,
  Percent as PercentUniswap,
} from "@uniswap/sdk";
import {
  ChainId as ChainIdPancake,
  WETH as WETHPancake,
  Fetcher as FetcherPancake,
  Route as RoutePancake,
  Trade as TradePancake,
  TokenAmount as TokenAmountPancake,
  TradeType as TradeTypePancake,
  Currency as CurrencyPancake,
  Token as TokenPancake,
  Percent as PercentPancake,
} from "@pancakeswap/sdk";

export const ROUTER_ADDRESS = "0x7a250d5630b4cf539739df2c5dacb4c659f2488d";

export const ROUTER_ADDRESS_BSC = "0x10ED43C718714eb63d5aA57B78B54704E256024E";

export const addImportedToken = (token, chainId) => {
  // if (localStorage.getItem(chainId)) {
  //   let importedTokens = localStorage.getItem(chainId);
  //   if (importedTokens) {
  //     importedTokens = JSON.parse(importedTokens);
  //     importedTokens.push(token);
  //     localStorage.setItem(chainId, stringify(importedTokens));
  //     console.log("adding imported Tokens");
  //   }
  // } else {
  //   let importedTokens = [];
  //   importedTokens.push(token);
  //   localStorage.setItem(chainId, stringify(importedTokens));
  // }
};

export const getSDK = (chainId) => {
  if (chainId == "56") {
    return {
      ChainId: ChainIdPancake,
      WETH: WETHPancake,
      Fetcher: FetcherPancake,
      Route: RoutePancake,
      Trade: TradePancake,
      TokenAmount: TokenAmountPancake,
      TradeType: TradeTypePancake,
      Currency: CurrencyPancake,
      Token: TokenPancake,
      Percent: PercentPancake,
    };
  } else {
    return {
      ChainId: ChainIdUniswap,
      WETH: WETHUniswap,
      Fetcher: FetcherUniswap,
      Route: RouteUniswap,
      Trade: TradeUniswap,
      TokenAmount: TokenAmountUniswap,
      TradeType: TradeTypeUniswap,
      Currency: CurrencyUniswap,
      Token: TokenUniswap,
      Percent: PercentUniswap,
    };
  }
};

export const getImportedTokens = (chainId) => {
  if (!localStorage.getItem(chainId)) {
    return [];
  } else {
    return parse(localStorage.getItem(chainId));
  }
};

export const TOKENS = () => {
  const chainId = store.getState().swap.chainId;
  if (chainId == "56") {
    const TOKENS = [
      // {
      //   name: "Tipinu",
      //   symbol: "Tipinu",
      //   decimals: 18,
      //   img: "https://raw.githubusercontent.com/uniswap/assets/master/blockchains/ethereum/assets/0xd6327ce1fb9D6020E8C2c0E124A1eC23DCAb7536/logo.png",
      //   address:
      //     chainId === 1
      //       ? "0xd6327ce1fb9d6020e8c2c0e124a1ec23dcab7536"
      //       : chainId === 4
      //       ? "0x5592ec0cfb4dbc12d3ab100b257153436a1f0fea"
      //       : chainId === 3
      //       ? "0xad6d458402f60fd3bd25163575031acdce07538d"
      //       : "",
      // },
      {
        name: "Tether Usd ",
        symbol: "USDT",
        decimals: 6,
        address:
          chainId == "56" ? "0x55d398326f99059fF775485246999027B3197955" : "",
        img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAY1BMVEUmoXv///8AmnAfoHkRnXWl0sKAwqsAmW4rpH+42s0zpYEJnHPn8+/e7+nH49lxu6L4/PuMx7KVy7iw18nA39TX6+Rds5bx+PZpuJ1Fq4p9wKmj0sE9qYfz+fdOro7F4tiRyLQQyxNjAAALvUlEQVR4nOWda7eiIBSGESg1vKSWZZmn//8rB7R7pmwEoeb9MGudNWcmn7juDb4becZ1ipNicT6kZVOvggAFwapuyvRwXhRJfDL/8cjkfx5tjmlFMGaMUkIIuov/RCljGJMqzTeRyYcwRRhtsoajvYC9S6By0CYLTWGaIIyKFAm4QbQXUI6J0sIEpXbCZBn4ILgHTOYHyz/dD6SVcB3u+ZBToruKD859uNb5UBoJNxxPrfFemxLvN/oeSxfhdkm14F0h2XKr6cn0EBYVntY5eyBxXWh5Ng2EUaand74xUpZpmFwnE8ap9ua7i+I0tky4LX0TzXcX8cuJA3ISYWyar2XE5aR2nEAY7Wfgaxn9/YTxqEy4XuJ5+DrGpfIuQJVwQc3NL32ibDEr4bY2sj4MibBabcpRIjzM2EEfGPFhJsI/Mm8HvYtShcgDTpj6lviEcGqcMLHWgJ0oScwSZtgqnxDODBLuKrsN2IlWO1OEyexLRL8Ig0w4AMLcfg+9iPi5CcI9sw32IFZqJ9zVLgzBu+hKdjBKEsaKCUJzIlQyppIjTJwZgg/CciujFGFhcxvzWb5UqkqGcOFiCwphmYhKgtCdVeJNWGLVGCc8uwvIEc/TCZ0GlEEcI3S4i3Ya7agjhEfXAcenm2HCwn1Ajji8aAwSJm6ug6/yB5f+IcL4G1pQCA9t4AYId27ttYdEB7bhA4S1a5vtzyK1CuH+e5qQN+IeTpi7FPCOi31cFj8Rfsk0etfHCfUD4e67WlCIfZhtPhBW3zPLXEUqCGH2TbPMVbQ/VdxL6GTSYlz9aY1ewu/rop2ILGH6jX1UiPadTPUQ/n1nHxXCPen+HsJvbUGhnn76Tnj4ZkL6fhD+RriF9FEyjwBPhN+uM7wRgiKKmQABj/QeZbwSLgDbNRq+93ojWgG+9Ld7Ny+Ea8ghqJOEhL3cnnohXEKmGScJEV0OEUagmMlNQoSfr/k9E+5B+zVHCclzvP9EGMPCXkcJkf+UensiLGFbblcJydMh/yMhaLF3mPB52X8kBDahu4RPjfhACByFDhM+jcQHwhQa+LpLSB4CxTthBA4L3SV8XBPvhPDsk8OED1mpOyE8Q+owIWLvhAU88HWa8HZseiNUyAG7THjPD18Joau964TIv676V0JQ2PQNhLcg6kqochLjNCGiz4Sb3yNkmydCWGD4FYTXMLEjXCulud0mRHj9QBgqHYg6TsjCB0KlTuo64aWbdoRqZ9pUoy+AAcLLzq0l/FMjJOVSQoeh1z9k/oPlMlAkTG6EKst9iyijwbuDrW/NeFpfTd2i3xIqfkeSnzNEqPz0UgquhLA8MFQWCf3oQlgYvTxjkbANoQQhOEEDkkXCNl0jCE1+iFVChDpCeAoKJJuEIiGFVLds0rJJKOILZPyKl01CkXLjhI3hT7FISJqW0PAFIaszDRaEhicay4QRJ1RKYABklZBPNcjLDd+BskpIc05odkfTc8HlidDsZ4tdDTJz4bkz72QYYzYcPbW/wuir+6e256g4oc7/uQXDvh+UaXZchMk22o24H61PUbxNiuP5sK+oL/xAqd4H8tBJy1TauZAGzSEPk+jZWHY9xPjyd7vtZpHtayaaVQ8nPqHJr2/xZsO4To+b+Pa4p2i7KfLsUDZ1QPBxgJDRYFWV6TLnDR7fXyeIkmLZUKAHaj9hjJIpiwWhrX3s9dR8tw3zQ7liYmhdjXXJ6ExDRN9uLXd90qTnRXL9qqIk3yN/mt0IS5By+MvpWLm4nPAIx+Ca9o4i0Gohejvvo6jMim3HGYXLAKu3JQvRQmk55Hh1vr3AZQ1rHYP7f1VpPWxBV+mxw4wKZWtUukBnlWM1XC2i7gtOydhombDit4Pg8kX+pUqjkp7RAfzPGMvagRfntYxj8MQ9DaekaZt6Xhc13EWNHBB0S0Pp8fpxct+phl2bsKRtv9Skgc78JEXAq15+d40jp9JdRs++lOKyHRcJgo0qUqIG9Puo/Sq3CDAkdO28r9ZJKawZG1QDfpus2qltCxoO+mKLix3dGbS+1QhyrnN5ZRrWTzRGT7g77AKdBa4Q4MyCdi4b0JvE+ggv9ytAWYkAQsgu7/fB5mydbXi56ATpd6BTp6sRXAhy19VHSJvrv4I8NYTxdmtzAzG41jaX3nwvQfe3QL30/hrqLvWlGfUQEry6nSWDXs0KQHMpYrcr4vJG7Dr2NNRv7ncGStBcvgKth3zVfQhnRS2EGfalfGNaHe9XfuMVbBTWsD0Nb8Xq8aZ/ktWjgThJw02yjaMo2u1Op/V6fTrtdvyneJtsiuEPI+22+7FyCdxju4HuS/mAaJ5eCj8leUn8z+FhF+uJlBqX71//aFNs7PPupMuNLJ+rz+zOYA9/vi+Fp0v5oF+8ODTskuOhYjoSZV2Qj0mZhfFLmirZK9Qo4LEFPD5sq4iUxbsNRbQN87RZ4TYnSAEvf5JretUn1T5b/L2yCTzFCiE8PlSJ8VEbmFb5BwvxXZyEi+ywb1ZtjrHrj4y22SnaJp26n7qMMR/Gtci2FZtt1J94jMKUqpav4TG+Wp7mAsnKPBkuu7Xe8Sllm/xtwrAoFlzHo/izCMPNn5h/dqfhlHFcpCIRpdz36UI913ahZCxIFwnIu1hO6zhsU1zTBjYLp+VLb5g+aQ7HvvGjomhbnPc1xvJ5hAHCZHrOuxPp8vq0SvPi79OAGpaoQHdclkE3J2t5qjbnrefc4iZyWf1Q3eyX52MR/g32YL7qh8c8S8sqoL7uYxkhfNJ79vSo6xLgD51bdCdrho7WUHf2ZNwwyeoZcHt+aPoM2C5h+vPn+Mf/4i7G79+n+f07Uf/Bvbbfv5v4+/dLf/+O8O/f8/4P7ur//vsWv//OzO+/96T87pqU7BE+vLum+P6h5OdYI3x4/1DxHVI5WST07oRq7wHLyRrh03vAJjdu1gif3uVWex9fTvYIH9/HN9lNbRE+eyqYTGXYInzxxTA4m9oifPE2MbjoWyJ886dR8RiS/Cg7hPjVY8hc6tsO4btPlIrXl5zsEPZ4fRmbaywR3j5iiueenKwQ9nrumUpIWSHs9U00la6xQdjvfQn3L5WTDcIP/qVgD1o5WSD85EFraNW3QPjRR9hMI85P+NkL2sxInJ9wwM/bSJg4O+GQJ7uRNXF2wkFffRNB1NyEw7URvLX+CuMzExI6XN8CVKNETjMTste6q9PqzMhoXsLxOjP6l/15CSVqBWmv9zQroUy9J+1+I7MSStXs0l13bU5CybprmmvnzUgoWztPcz+dkVC6/qHeGpbzEQJqWGrNSs1GCKlDqjU/PBchrJas3nrAwWdpbEJgPeDfr+n8H9Tl/g9qqxuIMszpPaKQItx9TyPSgTePBgg9TS99mReOByiGCL9lQv04jY4TesU3tCJ+zVtACL2F+4iDnn7jhF7uOiL+uBBKEnpntxHxeQxglNBtxHFACUKXO+poF5UjdHe6GZtkpAm9ws110R9eJiCEetMautSftFAk9GL9JzYTRejQVg1O6O1qt/bhdCVrVCFLyONFl0Ji9jkeVCf0cnfmG19ilVAg9JKJPiO6RKjcHAMn9HaVCz2VViCvGBChE1s43J/41UXoJcTunEoJpIeqEII9YPUK950u6Sb0/qw1IyVDdfj0EXreAe46rUEEvx9hmyL0tvXsCwdh9QfzNCOE4mr/vF2VDhYgMEGo4NE4QcRfKtuIKRN6XrQHue1O4dtH449jgJDHVOUMjASXknGSAUI+5ZhmJH6pNsHoIuTtmCp4bsqK4nRS+2khhFgKw0QoyyaMP42EXEUlU+kCJIorqUTTqPQQ8s6q6KDaL1HQYuLwu0kXodd5Q+uAJAzvNdbD1kjIdwGhMMCehEcZ24d6TEIv0koolGTKxYsI84OlQvQwLO2EnihelAbAelvC/BQ9OXdrkwlCIVEFqrVBHrnXdXF2bbLQBJ2QKcJWopJXRbryf8+oF3NTjEmV5htTcK2MEnYS7rmL8yEtm3oVBCgIVnVTpoezKCY3bCStRf8Afy2nsy6xGrcAAAAASUVORK5CYII",
      },
      {
        name: "BNB",
        symbol: "BNB",
        decimals: 18,
        address:
          chainId == "56" ? "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c" : "",
        img: "https://raw.githubusercontent.com/Uniswap/assets/master/blockchains/ethereum/assets/0xB8c77482e45F1F44dE1745F52C74426C631bDD52/logo.png",
      },

      {
        name: "USD Coin",
        symbol: "USDC",
        decimals: 6,
        address:
          chainId == "56" ? "0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d" : "",
        img: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png",
      },
    ];
    return TOKENS;
  } else {
    const TOKENS = [
      {
        name: "Tether Usd ",
        symbol: "USDT",
        decimals: 6,
        address:
          chainId === 1
            ? "0xdac17f958d2ee523a2206206994597c13d831ec7"
            : chainId === 4
            ? "0x3b00ef435fa4fcff5c209a37d1f3dcff37c705ad"
            : chainId === 3
            ? "0x516de3a7a567d81737e3a46ec4ff9cfd1fcb0136"
            : "0xdac17f958d2ee523a2206206994597c13d831ec7",
        img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAY1BMVEUmoXv///8AmnAfoHkRnXWl0sKAwqsAmW4rpH+42s0zpYEJnHPn8+/e7+nH49lxu6L4/PuMx7KVy7iw18nA39TX6+Rds5bx+PZpuJ1Fq4p9wKmj0sE9qYfz+fdOro7F4tiRyLQQyxNjAAALvUlEQVR4nOWda7eiIBSGESg1vKSWZZmn//8rB7R7pmwEoeb9MGudNWcmn7juDb4becZ1ipNicT6kZVOvggAFwapuyvRwXhRJfDL/8cjkfx5tjmlFMGaMUkIIuov/RCljGJMqzTeRyYcwRRhtsoajvYC9S6By0CYLTWGaIIyKFAm4QbQXUI6J0sIEpXbCZBn4ILgHTOYHyz/dD6SVcB3u+ZBToruKD859uNb5UBoJNxxPrfFemxLvN/oeSxfhdkm14F0h2XKr6cn0EBYVntY5eyBxXWh5Ng2EUaand74xUpZpmFwnE8ap9ua7i+I0tky4LX0TzXcX8cuJA3ISYWyar2XE5aR2nEAY7Wfgaxn9/YTxqEy4XuJ5+DrGpfIuQJVwQc3NL32ibDEr4bY2sj4MibBabcpRIjzM2EEfGPFhJsI/Mm8HvYtShcgDTpj6lviEcGqcMLHWgJ0oScwSZtgqnxDODBLuKrsN2IlWO1OEyexLRL8Ig0w4AMLcfg+9iPi5CcI9sw32IFZqJ9zVLgzBu+hKdjBKEsaKCUJzIlQyppIjTJwZgg/CciujFGFhcxvzWb5UqkqGcOFiCwphmYhKgtCdVeJNWGLVGCc8uwvIEc/TCZ0GlEEcI3S4i3Ya7agjhEfXAcenm2HCwn1Ajji8aAwSJm6ug6/yB5f+IcL4G1pQCA9t4AYId27ttYdEB7bhA4S1a5vtzyK1CuH+e5qQN+IeTpi7FPCOi31cFj8Rfsk0etfHCfUD4e67WlCIfZhtPhBW3zPLXEUqCGH2TbPMVbQ/VdxL6GTSYlz9aY1ewu/rop2ILGH6jX1UiPadTPUQ/n1nHxXCPen+HsJvbUGhnn76Tnj4ZkL6fhD+RriF9FEyjwBPhN+uM7wRgiKKmQABj/QeZbwSLgDbNRq+93ojWgG+9Ld7Ny+Ea8ghqJOEhL3cnnohXEKmGScJEV0OEUagmMlNQoSfr/k9E+5B+zVHCclzvP9EGMPCXkcJkf+UensiLGFbblcJydMh/yMhaLF3mPB52X8kBDahu4RPjfhACByFDhM+jcQHwhQa+LpLSB4CxTthBA4L3SV8XBPvhPDsk8OED1mpOyE8Q+owIWLvhAU88HWa8HZseiNUyAG7THjPD18Joau964TIv676V0JQ2PQNhLcg6kqochLjNCGiz4Sb3yNkmydCWGD4FYTXMLEjXCulud0mRHj9QBgqHYg6TsjCB0KlTuo64aWbdoRqZ9pUoy+AAcLLzq0l/FMjJOVSQoeh1z9k/oPlMlAkTG6EKst9iyijwbuDrW/NeFpfTd2i3xIqfkeSnzNEqPz0UgquhLA8MFQWCf3oQlgYvTxjkbANoQQhOEEDkkXCNl0jCE1+iFVChDpCeAoKJJuEIiGFVLds0rJJKOILZPyKl01CkXLjhI3hT7FISJqW0PAFIaszDRaEhicay4QRJ1RKYABklZBPNcjLDd+BskpIc05odkfTc8HlidDsZ4tdDTJz4bkz72QYYzYcPbW/wuir+6e256g4oc7/uQXDvh+UaXZchMk22o24H61PUbxNiuP5sK+oL/xAqd4H8tBJy1TauZAGzSEPk+jZWHY9xPjyd7vtZpHtayaaVQ8nPqHJr2/xZsO4To+b+Pa4p2i7KfLsUDZ1QPBxgJDRYFWV6TLnDR7fXyeIkmLZUKAHaj9hjJIpiwWhrX3s9dR8tw3zQ7liYmhdjXXJ6ExDRN9uLXd90qTnRXL9qqIk3yN/mt0IS5By+MvpWLm4nPAIx+Ca9o4i0Gohejvvo6jMim3HGYXLAKu3JQvRQmk55Hh1vr3AZQ1rHYP7f1VpPWxBV+mxw4wKZWtUukBnlWM1XC2i7gtOydhombDit4Pg8kX+pUqjkp7RAfzPGMvagRfntYxj8MQ9DaekaZt6Xhc13EWNHBB0S0Pp8fpxct+phl2bsKRtv9Skgc78JEXAq15+d40jp9JdRs++lOKyHRcJgo0qUqIG9Puo/Sq3CDAkdO28r9ZJKawZG1QDfpus2qltCxoO+mKLix3dGbS+1QhyrnN5ZRrWTzRGT7g77AKdBa4Q4MyCdi4b0JvE+ggv9ytAWYkAQsgu7/fB5mydbXi56ATpd6BTp6sRXAhy19VHSJvrv4I8NYTxdmtzAzG41jaX3nwvQfe3QL30/hrqLvWlGfUQEry6nSWDXs0KQHMpYrcr4vJG7Dr2NNRv7ncGStBcvgKth3zVfQhnRS2EGfalfGNaHe9XfuMVbBTWsD0Nb8Xq8aZ/ktWjgThJw02yjaMo2u1Op/V6fTrtdvyneJtsiuEPI+22+7FyCdxju4HuS/mAaJ5eCj8leUn8z+FhF+uJlBqX71//aFNs7PPupMuNLJ+rz+zOYA9/vi+Fp0v5oF+8ODTskuOhYjoSZV2Qj0mZhfFLmirZK9Qo4LEFPD5sq4iUxbsNRbQN87RZ4TYnSAEvf5JretUn1T5b/L2yCTzFCiE8PlSJ8VEbmFb5BwvxXZyEi+ywb1ZtjrHrj4y22SnaJp26n7qMMR/Gtci2FZtt1J94jMKUqpav4TG+Wp7mAsnKPBkuu7Xe8Sllm/xtwrAoFlzHo/izCMPNn5h/dqfhlHFcpCIRpdz36UI913ahZCxIFwnIu1hO6zhsU1zTBjYLp+VLb5g+aQ7HvvGjomhbnPc1xvJ5hAHCZHrOuxPp8vq0SvPi79OAGpaoQHdclkE3J2t5qjbnrefc4iZyWf1Q3eyX52MR/g32YL7qh8c8S8sqoL7uYxkhfNJ79vSo6xLgD51bdCdrho7WUHf2ZNwwyeoZcHt+aPoM2C5h+vPn+Mf/4i7G79+n+f07Uf/Bvbbfv5v4+/dLf/+O8O/f8/4P7ur//vsWv//OzO+/96T87pqU7BE+vLum+P6h5OdYI3x4/1DxHVI5WST07oRq7wHLyRrh03vAJjdu1gif3uVWex9fTvYIH9/HN9lNbRE+eyqYTGXYInzxxTA4m9oifPE2MbjoWyJ886dR8RiS/Cg7hPjVY8hc6tsO4btPlIrXl5zsEPZ4fRmbaywR3j5iiueenKwQ9nrumUpIWSHs9U00la6xQdjvfQn3L5WTDcIP/qVgD1o5WSD85EFraNW3QPjRR9hMI85P+NkL2sxInJ9wwM/bSJg4O+GQJ7uRNXF2wkFffRNB1NyEw7URvLX+CuMzExI6XN8CVKNETjMTste6q9PqzMhoXsLxOjP6l/15CSVqBWmv9zQroUy9J+1+I7MSStXs0l13bU5CybprmmvnzUgoWztPcz+dkVC6/qHeGpbzEQJqWGrNSs1GCKlDqjU/PBchrJas3nrAwWdpbEJgPeDfr+n8H9Tl/g9qqxuIMszpPaKQItx9TyPSgTePBgg9TS99mReOByiGCL9lQv04jY4TesU3tCJ+zVtACL2F+4iDnn7jhF7uOiL+uBBKEnpntxHxeQxglNBtxHFACUKXO+poF5UjdHe6GZtkpAm9ws110R9eJiCEetMautSftFAk9GL9JzYTRejQVg1O6O1qt/bhdCVrVCFLyONFl0Ji9jkeVCf0cnfmG19ilVAg9JKJPiO6RKjcHAMn9HaVCz2VViCvGBChE1s43J/41UXoJcTunEoJpIeqEII9YPUK950u6Sb0/qw1IyVDdfj0EXreAe46rUEEvx9hmyL0tvXsCwdh9QfzNCOE4mr/vF2VDhYgMEGo4NE4QcRfKtuIKRN6XrQHue1O4dtH449jgJDHVOUMjASXknGSAUI+5ZhmJH6pNsHoIuTtmCp4bsqK4nRS+2khhFgKw0QoyyaMP42EXEUlU+kCJIorqUTTqPQQ8s6q6KDaL1HQYuLwu0kXodd5Q+uAJAzvNdbD1kjIdwGhMMCehEcZ24d6TEIv0koolGTKxYsI84OlQvQwLO2EnihelAbAelvC/BQ9OXdrkwlCIVEFqrVBHrnXdXF2bbLQBJ2QKcJWopJXRbryf8+oF3NTjEmV5htTcK2MEnYS7rmL8yEtm3oVBCgIVnVTpoezKCY3bCStRf8Afy2nsy6xGrcAAAAASUVORK5CYII",
      },
      {
        name: "Ether",
        symbol: "ETH",
        decimals: 18,
        img: "data:image/png;base64,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",
        address:
          chainId === 1
            ? "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2"
            : chainId === 4
            ? "0xc778417e063141139fce010982780140aa0cd5ab"
            : chainId === 3
            ? "0xc778417e063141139fce010982780140aa0cd5ab"
            : "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
      },

      {
        name: "USD Coin",
        symbol: "USDC",
        decimals: 6,
        address:
          chainId === 1
            ? "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48"
            : chainId === 4
            ? "0xeb8f08a975ab53e34d8a0330e0d34de942c95926"
            : chainId === 3
            ? "0x07865c6E87B9F70255377e024ace6630C1Eaa37F"
            : "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
        img: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png",
      },
      // {
      //   name: 'Dai Stable coin',
      //   symbol: 'DAI',
      //   decimals: 18,
      //   address:
      //     chainId === 1
      //       ? '0x6b175474e89094c44da98b954eedeac495271d0f'
      //       : chainId === 4
      //       ? '0x5592ec0cfb4dbc12d3ab100b257153436a1f0fea'
      //       : chainId === 3
      //       ? '0xad6d458402f60fd3bd25163575031acdce07538d'
      //       : '0x6b175474e89094c44da98b954eedeac495271d0f',
      //   img: 'https://gemini.com/images/currencies/icons/default/dai.svg',
      // },
    ];
    return TOKENS;
  }
};

export const CA_ADDRESS = "0xd9D106F679F7B8A70b921586FAd189cfC9e67f38";
// export const CA_ADDRESS = "0xb2dD65933B487c2C68DDCe90c369A19f72482361";
