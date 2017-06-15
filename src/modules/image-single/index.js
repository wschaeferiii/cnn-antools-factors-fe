import React, { Component } from 'react';
import get from 'lodash/get';
import FetchData from '../fetch-data';
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
                    {(err, data) => {
                        const { slug } = this.props;
                        const src = get(data[slug], 'coverArt[0].URL', '');

                        return (
                            <img className={styles.res_img} src={src}></img>
                        );
                    }}
                </FetchData>
            </div>
        );
    }
}

export default ImageSingle;
