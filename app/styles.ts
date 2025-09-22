import {
    StyleSheet,
} from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: "#f3f3f3ff",
  },

  searchBar: {
    marginTop: 20,
    flexDirection: "row",
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 15,
    gap: 10,
    marginBottom: 20,
  },

  searchInput: {
    flex: 1,
    fontSize: 16,
    color: "#333",
  },

  footer: {
    alignItems: "center",
    bottom: 20,
  },

  addButton: {
    backgroundColor: "#489e40ff",
    padding: 10,
    borderRadius: 20,
  },
});

export default styles