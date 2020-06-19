import React from 'react'

class Information extends React.Component {
    render() {
        const moveout = (event) => {
            if (event.target.id && event.target.id != "inform") {
                var it = document.getElementsByClassName("inform")
                for (var i = 0; i < it.length; i++) {
                    if (it[i].style.display == "block") {
                        it[i].style.display = "none"
                        return
                    }
                    it[i].style.display = "none"
                }
            }
        }
        document.addEventListener("click", moveout)
        return (
            <div>
                <div id="inb1" className="inform">
                    <h4><b>1843</b></h4>
                    <h1 id="inb1">Ada Lovelace's insight on Computers</h1>
                    <p>In his quest to find support for his Analytical Engine, Babbage had accepted
                    an invitation to address the Congress of Italian Scientists in Turin. Taking
                    notes was a young military engineer, Captain Luigi Menabrea, who would
                    later serve as prime minister of Italy. With Babbage’s help, Menabrea
                    published a detailed description of the machine, in French, in October 1842.
                    One of Ada’s friends suggested that she produce a translation of
                    Menabrea’s piece for Scientific Memoirs, a periodical devoted to scientific
                    papers. This was her opportunity to serve Babbage and show her talents.
                    When she finished, she informed Babbage, who was pleased but also
                    somewhat surprised. “I asked why she had not herself written an original
                    paper on a subject with which she was so intimately acquainted,” Babbage
                    said.34 She replied that the thought had not occurred to her. Back then,
                    women generally did not publish scientific papers.
                    Babbage suggested that she add some notes to Menabrea’s memoir, a
                    project that she embraced with enthusiasm. She began working on a section
                    she called “Notes by the Translator” that ended up totaling 19,136 words,
                    more than twice the length of Menabrea’s original article. Signed “A.A.L.,”
                    for Augusta Ada Lovelace, her “Notes” became more famous than the article
                    and were destined to make her an iconic figure in the history of computing.</p>
                </div>
                <div id="inc1" className="inform">
                    <h4><b>1847</b></h4>
                    <h1 id="inb1">George Boole creates a system using algebra for logical reasoning.</h1>
                    <p>Boole conceived of "elective symbols" of his kind as an algebraic structure. But this general concept was not available to him: he did not have the segregation standard in abstract algebra of postulated (axiomatic) properties of operations, and deduced properties.[40] His work was a beginning to the algebra of sets, again not a concept available to Boole as a familiar model. His pioneering efforts encountered specific difficulties, and the treatment of addition was an obvious difficulty in the early days.

                    Boole replaced the operation of multiplication by the word "and" and addition by the word "or". But in Boole's original system, + was a partial operation: in the language of set theory it would correspond only to disjoint union of subsets. Later authors changed the interpretation, commonly reading it as exclusive or, or in set theory terms symmetric difference; this step means that addition is always defined.[37][41]

In fact there is the other possibility, that + should be read as disjunction.[40] This other possibility extends from the disjoint union case, where exclusive or and non-exclusive or both give the same answer. Handling this ambiguity was an early problem of the theory, reflecting the modern use of both Boolean rings and Boolean algebras (which are simply different aspects of one type of structure). Boole and Jevons struggled over just this issue in 1863, in the form of the correct evaluation of x + x. Jevons argued for the result x, which is correct for + as disjunction. Boole kept the result as something undefined. He argued against the result 0, which is correct for exclusive or, because he saw the equation x + x = 0 as implying x = 0, a false analogy with ordinary algebra.</p>
                </div>
                <div id="ind1" className="inform">
                    <h4><b>1890</b></h4>
                    <h1 id="inb1">The census is tabulated with Herman Hollerith’s punch-card machines.</h1>
                    <p>Perfecting the use of punch cards
                    for computers came about because Herman Hollerith, an employee of the
                    U.S. Census Bureau, was appalled that it took close to eight years to
                    manually tabulate the 1880 census. He resolved to automate the 1890 count.
                    Drawing on the way that railway conductors punched holes in various
                    places on a ticket in order to indicate the traits of each passenger (gender,
                    approximate height, age, hair color), Hollerith devised punch cards with
                    twelve rows and twenty-four columns that recorded the salient facts about
                    each person in the census. The cards were then slipped between a grid of
                    mercury cups and a set of spring-loaded pins, which created an electric
                    circuit wherever there was a hole. The machine could tabulate not only the
                    raw totals but also combinations of traits, such as the number of married
                    males or foreign-born females. Using Hollerith’s tabulators, the 1890 census
                    was completed in one year rather than eight. It was the first major use of
                    electrical circuits to process information, and the company that Hollerith
                    founded became in 1924, after a series of mergers and acquisitions, the
International Business Machines Corporation, or IBM.</p>
                </div>
                <div id="ine1" className="inform">
                    <h4><b>1931</b></h4>
                    <h1 id="inb1">Vannevar Bush devises the Differential Analyser, an analog electromechanical computer.</h1>
                    <p>That challenge of linking together multiple integrators was not mastered
                    until 1931, when an MIT engineering professor, Vannevar (rhymes with
                    beaver) Bush—remember his name, for he is a key character in this book—
                    was able to build the world’s first analog electrical-mechanical computer. He
                    dubbed his machine a Differential Analyzer. It consisted of six wheel-anddisk integrators, not all that different from Lord Kelvin’s, that were
                    connected by an array of gears, pulleys, and shafts rotated by electric
                    motors. It helped that Bush was at MIT; there were a lot of people around
                    who could assemble and calibrate complex contraptions. The final machine,
                    which was the size of a small bedroom, could solve equations with as many
                    as eighteen independent variables. Over the next decade, versions of Bush’s
                    Differential Analyzer were replicated at the U.S. Army’s Aberdeen Proving
                    Ground in Maryland, the Moore School of Electrical Engineering at the
                    University of Pennsylvania, and Manchester and Cambridge universities in
                    England. They proved particularly useful in churning out artillery firing
                    tables—and in training and inspiring the next generation of computer
                    pioneers.
</p>
                </div>
                <div id="inf1" className="inform">
                    <h4><b>1935</b></h4>
                    <h1 id="inb1">Tommy Flowers pioneers the use of vaccum tubes as on-off switches in circuits.</h1>
                    <p>TIn the mid-1930s, the British engineer Tommy Flowers pioneered the
                    use of vacuum tubes as on-off switches in electronic circuits. Until then,
                    circuits had relied on mechanical and electromechanical switches, such as
                    the clacking electromagnetic relays that were used by phone companies.
                    Vacuum tubes had mainly been employed to amplify signals rather than as
                    on-off switches. By using electronic components such as vacuum tubes, and
                    later transistors and microchips, computers could operate thousands of times
                    faster than machines that had moving electromechanical switches.
</p>
                </div>
                <div id="ing1" className="inform">
                    <h4><b>1937</b></h4>
                    <h1 id="inb1">Alan Turing publishes "On Computable Numbers", describing a universal computer.</h1>
                    <p>Turing’s paper was published in 1937 with the not so snappy title “On
                    Computable Numbers, with an Application to the Entscheidungsproblem.”
                    His answer to Hilbert’s third question was useful for the development of
                    mathematical theory. But far more important was the by-product of Turing’s
                    proof: his concept of a Logical Computing Machine, which soon came to be
                    known as a Turing machine. “It is possible to invent a single machine which
                    can be used to compute any computable sequence,” he declared.10 Such a
                    machine would be able to read the instructions of any other machine and
                    carry out whatever task that machine could do. In essence, it embodied the
                    dream of Charles Babbage and Ada Lovelace for a completely generalpurpose universal machine.
</p>
                </div>
                <div id="inh1" className="inform">
                    <h4><b>1937</b></h4>
                    <h1 id="inb1">Claude Shannon describes how circuits of switches can perform tasks of Boolean algebra</h1>
                    <p>At Bell Labs, Shannon saw up close the wonderful power of the phone
                    system’s circuits, which used electrical switches to route calls and balance
                    loads. In his mind, he began connecting the workings of these circuits to
                    another subject he found fascinating, the system of logic formulated ninety
                    years earlier by the British mathematician George Boole. Boole
                    revolutionized logic by finding ways to express logical statements using
                    symbols and equations. He gave true propositions the value 1 and false
                    propositions a 0. A set of basic logical operations—such as and, or, not,
                    either/or, and if/then—could then be performed using these propositions,
                    just as if they were math equations.
                    Shannon figured out that electrical circuits could execute these logical
                    operations using an arrangement of on-off switches. To perform an and
                    function, for example, two switches could be put in sequence, so that both
                    had to be on for electricity to flow. To perform an or function, the switches
                    could be in parallel so that electricity would flow if either of them was on.
                    Slightly more versatile switches called logic gates could streamline the
                    process. In other words, you could design a circuit containing a lot of relays
                    and logic gates that could perform, step by step, a sequence of logical tasks.
</p>
                </div>
                <div id="ini1" className="inform">
                    <h4><b>1937</b></h4>
                    <h1 id="inb1">Bell Labs’ George Stibitz proposes a calculator using an electric circuit.
</h1>
                    <p>Working at Bell Labs at the same time was a mathematician named George
Stibitz, whose job was to figure out ways to handle the increasingly
complicated calculations needed by the telephone engineers. The only tools
he had were mechanical desktop adding machines, so he set out to invent
something better based on Shannon’s insight that electronic circuits could
perform mathematical and logical tasks. Late one evening in November, he
went to the stockroom and took home some old electromagnetic relays and
bulbs. At his kitchen table, he put the parts together with a tobacco tin and a
few switches to form a simple logical circuit that could add binary numbers.
A lit bulb represented a 1, and an unlit bulb represented a 0. His wife dubbed
it the “K-Model,” after the kitchen table. He took it into the office the next
day and tried to convince his colleagues that, with enough relays, he could
make a calculating machine.
One important mission of Bell Labs was to figure out ways to amplify a
phone signal over long distances while filtering out static. The engineers had
formulas that dealt with the amplitude and phase of the signal, and the
solutions to their equations sometimes involved complex numbers (ones that
include an imaginary unit that represents the square root of a negative
number). Stibitz was asked by his supervisor if his proposed machine could
handle complex numbers. When he said that it could, a team was assigned to
help him build it. The Complex Number Calculator, as it was called, was
completed in 1939. It had more than four hundred relays, each of which
could open and shut twenty times per second. That made it both blindingly
fast compared to mechanical calculators and painfully clunky compared to
the all-electronic vacuum-tube circuits just being invented. Stibitz’s
computer was not programmable, but it showed the potential of a circuit of
relays to do binary math, process information, and handle logical
procedures.
</p>
                </div>
                <div id="inj1" className="inform">
                    <h4><b>1937</b></h4>
                    <h1 id="inb1">Howard Aiken proposes construction of large digital computer and
discovers parts of Babbage’s Difference Engine at Harvard.
</h1>
                    <p>Harvard doctoral student named Howard Aiken was
struggling to do tedious calculations for his physics thesis using an adding
machine. When he lobbied the university to build a more sophisticated
computer to do the work, his department head mentioned that in the attic of
Harvard’s science center were some brass wheels from a century-old device
that seemed to be similar to what he wanted. When Aiken explored the attic,
he found one of six demonstration models of Charles Babbage’s Difference
Engine, which Babbage’s son Henry had made and distributed. Aiken
became fascinated by Babbage and moved the set of brass wheels into his
office. “Sure enough, we had two of Babbage’s wheels,” he recalled. “Those
were the wheels that I had later mounted and put in the body of the
computer.”17
That fall, just when Stibitz was cooking up his kitchen-table
demonstration, Aiken wrote a twenty-two-page memo to his Harvard
superiors and executives at IBM making the case that they should fund a
modern version of Babbage’s digital machine. “The desire to economize
time and mental effort in arithmetical computations, and to eliminate human
liability to error is probably as old as the science of arithmetic itself,” his
memo began.
</p>
                </div>
            </div>
        )
    }
}

export default Information