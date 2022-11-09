
/*
Test Plan - input two numbers, compare them and display the larger of the two
	
	Value1		value2		Expected Result
	5			6		6
	4			3		4
	3			3		"The amounts are equal"		They entered numbers, same numbers they are equal
	a			5		"Please enter a number in Value 1"
	5			a		"Please enter a number in Value 2"
	""			5		"Please enter a number in Value 1"
	5			""		"Please enter a number in Value 2"
	-1			5		5
	+34			-30		34
	-5			-6		-5
	5			-1		5
	1.5			2		2
	2			1.5		2
	3/4			1		"Please enter a number in Value 1"	Fractions are not integers or decimal numbers
	5b			3		"Please enter a number in Value 1"
	3			5b		"Please enter a number in Value 2"
	""			5		"Please enter a number in Value 1"
	5			""		"Please enter a number in Value 2"
*/

module.exports = {

    compareNumbers: function ( value1,value2) {

        
        if (value1 > value2) {
            return (value1);
        }else if (isNaN(value1)) {
            return "Please enter a number in Value 1";
         } else if (value1 < value2){
            return (value2);
          } else if (isNaN(value2)){
            return "Please enter a number in Value 2";
        }else if ( value1==value2){
            return "The amounts are equal";

    }
}
};
