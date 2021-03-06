import React, { Component } from 'react';

export class WordList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            words: [
                { id: 'ab123', en: 'One', vn: 'Mot', isMemorized: true },
                { id: 'ab124', en: 'Two', vn: 'Hai', isMemorized: false },
                { id: 'ab125', en: 'Three', vn: 'Ba', isMemorized: false },
                { id: 'ab126', en: 'Four', vn: 'Bon', isMemorized: true },
            ],
            shouldShowForm: false
        };
    }

    removeWord(id) {
        const newWords = this.state.words.filter(w => w.id !== id);
        this.setState({ words: newWords });
    }

    toggleWord(id) {
        const newWords = this.state.words.map(w => {
            if (w.id !== id) return w;
            return { ...w, isMemorized: !w.isMemorized };
        });
        this.setState({ words: newWords });
    }

    genListWord() {
        const renderWord = word => (
            <div className="word" key={word.id}>
                <div className="word-container">
                    <h3 className="text-success">{word.en}</h3>
                    <h3 className="text-danger">
                        { word.isMemorized ? '-----' : word.vn }
                    </h3>
                </div>
                    <div className="btn-container">
                    <button
                        className="btn btn-success"
                        onClick={() => this.toggleWord(word.id)}
                    >
                        { word.isMemorized ? 'Forgot' : 'Memorized' }
                    </button>
                    <button
                        className="btn btn-warning"
                        onClick={() => this.removeWord(word.id)}
                    >
                        Remove
                    </button>
                </div>
            </div>
        );
        return this.state.words.map(renderWord);
    }

    render() {
        return (
            <div>
                <br />
                <div className="form-group" style={{ width: '200px' }}>
                    <input className="form-control" placeholder="English" />
                    <br />
                    <input className="form-control" placeholder="Vietnamese" />
                    <br />
                    <button className="btn btn-success">Add word</button>
                    <button className="btn btn-danger">Cancel</button>
                </div>
                <button className="btn btn-success">Create new word</button>
                { this.genListWord() }
            </div>
        );
    }
}
