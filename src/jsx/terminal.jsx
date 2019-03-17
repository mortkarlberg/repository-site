class Terminal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: true,
      command: props.command || ""
    };
  }

  componentDidMount() {
    if(!this.state.active)
      return;

    const el = document.getElementById("terminal-input");
    const range = document.createRange();
    const sel = window.getSelection();
    const offset = this.state.command ? this.state.command.length : 0;
    range.setStart(el.childNodes[0], offset);
    range.collapse(true);
    sel.removeAllRanges();
    sel.addRange(range);
  }

  render() {
    return (
      <div>
        <div className="terminal-text path">∞
          <span className="git-up-to-date"> (master)</span>
        </div>
        <div className="terminal terminal-text command" id="terminal-input" contentEditable="true" data-prefix="> ">
          {this.state.command || <span></span>}
        </div>
      </div>
    )
  }
}

const container = document.querySelector('#terminal');
const terminal = <Terminal command="git annihilate -A" />
ReactDOM.render(terminal, container);
