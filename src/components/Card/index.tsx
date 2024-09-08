import Colors from '@/constants/colors'
import { View, StyleSheet, Image, Text } from 'react-native'
import { ReactNode } from 'react'

type CardProps = {
  title?: string,
  subtitle?: string,
  leftContent?: ReactNode,
  imgURL?: string,
  bottomContent?: ReactNode,
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
          {props.subtitle && (
            <Text style={styles.subtitle}>
              {props.subtitle}
            </Text>
          )}
          {props.title && (
            <Text style={styles.title}>
              {props.title}
            </Text>
          )}
        </View>
        
        {props.leftContent && (
          <View>
            {props.leftContent}
          </View>
        )}
      </View>

      {props.bottomContent && (
        <View style={{ width: '100%', borderWidth: 1 }}>
          {props.bottomContent}
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
  row: {
    width: '100%',
    flexDirection: 'row',
    gap: 16,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  imgContainer: {
    width: 60,
    aspectRatio: 1 / 1,
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
    color: Colors.neutral[600],
  },
  title: {
    fontSize: 16,
    fontWeight: '400',
    color: Colors.black[900],
  },
  leftText: {
    fontSize: 16,
    fontWeight: '400',
    color: Colors.primary[300],
  },
})
