import React, { Component } from 'react';

export default class NewElem extends Component {
    state = {
        title: ''
      }
      onChange = (e) => {
        this.setState({
          title: e.target.value
        });
      }
      resetInput = () => {
        this.setState({
          title: ''
        })
      }
      render() {
        const { state, onChange, resetInput } = this
        const { title } = this.state;
        const { addList } = this.props;
        return (
          <div>
            <input type="text" value={title} onChange={onChange} />
            <button onClick={addList.bind((this, state), resetInput)}>Button</button>
          </div>
        )
      }
  }