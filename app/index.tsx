import { View, Pressable, Text } from "react-native";
import { Link, useRouter } from "expo-router";

const LoginPage = () => {
  const router = useRouter();

const handleLogin = () => {
  router.replace('/home');
};
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Pressable onPress={handleLogin}>
        <Text>Login</Text>
      </Pressable>

      <Link href='/register' asChild>
        <Pressable>
          <Text>Create Account</Text>
        </Pressable>
      </Link>
      
      <Link href='/none'>Unmatched route</Link>
    </View>
  );
};

export default LoginPage; 