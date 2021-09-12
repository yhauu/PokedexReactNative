import * as React from 'react';
import { Text, View, StyleSheet, FlatList, Pressable, Image,Modal } from 'react-native';
import Constants from 'expo-constants';


const ShowDetalhes = ({display,toogleModal,mensagem}) => (   
    <Modal
          animationType="slide"
          transparent={true}
          visible={display}
          onRequestClose={toogleModal}
    >

        <View style={styles.centeredView}>
          <View style={styles.modalView}>
                <Pressable onPress={toogleModal}>
                  <Text>{mensagem}</Text>
                </Pressable>
          </View>
        </View>
    
    </Modal>
        
 )

const Pokemon = ({nome,type,link}) => {
    
    //state para controle do Modal
    const [modal,setModal] = React.useState(false)

    function mudaModal(){
      setModal(!modal)
    }

    return(
    <View>
      <ShowDetalhes display={modal} toogleModal={mudaModal} mensagem={type}/>
      
      <Pressable onPress={mudaModal}>
        <Image
          style={styles.tinyLogo}
          source={{
            uri: link,
          }}
        />

        <Text style={styles.paragraph}>{nome}</Text>
      </Pressable>
    </View>
    )
}


const DATA = [
        {
            "id": 1,
            "name": "Bulbasaur",
            "numberPokedex": "Nº001",
            "type": "Grass",
            "avatar": "https://static.wikia.nocookie.net/international-pokedex/images/3/36/Bulbasaur_%28FRLG%29.png/revision/latest?cb=20180309171248"
        },
        {
            "id": 2,
            "name": "Charmander",
            "numberPokedex": "Nº004",
            "type": "Fire",
            "avatar": "https://static.wikia.nocookie.net/international-pokedex/images/a/a9/Charmander_%28FRLG%29.png/revision/latest?cb=20180309175353"
        },
        {
            "id": 3,
            "name": "Squirtle",
            "numberPokedex": "Nº007",
            "type": "Water",
            "avatar": "https://www.pngkey.com/png/full/439-4399737_squirtle-pokemon-squirtle-sprite.png"
        },
        {
            "id": 4,
            "name": "Treecko",
            "numberPokedex": "Nº252",
            "type": "Grass",
            "avatar": "https://art.pixilart.com/e80249cec539531.png"
        },
        {
            "id": 5,
            "name": "Mudkip",
            "numberPokedex": "Nº258",
            "type": "Water",
            "avatar": "https://art.pixilart.com/c4fa620c9ed6e13.png"
        },
        {
            "id": 6,
            "name": "Torchic",
            "numberPokedex": "Nº255",
            "type": "Fire",
            "avatar": "https://img.pokemondb.net/sprites/ruby-sapphire/normal/torchic.png"
        }
    ];

export default function App() {

  //função que renderiza cada item do FlatList
  function meuPokemon({item}){
    let nomeNumeracao = item.name + " " + item.numberPokedex
    
    return(
      <Pokemon nome={nomeNumeracao} 
              link={item.avatar}
              type={item.type}
      />
    )
  }
  

  return (

    <View style={styles.container}>

      <FlatList
        data={DATA}
        renderItem={meuPokemon}
        keyExtractor={item => item.id}
      />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#228B22", //'#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 12,
    padding: 12,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#98FB98',
    borderRadius: 20
  },
  tinyLogo: {
    width: 100,
    height: 100,
    borderRadius: 20,
    alignSelf: 'center'
  },
  modalView: {
    margin: 20,
    backgroundColor: "#00FA9A",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
