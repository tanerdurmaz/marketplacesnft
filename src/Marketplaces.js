
import React from 'react';
import './Marketplaces.css';
import Box from '@material-ui/core/Box';
import tick from './images/tick.svg';
import x from './images/x.svg';

import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'

class Marketplaces extends React.Component {
    render() {
        return (
            <div >
                <style>{`
            html {
                min-height: 100%;
                background: #FFA3B3;
            }
            a {
                color: black;
            }
            a:hover {
                    background:rgba(255,255,255,0.7);
                }
            h1 {
                font-size: 2.5em;
            }
            h2 {
                border-bottom: 3px solid #000;
            }
            code {
                font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,Courier,monospace;
                background:rgba(255,255,255,0.4);
                color: black;
                word-wrap: break-word;
            }
            ul li, ol li {
              line-height:140%; 
            }
            table {
                border-collapse: collapse;
                background:rgba(255,255,255,0.4);
            }
            th,
            td {
                border: 1px solid #000;
                padding: 0.75rem;
                text-align: left;
            }
            th {
                font-weight: bold;
                white-space: nowrap;
                background: #000;
                color: #fff;
            }
            tr:first-of-type th:not(:last-child) {
                border-right-color: transparent;
            }
            tr:first-child th:first-child,
            tr:not(:first-child):not(:last-child) th {
                border-bottom-color: transparent !important;
            }
    `}</style>
                <div className="container">
                    <Box color="black" bgcolor="#FFFAFA">
                        <Table>
                            <Thead>
                                <Tr>
                                    <Th>NAME</Th>
                                    <Th>NFTS</Th>
                                    <Th>BLOCKCHAIN</Th>
                                    <Th>CATEGORIES</Th>
                                    <Th>COMMISSION</Th>
                                    <Th>CREDIT CARD</Th>
                                    <Th>PAYPAL</Th>
                                    <Th>ACTIVE SINCE</Th>
                                </Tr>
                            </Thead>
                            <Tbody>

                                <Tr>
                                    <Td><b><a href="https://opensea.io/">OpenSea</a></b></Td>
                                    <Td>598</Td>
                                    <Td>MATIC, ETH, KLAY</Td>
                                    <Td>Utility, Collectibles, Trading Cards, Art, Domains, Virtual Worlds, Sports</Td>
                                    <Td>2.50%</Td>
                                    <Td><img src={x} className="icon" alt="x" /></Td>
                                    <Td><img src={x} className="icon" alt="x" /></Td>
                                    <Td>2018</Td>
                                </Tr>

                                <Tr>
                                    <Td><b><a href="https://telos.alcor.exchange/nft-market">Alcor Exchange</a></b></Td>
                                    <Td>214</Td>
                                    <Td>EOS, XPR, WAX, TLOS</Td>
                                    <Td>Art, Collectibles, Trading Cards, Sports, Virtual Worlds</Td>
                                    <Td>N/A</Td>
                                    <Td><img src={x} className="icon" alt="x" /></Td>
                                    <Td><img src={x} className="icon" alt="x" /></Td>
                                    <Td>2020</Td>
                                </Tr>
                                <Tr>
                                    <Td><b><a href="https://enjinx.io/eth/marketplace">Enjin Marketplace</a></b></Td>
                                    <Td>21</Td>
                                    <Td>ETH</Td>
                                    <Td>Trading Cards, Art, Virtual Worlds, Utility, Domains</Td>
                                    <Td>N/A</Td>
                                    <Td><img src={x} className="icon" alt="x" /></Td>
                                    <Td><img src={x} className="icon" alt="x" /></Td>
                                    <Td>2019</Td>
                                </Tr>
                                <Tr>
                                    <Td><b><a href="https://ghostmarket.io/assets/">GhostMarket</a></b></Td>
                                    <Td>11</Td>
                                    <Td>SOUL, NEO</Td>
                                    <Td>Sports, Art</Td>
                                    <Td>2%</Td>
                                    <Td><img src={x} className="icon" alt="x" /></Td>
                                    <Td><img src={x} className="icon" alt="x" /></Td>
                                    <Td>2020</Td>
                                </Tr>
                                <Tr>
                                    <Td><b><a href="https://nftshowroom.com/">NFT Showroom</a></b></Td>
                                    <Td>10</Td>
                                    <Td>HIVE</Td>
                                    <Td>Art</Td>
                                    <Td>10%</Td>
                                    <Td><img src={x} className="icon" alt="x" /></Td>
                                    <Td><img src={x} className="icon" alt="x" /></Td>
                                    <Td>2020</Td>
                                </Tr>
                                <Tr>
                                    <Td><b><a href="https://superrare.co/market">SuperRare</a></b></Td>
                                    <Td>10</Td>
                                    <Td>ETH</Td>
                                    <Td>Art</Td>
                                    <Td>15%</Td>
                                    <Td><img src={x} className="icon" alt="x" /></Td>
                                    <Td><img src={x} className="icon" alt="x" /></Td>
                                    <Td>2018</Td>
                                </Tr>
                                <Tr>
                                    <Td><b><a href="https://www.waxstash.com/markets">WaxStash Marketplace</a></b></Td>
                                    <Td>10</Td>
                                    <Td>WAX</Td>
                                    <Td>Trading Cards, Collectibles</Td>
                                    <Td>N/A</Td>
                                    <Td><img src={x} className="icon" alt="x" /></Td>
                                    <Td><img src={x} className="icon" alt="x" /></Td>
                                    <Td>2020</Td>
                                </Tr>
                                <Tr>
                                    <Td><b><a href="https://makersplace.com/">Makersplace</a></b></Td>
                                    <Td>10</Td>
                                    <Td>ETH</Td>
                                    <Td>Art</Td>
                                    <Td>15%</Td>
                                    <Td><img src={tick} className="icon" alt="tick" /></Td>
                                    <Td><img src={tick} className="icon" alt="tick" /></Td>
                                    <Td>2018</Td>
                                </Tr>
                                <Tr>
                                    <Td><b><a href="https://wax.atomichub.io/market">Atomic Hub Marketplace</a></b></Td>
                                    <Td>10</Td>
                                    <Td>WAX</Td>
                                    <Td>Trading Cards, Collectibles</Td>
                                    <Td>2%</Td>
                                    <Td><img src={x} className="icon" alt="x" /></Td>
                                    <Td><img src={x} className="icon" alt="x" /></Td>
                                    <Td>2020</Td>
                                </Tr>
                                <Tr>
                                    <Td><b><a href="https://niftygateway.com/marketplace">Nifty Gateway</a></b></Td>
                                    <Td>10</Td>
                                    <Td>ETH</Td>
                                    <Td>Art</Td>
                                    <Td>15%</Td>
                                    <Td><img src={tick} className="icon" alt="tick" /></Td>
                                    <Td><img src={x} className="icon" alt="x" /></Td>
                                    <Td>2018</Td>
                                </Tr>
                                <Tr>
                                    <Td><b><a href="https://zora.co/">Zora Marketplace</a></b></Td>
                                    <Td>10</Td>
                                    <Td>ETH</Td>
                                    <Td>Art</Td>
                                    <Td>N/A</Td>
                                    <Td><img src={x} className="icon" alt="x" /></Td>
                                    <Td><img src={x} className="icon" alt="x" /></Td>
                                    <Td>2020</Td>
                                </Tr>
                                <Tr>
                                    <Td><b><a href="https://treasureland.market/assets/">Treasureland</a></b></Td>
                                    <Td>10</Td>
                                    <Td>ETH, BNB</Td>
                                    <Td>Collectibles, Utility, Trading Cards</Td>
                                    <Td>N/A</Td>
                                    <Td><img src={x} className="icon" alt="x" /></Td>
                                    <Td><img src={x} className="icon" alt="x" /></Td>
                                    <Td>2020</Td>
                                </Tr>
                                <Tr>
                                    <Td><b><a href="https://rarible.com/">Rarible</a></b></Td>
                                    <Td>10</Td>
                                    <Td>ETH</Td>
                                    <Td>Collectibles, Trading Cards, Sports, Art</Td>
                                    <Td>2.50%</Td>
                                    <Td><img src={x} className="icon" alt="x" /></Td>
                                    <Td><img src={x} className="icon" alt="x" /></Td>
                                    <Td>2020</Td>
                                </Tr>
                                <Tr>
                                    <Td><b><a href="https://knownorigin.io/gallery">Known Origin</a></b></Td>
                                    <Td>10</Td>
                                    <Td>ETH</Td>
                                    <Td>Art</Td>
                                    <Td>15%</Td>
                                    <Td><img src={x} className="icon" alt="x" /></Td>
                                    <Td><img src={x} className="icon" alt="x" /></Td>
                                    <Td>2018</Td>
                                </Tr>
                                <Tr>
                                    <Td><b><a href="https://viv3.com/">Viv3 Marketplace</a></b></Td>
                                    <Td>10</Td>
                                    <Td>FLOW</Td>
                                    <Td>Trading Cards, Collectibles</Td>
                                    <Td>12.50%</Td>
                                    <Td><img src={x} className="icon" alt="x" /></Td>
                                    <Td><img src={x} className="icon" alt="x" /></Td>
                                    <Td>2021</Td>
                                </Tr>
                                <Tr>
                                    <Td><b><a href="https://foundation.app/">Foundation</a></b></Td>
                                    <Td>10</Td>
                                    <Td>ETH</Td>
                                    <Td>Art</Td>
                                    <Td>15%</Td>
                                    <Td><img src={x} className="icon" alt="x" /></Td>
                                    <Td><img src={x} className="icon" alt="x" /></Td>
                                    <Td>2020</Td>
                                </Tr>
                                <Tr>
                                    <Td><b><a href="https://crypto.com/nft/marketplace">Crypto.com NFT Platform</a></b></Td>
                                    <Td>9</Td>
                                    <Td>CRO</Td>
                                    <Td>Collectibles</Td>
                                    <Td>0%</Td>
                                    <Td><img src={tick} className="icon" alt="tick" /></Td>
                                    <Td><img src={x} className="icon" alt="x" /></Td>
                                    <Td>2021</Td>
                                </Tr>
                                <Tr>
                                    <Td><b><a href="https://venly.market/home">Venly Market</a></b></Td>
                                    <Td>5</Td>
                                    <Td>MATIC, BNB, SAND</Td>
                                    <Td>Trading Cards, Collectibles, Sports, Utility</Td>
                                    <Td>4%</Td>
                                    <Td><img src={tick} className="icon" alt="tick" /></Td>
                                    <Td><img src={x} className="icon" alt="x" /></Td>
                                    <Td>2021</Td>
                                </Tr>
                                <Tr>
                                    <Td><b><a href="https://market.decentraland.org/">Decentraland Marketplace</a></b></Td>
                                    <Td>5</Td>
                                    <Td>ETH</Td>
                                    <Td>Virtual Worlds, Domains, Utility</Td>
                                    <Td>2.50%</Td>
                                    <Td><img src={x} className="icon" alt="x" /></Td>
                                    <Td><img src={x} className="icon" alt="x" /></Td>
                                    <Td>2017</Td>
                                </Tr>
                                <Tr>
                                    <Td><b><a href="https://myth.market/">Myth Market</a></b></Td>
                                    <Td>5</Td>
                                    <Td>WAX</Td>
                                    <Td>Trading Cards, Collectibles</Td>
                                    <Td>N/A</Td>
                                    <Td><img src={x} className="icon" alt="x" /></Td>
                                    <Td><img src={x} className="icon" alt="x" /></Td>
                                    <Td>2020</Td>
                                </Tr>
                                <Tr>
                                    <Td><b><a href="https://sorare.com/market/">Sorare Marketplace</a></b></Td>
                                    <Td>1</Td>
                                    <Td>ETH</Td>
                                    <Td>Sports, Trading Cards</Td>
                                    <Td>0%</Td>
                                    <Td><img src={tick} className="icon" alt="tick" /></Td>
                                    <Td><img src={x} className="icon" alt="x" /></Td>
                                    <Td>2018</Td>
                                </Tr>
                                <Tr>
                                    <Td><b><a href="https://www.cryptokitties.co/">Cryptokitties Marketplace</a></b></Td>
                                    <Td>1</Td>
                                    <Td>ETH</Td>
                                    <Td>Collectibles</Td>
                                    <Td>3.75%</Td>
                                    <Td><img src={x} className="icon" alt="x" /></Td>
                                    <Td><img src={x} className="icon" alt="x" /></Td>
                                    <Td>2017</Td>
                                </Tr>
                                <Tr>
                                    <Td><b><a href="https://www.larvalabs.com/cryptopunks">CryptoPunks Marketplace</a></b></Td>
                                    <Td>1</Td>
                                    <Td>ETH</Td>
                                    <Td>Collectibles, Art</Td>
                                    <Td>N/A</Td>
                                    <Td><img src={x} className="icon" alt="x" /></Td>
                                    <Td><img src={x} className="icon" alt="x" /></Td>
                                    <Td>2017</Td>
                                </Tr>
                                <Tr>
                                    <Td><b><a href="https://ethermon.io/">Ethermon Marketplace</a></b></Td>
                                    <Td>1</Td>
                                    <Td>ETH</Td>
                                    <Td>Collectibles</Td>
                                    <Td>N/A</Td>
                                    <Td><img src={x} className="icon" alt="x" /></Td>
                                    <Td><img src={x} className="icon" alt="x" /></Td>
                                    <Td>2018</Td>
                                </Tr>
                                <Tr>
                                    <Td><b><a href="https://worldofether.com/">World of Ether Marketplace</a></b></Td>
                                    <Td>1</Td>
                                    <Td>ETH</Td>
                                    <Td>Trading Cards, Collectibles</Td>
                                    <Td>N/A</Td>
                                    <Td><img src={x} className="icon" alt="x" /></Td>
                                    <Td><img src={x} className="icon" alt="x" /></Td>
                                    <Td>2018</Td>
                                </Tr>
                                <Tr>
                                    <Td><b><a href="https://gu.cards/">Gods Unchained Marketplace</a></b></Td>
                                    <Td>1</Td>
                                    <Td>ETH</Td>
                                    <Td>Collectibles, Trading Cards</Td>
                                    <Td>0%</Td>
                                    <Td><img src={x} className="icon" alt="x" /></Td>
                                    <Td><img src={x} className="icon" alt="x" /></Td>
                                    <Td>2019</Td>
                                </Tr>
                                <Tr>
                                    <Td><b><a href="https://ethernity.io/marketplace">Ethernity Marketplace</a></b></Td>
                                    <Td>1</Td>
                                    <Td>ERN</Td>
                                    <Td>Tickets</Td>
                                    <Td>10%</Td>
                                    <Td><img src={x} className="icon" alt="x" /></Td>
                                    <Td><img src={x} className="icon" alt="x" /></Td>
                                    <Td>2021</Td>
                                </Tr>
                                <Tr>
                                    <Td><b><a href="https://nftone.net/?page=1">NFT ONE</a></b></Td>
                                    <Td>1</Td>
                                    <Td>TRX</Td>
                                    <Td>Art</Td>
                                    <Td>2%</Td>
                                    <Td><img src={x} className="icon" alt="x" /></Td>
                                    <Td><img src={x} className="icon" alt="x" /></Td>
                                    <Td>2021</Td>
                                </Tr>
                                <Tr>
                                    <Td><b><a href="https://nbatopshot.com/">NBA Top Shot Marketplace</a></b></Td>
                                    <Td>1</Td>
                                    <Td>ETH</Td>
                                    <Td>Trading Cards, Collectibles</Td>
                                    <Td>5%</Td>
                                    <Td><img src={tick} className="icon" alt="tick" /></Td>
                                    <Td><img src={x} className="icon" alt="x" /></Td>
                                    <Td>2019</Td>
                                </Tr>
                                <Tr>
                                    <Td><b><a href="https://terravirtua.io/">Terra Virtua Marketplace</a></b></Td>
                                    <Td>1</Td>
                                    <Td>ETH</Td>
                                    <Td>Collectibles</Td>
                                    <Td>6%</Td>
                                    <Td><img src={tick} className="icon" alt="tick" /></Td>
                                    <Td><img src={x} className="icon" alt="x" /></Td>
                                    <Td>2018</Td>
                                </Tr>
                                <Tr>
                                    <Td><b><a href="https://marketplace.axieinfinity.com/axie">Axie Infinity Marketplace</a></b></Td>
                                    <Td>1</Td>
                                    <Td>ETH</Td>
                                    <Td>Collectibles</Td>
                                    <Td>4.25%</Td>
                                    <Td><img src={x} className="icon" alt="x" /></Td>
                                    <Td><img src={x} className="icon" alt="x" /></Td>
                                    <Td>2018</Td>
                                </Tr>
                                <Tr>
                                    <Td><b><a href="https://nft.binance.com/">Binance NFT</a></b></Td>
                                    <Td>0</Td>
                                    <Td>BNB</Td>
                                    <Td></Td>
                                    <Td>N/A</Td>
                                    <Td><img src={x} className="icon" alt="x" /></Td>
                                    <Td><img src={x} className="icon" alt="x" /></Td>
                                    <Td>2021</Td>
                                </Tr>
                                <Tr>
                                    <Td><b><a href="https://refinable.com/">Refinable NFT Marketplace</a></b></Td>
                                    <Td>1</Td>
                                    <Td>BNB</Td>
                                    <Td>Collectibles</Td>
                                    <Td>2.5%</Td>
                                    <Td><img src={x} className="icon" alt="x" /></Td>
                                    <Td><img src={x} className="icon" alt="x" /></Td>
                                    <Td>2021</Td>
                                </Tr>
                            </Tbody>
                        </Table>
                    </Box>
                </div>
            </div>
        )
    }
}

export default Marketplaces;

