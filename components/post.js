import React from 'react';
import { StyleSheet, Text, View, Image, Alert, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';

const Post = ({ title, avatar, description }) => {
 return (
    <TouchableOpacity onPress={() => Alert.alert('Clicked', title)}>
      <View style={styles.post}>
        <Image style={[styles.avatar, styles.avatarSize]} source={{ uri: avatar }} />
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </TouchableOpacity>
 );
};

const App = () => {
 const [posts, setPosts] = React.useState([]);

 React.useEffect(() => {
    fetch('https://655baee0ab37729791a97996.mockapi.io/api/posts')
      .then(response => response.json())
      .then(data => setPosts(data));
 }, []);

 return (
   <SafeAreaView>
      <ScrollView>
         <View style={styles.container}>
            {posts.map((post, index) => (
            <Post
               key={index}
               title={post.title}
               avatar={post.avatar}
               description={post.description}
            />
            ))}
         </View>
      </ScrollView>
   </SafeAreaView>
 );
};

const styles = StyleSheet.create({
 container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 10,
    width: '100%',
 },
 post: {
    backgroundColor: '#392e4a',
    borderRadius: 5,
    margin: 10,
    padding: 10,
    width: 170,
    height: 500,
 },
 avatar: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
 },
 avatarSize: {
   width: '100%',
   height: 200,
   resizeMode: 'cover',
},
 title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
 },
 description: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 10,
 },
});

export default App;