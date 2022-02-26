package com.devsuperior.dscatalog.resources.exceptions;

import java.util.List;
import java.io.Serializable;
import java.util.ArrayList;

public class ValidationError extends StandardError implements Serializable {
	private static final long serialVersionUID = 1L;
	
	private List<FieldMessage> errors = new ArrayList<>();

	public List<FieldMessage> getErrors() {
		return errors;
	}
	
	public void addError(String fieldName, String message) {
		errors.add(new FieldMessage(fieldName, message));
	}
}
