import { useLocalSearchParams } from 'expo-router';
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Link } from 'expo-router';

const events = {
  1: {
    id: 1,
    title: 'Manchester United vs Liverpool',
    date: 'Sun, Mar 15 • 8:00 PM',
    venue: 'Old Trafford',
    image: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=800&auto=format&fit=crop&q=60',
    price: 'From $89',
    description: 'One of the biggest rivalries in football history continues as Manchester United faces Liverpool in this Premier League clash.',
  },
  2: {
    id: 2,
    title: 'Lakers vs Warriors',
    date: 'Fri, Mar 20 • 7:30 PM',
    venue: 'Crypto.com Arena',
    image: 'https://images.unsplash.com/photo-1504450758481-7338eba7524a?w=800&auto=format&fit=crop&q=60',
    price: 'From $120',
    description: 'Watch the Lakers take on the Warriors in this exciting NBA regular season matchup.',
  },
};

export default function EventDetails() {
  const { id } = useLocalSearchParams();
  const event = events[Number(id)];

  if (!event) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Event not found</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: event.image }} style={styles.eventImage} />
      <View style={styles.content}>
        <Text style={styles.title}>{event.title}</Text>
        <Text style={styles.date}>{event.date}</Text>
        <Text style={styles.venue}>{event.venue}</Text>
        <Text style={styles.description}>{event.description}</Text>
        <Text style={styles.price}>{event.price}</Text>
        
        <Link href={`/seats/${id}`} asChild>
          <TouchableOpacity style={styles.bookButton}>
            <Text style={styles.bookButtonText}>Book Now</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  eventImage: {
    width: '100%',
    height: 300,
  },
  content: {
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
  },
  date: {
    fontSize: 16,
    color: '#2EFF2E',
    marginBottom: 4,
  },
  venue: {
    fontSize: 16,
    color: '#888',
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 16,
    lineHeight: 24,
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2EFF2E',
    marginBottom: 24,
  },
  bookButton: {
    backgroundColor: '#2EFF2E',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  bookButtonText: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
  },
  errorText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
    marginTop: 24,
  },
});