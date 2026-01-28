
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
  chapters:[{ch:1, title: 'Hollow', 
                  content:[`In a bleached expanse of nothingness, a man in a sharp black suit wandered aimlessly, his red hair the only shock of color against the void.`,
                        `He was adrift—clueless, exhausted, and losing track of time.`,
                        `Though he strained to recall his purpose or his destination, his mind remained as blank as the space around him.`,
                        `Still, he kept walking, driven by a quiet, stubborn belief that there was a reason for his journey.`,
                        `Suddenly, the void snapped away.`,
                        `He woke beneath the shade of a tree, his breath shallow and his skin slick with a cold sweat.`,
                        `He took a deep, grounding breath and pulled a handkerchief from his pocket to wipe his face.`,
                        `Before the memory could dissolve, he reached for the notebook lying beside him and began to write, desperately capturing every fading detail of the dream.`,
                        `Break is almost over, he slipped back into the classroom and sank into his seat, leaning heavily against his desk as he stared out the window`,
                        `Suddenly, a guy with a mop of curly black hair sauntered over and hopped onto the edge of his desk with annoying casualness.`,
                        `[ Hey, Kali! Wanna hangout today? ]`,
                        `[ Sorry Wigen, but I don't have time for- ]`,
                        `Wigen didn't give Kali the chance to finish. He flashed a bright, relentless grin.`,
                        `[ Ok, Let’s meet at the gate. ]`,
                        `[ I said, I don’t- ]`,
                        `Once again, Wigen stepped right over Kali’s protest, his smile never wavering.`,
                        `[ I’ll be waiting, Kali. ]`,
                        `Without another word, Wigen spun around and went out of the classroom.`,
                        `“Sigh… Whatever... “ Kali thought`,
                        `After the class have ended, Kali went to a place where he can find peace, to the library.`,
                        `Kali noticed the library has no visitors which is rarely to happen.`,
                        `He took a seat at a nearby table and take out his notebook to compose.`,
                        `In the absolute stillness, he began to weave his dreams into prose, his focus sharpening with every word.`,
                        `The heavy door creaked. Kali looked at the entrance to see a girl with long, flowing blue hair and skin as pale as porcelain entering the room.`,
                        `Their eyes met for a fleeting second—long enough for Kali to register her presence—before he looked back down and resumed writing.`,
                        `He felt her presence as she walked past, but then she stopped, stealing a slight peek at his notebook.`,
                        `[ Excuse me. Can I sit here? ] she asked softly.`,
                        `[ … Yeah… sure. ] Kali replied without looking up.`,
                        `She sat beside him, but instead of opening her note, she simply stared at his work.`,
                        `The weight of her gaze was heavy; Kali’s mind, usually so precise, went blank.`,
                        `The flow of his story hit a wall. Seeing his hand stall, the girl realized she had overstepped..`,
                        `[ Oh, sorry for peeking at your work...]`,
                        `[ No, its fine, althou-]`,
                        `[ Really!? ] she interrupted, her eyes lighting up. [ Then can I take a look? ]`,
                        `Before he could answer, she leaned in closer—so close that the distance between them vanished.`,
                        `Kali instinctively moved aside to reclaim his personal space, but she followed, closing the gap until she was almost touching him.`,
                        `[ What happens after this? ] she asked, her voice hovering near his ear.`,
                        `[ I... still thinking about it... ]`,
                        `[ Hmm..? Your story is quite unique.] she mused, her eyes scanning his handwriting. [ Did you use any reference for this? ]`,
                        `[ No, none... All the ideas just came from my dream ]`,
                        `A wide, fascinated smile spread across her face.`,
                        `[ Whoa! You can even remember every details of your dream..! That's fascinating..! May I know your name? ]`,
                        `[ … Kali. ]`,
                        `[ Kassidy, ] she replied, looking at him with an enticing, unreadable expression. [ Nice to meet you, Kali. I'll be looking forward to the future stories you'll make. ]`,
                        `Uncomfortable with the intensity of her gaze, Kali checked his watch.`,
                        `[ Sorry, but I need to go now, ] He packed his things with practiced speed [ Bye... ]`,
                        `Kali immediately headed for the exit.`,
                        `Just before stepping out, he glanced back. Kassidy was still there, waving at him while her lips were moving`, 
                        `It seems like there something she wants to say, but he couldn't figure it out.`,
                        `Kali gave a small, reflexive wave and left.`,
                        `When he reached the school gate, no one is around even Wigen who told to meet up.`,
                        `He didn't waste a second looking for him and leave with sight of relief`,
                        `As Kali walked along the sidewalk, a heavy, unnatural silence settled over the neighborhood.`,
                        `The streets were completely clear—no cars hummed in the distance, and not a single pedestrian crossed his path.`,
                        `He had been walking for a while, but the world felt frozen.`,
                        `He looked up, squinting at the skyline. Several buildings were towering into the clouds, their height defying any logic or city planning.`,
                        `“I don't remember this building to be this tall...“ he thought, his gaze lingering on a structure that seemed to stretch infinitely upward.`,
                        `He looked back at the street corner, then toward the direction of his home. Nothing looked quite right.`,
                        `"Did I just... Lost..?" Kali thought`,
                        `He turned around, attempting to backtrack, but the straight path behind him now seemed to lead somewhere else entirely.`,
                        `Exhausted, Kali sat on a nearby bench to rest.`,
                        `He reached into his bag and pulled out his notebook, but he realized, he got Kassidy's notes instead of his.`,
                        `“This is..! Argh… Why they look so identical... “`,
                        `Kali saw the notes front cover has a title called "The Hollow".`,
                        `Out of curiosity, Kali flipped the notebook open.`,
                        `It was written in a diary format, yet the entries were filled with surreal, fictional descriptions.`,
                        `[ Excuse me, sorry to interrupt your reading, but can I have it back..? ]`,
                        `The voice was familiar. Kali looked up to see Kassidy standing in front of him, a forced, nervous smile on her face. In her hand, she held his notebook.`,
                        `[ Here. ] Kali said, handing hers notes back immediately.`,
                        `[ T-Thanks. ] Kassidy exhaled, returning his notebook`,
                        `She turned to leave, but then hesitated. [ Did you read it all? ]`,
                        `[ Almost, I guess... ]`,
                        `[ H-How was it? ] she asked with a small voice.`,
                        `Kali leans his cheek against the palm of his hand as he stared off into the empty street.`,
                        `[ If we're talking about the writing itself, it’s good. Very detailed. ] Kali replied flatly.`,
                        `[ R-Really!? ] Kassidy looked back over her shoulder with eyes lit up, clearly surprised by the compliment.`,
                        `[ Yeah, very detailed to the point where you explain exactly how you eat, sleep, take comfort, and— ]`,
                        `Burning with embarrassment, Kassidy spun around and clapped her hand over his mouth, cutting him off before he could say another word.`,
                        `[ P-Please stop. I'm w-well aware of it. ] she hissed, her face flushed.`,
                        `After a moment of tense silence, she finally pulled her hand away and slumped down onto the bench beside him.`,
                        `The silence of the warped city pressed in on them as they sat on the bench. Kali, unbothered by the social tension he had just created, spoke again.`,
                        `[ Still, I'm curious... Why did you put fictional statements in your diary? Are you trying to add your own fantasies to your daily life? ]`,
                        `Kassidy slightly tilted her head, her long blue hair shifting over her shoulder. She looked at him with a mix of confusion and genuine sincerity.`,
                        `[ Eh? But its real thought... ]`


                ],
                screenshots:{}
        },
        
        {ch:2, title: 'Test', 
                content:[' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tincidunt dolor quis euismod pellentesque. Pellentesque bibendum viverra velit. Integer dictum commodo eros. Sed euismod iaculis gravida. Phasellus pharetra arcu quis nulla placerat, sit amet cursus lectus semper. Sed molestie tellus vel purus feugiat accumsan. Morbi elementum iaculis est sit amet semper. Fusce pharetra orci at molestie semper. Mauris in tincidunt ligula, sed congue metus.',
                        'In pharetra, lectus eu ornare malesuada, arcu mi euismod neque, et feugiat odio lectus vel lorem. Mauris elementum, sapien non cursus aliquet, neque augue mollis ex, at ornare felis enim sed nunc. Maecenas quis libero laoreet, ornare nibh quis, maximus libero. Vestibulum erat felis, fringilla non massa ut, sollicitudin placerat ligula. Etiam in quam metus. Donec aliquet, ex ut cursus tincidunt, augue felis euismod est, non blandit mauris mi vulputate ligula. Aenean facilisis justo eleifend ligula pulvinar finibus. Morbi eget semper ligula. Donec iaculis lorem vitae nisi finibus commodo. Nam condimentum efficitur elit, a dignissim nisi. Fusce bibendum maximus turpis eget imperdiet. Sed aliquam lacinia nisi, eget commodo dolor tempor non. Nunc sit amet feugiat magna. Donec efficitur velit eget nisl aliquam ultrices.',
                        'Proin condimentum rutrum nisl. Maecenas tellus leo, consequat vitae molestie ut, tincidunt sed mi. Aliquam finibus faucibus tellus, non finibus enim sagittis et. Mauris finibus tempus nunc quis ornare. Donec vitae enim a sem blandit tempus. Phasellus sodales diam et nisi convallis, et pharetra ipsum fermentum. In id orci quis nibh finibus euismod eget molestie quam. Praesent fringilla lectus diam, nec rutrum orci blandit vel. Etiam nec maximus turpis, at pretium erat. Duis elementum libero non nunc ornare pretium. Integer tincidunt nulla ac sem eleifend, quis blandit nulla congue. Donec tellus ante, laoreet eget tellus quis, dignissim dictum mi. Curabitur neque ipsum, lobortis et orci id, gravida congue mi. Aenean quis dolor ac lectus ullamcorper sodales ac vel dui. Sed tempus dolor ante, vel eleifend urna imperdiet sit amet. In at condimentum est.',],
                screenshots:{}
        },
        {ch:3, title: 'Test', 
                content:[' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tincidunt dolor quis euismod pellentesque. Pellentesque bibendum viverra velit. Integer dictum commodo eros. Sed euismod iaculis gravida. Phasellus pharetra arcu quis nulla placerat, sit amet cursus lectus semper. Sed molestie tellus vel purus feugiat accumsan. Morbi elementum iaculis est sit amet semper. Fusce pharetra orci at molestie semper. Mauris in tincidunt ligula, sed congue metus.',
                        'In pharetra, lectus eu ornare malesuada, arcu mi euismod neque, et feugiat odio lectus vel lorem. Mauris elementum, sapien non cursus aliquet, neque augue mollis ex, at ornare felis enim sed nunc. Maecenas quis libero laoreet, ornare nibh quis, maximus libero. Vestibulum erat felis, fringilla non massa ut, sollicitudin placerat ligula. Etiam in quam metus. Donec aliquet, ex ut cursus tincidunt, augue felis euismod est, non blandit mauris mi vulputate ligula. Aenean facilisis justo eleifend ligula pulvinar finibus. Morbi eget semper ligula. Donec iaculis lorem vitae nisi finibus commodo. Nam condimentum efficitur elit, a dignissim nisi. Fusce bibendum maximus turpis eget imperdiet. Sed aliquam lacinia nisi, eget commodo dolor tempor non. Nunc sit amet feugiat magna. Donec efficitur velit eget nisl aliquam ultrices.',
                        'Proin condimentum rutrum nisl. Maecenas tellus leo, consequat vitae molestie ut, tincidunt sed mi. Aliquam finibus faucibus tellus, non finibus enim sagittis et. Mauris finibus tempus nunc quis ornare. Donec vitae enim a sem blandit tempus. Phasellus sodales diam et nisi convallis, et pharetra ipsum fermentum. In id orci quis nibh finibus euismod eget molestie quam. Praesent fringilla lectus diam, nec rutrum orci blandit vel. Etiam nec maximus turpis, at pretium erat. Duis elementum libero non nunc ornare pretium. Integer tincidunt nulla ac sem eleifend, quis blandit nulla congue. Donec tellus ante, laoreet eget tellus quis, dignissim dictum mi. Curabitur neque ipsum, lobortis et orci id, gravida congue mi. Aenean quis dolor ac lectus ullamcorper sodales ac vel dui. Sed tempus dolor ante, vel eleifend urna imperdiet sit amet. In at condimentum est.',],
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
