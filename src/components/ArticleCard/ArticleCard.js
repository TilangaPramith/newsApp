import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import moment from 'moment'
import {COLORS} from '../../utils/constants'

export default ArticleCard = ({ imageUrl, title, source, publishedAt }) => {
    return (
        <View style = {styles.container} >
            <Image 
            source={{
                uri: imageUrl,
            }} 
                style={styles.image} />
                
        <Text style={styles.title}> {title}</Text>
            <View style={styles.buttonTextContainer}>
                <Text>{source}</Text>
                <Text>{moment(publishedAt).fromNow()}</Text>
            </View>
            
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        width: "95%",
        //aspectRatio: 16 / 9,
        height: 200,

        //backgroundColor: 'yellow',
        marginTop: 25,
        marginBottom: 50,
    },
    image: {
        width: '100%', 
        borderRadius: 5,
        aspectRatio: 16 /9,
    },
    title:{
        color: COLORS.black,
        fontSize: 16,
        fontWeight: "bold",
    },
    buttonTextContainer: {
        flexDirection: 'row',
        backgroundColor: "#dcdcdc",
        justifyContent: "space-between"
    }
})