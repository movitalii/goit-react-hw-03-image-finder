import { Component } from 'react';
import css from './Searchbar.module.css';

export default class Searchbar extends Component {
    state = {
        imageName: '',
    };

    handleNameChange = event => {
        this.setState({ imageName: event.currentTarget.value.toLowerCase() });
    };

    hendleSubmit = event => {
        event.preventDefault();
        this.props.onSubmit(this.state.imageName);
        this.setState({ imageName: '' });
    };

    render() {
        return (
            <header class={css.searchbar}>
                <form class={css.form} onSubmit={this.hendleSubmit}>
                    <button type="submit" class={css.button}>
                      <span class={css.button__label}>Search</span>
                    </button>

                    <input
                        class={css.input}
                        type="text"
                        autocomplete="off"
                        autofocus
                        placeholder="Search images and photos"
                        value={this.state.imageName}
                        onChange={this.handleNameChange}
                    />
                </form>
            </header>
        )
    }
}