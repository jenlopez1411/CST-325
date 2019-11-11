/*
 * An object representing a 3x3 matrix
 */

var Matrix3 = function() {

	if (!(this instanceof Matrix3)) {
		alert("Matrix3 constructor must be called with the new operator");
	}

	// Stores a matrix in a flat array - left to right, top to bottom.
	// This format will be similar to what we'll eventually need to provide the WebGL API
	this.elements = new Float32Array(9);

	// Identity Matrix
	for (var index = 0; index < this.elements.length; ++index) {
        this.elements[index] = (index % 3 == Math.floor(index / 3)) ? 1 : 0;
    }
	
	// -------------------------------------------------------------------------
	this.clone = function() {
		// create a new Matrix3 instance that is an exact copy of 'this' one and return it
		var copy = new Matrix3();
		for(var index = 0; index < this.elements.length; index++)
		{
			copy.elements[index] = this.elements[index];
		}
		return copy;
	};

	// -------------------------------------------------------------------------
	this.copy = function(other) {
		// copy all of the elements of other into the elements of 'this' matrix
		for(var index = 0; index < other.elements.length; index++)
		{
			this.elements[index] = other.elements[index];
		}
		return this;
	};

	// -------------------------------------------------------------------------
	this.set = function (e11, e12, e13, e21, e22, e23, e31, e32, e33) {
		
		// given the 9 elements passed in as argument e-row#col#, use
		// them as the values to set on 'this' matrix.
		// Order is left to right, top to bottom.
		for(var index = 0; index < arguments.length; index++)
		{
			this.elements[index] = arguments[index];
		}
		return this;
	};

	// -------------------------------------------------------------------------
	this.getElement = function(row, col) {
		// use the row and col to get the proper index into the 1d element array and return it
		return this.elements[row*3 + col];
		
	};

	this.setElement = function(row, col, val) {
		this.elements[row*3 + col] = val;
		return this;
		
	};

	// -------------------------------------------------------------------------
	this.setIdentity = function() {
		for (var index = 0; index < this.elements.length; ++index) {
			this.elements[index] = (index % 3 == Math.floor(index / 3)) ? 1 : 0;
		}
		return this;
	};

	// -------------------------------------------------------------------------
	this.setRotationX = function(angle) {
		// not required yet, attempt to implement if finished early
		// create a rotation matrix that rotates around the X axis

		// convert to radians
		var radians = angle * Math.PI / 180,
			c = Math.cos(radians),
			s = Math.sin(radians);

		// shortcut - use in place of this.elements
		var e = this.elements;

		// set every element of this matrix to be a rotation around the x-axis
		e[0] = 1;	e[1] = 0.0; e[2] = 0.0;	
		e[3] = 0.0;	e[4] = c;	e[5] = -s;	
		e[6] = 0.0;	e[7] = s;	e[8]= c;
		return this;
	};

	// -------------------------------------------------------------------------
	this.setRotationY = function(angle) {
		// not required yet, attempt to implement if finished early
		// create a rotation matrix that rotates around the Y axis

		// convert to radians
		var radians = angle * Math.PI / 180,
			c = Math.cos(radians),
			s = Math.sin(radians);

		// shortcut - use in place of this.elements
		var e = this.elements;

		// set every element of this matrix to be a rotation around the y-axis
		e[0] = c;	e[1] = 0.0; e[2] = s;	
		e[3] = 0.0;	e[4] = 1.0;	e[5] = 0.0;	
		e[6] = -s;	e[7] = 0.0;	e[8] = c;	

		return this;
	};


	// -------------------------------------------------------------------------
	this.setRotationZ = function(angle) {
		// not required yet, attempt to implement if finished early
		// create a rotation matrix that rotates around the Z axis

		// convert to radians
		var radians = angle * Math.PI / 180,
			c = Math.cos(radians),
			s = Math.sin(radians);

		// shortcut - use in place of this.elements
		var e = this.elements;

		// set every element of this matrix to be a rotation around the z-axis
		e[0] = c;	e[1] = -s;	e[2] = 0.0;	
		e[3] = s;	e[4] = c;	e[5] = 0.0;	
		e[6] = 0.0;	e[7] = 0.0;	e[8]= 1.0;	

		return this;
	};

	// -------------------------------------------------------------------------
	this.multiplyScalar = function(s) {
		for (var index = 0; index < this.elements.length; index++) {
			this.elements[index] = this.elements[index] * s;
		}
		return this;
	};

	// -------------------------------------------------------------------------
	this.multiplyRightSide = function(otherMatrixOnRight) {
		
		// multiply 'this' matrix (on the left) by otherMatrixOnRight (on the right)
		// the results should be applied to the elements on 'this' matrix
		// Using forumula: https://en.wikipedia.org/wiki/Matrix_multiplication#Notation
		var result = new Float32Array(9); 
		for(var i = 0; i < 3; i++)
		{
			for( var j = 0; j < 3; j++)
			{
				for( var k = 0; k < 3; k++)
				{
					result[i*3 + j] +=  this.getElement(i, k) * otherMatrixOnRight.getElement(k, j);
				}
			}
		}
		this.elements = result;
		return this;
	};

	// -------------------------------------------------------------------------
	this.determinant = function() {

		var te = this.elements,			// shorthand for elements of this matrix


			te00 = te[ 0 ], te01 = te[ 1 ], te02 = te[ 2 ], // shorthand for accessing elements in original matrix
			te10 = te[ 3 ], te11 = te[ 4 ], te12 = te[ 5 ], 
			te20 = te[ 6 ], te21 = te[ 7 ], te22 = te[ 8 ],

			determinant = te00*te11*te22 + te01*te12*te20 + te02*te10*te21 - te00*te12*te21 - te01*te10*te22 - te02*te11*te20;
		return determinant; // should be the determinant
	};

	// -------------------------------------------------------------------------
	this.transpose = function() {
		// modify 'this' matrix so that it becomes its transpose
		var trans = new Matrix3();
		for(var row = 0; row < 3; row++)
			{
				for(var col = 0; col < 3; col++)
				{
					// row becomes column and column becomes row in transposed matrix
					trans.setElement(row, col, this.getElement(col, row));
				}
			}
		return this.copy(trans);
	};

	// -------------------------------------------------------------------------
	this.inverse = function() {
		// Based on: http://www.euclideanspace.com/maths/algebra/matrix/functions/inverse/threeD/
		// modify 'this' matrix so that it becomes its inverse
		var m = new Float32Array(9),	// will be used to calculate the results
			te = this.elements,			// shorthand for elements of this matrix


			te00 = te[ 0 ], te01 = te[ 1 ], te02 = te[ 2 ], // shorthand for accessing elements in original matrix
			te10 = te[ 3 ], te11 = te[ 4 ], te12 = te[ 5 ], 
			te20 = te[ 6 ], te21 = te[ 7 ], te22 = te[ 8 ],

			det = this.determinant();
			
			if ( det === 0 ) {
				var msg = "can't invert matrix, determinant is 0";
				console.warn(msg);
				return this.setIdentity();
			}
		detInv = 1/det;
		m[0] = (te11*te22 - te12*te21) *detInv;
		m[1] = (te02*te21 - te01*te22) *detInv;
		m[2] = (te01*te12 - te02*te11) *detInv;
		m[3] = (te12*te20 - te10*te22) *detInv;
		m[4] = (te00*te22 - te02*te20) *detInv;
		m[5] = (te02*te10 - te00*te12) *detInv;
		m[6] = (te10*te21 - te11*te20) *detInv;
		m[7] = (te01*te20 - te00*te21) *detInv;
		m[8] = (te00*te11 - te01*te10) *detInv;


		return this.elements = m;
	};

	// -------------------------------------------------------------------------
	this.log = function() {
		var e = this.elements;
		console.log('[ '+
      '\n ' + e[0]  + ', ' + e[1]  + ', ' + e[2]  +
      '\n ' + e[3]  + ', ' + e[4]  + ', ' + e[5]  +
      '\n ' + e[6]  + ', ' + e[7]  + ', ' + e[8] +
      '\n]'
		);

		return this;
	};
};
