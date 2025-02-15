import { StyleSheet, View, ScrollView, Image, TouchableOpacity, Text } from 'react-native';
import { Link } from 'expo-router';

const events = [
  {
    id: 1,
    title: 'Manchester United vs Liverpool',
    date: 'Sun, Mar 15 • 8:00 PM',
    venue: 'Old Trafford',
    image: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=800&auto=format&fit=crop&q=60',
    price: 'From $89',
  },
  {
    id: 2,
    title: 'Lakers vs Warriors',
    date: 'Fri, Mar 20 • 7:30 PM',
    venue: 'Crypto.com Arena',
    image: 'https://images.unsplash.com/photo-1504450758481-7338eba7524a?w=800&auto=format&fit=crop&q=60',
    price: 'From $120',
  },
];

export default function EventsScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Upcoming Events</Text>
      {events.map((event) => (
        <Link key={event.id} href={`/event/${event.id}`} asChild>
          <TouchableOpacity style={styles.eventCard}>
            <Image source={{ uri: event.image }} style={styles.eventImage} />
            <View style={styles.eventInfo}>
              <Text style={styles.eventTitle}>{event.title}</Text>
              <Text style={styles.eventDate}>{event.date}</Text>
              <Text style={styles.eventVenue}>{event.venue}</Text>
              <Text style={styles.eventPrice}>{event.price}</Text>
            </View>
          </TouchableOpacity>
        </Link>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    padding: 16,
  },
  eventCard: {
    backgroundColor: '#1E1E1E',
    borderRadius: 12,
    marginHorizontal: 16,
    marginBottom: 16,
    overflow: 'hidden',
  },
  eventImage: {
    width: '100%',
    height: 200,
  },
  eventInfo: {
    padding: 16,
  },
  eventTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
  },
  eventDate: {
    fontSize: 14,
    color: '#2EFF2E',
    marginBottom: 4,
  },
  eventVenue: {
    fontSize: 14,
    color: '#888',
    marginBottom: 8,
  },
  eventPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2EFF2E',
  },
});