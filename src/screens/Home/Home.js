import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { ArticleCard } from '../../components';

export default Home = () => {
    return (
        <View style = {styles.container}>
            <ArticleCard
             imageUrl="https://bitcoinist.com/wp-content/uploads/2020/08/randy-tarampi-fckhR4mysac-unsplash-1920x1278.jpg"
             title= "News Title"
             publishedAt= "2020-08-16T16:00:42Z"
             source="New York Times"
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        width: '100%',
        flex: 1,
        alignItems: 'center',
        //backgroundColor: 'yellow',
        //justifyContent: 'center',
    }
})
