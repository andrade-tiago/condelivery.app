import Button from "@/components/Button"
import Input from "@/components/Input"
import ProfileCard from "@/components/ProfileCard"
import Colors from "@/constants/colors"
import profile from "@/content/profile"
import { cpfFormat } from "@/utils/cpf"
import React from "react"
import { StyleSheet, View } from "react-native"

const ProfileEditSettings: React.FunctionComponent = () => {
  const userData = profile

  const cpfText = cpfFormat(userData.cpf)

  return (
    <View style={styles.screen}>
      <ProfileCard
        imgURL={profile.imgURL}
        title={profile.name}
      />

      <View style={styles.inputs}>
        <Input.Root variant="elevated">
          <Input.Field
            placeholder={profile.name}
          />
        </Input.Root>

        <Input.Root variant="elevated">
          <Input.Field
            placeholder={cpfText}
            readOnly
          />
        </Input.Root>

        <Input.Root variant="elevated">
          <Input.Field
            placeholder={profile.email}
            readOnly
          />
        </Input.Root>

        <Input.Root variant="elevated">
          <Input.Field
            placeholder="Senha antiga"
          />
        </Input.Root>

        <Input.Root variant="elevated">
          <Input.Field
            placeholder="Nova senha"
          />
        </Input.Root>
      </View>

      <Button full
        variant="gradient"
        text="Atualizar"
      />
    </View>
  )
}
export default ProfileEditSettings

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    gap: 24,
    padding: 24,
    backgroundColor: Colors.white[0],
  },
  inputs: {
    width: '100%',
    gap: 12,
  }
})
