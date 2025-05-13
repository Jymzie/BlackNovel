
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
 const novels = [{ id: 0, title: 'COMA', sound:'/BeginAgain.mp3', cover:'coma', summary:'A nihilist once said, "We born to die". Kali was born without feeling any emotions and see the world as nothing but a blank canvas. He would be glad if he die just to escape the dullness of his reality, until the day he stumble into something odd. He suddenly felt the emotion called fear for the first time.',
  chapters:[{ch:1, title: 'Hollow', 
                content:['To a bleached space of nothingness, there was a man in a suit walking aimlessly.',
                        'He has a short-scruffy-red hair with a skin color of a beige like every person do.',
                        'Clueless, tired nor aware of how long he would wander.',
                        'From far away, he saw a black figure.',
                        'He walk towards it and saw a dimesional crack like a wormhole.',
                        'Curious yet fearless, he step closer to the entrance to take a peek.',
                        'But before he knew, his already on the other side.',
                        'Things are getting slightly visible in front of him.',
                        'It might be blurry, but in front of him, he saw a person sitting on the floor.',
                        'That person seems configuring something, he takes another step to see.',
                        'The noise of his step makes the person turned around immediately.',
                        'He saw the person is chewing something.',
                        'His mouth is so full that it would spill a portion of what he is chewing.',
                        'The strange person suddenly crawls towards him.',
                        'As the person move towards him, he notice that there’s another person lying at its back.',
                        'He startled when he noticed that person got dismembered.',
                        'He realized that its remains are now being chewed by this cannibalistic entity.',
                        'He rushes through the entrance, but a transparent-solid like object is blocking it.',
                        'He tries to force his way, but it won’t let him go to the other side.',
                        'The cannibalistic entity pounce at him with it fangs ready to bite.',
                        'He steps aside and avoided the cannibalistic entity.',
                        'There’s no choice for him but to move forward to the pitch-black room.',
                        'Even he won’t see a single thing, he didn’t stop and run.',
                        'He can feel a dozen of corpses on his feet, with their rotting smell leaking through each step.',
                        'Someone suddenly grasped his feet.',
                        'He struggles to free his feet, but he got pulled instead that brings him down.',
                        'Countless of arms grasped his entire body, pulling at every opposite ends.',
                        'The bite of countless cannibals made him scream.',
                        'He suddenly saw a light from afar.',
                        'He uses all his might to struggle and forcibly pull his flesh out of their fangs.',
                        'Agonizing it would be, but he keeps on crawling until he reach the light.',
                        'He woke up in shock and found himself lying beneath the tree.',
                        'Exhausted and sweating coldly from his wake.',
                        'He made a deep breath and took his handkerchief from his pocket to wipe the sweat from his face.',
                        'He picked up the notebook beside him and opens it.',
                        '“ Oh… It seems nothing came to my mind today… ” ',
                        'He went in the classroom and quietly writes his novel on his table.',
                        'Suddenly, a black curly haired guy approached him, sitting on his table just to interrupt his work.',
                        '[ Hey, Kali! Wanna hangout today? ]',
                        "[ Sorry Wigen, but I don't have time for- ]",
                        'Wigen didn’t let Kali to finish his word and immediately reply with a smiling face.',
                        '[ Ok, Let’s meet at the park. ]',
                        '[ I said, I don’t have- ]',
                        'Once again, Wigen ignored Kali’s words with a smiling face.',
                        '[ I’ll be waiting, Kali. ]',
                        'Wigen immediately went out of the classroom. ',
                        '“Sight… What a pain. “',
                        'After the class have ended, Kali went to a place where he can find peace, to the library.',
                        'He sits on the empty table and takes out his note to compose his novel. The silence of the room keeps him relaxed and remains in focus.',
                        'Few moments later, Kali heard the door’s creak, he looked at the entrance and saw a blue long-haired pale skinned girl coming inside the library.',
                        'The girl notices him, and they make eye contact with each other.',
                        'Kali immediately takes his eyes off and continues to compose.',
                        'The girl passes through him and takes a slight peek on his work. The girl asks him if she can share the table with him.',
                        '[ Excuse me. Can I sit here? ]',
                        '[ … Yeah… sure. ]',
                        'The girl sits beside him and keeps staring at his work. Kali notices the girl staring his way, his mind immediately went blank that refrains himself from writing.',
                        'The girl notice that she made Kali uncomfortable.',
                        '[ Oh, pardon…]',
                        '[ No, it’s fine. ]',
                        '[ Sorry if I peek at your work, but… can I have closer look? ]',
                        '[ Well, you can but...]',
                        '[ Really!? Thank you! ] ',
			"The girl went closer to Kali to see his novel to the point that she's already getting touchy with him. Kali move aside to give her some space.",
                        '[ …Its still vague and full of loop holes, I don’t think you would enjoy it. ]',
			'The girl went quiet, and her gaze suddenly went sharp and serious. The girl suddenly ask him a strange question.',
                        '[ Hey... Are this stories are made up or did it really happens? ]',
			"The question startled him that he can't give an immediate answer. The girl stare at him seriously while waiting for his answer.",
			"[...Maybe... It's just a made up stories, that my imagination creates, a part of dreams that I remember.]",
                        'The girl smiles at Kali and said...',
                        '[ I see... Interesting... May I know your name? ]',
                        '[ … Kali. ]',
                        "[ Hmm… My name is Kassidy. Nice to meet you Kali. I'll be looking forward to the story you'll make from now on. ]",
                        'Kassidy faced him with an enticing expression. Kali replied...',
                        '[ … Gladly... ]',
                        'Suddenly, Wigen barged in that startled everyone within the library.',
                        'Exhausted and covered in sweat. Wigen approached Kali with a pissed look.',
                        '[ So that’s why you can’t be seen because you’re flirting with a girl! ]',
                        '[ Sight… I told you I won’t- ]',
                        '[ Anyways, let’s go! ]',
                        'Wigen grabbed Kali’s hand, forcing him to accompany him.',
                        'As they leaving the library, Kali tun around and took a glimpse of Kassidy waving at him and sent a silent message out of her lips.',
                        '[ Let’s meet again next time. ] '


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
