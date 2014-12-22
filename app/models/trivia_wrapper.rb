# Recieves 100 trivia questions from jservice api and puts them into an array
class TriviaWrapper

# ---------------------------
# RANDOM CATEGORIES BY LEVEL |
# ---------------------------
	def self.getLvlOneTrivia()
		levelOne = "http://jservice.io/api/clues?value=100"
		search = HTTParty.get(levelOne)
		search.sample(15)
	end

	def self.getLvlTwoTrivia()
		levelTwo = "http://jservice.io/api/clues?value=200"
		search = HTTParty.get(levelTwo)
		search.sample(15)
	end

	def self.getLvlThreeTrivia()
		levelThree = "http://jservice.io/api/clues?value=300"
		search = HTTParty.get(levelThree)
		search.sample(15)
	end

	def self.getLvlFourTrivia()
		levelFour = "http://jservice.io/api/clues?value=400"
		search = HTTParty.get(levelFour)
		search.sample(15)
	end

	def self.getLvlFiveTrivia()
		levelFive = "http://jservice.io/api/clues?value=500"
		search = HTTParty.get(levelFive)
		search.sample(15)
	end

		def self.getLvlSixTrivia()
		levelSix = "http://jservice.io/api/clues?value=600"
		search = HTTParty.get(levelSix)
		search.sample(15)
	end

	def self.getLvlSevenTrivia()
		levelSeven = "http://jservice.io/api/clues?value=700"
		search = HTTParty.get(levelSeven)
		search.sample(15)
	end

	def self.getLvlEightTrivia()
		levelEight = "http://jservice.io/api/clues?value=800"
		search = HTTParty.get(levelEight)
		search.sample(15)
	end

# ----------------------
# TRIVIA BY CATEGORIES |
# ----------------------

	def self.getPoliticTrivia()
		politic = "http://jservice.io/api/clues?category=1"
		search = HTTParty.get(politic)
		search.sample(15)		
	end

	def self.getBaseballTrivia()
		baseball = "http://jservice.io/api/clues?category=2"
		search = HTTParty.get(baseball)
		search.sample(15)
	end

	def self.getMovieTrivia()
		movie = "http://jservice.io/api/clues?category=4"
		search = HTTParty.get(movie)
		search.sample(15)
	end

	def self.getCatagoryTrivia()
		catagory = "http://jservice.io/api/clues?category=6"
		search = HTTParty.get(catagory)
		search.sample(15)
	end

	def self.getInventionTrivia()
		invention = "http://jservice.io/api/clues?category=13"
		search = HTTParty.get(invention)
		search.sample(15)
	end

end