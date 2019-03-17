class Terminal extends React.Component {
  constructor(props) {
    super(props);
    this.state = { submitting: false };
  }

  render() {
    return (
      <div>
        <div className="terminal-text path">∞
          <span className="git-up-to-date"> (master)</span>
        </div>
        <div className="terminal terminal-text command" id="terminal-input" contentEditable="true" data-prefix="> ">
          git annihilate -A
        </div>
      </div>
    )
  }
}

// TODO: Replaces with something that works on divs since we replaced the input element with a div.
// Set the cursor position of the "#terminal-input" element to the end when the page loads.
// Credits: http://blog.vishalon.net/index.php/javascript-getting-and-setting-caret-position-in-textarea/
function setCaretPosition(ctrl, pos) {
  // Modern browsers
  if (ctrl.setSelectionRange) {
    ctrl.focus();
    ctrl.setSelectionRange(pos, pos);
  // IE8 and below
  } else if (ctrl.createTextRange) {
    var range = ctrl.createTextRange();
    range.collapse(true);
    range.moveEnd('character', pos);
    range.moveStart('character', pos);
    range.select();
  }
}

const container = document.querySelector('#terminal');
const terminal = React.createElement(Terminal);
ReactDOM.render(terminal, container);
//const input = document.querySelector('#terminal-input');
//console.log(input.textContent, input.textContent.length);
//setCaretPosition(input, input.textContent.length);
