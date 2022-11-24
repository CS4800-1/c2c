import React from "react";
import ScheduleSelector from "react-schedule-selector";
import "../static/availabilitybox.css";

class App extends React.Component {
  state = { schedule: [] }; // state is a list of user-selected dates

  handleChange = (newSchedule) => {
    this.setState({ schedule: newSchedule });
  }; // update state after user makes a change

  // On the left, I use an active ScheduleSelector to allow users to input their availabilities;
  // On the right, I use a series of disabled ScheduleSelectors to display people's availabilities
  // Since ScheduleSelector as defined in the package only allows for 2 colors - unselectedd and selected -
  // I have to use multiple ScheduleSelectors placed on top of each other to generate a heatmap of availabilities.
  render() {
    return (
      <div class="ui container main">
        <h1 class="ui center aligned header">When2Meet for CS 279</h1> <br></br>
        <div class="ui grid">
          <div class="eight wide column">
            <h>Your Availability</h>
            <div class="legend">
              Available <div class="availabiliity"></div>
              Unavailable <div class="unavailabiliity"></div>
            </div>

            <ScheduleSelector
              selection={this.state.schedule}
              startDate={new Date("Wed Oct 19 2022")}
              dateFormat={"M/D ddd"}
              numDays={5}
              minTime={10}
              maxTime={15}
              hourlyChunks={1}
              timeFormat={"h:mm a"}
              onChange={this.handleChange}
              unselectedColor={"rgba(250, 223, 223, 1)"}
              selectedColor={"rgba(82, 150, 42, 1)"}
            />
          </div>

          <div class="eight wide column">
            <div class="layer">
              <h>Group's Availability</h>
              <div class="legend">
                Available 0/4
                <div class="gradient-0"></div>
                <div class="gradient-1"></div>
                <div class="gradient-null"></div>
                <div class="gradient-null"></div>
                <div class="gradient-null"></div>
                Available 4/4
              </div>
              <ScheduleSelector
                selection={[
                  new Date("Wed Oct 19 2022 11:00:00"),
                  new Date("Wed Oct 19 2022 12:00:00"),
                  new Date("Fri Oct 21 2022 11:00:00"),
                  new Date("Fri Oct 21 2022 12:00:00"),
                  new Date("Fri Oct 21 2022 13:00:00"),
                ]}
                startDate={new Date("Wed Oct 19 2022")}
                dateFormat={"M/D ddd"}
                numDays={5}
                minTime={10}
                maxTime={15}
                hourlyChunks={1}
                timeFormat={"h:mm a"}
                onChange={this.nullHandleChange}
                unselectedColor={"rgba(0, 0, 0, 0.03)"}
                selectedColor={"rgba(82, 150, 42, 0.25)"}
              />
            </div>

            <div class="layer">
              <h>Group's Availability</h>
              <div class="legend">
                Available 0/4
                <div class="gradient-null"></div>
                <div class="gradient-null"></div>
                <div class="gradient-2"></div>
                <div class="gradient-null"></div>
                <div class="gradient-null"></div>
                Available 4/4
              </div>
              <ScheduleSelector
                selection={[
                  new Date("Fri Oct 21 2022 12:00:00"),
                  new Date("Fri Oct 21 2022 13:00:00"),
                  new Date("Sat Oct 22 2022 13:00:00"),
                  new Date("Sat Oct 22 2022 14:00:00"),
                ]}
                startDate={new Date("Wed Oct 19 2022")}
                dateFormat={"M/D ddd"}
                numDays={5}
                minTime={10}
                maxTime={15}
                hourlyChunks={1}
                timeFormat={"h:mm a"}
                onChange={this.nullHandleChange}
                unselectedColor={"rgba(0, 0, 0, 0.0)"}
                selectedColor={"rgba(82, 150, 42, 0.25)"}
              />
            </div>
            <div class="layer">
              <h>Group's Availability</h>
              <div class="legend">
                Available 0/4
                <div class="gradient-null"></div>
                <div class="gradient-null"></div>
                <div class="gradient-null"></div>
                <div class="gradient-3"></div>
                <div class="gradient-null"></div>
                Available 4/4
              </div>
              <ScheduleSelector
                selection={[
                  new Date("Fri Oct 21 2022 13:00:00"),
                  new Date("Fri Oct 21 2022 14:00:00"),
                  new Date("Sun Oct 23 2022 14:00:00"),
                ]}
                startDate={new Date("Wed Oct 19 2022")}
                dateFormat={"M/D ddd"}
                numDays={5}
                minTime={10}
                maxTime={15}
                hourlyChunks={1}
                timeFormat={"h:mm a"}
                onChange={this.nullHandleChange}
                unselectedColor={"rgba(0, 0, 0, 0.0)"}
                selectedColor={"rgba(82, 150, 42, 0.25)"}
              />
            </div>
            <div class="layer">
              <h>Group's Availability</h>
              <div class="legend">
                Available 0/4
                <div class="gradient-null"></div>
                <div class="gradient-null"></div>
                <div class="gradient-null"></div>
                <div class="gradient-null"></div>
                <div class="gradient-4"></div>
                Available 4/4
              </div>
              <ScheduleSelector
                selection={this.state.schedule}
                startDate={new Date("Wed Oct 19 2022")}
                dateFormat={"M/D ddd"}
                numDays={5}
                minTime={10}
                maxTime={15}
                hourlyChunks={1}
                timeFormat={"h:mm a"}
                onChange={this.nullHandleChange}
                unselectedColor={"rgba(0, 0, 0, 0.0)"}
                selectedColor={"rgba(82, 150, 42, 0.25)"}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
