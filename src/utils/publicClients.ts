import { createPublicClient, http } from 'viem';
import { arbitrum, base, degen, mainnet } from 'viem/chains';

export const mainnetPublicClient = createPublicClient({
  chain: mainnet,
  transport: http(),
});

export const basePublicClient = createPublicClient({
  chain: base,
  transport: http(
    'https://base-mainnet.g.alchemy.com/v2/u14hNDLOC4WItmevbcUWItEg6KThN5W0'
  ),
});

export const degenPublicClient = createPublicClient({
  chain: degen,
  transport: http(
    'https://degen-mainnet.g.alchemy.com/v2/u14hNDLOC4WItmevbcUWItEg6KThN5W0'
  ),
});

export const arbitrumPublicClient = createPublicClient({
  chain: arbitrum,
  transport: http(
    'https://arb-mainnet.g.alchemy.com/v2/vePHk-Vg-wjRw9LtykUKxDTxoUA2FHSh'
  ),
});
