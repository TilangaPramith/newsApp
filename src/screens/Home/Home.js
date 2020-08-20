import React, {useEffect} from 'react'
import {connect} from 'react-redux';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import {getArticles} from '../../state/news/news.actions'
import { ArticleCard } from '../../components';

const Home = ({ articles, getNewsArticles }) => {

    useEffect(()=>{
        
        getNewsArticles();
    }, [getNewsArticles])

    const article = ()=> articles;

    const keyExtractor = (item, index) => index.toString();

    const renderItem = ({item}) => (

        <ArticleCard
            title={item.title}
            source={item.source.name}
            imageUrl={item.urlToImage}
            publishedAt={item.publishedAt}
        />
    )

    return (
        <View style={styles.container}>
            <FlatList
                data={articles}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
}

const mapStateToProps = ({news}) => ({ articles: news.articles });

export default connect(mapStateToProps, {getNewsArticles: getArticles})(Home)

const styles = StyleSheet.create({
    container:{
        width: '105%',
        flex: 1,
        alignItems: 'center',
        //backgroundColor: 'yellow',
        //justifyContent: 'center',
    }
})
