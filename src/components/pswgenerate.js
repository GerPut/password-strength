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
                    Password Strength
                </div>
                <div className="content">
                    <form action="">
                        <input onChange={this.handleChange('password')} type="text" placeholder="Enter Password" />
                        <div>
                            <div className={passwordLength ? 'green' : null}>8 Characters</div>
                            <div className={containsNumbers ? 'green' : null}>Numbers</div>
                            <div className={isUppercase ? 'green' : null}>Contains UPPERCASE</div>
                            <div className={containsSymbols ? 'green' : null}>Contains Symbols</div>
                        </div>
                    </form>
                </div>
            </>
        );
    }
}

export default PSWGenerate;