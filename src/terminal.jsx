class Terminal extends React.Component {
  constructor(props) {
    super(props);
    this.state = { submitting: false };
  }

  /*
    TODO:
    - autofocus only works on input elements, needs to be solved with js
    - clean up, remove markup, comments and unused css
    - fix build/git structure, folder www generated and src checked in?
  */

  render() {
    return (
      <div>
        <div className="terminal-text path">∞
          <span className="git-up-to-date"> (master)</span>
        </div>
        <div className="tArea terminal terminal-text command" id="terminal-input" contentEditable="true" data-prefix="> ">
          git annihilate -A
        </div>
      </div>
    )
  }
}

// Set the cursor position of the "#terminal-input" element to the end when the page loads.
// Credits: http://blog.vishalon.net/index.php/javascript-getting-and-setting-caret-position-in-textarea/
function setCaretPosition(ctrl, pos) {
  console.log(pos);
  // Modern browsers
  if (ctrl.setSelectionRange) {
    console.log("modern:", pos);
    ctrl.focus();
    ctrl.setSelectionRange(pos, pos);
  // IE8 and below
  } else if (ctrl.createTextRange) {
    console.log("ie8:", pos);
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
const input = document.querySelector('#terminal-input');
console.log(input.textContent, input.textContent.length);
setCaretPosition(input, input.textContent.length);
