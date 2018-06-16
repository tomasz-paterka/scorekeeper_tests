import Player from './Player';
import React from 'react';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
	shallow(<Player />);
});

it('renders correct name', () => {
	const playerNamePassed = 'Ania';
	const playerComponent = shallow(<Player name={playerNamePassed}/>);
	
	const playerNameRendered = playerComponent.find('.Player_name').text();
	
	expect(playerNameRendered).toEqual(playerNamePassed);
});

it('renders correct score', () => {
	const playerScorePassed = 5;
	const playerComponent = shallow(<Player score={playerScorePassed}/>);

	const playerScoreRendered = parseInt(playerComponent.find('.Player_score').text());
	//const playerScoreRendered = Number(playerComponent.find('.Player_score').text());

	expect(playerScoreRendered).toEqual(playerScorePassed);
});

it('should call onPlayerScoreChange with 1 when plus button is clicked', () => {
	const mockedOnPlayerScoreChange = jest.fn();
	const playerComponent = shallow(<Player onPlayerScoreChange={mockedOnPlayerScoreChange} />);

	const plusButton = playerComponent.find('.Player_button').at(0);
	plusButton.simulate('click');
	
	expect(mockedOnPlayerScoreChange).toBeCalledWith(1);
});

it('should call onPlayerScoreChange with -1 when minus button is clicked', () => {
	const mockedOnPlayerScoreChange = jest.fn();
	const playerComponent = shallow(<Player onPlayerScoreChange={mockedOnPlayerScoreChange} />);

	const minusButton = playerComponent.find('.Player_button').at(1);
	minusButton.simulate('click');

	expect(mockedOnPlayerScoreChange).toBeCalledWith(-1);
});

it('should call onPlayerRemove', () => {
	const mockedOnPlayerRemove = jest.fn();
	const playerComponent = shallow(<Player onPlayerRemove={mockedOnPlayerRemove} />);

	const removeButton = playerComponent.find('.Player_button').at(2);
	removeButton.simulate('click');

	expect(mockedOnPlayerRemove).toBeCalledWith();
});