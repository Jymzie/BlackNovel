
import React, { useLayoutEffect } from 'react';
import { Routes, Route, BrowserRouter as Router, useLocation } from 'react-router-dom';
import GlobalContext from './GlobalContext';
import Home from "./pages/Home";
import Read from "./pages/Read";
import NovelChar from "./pages/Novel&Char.js";
import List from "./pages/List";
import PDF1 from "./pdf/Test";
const Wrapper = ({ children }) => {
        const location = useLocation();
      
        useLayoutEffect(() => {
          // Scroll to the top of the page when the route changes
          window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
        }, [location.pathname]);
      
        return children;
      };

 function App() {
        // ANCHOR COMA
 const novels = [{ id: 0, title: 'COMA', sound:'/BeginAgain.mp3', cover:'coma', summary:`For Kali, reality is a wasteland of meaningless routines—a world he only escapes through the vivid, surreal dreams he records in his notebook. But the border between his mind and the world begins to blur after a brief, tense encounter with a blue-haired stranger named Kassidy. As the city he knows starts to warp, streets fall into an impossible silence and buildings stretch toward a sky that no longer follows the rules of logic. How did he end up here? Is it because of Kassidy, or something far more ominous than he imagines?`,
  chapters:[{ch:1, title: 'The Hollow', 
                  content:[`In a bleached expanse of nothingness, a man aimlessly wanders. The white fabric beneath his jacket and his rubber shoes seem to merge with the background, leaving only the dark silhouette of his jacket and jeans; his red hair is the only shock of color present in the void. He is adrift—clueless, exhausted, and losing track of time. Though he strains to recall his purpose or his destination, his mind remains as blank as the space around him. Still, he keeps walking, driven by a quiet, stubborn belief that there is a reason for his journey.`,
                        `The void snaps shut like a shutter.`,
                        `He wakes beneath the shade of a tree. His breath is shallow and his skin is slick with a cold sweat. He takes a deep, grounding breath and pulls a handkerchief from his pocket to wipe his face. Before the memory can dissolve, he reaches for the notebook lying beside him and begins to write, desperately capturing every fading detail of the dream.`,
                        `Break is almost over. He slips back into the classroom and sinks into his seat, leaning heavily against his desk as he stares out the window. Suddenly, a mop of curly black hair blocks his view.`,
                        `"Hey, Kali! Wanna hang out today?" His voice cuts through the quiet as he hops onto the edge of the desk, his weight shifts the wood.`,
                        `"Sorry, Wigen, but I don't have time for—"`,
                        `Okay! Let’s meet at the gate," Wigen chirps, flashing a relentless grin.`,
                        `"I said, I don’t—"`,
                        `Once again, Wigen steps right over Kali’s protest, his smile never wavers. "I’ll be waiting, Kali." Without another word, Wigen spins around and heads out of the classroom.`,
                        `Kali lets out a long, slow exhale. "Whatever..."`,
                        `Once class ends, Kali heads to the library—the one place he can find peace. He notices the library has no visitors, which rarely happens. He takes a seat at a nearby table and pulls out his notebook to scribe. In the absolute stillness, he begins to weave his dreams into prose, his focus sharpening with every word.`,
                        `The heavy oak door creaks, a long, mourning sound that echoes through the empty rows. Kali doesn't look up immediately. He’s deep in the flow, his pen scratching a frantic rhythm against the paper.`,
                        `A flash of movement catches the corner of his eye: long, flowing blue hair and skin the color of unbaked porcelain. Their eyes meet for a heartbeat. His are a flat, lightless brown—the color of parched earth—while hers are two pits of deep, impenetrable black. For a second, it’s like two voids staring into each other, before he drops his gaze back to the page.`,
                        `He hears the soft thump-thump of her footsteps. They don’t pass by. They stop. He can feel her shadow falling over his notebook, cooling the sunlight hitting the table.`,
                        `"Excuse me. Can I sit here?" she murmurs, her voice hovering just above a whisper.`,
                        `"… Yeah… sure," Kali mutters. He doesn’t stop writing.`,
                        `She sinks into the chair beside him, fidgeting with the waistband of her maroon pants. Instead of opening her own notes, she leans forward, propping her chin in her palms as she fixes her stare on his notebook. The weight of her gaze is physical; Kali's hand stalls against the paper.`,
                        `Seeing his hand stall, the girl flinches slightly, then pulls back. "Oh, sorry for peeking at your work."`,
                        `"No, it's fine, althou—"`,
                        `"Really!?" she interrupts, her eyes lighting up. "Then can I take a look?"`,
                        `Before he can answer, she leans in—so close he can smell the sweat and faint, fragrant scent mixing from her white PE uniform. Kali instinctively slides his chair away.`,
                        `"What happens after this?" she asks, closing the gap again, her shoulder nearly brushing his as she points to a line of his messy script.`,
                        `"I-" Kali’s voice trails off. He shifts his gaze toward the ceiling. "...still thinking about it."`,
                        `"Hmm..? Your story is quite unique," she muses, her eyes scanning his handwriting. "Did you use any reference for this?"`,
                        `"No, none... All the ideas just came from my dream."`,
                        `A wide, fascinated smile spreads across her face. "Whoa. You remember every detail? That’s... fascinating." She turns fully toward him, her expression shifting into something enticing yet impossible to pin down. "May I know your name?"`,
                        `"… Kali."`,
                        `"Kassidy, nice to meet you, Kali. I’ll be looking forward to the future stories you make," she replies.`,
                        `Kali shifts his attention to his watch. "Sorry, but I need to go now." He sweeps his books into his bag in one go, the zipper hissing shut. "Bye..."`,
                        `Kali heads for the exit. Just before stepping out, he glances back. Kassidy is still there, waving at him. Her lips move, forming a silent phrase that he can't quite distinguish. He watches the shape of her mouth, but the words remain lost to the distance, leaving only the ghost of a sentence behind.`,
                        `Kali gives a small, reflexive wave and leaves.`,
                        `When he reaches the school gate, no one is around—not even Wigen. He doesn't waste a second looking for him and leaves with a sigh of relief.`,
                        `As he walks, the neighborhood begins to feel... thin.`,
                        `The usual roar of engines and the chatter of people heading home have evaporated. He passes a row of houses where the windows stare back like blind eyes, reflecting a sun that seems to have stopped sinking. A lawnmower sits abandoned in a half-cut yard, its engine cold. Even the birds have vanished. The sky is a heavy, unmoving gradient of bruised orange and gold, devoid of planes or clouds.`,
                        `He reaches the main intersection and stops dead in the center of the crosswalk.`,
                        `It isn't just a lack of noise; it’s a physical pressure against his eardrums, like being underwater.`,
                        `Above him, the traffic light clicks. Green. Yellow. Red. The mechanical sound is deafening in the void. The lights signal to an empty sea of asphalt, commanding cars that aren't coming. Kali turns a slow circle. The shadows are stretched into impossibly long, thin needles that point toward a horizon that doesn't look right. The air feels stagnant, tasting of nothing, like a held breath.`,
                        `"Strange I don't remember a building like this being here..." he thinks, his gaze lingers on a structure that seems to stretch infinitely upward, its geometry slightly "off," as if it were a sketch drawn with a ruler that slipped. He looks back at the street corner, then toward the direction of his apartment. The landmarks are there, but the distances are wrong. The sidewalk ahead looks miles long; the path behind him seems to curve into a place he’s never been.`,
                        `"Did I just... get lost?" Kali thinks.`,
                        `He turns around, attempting to backtrack, but the straight path behind him now seems to lead somewhere else entirely. Exhausted, Kali sits on a nearby bench to rest. He reaches into his bag to get his notebook.`,
                        `As he pulls it out, his thumb catches on the texture of the cover. He freezes. This isn't the smooth, cheap cardboard of his sketchbook. His fingers trace the cold, embossed letters of a title he didn't write:`,
                        `The Hollow.`,
                        `He stares at the letters. The title feels heavy, like the words themselves have weight. His own notebook is blank—clean, functional, and ordinary. Out of curiosity, Kali flips the cover open. It’s written in a diary format, dated and signed, yet the entries are filled with surreal, fictional descriptions.`,
                        `"Excuse me, sorry to interrupt your reading, but can I have it back..?"`,
                        `The voice cuts through the stillness like a blade. Kali’s head turns toward the voice. He hadn't heard a single footstep, yet Kassidy is standing right in front of him. In the long, needle-thin shadows of the sun, she looks even paler, her blue hair almost glowing against the bruised orange sky. She has a forced, nervous smile on her face, and in her hand, she holds his notebook.`,
                        `"Here," Kali says, handing her notes back immediately.`,
                        `"T-Thanks," she says, returning his notebook. She grips her own book to her chest and turns to leave, but then she hesitates. "Did you read it all?"`,
                        `"Almost, I guess..."`,
                        `"H-How was it?" she asks in a small, fragile voice.`,
                        `Kali leans his cheek against the palm of his hand as he stares off into the empty street. "If we're talking about the writing itself, it’s good. Very detailed."`,
                        `"R-Really!?" Kassidy looks back over her shoulder.`,
                        `"Yeah, very detailed. To the point where you explain exactly how you eat, sleep, take comfort, and—"`,
                        `Kassidy spins around and claps her hand over his mouth, cutting him off. "P-Please stop. I'm w-well aware of it," she hisses, her face flushed.`,
                        `After a moment of tense silence, she finally pulls her hand away and slumps down onto the bench beside him. The silence of the warped city presses in on them. Kali, unbothered by the social tension he just created, simply turns his head to look at her and speaks again.`,
                        `"Still, I'm curious..."`,
                        `"Hmm?" Kassidy turns her head to look back at him.`,
                        `"Why did you put fictional statements in your diary? Are you trying to add your own fantasies to your daily life?"`,
                        `Kassidy slightly tilts her head, her long blue hair shifting over her shoulder. She looks at him with a mix of confusion and genuine sincerity.`,
                        `"Eh? But it’s real though..."`


                ],
                screenshots:{}
        },
        
        {ch:2, title: 'The Ledger of Lost Hours', 
                content:[`Kali’s eyes widen at her revelation. He reaches out and pinches both of her cheeks.`,
                        `"Eek! W-Whath r-ooh jooing!?" she squeaks as Kali stretches her cheeks outward.`,
                        `Feeling the warmth of her skin against his fingertips, Kali let her go, noting the way her flesh snapped back into place.`,
                        `"What’s wrong with you?" Kassidy says, rubbing her face.`,
                        `"Just confirming if you're real, too," he says flatly.`,
                        `Kassidy pouts, her cheeks still pink from his touch. "Did you also consider me to be fictional!?"`,
                        `"Maybe..." Kali pauses, his gaze drifting back to the notebook in her hands. "Because if I recall the dates written in your diary... the entries were recorded around the 1770s."`,
                        `Kassidy blinks, looking genuinely puzzled. "What about it?"`,
                        `"Today is the year 2026," Kali says, his voice dropping an octave.`,
                        `The world seems to hold its breath. Kassidy stares at him, her eyes searching his face for any hint of a cruel joke. Her hand instinctively flies to her notebook, her fingers white-knuckled as she grips the cover.`,
                        `"Y-You're joking, right...?" she whispers, her voice trembling. "There's no way... I’ve tracked every hour by the tick of my watch. I’ve logged every period of rest. My tally... it doesn't add up to centuries."`,
                        `Her fingers tighten until the cardboard cover of the notebook groans and begins to warp. She stares at the embossed title, The Hollow, as if the words themselves might change if she looks at them long enough. Her eyes dart to the empty horizon, then back to Kali, searching for any sign of a lie.`,
                        `"My watch is not broken, either," she says, her voice low and defensive. "I haven't missed a single mark. And in the time I've been gone... the world doesn't move that fast. It can't."`,
                        `Kali watches the way she holds that book—like a shield, or a child. He can see the raw, fresh panic in her eyes—the kind of panic that belongs to someone who thinks their family is still sitting down for dinner without them.`,
                        `"Maybe you're right... Maybe we're just in a place where everything doesn't make any sense"`,
                        `Kassidy doesn’t look away from the notebook, but the frantic energy in her hands slowly subsides. She takes a long, jagged breath, forcing her lungs to accept the stagnant air of the Hollow. When she finally speaks, the panic hasn't vanished—it has simply been folded away, hidden behind a mask of weary necessity.`,
                        `"You're right," she says softly, her voice regaining a bit of its strength. "Logic is a luxury we don't have here. If I stop to think about the years, I'll stop walking. And if I stop walking..." She leaves the sentence unfinished, the implication hanging in the heavy silence.`,
                        `She tucks the notebook back under her arm, her movements careful and deliberate. "As long as I'm still alive and kicking, there's much more for me to see. Now I'm curious on how people live their lives today..."`,
                        `"What you see here is what today is..." Kali gestures vaguely at the empty, silent asphalt. "Full of people walking in the street, cars everywhere, noise... unlike here. If you want to see how people live, then we need to know how we can get  out of here."`,
                        `Kassidy’s expression shifts into a look of sympathetic worry. She slowly shakes her head.`,
                        `"I don't want to get your hopes up, but I've already been to many weird places in here," she says softly, her voice trembling with the realization of how long she’s been wandering. "To tell you the truth... this place has no boundary. It’s limitless, infinite... a distorted place."`,
                        `"I'll never know, until I see it for myself..." Kali says flatly. "But for now, let's find some place to rest."`,
                        `Kassidy perks up, her finger tapping against the chin as she thinks. "Oh... I got one," she says, a mischievous glint returning to her eyes.`,
                        `They walk together in silence as their footsteps echoing against the unnervingly clean pavement before Kassidy breaks the quiet.`,
                        `"So..." she starts, tilting her head toward him, "is the food better now? In the future, I mean. It must taste amazing, right?"`,
                        `Kali didn't even look up from the path. "Not really. Personally, I think the past had much more to offer."`,
                        `Kassidy pauses, her brow furrowing in genuine confusion. "Eh? Why? You have all these machines and fancy shops."`,
                        `"It’s all an imitation," Kali says flatly. "Modern food is a ghost of what it used to be. We use cheap, hollow ingredients to mimic flavor. Some of them are ready to eat but drenched in preservatives so it doesn't rot before it hits the shelf."`,
                        `"Well, sure," Kassidy counters, waving a hand dismissively. "But we used preservatives back then, too. Salt, sugar, vinegar... it's the same thing."`,
                        `Kali finally turns his head, his eyes locking onto hers with a chillingly blank expression.`,
                        `"Tell me, Kassidy... did you use formalin as a preservative in the 1700s?"`,
                        `Kassidy blinked, the name of the chemical clearly unfamiliar but sounding ominous. "Formalin? No... what’s that?"`,
                        `"Embalming fluid," Kali replies, his voice falling to a low, clinical murmur. "We’re essentially eating things that are dressed up to look like they’re still alive. Kind of like this city."`,
                        `Kassidy shivers, her playful energy momentarily dampened by the image of "dead" food. "You have a very... unique way of looking at things, Kali. It's no wonder your dreams are so vivid."`,
                        `"One more thing," Kali says, his eyes traveling from her face down to the faded white fabric of her shirt. "If you’re from the 1770s... why are you wearing a PE uniform from my school?"`,
                        `Kassidy looks down at herself, smoothing the polyester over her hips. "Is that what this is? A 'PE uniform'? I found it in a room full of metal boxes like cabinets.`,
                        `"The locker room..." Kali thinks.`,
                        `She let out a small, airy laugh, though there was no humor in it. "I was wandering through a hallway when I was suddenly falling out of nowhere. I ended up right inside one of those metal boxes... I burst out of it due to the impact of the fall. The door just gave way."`,
                        `She gestures to her clothes. "My own dress was in tatters from the journey. Luckily, these were just sitting there in the cabinet next to me, so I put them on. It’s much easier to run in this than a gown, anyway."`,
                        `"So you stole it?" Kali asks, his voice flat.`,
                        `Kassidy stops, her mouth hanging open slightly as she processes the word. She looks down at the uniform, then back at him, her eyebrows shooting up. "Well... my dress was already shredded. What can I do? I don't want to walk naked!"`,
                        `"Still," Kali mutters, "that’s school property. Someone probably had to go to gym class in their underwear because of you."`,
                        `Kassidy lets out a sharp, genuine laugh this time, the sound echoing a bit too loudly in the silent street. "Only if that really reflects outside the Hollow, they’re welcome to my old rags in exchange. Besides, is it really stealing if the owner doesn't exist here?"`,
                        `Kali sighs. "If you say so..."`,
                        `A few minutes later, Kali notices the path they're taking. The distorted skyline begins to look familiar, the impossibly tall buildings leaning away to reveal the wrought-iron fences of the campus.`,
                        `"The school?" Kali asks, his voice echoing in the hollow street.`,
                        `"It's my first time in here, and this is the only place I’ve checked so far," Kassidy replies.`,
                        `"First time?" Kali asks. "I thought you'd been wandering here for a long time."`,
                        `"Well, this isn't the only place in the Hollow. I just got lucky and found a way out of the horrifying asylum I was in before. In the Hollow, a door isn't always a door—sometimes it's a pitfall you can't escape." Kassidy pushes the gate open. "I've been to every corner of this school today. I think it’s safe. For now."`,
                        `They cross the courtyard, their shadows stretching long and thin across the pavement, though there is no clear sun to cast them. Kali follows her through the main entrance. The hallways, usually buzzing with the chaos of students, are now nothing more than a series of dark, echoing throats.`,
                        `"Where exactly are we staying?" Kali asks, his eyes tracking the lockers that seem to hum with a faint, static energy.`,
                        `"There was a white room over there," Kassidy replies. "It has beds, so yeah... we can rest there."`,
                        `When they reach the area, the white room she was referring to was the school clinic. The room inside is exactly as Kali remembers it, yet somehow more clinical, the white sheets on the cots gleaming with a sickly, pearlescent light.`,
                        `Without another word, she crosses to the nearest cot. She lies back, her body sinking into the thin mattress as if all the strength had been drained from her bones at once. She lays back, her long blue hair fanning out over the white pillow like a spill of ink.`,
                        `She stares up at the ceiling tiles, her eyes tracking the flickering fluorescent light that shouldn't have power, yet hums with a dull, persistent rhythm.`,
                        `"Now that we're able to rest... What are we supposed to do after this?" she asks, her voice muffled by the pillow, sounding smaller than before.`,
                        `She waits for a response but the room remains silent. She turns her head to the cot beside her, expecting to see Kali leaning against the wall or checking his watch. Instead, she finds him already asleep, his breathing heavy and rhythmic, finally surrendered to the exhaustion.`,
                        `Kassidy watches him for a long moment, a strange, lonely smile touching her lips. "I guess even the future gets tired," she whispers to the empty room.`,
                        `Kali wakes to the blinding, familiar sting of the white expanse. There is no floor, no sky—just a bleached infinity that makes his head ache.`,
                        `"Again…" he thinks`,
                        `He scans the horizon until his eyes snag on a blemish—a tiny, ink-black dot pulsing in the distance. As he walks toward it, the dot stretches and expands, bleeding into the shape of a person.`,
                        `His heart gives a strange, sudden thud as the figure takes form. A girl is sprinting toward him, her long blue hair trailing behind her like a streak of paint on a clean canvas.`,
                        `"Kassidy...?" his own voice sounding small and flat against the nothingness.`],
                screenshots:{}
        },
        {ch:3, title: 'White Lies', 
                content:[`The ink-black dot swells with impossible speed, the figure of Kassidy tearing through the white nothingness. As she gets closer, the silence is replaced by the frantic, wet sound of her gasping for air.`,
                        `She doesn't slow down until she’s a few feet away, her boots skidding against the non-existent floor. She hunches over, hands braced against her knees as she shudders. Her long blue hair falls forward like a heavy curtain, veiling her face as she tries to pull oxygen into her lungs.`,
                        `"Kali..." she gasps, her chest heaving. Each breath rattles in her throat like stones grinding against gravel.`,
                        `"Calm down, catch your breath first."`,
                        `"I think we’re screwed," she says, her voice paper-thin.`,
                        `"Screwed? How come...? Did you saw something?" Kali ask.`,
                        `"I was... walking," she manages to say, her fingers digging into her own sleeves. "This place has nothing, its deserted. I thought I was back in one of those strange rooms in the Hollow."`,
                        `She looks up at him, her dark eyes wide and shimmering with a mix of relief and terror. "Until I saw a strange dot from afar, I ran towards it. I thought it was an exit, but it was you. I'm glad you we're here with me, but I also felt sorry for dragging you along with me."`,
                        `Kali reaches out and pinches both of her cheeks."Eek! U jooing dish-again!?" she squeaks as Kali stretching her cheeks outward.`,
                        `"Stop blaming yourself, we're the only one who can help each other," Kali says`,
                        `Kali pulls his hand back, the sensation of her warm skin still tingling on his fingertips. Usually, when he drifts into that bleached expanse, he is a slave to a strange, heavy inertia. He wanders without a name, without a past, driven only by a hollow, stubborn instinct to keep moving.`,
                        `But at this moment, everything is crystalline clear and his awareness is too sharp to be conscious of anything. However, the idea of this void being a dream or the cause of the Hollow is still uncertain.`,
                        `"Let's move, staying here won't help," Kali says`,
                        `They walk into the infinite void, uncertain on where it would lead.`,
                        `An hour passes, Kassidy felt like they were just walking in circles and her eyes beginning to ache from the constant, shadowless white.`,
                        `"Kali, let's have some rest. It feels like we're just walking in circles for a while now," Kassidy says`,
                        `"Okay...", Kali agrees.`,
                        `They lie down beside each other and take a nap with their feet pointing to the same direction.`,
                        `"Do you think, this is the right thing to do?", Kassidy asks.`,
                        `"Who knows...? Only God knows," Kali says flatly.`,
                        `Kassidy lets out a heavy, ragged breath. "A God, huh? If they really exist-"`,
                        `"They do... But their eyes are closed," Kali says.`,
                        `"Saying that bluntly, like you're so sure of it. Are you some kind of devotee?" Kassidy asks.`,
                        `She is waiting for Kali's reply but only the void buzzing in silence remains. She turns her head beside him, open her eyes and finds him already asleep.`,
                        `"I can't tell if you're truly that exhausted, or if you’re just using sleep to dodge my questions.." Kassidy remarks quietly as the void begins to thrum against her eardrums.`,
                        `She watches him for a moment longer, the only dark shape in a world of light, before she finally closes her eyes, hoping that when they open again, the architecture of the world will have returned to its proper place.`,
                        `The buzzing of the void doesn't fade; it simply changes pitch, morphing from a low thrum into a sharp, rhythmic jarring. Kali’s head lolls to the side on the thin clinic pillow, his consciousness snagging on the physical sensation of his shoulder being gripped and shoved.`,
                        `Kali’s eyelids feel like they’ve been glued shut with salt. He groans, his mind still heavy with the image of blue hair and the scent of the clinic. "Kassidy... stop it..." he mutters, his voice thick with sleep.`,
                        `The shaking stops for a heartbeat, followed by a confused snort. "Who the hell is Kassidy?"`,
                        `Kali’s eyes snap open. The pearlescent light of the clinic is still there, but the cot beside him is empty. The sheets are perfectly flat, as if no one had ever touched them. Instead of the girl with the blue hair, he’s staring into the frantic, sweaty face of Wigen, who is leaning over him with a look of pure desperation.`,
                        `"Wigen?" Kali blinks, pushing himself up. "What are you doing here?"`,
                        `"Bro! I'm the one who should say that. Where have you gone, dude? I've been waiting for you at the gate! Did you just sleep here all nighter just to avoid me?" Wigen asks, crossing his arms and huffing with a mix of genuine annoyance and relief.`,
                        `Kali stares at the empty cot beside him for a heartbeat longer than he should. The sheets are so smooth it’s as if the last few hours were surgically removed from reality. He looks back at Wigen, who is tapping his foot impatiently, waiting for an explanation.`,
                        `"Kali blinks, the sterile white light of the clinic burning his retinas. "I... I didn't mean to stay," Kali mutters, rubbing the back of his neck as he scans the floor for any sign of Kassidy. Finding nothing, he looks at Wigen. "I think I passed out. Last thing I remember, I was heading for the exit and felt dizzy. Someone must have seen me and carried me in here—they probably forgot to wake me up before they left."`,
                        `Wigen's annoyance softens into a look of skepticism, his eyes narrowing. "Collapsed? Man, you really need to stop skipping breakfast. I was at the gate for an hour before I gave up." He winces suddenly, shifting his weight and clutching his right ankle, which is visibly swollen. "Lucky for you, I tripped over a stray hurdle during early PE drills and hobbled in here to find some ice. I didn't expect to find you playing Sleeping Beauty."`,
                        `Kali sits up, his head spinning. "Early PE? Wigen... what time is it?"`,
                        `"Quarter past seven," Wigen grunts, limping over to the medical cabinet and grabbing a pack of gauze. "And you're already late, bro. PE class started fifteen minutes ago. If I were you, I’d just skip it and stay here. Coach is in a foul mood today anyway."`,
                        `Kali doesn’t respond. He slowly turns his head toward the window, his gaze fixing on the world outside. The sun is fully up, casting a bright, unapologetic gold over the campus. It’s a perfectly normal morning—the kind that feels almost aggressive in its clarity. Outside, the dew on the grass sparkles under the goalposts, and the shadow of the school building stretches neatly across the pavement.`,
                        `The warmth hitting the glass feels real. The birds chirping in the distance sound real.`,
                        `"Was it really just a dream?" Kali thinks`,
                        `He looks back at the empty clinic bed. It’s too clean. Too perfect. If Kassidy had really been there, wouldn't there be a stray thread from her maroon pants? A single blue hair on the white pillow? There is nothing. Just the hum of the fluorescent lights and the sound of Wigen rummaging through the medical cabinets.`,
                        `"Seriously, don't sweat it," Wigen says, waving a hand dismissively as he finally gets the ice pack settled on his ankle. "You aren't the only one missing from the roster today. Coach is busy dealing with some girl who claims that her uniform got stolen."`,
                        `Kali stays frozen, his hand halfway to his bag. "Stolen?"`,
                        `"Yeah," Wigen continues, unaware of the storm brewing in Kali’s head. "She’s making a huge scene about it. Said she locked it up tight, but when she came in this morning, the locker door was dented from the inside—like someone tried to kick their way out. Totally weird, right?"`,
                        `Kali’s stomach drops. He remembers Kassidy’s words: “I ended up right inside one of those metal boxes... I burst out of it.”`,
                        `"I’m heading to the cafeteria before second period. Your coming?" Wigen asks`,
                        `Kali grabs his bag. "I'm coming," he mutters.`,
                        `As they walk, Wigen limps beside him, his mouth moving a mile a minute about the "Locker Phantom" and the upcoming exams. But Kali isn't listening. He’s scanning the hallways, looking for a flash of maroon pants or a PE shirt that looks just a little too crisp, a little too out of place.`,
                        `The cafeteria is a sea of noise—the clatter of plastic trays, the high-pitched trill of videos playing on smartphones, and the hum of industrial refrigerators.`,
                        `"Look over there," Wigen nudges Kali, pointing toward the vending machines.`,
                        `Kali’s gaze follows Wigen’s finger. There, standing amidst the morning rush of students, is a shock of blue hair and skin the color of unbaked porcelain, wearing a PE uniform. She is standing frozen in front of a digital vending machine.`,
                        `"Is that a new exchange student?" Wigen asks. "I haven't seen her around-"`,
                        `Kali doesn’t wait for Wigen to finish his sentence. He pushes through the crowd of students, his eyes fixed on the back of that blue head. As he gets closer, he can see that Kassidy want something in it but clueless to do so.`,
                        `He stops right beside her. She flinches, her hands flying up to her chest as if to protect her notebook, but when she sees it’s him, her entire body sags with a relief so heavy it’s almost visible.`,
                        `"Kali..." she breathes, her voice barely audible over the cafeteria’s roar.`,
                        `He reaches into his pocket, his fingers finding the cool, solid weight of a few coins. He slots one coin into the machine. *Clink.*`,
                        `Kassidy watches the coins disappear into the narrow slit, her head tilting in fascination. Kali reaches out and presses the glowing button. There’s a mechanical groan, a sharp *thud*, and a can tumbles into the bin at the bottom.`,
                        `"Whoa!" amazed, her eyes wide as she stares at the mechanical arm returning to its place.`,
                        `"Wanna try?" Kali asks, holding a second coin out to her.`,
                        `She leans in, her blue hair nearly touching the screen as she carefully slides the coin into the machine. When she hears the *clink* and sees the digital balance update on the screen, a small, triumphant gasp escapes her. She hesitates over the buttons, her finger hovering over a bright orange can before she finally commits and presses it. *Whirr. Clunk.*`,
                        `As the orange soda falls into the bin, she lets out a short, delighted laugh—the first sound of genuine joy Kali has heard from her. She reaches into the dispenser, her face lighting up as her skin meets the frost-chilled aluminum.`,
                        `"It’s like winter," she whispers, cradling the can in both hands. "You have machines that capture the cold?"`,
                        `"Something like that," Kali mutters. He glances back over his shoulder and sees Wigen. His friend has stopped dead in his tracks a few feet away, his jaw practically hitting the floor as he watches Kali—the school’s most antisocial student—patiently teaching a mysterious, beautiful girl how to use a vending machine.`],
                screenshots:{}
        },
        {ch:4, title: 'Test', 
                content:[' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tincidunt dolor quis euismod pellentesque. Pellentesque bibendum viverra velit. Integer dictum commodo eros. Sed euismod iaculis gravida. Phasellus pharetra arcu quis nulla placerat, sit amet cursus lectus semper. Sed molestie tellus vel purus feugiat accumsan. Morbi elementum iaculis est sit amet semper. Fusce pharetra orci at molestie semper. Mauris in tincidunt ligula, sed congue metus.',
                        'In pharetra, lectus eu ornare malesuada, arcu mi euismod neque, et feugiat odio lectus vel lorem. Mauris elementum, sapien non cursus aliquet, neque augue mollis ex, at ornare felis enim sed nunc. Maecenas quis libero laoreet, ornare nibh quis, maximus libero. Vestibulum erat felis, fringilla non massa ut, sollicitudin placerat ligula. Etiam in quam metus. Donec aliquet, ex ut cursus tincidunt, augue felis euismod est, non blandit mauris mi vulputate ligula. Aenean facilisis justo eleifend ligula pulvinar finibus. Morbi eget semper ligula. Donec iaculis lorem vitae nisi finibus commodo. Nam condimentum efficitur elit, a dignissim nisi. Fusce bibendum maximus turpis eget imperdiet. Sed aliquam lacinia nisi, eget commodo dolor tempor non. Nunc sit amet feugiat magna. Donec efficitur velit eget nisl aliquam ultrices.',
                        'Proin condimentum rutrum nisl. Maecenas tellus leo, consequat vitae molestie ut, tincidunt sed mi. Aliquam finibus faucibus tellus, non finibus enim sagittis et. Mauris finibus tempus nunc quis ornare. Donec vitae enim a sem blandit tempus. Phasellus sodales diam et nisi convallis, et pharetra ipsum fermentum. In id orci quis nibh finibus euismod eget molestie quam. Praesent fringilla lectus diam, nec rutrum orci blandit vel. Etiam nec maximus turpis, at pretium erat. Duis elementum libero non nunc ornare pretium. Integer tincidunt nulla ac sem eleifend, quis blandit nulla congue. Donec tellus ante, laoreet eget tellus quis, dignissim dictum mi. Curabitur neque ipsum, lobortis et orci id, gravida congue mi. Aenean quis dolor ac lectus ullamcorper sodales ac vel dui. Sed tempus dolor ante, vel eleifend urna imperdiet sit amet. In at condimentum est.',],
                screenshots:{}
        },
        {ch:5, title: 'Test', 
                content:[' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tincidunt dolor quis euismod pellentesque. Pellentesque bibendum viverra velit. Integer dictum commodo eros. Sed euismod iaculis gravida. Phasellus pharetra arcu quis nulla placerat, sit amet cursus lectus semper. Sed molestie tellus vel purus feugiat accumsan. Morbi elementum iaculis est sit amet semper. Fusce pharetra orci at molestie semper. Mauris in tincidunt ligula, sed congue metus.',
                        'In pharetra, lectus eu ornare malesuada, arcu mi euismod neque, et feugiat odio lectus vel lorem. Mauris elementum, sapien non cursus aliquet, neque augue mollis ex, at ornare felis enim sed nunc. Maecenas quis libero laoreet, ornare nibh quis, maximus libero. Vestibulum erat felis, fringilla non massa ut, sollicitudin placerat ligula. Etiam in quam metus. Donec aliquet, ex ut cursus tincidunt, augue felis euismod est, non blandit mauris mi vulputate ligula. Aenean facilisis justo eleifend ligula pulvinar finibus. Morbi eget semper ligula. Donec iaculis lorem vitae nisi finibus commodo. Nam condimentum efficitur elit, a dignissim nisi. Fusce bibendum maximus turpis eget imperdiet. Sed aliquam lacinia nisi, eget commodo dolor tempor non. Nunc sit amet feugiat magna. Donec efficitur velit eget nisl aliquam ultrices.',
                        'Proin condimentum rutrum nisl. Maecenas tellus leo, consequat vitae molestie ut, tincidunt sed mi. Aliquam finibus faucibus tellus, non finibus enim sagittis et. Mauris finibus tempus nunc quis ornare. Donec vitae enim a sem blandit tempus. Phasellus sodales diam et nisi convallis, et pharetra ipsum fermentum. In id orci quis nibh finibus euismod eget molestie quam. Praesent fringilla lectus diam, nec rutrum orci blandit vel. Etiam nec maximus turpis, at pretium erat. Duis elementum libero non nunc ornare pretium. Integer tincidunt nulla ac sem eleifend, quis blandit nulla congue. Donec tellus ante, laoreet eget tellus quis, dignissim dictum mi. Curabitur neque ipsum, lobortis et orci id, gravida congue mi. Aenean quis dolor ac lectus ullamcorper sodales ac vel dui. Sed tempus dolor ante, vel eleifend urna imperdiet sit amet. In at condimentum est.',],
                screenshots:{}
        },
        {ch:6, title: 'Test', 
                content:[' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tincidunt dolor quis euismod pellentesque. Pellentesque bibendum viverra velit. Integer dictum commodo eros. Sed euismod iaculis gravida. Phasellus pharetra arcu quis nulla placerat, sit amet cursus lectus semper. Sed molestie tellus vel purus feugiat accumsan. Morbi elementum iaculis est sit amet semper. Fusce pharetra orci at molestie semper. Mauris in tincidunt ligula, sed congue metus.',
                        'In pharetra, lectus eu ornare malesuada, arcu mi euismod neque, et feugiat odio lectus vel lorem. Mauris elementum, sapien non cursus aliquet, neque augue mollis ex, at ornare felis enim sed nunc. Maecenas quis libero laoreet, ornare nibh quis, maximus libero. Vestibulum erat felis, fringilla non massa ut, sollicitudin placerat ligula. Etiam in quam metus. Donec aliquet, ex ut cursus tincidunt, augue felis euismod est, non blandit mauris mi vulputate ligula. Aenean facilisis justo eleifend ligula pulvinar finibus. Morbi eget semper ligula. Donec iaculis lorem vitae nisi finibus commodo. Nam condimentum efficitur elit, a dignissim nisi. Fusce bibendum maximus turpis eget imperdiet. Sed aliquam lacinia nisi, eget commodo dolor tempor non. Nunc sit amet feugiat magna. Donec efficitur velit eget nisl aliquam ultrices.',
                        'Proin condimentum rutrum nisl. Maecenas tellus leo, consequat vitae molestie ut, tincidunt sed mi. Aliquam finibus faucibus tellus, non finibus enim sagittis et. Mauris finibus tempus nunc quis ornare. Donec vitae enim a sem blandit tempus. Phasellus sodales diam et nisi convallis, et pharetra ipsum fermentum. In id orci quis nibh finibus euismod eget molestie quam. Praesent fringilla lectus diam, nec rutrum orci blandit vel. Etiam nec maximus turpis, at pretium erat. Duis elementum libero non nunc ornare pretium. Integer tincidunt nulla ac sem eleifend, quis blandit nulla congue. Donec tellus ante, laoreet eget tellus quis, dignissim dictum mi. Curabitur neque ipsum, lobortis et orci id, gravida congue mi. Aenean quis dolor ac lectus ullamcorper sodales ac vel dui. Sed tempus dolor ante, vel eleifend urna imperdiet sit amet. In at condimentum est.',],
                screenshots:{}
        },
        {ch:7, title: 'Test', 
        content:[' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tincidunt dolor quis euismod pellentesque. Pellentesque bibendum viverra velit. Integer dictum commodo eros. Sed euismod iaculis gravida. Phasellus pharetra arcu quis nulla placerat, sit amet cursus lectus semper. Sed molestie tellus vel purus feugiat accumsan. Morbi elementum iaculis est sit amet semper. Fusce pharetra orci at molestie semper. Mauris in tincidunt ligula, sed congue metus.',
                'In pharetra, lectus eu ornare malesuada, arcu mi euismod neque, et feugiat odio lectus vel lorem. Mauris elementum, sapien non cursus aliquet, neque augue mollis ex, at ornare felis enim sed nunc. Maecenas quis libero laoreet, ornare nibh quis, maximus libero. Vestibulum erat felis, fringilla non massa ut, sollicitudin placerat ligula. Etiam in quam metus. Donec aliquet, ex ut cursus tincidunt, augue felis euismod est, non blandit mauris mi vulputate ligula. Aenean facilisis justo eleifend ligula pulvinar finibus. Morbi eget semper ligula. Donec iaculis lorem vitae nisi finibus commodo. Nam condimentum efficitur elit, a dignissim nisi. Fusce bibendum maximus turpis eget imperdiet. Sed aliquam lacinia nisi, eget commodo dolor tempor non. Nunc sit amet feugiat magna. Donec efficitur velit eget nisl aliquam ultrices.',
                'Proin condimentum rutrum nisl. Maecenas tellus leo, consequat vitae molestie ut, tincidunt sed mi. Aliquam finibus faucibus tellus, non finibus enim sagittis et. Mauris finibus tempus nunc quis ornare. Donec vitae enim a sem blandit tempus. Phasellus sodales diam et nisi convallis, et pharetra ipsum fermentum. In id orci quis nibh finibus euismod eget molestie quam. Praesent fringilla lectus diam, nec rutrum orci blandit vel. Etiam nec maximus turpis, at pretium erat. Duis elementum libero non nunc ornare pretium. Integer tincidunt nulla ac sem eleifend, quis blandit nulla congue. Donec tellus ante, laoreet eget tellus quis, dignissim dictum mi. Curabitur neque ipsum, lobortis et orci id, gravida congue mi. Aenean quis dolor ac lectus ullamcorper sodales ac vel dui. Sed tempus dolor ante, vel eleifend urna imperdiet sit amet. In at condimentum est.',],
        screenshots:{}
},
{ch:8, title: 'Test', 
content:[' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tincidunt dolor quis euismod pellentesque. Pellentesque bibendum viverra velit. Integer dictum commodo eros. Sed euismod iaculis gravida. Phasellus pharetra arcu quis nulla placerat, sit amet cursus lectus semper. Sed molestie tellus vel purus feugiat accumsan. Morbi elementum iaculis est sit amet semper. Fusce pharetra orci at molestie semper. Mauris in tincidunt ligula, sed congue metus.',
        'In pharetra, lectus eu ornare malesuada, arcu mi euismod neque, et feugiat odio lectus vel lorem. Mauris elementum, sapien non cursus aliquet, neque augue mollis ex, at ornare felis enim sed nunc. Maecenas quis libero laoreet, ornare nibh quis, maximus libero. Vestibulum erat felis, fringilla non massa ut, sollicitudin placerat ligula. Etiam in quam metus. Donec aliquet, ex ut cursus tincidunt, augue felis euismod est, non blandit mauris mi vulputate ligula. Aenean facilisis justo eleifend ligula pulvinar finibus. Morbi eget semper ligula. Donec iaculis lorem vitae nisi finibus commodo. Nam condimentum efficitur elit, a dignissim nisi. Fusce bibendum maximus turpis eget imperdiet. Sed aliquam lacinia nisi, eget commodo dolor tempor non. Nunc sit amet feugiat magna. Donec efficitur velit eget nisl aliquam ultrices.',
        'Proin condimentum rutrum nisl. Maecenas tellus leo, consequat vitae molestie ut, tincidunt sed mi. Aliquam finibus faucibus tellus, non finibus enim sagittis et. Mauris finibus tempus nunc quis ornare. Donec vitae enim a sem blandit tempus. Phasellus sodales diam et nisi convallis, et pharetra ipsum fermentum. In id orci quis nibh finibus euismod eget molestie quam. Praesent fringilla lectus diam, nec rutrum orci blandit vel. Etiam nec maximus turpis, at pretium erat. Duis elementum libero non nunc ornare pretium. Integer tincidunt nulla ac sem eleifend, quis blandit nulla congue. Donec tellus ante, laoreet eget tellus quis, dignissim dictum mi. Curabitur neque ipsum, lobortis et orci id, gravida congue mi. Aenean quis dolor ac lectus ullamcorper sodales ac vel dui. Sed tempus dolor ante, vel eleifend urna imperdiet sit amet. In at condimentum est.',],
screenshots:{}
},
{ch:9, title: 'Test', 
content:[' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tincidunt dolor quis euismod pellentesque. Pellentesque bibendum viverra velit. Integer dictum commodo eros. Sed euismod iaculis gravida. Phasellus pharetra arcu quis nulla placerat, sit amet cursus lectus semper. Sed molestie tellus vel purus feugiat accumsan. Morbi elementum iaculis est sit amet semper. Fusce pharetra orci at molestie semper. Mauris in tincidunt ligula, sed congue metus.',
        'In pharetra, lectus eu ornare malesuada, arcu mi euismod neque, et feugiat odio lectus vel lorem. Mauris elementum, sapien non cursus aliquet, neque augue mollis ex, at ornare felis enim sed nunc. Maecenas quis libero laoreet, ornare nibh quis, maximus libero. Vestibulum erat felis, fringilla non massa ut, sollicitudin placerat ligula. Etiam in quam metus. Donec aliquet, ex ut cursus tincidunt, augue felis euismod est, non blandit mauris mi vulputate ligula. Aenean facilisis justo eleifend ligula pulvinar finibus. Morbi eget semper ligula. Donec iaculis lorem vitae nisi finibus commodo. Nam condimentum efficitur elit, a dignissim nisi. Fusce bibendum maximus turpis eget imperdiet. Sed aliquam lacinia nisi, eget commodo dolor tempor non. Nunc sit amet feugiat magna. Donec efficitur velit eget nisl aliquam ultrices.',
        'Proin condimentum rutrum nisl. Maecenas tellus leo, consequat vitae molestie ut, tincidunt sed mi. Aliquam finibus faucibus tellus, non finibus enim sagittis et. Mauris finibus tempus nunc quis ornare. Donec vitae enim a sem blandit tempus. Phasellus sodales diam et nisi convallis, et pharetra ipsum fermentum. In id orci quis nibh finibus euismod eget molestie quam. Praesent fringilla lectus diam, nec rutrum orci blandit vel. Etiam nec maximus turpis, at pretium erat. Duis elementum libero non nunc ornare pretium. Integer tincidunt nulla ac sem eleifend, quis blandit nulla congue. Donec tellus ante, laoreet eget tellus quis, dignissim dictum mi. Curabitur neque ipsum, lobortis et orci id, gravida congue mi. Aenean quis dolor ac lectus ullamcorper sodales ac vel dui. Sed tempus dolor ante, vel eleifend urna imperdiet sit amet. In at condimentum est.',],
screenshots:{}
},
{ch:10, title: 'Test', 
content:[' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tincidunt dolor quis euismod pellentesque. Pellentesque bibendum viverra velit. Integer dictum commodo eros. Sed euismod iaculis gravida. Phasellus pharetra arcu quis nulla placerat, sit amet cursus lectus semper. Sed molestie tellus vel purus feugiat accumsan. Morbi elementum iaculis est sit amet semper. Fusce pharetra orci at molestie semper. Mauris in tincidunt ligula, sed congue metus.',
        'In pharetra, lectus eu ornare malesuada, arcu mi euismod neque, et feugiat odio lectus vel lorem. Mauris elementum, sapien non cursus aliquet, neque augue mollis ex, at ornare felis enim sed nunc. Maecenas quis libero laoreet, ornare nibh quis, maximus libero. Vestibulum erat felis, fringilla non massa ut, sollicitudin placerat ligula. Etiam in quam metus. Donec aliquet, ex ut cursus tincidunt, augue felis euismod est, non blandit mauris mi vulputate ligula. Aenean facilisis justo eleifend ligula pulvinar finibus. Morbi eget semper ligula. Donec iaculis lorem vitae nisi finibus commodo. Nam condimentum efficitur elit, a dignissim nisi. Fusce bibendum maximus turpis eget imperdiet. Sed aliquam lacinia nisi, eget commodo dolor tempor non. Nunc sit amet feugiat magna. Donec efficitur velit eget nisl aliquam ultrices.',
        'Proin condimentum rutrum nisl. Maecenas tellus leo, consequat vitae molestie ut, tincidunt sed mi. Aliquam finibus faucibus tellus, non finibus enim sagittis et. Mauris finibus tempus nunc quis ornare. Donec vitae enim a sem blandit tempus. Phasellus sodales diam et nisi convallis, et pharetra ipsum fermentum. In id orci quis nibh finibus euismod eget molestie quam. Praesent fringilla lectus diam, nec rutrum orci blandit vel. Etiam nec maximus turpis, at pretium erat. Duis elementum libero non nunc ornare pretium. Integer tincidunt nulla ac sem eleifend, quis blandit nulla congue. Donec tellus ante, laoreet eget tellus quis, dignissim dictum mi. Curabitur neque ipsum, lobortis et orci id, gravida congue mi. Aenean quis dolor ac lectus ullamcorper sodales ac vel dui. Sed tempus dolor ante, vel eleifend urna imperdiet sit amet. In at condimentum est.',],
screenshots:{}
},
{ch:11, title: 'Test', 
content:[' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tincidunt dolor quis euismod pellentesque. Pellentesque bibendum viverra velit. Integer dictum commodo eros. Sed euismod iaculis gravida. Phasellus pharetra arcu quis nulla placerat, sit amet cursus lectus semper. Sed molestie tellus vel purus feugiat accumsan. Morbi elementum iaculis est sit amet semper. Fusce pharetra orci at molestie semper. Mauris in tincidunt ligula, sed congue metus.',
        'In pharetra, lectus eu ornare malesuada, arcu mi euismod neque, et feugiat odio lectus vel lorem. Mauris elementum, sapien non cursus aliquet, neque augue mollis ex, at ornare felis enim sed nunc. Maecenas quis libero laoreet, ornare nibh quis, maximus libero. Vestibulum erat felis, fringilla non massa ut, sollicitudin placerat ligula. Etiam in quam metus. Donec aliquet, ex ut cursus tincidunt, augue felis euismod est, non blandit mauris mi vulputate ligula. Aenean facilisis justo eleifend ligula pulvinar finibus. Morbi eget semper ligula. Donec iaculis lorem vitae nisi finibus commodo. Nam condimentum efficitur elit, a dignissim nisi. Fusce bibendum maximus turpis eget imperdiet. Sed aliquam lacinia nisi, eget commodo dolor tempor non. Nunc sit amet feugiat magna. Donec efficitur velit eget nisl aliquam ultrices.',
        'Proin condimentum rutrum nisl. Maecenas tellus leo, consequat vitae molestie ut, tincidunt sed mi. Aliquam finibus faucibus tellus, non finibus enim sagittis et. Mauris finibus tempus nunc quis ornare. Donec vitae enim a sem blandit tempus. Phasellus sodales diam et nisi convallis, et pharetra ipsum fermentum. In id orci quis nibh finibus euismod eget molestie quam. Praesent fringilla lectus diam, nec rutrum orci blandit vel. Etiam nec maximus turpis, at pretium erat. Duis elementum libero non nunc ornare pretium. Integer tincidunt nulla ac sem eleifend, quis blandit nulla congue. Donec tellus ante, laoreet eget tellus quis, dignissim dictum mi. Curabitur neque ipsum, lobortis et orci id, gravida congue mi. Aenean quis dolor ac lectus ullamcorper sodales ac vel dui. Sed tempus dolor ante, vel eleifend urna imperdiet sit amet. In at condimentum est.',],
screenshots:{}
},
{ch:12, title: 'Test', 
content:[' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tincidunt dolor quis euismod pellentesque. Pellentesque bibendum viverra velit. Integer dictum commodo eros. Sed euismod iaculis gravida. Phasellus pharetra arcu quis nulla placerat, sit amet cursus lectus semper. Sed molestie tellus vel purus feugiat accumsan. Morbi elementum iaculis est sit amet semper. Fusce pharetra orci at molestie semper. Mauris in tincidunt ligula, sed congue metus.',
        'In pharetra, lectus eu ornare malesuada, arcu mi euismod neque, et feugiat odio lectus vel lorem. Mauris elementum, sapien non cursus aliquet, neque augue mollis ex, at ornare felis enim sed nunc. Maecenas quis libero laoreet, ornare nibh quis, maximus libero. Vestibulum erat felis, fringilla non massa ut, sollicitudin placerat ligula. Etiam in quam metus. Donec aliquet, ex ut cursus tincidunt, augue felis euismod est, non blandit mauris mi vulputate ligula. Aenean facilisis justo eleifend ligula pulvinar finibus. Morbi eget semper ligula. Donec iaculis lorem vitae nisi finibus commodo. Nam condimentum efficitur elit, a dignissim nisi. Fusce bibendum maximus turpis eget imperdiet. Sed aliquam lacinia nisi, eget commodo dolor tempor non. Nunc sit amet feugiat magna. Donec efficitur velit eget nisl aliquam ultrices.',
        'Proin condimentum rutrum nisl. Maecenas tellus leo, consequat vitae molestie ut, tincidunt sed mi. Aliquam finibus faucibus tellus, non finibus enim sagittis et. Mauris finibus tempus nunc quis ornare. Donec vitae enim a sem blandit tempus. Phasellus sodales diam et nisi convallis, et pharetra ipsum fermentum. In id orci quis nibh finibus euismod eget molestie quam. Praesent fringilla lectus diam, nec rutrum orci blandit vel. Etiam nec maximus turpis, at pretium erat. Duis elementum libero non nunc ornare pretium. Integer tincidunt nulla ac sem eleifend, quis blandit nulla congue. Donec tellus ante, laoreet eget tellus quis, dignissim dictum mi. Curabitur neque ipsum, lobortis et orci id, gravida congue mi. Aenean quis dolor ac lectus ullamcorper sodales ac vel dui. Sed tempus dolor ante, vel eleifend urna imperdiet sit amet. In at condimentum est.',],
screenshots:{}
},
{ch:12, title: 'Test', 
content:[' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tincidunt dolor quis euismod pellentesque. Pellentesque bibendum viverra velit. Integer dictum commodo eros. Sed euismod iaculis gravida. Phasellus pharetra arcu quis nulla placerat, sit amet cursus lectus semper. Sed molestie tellus vel purus feugiat accumsan. Morbi elementum iaculis est sit amet semper. Fusce pharetra orci at molestie semper. Mauris in tincidunt ligula, sed congue metus.',
        'In pharetra, lectus eu ornare malesuada, arcu mi euismod neque, et feugiat odio lectus vel lorem. Mauris elementum, sapien non cursus aliquet, neque augue mollis ex, at ornare felis enim sed nunc. Maecenas quis libero laoreet, ornare nibh quis, maximus libero. Vestibulum erat felis, fringilla non massa ut, sollicitudin placerat ligula. Etiam in quam metus. Donec aliquet, ex ut cursus tincidunt, augue felis euismod est, non blandit mauris mi vulputate ligula. Aenean facilisis justo eleifend ligula pulvinar finibus. Morbi eget semper ligula. Donec iaculis lorem vitae nisi finibus commodo. Nam condimentum efficitur elit, a dignissim nisi. Fusce bibendum maximus turpis eget imperdiet. Sed aliquam lacinia nisi, eget commodo dolor tempor non. Nunc sit amet feugiat magna. Donec efficitur velit eget nisl aliquam ultrices.',
        'Proin condimentum rutrum nisl. Maecenas tellus leo, consequat vitae molestie ut, tincidunt sed mi. Aliquam finibus faucibus tellus, non finibus enim sagittis et. Mauris finibus tempus nunc quis ornare. Donec vitae enim a sem blandit tempus. Phasellus sodales diam et nisi convallis, et pharetra ipsum fermentum. In id orci quis nibh finibus euismod eget molestie quam. Praesent fringilla lectus diam, nec rutrum orci blandit vel. Etiam nec maximus turpis, at pretium erat. Duis elementum libero non nunc ornare pretium. Integer tincidunt nulla ac sem eleifend, quis blandit nulla congue. Donec tellus ante, laoreet eget tellus quis, dignissim dictum mi. Curabitur neque ipsum, lobortis et orci id, gravida congue mi. Aenean quis dolor ac lectus ullamcorper sodales ac vel dui. Sed tempus dolor ante, vel eleifend urna imperdiet sit amet. In at condimentum est.',],
screenshots:{}
},
{ch:12, title: 'Test', 
content:[' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tincidunt dolor quis euismod pellentesque. Pellentesque bibendum viverra velit. Integer dictum commodo eros. Sed euismod iaculis gravida. Phasellus pharetra arcu quis nulla placerat, sit amet cursus lectus semper. Sed molestie tellus vel purus feugiat accumsan. Morbi elementum iaculis est sit amet semper. Fusce pharetra orci at molestie semper. Mauris in tincidunt ligula, sed congue metus.',
        'In pharetra, lectus eu ornare malesuada, arcu mi euismod neque, et feugiat odio lectus vel lorem. Mauris elementum, sapien non cursus aliquet, neque augue mollis ex, at ornare felis enim sed nunc. Maecenas quis libero laoreet, ornare nibh quis, maximus libero. Vestibulum erat felis, fringilla non massa ut, sollicitudin placerat ligula. Etiam in quam metus. Donec aliquet, ex ut cursus tincidunt, augue felis euismod est, non blandit mauris mi vulputate ligula. Aenean facilisis justo eleifend ligula pulvinar finibus. Morbi eget semper ligula. Donec iaculis lorem vitae nisi finibus commodo. Nam condimentum efficitur elit, a dignissim nisi. Fusce bibendum maximus turpis eget imperdiet. Sed aliquam lacinia nisi, eget commodo dolor tempor non. Nunc sit amet feugiat magna. Donec efficitur velit eget nisl aliquam ultrices.',
        'Proin condimentum rutrum nisl. Maecenas tellus leo, consequat vitae molestie ut, tincidunt sed mi. Aliquam finibus faucibus tellus, non finibus enim sagittis et. Mauris finibus tempus nunc quis ornare. Donec vitae enim a sem blandit tempus. Phasellus sodales diam et nisi convallis, et pharetra ipsum fermentum. In id orci quis nibh finibus euismod eget molestie quam. Praesent fringilla lectus diam, nec rutrum orci blandit vel. Etiam nec maximus turpis, at pretium erat. Duis elementum libero non nunc ornare pretium. Integer tincidunt nulla ac sem eleifend, quis blandit nulla congue. Donec tellus ante, laoreet eget tellus quis, dignissim dictum mi. Curabitur neque ipsum, lobortis et orci id, gravida congue mi. Aenean quis dolor ac lectus ullamcorper sodales ac vel dui. Sed tempus dolor ante, vel eleifend urna imperdiet sit amet. In at condimentum est.',],
screenshots:{}
},
{ch:12, title: 'Test', 
content:[' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tincidunt dolor quis euismod pellentesque. Pellentesque bibendum viverra velit. Integer dictum commodo eros. Sed euismod iaculis gravida. Phasellus pharetra arcu quis nulla placerat, sit amet cursus lectus semper. Sed molestie tellus vel purus feugiat accumsan. Morbi elementum iaculis est sit amet semper. Fusce pharetra orci at molestie semper. Mauris in tincidunt ligula, sed congue metus.',
        'In pharetra, lectus eu ornare malesuada, arcu mi euismod neque, et feugiat odio lectus vel lorem. Mauris elementum, sapien non cursus aliquet, neque augue mollis ex, at ornare felis enim sed nunc. Maecenas quis libero laoreet, ornare nibh quis, maximus libero. Vestibulum erat felis, fringilla non massa ut, sollicitudin placerat ligula. Etiam in quam metus. Donec aliquet, ex ut cursus tincidunt, augue felis euismod est, non blandit mauris mi vulputate ligula. Aenean facilisis justo eleifend ligula pulvinar finibus. Morbi eget semper ligula. Donec iaculis lorem vitae nisi finibus commodo. Nam condimentum efficitur elit, a dignissim nisi. Fusce bibendum maximus turpis eget imperdiet. Sed aliquam lacinia nisi, eget commodo dolor tempor non. Nunc sit amet feugiat magna. Donec efficitur velit eget nisl aliquam ultrices.',
        'Proin condimentum rutrum nisl. Maecenas tellus leo, consequat vitae molestie ut, tincidunt sed mi. Aliquam finibus faucibus tellus, non finibus enim sagittis et. Mauris finibus tempus nunc quis ornare. Donec vitae enim a sem blandit tempus. Phasellus sodales diam et nisi convallis, et pharetra ipsum fermentum. In id orci quis nibh finibus euismod eget molestie quam. Praesent fringilla lectus diam, nec rutrum orci blandit vel. Etiam nec maximus turpis, at pretium erat. Duis elementum libero non nunc ornare pretium. Integer tincidunt nulla ac sem eleifend, quis blandit nulla congue. Donec tellus ante, laoreet eget tellus quis, dignissim dictum mi. Curabitur neque ipsum, lobortis et orci id, gravida congue mi. Aenean quis dolor ac lectus ullamcorper sodales ac vel dui. Sed tempus dolor ante, vel eleifend urna imperdiet sit amet. In at condimentum est.',],
screenshots:{}
},
{ch:16, title: 'Test', 
content:[' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tincidunt dolor quis euismod pellentesque. Pellentesque bibendum viverra velit. Integer dictum commodo eros. Sed euismod iaculis gravida. Phasellus pharetra arcu quis nulla placerat, sit amet cursus lectus semper. Sed molestie tellus vel purus feugiat accumsan. Morbi elementum iaculis est sit amet semper. Fusce pharetra orci at molestie semper. Mauris in tincidunt ligula, sed congue metus.',
        'In pharetra, lectus eu ornare malesuada, arcu mi euismod neque, et feugiat odio lectus vel lorem. Mauris elementum, sapien non cursus aliquet, neque augue mollis ex, at ornare felis enim sed nunc. Maecenas quis libero laoreet, ornare nibh quis, maximus libero. Vestibulum erat felis, fringilla non massa ut, sollicitudin placerat ligula. Etiam in quam metus. Donec aliquet, ex ut cursus tincidunt, augue felis euismod est, non blandit mauris mi vulputate ligula. Aenean facilisis justo eleifend ligula pulvinar finibus. Morbi eget semper ligula. Donec iaculis lorem vitae nisi finibus commodo. Nam condimentum efficitur elit, a dignissim nisi. Fusce bibendum maximus turpis eget imperdiet. Sed aliquam lacinia nisi, eget commodo dolor tempor non. Nunc sit amet feugiat magna. Donec efficitur velit eget nisl aliquam ultrices.',
        'Proin condimentum rutrum nisl. Maecenas tellus leo, consequat vitae molestie ut, tincidunt sed mi. Aliquam finibus faucibus tellus, non finibus enim sagittis et. Mauris finibus tempus nunc quis ornare. Donec vitae enim a sem blandit tempus. Phasellus sodales diam et nisi convallis, et pharetra ipsum fermentum. In id orci quis nibh finibus euismod eget molestie quam. Praesent fringilla lectus diam, nec rutrum orci blandit vel. Etiam nec maximus turpis, at pretium erat. Duis elementum libero non nunc ornare pretium. Integer tincidunt nulla ac sem eleifend, quis blandit nulla congue. Donec tellus ante, laoreet eget tellus quis, dignissim dictum mi. Curabitur neque ipsum, lobortis et orci id, gravida congue mi. Aenean quis dolor ac lectus ullamcorper sodales ac vel dui. Sed tempus dolor ante, vel eleifend urna imperdiet sit amet. In at condimentum est.',],
screenshots:{}
},
 ]},
   // ANCHOR Dark Child
  { id: 1, title: 'The Dark Child', sound:'/Phoenix.mp3', cover:'darkchild', summary:'Did you heard the rumor that there was a child in the army? Not just a relative of someone else, but he is the soldier himself known in the name as the "Dark Child"',
  chapters:[{ch:1, title: 'Child of the Army', 
                content:['',
                        'In pharetra, lectus eu ornare malesuada, arcu mi euismod neque, et feugiat odio lectus vel lorem. Mauris elementum, sapien non cursus aliquet, neque augue mollis ex, at ornare felis enim sed nunc. Maecenas quis libero laoreet, ornare nibh quis, maximus libero. Vestibulum erat felis, fringilla non massa ut, sollicitudin placerat ligula. Etiam in quam metus. Donec aliquet, ex ut cursus tincidunt, augue felis euismod est, non blandit mauris mi vulputate ligula. Aenean facilisis justo eleifend ligula pulvinar finibus. Morbi eget semper ligula. Donec iaculis lorem vitae nisi finibus commodo. Nam condimentum efficitur elit, a dignissim nisi. Fusce bibendum maximus turpis eget imperdiet. Sed aliquam lacinia nisi, eget commodo dolor tempor non. Nunc sit amet feugiat magna. Donec efficitur velit eget nisl aliquam ultrices.',
                        'Proin condimentum rutrum nisl. Maecenas tellus leo, consequat vitae molestie ut, tincidunt sed mi. Aliquam finibus faucibus tellus, non finibus enim sagittis et. Mauris finibus tempus nunc quis ornare. Donec vitae enim a sem blandit tempus. Phasellus sodales diam et nisi convallis, et pharetra ipsum fermentum. In id orci quis nibh finibus euismod eget molestie quam. Praesent fringilla lectus diam, nec rutrum orci blandit vel. Etiam nec maximus turpis, at pretium erat. Duis elementum libero non nunc ornare pretium. Integer tincidunt nulla ac sem eleifend, quis blandit nulla congue. Donec tellus ante, laoreet eget tellus quis, dignissim dictum mi. Curabitur neque ipsum, lobortis et orci id, gravida congue mi. Aenean quis dolor ac lectus ullamcorper sodales ac vel dui. Sed tempus dolor ante, vel eleifend urna imperdiet sit amet. In at condimentum est.',],
                screenshots:{}},
  
 ]},
  // ANCHOR !=
  { id: 2, title: '!=', sound:'/StillHere.mp3', cover:'!=', summary:`Touma, an average salary guy who is in the middle of his quarter-life crisis. No time and no peers, too busy to cope with his work, envied his old acquaintances that are still enjoying the moments of their youth and the repeating cycle of his daily life. "Tell me, am I still in the RIGHT path?"`,
  chapters:[
        {ch:1, title: 'Re...', 
                content:['Wake up, Eat, Go to Work, Eat, Sleep. A repeatable cycle that some of us are facing when reaching adulthood, mostly for those people who has no time and no peers to connect with.',
                        'The story revolves to a man named Touma who is standing on a crowded train, lifelessly staring from afar. When he noticed a bunch of kids chasing each other, he sighted and said...',
                        `"It's so nice to be young"`,
                        `As Touma enters the company, he immediately changed his emotioneless face into a joyful one, greeting every workers he passes by. But that facade didn't last when he sit on his table and stare at the monitor. After his done with his workload, there's nothing for him to do but to stare at the window and wander his mind. He suddenly remember the moments of his childhood just playing around with friends just like the kids he notice along the way.`,
                        "<italic>Freedom, huh... I thought I would be free if I work so hard to earn a lot of money. But I never thought it won't last for long from how many necessities I been paying in a month. Instead of a bird flying in the sky, it feels like I'm locked from a bird cage, unable to do a thing. Come to think of it, I feel more free when I was a kid despite of not having money, I also don't have any duties or responsibilities to deal with. Sight... Remembering those days, makes me want to go back...",
                        'Yawning with his mouth open wide, ',
                        'Overtime',
                        'He play with someone',
                        'He told the girl if he has a gun, he would kill himself',
                        'Sudden fight happens',
                        'He try to get the gun but he got killed instead'],
                screenshots:{3:'ColorsNShadows',4:'!='}
        },
        
 ]},
  //ANCHOR Colors N Shadows
  { id: 3, title: "Colors N Shadows", sound:'/Diewithasmile.mp3', cover:'ColorsNShadows', summary:"How would you act if you can perceived their emotions through the colors they emit..? And knowing the they're not human from the glimpse of their shadows... How would you react?",
  chapters:[{ch:1, title: 'Ar U Human?', 
                content:['',
                        'In pharetra, lectus eu ornare malesuada, arcu mi euismod neque, et feugiat odio lectus vel lorem. Mauris elementum, sapien non cursus aliquet, neque augue mollis ex, at ornare felis enim sed nunc. Maecenas quis libero laoreet, ornare nibh quis, maximus libero. Vestibulum erat felis, fringilla non massa ut, sollicitudin placerat ligula. Etiam in quam metus. Donec aliquet, ex ut cursus tincidunt, augue felis euismod est, non blandit mauris mi vulputate ligula. Aenean facilisis justo eleifend ligula pulvinar finibus. Morbi eget semper ligula. Donec iaculis lorem vitae nisi finibus commodo. Nam condimentum efficitur elit, a dignissim nisi. Fusce bibendum maximus turpis eget imperdiet. Sed aliquam lacinia nisi, eget commodo dolor tempor non. Nunc sit amet feugiat magna. Donec efficitur velit eget nisl aliquam ultrices.',
                        'Proin condimentum rutrum nisl. Maecenas tellus leo, consequat vitae molestie ut, tincidunt sed mi. Aliquam finibus faucibus tellus, non finibus enim sagittis et. Mauris finibus tempus nunc quis ornare. Donec vitae enim a sem blandit tempus. Phasellus sodales diam et nisi convallis, et pharetra ipsum fermentum. In id orci quis nibh finibus euismod eget molestie quam. Praesent fringilla lectus diam, nec rutrum orci blandit vel. Etiam nec maximus turpis, at pretium erat. Duis elementum libero non nunc ornare pretium. Integer tincidunt nulla ac sem eleifend, quis blandit nulla congue. Donec tellus ante, laoreet eget tellus quis, dignissim dictum mi. Curabitur neque ipsum, lobortis et orci id, gravida congue mi. Aenean quis dolor ac lectus ullamcorper sodales ac vel dui. Sed tempus dolor ante, vel eleifend urna imperdiet sit amet. In at condimentum est.',],
                screenshots:{}
                },
  
 ]},
];

  return (
  <GlobalContext.Provider value={novels}>
        
        <Router>
            <Wrapper>
                <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/read" element={<Read />} />
                <Route path="/list" element={<List />} />
                <Route path="/novels" element={<List />} />
                <Route path="/novel" element={<NovelChar  />} />
                <Route path="/wiki" element={<NovelChar  />} />
                <Route path="/download" element={<PDF1  />} />
                </Routes>
            </Wrapper>
        </Router>
  
  </GlobalContext.Provider>
 
  );
 }
 

export default App;
