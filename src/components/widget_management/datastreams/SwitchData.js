class SwitchData {
  constructor(){
    this.widget_type="switch"
    this.pin=-1
    this.pinMode="output"
    this.signal="digital"
    this.state=0
  }
  setState (state) { this.state = state }
}

export default SwitchData;