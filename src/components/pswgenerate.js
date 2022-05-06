import React, { Component } from 'react'

class PSWGenerate extends Component {
    state = {
        password: '',
        passwordLength: false,
        containsNumbers: false,
        isUppercase: false,
        containsSymbols: false,
    }


    checkForNumbers = (string) => {
        var matches = string.match(/\d+/g);
        this.setState({
            containsNumbers: matches != null ? true : false
        });
    }


    checkForUppercase = (string) => {
        var matches = string.match(/[A-Z]/);
        this.setState({
            isUppercase: matches != null ? true : false
        });
    }


    checkForSymbols = (string) => {
        var symbols = new RegExp(/[^A-Z a-z0-9]/)
        this.setState({
            containsSymbols: symbols.test(string) ? true : false
        });
    }


    handleChange = input => e => {
        let targetValue = e.target.value
        this.checkForNumbers(targetValue)
        this.checkForUppercase(targetValue)
        this.checkForSymbols(targetValue)
        this.setState({
            passwordLength: targetValue.length > 7 ? true : false
        })
    }

    render() {
        let { passwordLength, containsNumbers, isUppercase, containsSymbols } = this.state
        return (
            <>
                <div className="title">
                    Check Your<br />
                    <span>Password Strength</span>
                </div>
                <div className="content">
                    <form action="">
                        <input onChange={this.handleChange('password')} type="text" placeholder="Enter Password" />
                        <p>Your password must contain:</p>
                        <div>
                            <div className={passwordLength ? 'green' : null}>&#10003; Eight Characters</div>
                            <div className={containsNumbers ? 'green' : null}>&#10003; Numbers</div>
                            <div className={isUppercase ? 'green' : null}>&#10003; Uppercase Letter/s</div>
                            <div className={containsSymbols ? 'green' : null}>&#10003; Symbol Present</div>
                        </div>
                    </form>
                </div>
            </>
        );
    }
}

export default PSWGenerate;