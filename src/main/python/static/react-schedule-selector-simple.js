import ScheduleSelector from 'react-schedule-selector'

class App extends React.Component {
	state = { schedule = [] }

	handleChange = newSchedule => {
		this.setState({ schedule: newSchedule })
	}

	render() {
		return (
			<ScheduleSelector
				selection={this.state.schedule}
				onChange={this.handleChange}
			/>
		)
	}
}