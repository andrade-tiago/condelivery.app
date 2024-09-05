import Colors from '@/constants/colors'
import { View, StyleSheet, Image, Text } from 'react-native'
import Button from '@/components/Button'
import GlobalButtonProps from '@/types/global-button-props'

type CardButtonProps = Omit<GlobalButtonProps, 'full' | 'icon'>

type CardProps = {
  title: string,
  subtitle: string, 
  leftText: string,
  imgURL?: string,
  buttons?: CardButtonProps[],
}

const Card: React.FunctionComponent<CardProps> = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        {props.imgURL && (
          <View style={styles.imgContainer}>
            <Image
              source={{ uri: props.imgURL }}
              style={styles.img}
              resizeMode="cover"
            />
          </View>
        )}

        <View style={styles.infoContainer}>
          <Text style={styles.subtitle}>
            {props.subtitle}
          </Text>
          <Text style={styles.title}>
            {props.title}
          </Text>
        </View>

        <Text style={styles.leftText}>
          {props.leftText}
        </Text>
      </View>

      {props.buttons && (
        <View style={styles.row}>
          {props.buttons.map((button, i) => (
            <Button key={i}
              variant="white"
              {...button}
            />
          ))}
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
    backgroundColor: Colors.white,
    elevation: 4,
  },
  row: {
    width: '100%',
    flexDirection: 'row',
    gap: 16,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  imgContainer: {
    width: 60,
    height: 60,
    borderRadius: 6,
    overflow: 'hidden',
    elevation: 4,
  },
  img: {
    flex: 1,
  },
  infoContainer: {
    flex: 1,
    justifyContent: 'center',
    gap: 4,
  },
  subtitle: {
    fontSize: 14,
    fontWeight: '400',
    color: Colors.gray,
  },
  title: {
    fontSize: 16,
    fontWeight: '400',
    color: Colors.black,
  },
  leftText: {
    fontSize: 16,
    fontWeight: '400',
    color: Colors.orange,
  }
})