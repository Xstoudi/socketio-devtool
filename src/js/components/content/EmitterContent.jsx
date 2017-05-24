import React from 'react'

export default class EmitterContent extends React.Component {

    constructor() {
        super()

        this.emitContentType = 'plaintext'

        this._emit = this._emit.bind(this)
        this._clear = this._clear.bind(this)
    }

    render() {
        return (
            <div className="emitter-content">
                <h2>Emitter</h2>
                <div className="emitter-form">
                    <input ref={input => this.eventNameInput = input} className="input" placeholder="Event name" type="text" />
                    <button className="button btn-info" style={{marginRight: "10px"}} onClick={this._emit} >Emit</button>
                    <button className="button btn-danger" onClick={this._clear} >Clear</button>
                </div>
                <div className="emit-content-type">
                    <span>Send datas as:</span>
                    <span><input type="radio" onChange={e => this.emitContentType = 'plaintext'} name="data-type" defaultChecked={true} /><label htmlFor="data-type-text">Plain text</label></span>
                    <span><input type="radio" onChange={e => this.emitContentType = 'json'} name="data-type" /><label htmlFor="data-type-json">JSON</label></span>
                </div>
                <div className="emit-content-box">
                    <textarea ref={input => this.emitContentTextarea = input} className="emit-content" rows="10"></textarea>
                </div>
            </div>
        )
    }

    _emit() {
        global.socketManager.emit(this.eventNameInput.value, this.emitContentType === 'plaintext' ? this.emitContentTextarea.value : JSON.parse(this.emitContentTextarea.value))
    }

    _clear(){
        this.eventNameInput.value = this.emitContentTextarea.value = '' 
    }
}
