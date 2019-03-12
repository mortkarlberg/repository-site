class Terminal extends React.Component {
  constructor(props) {
    super(props);
    this.state = { submitting: false };
  }

  /*
    non-editable prefix ">" scss: http://jsfiddle.net/fsrc0o8n/
  
    <div class='tArea' contenteditable=true data-fixedtitle='> '> git annihilate -a</div>
  
    scss

    .tArea{ font:20px/1.2 arial; border:1px solid #CCC; padding:1em; margin:1em; height:5em; overflow:auto;
    &::before{ content:attr(data-fixedtitle); color:red; }
    > span{ float:left; color:red; }
    > p{ margin:0; padding:0; }
    }
  */

  /*
    TODO:
    - autofocus only works on input elements, needs to be solved with js
    - auto line break when overflowing width
    - clean up, remove markup, comments and unused css
    - fix build/git structure, folder www generated and src checked in?
  */

  render() {
    // return (
    //   <textarea className="terminal terminal-text command"  defaultValue='∞ (master)&#13;&#10;> git annihilate -A' autoFocus />
    // );
    return (
      <div>
        <div className="terminal-text path">∞
          <span className="git-up-to-date"> (master)</span>
        </div>
        <div className="tArea terminal terminal-text command" contentEditable="true" autoFocus="true" data-prefix="> ">
          git annihilate -A
        </div>
      </div>
    )
  }
}

const container = document.querySelector('#terminal');
const terminal = React.createElement(Terminal);
ReactDOM.render(terminal, container);
