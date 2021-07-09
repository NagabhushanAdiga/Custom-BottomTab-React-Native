import * as React from 'react';
import { Text, View,StyleSheet,TouchableOpacity,Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from "react-native-vector-icons/MaterialCommunityIcons"

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
      <Image 
              source={require("../Med/assets/Icons/home.png")}
              resizeMode="contain"
              style={{width:25,height:25}}
              />
    </View>
  );
}

function SettingsScreen1() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings1!</Text>
      
    </View>
  );
}
function SettingsScreen2() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings2!</Text>
      
    </View>
  );
}
function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
      
    </View>
  );
}
function Hi() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Hi</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({children,onPress}) =>(
  <TouchableOpacity
  style={{height:70,width:70,top:-30,justifyContent:"center",alignItems:"center",backgroundColor:"red",borderRadius:35,...styles.shadow}}
  onPress={()=>{
    alert("Hi Hello")
  }}>
    <View style={{width:70,height:70}}>
    {children}
    </View>
  </TouchableOpacity>
)

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
      tabBarOptions={{
        showLabel:false,
        style:{
          position:"absolute",
          // bottom:25,
          // left:20,
          // right:20,
          elevation:0,
          // borderRadius:10,
          height:70,
          backgroundColor:"#fff",
          ...styles.shadow
        }
      }}
      >
        <Tab.Screen name="Home" component={HomeScreen} 
        options={{
          tabBarIcon:({focused}) =>(
            <View style={{alignItems:"center",justifyContent:"center",top:10}}>
            <Icon name="home" size={30} color="red" />

              {/* <Image 
              source={require("../Med/assets/Icons/home.png")}
              resizeMode="contain"
              style={{width:25,height:25,tintColor:focused ? '#e32f45':'#748c84'}}
              /> */}
              <Text style={{color:focused ? '#e32f45':'#748c84',fontSize:15}}>Home</Text>
            </View>
          ),
        }}
        />
        <Tab.Screen name="Settings" component={SettingsScreen}
           options={{
          tabBarIcon:({focused}) =>(
            <View style={{alignItems:"center",justifyContent:"center",top:10}}>
            <Icon name="home" size={30} color="red" />

              {/* <Image 
              source={require("../Med/assets/Icons/home.png")}
              resizeMode="contain"
              style={{width:25,height:25,tintColor:focused ? '#e32f45':'#748c84'}}
              /> */}
              <Text style={{color:focused ? '#e32f45':'#748c84',fontSize:15}}>Search</Text>
            </View>
          ),
        }}
         />
        <Tab.Screen name="Settings1" component={SettingsScreen1} 
    options={{
      tabBarIcon:({focused})=>(
        <Icon name="plus" size={25} color="#fff" style={{fontWeight:"bold"}} />
        // <Image 
        //       source={require("../Med/assets/Icons/home.png")}
        //       resizeMode="contain"
        //       style={{width:10,height:10,tintColor:'red'}}
        //       />
              ),
              tabBarButton : (props)=>(
                <CustomTabBarButton {...props}/>
              )
    }}
        />
        <Tab.Screen name="Settings2" component={SettingsScreen2}
           options={{
          tabBarIcon:({focused}) =>(
            <View style={{alignItems:"center",justifyContent:"center",top:10}}>
            <Icon name="home" size={30} color="red" />
              {/* <Image 
              source={require("../Med/assets/Icons/home.png")}
              resizeMode="contain"
              style={{width:25,height:25,tintColor:focused ? '#e32f45':'#748c84'}}
              /> */}
              <Text style={{color:focused ? '#e32f45':'#748c84',fontSize:15}}>Wah</Text>
            </View>
          ),
        }}
         />


        <Tab.Screen name="Hi" component={Hi} 
            options={{
          tabBarIcon:({focused}) =>(
            <View style={{alignItems:"center",justifyContent:"center",top:10}}>
            <Icon name="home" size={30} color="red" />
              {/* <Image 
              source={require("../Med/assets/Icons/home.png")}
              resizeMode="contain"
              style={{width:25,height:25,tintColor:focused ? '#e32f45':'#748c84'}}
              /> */}
              <Text style={{color:focused ? '#e32f45':'#748c84',fontSize:15}}>Find</Text>
            </View>
          ),
        }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  shadow:{
    shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 9,
},
shadowOpacity: 0.48,
shadowRadius: 11.95,

elevation: 18,
  }

})
