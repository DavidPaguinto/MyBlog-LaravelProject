import React from 'react';
import {v4 as uuid } from 'uuid';

const NotesContext = React.createContext({
	currentNote: null,
	notes: [
		{id: uuid(), text: 'Eat'},
		{id: uuid(), text: 'Study'},
		{id: uuid(), text: 'Rest'},
		{id: uuid(), text: 'Workout'},
		{id: uuid(), text: 'Rest'},
		{id: uuid(), text: 'Study Again'},
		{id: uuid(), text: 'Play Games'},
		{id: uuid(), text: 'Read'},
		{id: uuid(), text: 'Sleep'}
	]
});

export default NotesContext;

