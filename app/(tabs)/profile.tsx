import { View } from "react-native";
import { Link } from "expo-router";

const ProfilePage = () => {
    return (
        <View style= {{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Link href='/'>Log Out</Link>
        </View>
    );
};

export default ProfilePage;