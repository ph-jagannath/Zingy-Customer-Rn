import * as React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { createStackNavigator } from '@react-navigation/stack'
import DrawerComponent from '../components/DrawerContent'
// drawer screens
import MyVehicle from '.././screens/App/MyVehicle'
import Faqs from '.././screens/App/Faqs'
import Packages from '.././screens/App/Packages'
import Message from '.././screens/App/Message'
import Dacwash from '.././screens/App/Dacwash'
import MyBookings from '.././screens/App/MyBookings'
import Location from '.././screens/App/Location'
import ChangeLanguage from '.././screens/App/ChangeLanguage'

// out of drawer screens
import Profile from '.././screens/App/Profile'
import VehicleStatus from '.././screens/App/VehicleStatus'
import Summary from '../screens/App/Summary'
import Payment from '../screens/App/Payment'
import CreDebitCardDetail from '../screens/App/CreDebitCardDetail'
import BookingDetail from '../screens/App/BookingDetail'
import HomeLocation from '../screens/App/HomeLocation'
import EditVehicle from '../screens/App/EditVehicle'
import Notification from '../screens/App/Notification'
import Contact from '../screens/App/Contact'
import SearchEditVehicle from '../screens/App/SearchEditVehicle'
import ChangePassword from '../screens/App/ChangePassword'
import AddLocation from '../screens/App/AddLocation'

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

export default function AppNavigator() {
    return (
        <Drawer.Navigator hideStatusBar={true}
            drawerContent={(props) => <DrawerComponent {...props} />}
            initialRouteName="Home"
            drawerType={'slide'}>
            <Drawer.Screen name="Home" component={HomeStack} />
            <Drawer.Screen name="MyVehicle" component={MyVehicle} />
            <Drawer.Screen name="MyBookings" component={MyBookings} />
            <Drawer.Screen name="Message" component={Message} />
            <Drawer.Screen name="Contact" component={Contact} />
            <Drawer.Screen name="Faqs" component={Faqs} />
            <Drawer.Screen name="ChangeLanguage" component={ChangeLanguage} />
            <Drawer.Screen name="Package" component={Packages} />
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="Location" component={Location} />
        </Drawer.Navigator>
    );
}
function HomeStack() {
    return (
        <Stack.Navigator initialRouteName={"Home"} screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={VehicleStatus} />
            <Stack.Screen name="MyBookings" component={MyBookings} />
            <Stack.Screen name="Summary" component={Summary} />
            <Stack.Screen name="Payment" component={Payment} />
            <Stack.Screen name="CreDebitCardDetail" component={CreDebitCardDetail} />
            <Stack.Screen name="BookingDetail" component={BookingDetail} />
            <Stack.Screen name="HomeLocation" component={HomeLocation} />
            <Stack.Screen name="EditVehicle" component={EditVehicle} />
            <Stack.Screen name="Notification" component={Notification} />
            <Stack.Screen name="SearchEditVehicle" component={SearchEditVehicle} />
            <Stack.Screen name="ChangePassword" component={ChangePassword} />
            <Stack.Screen name="Dacwash" component={Dacwash} />
            <Stack.Screen name="AddLocation" component={AddLocation} />
        </Stack.Navigator>
    )
}