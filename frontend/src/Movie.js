import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Col,
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown, faTimes } from '@fortawesome/free-solid-svg-icons';

 export default class Movie extends Component {
    constructor(props) {
        super(props);
        this.handleClickLike = this.handleClickLike.bind(this);
        this.handleClickDislike = this.handleClickDislike.bind(this);
        this.handleClickDelete = this.handleClickDelete.bind(this);
        this.state = {
            like: this.props.movieLike,
            dislike: this.props.movieDislike,
            isLike: false,
            isDislike: false,
            displayDelete: false
        };
    }
    handleClickLike() {
        if (!this.state.isLike && !this.state.isDislike) {
            this.setState({
                like: this.state.like + 1,
                isLike: true
            });
        } else if (!this.state.isDislike && this.state.isLike) {
            this.setState({
                like: this.state.like - 1,
                isLike: false
            });
        }
    }

    handleClickDislike() {
        if (!this.state.isDislike && !this.state.isLike) {
            this.setState({
                dislike: this.state.dislike + 1,
                isDislike: true
            });
        } else if (this.state.isDislike && !this.state.isLike) {
            this.setState({
                dislike: this.state.dislike - 1,
                isDislike: false
            });
        }
    }
    handleClickDelete() {
        this.setState({
            displayDelete: true
        });
        this.props.handleClickParent(this.props.movieCategory);
    }
    render() {
        if (this.state.displayDelete) {
            var styleDeleteCol = {
                display: 'none'
            };
        }
        if (this.props.displayOnlyLike && !this.state.isLike) {
            var styleDeleteCol = {
                display: 'none'
            };
        }
        if (this.props.displayOnlyDislike && !this.state.isDislike) {
            var styleDeleteCol = {
                display: 'none'
            };
        }
        if (this.props.movieByCategory != this.props.movieCategory && this.props.activeButton) {
            var styleDeleteCol = {
                display: 'none'
            };
        }

        var styleLike = {
            color: '#fc6861',
            position: 'static',
            cursor: 'pointer'
        };
        var styleNoLike = {
            position: 'static',
            cursor: 'pointer'
        };
        var styleDislike = {
            cursor: 'pointer',
            position: 'static',
            marginLeft: '25%',
            marginBottom: '-5%'
        };
        var styleNoDislike = {
            color: '#fc6861',
            cursor: 'pointer',
            position: 'static',
            marginLeft: '25%',
            marginBottom: '-5%'
        };
        var styleDelete = {
            position: 'absolute',
            left: '90%',
            cursor: 'pointer'
        };
        return (
            <Col xs="12" sm="6" md="4" lg="3" style={styleDeleteCol}>
                <div style={{ marginBottom: 30 }}>
                    <Card>
                        <CardImg top width="100%" src={this.props.movieImg} alt="Card image cap" />
                        <FontAwesomeIcon
                            size="2x"
                            style={styleDelete}
                            icon={faTimes}
                            onClick={this.handleClickDelete}
                        />
                        <CardBody>
                            <CardTitle style={{ fontWeight: 'bold', textAlign: 'center' }}>
                                {this.props.movieTitle}
                            </CardTitle>
                            <CardText style={{ fontWeight: 'bold', color: 'grey', textAlign: 'center' }}>
                                {this.props.movieCategory}
                            </CardText>
                            <div style={{ textAlign: 'center' }}>
                                {this.state.isLike ? (
                                    <FontAwesomeIcon
                                        size="2x"
                                        style={styleLike}
                                        icon={faThumbsUp}
                                        onClick={this.handleClickLike}
                                    />
                                ) : (
                                        <FontAwesomeIcon
                                            size="2x"
                                            style={styleNoLike}
                                            icon={faThumbsUp}
                                            onClick={this.handleClickLike}
                                        />
                                    )}

                                <span style={{ marginLeft: 6 }}>{this.state.like}</span>
                                {!this.state.isDislike ? (
                                    <FontAwesomeIcon
                                        size="2x"
                                        style={styleDislike}
                                        icon={faThumbsDown}
                                        onClick={this.handleClickDislike}
                                    />
                                ) : (
                                        <FontAwesomeIcon
                                            size="2x"
                                            style={styleNoDislike}
                                            icon={faThumbsDown}
                                            onClick={this.handleClickDislike}
                                        />
                                    )}
                                <span style={{ marginLeft: 6 }}>{this.state.dislike}</span>
                            </div>
                        </CardBody>
                    </Card>
                </div>
            </Col>
        );
    }
}
