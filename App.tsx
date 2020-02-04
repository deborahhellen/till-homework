import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
} from 'react-native';

import styles from "./styles";
import transactions from "./transactions";

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>{transactions.name}</Text>
              <Image
                style={{width: 100, height: 100}}
                source={{uri: transactions.avatar}}
              />
            </View>
            {transactions.transactions.map((t, i) => {
              return (
                <View key={i /* This is not best practice, but keys must be unique */}>
                  <Text>{t.merchant}</Text>
                  <Text>{t.date}</Text>
                  <Text>{t.amount}</Text>
                  <Text>{t.type}</Text>
                  {t.details && <Text>{t.details}</Text>}
                  {/*Account balance after transaction*/}
                </View>
              )
            })}
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};


export default App;
