import ProfileCard from "@/components/ProfileCard"
import SettingOption, { SettingOptionProps } from "@/components/SettingOption"
import { SecondaryText } from "@/components/Text"
import Colors from "@/constants/colors"
import ImagesURLs from "@/constants/images-url"
import useUserStore from "@/store/login"
import { useRouter } from "expo-router"
import { StyleSheet, View } from "react-native"

type Category = {
  name: string,
  settings: SettingOptionProps[],
}

const ProfileSettingsScreen = () => {
  const userStore = useUserStore()
  const router = useRouter()

  const settings: Category[] = [
    {
      name: 'Perfil',
      settings: [
        { text: 'Editar perfil', onPress: () => router.push('/(app)/profile-edit') },
        { text: 'Endereços salvos' },
        { text: 'Cartões salvos', onPress: () => router.push('/(app)/saved-cards') },
        { text: 'Me tornar um entregador' },
      ]
    },
    {
      name: 'Suporte',
      settings: [
        { text: 'Suporte' },
        { text: 'Sair da conta', onPress: () => userStore.setLogged(false) },
      ],
    },
  ]

  const settingsList = (
    settings.map((category, i) => (
      <View style={styles.section} key={i}>
        <SecondaryText style={{ marginBottom: 8 }}>
          {category.name}
        </SecondaryText>
        
        {category.settings.map((option, j) => (
          <SettingOption key={j}
            text={option.text}
            onPress={option.onPress}
          />
        ))}
      </View>
    ))
  )

  return (
    <View style={styles.screen}>
      <ProfileCard
        imgURL={userStore.profileImgURL || ImagesURLs.defaultUserImg}
        title={userStore.name}
      />

      <View style={styles.settings}>
        {settingsList}
      </View>
    </View>
  )
}
export default ProfileSettingsScreen

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    gap: 24,
    padding: 24,
    backgroundColor: Colors.white[0],
  },
  section: {
    width: '100%',
  },
  settings: {
    width: '100%',
    gap: 24,
  },
})
