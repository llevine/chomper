User.destroy_all
Game.destroy_all
Achievement.destroy_all

User.create({
	username: "llevine",
	first_name: "Lauren",
	last_name: "Levine",
	birthday: "1/8/1986",
	password: "lauren",
	password_confirmation: "lauren",
	avatar: "https://placeholdr-app.herokuapp.com/boards/15/200/200"
	})

User.create({
	username: "nshah",
	first_name: "Nidhi",
	last_name: "Shah",
	birthday: "1/8/1986",
	password: "nidhi",
	password_confirmation: "nidhi",
	avatar: "https://placeholdr-app.herokuapp.com/boards/15/200/200"
	})

User.create({
	username: "mhuang",
	first_name: "Margaret",
	last_name: "Huang",
	birthday: "1/8/1986",
	password: "margaret",
	password_confirmation: "margaret",
	avatar: "https://placeholdr-app.herokuapp.com/boards/15/200/200"
	})