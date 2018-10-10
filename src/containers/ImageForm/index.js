import * as React from 'react';
import './style.css';

class ImageForm extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            type: 'shibes',
            number: 1
        }
    }


    handleInputChange = (e) => {
        this.setState({number: e.target.value});
    };

    handleSelectChange = (e) => {
        this.setState({type: e.target.value});
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let type;
        if (this.state.type === "random") {
            const randomNumber = Math.random().toFixed(2);
            if (randomNumber < 0.34) {
                type = "shibes";
            } else if (randomNumber < 0.68) {
                type = 'cats';
            } else {
                type = 'birds';
            }
        } else {
            type = this.state.type;
        }
        this.props.fetchPhotos(this.state.number, type)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="form">
                <div className="form-row">
                    <label htmlFor="amount" className="form-label">
                        Number of images: 
                    </label>
                    <input 
                        type="number" 
                        min="1" 
                        max="10" 
                        value={this.state.number} 
                        onChange={this.handleInputChange}
                        className="form-input"
                        id="amount"
                    />
                </div>
                <div className="form-row">
                    <label htmlFor="type" className="form-label">
                        Type of animal:
                    </label>
                    <select
                        value={this.state.type} 
                        onChange={this.handleSelectChange}
                        className="form-input"
                        id="type"
                    >
                        <option>
                            shibes
                        </option>
                        <option>
                            cats
                        </option>
                        <option>
                            birds
                        </option>
                        <option>
                            random
                        </option>
                    </select>
                </div>
                <div>
                    <input 
                        type="submit" 
                        value={this.props.loading ? 'Loading data' : 'Search'}
                        className="form-submit"
                        disabled={this.props.loading}
                    />
                </div>
            </form>    
        );
    }
}

export default ImageForm;