import { shallow, mount } from 'enzyme';

import ListItem from '../components/pagination/ListItem';
import ListItemActive from '../components/pagination/ListItemActive';


describe('Pagination normal page item', () => {

	it('Shows page number', () => {
		const listItem = mount(<ListItem page="3" />);
		expect(listItem.find('li').text()).toEqual("3");
	})

})

describe('Pagination active page item', () => {

	it('Shows active page number', () => {
		  const listActive = shallow(<ListItemActive page="3" />);
		  expect(listActive.find('li').text()).toEqual("3");
	});

	it('Shows active class', () => {
		const listActive = shallow(<ListItemActive />);
		expect(listActive.find('li').hasClass('active')).toEqual(true);
	})

});
