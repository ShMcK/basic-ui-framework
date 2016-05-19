import Component from './Component';

export default class InputComponent extends Component {
	constructor(...props) {
		super(...props);
		this.addEvent('submit', 'keyup');
		this.value = '';
	}
	submit(value) {
		console.log(value);
	}
	keyup(event) {
		const key = event.keyCode;
		if (key === 13) {
			this.value = event.target.value;
			this.submit(this.value);
		}
	}
	handleEvent(event) {
		switch (event.type) {
			case 'keyup':
				return this.keyup(event);
			default:
				console.log('event', event);
		}
	}
}
