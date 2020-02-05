import { StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const styles = StyleSheet.create({
    body: {
      backgroundColor: Colors.white,
      marginBottom: 20,
    },
    header: { 
      flex: 1, 
      backgroundColor: "skyblue", 
      padding: 16,
      borderBottomWidth: 1, 
      borderBottomColor: "#ccc"
    },
    section: {
      marginHorizontal: 20, 
      marginTop: 20, 
      flex: 1, 
      flexDirection: "row",
    },
    avatar: { 
      borderWidth: 1, 
      borderColor: "gray", 
      width: 110, 
      height: 110, 
      alignSelf: "flex-end",
    },
    transaction: { 
      flex: 1, 
      flexDirection: "row", 
      borderWidth: 1, 
      borderRadius: 3,
      borderColor: "gray",
      paddingHorizontal: 8,
      marginHorizontal: 20,
      marginVertical: 8,
      backgroundColor: "white",
    },
    boldText: { 
      fontSize: 18, 
      color: "steelblue",
    },
});

export default styles;
