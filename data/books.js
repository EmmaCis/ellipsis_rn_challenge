const books = [
	  {
		"id": 1,
		"name": "The Power of HABIT",
		"description": "The Power of HABIT: Why We Do What We Do in Life and Business. A young woman walks into a laboratory. Over the past two years, she has transformed almost every aspect of her life.",
		"price": 1600,
		"author": "Charles Duhigg",
		"type": "hardcover",
		"img": "https://images-na.ssl-images-amazon.com/images/I/51ejXdSceNL._AA300_.jpg",
		"inCart": false,
		"category": "business"
	  },
	  {
		"id": 2,
		"name": "Think and Grow Rich",
		"description": "'Think and Grow Rich!' explains entrepreneur Andrew Carnegie’s secret to success, revealed to Napoleon Hill during private interviews with Carnegie, the richest man of his time.",
		"price": 800,
		"author": "Napoleon Hill",
		"type": "hardcover",
		"img": "https://images-na.ssl-images-amazon.com/images/I/51ZouHoBGtL._SX315_BO1,204,203,200_.jpg",
		"inCart": false,
		"category": "business"
	  },
	  {
		"id": 3,
		"name": "The 7 Habits of Highly Effective People",
		"description": "The 7 Habits of Highly Effective People: Powerful Lessons in Personal Change. The 7 Habits of Highly Effective People, the beloved classic that has sold over 20 million copies worldwide, ",
		"price": 1100,
		"author": "Stephen R. Covey",
		"type": "paperback",
		"img": "https://images-na.ssl-images-amazon.com/images/I/51Myx6jMujL._AA300_.jpg",
		"inCart": false,
		"category": "business"
	  },
	  {
		"id": 4,
		"name": "Principles: Life and Work",
		"description": "In Principles, Dalio shares what he's learned over the course of his remarkable career. He argues that life, management, economics, and investing can all be systemized into rules and understood like machines.",
		"price": 1800,
		"author": "Ray Dalio",
		"type": "hardcover",
		"img": "https://images-na.ssl-images-amazon.com/images/I/51UyMOpP%2BGL._AA300_.jpg",
		"inCart": false,
		"category": "business"
	  },
	  {
		"id": 5,
		"name": "How to Win Friends & Influence People",
		"description": "For more than sixty years the rock-solid, time-tested advice in this book has carried thousands of now famous people up the ladder of success in their business and personal lives.",
		"price": 900,
		"author": "Dale Carnegie",
		"type": "paperback",
		"img": "https://images-na.ssl-images-amazon.com/images/I/51PWIy1rHUL._AA300_.jpg",
		"inCart": false,
		"category": "business"
	  },
	  {
		"id": 6,
		"name": "The Whole 30",
		"description": "Since 2009, Melissa Hartwig’s critically-acclaimed Whole30 program has quietly led hundreds of thousands of people to effortless weight loss and better health—along with stunning improvements in sleep quality.",
		"price": 1800,
		"author": "Melissa Hartwig",
		"type": "hardcover",
		"img": "https://images-na.ssl-images-amazon.com/images/I/61WFjEDBktL._SX437_BO1,204,203,200_.jpg",
		"inCart": false,
		"category": "cookbooks"
	  },
	  {
		"id": 7,
		"name": "The Food Lab",
		"description": "Ever wondered how to pan-fry a steak with a charred crust and an interior that's perfectly medium-rare from edge to edge when you cut into it?",
		"price": 3300,
		"author": "J. Kenji López-Alt",
		"type": "harcover",
		"img": "https://images-na.ssl-images-amazon.com/images/I/419aGgQt-5L._SX392_BO1,204,203,200_.jpg",
		"inCart": false,
		"category": "cookbooks"
	  },
	  {
		"id": 10,
		"name": "True Fiction (Ian Ludlow Thrillers)",
		"description": "A breakneck thriller where truth and fiction collide for the unluckiest writer alive.",
		"price": 400,
		"author": "Lee Goldberg",
		"type": "kindle",
		"img": "https://images-na.ssl-images-amazon.com/images/I/51UbplnqSgL._SX331_BO1,204,203,200_.jpg",
		"inCart": false,
		"category": "mystery"
	  },
	  {
		"id": 11,
		"name": "The Last Move",
		"description": "An FBI agent must catch a copycat killer. The only difference this time: she's the final victim.",
		"price": 700,
		"author": "Mary Burton",
		"type": "paperback",
		"img": "https://images-na.ssl-images-amazon.com/images/I/514jRDA21TL._AA300_.jpg",
		"inCart": false,
		"category": "mystery"
	  },
	  {
		"id": 12,
		"name": "Stillhouse Lake (Stillhouse Lake Series)",
		"description": "Gina Royal is the definition of average—a shy Midwestern housewife with a happy marriage and two adorable children. ",
		"price": 800,
		"author": "Rachel Caine",
		"type": "paperback",
		"img": "https://images-na.ssl-images-amazon.com/images/I/41RTt7alEqL._SX332_BO1,204,203,200_.jpg",
		"inCart": false,
		"category": "mystery"
	  },
	  {
		"id": 16,
		"name": "Harry Potter and the Sorcerer's Stone",
		"description": "On Harry's eleventh birthday, a great beetle-eyed giant of a man called Rubeus Hagrid bursts in with some astonishing news: Harry Potter is a wizard,",
		"price": 2400,
		"author": "J.K.Rowling",
		"type": "hardcover",
		"img": "https://images-na.ssl-images-amazon.com/images/I/51qlgJ6ZojL.jpg",
		"inCart": false,
		"category": "scifi"
	  },
	  {
		"id": 17,
		"name": "A Game of Thrones: A Song of Ice and Fire, Book 1",
		"description": "As a whole, this series comprises a genuine masterpiece of modern fantasy, bringing together the best the genre has to offer. Magic, mystery, intrigue,",
		"price": 2500,
		"author": "George R. R. Martin",
		"type": "hardcover",
		"img": "https://images-na.ssl-images-amazon.com/images/I/51n5SAiAz7L._AA300_.jpg",
		"inCart": false,
		"category": "accessories"
	  },
	  {
		"id": 18,
		"name": "The Lord of the Rings: One Volume",
		"description": "In ancient times the Rings of Power were crafted by the Elven-smiths, and Sauron, the Dark Lord, forged the One Ring, ",
		"price": 2700,
		"author": "J.R.R. Tolkien",
		"type": "hardcover",
		"img": "https://images-na.ssl-images-amazon.com/images/I/51d4G0sFMzL.jpg",
		"inCart": false,
		"category": "scifi"
	  }
	]
  

export default books;