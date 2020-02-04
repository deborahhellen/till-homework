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

interface Transaction {
  merchant: string;
  date: string;
  amount: number;
  details?: string;
  type: string;
}

export const Transaction: React.FC<{t: Transaction, runningTotal: number}> = (props) => {
  const { t, runningTotal } = props;
  const date = new Date(t.date);

  return (
    <View style={[
      { 
        flex: 1, 
        flexDirection: "row", 
        borderWidth: 1, 
        borderRadius: 3,
        paddingHorizontal: 8,
        marginHorizontal: 20,
        marginVertical: 8,
      }]}>
      <View style={{ 
        padding: 6, 
        flex: 3 
      }}>
        <Text style={{ fontSize: 18, color: "steelblue" }}>{t.merchant}</Text>
        <Text>{`${date.toDateString()}`}</Text>
        {t.details && <Text style={{ color: "gray"}}>{t.details}</Text>}
      </View>
      <View style={{ 
        padding: 6, 
        flex: 2,
      }}>
        <Text style={{ fontSize: 18, color: "steelblue", textAlign: "right" }}>{`${t.type === "credit" ? "+" : "-"} $${t.amount}`}</Text>
        
        <Text style={{ color: "darkGray", textAlign: "right" }}>{`$${runningTotal}`}</Text>
      </View>
    </View>
  );
};
const orderedTransactions = [ ...transactions.transactions ].sort((a, b) => {
  if (a.date === b.date) {
    return 0;
  }
  else if (a.date >= b.date) {
    return -1;
  } else {
    return 1;
  }
});

const App: React.FC = () => {
  let runningTotal = transactions.balance;

  const tr = transactions.transactions.map((t, i) => {
              
    runningTotal = t.type === "debit" ? runningTotal - t.amount
      : runningTotal + t.amount;

    return <Transaction
      key={i /* This is not best practice, but keys must be unique */}
      t={t}
      runningTotal={runningTotal}
    />
  });

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View style={{flex: 1, backgroundColor: "skyblue", padding: 24}}></View>
          <View style={styles.body}>
            <View style={{
              marginHorizontal: 20,
              marginBottom: 12, 
              marginTop: 24, 
              flex: 1, 
              flexDirection: "row" 
            }}>
              <View style={{ flex: 3 }}>
                <Text style={{ fontWeight: "600", fontSize: 32 }}>{transactions.name}</Text>
              </View>
              <View style={{ flex: 2 }}>
              <Image
                style={{width: 100, height: 100, alignSelf: "flex-end"}}
                source={{uri: transactions.avatar}}
              />
              </View>
            </View>
            {tr}
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};


export default App;
