import { Route } from 'expo-router/build/Route';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <Router>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/driver" component={Driver} />
      <Route path="/driving" component={Driving} />
      <Route path="/track" component={Track} />
      <Route  path="/register" component={Track} />
    </Router>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
