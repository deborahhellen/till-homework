import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from "./styles";
import * as transactions from "./transactions.json";

interface Transaction {
  merchant: string;
  date: string;
  amount: number;
  details?: string;
  type: string;
  balance: number;
}

export const Transaction: React.FC<{t: Transaction}> = (props) => {
  const { t } = props;
  const date = new Date(t.date);

  return (
    <View style={styles.transaction}>
      <View style={{ 
        paddingHorizontal: 6, 
        paddingVertical: 12,
        flex: 3 
      }}>
        <Text style={styles.boldText}>{t.merchant}</Text>
        <Text>{`${date.toDateString()}`}</Text>
        {t.details && <Text style={{ color: "gray"}}>{t.details}</Text>}
      </View>
      <View style={{ 
        paddingHorizontal: 6,
        paddingVertical: 12, 
        flex: 2,
      }}>
        <Text style={[styles.boldText, { textAlign: "right" }]}>{`${t.type === "credit" ? "+" : "-"} $${t.amount}`}</Text>
        
        <Text style={{ textAlign: "right", color: "#555" }}>{`$${t.balance}`}</Text>
      </View>
    </View>
  );
};

export const App: React.FC = () => {
  const [search, setSearch] = useState("");

  const tran = generateTotals();

  const tr = applySearch(tran, search)
    .sort((t1, t2) => dateComparator(t1, t2))
  
  const currentBal = tran[tran.length - 1].balance;

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic">
            <View style={styles.header}>
            <Icon name="bars" size={30} color="white" />
            </View>
            <View style={styles.body}>
              <View style={styles.section}>
                <View style={{ flex: 3 }}>
                  <Text style={{ fontSize: 24, marginBottom: 12 }}>{transactions.name}</Text>
                  <Text style={{ fontSize: 14, color: "#555" }}>Balance:</Text>
                  <Text style={{ color: "steelblue", fontSize: 30, fontWeight: "800" }}>{`$${currentBal}`}</Text>
                </View>
                <View style={{ flex: 2 }}>
                <Image
                  style={styles.avatar}
                  source={{uri: transactions.avatar}}
                />
                </View>
              </View>
              <View style={styles.section}>
                <Text style={{ fontSize: 16, color: "#555" }}>Transactions</Text>
              </View>
              <View style={[styles.section, { borderWidth: 1, borderColor: "gray" }]}>
                <View style={styles.search}>
                  <TextInput
                    style={{height: 38, flex: 9 }}
                    placeholder="Search..."
                    onChangeText={setSearch}
                    value={search}
                  />
                  <Icon style={{ flex: 1 }} name="search" size={18} color="gray" />
                </View>
              </View>
              {tr.length > 0 
              ? <>
                {tr.map((t, i) => <Transaction key={i /* Using index as a key prop is not ideal but a key prop is required */} t={t}/>)}
                <View style={styles.section}>
                  <Text style={{ color: "gray", textAlign: "center", flex: 1 }}>End of statement history</Text>
                </View>
              </>
              : <View style={styles.section}>
                <Text style={{ color: "gray", textAlign: "center", flex: 1 }}>No transactions to show</Text>
              </View>}
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

// Search by merchant name
export const applySearch = (t: Transaction[], searchTerm: string): Transaction[] => {
  return [ ...t ].filter((t, i) => t.merchant.toLowerCase().includes(searchTerm.toLowerCase()));
};

// Generate the transactions list with the balance after each transaction
export const generateTotals = (): Transaction[] => {
  let runningTotal = transactions.balance;

  return [ ...transactions.transactions ].map((t) => {
    runningTotal = t.type === "debit" ? runningTotal - t.amount
      : runningTotal + t.amount;

    return {
      ...t,
      balance: runningTotal,
    };
  });
};

// Sort by date
const dateComparator = (t1: Transaction, t2: Transaction): 0 | 1 | -1 => {
  if (t1.date === t2.date) {
    return 0;
  }
  else if (t1.date >= t2.date) {
    return -1;
  } else {
    return 1;
  }
};
