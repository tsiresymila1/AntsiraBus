
import React,{useState} from "react";
import { View,StyleSheet,Keyboard } from 'react-native';
import SnackBar from 'react-native-snackbar-component';
import { Card,Button,TextInput,Modal, Portal } from "react-native-paper";
import { AutocompleteDropdown } from 'react-native-autocomplete-dropdown'
import DateTimePickerModal from "react-native-modal-datetime-picker";
import AnimatedLottieView from 'lottie-react-native';
import moment from "moment";
import { Icon } from 'react-native-vector-icons/FontAwesome';
import { Text } from 'react-native';


export default Content = ({navigation})=> {

  const [selectedStartItem, setSelectedStartItem] = useState(null);
  const [selectedEndItem, setSelectedEndItem] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [visibleSnake, setvisibleSnake] = useState(false);
  const [visibleModal, setvisibleModal] = useState(false);
  const [messageError, setmessageError] = useState("")


  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
    Keyboard.dismiss();
  };

  const handleConfirm = (date) => {
    var formatedDate = moment(date).format('DD/MM/YYYY');
    setSelectedDate(formatedDate);
    hideDatePicker();
  };

  const handleSearch = () => {
    if(`${selectedStartItem}`.trim() == "" || `${selectedEndItem}`.trim() === "" || !`${selectedDate}`.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/)){
        if(!visibleSnake){
            setmessageError('Information non complete');
            setvisibleSnake(true);
            setTimeout(function(){
              setvisibleSnake(false);
            },2000);
        }
    }
    else{
      setvisibleModal(true);
      setTimeout(function(){
          setvisibleModal(false);
          navigation.navigate('List');
      },3000);
    }
  }

  return (
     <>
      <View style={styles.center}>
        <Card style={{ height : 254, width : '100%', mapasrgin : 18, justifyContent: 'center'}}>
          <Card.Content style={{ marginLeft: 20, marginRight: 20  }}>
            <AutocompleteDropdown
                clearOnFocus={true}
                closeOnBlur={true}
                closeOnSubmit={true}
                initialValue={{ id: null }} 
                onSelectItem={setSelectedStartItem}
                showChevron={false}
                debounce={2}
                textInputProps={textInputprops}
                dataSet={dataSet}
                suggestionsListContainerStyle={{fontFamily:'Poppins-Regular', zIndex: 8 , borderRadius: 0}}
                rightButtonsContainerStyle={{ backgroundColor : "transparent", marginTop: 5 }}
          />
          <AutocompleteDropdown
                clearOnFocus={true}
                closeOnBlur={true}
                closeOnSubmit={true}
                initialValue={{ id: null }} 
                onSelectItem={setSelectedEndItem}
                showChevron={false}
                rightButtonsContainerStyle={{ backgroundColor : "transparent" , marginTop: 5  }}
                dataSet={dataSet}
                suggestionsListContainerStyle={{fontFamily:'Poppins-Regular', zIndex: 8, borderRadius: 0}}
                textInputProps={{ style : textInputprops.style, placeholder: "Arrivé",placeholderTextColor: "#acacac"}}
          />
           <TextInput 
                mode={'flat'} 
                selectionColor={"transparent"} 
                underlineColor={"transparent"} 
                value={selectedDate} 
                style={{...textInputprops.style, height:36, borderRadius: 4, paddingLeft: 0 , paddingRight: 0, fontFamily:'Poppins-Regular'}}  
                showSoftInputOnFocus={false} 
                placeholder={"Date"} 
                placeholderTextColor="#acacac"
                onFocus={showDatePicker} 
            />
           <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirm}
                minimumDate={new Date()}
                style={{ }}
                onCancel={hideDatePicker}
            />
           <Button icon={"magnify"} style={{ marginTop : 12, backgroundColor:"#1f064f" }} mode="contained" onPress={() => handleSearch()}>
                Rechercher
            </Button>
          </Card.Content>
        </Card>
        <SnackBar left={8} right={8} bottom={12}  containerStyle={{borderRadius:8 , justifyContent: 'center', alignItems: 'center'}} visible={visibleSnake}  backgroundColor={"#9e0000"} messageColor={"#f5f5f5"} textMessage={messageError} autoHidingTime={2000}  />
      </View>
      <Portal>
      <Modal
          animationType="fade"
          contentContainerStyle={{backgroundColor: 'transparent', padding: 20,height: 200}}
          visible={visibleModal}
          onDismiss={() => {
            setvisibleModal(!visibleModal);
          }}>
          <AnimatedLottieView source={require('../../assets/searc_loader.json')} autoPlay={true} loop />
      </Modal>
      </Portal>
      </>
  );
}

const styles = StyleSheet.create({
    center: {
       flex : 1,
       flexDirection :'column',
       alignItems : 'center',
       justifyContent : 'center',
       paddingLeft : 20,
       paddingRight : 20
    },
  })

const textInputprops = {
  style : {
    backgroundColor : "#1a237e15",
    fontSize : 14, 
    padding: 0,
    fontFamily: 'Poppins-Regular',
    marginTop : 6, 
    marginBottom : 6, 
    paddingRight : 0,
    
  },
  placeholder: "Départ",
  placeholderTextColor: "#acacac"
}

const dataSet = [
  { id: '1', title: 'Antananarivo - TNR' },
  { id: '2', title: 'Antsirabe - BIRA' },
]
