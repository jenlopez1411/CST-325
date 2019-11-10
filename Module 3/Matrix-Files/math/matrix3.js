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
		// todo
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
		// todo
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
		return this;
	};

	// -------------------------------------------------------------------------
	this.setRotationY = function(angle) {
		// not required yet, attempt to implement if finished early
		// create a rotation matrix that rotates around the Y axis
		return this;
	};


	// -------------------------------------------------------------------------
	this.setRotationZ = function(angle) {
		// not required yet, attempt to implement if finished early
		// create a rotation matrix that rotates around the Z axis
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
		// todo
		// multiply 'this' matrix (on the left) by otherMatrixOnRight (on the right)
		// the results should be applied to the elements on 'this' matrix
		
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
		var aDet = this.getElement(1,1) * this.getElement(2,2) - this.getElement(1,2) * this.getElement(2,1);
		var bDet = this.getElement(1,0) * this.getElement(2,2) - this.getElement(1,2) * this.getElement(2,0);
		var cDet = this.getElement(1,0) * this.getElement(2,1) - this.getElement(1,1) * this.getElement(2,0);
		var determinant = aDet - bDet + cDet;
		return determinant; // should be the determinant
	};

	// -------------------------------------------------------------------------
	this.transpose = function() {
		// todo
		// modify 'this' matrix so that it becomes its transpose
		var trans = new Matrix3();
		for(var row = 0; row < 3; row++)
			{
				for(var col = 0; col < 3; col++)
				{
					trans.setElement(row, col, this.getElement(col, row));
				}
			}
		return this.copy(trans);
	};

	// -------------------------------------------------------------------------
	this.inverse = function() {
		// todo
		// modify 'this' matrix so that it becomes its inverse
		return this;
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
