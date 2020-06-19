import React from 'react'
import Information from '../components/information'

class Timeline extends React.Component {
    render() {

        const handleclick = (event) => {
            if(event.target.id){
                document.getElementById(event.target.id+1).style.display = "block" 
                var elem = document.getElementById(event.target.parentElement.parentElement.id);
                var background = window.getComputedStyle(elem, null).getPropertyValue("border-right-color")
                document.getElementById(event.target.id+1).style.boxShadow = "0px 0px 500px " + background; 

                document.getElementById(event.target.id+1).style.backgroundImage = "  linear-gradient(to bottom, " + background + " , rgba(0, 0, 0, 0.73)),url('../img/minimal5.jpg')"
            }
        }
        return (
                <div className="timeline" id="timeline">
                    <Information/>
                    <div className="time" id="a">
                        <div className="time" id="b"><div className="info"><p id="inb" onClick={handleclick}>Ada, Countess of Lovelace, publishes "Notes" on Babbage's Analytical Engine.<span><h3>1843</h3></span></p></div>
                            <div className="time" id="c"><div className="info"><p id="inc" onClick={handleclick}>George Boole creates a system using algebra for logical reasoning.<span><h3>1847</h3></span></p></div>
                                <div className="time" id="d"><div className="info"><p id="ind" onClick={handleclick}>The census is tabulated with Herman Hollerith’s punch-card machines.<span><h3>1890</h3></span></p></div>
                                    <div className="time" id="e"><div className="info"><p  id="ine" onClick={handleclick}>Vannevar Bush devises the Differential Analyser, an analog electromechanical computer<span><h3>1931</h3></span></p></div>
                                        <div className="time" id="f"><div className="info"><p  id="inf" onClick={handleclick}>Tommy Flowers pioneers the use of vaccum tubes as on-off switches in circuits.<span><h3>1935</h3></span></p></div>
                                            <div className="time" id="g"><div className="info"><p  id="ing" onClick={handleclick}>Alan Turing publishes "On Computable Numbers", describing a universal computer.<span><h3>1937</h3></span></p></div>
                                                <div className="time" id="h"><div className="info"><p  id="inh" onClick={handleclick}>Claude Shannon describes how circuits of switches can perform tasks of Boolean algebra.<span><h3>1937</h3></span></p></div>
                                                    <div className="time" id="i"><div className="info"><p  id="ini" onClick={handleclick}>Bell Labs' George Stibitz proposes a calculator using an electric circuit.<span><h3>1937</h3></span></p></div>
                                                        <div className="time" id="j"><div className="info"><p   id="inj" onClick={handleclick}>Howard Aiken proposes contruction of large digital computerand discovers parts of Babbage's Difference Engine at Harvard.<span><h3>1937</h3></span></p></div>
                                                            <div className="time" id="k"><div className="info"><p   id="ink" onClick={handleclick}>John Vincent Atanasoff puts together concepts for an electronic computer during a long December night's drive.<span><h3>1937</h3></span></p></div>
                                                                <div className="time" id="l"><div className="info"><p   id="inl" onClick={handleclick}>William Hewlett and David Packard form company in Palo Alto garage.<span><h3>1938</h3></span></p></div>
                                                                    <div className="time" id="m"><div className="info"><p   id="inm" onClick={handleclick}>Attanasoff finishes model of electronic computer with mechanical storage drums.<span><h3>1939</h3></span></p></div>
                                                                        <div className="time" id="n"><div className="info"><p   id="inn" onClick={handleclick}>Turing arrives at Bletchley Park to work on breaking German codes.<span><h3>1939</h3></span></p></div>
                                                                            <div className="time" id="o"><div className="info"><p   id="ino" onClick={handleclick}>Konrad Zuse completes Z3, a fully functional electromechanical programmable digital computer.<span><h3>1941</h3></span></p></div>
                                                                                <div className="time" id="p"><div className="info"><p   id="inp" onClick={handleclick}>Colossus, a vaccum-tube computer to break German codes, is completed at Bletchley Park.<span><h3>1943</h3></span></p></div>
                                                                                    <div className="time" id="q"><div className="info"><p   id="inq" onClick={handleclick}>Harvard Mark I goes into operation.<span><h3>1944</h3></span></p></div>
                                                                                        <div className="time" id="r"><div className="info"><p   id="inr" onClick={handleclick}>John von Neumann goes to Penn to work on ENIAC.<span><h3>1944</h3></span></p></div>
                                                                                            <div className="time" id="s"><div className="info"><p   id="ins" onClick={handleclick}>Von Neumann writes "First Draft of a Report on the EDVAC" describing a stored program computer<span><h3>1945</h3></span></p></div>
                                                                                                <div className="time" id="t"><div className="info"><p   id="int" onClick={handleclick}>Transistor invented at Bell Labs.<span><h3>1947</h3></span></p></div>
                                                                                                    <div className="time" id="u"><div className="info"><p   id="inu" onClick={handleclick}>Turing publishes article describing a test for artificial Intelligence.<span><h3>1950</h3></span></p></div>
                                                                                                        <div className="time" id="v"><div className="info"><p   id="inv" onClick={handleclick}>Grace Hopper develops first computer compiler<span><h3>1952</h3></span></p></div>
                                                                                                            <div className="time" id="w"><div className="info"><p   id="inw" onClick={handleclick}>Von Neumann completes modern computer at the Institute for Advanced Study.<span><h3>1952</h3></span></p></div>
                                                                                                                <div className="time" id="x"><div className="info"><p   id="inw" onClick={handleclick}>UNIVAC predicts Eisenhower election victoryy.<span><h3>1952</h3></span></p></div>
                                                                                                                    <div className="time" id="y"><div className="info"><p   id="inw" onClick={handleclick}>Turing commits suicide<span><h3>1954</h3></span></p></div>
                                                                                                                        <div className="time" id="z"><div className="info"><p   id="inw" onClick={handleclick}>First Artificial intelligence conference<span><h3>1956</h3></span></p></div>
                                                                                                                            <div className="time" id="aa"><div className="info"><p   id="inw" onClick={handleclick}>Russia Launches Sputnik<span><h3>1957</h3></span></p></div>
                                                                                                                                <div className="time" id="ab"><div className="info"><p   id="inw" onClick={handleclick}>Advanced Research Projects Agency (ARPA) announced<span><h3>1958</h3></span></p></div>
                                                                                                                                    <div className="time" id="ac"><div className="info"><p   id="inw" onClick={handleclick}>Jack Kilby demonstrates integrated circuit, or microchip<span><h3>1958</h3></span></p></div>
                                                                                                                                        <div className="time" id="ad"><div className="info"><p   id="inw" onClick={handleclick}>Noyce and Fairchild colleagues indeoendently invent microchip<span><h3>1959</h3></span></p></div>
                                                                                                                                            <div className="time" id="ae"><div className="info"><p   id="inw" onClick={handleclick}>Paul Baran at RAND devises packet switching.<span><h3>1960</h3></span></p></div>
                                                                                                                                                <div className="time" id="af"><div className="info"><p   id="inw" onClick={handleclick}>MIT hackers create Spacewar game.<span><h3>1962</h3></span></p></div>
                                                                                                                                                    <div className="time" id="ag"><div className="info"><p   id="inw" onClick={handleclick}>Licklider proposes an "Intergalacgtic Computer Network"<span><h3>1963</h3></span></p></div>
                                                                                                                                                        <div className="time" id="ah"><div className="info"><p   id="inw" onClick={handleclick}>Moore's Law predicts micrchips will double in power each each year or so.<span><h3>1965</h3></span></p></div>
                                                                                                                                                            <div className="time" id="ai"><div className="info"><p   id="inw" onClick={handleclick}>ARPANET design discussions in Ann Arbour and Gatlinburg<span><h3>1967</h3></span></p></div>
                                                                                                                                                                <div className="time" id="aj"><div className="info"><p   id="inw" onClick={handleclick}>Larry Roberts sends out request for bids to build the ARPANET'S IMPs<span><h3>1968</h3></span></p></div>
                                                                                                                                                                    <div className="time" id="ak"><div className="info"><p   id="inw" onClick={handleclick}>Noyce and Moore form Intel, hire Andy Grove.<span><h3>1968</h3></span></p></div>
                                                                                                                                                                        <div className="time" id="al"><div className="info"><p   id="inw" onClick={handleclick}>Brand publishes first Whole Earth Catalog.<span><h3>1968</h3></span></p></div>
                                                                                                                                                                            <div className="time" id="am"><div className="info"><p   id="inw" onClick={handleclick}>.First nodes of ARPANET installed.<span><h3>1969</h3></span></p></div>
                                                                                                                                                                                    <div className="time" id="ao"><div className="info"><p   id="inw" onClick={handleclick}>Ray Tomlinson invents email.<span><h3>1972</h3></span></p></div>
                                                                                                                                                                                        <div className="time" id="ap"><div className="info"><p   id="inw" onClick={handleclick}>Nolan Bushnell creates Pong at Atari with Al ALcorn.<span><h3>1972</h3></span></p></div>
                                                                                                                                                                                            <div className="time" id="aq"><div className="info"><p   id="inw" onClick={handleclick}>Alan Kay helps to create the Alto at Xerox PARC.<span><h3>1973</h3></span></p></div>
                                                                                                                                                                                                <div className="time" id="ar"><div className="info"><p   id="inw" onClick={handleclick}>Vint Cerf and Bob Kahn complete TCP/IP protocols for the Internet<span><h3>1973</h3></span></p></div>
                                                                                                                                                                                                    <div className="time" id="as"><div className="info"><p   id="inw" onClick={handleclick}>Paul Allen and Bill Gates write BASIC for Altair, form Microsoft.<span><h3>1975</h3></span></p></div>
                                                                                                                                                                                                        <div className="time" id="at"><div className="info"><p   id="inw" onClick={handleclick}>Steve Jobs and Steve Wozniak launch  the Apple I.<span><h3>1977</h3></span></p></div>
                                                                                                                                                                                                            <div className="time" id="au"><div className="info"><p   id="inw" onClick={handleclick}>Jobs visits Xerox PARC.<span><h3>1979</h3></span></p></div>
                                                                                                                                                                                                                <div className="time" id="av"><div className="info"><p id="inw" onClick={handleclick}>IBM commissions Microsoft to develop an operating system for PC.<span><h3>1980</h3></span></p></div>
                                                                                                                                                                                                                    <div className="time" id="aw"><div className="info"><p id="inw" onClick={handleclick}>Hayes modem marketed to home users.<span><h3>1981</h3></span></p></div>
                                                                                                                                                                                                                        <div className="time" id="ax"><div className="info"><p id="inw" onClick={handleclick}>Richard Stallman begins developing GNU, a free operating system.<span><h3>1983</h3></span></p></div>
                                                                                                                                                                                                                            <div className="time" id="ay"><div className="info"><p id="inw" onClick={handleclick}>Linus Torvalds releases first version of Linux kernel.<span><h3>1991</h3></span></p></div>
                                                                                                                                                                                                                                <div className="time" id="az"><div className="info"><p id="inw" onClick={handleclick}>Tim Berners-lee announces Worl Wide Web.<span><h3>1991</h3></span></p></div>
                                                                                                                                                                                                                                    <div className="time" id="ba"><div className="info"><p id="inw" onClick={handleclick}>Steve Case’s AOL offers direct access to the Internet.<span><h3>1993</h3></span></p></div>
                                                                                                                                                                                                                                        <div className="time" id="bb"><div className="info"><p id="inw" onClick={handleclick}>IBM's Deep Blue beats Garry Kasparov in chess.<span><h3>1997</h3></span></p></div>
                                                                                                                                                                                                                                            <div className="time" id="bc"><div className="info"><p id="inw" onClick={handleclick}>Larry Page and Sergey Brin launch Google.<span><h3>1998</h3></span></p></div>
                                                                                                                                                                                                                                                <div className="time" id="bd"><div className="info"><p id="inw" onClick={handleclick}>Ev Williams launches Blogger.<span><h3>1999</h3></span></p></div>
                                                                                                                                                                                                                                                    <div className="time" id="be"><div className="info"><p id="inw" onClick={handleclick}>IBM’s computer Watson wins Jeopard<span><h3>2011</h3></span></p></div>
                                                                                                                                                                                                                                                    </div>
                                                                                                                                                                                                                                                </div>
                                                                                                                                                                                                                                            </div>
                                                                                                                                                                                                                                        </div>
                                                                                                                                                                                                                                    </div>
                                                                                                                                                                                                                                </div>
                                                                                                                                                                                                                            </div>
                                                                                                                                                                                                                        </div>
                                                                                                                                                                                                                    </div>
                                                                                                                                                                                                                </div>
                                                                                                                                                                                                            </div>
                                                                                                                                                                                                        </div>
                                                                                                                                                                                                    </div>
                                                                                                                                                                                                </div>
                                                                                                                                                                                            </div>
                                                                                                                                                                                        </div>
                                                                                                                                                                                    </div>
                                                                                                                                                                                </div>
                                                                                                                                                                            </div>
                                                                                                                                                                        </div>
                                                                                                                                                                    </div></div>
                                                                                                                                                                </div>
                                                                                                                                                            </div>
                                                                                                                                                        </div>
                                                                                                                                                    </div>
                                                                                                                                                </div>
                                                                                                                                            </div>
                                                                                                                                        </div>
                                                                                                                                    </div>
                                                                                                                                </div>
                                                                                                                            </div>
                                                                                                                        </div>
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
        )
    }
}

export default Timeline;