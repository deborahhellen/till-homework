import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    body: {
      marginBottom: 20,
    },
    header: { 
      flex: 1, 
      marginBottom: 8,
      backgroundColor: "skyblue", 
      padding: 16,
      borderBottomWidth: 1, 
      borderBottomColor: "#ccc"
    },
    section: {
      marginHorizontal: 20, 
      marginTop: 8, 
      flex: 1, 
      flexDirection: "row",
    },
    avatar: { 
      borderWidth: 1, 
      borderColor: "gray", 
      borderRadius: 3,
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
      marginTop: 8,
      backgroundColor: "white",
    },
    boldText: { 
      fontSize: 18, 
      color: "steelblue",
    },
    search: {
      flex: 1, 
      flexDirection: "row",
      alignContent: "center",
      alignItems: "center",
      backgroundColor: "white", 
      borderRadius: 3 
    },
});

export default styles;
