# Recieves 100 trivia questions from jservice api and puts them into an array
class TriviaWrapper

	def self.sample(a)
		a = a.sample(30)
		a = a.delete_if { |e|
			e['question'].blank? or e['answer'].blank? or e['value'].blank? or e['question'].include?('VIDEO')
		}
		return a.sample(15)
	end

# ---------------------------
# RANDOM CATEGORIES BY LEVEL |
# ---------------------------
	def self.getLvlOneTrivia()
		levelOne = "http://jservice.io/api/clues?value=100"
		search = HTTParty.get(levelOne)
		self.sample(search)
	end

	def self.getLvlTwoTrivia()
		levelTwo = "http://jservice.io/api/clues?value=200"
		search = HTTParty.get(levelTwo)
		self.sample(search)
	end

	def self.getLvlThreeTrivia()
		levelThree = "http://jservice.io/api/clues?value=300"
		search = HTTParty.get(levelThree)
		self.sample(search)
	end

	def self.getLvlFourTrivia()
		levelFour = "http://jservice.io/api/clues?value=400"
		search = HTTParty.get(levelFour)
		self.sample(search)
	end

	def self.getLvlFiveTrivia()
		levelFive = "http://jservice.io/api/clues?value=500"
		search = HTTParty.get(levelFive)
		self.sample(search)
	end

		def self.getLvlSixTrivia()
		levelSix = "http://jservice.io/api/clues?value=600"
		search = HTTParty.get(levelSix)
		self.sample(search)
	end

	def self.getLvlSevenTrivia()
		levelSeven = "http://jservice.io/api/clues?value=700"
		search = HTTParty.get(levelSeven)
		self.sample(search)
	end

	def self.getLvlEightTrivia()
		levelEight = "http://jservice.io/api/clues?value=800"
		search = HTTParty.get(levelEight)
		self.sample(search)
	end

# ----------------------
# TRIVIA BY CATEGORIES |
# ----------------------

	def self.getPoliticTrivia()
		politic = "http://jservice.io/api/clues?category=1"
		search = HTTParty.get(politic)
		self.sample(search)		
	end

	def self.getBaseballTrivia()
		baseball = "http://jservice.io/api/clues?category=2"
		search = HTTParty.get(baseball)
		self.sample(search)
	end

	def self.getMovieTrivia()
		movie = "http://jservice.io/api/clues?category=4"
		search = HTTParty.get(movie)
		self.sample(search)
	end

	def self.getCatagoryTrivia()
		catagory = "http://jservice.io/api/clues?category=6"
		search = HTTParty.get(catagory)
		self.sample(search)
	end

	def self.getInventionTrivia()
		invention = "http://jservice.io/api/clues?category=13"
		search = HTTParty.get(invention)
		self.sample(search)
	end

end