import React from "react";
import Form from "../common/form.component";
import Input from "../common/input.component";

class AddMovie extends Form {
    state = {
        data: {
            title: "",
            poster: "",
            rating: "",
        },
        errors: {},
    };

    doSubmit = (e) => {};

    render() {
        return (
            <div className="container w-50 mx-auto">
                <br />
                <br />

                <form onSubmit={this.handleSubmit}>
                    <div className="mb-3">
                        <Input
                            label="Movie Title"
                            name="title"
                            id="title"
                            type="text"
                            value={this.state.data.title}
                            onChange={(e) => this.handleChange(e)}
                            errors={this.state.errors}
                        />
                    </div>
                    <div className="mb-3">
                        <Input
                            label="Poster Url"
                            name="poster"
                            id="poster"
                            type="text"
                            value={this.state.data.poster}
                            onChange={(e) => this.handleChange(e)}
                            errors={this.state.errors}
                        />
                    </div>

                    <div className="mb-3">
                        <Input
                            label="IMDB Rating"
                            name="rating"
                            id="rating"
                            type="text"
                            value={this.state.data.rating}
                            onChange={(e) => this.handleChange(e)}
                            errors={this.state.errors}
                        />
                    </div>
                    <div className="d-grid gap-2">
                        <button type="submit" className="btn btn-success">
                            Add Movie
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

export default AddMovie;
