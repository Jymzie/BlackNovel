
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
                  content:[`In a bleached expanse of nothingness, a man in a sharp black suit wanders aimlessly. His red hair is the only shock of color against the void. He is adrift—clueless, exhausted, and losing track of time. Though he strains to recall his purpose or his destination, his mind remains as blank as the space around him. Still, he keeps walking, driven by a quiet, stubborn belief that there is a reason for his journey.`,
                        `The void snaps shut like a shutter.`,
                        `He wakes beneath the shade of a tree. His breath is shallow and his skin is slick with a cold sweat. He takes a deep, grounding breath and pulls a handkerchief from his pocket to wipe his face. Before the memory can dissolve, he reaches for the notebook lying beside him and begins to write, desperately capturing every fading detail of the dream.`,
                        `Break is almost over. He slips back into the classroom and sinks into his seat, leaning heavily against his desk as he stares out the window. Suddenly, a mop of curly black hair blocks his view.`,
                        `"Hey, Kali! Wanna hang out today?" His voice cuts through the quiet as he hops onto the edge of the desk, his weight shifting the wood.`,
                        `"Sorry Wigen, but I don't have time for—"`,
                        `Okay! Let’s meet at the gate," Wigen chirps, flashing a relentless grin that says he isn't listening.`,
                        `"I said, I don’t—"`,
                        `Once again, Wigen steps right over Kali’s protest, his smile never wavering. "I’ll be waiting, Kali." Without another word, Wigen spins around and heads out of the classroom.`,
                        `Kali lets out a long, slow exhale. "Whatever..."`,
                        `Once class ends, Kali heads to the library—the one place he can find peace. He notices the library has no visitors, which rarely happens. He takes a seat at a nearby table and pulls out his notebook to scribe. In the absolute stillness, he begins to weave his dreams into prose, his focus sharpening with every word.`,
                        `The heavy door creaks. Kali looks up to see a girl with long, flowing blue hair and skin as pale as porcelain entering the room. Their eyes meet for a fleeting second—long enough for Kali to register her presence—before he looks back down and resumes writing.`,
                        `He feels her presence as she walks past, but then she stops, stealing a slight peek at his notebook.`,
                        `"Excuse me. Can I sit here?" she asks softly.`,
                        `"… Yeah… sure," Kali muttered, his pen never leaving the paper.`,
                        `She sank into the chair beside him. Instead of opening her own notes, she leaned forward, her chin resting in her palms as she fixed her gaze on his notebook. The weight of her stare was heavy; Kali’s hand faltered.`,
                        `Seeing his hand stall, the girl flinches slightly, then pulls back. "Oh, sorry for peeking at your work."`,
                        `"No, it's fine, althou—"`,
                        `"Really!?" she interrupts, her eyes lighting up. "Then can I take a look?"`,
                        `Before he can answer, she leans in—so close he could smell the faint, fragrant scent. Kali shifts his chair away.`,
                        `"What happens after this?" she asks, closing the gap again until her shoulder nearly brushes his.`,
                        `"I-" Kali shifts his gaze toward the empty library shelves. "...still thinking about it."`,
                        `"Hmm..? Your story is quite unique," she muses, her eyes scanning his handwriting. "Did you use any reference for this?"`,
                        `"No, none... All the ideas just came from my dream."`,
                        `A wide, fascinated smile spreads across her face. "Whoa! You can even remember every detail of your dream..! That's fascinating..! May I know your name?"`,
                        `"… Kali."`,
                        `"Kassidy," she replies, looking at him with an enticing, unreadable expression. "Nice to meet you, Kali. I'll be looking forward to the future stories you'll make."`,
                        `Kali shifts his attention to his watch. "Sorry, but I need to go now." He sweeps his books into his bag in one fluid motion, the zipper hissing shut. "Bye..."`,
                        `Kali heads for the exit. Just before stepping out, he glances back. Kassidy is still there, waving at him. Her lips move, forming a silent phrase that he can't quite distinguish. He watches the shape of her mouth, but the words remain lost to the distance, leaving only the ghost of a sentence behind.`,
                        `Kali gives a small, reflexive wave and leaves.`,
                        `When he reaches the school gate, no one is around—not even Wigen. He doesn't waste a second looking for him and leaves with a sigh of relief. As Kali walks along the sidewalk, a heavy, unnatural silence settles over the neighborhood. The usual hum of distant engines is gone. Not a single pedestrian cuts across his path.`,
                        `He stops in the middle of the intersection. A plastic bag snagged on a fence doesn't flutter. The traffic lights cycle from green to red, signaling to an empty asphalt sea. Even the air feels stagnant, like a held breath.`,
                        `He looks up, squinting at the skyline. Several buildings tower into the clouds.`,
                        `"I don't remember this building being this tall..." he thinks, his gaze lingering on a structure that seems to stretch infinitely upward. He looks back at the street corner, then toward the direction of his home. Nothing looks quite right.`,
                        `"Did I just... get lost?" Kali thinks`,
                        `He turns around, attempting to backtrack, but the straight path behind him now seems to lead somewhere else entirely. Exhausted, Kali sits on a nearby bench to rest. He reaches into his bag and pulls out the notebook. He’s about to flip to his last entry when his thumb catches on the texture of the cover. He pauses. There, embossed in a faint, dark script he didn't notice before, is a title: The Hollow.`,
                        `Hold on..! Did I mix our things up?!? Kali thinks, letting out a heavy sigh at the simple mistake.`,
                        `He stares at the letters. His own notebook is blank—clean and functional. Out of curiosity, Kali flips the notebook open. It is written in a diary format, yet the entries are filled with surreal, fictional descriptions.`,
                        `"Excuse me, sorry to interrupt your reading, but can I have it back..?"`,
                        `The voice is familiar. Kali looks up to see Kassidy standing in front of him, a forced, nervous smile on her face. In her hand, she holds his notebook.`,
                        `"Here," Kali says, handing her notes back immediately.`,
                        `"T-Thanks," Kassidy exhales, returning his notebook. She turns to leave, but then hesitates. "Did you read it all?"`,
                        `"Almost, I guess..."`,
                        `"H-How was it?" she asks in a small voice.`,
                        `Kali leans his cheek against the palm of his hand as he stares off into the empty street. "If we're talking about the writing itself, it’s good. Very detailed."`,
                        `"R-Really!?" Kassidy looks back over her shoulder, eyes lit up.`,
                        `"Yeah, very detailed. To the point where you explain exactly how you eat, sleep, take comfort, and—"`,
                        `Burning with embarrassment, Kassidy spins around and claps her hand over his mouth, cutting him off. "P-Please stop. I'm w-well aware of it," she hisses, her face flushed.`,
                        `After a moment of tense silence, she finally pulls her hand away and slumps down onto the bench beside him. The silence of the warped city presses in on them. Kali, unbothered by the social tension he just created, simply turns his head to look at her and speaks again.`,
                        `"Still, I'm curious..."`,
                        `"Hmm?" Kassidy turns her head to look back at him.`,
                        `Why did you put fictional statements in your diary? Are you trying to add your own fantasies to your daily life?"`,
                        `Kassidy slightly tilts her head, her long blue hair shifting over her shoulder. She looks at him with a mix of confusion and genuine sincerity.`,
                        `"Eh? But it’s real though..."`


                ],
                screenshots:{}
        },
        
        {ch:2, title: 'Prisoner of the Past', 
                content:[`Kali’s eyes widen at her revelation. He reaches out and pinches both of her cheeks.`,
                        `"Eek! W-Whath r-ooh do-ing!?" she squeaks as Kali stretching her cheeks outward.`,
                        `Feeling the warmth of her skin against his fingertips, Kali let her go, noting the way her flesh snapped back into place.`,
                        `"What’s wrong with you?" Kassidy says, rubbing her face.`,
                        `"Just confirming if you're real, too," he says flatly.`,
                        `Kassidy pouts, her cheeks still pink from his touch. "Did you also consider me to be fictional!?"`,
                        `"Maybe..." Kali pauses, his gaze drifting back to the notebook in her hands. "Because if I recall the dates written in your diary... the entries were recorded around the 1770s."`,
                        `Kassidy blinks, looking genuinely puzzled. "What about it?"`,
                        `"Today is the year 2026," Kali says, his voice dropping an octave.`,
                        `The world seems to hold its breath. Kassidy stares at him, her eyes searching his face for any hint of a cruel joke. Her hand instinctively flies to her notebook, her fingers white-knuckled as she grips the cover.`,
                        `"Y-You're joking, right...?" she whispers, her voice trembling. "There's no way... I've counted every sunrise. I've logged every single day in here. My tally... it doesn't add up to centuries."`,
                        `Her fingers tighten until the cardboard cover of the notebook groans and begins to warp. She stares at the embossed title, The Hollow, as if the words themselves might change if she looks at them long enough. Her eyes dart to the empty horizon, then back to Kali, searching for any sign of a lie.`,
                        `"I know my count, Kali," she says, her voice low and defensive. "I haven't missed a single mark. And in the time I've been gone... the world doesn't move that fast. It can't."`,
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
                        `"It’s all an imitation," Kali said flatly. "Modern food is a ghost of what it used to be. We use cheap, hollow ingredients to mimic flavor. Some of them are ready to eat but drench in preservatives so it doesn't rot before it hits the shelf."`,
                        `"Well, sure," Kassidy counters, waving a hand dismissively. "But we used preservatives back then, too. Salt, sugar, vinegar... it's the same thing."`,
                        `Kali finally turns his head, his eyes locking onto hers with a chillingly blank expression.`,
                        `"Tell me, Kassidy... did you use formalin as a preservative in the 1700s?"`,
                        `Kassidy blinked, the name of the chemical clearly unfamiliar but sounding ominous. "Formalin? No... what’s that?"`,
                        `"Embalming fluid," Kali replies, his voice falling to a low, clinical murmur. "We’re essentially eating things that are dressed up to look like they’re still alive. Kind of like this city."`,
                        `Kassidy shivers, her playful energy momentarily dampened by the image of "dead" food. "You have a very... unique way of looking at things, Kali. It's no wonder your dreams are so vivid."`,
                        `A few minutes later, Kali notices the path they're taking. The distorted skyline begins to look familiar, the impossibly tall buildings leaning away to reveal the wrought-iron fences of the campus.`,
                        `"The school?" Kali asks, his voice echoing in the hollow street.`,
                        `"It's my first time in here, and this is the only place I’ve checked so far," Kassidy replies.`,
                        `"First time?" Kali asks. "I thought you'd been wandering here for a long time."`,
                        `"Well, this isn't the only place in the Hollow. I just got lucky and found a way out of the horrifying asylum I was in before. In the Hollow, a door isn't always a door—sometimes it's a pitfall you can't escape." Kassidy pushes the gate open. "I've been to every corner of this school today. I think it’s safe. For now."`,
                        `They cross the courtyard, their shadows stretching long and thin across the pavement, though there is no clear sun to cast them. Kali follows her through the main entrance. The hallways, usually buzzing with the chaos of students, are now nothing more than a series of dark, echoing throats.`,
                        `"Where exactly are we staying?" Kali asks, his eyes tracking the lockers that seem to hum with a faint, static energy.`,
                        `"The clinic," Kassidy replies. "It has beds, so yeah... we can rest there."`,
                        `They reach the clinic door. The room inside is exactly as Kali remembers it, yet somehow more clinical, the white sheets on the cots gleaming with a sickly, pearlescent light.`,
                        `Without another word, she crosses to the nearest cot. She lays onto it, her body sinking into the thin mattress as if all the strength had been drained from her bones at once. She lays back, her long blue hair fanning out over the white pillow like a spill of ink.`,
                        `She stares up at the ceiling tiles, her eyes tracking the flickering fluorescent light that shouldn't have power, yet hums with a dull, persistent rhythm. After a moment, her gaze drifts to the glass cabinets nearby, filled with rows of bandages and medicine.`,
                        `"Is this how you fix people in 2026?" she asks, her voice muffled by the pillow, sounding smaller than before. "With all these little bottles and silver tools?"`,
                        `She waits for a response—a cynical remark about modern medicine or a flat explanation of the tools—but the room remains silent. She turns her head to the cot beside her, expecting to see Kali leaning against the wall or checking his watch. Instead, she finds him already asleep, his breathing heavy and rhythmic, finally surrendered to the exhaustion.`,
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
                        `"Kali..." she gasps, her chest heaving. Each breath sounds like it’s being dragged through gravel.`,
                        `"Calm down, catch your breath first."`,
                        `"Kali, I think we’re screwed," she says, her voice cracking.`],
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
