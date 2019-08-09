import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
	Row,
	Container,
	Collapse,
	Navbar,
	NavbarToggler,
	Nav,
	NavItem,
	NavLink,
	Button,
	ButtonGroup,
	PaginationItem,
	PaginationLink,
	Pagination
} from 'reactstrap';
import Movie from './Movie';
import { connect } from 'react-redux';

class Home extends Component {
	constructor(props) {
		super(props);

		this.toggle = this.toggle.bind(this);
		this.handleClickLikeOn = this.handleClickLikeOn.bind(this);
		this.handleClickLikeOff = this.handleClickLikeOff.bind(this);
		this.handleClickReload = this.handleClickReload.bind(this);
		this.onRadioBtnClick = this.onRadioBtnClick.bind(this);
		this.handleClickFour = this.handleClickFour.bind(this);
		this.handleClickNext = this.handleClickNext.bind(this);
		this.handleClickPrevious = this.handleClickPrevious.bind(this);
		this.handleClickChild = this.handleClickChild.bind(this);
		this.state = {
			isOpen: false,
			viewOnlyLike: false,
			viewOnlyDislike: false,
			genre: '',
			rSelected: '',
			button: false,
			pagination: this.props.movies.length,
			paginationCopy: '',
			cut: 0,
			categoryAnimationDelete: false,
			categoryAdventureDelete: 0,
			categoryThrillerDelete: 0,
			categoryDrameDelete: 0,
			categoryComedyDelete: 0
		};
	}

	handleClickChild(category) {
		console.log(category);

		if (category === 'Animation') {
			this.setState({
				categoryAnimationDelete: this.state.categoryAnimationDelete + 1
			});
		} else if (category === 'Adventure') {
			this.setState({
				categoryAdventureDelete: this.state.categoryAdventureDelete + 1
			});
		} else if (category === 'Thriller') {
			this.setState({
				categoryThrillerDelete: this.state.categoryThrillerDelete + 1
			});
		} else if (category === 'Drame') {
			this.setState({
				categoryDrameDelete: this.state.categoryDrameDelete + 1
			});
		} else if (category === 'Comedy') {
			this.setState({
				categoryComedyDelete: this.state.categoryComedyDelete + 1
			});
		}
	}
	handleClickNext() {
		if (this.state.pagination >= this.props.movies.length) {
		} else {
			this.setState({
				cut: this.state.pagination,
				pagination: this.state.pagination + this.state.pagination
			});
		}
	}
	handleClickPrevious() {
		if (this.state.pagination != this.state.paginationCopy) {
			this.setState({
				cut: this.state.cut - this.state.paginationCopy,
				pagination: this.state.pagination / 2
			});
		}
	}

	handleClickFour(pagination) {
		this.setState({
			pagination,
			paginationCopy: pagination,
			cut: 0
		});
	}
	onRadioBtnClick(rSelected) {
		this.setState({ rSelected, button: true });
		console.log(this.state.rSelected);
	}

	handleClickReload() {
		this.setState({
			viewOnlyLike: false,
			viewOnlyDislike: false,
			button: false
		});
	}
	handleClickLikeOn() {
		console.log('click!');
		this.setState({
			viewOnlyLike: true
		});
	}
	handleClickLikeOff() {
		console.log('click dislike!');
		this.setState({
			viewOnlyDislike: true
		});
	}
	toggle() {
		this.setState({
			isOpen: !this.state.isOpen
		});
	}
	render() {
		var categoryAnimmation = 0;
		var categoryAdventure = 0;
		var categoryThriller = 0;
		var categoryDrame = 0;
		var categoryComedy = 0;

		for (var i = 0; i < this.props.movies.length; i++) {
			if (this.props.movies[i].category === 'Animation') {
				categoryAnimmation++;
			} else if (this.props.movies[i].category === 'Adventure') {
				categoryAdventure++;
			} else if (this.props.movies[i].category === 'Thriller') {
				categoryThriller++;
			} else if (this.props.movies[i].category === 'Drame') {
				categoryDrame++;
			} else if (this.props.movies[i].category === 'Comedy') {
				categoryComedy++;
			}
		}
		console.log(categoryAnimmation);
		var moviesList = [];

		var pagination = this.props.movies.slice(0, this.state.pagination);
		for (var i = this.state.cut; i < pagination.length; i++) {
			moviesList.push(
				<Movie
					key={i}
					movieTitle={this.props.movies[i].title}
					movieCategory={this.props.movies[i].category}
					movieImg={this.props.movies[i].img}
					movieLike={this.props.movies[i].likes}
					movieDislike={this.props.movies[i].dislikes}
					displayOnlyLike={this.state.viewOnlyLike}
					displayOnlyDislike={this.state.viewOnlyDislike}
					movieByCategory={this.state.rSelected}
					activeButton={this.state.button}
					handleClickParent={this.handleClickChild}
				/>
			);
		}

		return (
			<div style={{ backgroundColor: '#131A20' }}>
				<div style={{ marginBottom: 90 }}>
					<Navbar color="dark" dark expand="md">
						<span className="navbar-brand">
							<img
								src="./logo.png"
								width="30"
								height="30"
								className="d-inline-block align-top"
								alt="logo Movie"
							/>
						</span>
						<NavbarToggler onClick={this.toggle} />
						<Collapse isOpen={this.state.isOpen} navbar>
							<Nav className="" navbar>
								<NavItem>
									<NavLink style={{ color: '#FFFFFF' }} href="#" onClick={this.handleClickReload}>
										Reload
									</NavLink>
								</NavItem>
								<NavItem>
									<NavLink href="#" onClick={this.handleClickLikeOn}>
										Like
									</NavLink>
								</NavItem>
								<NavItem>
									<NavLink href="#" onClick={this.handleClickLikeOff}>
										Dislike
									</NavLink>
								</NavItem>
							</Nav>
						</Collapse>
					</Navbar>
					<ButtonGroup style={{ textAlign: 'center', display: 'block', justifyContent: 'center' }}>
						{this.state.categoryAdventureDelete === categoryAdventure ? (
							<Button style={{ display: 'none' }} onClick={() => this.onRadioBtnClick('Adventure')}>
								Adventure
							</Button>
						) : (
							<Button
								style={{ backgroundColor: '#131A20', border: 'none', boxShadow: 'none' }}
								onClick={() => this.onRadioBtnClick('Adventure')}
							>
								Adventure
							</Button>
						)}
						{this.state.categoryAnimationDelete === categoryAnimmation ? (
							<Button style={{ display: 'none' }} onClick={() => this.onRadioBtnClick('Animation')}>
								Animation
							</Button>
						) : (
							<Button
								style={{ backgroundColor: '#131A20', border: 'none', boxShadow: 'none' }}
								onClick={() => this.onRadioBtnClick('Animation')}
							>
								Animation
							</Button>
						)}
						{this.state.categoryComedyDelete === categoryComedy ? (
							<Button style={{ display: 'none' }} onClick={() => this.onRadioBtnClick('Comedy')}>
								Comedy
							</Button>
						) : (
							<Button
								style={{ backgroundColor: '#131A20', border: 'none', boxShadow: 'none' }}
								onClick={() => this.onRadioBtnClick('Comedy')}
							>
								Comedy
							</Button>
						)}
						{this.state.categoryDrameDelete === categoryDrame ? (
							<Button style={{ display: 'none' }} onClick={() => this.onRadioBtnClick('Drame')}>
								Drame
							</Button>
						) : (
							<Button
								style={{ backgroundColor: '#131A20', border: 'none', boxShadow: 'none' }}
								onClick={() => this.onRadioBtnClick('Drame')}
							>
								Drame
							</Button>
						)}
						{this.state.categoryThrillerDelete === categoryThriller ? (
							<Button style={{ display: 'none' }} onClick={() => this.onRadioBtnClick('Thriller')}>
								Thriller
							</Button>
						) : (
							<Button
								style={{ backgroundColor: '#131A20', border: 'none', boxShadow: 'none' }}
								onClick={() => this.onRadioBtnClick('Thriller')}
							>
								Thriller
							</Button>
						)}
					</ButtonGroup>
					<p style={{ color: 'white', textAlign: 'center' }}>Pagination choice:</p>
					<ButtonGroup style={{ display: 'block', textAlign: 'center', justifyContent: 'center' }}>
						<Button
							style={{ backgroundColor: '#131A20', boxShadow: 'none' }}
							onClick={() => this.handleClickFour(4)}
						>
							4
						</Button>
						<Button
							style={{ backgroundColor: '#131A20', boxShadow: 'none' }}
							onClick={() => this.handleClickFour(8)}
						>
							8
						</Button>
						<Button
							style={{ backgroundColor: '#131A20', boxShadow: 'none' }}
							onClick={() => this.handleClickFour(12)}
						>
							12
						</Button>
					</ButtonGroup>
					<p style={{ color: 'white', textAlign: 'center' }}>Page:</p>
					<Pagination style={{ textAlign: 'center', justifyContent: 'center' }}>
						<PaginationItem>
							<PaginationLink previous href="#" onClick={this.handleClickPrevious} />
						</PaginationItem>
						<PaginationItem>
							<PaginationLink next href="#" onClick={this.handleClickNext} />
						</PaginationItem>
					</Pagination>
				</div>
				<Container>
					<Row>{moviesList}</Row>
				</Container>
			</div>
		);
	}
}
function mapStateToProps(state) {
	return { movies: state.movies };
}

export default connect(mapStateToProps, null)(Home);
