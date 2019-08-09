export default function(
	movies = [
		{
			id: '13',
			title: 'Oceans 8',
			category: 'Comedy',
			img: '../oceans_8.jpg',
			likes: 4,
			dislikes: 1
		},
		{
			id: '2',
			title: 'Midnight Sun',
			category: 'Comedy',
			img: '../midnight_sun.jpg',
			likes: 2,
			dislikes: 0
		},
		{
			id: '3',
			title: 'Les indestructibles 2',
			category: 'Animation',
			img: '../les_indestructibles_2.jpg',
			likes: 3,
			dislikes: 1
		},
		{
			id: '4',
			title: 'Sans un bruit',
			category: 'Thriller',
			img: '../sans_un_bruit.jpg',
			likes: 6,
			dislikes: 6
		},
		{
			id: '5',
			title: 'Creed II',
			category: 'Drame',
			img: '../creed_2.jpg',
			likes: 16,
			dislikes: 2
		},
		{
			id: '6',
			title: 'Pulp Fiction',
			category: 'Thriller',
			img: '../pulp_fiction.jpg',
			likes: 11,
			dislikes: 3
		},
		{
			id: '7',
			title: 'Into The Wild',
			category: 'Adventure',
			img: '../into_the_wild.jpg',
			likes: 12333,
			dislikes: 32
		},
		{
			id: '8',
			title: 'Seven',
			category: 'Thriller',
			img: '../seven.jpg',
			likes: 2,
			dislikes: 1
		},
		{
			id: '9',
			title: 'Inception',
			category: 'Thriller',
			img: '../inception.jpg',
			likes: 2,
			dislikes: 1
		},
		{
			id: '10',
			title: 'Gone Girl',
			category: 'Thriller',
			img: '../gone_girl.jpg',
			likes: 22,
			dislikes: 12
		}
	],
	action
) {
	if (action.type === 'getMovies') {
		return action.movies;
	} else {
		return movies;
	}
}
