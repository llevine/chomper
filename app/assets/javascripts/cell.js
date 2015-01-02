function Cell(){
	this.active = true;
	this.value = "";
	this.score = 0;
}

Cell.prototype.setState = function(index){
		this.value = triviaConnector[index]['answer'];
		// console.log(this.value);
}

Cell.prototype.render = function(){
	if (this.active === true){
		return this.value;
	}
	else {
		return "cell inactive";
	}
}