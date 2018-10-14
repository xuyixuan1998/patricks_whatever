module.exports = {
	generateTweet : function(){
		// the giant array of all the collected quotes
		let patrickQuotesArr = ["Is mayonnaise an instrument?", 
				"Maybe a story will cheer you up...Once upon a time there was an ugly barnacle. It was so ugly that everyone died. The end.",
				"I may be stupid but I'm not dumb.",
				"It varies.",
				"I can't understand anything." ,
				"I can't see my forehead.",
				"Well maybe it is stupid, but it's also dumb!",
				"Now that we're men, I changed my underwear.",
				"East? I thought you said Weast!",
				"Hi SpongeBob! Haha SpongeBob? Who's SpongeBob?",
				"Not the way I use them!",
				"Mary had a little lamb, whos fleese was white as, pickle fish lips!",
				"My pickle started off life in a jar...and now it's in one again!",
				"Are you Squidward? That's ok take your time.",
				"Are you Squidward now?",
				"Have I ever not been right?",
				"Liar liar plants for hire.",
				"You would know.",
				"Sandy's a girl?",
				"You know, I wumbo, you wumbo, he, she, we wumbo. Womboed! Wumboing! Wumbology, the study of wumbo! It's first grade, SpongeBob!", 
				"Uh...",
				"I know a lot about head injuries. Believe me.",
				"Being grown-up is boring. Besides, I don't get jazz.",
				"No, this is Patrick.",
				"No, this is Patrick.",
				"No, this is Patrick!",
				"Roses are blue, violets are red, I have to go to the bathroom.",
				"I know! I'll tell you a story!",
				"Two ice creams!",
				"It's okay Rocky, you can go when you feel like it.",
				"Knowledge can never replace friendship. I prefer to be an idiot!",
				"Now all I need is a magic mustache, and all my dreams will have come true!",
				"Oh my, a quarter! I've always wanted a quarter.",
				"Just do what I do when I have problems...SCREAM!",
				"The inner machinations of my mind are an enigma...",
				"We should take Bikini Bottom, and push it somewhere else!",
				"Squidward, you and your nose will definitely not fit in!",
				"You broke my heart. Now I'm going to break something of yours.",
				"Oh no, I broke it!",
				"It's pretty good, Spongebob, but it lacks basic construction, and your perspective leaves a lot to be desired.",
				"Sometimes we have to go deep inside ourselves solve our problems.",
				"Life isn't fair, get used to it!",
				"I don't tell you how to live your life.",
				"They're having a sale on scented pinecones!",
				"What's the matter, is he stupid?",
				"You're right, if I was the mom, this would be kind of shocking.",
				"Whoever's the owner of the white Sudan, you left your lights on.",
				"I know, let's get naked!",
				"Do it again, I wasn't looking!",
				"Here comes a giant fist!",
				"You guys talk funny! Say more words!",
				"You mean like a weenie? OKAY!",
				"Me thinks it's mutton-tastic!",
				"Hey, we are not chicken! OH NO, MY POPCORN!",
				"Is he the badguy?",
				"I am not a Krusty Krab!",
				"Isn't that the red sweaty guy you work for?",
				"I love you.",
				"Kicking! I wanna do some kicking!",
				"I don't think this is the real Spongebob. Just look how yellow he is.",
				"I'm mad. I can't see my forehead.",
				"Nice try Squidward. But there's no Santa Clause here!",
				"I gotta get back to crusting the crab.",
				"That's Mr. Dr. Professor Patrick to you!",
				"Can we say that hats from Texas are dumb?",
				"Firmly grasp it, SpongeBob, firmly grasp it!",
				"But I was looking for ME the whole time! It's the perfect crime!",
				"Don't touch me, I'm sterile.",
				"Uhh...twenty four!",
				"Roger! Without him, the lightbulb will have nothing to warm!",
				"We're not caveman! We have technology!",
				"Squidward! The sky had a baby from my cereal box!",
				"Who're you callin pinhead?",
				"My parents think I'm dumber than a sack of diapers.",
				"Spongebob, I think Squidward's taken this too far. That last snowball had his clarinet in it.",
				"I'm Squidward, I'm Squidward, I'm Squidward Squidward Squidward!",
				"When in doubt, pinky out!",
				"Is he a mermaid?",
				"FINLAND!",
				"I guess you're going to miss the Panty Raid.",
				"You took my only food. Now I'm gonna starve.",
				"Uh...I gotta draw a new battery for this...",
				"This is a hotel?",
				"Boating school?! I thought this was Spanish class!",
				"Pardon my French, but get this thing off me!",
				"Oh boy I love being purple!",
				"Hey, nice place you got here!",
				"That Penny has the most beautiful voice.",
				"Gary?! I thought what we had was special!",
				"I've got the ugly!",
				"I'm always here at double weenie Wednesday.",
				"Marty?! Janet?! Who are you people?!",
				"Yeah. That's the problem with this brand.",
				"Who's a big yellow sponge with holes?!",
				"Psh. Wait'll you see no patrick day!",
				"My ice cream! It's alive!",
				"One watermelon, fresh from the manure field your spookiness!",
				"Squidward, Your ceiling is talking to me!",
				"Another piece of paper.",
				"A doughnut?",
				"Hahaha! Connect the dots! I drawed a horsey.",
				"Yeah, well I'd hate you even if I didn't hate you.",
				"Now if you'll excuse me, it's time for my weekly condiment soaking.",
				"I thought it was some kind of new fashion of cotton candy you wear on your head.",
				"No, Spongebob. That's Italian.",
				"Now all I need is a magic moustache, and all my dreams will have come true!",
				"Hibernation must mean the opposite of beauty sleep...",
				"Spongebob? Where is Leaving Bikini Bottom?",
				"Pretend to be somebody else!",
				"AHHHH! It's the apocalypse! Office products are falling from the sky!",
				"We'd better do what he says, he knows how to grow food.",
				"Wait for you to come back.",
				"Yeah, I get called that a lot.",
				"No, Patrick.",
				"Firmly grasp it!",
				"Firmly grasp it in your hand.",
				"Yeah. You could be bald and have a big nose.",
				"Annoy Squidward day?",
				"Dumb people are always blissfully unaware of how dumb they really are.",
				"All right! Which one of you flatfoots stole my lollypop?",
				"I mean it!",
				"Oh, barnacles!",
				"More time for thinking.",
				"You’re a man now, SpongeBob, and it’s time you started acting like one.",
				"Don’t genius live in lamps?",
				"We're in Squidward's body. No wonder it smells funny in here.",
				"Is Sandy the one I call Mom?",
				"Nonsense, my vocabulary is infinitly expanding!",
				"It’s a vast swirling wonderland of sparkling white pleasure. Let it fill your senses with cascading fluffy pillows of excitement, and comfort, as you’ve never felt before.",
				"Can I have everybody’s attention? I have to use the bathroom.",
				"No, I’m Dirty Dan.",
				"Insurance is what I need for a Crabby Patty.",
				"Where?!",
				"Stupid inflatable pants!",
				"Now you must develop a taste for free-form jazz.",
				"Yeah well, you would know, liar.",
				"Are they laughing at us?",
				"...likes Patrick more than SpongeBob.",
				"Aw, fish paste!",
				"Aw, tartar sauce!",
				"Okay,SpongeBob, you can be Dirty Dan. I just want to be Patrick!",
				"My name is not Rick!",
				"Money can't replace friendship, I'd rather have no money than losing you.",
				"A star on top will complete all the scenery!",
				"I'm so loyal, I haven't bathed in weeks!",
				"You cannot stop the unstoppable.",
				"I thought this place was in bad shape.",
				"We can filter the carbon dioxide through our ballast tanks, refire the engines, and ride the shock wave out of here!",
				"What plan?",
				"Should I start running now?",
				"We're mermaids.",
				"I can't hear you. It's too dark in here.",
				"I gotta put on my teeth and brush my pants!",
				"I can't feel my looking holes!",
				"Two words, SpongeBob, Na-chos.",
				"I've been replaced by a sandwich!",
				"Does this look dangerous?",
				"Well here's your problem! You have it set to M for Mini, when all you have to do is set it to W for Wumbo!",
				"I'm mad, too!"
				];

		let getRita = require('rita');

		let allQuotes = "";

		//shuffle the quotes array
		function shuffleArr(arr){
			for (let i = arr.length-1; i > 0; i--){
				j = Math.floor(Math.random()*(i+1)); // get a random index
				[arr[i], arr[j]] = [arr[j], arr[i]]
			}
			return arr;
		}

		// shuffle array to have the quotes more randomized!
		let shuffledQuotesArr = shuffleArr(patrickQuotesArr);

		// loop through shuffled quotes arr
		for (let i=0; i<shuffledQuotesArr.length; i++){
			//add each quote to the giant string of all quotes
			allQuotes+=shuffledQuotesArr[i]+" ";
		}

		// use rita markov chain
		let rm = getRita.RiMarkov(2);

		// give it the text
		rm.loadText(allQuotes);

		// generate a sentence
		let currentTweet = rm.generateSentence();

		//console.log(currentTweet);

		return currentTweet;
	}
}