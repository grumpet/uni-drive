import { View } from 'react-native';
import { getLocales } from 'expo-localization';
import { Link } from 'expo-router';

const deviceLanguage = getLocales()[0].languageCode;

export default function Page() {
  return (
    <div>
    <View>
      <Link href="/about">מי אנחנו</Link>
    </View>

    <View>
        <Link href="/driving">מחפש טרמפ</Link>
    </View>
    
    <View>
        <Link href="/track">אני נהג</Link>
    </View>
    </div>
  
  );
}
