function Cell(){
	this.active = true;
}

Cell.prototype.setState = function(answer){
	this.value = answer;
}