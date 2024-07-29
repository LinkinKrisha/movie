import { StyleSheet, Text, View, SectionList, Image } from 'react-native';

const DATA = [
  {
    theatre: 'Inox',
    movielist: [
      {
        id: 1,
        name: 'Dada',
        time: '10:00 AM',
        image: 'https://m.media-amazon.com/images/M/MV5BOGU4YjlhNjEtODU2MS00YzgwLWJmOWEtZTA4YjkyZGQ1ZjBiXkEyXkFqcGdeQXVyMTUwMDg3OTQy._V1_.jpg',
      },
      {
        id: 2,
        name: 'PT Sir',
        time: '1:00 PM',
        image: 'https://www.newsbugz.com/wp-content/uploads/2023/01/PT-Sir-768x1200.jpeg',
      },
    ],
  },
  {
    theatre: 'Cinipriya',
    movielist: [
      {
        id: 3,
        name: 'Heat Beat',
        time: '4:00 PM',
        image: 'https://es.web.img2.acsta.net/pictures/16/02/04/18/00/535050.jpg',
      },
      {
        id: 4,
        name: 'Kung Fu Panda 4',
        time: '8:00 PM',
        image: 'https://images1.fanpop.com/images/photos/1500000/Kung-Fu-Panda-kung-fu-panda-1543105-500-400.jpg',
      },
    ],
  },
  {
    theatre: 'Star Cinemas',
    movielist: [
      {
        id: 5,
        name: 'Blockbuster',
        time: '3:30 PM',
        image: 'https://www.iceposter.com/thumbs/MOV_1535940_b.jpg',
      },
      {
        id: 6,
        name: 'Superstar',
        time: '6:00 PM',
        image: 'https://thoughtcatalog.com/wp-content/uploads/2013/02/superstar.jpg?resize=512',
      },
    ],
  },
  {
    theatre: 'Royal Theatres',
    movielist: [
      {
        id: 7,
        name: 'Romantic Escape',
        time: '4:45 PM',
        image: 'https://mir-s3-cdn-cf.behance.net/project_modules/fs/6099ea27901343.5636c7853c4c5.jpg',
      },
      {
        id: 8,
        name: 'Comedy Club',
        time: '7:30 PM',
        image: 'https://m.media-amazon.com/images/M/MV5BMTU1MjkwMzMwNF5BMl5BanBnXkFtZTgwNDMzNDcwODE@._V1_UY1200_CR85,0,630,1200_AL_.jpg',
      },
    ],
  },
  {
    theatre: 'Gala Cinemas',
    movielist: [
      {
        id: 9,
        name: 'Sci-Fi Adventure',
        time: '11:45 AM',
        image: 'https://www.indiewire.com/wp-content/uploads/2017/09/another-earth-2011.jpg',
      },
      {
        id: 10,
        name: 'Fantasy Quest',
        time: '5:20 PM',
        image: 'https://cdn.traileraddict.com/content/unknown/mythica-quest-for-heroes.jpg',
      },
    ],
  },
];

export default function App() {
  return (
    <SectionList
      sections={DATA.map(({ theatre, movielist }) => ({ title: theatre, data: movielist }))}

      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View style={styles.movieItem}>
          <Text style={styles.movieName}>{item.name}</Text>
          <Text style={styles.movieTime}>{item.time}</Text>


          
          <Image source={{ uri: item.image }} style={styles.movieImage} />
        </View>
      )}
      renderSectionHeader={({ section: { title } }) => (
        <Text style={styles.theatreHeader}>{title}</Text>
      )}
    />
  );
}

const styles = StyleSheet.create({
  theatreHeader: {
    marginTop:25,
    marginBottom:25,
    fontSize: 28,
    fontWeight: 'bold',
    // margin:10,
    padding: 10,
    backgroundColor: '#ff99cf',
  },
  movieItem: {
    padding: 15,
    backgroundColor: '#7FFFD4',
  },
  movieName: {
    fontSize: 20,
  },
  movieTime: {
    fontSize: 18,
    color: 'gray',
  },
  movieImage: {
    width: 150,
    height: 150,
    marginTop: 10,
  },
});
