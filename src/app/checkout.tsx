import { Link } from "expo-router";
import { Image, Text, View } from "react-native";

export default function Checkout() {
  return (
    <View className="flex-1 justify-center items-center mx-5">
      <Image source={require("@/assets/logo.png")} className="h-7 w-40" />

      <Text className="mt-6 mb-2 text-2xl text-white font-semibold">Pedido confirmado!</Text>

      <Text className="text-lg text-zinc-400 text-center font-regular">
        Em breve, seu pedido estará a caminho. Obrigado pela preferência!
      </Text>

      <Link href={"/"} className="py-3.5 px-5 mt-6 bg-lime-400 rounded-md text-base text-black font-semibold">
        Voltar ao cardápio
      </Link>
    </View>
  );
}
