import TheNav from './componets/TheNav.js';
import Footer from './componets/Footer.js';
import s5 from './s5.jpg';
import s52 from './s5_p2.jpg';
import s53 from './s5_p3.jpg';
import cng from './assets/CNG.png'
import ja from './assets/JA.png'
import gg from './assets/GG.png'
import sb from './assets/SB.png'
import jj from './assets/JJ.png'
// import ak from './assets/AK.png'
import pn from './assets/PN.png'
import cm from './assets/CM.png'

import bw from './assets/BW.png'
import mr from './assets/MR.png'
import js from './assets/JS.png'
import jp from './assets/JP.png'
import jr from './assets/JR.png'
import ph from './assets/PH.png'
import er from './assets/ER.png'
import oa from './assets/OA.png'
import rs from './assets/RS.png'
import tl from './assets/TL.jpg'
import jy from './assets/JY.jpg'

import er2 from './assets/ER2.jpg'
import gl from './assets/LG.jpeg'
import mw from './assets/MW.jpeg'
import ns from './assets/NS.png'
import rs2 from './assets/RS2.png'

import NewsPic from './News_1.jpg';
import './App.css';
import Scroller from './componets/Scroller.js';


function App() {
      return (
            <div className="App">

                  <div className='Landing1'>
                        <TheNav></TheNav>
                        <h1 className='BigText'>Open Platform for Ocean Biodiversity Regeneration</h1>
                        <h2 className='BigText2'>Science, Technology, and Financial Infrastructure <br /> to Restore Our Marine Environment</h2>
                  </div>




                  {/* <div className='Landing2'>

                        <h2 className='BigText3'>We are researchers, scientists, and developers working to improve the world by restoring the ocean</h2>

                  </div> */}

                  {/* <Scroller /> */}
                  {/* <div className='Landing3'>
                        <h2 className='BigText4'>New Atlantis uses <span style={{ color: "#4ec0fb" }}>advanced science, AI</span>, <span style={{ color: "#4ec0fb" }}>IoT</span>, <span style={{ color: "#4ec0fb" }}>NFTs</span> and <span style={{ color: "#4ec0fb" }}>crowdfunding</span> to protect and restore Marine Protected Areas.</h2>
                  </div> */}

{/* 

                  <div className='Landing4'>

                        <div style={{ width: "60%" }}>

                              <h2 className='BigText5'>Marine Protected Areas</h2>

                              <h2 className='BigText6'>MPAs are the most effective means of preserving
                                    marine biodiversity and mitigating the effects of
                                    climate change. MPAs also support communities,
                                    and provide food security worldwide.</h2>

                        </div>

                  </div> */}


















                  {/* <div id="L_8" className='Landing8'>
                        <div className='BigText10'>Our Initiatives Towards Ocean Conservation</div>
                        <div className='L8_block_container'>
                              <div className='L8_block_new' id="L8_Block_1">
                                    <div className='fadeBlack'></div>
                                    <a className='L8_text_anchor' >Science <br /> Initiatives</a>
                                    <p className='animate-text'>We're pioneering a new meta-genomics pipeline to baseline the productivity of the waters in sensitive Marine Protected Areas, and to measure change over time. <br /> <a className='visitOurGithub' href='https://github.com/newatlantisdao'>Visit our Github to learn more.</a>  </p>
                              </div>
                              <div className='L8_block_new' id="L8_Block_2">
                                    <div className='fadeBlack'></div>
                                    <a className='L8_text_anchor' href='#'>Biodiversity <br /> Initiatives</a>
                                    <p className='animate-text'>We're working with partners to create standards for a new biodiversity credit market for Marine Protected Areas to utilize This will fund critically needed protection and restoration efforts which will improve productivity, creating more credits, starting a virtuous cycle.</p>
                              </div>
                              <div className='L8_block_new' id="L8_Block_3">
                                    <div className='fadeBlack'></div>
                                    <a className='L8_text_anchor' href='#'>Blockchain <br /> Initiatives</a>
                                    <p className='animate-text'>Using the power of the blockchain, we're opening our data for scientific research and to help to provide liquidity for MPA's future biodiversity credits.</p>
                              </div>
                        </div>
                  </div> */}





                  <div className='Landing9'>
                        <div className='Team_All'>
                              <h4 className='teamHeading'>
                                    New Atlantis Core Team and Operating Advisor
                              </h4>
                              <div className='T_row'>
                                    <div className='Team_member_box'>
                                          <div className='T_name'>Gordon Gould</div>
                                          <img className='T_profile' src={gg}></img>
                                          <div className='T_title'>CoFounder & CoCEO</div>
                                          <div className='T_subtitle'>SmartyPants (acq)</div>
                                    </div>
                                    <div className='Team_member_box'>
                                          <div className='T_name'>Stanley Bishop</div>
                                          <img className='T_profile' src={sb}></img>
                                          <div className='T_title'>LabDAO core dev</div>
                                          <div className='T_subtitle'>DeepChem ML core dev</div>
                                    </div>
                                    <div className='Team_member_box'>
                                          <div className='T_name'>Courtney Nichols Gould</div>
                                          <img className='T_profile' src={cng}></img>
                                          <div className='T_title'>CoFounder & CoCEO</div>
                                          <div className='T_subtitle'>SmartyPants (acq)</div>
                                    </div>
                                    <div className='Team_member_box'>
                                          <div className='T_name'>Jayson Guttierez</div>
                                          <img className='T_profile' src={jy}></img>
                                          <div className='T_title'>Ecological Asset </div>
                                          <div className='T_subtitle'>& Biocomplexity PhD</div>
                                    </div>
                                    <div className='Team_member_box'>
                                          <div className='T_name'>JJ Ramberg</div>
                                          <img className='T_profile' src={jj}></img>
                                          <div className='T_title'>GoodPods, MSNBC</div>
                                          <div className='T_subtitle'>Host, Author</div>
                                    </div>
                                    <div className='Team_member_box'>
                                          <div className='T_name'>Ryan Scott</div>
                                          <img className='T_profile' src={rs}></img>
                                          <div className='T_title'>NetCreations (IPO),</div>
                                          <div className='T_subtitle'>Causecast (acq)</div>
                                    </div>
                                    <div className='Team_member_box'>
                                          <div className='T_name'>Tom Lynch</div>
                                          <img className='T_profile' src={tl}></img>
                                          <div className='T_title'>Data Engineering</div>
                                          <div className='T_subtitle'>LabDAO contributor</div>
                                    </div>
                                    <div className='Team_member_box'>
                                          <div className='T_name'>Justin Alanis</div>
                                          <img className='T_profile' src={ja}></img>
                                          <div className='T_title'>Story DAO, Seed Club</div>
                                          <div className='T_subtitle'>4x Founder (acq)</div>
                                    </div>
                              </div>
                              <h4 className='teamHeading'>
                                    Scientific and  Strategic Advisors
                              </h4>

                              <div className='T_row'>
                                    <div className='Team_member_box'>
                                          <div className='T_name'>Christina Mittermeier</div>
                                          <img className='T_profile' src={cm}></img>
                                          <div className='T_title'>SeaLegacy, SDG-14</div>
                                          <div className='T_subtitle'>Ambassador</div>
                                    </div>
                                    <div className='Team_member_box'>
                                          <div className='T_name'>Julie Pullen</div>
                                          <img className='T_profile' src={jp}></img>
                                          <div className='T_title'>Oceanography & Climate Science,</div>
                                          <div className='T_subtitle'>Columbia University</div>
                                    </div>
                                    <div className='Team_member_box'>
                                          <div className='T_name'>Paul Nicklen</div>
                                          <img className='T_profile' src={pn}></img>
                                          <div className='T_title'>SeaLegacy, National</div>
                                          <div className='T_subtitle'>Geographic</div>
                                    </div>
                                    <div className='Team_member_box'>
                                          <div className='T_name'>Paul Hawken</div>
                                          <img className='T_profile' src={ph}></img>
                                          <div className='T_title'>Author, Project Drawdown</div>
                                          <div className='T_subtitle'>Regeneration</div>
                                    </div>
                                    <div className='Team_member_box'>
                                          <div className='T_name'>Octavio Aburto</div>
                                          <img className='T_profile' src={oa}></img>
                                          <div className='T_title'>Professor of Biological Oceanography</div>
                                          <div className='T_subtitle'>Oceanography, Scripps</div>
                                    </div>
                                    <div className='Team_member_box'>
                                          <div className='T_name'>Martin Wainstein</div>
                                          <img className='T_profile' src={mw}></img>
                                          <div className='T_title'>Executive Director</div>
                                          <div className='T_subtitle'>Open Earth Foundation</div>
                                    </div>
                                    <div className='Team_member_box'>
                                          <div className='T_name'>Jess Sloss</div>
                                          <img className='T_profile' src={js}></img>
                                          <div className='T_title'>Lead Instigator</div>
                                          <div className='T_subtitle'>Seed Club</div>
                                    </div>
                                    <div className='Team_member_box'>
                                          <div className='T_name'>Greg Landua</div>
                                          <img className='T_profile' src={gl}></img>
                                          <div className='T_title'>CEO</div>
                                          <div className='T_subtitle'>Regen Network</div>
                                    </div>
                                    <div className='Team_member_box'>
                                          <div className='T_name'>Evan Rapoport</div>
                                          <img className='T_profile' src={er2}></img>
                                          <div className='T_title'>Google X</div>
                                          <div className='T_subtitle'>Google Brain</div>
                                    </div>
                                    <div className='Team_member_box'>
                                          <div className='T_name'>Maureen Raymo</div>
                                          <img className='T_profile' src={mr}></img>
                                          <div className='T_title'>Founding Dean</div>
                                          <div className='T_subtitle'>Columbia University School of Climate</div>
                                    </div>
                                    <div className='Team_member_box'>
                                          <div className='T_name'>Ricard Sabatini</div>
                                          <img className='T_profile' src={rs2}></img>
                                          <div className='T_title'>Chief Data Scientist</div>
                                          <div className='T_subtitle'>Orionis Biosciences</div>
                                    </div>
                                    <div className='Team_member_box'>
                                          <div className='T_name'>Neil Spackman</div>
                                          <img className='T_profile' src={ns}></img>
                                          <div className='T_title'>CEO</div>
                                          <div className='T_subtitle'>Regenerative Resources</div>
                                    </div>
                                    <div className='Team_member_box'>
                                          <div className='T_name'>Jeff Rosenthal</div>
                                          <img className='T_profile' src={jr}></img>
                                          <div className='T_title'>Founder</div>
                                          <div className='T_subtitle'>Summit</div>
                                    </div>
                                    {/* <div className='Team_member_box'>
                                          <div className='T_name'>Elizabeth Rogers</div>
                                          <img className='T_profile' src={er}></img>
                                          <div className='T_title'>Executive Producer</div>
                                          <div className='T_subtitle'>Film45</div>
                                    </div> */}
                                    <div className='Team_member_box'>
                                          <div className='T_name'>Brooke Wall</div>
                                          <img className='T_profile' src={bw}></img>
                                          <div className='T_title'>Founder</div>
                                          <div className='T_subtitle'>The Wall Group</div>
                                    </div>
                                    
                              </div>

                        </div>


                  </div>

                  {/* <div className='Landing92'>
                        <div id="Join_9" className='L9_inner'>
                              <div>
                                    <h1 className='joinHeading' >Join the New Atlantis Mission</h1>

                                    <div className='L9_div_2'><a className='L9_links_2' href='#'>Explore open positions, internships, and collaboration opportunities.</a></div>

                                    <div className='discordOuter' ><button className='L9_Btn'> <a className='discordButton' href="https://discord.com/invite/newatlantis">Join our discord</a> </button></div>

                              </div>
                        </div>
                  </div> */}



                  {/* <div className='Landing10'>
                        <div id="L_10" className='L10_inner'>
                              <h1 className='newsHeading' >Highlighted News</h1>
                              <div className='L10_inner_inner'>
                                    <div className='L10_block'>
                                          <div><img src={NewsPic} className="NewsPic" alt="NewsPic" /></div>
                                          <div className='L_10_text_1'><a className='L10_links' href='#'>New Atlantis Partners With The NEW To Bring Global Oceans Into The Digital Age</a></div>
                                          <div style={{ fontSize: "15px", fontWeight: "400", marginBottom: "30px", color: "black" }}>News-Jul 2022</div>
                                    </div>
                                    <div className='L10_block'>
                                          <div><img src={NewsPic} className="NewsPic" alt="NewsPic" /></div>
                                          <div style={{ fontSize: "27px", fontWeight: "600", marginBottom: "30px", width: "90%" }}><a className='L10_links' href='#'>New Atlantis Partners With The NEW To Bring Global Oceans Into The Digital Age</a></div>
                                          <div style={{ fontSize: "15px", fontWeight: "400", marginBottom: "30px", color: "black" }}>News-Jul 2022</div>
                                    </div>
                                    <div className='L10_block'>
                                          <div><img src={NewsPic} className="NewsPic" alt="NewsPic" /></div>
                                          <div style={{ fontSize: "27px", fontWeight: "600", marginBottom: "30px", width: "90%" }}><a className='L10_links' href='#'>New Atlantis Partners With The NEW To Bring Global Oceans Into The Digital Age</a></div>
                                          <div style={{ fontSize: "15px", fontWeight: "400", marginBottom: "30px", color: "black" }}>News-Jul 2022</div>
                                    </div>
                              </div>
                              <div style={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}><button className='L9_Btn'>See all publications</button></div>
                        </div>
                  </div> */}







{/* 



                  <Footer></Footer> */}
            </div>
      );
}

export default App;
