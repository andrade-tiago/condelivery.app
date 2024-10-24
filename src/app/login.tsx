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
  WrongText,
} from '@/components/Text'
import ImageCard from "@/components/ImageCard"
import ImagesURLs from "@/constants/images-url"
import React from "react"
import { useRouter } from "expo-router"
import { Link } from "expo-router"
import useUserStore from "@/store/login"
import { useForm, Controller } from "react-hook-form"
import users from "@/content/users"

type FormData = {
  email: string,
  password: string,
}

const Login: React.FunctionComponent = () => {
  const userStore = useUserStore()
  const router = useRouter()
  const form = useForm<FormData>({
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const [rememberPassword, serRememberPassword] = React.useState<boolean>(false)
  const handleRememberPassword = () => {
    serRememberPassword(state => !state)
  }

  const handleLogin = form.handleSubmit(data => {
    form.clearErrors()

    const user = users.find(user => user.email === data.email)

    if (!user || user.password !== data.password) {
      form.setError('email', {
        message: 'E-mail ou senha incorretos.',
      })
      form.setError('password', {
        message: 'E-mail ou senha incorretos.',
      })
      return
    }
    userStore.setCPF(user.cpf)
    userStore.setEmail(user.email)
    userStore.setName(user.name)
    userStore.setProfileImgURL(user.imgURL)
    userStore.setLogged(true)

    router.replace('/')
  })

  return (
    <View style={styles.screen}>
      <Logo />

      <View style={styles.form}>
        <H1>
          Acesse sua conta
        </H1>

        <View style={styles.inputs}>
          <View style={styles.inputGroup}>
            <Input.Root variant="elevated">
              <Controller
                name="email"
                control={form.control}
                render={({ field }) => (
                  <Input.Field
                    placeholder="E-mail"
                    onChangeText={field.onChange}
                    onBlur={field.onBlur}
                    value={field.value}
                  />
                )}
              />  
            </Input.Root>

            {form.formState.errors.email && (
              <WrongText>
                {form.formState.errors.email.message}
              </WrongText>
            )}
          </View>

          <View style={styles.inputGroup}>
            <Input.Root variant="elevated">
              <Controller
                name="password"
                control={form.control}
                render={({ field }) => (
                  <Input.Field
                    placeholder="Senha"
                    onChangeText={field.onChange}
                    onBlur={field.onBlur}
                    value={field.value}
                  />
                )}
              />  
            </Input.Root>

            {form.formState.errors.password && (
              <WrongText>
                {form.formState.errors.password.message}
              </WrongText>
            )}
          </View>
        </View>

        <View style={styles.passwordOptions}>
          <PrimaryText>
            Esqueci minha senha
          </PrimaryText>

          <View style={styles.rememberPasswordContainer}>
            <Checkbox
              checked={rememberPassword}
              onPress={handleRememberPassword}
            />

            <PrimaryText>
              Lembre-me
            </PrimaryText>
          </View>
        </View>

        <Button full
          variant="gradient"
          text="Acessar"
          onPress={handleLogin}
        />

        <SecondaryText>
          Ainda não tem uma conta?{" "}
          <Link href={'/register'} replace>
            <StrongText>
              Cadastre-se
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
  inputGroup: {
    width: '100%',
    gap: 8,
  },
  passwordOptions: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
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
