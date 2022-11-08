import React, { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";

export default function App() {
  const [task, setTask] = useState([]);
  const [newTask, setNewTask] = useState("");

  let addTask = () => {
    task.filter((task) => task === newTask);

    setTask([...task, newTask]);
    setNewTask("");
  }

  let removeTask = (item) => {
    return setTask(task.filter((tasks) => tasks !== item));
  }

  const deleteList = () => {
    setTask([])
  }

  return (
    <>
      <View style={styles.header}>
        <Text style={styles.texto}>
          Nome: Gabriel Meira de Oliveira
        </Text>
        <Text style={styles.texto}>
          RA: 2019203025
        </Text>
      </View>
      <View style={styles.container}>
        <View style={styles.Body}>
          <FlatList
            data={task}
            keyExtractor={(item) => item.toString()}
            showsVerticalScrollIndicator={false}
            style={styles.FlatList}
            renderItem={({ item }) => (
              <View style={styles.ContainerView}>
                <Text style={styles.Texto}>{item}</Text>
                <TouchableOpacity onPress={() => removeTask(item)}>
                  <MaterialIcons
                    name="delete-forever"
                    size={25}
                    color="red"
                  />
                </TouchableOpacity>
              </View>
            )}
          />
        </View>

        <View style={styles.Form}>
          <TextInput
            style={styles.Input}
            placeholderTextColor="#999"
            autoCorrect={true}
            value={newTask}
            placeholder="Digite um novo item"
            maxLength={25}
            onChangeText={(text) => setNewTask(text)}
          />
        </View>
        <View style={styles.Botoes}>
          <TouchableOpacity
            style={styles.BotaoAdicionar}
            onPress={() => addTask()}
          >
            <Text style={styles.TextoBotao}>Inseir</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.BotaoLimpar}
            onPress={() => deleteList()}
          >
            <Text style={styles.TextoBotao}>Limpar lista</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 20,
    marginTop: 20,
    backgroundColor: "#FFF",
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    marginTop: 50
  },
  texto: {
    fontWeight: 'bold',
    marginTop: 5,
    marginBottom: 10
  },
  Body: {
    flex: 1,
  },
  Form: {
    padding: 0,
    height: 60,
    justifyContent: "center",
    alignSelf: "stretch",
    flexDirection: "row",
    paddingTop: 13,
    borderTopWidth: 1,
    borderColor: "#eee",
  },
  Input: {
    flex: 1,
    height: 40,
    backgroundColor: "#eee",
    borderRadius: 4,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "#eee",
  },
  Botoes: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30,
  },
  BotaoAdicionar: {
    height: 40,
    width: "45%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "green",
    borderRadius: 4,
    marginLeft: 10,
  },
  BotaoLimpar: {
    height: 40,
    width: "45%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",
    borderRadius: 4,
    marginLeft: 10,
  },
  TextoBotao: {
    color: "#FFF",
  },
  FlatList: {
    flex: 1,
    marginTop: 5,
  },
  Texto: {
    fontSize: 14,
    color: "#333",
    fontWeight: "bold",
    marginTop: 4,
    textAlign: "center",
  },
  ContainerView: {
    marginBottom: 15,
    padding: 15,
    borderRadius: 4,
    backgroundColor: "#eee",

    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "#eee",
  },
});