import Button from "@/components/Button"
import Checkbox from "@/components/Checkbox"
import Input from "@/components/Input"
import Logo from "@/components/Logo"
import { StyleSheet, View } from "react-native"
import {
  H1,
  PrimaryText,
  SecondaryText,
  SmallText,
  StrongText,
} from '@/components/Text'
import ImageCard from "@/components/ImageCard"
import ImagesURLs from "@/constants/images-url"
import React from "react"
import { useRouter } from "expo-router"
import { Link } from "expo-router"

const Login: React.FunctionComponent = () => {
  const router = useRouter()

  const [remPassword, setRemPassword] = React.useState<boolean>(false)

  const login = () => {
    router.replace('/')
  }

  return (
    <View style={styles.screen}>
      <Logo />

      <View style={styles.form}>
        <H1>
          Crie sua conta
        </H1>

        <View style={styles.inputs}>
          <Input.Root variant="elevated">
            <Input.Field placeholder="E-mail" />
          </Input.Root>

          <Input.Root variant="elevated">
            <Input.Field placeholder="Senha" />
          </Input.Root>
        </View>

        <View style={styles.passwordOptions}>
          <View style={styles.rememberPasswordContainer}>
            <Checkbox
              checked={remPassword}
              onPress={() => setRemPassword(!remPassword)}
            />

            <PrimaryText>
              Lembre-me
            </PrimaryText>
          </View>
        </View>

        <Button full
          variant="gradient"
          text="Acessar"
          onPress={login}
        />

        <SecondaryText>
          Já tem uma conta?{" "}
          <Link href={'/login'} replace>
            <StrongText>
              Acesse
            </StrongText>
          </Link>
        </SecondaryText>

        <View style={styles.otherLoginOptionsContainer}>
          <SmallText>
            Ou continue com
          </SmallText>

          <View style={styles.otherLoginOptionsCardsContainer}>
            <ImageCard imgURL={ImagesURLs.googleLogo} />
            <ImageCard imgURL={ImagesURLs.facebookLogo} />
          </View>
        </View>
      </View>
    </View>
  )
}
export default Login

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    gap: 80,
  },
  form: {
    width: '100%',
    alignItems: 'center',
    gap: 24,
  },
  inputs: {
    width: '100%',
    gap: 12,
  },
  passwordOptions: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  rememberPasswordContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  otherLoginOptionsContainer: {
    alignItems: 'center',
    gap: 12,
  },
  otherLoginOptionsCardsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 20,
  },
})
