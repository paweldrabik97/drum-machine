function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}console.clear();

const changeDisplay = value => {
  return {
    type: 'UPDATE',
    value: value };

};

const displayReducer = (state = '', action) => {
  switch (action.type) {
    case 'UPDATE':{
        //console.log(action.value);
        return action.value;
        break;
      }
    default:
      return state;}

};

const store = Redux.createStore(displayReducer);

const Provider = ReactRedux.Provider;
const connect = ReactRedux.connect;

const mapStateToProps = state => {
  return { value: state };
};

const mapDispatchToProps = dispatch => {
  return {
    submitNewDisplay: value => {
      //console.log(value);
      dispatch(changeDisplay(value));
    } };

};


class Pads extends React.Component {
  constructor(props) {
    super(props);_defineProperty(this, "handleKeyPress",











    event => {
      //console.log(event.key);
      this.playSound(event.key.toUpperCase());
      switch (event.key) {
        case 'q':{
            this.props.submitNewDisplay('Heater 1');
            //console.log(event.key.toUpperCase());

            break;
          }
        case 'w':{
            this.props.submitNewDisplay('Heater 2');
            //console.log(event.key.toUpperCase());

            break;
          }
        case 'e':{
            this.props.submitNewDisplay('Heater 3');
            //console.log(event.key.toUpperCase());

            break;
          }
        case 'a':{
            this.props.submitNewDisplay('Heater 4');
            //console.log(event.key.toUpperCase());

            break;
          }
        case 's':{
            this.props.submitNewDisplay('Clap');
            //console.log(event.key.toUpperCase());

            break;
          }
        case 'd':{
            this.props.submitNewDisplay('Open HH');
            //console.log(event.key.toUpperCase());

            break;
          }
        case 'z':{
            this.props.submitNewDisplay("Kick n' Hat");
            //console.log(event.key.toUpperCase());

            break;
          }
        case 'x':{
            this.props.submitNewDisplay('Kick');
            //console.log(event.key.toUpperCase());

            break;
          }
        case 'c':{
            this.props.submitNewDisplay('Closed HH');
            //console.log(event.key.toUpperCase());

            break;
          }}

    });this.handleClick = this.handleClick.bind(this);}handleClick(event) {//console.log(event.target.id)
    this.props.submitNewDisplay(event.target.id);console.log(document.getElementById(event.target.id).textContent);this.playSound(document.getElementById(event.target.id).textContent);}
  playSound(id) {
    console.log(id);
    const sound = document.getElementById(id);
    sound.currentTime = 0;
    sound.play();
  }

  render() {
    return /*#__PURE__*/(
      React.createElement("div", { className: "pads", onKeyDown: e => this.handleKeyPress(e) }, /*#__PURE__*/
      React.createElement("div", null, /*#__PURE__*/
      React.createElement("button", { id: "Heater 1", className: "drum-pad btn btn-light", onClick: this.handleClick }, /*#__PURE__*/React.createElement("audio", { src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3", className: "clip", id: "Q", preload: "auto" }), "Q"), /*#__PURE__*/
      React.createElement("button", { id: "Heater 2", className: "drum-pad btn btn-light", onClick: this.handleClick }, /*#__PURE__*/React.createElement("audio", { src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3", className: "clip", id: "W", preload: "auto" }), "W"), /*#__PURE__*/
      React.createElement("button", { id: "Heater 3", className: "drum-pad btn btn-light", onClick: this.handleClick }, /*#__PURE__*/React.createElement("audio", { src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3", className: "clip", id: "E", preload: "auto" }), "E")), /*#__PURE__*/

      React.createElement("div", null, /*#__PURE__*/
      React.createElement("button", { id: "Heater 4", className: "drum-pad btn btn-light", onClick: this.handleClick }, /*#__PURE__*/React.createElement("audio", { src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3", className: "clip", id: "A", preload: "auto" }), "A"), /*#__PURE__*/
      React.createElement("button", { id: "Clap", className: "drum-pad btn btn-light", onClick: this.handleClick }, /*#__PURE__*/React.createElement("audio", { src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3", className: "clip", id: "S", preload: "auto" }), "S"), /*#__PURE__*/
      React.createElement("button", { id: "Open HH", className: "drum-pad btn btn-light", onClick: this.handleClick }, /*#__PURE__*/React.createElement("audio", { src: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3", className: "clip", id: "D", preload: "auto" }), "D")), /*#__PURE__*/

      React.createElement("div", null, /*#__PURE__*/
      React.createElement("button", { id: "Kick n' Hat", className: "drum-pad btn btn-light", onClick: this.handleClick }, /*#__PURE__*/React.createElement("audio", { src: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3", className: "clip", id: "Z", preload: "auto" }), "Z"), /*#__PURE__*/
      React.createElement("button", { id: "Kick", className: "drum-pad btn btn-light", onClick: this.handleClick }, /*#__PURE__*/React.createElement("audio", { src: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3", className: "clip", id: "X", preload: "auto" }), "X"), /*#__PURE__*/
      React.createElement("button", { id: "Closed HH", className: "drum-pad btn btn-light", onClick: this.handleClick }, /*#__PURE__*/React.createElement("audio", { src: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3", className: "clip", id: "C", preload: "auto" }), "C"))));




  }}
;

class Display extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return /*#__PURE__*/(
      React.createElement("div", { id: "display" }, /*#__PURE__*/
      React.createElement("h3", null, this.props.value)));


  }}
;

const PadsContainer = connect(mapStateToProps, mapDispatchToProps, null, { forwardRef: true })(Pads);

const DisplayContainer = connect(mapStateToProps, mapDispatchToProps, null, { forwardRef: true })(Display);


class DrumMachine extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return /*#__PURE__*/(
      React.createElement(React.Fragment, null, /*#__PURE__*/
      React.createElement(Provider, { store: store }, /*#__PURE__*/
      React.createElement(PadsContainer, null)), /*#__PURE__*/

      React.createElement(Provider, { store: store }, /*#__PURE__*/
      React.createElement(DisplayContainer, null))));



  }}
;

ReactDOM.render( /*#__PURE__*/
React.createElement(DrumMachine, null),
document.getElementById('drum-machine'));