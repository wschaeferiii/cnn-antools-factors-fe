import React, { Component } from 'react';
import FetchData from 'modules/fetch-data'
import PropTypes from 'prop-types'
import styles from './styles.css';
class ImageSingle extends Component {

    static propTypes = {
        slug: PropTypes.string.isRequired
    };
    static defaultProps = {};

    state = {
        imageUrl: '',
        count: 0
    };
    render() {
        return (
            <div className={styles.foo}>
                <FetchData url={this.props.url}>
                    {(err, data) => data && (
                        <img className={styles.res_img} src={data[this.props.slug].coverArt[0].URL}></img>
                    )}
                </FetchData>
            </div>
        );
    }
}

export default ImageSingle;
