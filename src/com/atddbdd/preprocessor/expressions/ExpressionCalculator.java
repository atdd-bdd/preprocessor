package com.atddbdd.preprocessor.expressions;
import java.math.BigDecimal;

import com.atddbdd.preprocessor.ErrorStrings;
import com.atddbdd.preprocessor.Logging;
import com.udojava.evalex.Expression;
import com.udojava.evalex.Expression.ExpressionException;


public class ExpressionCalculator {

	public static String calculate(String input) {
		String output = input; 
		// if only single value, then just return it 
		if (input.matches("^-?\\d+$"))
			return output; 
		try { 
		 BigDecimal result = null;
		 Expression expression = new Expression(input);
		 result = expression.eval();
		 output = result.toString();
		}
		catch(ExpressionException e) {
			Logging.info(ErrorStrings.CANNOT_EVALUATE + input + " " + e.getMessage());
		}
		
		return output; 
	}





}
