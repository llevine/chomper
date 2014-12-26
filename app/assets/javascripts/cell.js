function Cell(){
	this.active = true;
	this.value = "";
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