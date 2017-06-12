import { Component } from 'react';
import jsonp from 'jsonp'
class FetchData extends Component {

    static propTypes = {};
    static defaultProps = {
        url: 'http://data.cnn.com/jsonp/content/ksa/factors.json'
    };

    state = {
        error: false,
        data: null
    };

    componentWillMount() {

        jsonp(this.props.url, null, (err, r) => {
            this.setState({ data: r })
        });
    }
    render() {
        return this.props.children(this.state.error, this.state.data);
    }
}

export default FetchData;
