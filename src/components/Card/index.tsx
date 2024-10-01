import Colors from '@/constants/colors'
import { View, StyleSheet, GestureResponderEvent } from 'react-native'
import ImageCard from '../ImageCard'
import { PrimaryText, SecondaryText, StrongText } from '../Text'
import Button from '../Button'

export type CardButtonProps = {
  text: string,
  onPress?: (event: GestureResponderEvent) => void,
}

export type CardProps = {
  title: string,
  subtitle: string,

  leftText?: string,
  imgURL?: string,
  buttons?: CardButtonProps[],
  items?: string[],
}

const Card: React.FunctionComponent<CardProps> = (props) => {
  const buttons = props.buttons?.map((props, i) => {
    return <Button key={i} variant='white' {...props} />
  })

  const items = props.items?.map((text, i) => {
    return <SecondaryText key={i} children={text} />
  })

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {props.imgURL && (
          <ImageCard imgURL={props.imgURL} />
        )}

        <View style={styles.infoContainer}>
          <SecondaryText>
            {props.subtitle}
          </SecondaryText>

          <PrimaryText>
            {props.title}
          </PrimaryText>
        </View>
        
        {props.leftText && (
          <StrongText>
            {props.leftText}
          </StrongText>
        )}
      </View>

      {props.items && (
        <View style={styles.items}>
          {items}
        </View>
      )}

      {props.buttons && (
        <View style={styles.buttons}>
          {buttons}
        </View>
      )}
    </View>
  )
}
export default Card

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderRadius: 6,
    padding: 16,
    gap: 24,
    backgroundColor: Colors.white[0],
    elevation: 4,
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    gap: 16,
    alignItems: 'center',
  },
  infoContainer: {
    flex: 1,
    justifyContent: 'center',
    gap: 4,
  },
  items: {
    width: '100%',
    gap: 8,
  },
  buttons: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: 24,
  },
})
