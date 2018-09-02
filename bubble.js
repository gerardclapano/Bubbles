class Bubble {

	constructor() {

		this.radius = 20;											// size of the bubble
		this.x = random(this.radius, canvas.width-this.radius);		// x-position of bubble
		this.y = random(this.radius, canvas.height-this.radius);	// y-position of bubble
		
	}

	draw() {
		
		ctx.lineWidth = "2";										// sets the thickness of outline of the shape
		ctx.beginPath();											// to begin the path of the shape
		ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);		// declaration of the shape (ellipse)
		ctx.strokeStyle = "#FFFFFF";								// sets the color of the shape to white
		ctx.stroke();												// tells canvas to draw the defined shape above
	}	

	// to make the ellipse move like a bubble
	move() {

		this.x += random(-5, 5);
		this.y += random(-5, 5);

	}

	// prevents the bubble to go over the canvas
	check_border() {

		// prevents the bubble to go over to the left of the canvas
		if(this.x < this.radius) {
			this.x = this.radius;
		}

		// prevents the bubble to go over to the right of the canvas
		if(this.x > canvas.width - this.radius) {
			this.x = canvas.width - this.radius;
		}

		// prevents the bubble to go over the top of the canvas
		if(this.y < this.radius) {
			this.y = this.radius;
		}

		// prevents the bubble to go over the bottom of the canvas
		if(this.y > canvas.height - this.radius) {
			this.y = canvas.height - this.radius;
		}

	}

}

// random number generator that take 2 arguments (min, max)
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}